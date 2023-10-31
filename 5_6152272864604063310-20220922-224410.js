
/*
羊了个羊群 资金盘 不要投资

(抓header里面的unionid和token的值)

格式  unionid#token
例如  oEgG85#123456

ck填到yqCookie里，多账号 换行 或者@隔开
*/

const $ = new Env("羊群");
let envSplitor = ['@','\n']
let httpResult, httpReq, httpResp
let ckName = 'yqCookie'
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || '';

let userList = []
let userIdx=0
let userCount = 0

///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        try {
            this.ck = str.split('#')
            this.u=this.ck[0]
            this.t=this.ck[1]
        } catch (e) {
        }
    }


    async getuseinfo() {
        try {
            let  url = `http://www.ieddoq.cn/user/getuseinfo`;
             let body = `{"unionid":"${this.u}"}`;

let h={
  "unionid": this.u,
  "token": this.t,
  "Content-Type": "application/json"
}
 
let urlObject = popu(url, h,body)
			await httpRequest('post',urlObject )   
              let result = httpResult;
this.nickname=result.result.nickname
this.money=result.result.money
this.cashnum=result.result.cashnum
if(!result.result.alipay)var x='未绑定'
if(result.result.alipay){
var x='已绑定'
this.my=1
}
           console.log(`用户 ${this.nickname} 余额${this.money} 支付宝${x}`)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }




        async addmoney() {
        try {
            let  url = `http://www.ieddoq.cn/user/addmyorder0`;
             let body = `{
  "unionid" : "${this.u}"
}`;

let h={
  "unionid": this.u,
  "token": this.t,
  "Content-Type": "application/json"
}
 
let urlObject = popu(url, h,body)
			await httpRequest('post',urlObject )   
              let result = httpResult;

result.data==0&&console.log(`用户 ${this.nickname} 今天已经领取了`)
if(this.money>=0.2&&this.my==1&&this.cashnum>0){
await this.cash()
}else console.log(`用户 ${this.nickname} 你今天还可以提现 ${this.cashnum} 次\n用户 ${this.nickname} 你的余额不足或者没绑定支付宝 跳过提现`)
        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }

        async cash() {
        try {
            let  url = `http://www.ieddoq.cn/trade/pushcash`;
             let body = `{"unionid":"${this.u}","money":${this.money}}`;

let h={
  "unionid": this.u,
  "token": this.t,
  "Content-Type": "application/json"
}
 
let urlObject = popu(url, h,body)
			await httpRequest('post',urlObject )   
              let result = httpResult;
result.data==0&&console.log(`用户 ${this.nickname} 你没绑定支付宝怎么提现？`)
result.data==1&&console.log(`用户 ${this.nickname} 提现成功了 具体到账没有请打开支付宝查看吧！`)

        } catch (e) {
            console.log(e)
        } finally {
            return Promise.resolve(1);
        }
    }




}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    } else {

        if (!(await checkEnv())) return;

        
        
        if (userList.length > 0) {
            console.log('\n------- 登陆和余额 -------\n')
            taskall = []
            for (let user of userList) {
                taskall.push(user.getuseinfo())
            }
            await Promise.all(taskall)
            
}
if (userList.length >  0) {
            console.log('\n------- 分红和提现 -------\n')
            taskall = []
            for (let user of userList) {
                taskall.push(user.addmoney())
            }
            await Promise.all(taskall)
            
}
    }
})()
    .catch((e) => console.log(e))
    .finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function GetRewrite() {

}


async function checkEnv() {
    if (userCookie) {
        let splitor = envSplitor[0];
        for (let sp of envSplitor) {
            if (userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for (let userCookies of userCookie.split(splitor)) {
            if (userCookies) 
userList.push(new UserInfo(userCookies))
            
        }
        userCount = userList.length
    } else {
    }

    console.log(`找到${userCount}个账号`)


    
        return true
}

////////////////////////////////////////////////////////////////////
function popu(url, h,body = '') {
    let host = url.replace('//', '/').split('/')[1]
    let urlObject = {
        url: url,
        headers: h,
        timeout: 5000,
    }
    if (body) {
        urlObject.body = body
    }

    return urlObject;
}


async function httpRequest(method, url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                } else {
                    if (resp.body) {
                        if (typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
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
function Env(a,b){return"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")> -1&&process.exit(0),new class{constructor(a,b){this.name=a,this.notifyStr="",this.startTime=(new Date).getTime(),Object.assign(this,b),console.log(`${this.name} 开始运行：
`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getdata(b){let a=this.getval(b);if(/^@/.test(b)){let[,c,f]=/^@(.*?)\.(.*?)$/.exec(b),d=c?this.getval(c):"";if(d)try{let e=JSON.parse(d);a=e?this.lodash_get(e,f,""):a}catch(g){a=""}}return a}setdata(c,d){let a=!1;if(/^@/.test(d)){let[,b,e]=/^@(.*?)\.(.*?)$/.exec(d),f=this.getval(b),i=b?"null"===f?null:f||"{}":"{}";try{let g=JSON.parse(i);this.lodash_set(g,e,c),a=this.setval(JSON.stringify(g),b)}catch(j){let h={};this.lodash_set(h,e,c),a=this.setval(JSON.stringify(h),b)}}else a=this.setval(c,d);return a}getval(a){return this.isSurge()||this.isLoon()?$persistentStore.read(a):this.isQuanX()?$prefs.valueForKey(a):this.isNode()?(this.data=this.loaddata(),this.data[a]):this.data&&this.data[a]||null}setval(b,a){return this.isSurge()||this.isLoon()?$persistentStore.write(b,a):this.isQuanX()?$prefs.setValueForKey(b,a):this.isNode()?(this.data=this.loaddata(),this.data[a]=b,this.writedata(),!0):this.data&&this.data[a]||null}send(b,a,f=()=>{}){if("get"!=b&&"post"!=b&&"put"!=b&&"delete"!=b){console.log(`无效的http方法：${b}`);return}if("get"==b&&a.headers?(delete a.headers["Content-Type"],delete a.headers["Content-Length"]):a.body&&a.headers&&(a.headers["Content-Type"]||(a.headers["Content-Type"]="application/x-www-form-urlencoded")),this.isSurge()||this.isLoon()){this.isSurge()&&this.isNeedRewrite&&(a.headers=a.headers||{},Object.assign(a.headers,{"X-Surge-Skip-Scripting":!1}));let c={method:b,url:a.url,headers:a.headers,timeout:a.timeout,data:a.body};"get"==b&&delete c.data,$axios(c).then(a=>{let{status:b,request:c,headers:d,data:e}=a;f(null,c,{statusCode:b,headers:d,body:e})}).catch(a=>console.log(a))}else if(this.isQuanX())a.method=b.toUpperCase(),this.isNeedRewrite&&(a.opts=a.opts||{},Object.assign(a.opts,{hints:!1})),$task.fetch(a).then(a=>{let{statusCode:b,request:c,headers:d,body:e}=a;f(null,c,{statusCode:b,headers:d,body:e})},a=>f(a));else if(this.isNode()){this.got=this.got?this.got:require("got");let{url:d,...e}=a;this.instance=this.got.extend({followRedirect:!1}),this.instance[b](d,e).then(a=>{let{statusCode:b,request:c,headers:d,body:e}=a;f(null,c,{statusCode:b,headers:d,body:e})},b=>{let{message:c,response:a}=b;f(c,a,a&&a.body)})}}time(a){let b={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"h+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};for(let c in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length))),b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a}async showmsg(){if(!this.notifyStr)return;let a=this.name+" \u8FD0\u884C\u901A\u77E5\n\n"+this.notifyStr;if($.isNode()){var b=require("./sendNotify");console.log("\n============== \u63A8\u9001 =============="),await b.sendNotify(this.name,a)}else this.msg(a)}logAndNotify(a){console.log(a),this.notifyStr+=a,this.notifyStr+="\n"}msg(d=t,a="",b="",e){let f=a=>{if(!a)return a;if("string"==typeof a)return this.isLoon()?a:this.isQuanX()?{"open-url":a}:this.isSurge()?{url:a}:void 0;if("object"==typeof a){if(this.isLoon()){let b=a.openUrl||a.url||a["open-url"],c=a.mediaUrl||a["media-url"];return{openUrl:b,mediaUrl:c}}if(this.isQuanX()){let d=a["open-url"]||a.url||a.openUrl,e=a["media-url"]||a.mediaUrl;return{"open-url":d,"media-url":e}}if(this.isSurge())return{url:a.url||a.openUrl||a["open-url"]}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(d,a,b,f(e)):this.isQuanX()&&$notify(d,a,b,f(e)));let c=["","============== \u7CFB\u7EDF\u901A\u77E5 =============="];c.push(d),a&&c.push(a),b&&c.push(b),console.log(c.join("\n"))}getMin(a,b){return a<b?a:b}getMax(a,b){return a<b?b:a}padStr(e,b,f="0"){let a=String(e),g=b>a.length?b-a.length:0,c="";for(let d=0;d<g;d++)c+=f;return c+a}json2str(b,e,f=!1){let c=[];for(let d of Object.keys(b).sort()){let a=b[d];a&&f&&(a=encodeURIComponent(a)),c.push(d+"="+a)}return c.join(e)}str2json(e,f=!1){let d={};for(let a of e.split("#")){if(!a)continue;let b=a.indexOf("=");if(-1==b)continue;let g=a.substr(0,b),c=a.substr(b+1);f&&(c=decodeURIComponent(c)),d[g]=c}return d}randomString(d,a="abcdef0123456789"){let b="";for(let c=0;c<d;c++)b+=a.charAt(Math.floor(Math.random()*a.length));return b}randomList(a){let b=Math.floor(Math.random()*a.length);return a[b]}wait(a){return new Promise(b=>setTimeout(b,a))}done(a={}){let b=(new Date).getTime(),c=(b-this.startTime)/1e3;console.log(`
${this.name} 运行结束，共运行了 ${c} 秒！`),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(a)}}(a,b)}
