/*
下载地址，微信打开;https://app-connect.jk-tt.com/v166/html/jkttInviteFriends.html?path=invite&inviteCode=ELB156408&sourceType=3
登录后 点我的 账号安全 设置密码

变量
export jktthd='手机号&密码'
多号@或换行

每天一次就可以。

*/
const $ = new Env('健康头条');
const axios = require('axios');
let request = require("request");
const JSEncrypt = require('node-jsencrypt');
var CryptoJS = require("crypto-js");
request = request.defaults({
    jar: true
});
const {
    log
} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0

let jktthd = ($.isNode() ? process.env.jktthd : $.getdata("jktthd")) || ""
let jktthdArr = [];
let data = '';
let msg = '';
var hours = new Date().getMonth();

var timestamp = Math.round(new Date().getTime()).toString();
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs()))
            return;
        else {

            log(`\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000).toLocaleString()} \n=============================================\n`);



            log(`\n============ 微信公众号：柠檬玩机交流 ============`)
            log(`\n=================== 共找到 ${jktthdArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${jktthdArr}`);
            }
            for (let index = 0; index < jktthdArr.length; index++) {

                let num = index + 1
                addNotifyStr(`\n==== 开始【第 ${num} 个账号】====\n`, true)

                jktthd = jktthdArr[index];  
                usname = jktthd.split('&')[0]
                uspass = jktthd.split('&')[1]          
               

                  



                log('====登录====')
                await Userlogin(usname,uspass)
                log('====信息====')                
                await reqget('user/headlineUser/appUserDetailInfo?id='+userid+'&otherUserId='+userid,'id='+userid+'&otherUserId='+userid)
//签到          
                if(res)
                log('积分：'+'【'+res.data.goldNum+'】'); 
                log('====签到====')                
                await reqpost('gold/signFresh/add','','{}')
                //easyId=763075315989700608&taskIndicatorsName=分享文章&userId=156249&timestamp=1671189573439&key=JQz80G8xBQblioVgpD7kYbNWEmRgFpCi
//分享            
                log('====分享====')      
                body = {"easyId":"763075315989700608","taskIndicatorsName":"分享文章","userId":userid}
               
                await reqpost('countdata/commonjob/finshJob','easyId=763075315989700608&taskIndicatorsName=分享文章&userId='+userid+'&',body)
//阅读文章     
                log('====阅读====') 
                await reqget('article/recommendchosen/getlist?channelId=2','channelId=2')
                if(res)
                list = res.data
                for(let i=0;i<list.length;i++){

                body = {"duration":3,"essayId":list[i].essayId,"imei":"99b360fcf04b0f91","isTask":1,"notifyId":"","platform":0,"rate":0,"type":1,"userId":userid,"userName":username}
                await reqpost('comment/comment/readEssay',th(body),body)
                body = {"duration":1,"essayId":list[i].essayId,"imei":"99b360fcf04b0f91","isTask":0,"notifyId":"","platform":0,"rate":0,"type":1,"userId":userid,"userName":username}
                await reqpost('comment/comment/readEssay',th(body),body) 

                }

                                              
//评论    
                log('====评论====')            
                body = {"essayId":"763075315989700608","emoticonUrl":"","essayContent":"%E5%B0%8F%E5%B0%8F%E7%BB%B4%E7%94%9F%E7%B4%A0D%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%B2%BB%E7%96%97%E5%81%8F%E5%A4%B4%E7%97%9B%EF%BC%9F","comment":"666666666"}
                await reqpost('comment/comment/essayComment','comment=666666666&emoticonUrl=&essayContent=%E5%B0%8F%E5%B0%8F%E7%BB%B4%E7%94%9F%E7%B4%A0D%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%B2%BB%E7%96%97%E5%81%8F%E5%A4%B4%E7%97%9B%EF%BC%9F&essayId=763075315989700608&',body)
                body = {"essayId":"753773095680909312","emoticonUrl":"","essayContent":"%E5%87%A4%E5%87%B0%E7%94%B7%E6%9C%88%E8%96%AA3%E4%B8%87%EF%BC%8C%E5%9B%9E%E8%80%81%E5%AE%B6%E5%A9%86%E5%A9%86%E6%80%BB%E8%AE%A9%E5%B8%A6%E5%90%83%E5%96%9D%E8%B5%B0%EF%BC%8C%E4%BA%8B%E5%90%8E%E5%84%BF%E5%AA%B3%E6%89%8D%E7%9F%A5%E5%A9%86%E5%A9%86%E9%AB%98%E6%98%8E","comment":"666666666"}
                await reqpost('comment/comment/essayComment','comment=666666666&emoticonUrl=&essayContent=%E5%87%A4%E5%87%B0%E7%94%B7%E6%9C%88%E8%96%AA3%E4%B8%87%EF%BC%8C%E5%9B%9E%E8%80%81%E5%AE%B6%E5%A9%86%E5%A9%86%E6%80%BB%E8%AE%A9%E5%B8%A6%E5%90%83%E5%96%9D%E8%B5%B0%EF%BC%8C%E4%BA%8B%E5%90%8E%E5%84%BF%E5%AA%B3%E6%89%8D%E7%9F%A5%E5%A9%86%E5%A9%86%E9%AB%98%E6%98%8E&essayId=753773095680909312&',body)                
                body = {"essayId":"763135042319314944","emoticonUrl":"","essayContent":"%E6%83%B3%E8%A6%81%E5%85%BB%E8%82%BA%EF%BC%8C%E5%BB%BA%E8%AE%AE%E5%A4%9A%E5%90%83%E8%BF%993%E7%A7%8D%E7%99%BD%E8%89%B2%E9%A3%9F%E5%93%81%EF%BC%8C%E4%B8%8D%E5%A6%A8%E5%8F%82%E8%80%83%E4%B8%8B","comment":"666666666"}
                await reqpost('comment/comment/essayComment','comment=666666666&emoticonUrl=&essayContent=%E6%83%B3%E8%A6%81%E5%85%BB%E8%82%BA%EF%BC%8C%E5%BB%BA%E8%AE%AE%E5%A4%9A%E5%90%83%E8%BF%993%E7%A7%8D%E7%99%BD%E8%89%B2%E9%A3%9F%E5%93%81%EF%BC%8C%E4%B8%8D%E5%A6%A8%E5%8F%82%E8%80%83%E4%B8%8B&essayId=763135042319314944&',body)                
//点赞  
                log('====点赞====') 
                await reqget('article/recommendchosen/getlist?channelId=2','channelId=2')
                if(res)
                list = res.data
                for(let i=0;i<list.length;i++){
                body = {"id":list[i].essayId,"status":"1","type":"0","isVisitor":0}
                await reqpost('comment/comment/like','id='+list[i].essayId+'&isVisitor=0&status=1&type=0&',body)

                }

                                                                
//观看视频   
                log('====观看视频====')     
               body = {"firstChannelId":"-1","firstChannelName":"视频","pageNum":"1","pageSize":"16","imei":"99b360fcf04b0f91","userPageSize":20,"deviceType":2}
               await reqpost('search/search/getRecommendData2','deviceType=2&firstChannelId=-1&firstChannelName=视频&imei=99b360fcf04b0f91&pageNum=1&pageSize=16&userPageSize=20&',body)
               if(res)
                list = res.data.essayInfoPageInfo
                for(let i=0;i<list.length;i++){
                body = {"duration":5,"essayId":list[i].id,"imei":"99b360fcf04b0f91","isTask":1,"platform":0,"rate":6,"type":1,"userId":userid,"userName":username}
                await reqpost('comment/comment/readEssay',th(body),body)
                body = {"duration":1,"essayId":list[i].id,"imei":"99b360fcf04b0f91","isTask":0,"platform":0,"rate":6,"type":1,"userId":userid,"userName":username}
                await reqpost('comment/comment/readEssay',th(body),body) 
                 
                }
                 log('====观看小视频====')  
//观看小视频    
               body = {"firstChannelId":"-2","firstChannelName":"小视频","pageNum":"1","pageSize":"16","imei":"99b360fcf04b0f91","userPageSize":20,"deviceType":2}
               await reqpost('search/search/getRecommendData2','deviceType=2&firstChannelId=-2&firstChannelName=小视频&imei=99b360fcf04b0f91&pageNum=1&pageSize=16&userPageSize=20&',body)
               if(res)
                list = res.data.essayInfoPageInfo
                for(let i=0;i<list.length;i++){
                body = {"duration":5,"essayId":list[i].id,"imei":"99b360fcf04b0f91","isTask":1,"platform":0,"rate":6,"type":1,"userId":userid,"userName":username}             
                await reqpost('comment/comment/readEssay',th(body),body)
                body = {"duration":1,"essayId":list[i].id,"imei":"99b360fcf04b0f91","isTask":0,"platform":0,"rate":6,"type":1,"userId":userid,"userName":username}             
                await reqpost('comment/comment/readEssay',th(body),body)   
                
                }
                log('====信息====')  
                await reqget('user/headlineUser/appUserDetailInfo?id='+userid+'&otherUserId='+userid,'id='+userid+'&otherUserId='+userid)
                 if(res)
                
                log('积分：'+'【'+res.data.goldNum+'】');  
                         
                }
            await SendMsg('\n积分：'+'【'+res.data.goldNum+'】');
        }
    }
})()
.catch((e) => log(e))
    .finally(() => $.done())
     function th(newUrl){
                 newUrl = JSON.stringify(newUrl)
                 newUrl = newUrl.replace(/({")/g,'')
                 newUrl = newUrl.replace(/("})/g,'')
                 newUrl = newUrl.replace(/":/g,'=')
                 newUrl = newUrl.replace(/,"/g,'&')
                 newUrl = newUrl.replace(/"/g,'')
                 newUrl = newUrl+'&'
                 //log(newUrl)
                 return newUrl

    }
    
async function Userlogin(phone,password) {
    return new Promise((resolve) => {
    const jsencrypt = new JSEncrypt(); 
var key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDw+wNooY7q/TYivTuy9q1K+ePkCtbmJKZvf8u8cGQHI6WeMDRpPv4LHc1HSnN8oqkiHXwJSgo3KD2T7MYLjUYlNyv65pWj0zdZAqisERr9bvmxewOnYVyhq5d8guBU7OfurhVUqESruiufTQiTpShriwhY9d6PVqjJ62jOYiQN4QIDAQAB";
jsencrypt.setPublicKey(key);
var result_encrypt = jsencrypt.encrypt(password);  
sign= SHA1_Encrypt('password='+result_encrypt+'&phoneNumber='+phone+'&platform=&timestamp='+timestamp+'&key=JQz80G8xBQblioVgpD7kYbNWEmRgFpCi').toUpperCase()        
var options = {
  method: 'POST',
  url: 'https://app-connect.jk-tt.com/user/headlineLogin/login',
  headers: {
    'timestamp': timestamp,
    'Authorization': '',
    'systemType': 'ANDROID',
    'deviceType': 'OPPO#Reno',
    'deviceId': '',
    'osVersion': '10',
    'versionName': '1.6.8',
    'ssid': '24dfde6643f4471798fdee98e339a85f',
    'operator': '%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A',
    'channel': 'qd2021011204',
    'sign': sign,
    'Content-Type': 'application/json; charset=UTF-8',
    'Host': 'app-connect.jk-tt.com',
    'Connection': 'Keep-Alive',
    'User-Agent': 'okhttp/3.12.13',
    //'Accept-Encoding': 'gzip, deflate',
   // 'content-type': 'application/json'
  },
  data: {
    password: result_encrypt,
    phoneNumber: phone,
    platform: ''
  }
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                 data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                   
                }
                if (data.status == 0) {
                token = data.data.token
                //log(token);
                username = data.data.userInfo.userName
                log('叼毛：'+'【'+username+'】');  
                userid = data.data.userInfo.id
                log('ID：'+'【'+userid+'】');                                
                } else 
                    log(data.msg);

                    
                
            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

} 

async function reqget(api,params) {
    return new Promise((resolve) => {

sign= SHA1_Encrypt(params+'&timestamp='+timestamp+'&key=JQz80G8xBQblioVgpD7kYbNWEmRgFpCi').toUpperCase()        
var options = {
  method: 'GET',
  url: 'https://app-connect.jk-tt.com/'+api,
  headers: {
    'timestamp': timestamp,
    'Authorization': token,
    'systemType': 'ANDROID',
    'deviceType': 'OPPO#Reno',
    'deviceId': '',
    'osVersion': '10',
    'versionName': '1.6.8',
    'ssid': '24dfde6643f4471798fdee98e339a85f',
    'operator': '%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A',
    'channel': 'qd2021011204',
    'sign': sign,
    'Content-Type': 'application/json; charset=UTF-8',
    'Host': 'app-connect.jk-tt.com',
    'Connection': 'Keep-Alive',
    'User-Agent': 'okhttp/3.12.13',

  },

};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                 data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                   
                }
                if (data.status == 0) {
                res = data
                
                             
                } else 
                    log(data.msg);

                    
                
            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function reqpost(api,params,body) {
    return new Promise((resolve) => {

sign= SHA1_Encrypt(params+'timestamp='+timestamp+'&key=JQz80G8xBQblioVgpD7kYbNWEmRgFpCi').toUpperCase()   
    
var options = {
  method: 'POST',
  url: 'https://app-connect.jk-tt.com/'+api,
  headers: {
    'timestamp': timestamp,
    'Authorization': token,
    'systemType': 'ANDROID',
    'deviceType': 'OPPO#Reno',
    'deviceId': '',
    'osVersion': '10',
    'versionName': '1.6.8',
    'ssid': '24dfde6643f4471798fdee98e339a85f',
    'operator': '%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A',
    'channel': 'qd2021011204',
    'sign': sign,
    'Content-Type': 'application/json; charset=UTF-8',
    'Host': 'app-connect.jk-tt.com',
    'Connection': 'Keep-Alive',
    'User-Agent': 'okhttp/3.12.13',

  },
data:body
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                 data = response.data;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                   
                }
                if (data.status == 0) {
                res = data 
                log(data.msg);
                             
                } else 
                    log(data.msg);

                    
                
            } catch (e) {
                log(`异常：${data}，原因：${data.msg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function Envs() {
    if (jktthd) {
        if (jktthd.indexOf("@") != -1) {
            jktthd.split("@").forEach((item) => {

                jktthdArr.push(item);
            });
        } else if (jktthd.indexOf("\n") != -1) {
            jktthd.split("\n").forEach((item) => {
                jktthdArr.push(item);
            });
        } else {
            jktthdArr.push(jktthd);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 jktthd`)
        return;
    }

    return true;
}
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${str}\n`)
    }
    msg += `${str}\n`
}
function SHA1_Encrypt(word) {
    return CryptoJS.SHA1(word).toString();
}
// ============================================发送消息============================================ \\
async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        log(message);
    }
}
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
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

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
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
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
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
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}   