/*
酷狗音乐

捉包填到kgyyCookie，多账户换行或者@隔开
格式：token=xxxx&userid=12345678&openid=xxxxs
openid提现用，微信登录或者设置提现账号就会出现。非必须，没捉到就删掉

需要实名才能提现的，一个身份证貌似实名最多2个号可以正常提现，只实名1个比较稳
一天大概一块多到两块吧，没算过

定时一天至少81次
0-59/12 0,6-23 * * *
*/
const jsname = '酷狗音乐'
const $ = new Env(jsname);

let envSplitor = ['\n','@']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.kgyyCookie : $.getdata('kgyyCookie')) || ''; //CK
let withdrawTime = ($.isNode() ? process.env.kgWithdrawTime : $.getdata('kgWithdrawTime')) || 8; //提现时间
let userList = []

let userIdx = 0
let userCount = 0

let charsetNum = '0123456789'
let charsetAlp = 'qwertyuiopasdfghjklzxcvbnm'
let charsetAlpCap = 'QWERTYUIOPASDFGHJKLZXCVBNM'
let charsetHex = '0123456789abcdef'

let appid = 1005
let clientver = 11153
let from = 'client'
let md5Salt = 'OIlwieks28dk2k092lksi2UIkp'
let TASK_WAIT_TIME = 300
let DOUBLE_WAIT_TIME = 1500

let nowHour = (new Date()).getHours()

let taskList = [1105,1108,1,6,9,11,20,21,22,23,24,25,26,27,28,29,30,31,34,35,36,37,38,39,40,41,42,43,45,46,47,1101,1102,1103,1104,1106,1107]
///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        this.name = this.index
        this.valid = false
        
        this.param = $.str2json(str)
        this.param.dfid = $.randomString(24,charsetNum+charsetAlp+charsetAlpCap)
        this.param.uuid = $.randomString(32)
        this.param.mid = $.randomString(39,charsetNum)
        this.tasks = []
        this.needSign = false
        this.needLotteryVedio = false
        this.meals = []
        this.withdrawFlag = this.param.withdraw || 1
        this.withdrawSucc = false
        this.hasRealnameAuth = true
    }
    
    getParam() {
        let ret = {
            appid: appid,
            dfid: this.param.dfid || '',
            clienttime: Math.floor((new Date()).getTime()/1000),
            clientver: clientver,
            from: from,
            mid: this.param.mid || '',
            token: this.param.token || '',
            userid: this.param.userid || '',
            uuid: this.param.uuid || '',
        }
        return ret;
    }
    
    async getUserInfo() {
        try {
            let body = ``
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/user/info?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                this.valid = true;
                this.name = result.data.base.nickname
                this.coin = result.data.account.balance_coins
                console.log(`昵称：${this.name}`)
                console.log(`金币：${this.coin}`)
            } else {
                console.log(`查询账户失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getTaskList() {
        try {
            let body = `{}`
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/system/infos?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                let nowtime = Math.floor(Date.now()/1000)
                for(let task of result.data.tasks) {
                    let doflag = task.state.state==0
                    let taskStr = `${task.profile.name}[id=${task.profile.taskid}] ${task.state.done_count}/${task.state.max_done_count}，${task.state.state==0?'未':'已'}完成`
                    if(doflag) {
                        if(task.profile.name.indexOf('每日签到')>-1) {
                            this.needSign = true
                        } else if(task.profile.name.indexOf('定时领取金币')>-1) {
                            if(task.state.next_award_time && nowtime < task.state.next_award_time) {
                                taskStr += `，冷却还有${task.state.next_award_time-nowtime}秒`
                            } else {
                                this.tasks.push({task:task, mealId:''})
                            }
                        } else if(task.profile.name.indexOf('吃饭补贴')>-1) {
                            for(let item of task.state.meals) {
                                if(item.state == 0 && nowtime >= item.start_time) {
                                    this.tasks.push({task:task, mealId:item.id})
                                }
                            }
                            if(this.meals.length == 0) {
                                taskStr += `，未到吃饭补贴时间`
                            }
                        } else if(task.profile.name.indexOf('实名认证')>-1) {
                            this.tasks.push({task:task, mealId:''})
                            this.hasRealnameAuth = false
                        } else if(task.profile.name.indexOf('抽奖活动')>-1) {
                            this.tasks.push({task:task, mealId:''})
                            if(task.state.lottery && task.state.lottery.chances == 0) {
                                this.needLotteryVedio = true
                            }
                        } else {
                            this.tasks.push({task:task, mealId:''})
                        }
                    }
                    console.log(taskStr)
                }
            } else {
                console.log(`查询任务列表失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getTaskListProfile() {
        try {
            let body = `{"user_label":{}}`
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/system/profile?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                for(let task of result.data.task) {
                    if(task.open == 1) await this.getTaskInfo(task.taskid);
                }
            } else {
                console.log(`查询任务列表失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async signon(doubleCode='') {
        try {
            let nowtime = $.time('yyyyMMdd');
            let bodyParam = {'code':nowtime}
            if(doubleCode) {
                bodyParam['double_code'] = doubleCode
                bodyParam['double_award_type'] = 1
            }
            let body = JSON.stringify(bodyParam)
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/task/signon?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                let doubleStr = ''
                if(result.data.double_awards) doubleStr = `，可看视频额外获得${result.data.double_awards.coins}狗狗币`
                if(doubleCode) {
                    console.log(`看签到翻倍视频获得${result.data.awards.coins}狗狗币${doubleStr}`)
                } else {
                    console.log(`签到获得${result.data.awards.coins}狗狗币${doubleStr}`)
                }
                if(result.data.double_awards && result.data.double_code) {
                    await $.wait(DOUBLE_WAIT_TIME);
                    await this.signon(result.data.double_code);
                }
            } else {
                console.log(`完成任务[${taskid}]失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async submitTask(task,doubleCode,mealId='') {
        try {
            let bodyParam = {'taskid':task.profile.taskid}
            if(mealId) bodyParam['meal_id'] = mealId
            if(doubleCode) bodyParam['double_code'] = doubleCode
            let body = JSON.stringify(bodyParam)
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            let taskStr = task.profile.name
            if(doubleCode) taskStr += '翻倍视频'
            if(result.errcode==0) {
                let doubleStr = ''
                if(result.data.double_awards) doubleStr = `，可看视频额外获得${result.data.double_awards.coins}狗狗币`
                console.log(`领取[${taskStr}]奖励获得${result.data.awards.coins}狗狗币${doubleStr}`)
                if(result.data.double_awards && result.data.double_code) {
                    await $.wait(DOUBLE_WAIT_TIME);
                    await this.submitTask(task,result.data.double_code,mealId);
                }
            } else {
                console.log(`领取[${taskStr}]奖励失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async getTaskInfo(taskid) {
        try {
            let bodyParam = {'taskid':taskid}
            let body = JSON.stringify(bodyParam)
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/task/info?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                if(!result.data.state) return;
                let nowtime = Math.floor(Date.now()/1000)
                let doflag = result.data.state.state==0
                let taskStr = `${result.data.profile.name}[id=${result.data.profile.taskid}] ${result.data.state.done_count}/${result.data.state.max_done_count}，${result.data.state.state==0?'未':'已'}完成`
                if(doflag) {
                    if(result.data.profile.name.indexOf('每日签到')>-1) {
                        this.needSign = true
                    } else if(result.data.profile.name.indexOf('定时领取金币')>-1) {
                        if(result.data.state.next_award_time && nowtime < result.data.state.next_award_time) {
                            taskStr += `，冷却还有${result.data.state.next_award_time-nowtime}秒`
                        } else {
                            this.tasks.push({task:result.data, mealId:''})
                        }
                    } else if(result.data.profile.name.indexOf('吃饭补贴')>-1) {
                        for(let item of result.data.state.meals) {
                            if(item.state == 0 && nowtime >= item.start_time) {
                                this.tasks.push({task:result.data, mealId:item.id})
                            }
                        }
                        if(this.meals.length == 0) {
                            taskStr += `，未到吃饭补贴时间`
                        }
                    } else if(result.data.state.lottery) {
                        //跳过抽奖任务
                    } else {
                        this.tasks.push({task:result.data, mealId:''})
                    }
                }
                console.log(taskStr)
            } else {
                console.log(`查询任务[${taskid}]失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async lotteryExchange() {
        try {
            let body = `{"way":"ad"}`
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/lottery/exchange?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                console.log(`看视频获取抽奖次数成功`)
            } else {
                console.log(`看视频获取抽奖次数失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async lotteryExchange() {
        try {
            let body = `{"way":"ad"}`
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/lottery/exchange?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                console.log(`看视频获取抽奖次数成功`)
            } else {
                console.log(`看视频获取抽奖次数失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async withdrawLevels() {
        try {
            let body = ``
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/levels?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                let withdrawList = result.data.list.sort(function(a,b) {return b.coins-a.coins})
                for(let item of withdrawList) {
                    if(this.coin < item.coins) continue;
                    await this.withdraw(item);
                    if(this.withdrawSucc) break;
                }
            } else {
                console.log(`查询提现列表失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async withdraw(item) {
        try {
            let bodyParam = {
                'coins': item.coins,
                'nickname': encodeURIComponent(this.name),
                'openid': this.param.openid,
                'total_fee': item.coins/100,
                //'channel': 3,
            }
            let body = JSON.stringify(bodyParam)
            let param = this.getParam()
            let preStr = $.json2str(param,'')
            param.signature = MD5Encrypt(`${md5Salt}${preStr}${body}${md5Salt}`)
            let urlStr = $.json2str(param,'&')
            let url = `https://gateway.kugou.com/mstc/musicsymbol/v1/withdraw/apply?${urlStr}`
            let urlObject = populateUrlObject(url,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.errcode==0) {
                this.withdrawSucc = true
                $.logAndNotify(`账号[${this.name}]提现${item.coins/10000}元成功`)
            } else {
                console.log(`账号[${this.name}]提现${item.coins/10000}元失败: ${result.error}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async userTask() {
        console.log(`\n============= 账号[${this.index}] =============`)
        await this.getUserInfo();
        if(!this.valid) return;
        console.log(`\n----------- 任务列表 -----------`)
        await this.getTaskList();
        //await this.getTaskListProfile();
        if(this.needSign) {
            console.log(`\n----------- 签到 -----------`)
            await $.wait(TASK_WAIT_TIME);
            await this.signon();
        }
        if(this.needLotteryVedio) {
            console.log(`\n----------- 抽奖视频 -----------`)
            await $.wait(TASK_WAIT_TIME);
            await this.lotteryExchange();
        }
        if(this.tasks.length > 0) {
            console.log(`\n----------- 做任务 -----------`)
            for(let item of this.tasks) {
                await $.wait(TASK_WAIT_TIME);
                await this.submitTask(item.task,'',item.mealId);
            }
        }
        console.log(`\n----------- 提现 -----------`)
        if(this.withdrawFlag == 0) {
            console.log(`账号${this.index}[${this.name}]当前设置了不提现`)
        } else if(!this.param.openid) {
            console.log(`账号${this.index}[${this.name}]缺少参数openid，无法提现`)
        } else if(!this.hasRealnameAuth) {
            console.log(`账号${this.index}[${this.name}]未完成实名认证，无法提现`)
        } else {
            if(nowHour == withdrawTime) {
                await this.withdrawLevels();
            } else {
                console.log(`非提现时间，现在的设置为每天${withdrawTime}点提现`)
            }
        }
    }
}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
        //let nowtime = $.time('yyyy-MM-dd hh:mm:ss');
        //console.log(nowtime);
        
        if(!(await checkEnv())) return;
        
        for(let user of userList) {
            await user.userTask();
        }
        
        await $.showmsg();
    }
})()
.catch((e) => console.log(e))
.finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if($request.url.indexOf(`job/listJob.json`) > -1) {
        let ck = $request.url.split('sessionId=')[1]
        
        if(userCookie) {
            if(userCookie.indexOf(ck) == -1) {
                userCookie = userCookie + '@' + ck
                $.setdata(userCookie, 'jjyCookie');
                ckList = userCookie.split('@')
                $.msg(jsname+` 获取第${ckList.length}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, 'jjyCookie');
            $.msg(jsname+` 获取第1个ck成功: ${ck}`)
        }
    }
}

async function checkEnv() {
    if(userCookie) {
        let splitor = envSplitor[0];
        for(let sp of envSplitor) {
            if(userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for(let userCookies of userCookie.split(splitor)) {
            if(userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.length
    } else {
        console.log('未找到CK')
        return;
    }
    
    console.log(`共找到${userCount}个账号`)
    return true
}

////////////////////////////////////////////////////////////////////
function populateUrlObject(url,body=''){
    let host = url.replace('//','/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Host': host,
            'Connection': 'keep-alive',
        },
        timeout: 5000,
    }
    if(body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] =  'application/json; charset=utf-8'
        urlObject.headers['Content-Length'] = urlObject.body ? urlObject.body.length : 0
    }
    return urlObject;
}

async function httpRequest(method,url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                } else {
                    if(resp.body) {
                        if(typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {}
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

////////////////////////////////////////////////////////////////////
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            elses = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}
