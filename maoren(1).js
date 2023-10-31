/*
移除小程序 重新登录
域名
buyer/mini-program/auto-login
返回文本里的refreshToken
变量
export mrhd='refreshToken'
一定写在配置文件里
多号@隔开
有效期半个月 期间别登录小程序
*/
 const { log } = require("console");

 const $ = new Env("猫人会员商城");
const fs = require('fs');
const path = require('path');
const xpath = require('xpath')
 const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
 const debug = 0			//0为关闭调试,1为打开调试,默认为0
 //---------------------------------------------------------------------------------------------------------
 let ckStr = ($.isNode() ? process.env.mrhd : $.getdata('mrhd')) || '';
 let msg, ck;
let mrck =''

 
 //---------------------------------------------------------------------------------------------------------


 //---------------------------------------------------------------------------------------------------------
 
 async function tips(ckArr) {
	 await wyy() 
	  DoubleLog( `\n📌 微信公众号：老司机来了 📌`)
      DoubleLog(`\n========== 共找到 ${ckArr.length} 个账号 ==========`);
	  debugLog(`【debug】 这是你的账号数组:\n ${ckArr}`);
 }
 
 
 !(async () => {
	 let ckArr = await checkEnv(ckStr, "mrhd");
	 await tips(ckArr);
	 for (let index = 0; index < ckArr.length; index++) {
		 let num = index + 1;
		 DoubleLog(`\n-------- 开始【第 ${num} 个账号】--------`);
		 ck = ckArr[index].split("@");
		 debugLog(`【debug】 这是你第 ${num} 账号信息:\n ${ck}`);
		 await start();
	 }
	 
	 filepath = path.resolve('../config/config.sh');

            
      fs.readFile(filepath, 'utf8', (err, res) => {

    if (err) {
        console.log('读取文件失败', err.message)
    }

         str1 = res.replace(/mrhd=('.+')/g, `mrhd='${mrck.replace(/\@$/,'')}'`);

         fs.writeFileSync(filepath, str1, (err) => {
        if (err) {
           console.log('读取文件失败', err.message)
        }
         console.log('写入成功!')
    })
})
	 
	 await SendMsg(msg);
 
 })()
	 .catch((e) => $.logErr(e))
	 .finally(() => $.done());
 
 
 async function start() {
 
	 console.log("\n开始 任务");

	 await Login();
	 await $.wait(2 * 1000);
     await sign()
	 await $.wait(2 * 1000);
	 await members()
 }
 
 
 
 
 

 

 async function Login() {

	 try {
		 let url = {
			 url: 'https://shopapp.miiow.com.cn/buyer/members/refresh/'+ck,
			 headers: {
'Connection': 'Keep-Alive',
'Accept': '*/*',
'Accept-Language':' zh-cn',
'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; DUK-AL20 Build/HUAWEIDUK-AL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044353 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools',
'Referer':'https://servicewechat.com/wxe01416bd2b06871c/87/page-frame.html',
'Host': 'shopapp.miiow.com.cn',
'Accept-Encoding': 'gzip, compress, deflate, br'
			 },

		 };
		 let result = await httpGet(url, `登录`);
 
		 
		 if (result.code==200) {
			 DoubleLog('登录成功');

                accessToken = result.result.accessToken
				
                refreshToken = result.result.refreshToken 
				$.log(result.message)
                mrck+=refreshToken+'@'
			 await $.wait(3);
		 } else {
			 DoubleLog(`登录失败 ❌ 了呢,原因未知!`);
			 console.log(result);
		 }
	 } catch (error) {
		 console.log(error);
	 }
 
 }
 async function sign() {
  nonce =randomString(6)
  t = Math.round(new Date().getTime()).toString() 
	 try {
		 let url = {
			 url: 'https://shopapp.miiow.com.cn/buyer/members/sign?time='+getday()+'&nonce='+nonce+'&timestamp='+t+'&sign='+MD5(nonce+t+accessToken),
			 headers: {
'Connection': 'Keep-Alive',
'Accept': '*/*',
'Accept-Language':' zh-cn',
'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; DUK-AL20 Build/HUAWEIDUK-AL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044353 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools',
'Host': 'shopapp.miiow.com.cn',
'AccessToken': accessToken,
'Accept-Encoding': 'gzip, compress, deflate, br'
			 },
data:{}
		 };
		 let result = await httpPost(url, `签到`);
 
		 
		 if (result.code==200) {
			 DoubleLog(result.message);
            console.log(result.message)
			 await $.wait(3);
		 } else {
			 
			 console.log(result.message);
		 }
	 } catch (error) {
		 console.log(error);
	 }
 
 }
 async function members() {
  nonce =randomString(6)
  t = Math.round(new Date().getTime()).toString() 
	 try {
		 let url = {
			 url: 'https://shopapp.miiow.com.cn/buyer/members?nonce='+nonce+'&timestamp='+t+'&sign='+MD5(nonce+t+accessToken),
			 headers: {
'Connection': 'Keep-Alive',
'Accept': '*/*',
'Accept-Language':' zh-cn',
'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0; DUK-AL20 Build/HUAWEIDUK-AL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044353 Mobile Safari/537.36 MicroMessenger/6.7.3.1360(0x26070333) NetType/WIFI Language/zh_CN Process/tools',
'Host': 'shopapp.miiow.com.cn',
'AccessToken': accessToken,
'Accept-Encoding': 'gzip, compress, deflate, br'
			 },
data:{}
		 };
		 let result = await httpGet(url, `个人信息`);
 
		 
		 if (result.code==200) {
			 DoubleLog('point:'+result.result.point);
            console.log('point:'+result.result.point)
			 await $.wait(3);
		 } else {
			 
			 console.log(result.message);
		 }
	 } catch (error) {
		 console.log(error);
	 }
 
 }

 
 
 
 
 
 
 
 
 
 
 // #region ********************************************************  固定代码  ********************************************************
 /**
  * 变量检查
  */
 async function checkEnv(ck, Variables) {
	 return new Promise((resolve) => {
		 let ckArr = []
		 if (ck) {
			 if (ck.indexOf("@") !== -1) {
 
				 ck.split("@").forEach((item) => {
					 ckArr.push(item);
				 });
			 } else if (ck.indexOf("\n") !== -1) {
 
				 ck.split("\n").forEach((item) => {
					 ckArr.push(item);
				 });
			 } else {
				 ckArr.push(ck);
			 }
			 resolve(ckArr)
		 } else {
			 console.log(` ${$.neme}:未填写变量 ${Variables} ,请仔细阅读脚本说明!`)
		 }
	 }
	 )
 }
 
 
 
 
 /**
  * 发送消息
  */
 async function SendMsg(message) {
	 if (!message) return;
	 if (Notify > 0) {
		 if ($.isNode()) {
			 var notify = require("./sendNotify");
			 await notify.sendNotify($.name, message);
		 } else {
			 // $.msg(message);
			 $.msg($.name, '', message)
		 }
	 } else {
		 console.log(message);
	 }
 }
 
 /**
  * 双平台log输出
  */
 function DoubleLog(data) {
	 if ($.isNode()) {
		 if (data) {
			 console.log(`    ${data}`);
			 msg += `\n    ${data}`;
		 }
	 } else {
		 console.log(`    ${data}`);
		 msg += `\n    ${data}`;
	 }
 
 }
 
 /**
  * 随机 数字 + 大写字母 生成
  */
 function randomszdx(e) {
	 e = e || 32;
	 var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		 a = t.length,
		 n = "";
 
	 for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	 return n;
 }
 function randomString(m) {
    for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
    return t.slice(0, e)
}
function getday(){
let myDate = new Date();
y = myDate.getFullYear();
m = myDate.getMonth()+1;
d = myDate.getDate();
if (m.toString().length == 1) {
m = `0${m}`
}
if (d.toString().length == 1) {
d = `0${d}`
}
return y+'-'+m+'-'+d
} 
 /**
  * 随机 数字 + 小写字母 生成
  */
 function randomszxx(e) {
	 e = e || 32;
	 var t = "qwertyuioplkjhgfdsazxcvbnm1234567890",
		 a = t.length,
		 n = "";
 
	 for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	 return n;
 }
 
 
 
 
 /**
  * 随机整数生成
  */
 function randomInt(min, max) {
	 return Math.round(Math.random() * (max - min) + min);
 }
 
 
 /**
  * 时间戳 13位
  */
 function ts13() {
	 return Math.round(new Date().getTime()).toString();
 }
 
 /**
  * 时间戳 10位
  */
 function ts10() {
	 return Math.round(new Date().getTime() / 1000).toString();
 }
 
 /**
  * 获取当前小时数
  */
 function local_hours() {
	 let myDate = new Date();
	 let h = myDate.getHours();
	 return h;
 }
 
 /**
  * 获取当前分钟数
  */
 function local_minutes() {
	 let myDate = new Date();
	 let m = myDate.getMinutes();
	 return m;
 }
 
 
 /**
  * 获取当前年份 2022
  */
 function local_year() {
	 let myDate = new Date();
	 y = myDate.getFullYear();
	 return y;
 }
 
function RandomCode() {
var d = new Date().getTime();
var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = (d + Math.random()*16)%16 | 0;
d = Math.floor(d/16);
  return (c=='x' ? r : (r&0x3|0x8)).toString(16);
});
 
return uuid;
 
};



 /**
  * 获取当前月份(数字)  5月
  */
 function local_month() {
	 let myDate = new Date();
	 let m = myDate.getMonth();
	 return m;
 }
 
 
 /**
 * 获取当前月份(数字)  05月 补零
 */
 function local_month_two() {
	 let myDate = new Date();
	 let m = myDate.getMonth();
	 if (m.toString().length == 1) {
		 m = `0${m}`
	 }
	 return m;
 }
 
 /**
 * 获取当前天数(数字)  5日  
 */
 function local_day() {
	 let myDate = new Date();
	 let d = myDate.getDate();
	 return d;
 }
 
 
 /**
 * 获取当前天数  05日 补零
 */
 function local_day_two() {
	 let myDate = new Date();
	 let d = myDate.getDate();
	 if (d.toString().length == 1) {
		 d = `0${d}`
	 }
	 return d;
 }
 
 
 
 /**
  * 等待 X 秒
  */
 function wait(n) {
	 return new Promise(function (resolve) {
		 setTimeout(resolve, n * 1000);
	 });
 }
 
 
 /**
  * 每日网抑云
  */
 function wyy() {
	 return new Promise((resolve) => {
		 let url = {
			 url: `http://ovooa.com/API/wyrp/api.php`,
		 }
		 $.get(url, async (err, resp, data) => {
			 try {
				 data = JSON.parse(data);
				 // console.log(data);
				 console.log(`网抑云时间: ${data.data.Content}  by--${data.data.Music}`)
				 msg = `[网抑云时间]: ${data.data.Content}  by--${data.data.Music}`
				 // DoubleLog(`[网抑云时间]: ${data.data.Content}  by--${data.data.Music}`);
			 } catch (e) {
				 $.logErr(e, resp);
			 } finally {
				 resolve()
			 }
		 }, timeout = 3)
	 })
 }
 
 /**
  * get请求
  */
 async function httpGet(getUrlObject, tip, timeout = 3) {
	 return new Promise((resolve) => {
		 let url = getUrlObject;
		 if (!tip) {
			 let tmp = arguments.callee.toString();
			 let re = /function\s*(\w*)/i;
			 let matches = re.exec(tmp);
			 tip = matches[1];
		 }
		 if (debug) {
			 console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			 console.log(url);
		 }
 
		 $.get(
			 url,
			 async (err, resp, data) => {
				 try {
					 if (debug) {
						 console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						 console.log(data);
						 console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
						 console.log(JSON.parse(data));
					 }
					 let result = JSON.parse(data);
					 if (result == undefined) {
						 return;
					 } else {
						 resolve(result);
					 }
 
				 } catch (e) {
					 console.log(err, resp);
					 console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					 msg = `\n ${tip} 失败了!请稍后尝试!!`
				 } finally {
					 resolve();
				 }
			 },
			 timeout
		 );
	 });
 }
 
 /**
  * post请求
  */
 async function httpPost(postUrlObject, tip, timeout = 3) {
	 return new Promise((resolve) => {
		 let url = postUrlObject;
		 if (!tip) {
			 let tmp = arguments.callee.toString();
			 let re = /function\s*(\w*)/i;
			 let matches = re.exec(tmp);
			 tip = matches[1];
		 }
		 if (debug) {
			 console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			 console.log(url);
		 }
 
		 $.post(
			 url,
			 async (err, resp, data) => {
				 try {
					 if (debug) {
						 console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						 console.log(data);
						 console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
						 console.log(JSON.parse(data));
					 }
					 let result = JSON.parse(data);
					 if (result == undefined) {
						 return;
					 } else {
						 resolve(result);
					 }
 
				 } catch (e) {
					 console.log(err, resp);
					 console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					 msg = `\n ${tip} 失败了!请稍后尝试!!`
				 } finally {
					 resolve();
				 }
			 },
			 timeout
		 );
	 });
 }
 
 /**
  * 网络请求 (get, post等)
  */
 async function httpRequest(postOptionsObject, tip, timeout = 3) {
	 return new Promise((resolve) => {
 
		 let Options = postOptionsObject;
		 let request = require('request');
		 if (!tip) {
			 let tmp = arguments.callee.toString();
			 let re = /function\s*(\w*)/i;
			 let matches = re.exec(tmp);
			 tip = matches[1];
		 }
		 if (debug) {
			 console.log(`\n 【debug】=============== 这是 ${tip} 请求 信息 ===============`);
			 console.log(Options);
		 }
 
		 request(Options, async (err, resp, data) => {
			 try {
				 if (debug) {
					 console.log(`\n\n 【debug】===============这是 ${tip} 返回数据==============`);
					 console.log(data);
					 console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
					 console.log(JSON.parse(data));
				 }
				 let result = JSON.parse(data);
				 if (!result) return;
				 resolve(result);
			 } catch (e) {
				 console.log(err, resp);
				 console.log(`\n ${tip} 失败了!请稍后尝试!!`);
				 msg = `\n ${tip} 失败了!请稍后尝试!!`
			 } finally {
				 resolve();
			 }
		 }), timeout
 
	 });
 }
 
 
 /**
  * debug调试
  */
 function debugLog(...args) {
	 if (debug) {
		 console.log(...args);
	 }
 }
 
 
 
 // /**
 //  *  单名字 Env
 //  */
 // function Env() {
 //     return new class {
 //         isNode() {
 //             return "undefined" != typeof module && !!module.exports
 //         }
 //     }()
 // }
 
 
 // md5
 function MD5(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }
 
 
 
 
 /* SHA256 logical functions */
 function rotateRight(n, x) {
	 return ((x >>> n) | (x << (32 - n)));
 }
 function choice(x, y, z) {
	 return ((x & y) ^ (~x & z));
 }
 function majority(x, y, z) {
	 return ((x & y) ^ (x & z) ^ (y & z));
 }
 function sha256_Sigma0(x) {
	 return (rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x));
 }
 function sha256_Sigma1(x) {
	 return (rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x));
 }
 function sha256_sigma0(x) {
	 return (rotateRight(7, x) ^ rotateRight(18, x) ^ (x >>> 3));
 }
 function sha256_sigma1(x) {
	 return (rotateRight(17, x) ^ rotateRight(19, x) ^ (x >>> 10));
 }
 function sha256_expand(W, j) {
	 return (W[j & 0x0f] += sha256_sigma1(W[(j + 14) & 0x0f]) + W[(j + 9) & 0x0f] +
		 sha256_sigma0(W[(j + 1) & 0x0f]));
 }
 
 /* Hash constant words K: */
 var K256 = new Array(
	 0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
	 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
	 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
	 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
	 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
	 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
	 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
	 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
	 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
	 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
	 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
	 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
	 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
	 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
	 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
 );
 
 /* global arrays */
 var ihash, count, buffer;
 var sha256_hex_digits = "0123456789abcdef";
 
 /* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters: 
 overflow) */
 function safe_add(x, y) {
	 var lsw = (x & 0xffff) + (y & 0xffff);
	 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	 return (msw << 16) | (lsw & 0xffff);
 }
 
 /* Initialise the SHA256 computation */
 function sha256_init() {
	 ihash = new Array(8);
	 count = new Array(2);
	 buffer = new Array(64);
	 count[0] = count[1] = 0;
	 ihash[0] = 0x6a09e667;
	 ihash[1] = 0xbb67ae85;
	 ihash[2] = 0x3c6ef372;
	 ihash[3] = 0xa54ff53a;
	 ihash[4] = 0x510e527f;
	 ihash[5] = 0x9b05688c;
	 ihash[6] = 0x1f83d9ab;
	 ihash[7] = 0x5be0cd19;
 }
 
 /* Transform a 512-bit message block */
 function sha256_transform() {
	 var a, b, c, d, e, f, g, h, T1, T2;
	 var W = new Array(16);
 
	 /* Initialize registers with the previous intermediate value */
	 a = ihash[0];
	 b = ihash[1];
	 c = ihash[2];
	 d = ihash[3];
	 e = ihash[4];
	 f = ihash[5];
	 g = ihash[6];
	 h = ihash[7];
 
	 /* make 32-bit words */
	 for (var i = 0; i < 16; i++)
		 W[i] = ((buffer[(i << 2) + 3]) | (buffer[(i << 2) + 2] << 8) | (buffer[(i << 2) + 1]
			 << 16) | (buffer[i << 2] << 24));
 
	 for (var j = 0; j < 64; j++) {
		 T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
		 if (j < 16) T1 += W[j];
		 else T1 += sha256_expand(W, j);
		 T2 = sha256_Sigma0(a) + majority(a, b, c);
		 h = g;
		 g = f;
		 f = e;
		 e = safe_add(d, T1);
		 d = c;
		 c = b;
		 b = a;
		 a = safe_add(T1, T2);
	 }
 
	 /* Compute the current intermediate hash value */
	 ihash[0] += a;
	 ihash[1] += b;
	 ihash[2] += c;
	 ihash[3] += d;
	 ihash[4] += e;
	 ihash[5] += f;
	 ihash[6] += g;
	 ihash[7] += h;
 }
 
 /* Read the next chunk of data and update the SHA256 computation */
 function sha256_update(data, inputLen) {
	 var i, index, curpos = 0;
	 /* Compute number of bytes mod 64 */
	 index = ((count[0] >> 3) & 0x3f);
	 var remainder = (inputLen & 0x3f);
 
	 /* Update number of bits */
	 if ((count[0] += (inputLen << 3)) < (inputLen << 3)) count[1]++;
	 count[1] += (inputLen >> 29);
 
	 /* Transform as many times as possible */
	 for (i = 0; i + 63 < inputLen; i += 64) {
		 for (var j = index; j < 64; j++)
			 buffer[j] = data.charCodeAt(curpos++);
		 sha256_transform();
		 index = 0;
	 }
 
	 /* Buffer remaining input */
	 for (var j = 0; j < remainder; j++)
		 buffer[j] = data.charCodeAt(curpos++);
 }
 
 /* Finish the computation by operations such as padding */
 function sha256_final() {
	 var index = ((count[0] >> 3) & 0x3f);
	 buffer[index++] = 0x80;
	 if (index <= 56) {
		 for (var i = index; i < 56; i++)
			 buffer[i] = 0;
	 } else {
		 for (var i = index; i < 64; i++)
			 buffer[i] = 0;
		 sha256_transform();
		 for (var i = 0; i < 56; i++)
			 buffer[i] = 0;
	 }
	 buffer[56] = (count[1] >>> 24) & 0xff;
	 buffer[57] = (count[1] >>> 16) & 0xff;
	 buffer[58] = (count[1] >>> 8) & 0xff;
	 buffer[59] = count[1] & 0xff;
	 buffer[60] = (count[0] >>> 24) & 0xff;
	 buffer[61] = (count[0] >>> 16) & 0xff;
	 buffer[62] = (count[0] >>> 8) & 0xff;
	 buffer[63] = count[0] & 0xff;
	 sha256_transform();
 }
 
 /* Split the internal hash values into an array of bytes */
 function sha256_encode_bytes() {
	 var j = 0;
	 var output = new Array(32);
	 for (var i = 0; i < 8; i++) {
		 output[j++] = ((ihash[i] >>> 24) & 0xff);
		 output[j++] = ((ihash[i] >>> 16) & 0xff);
		 output[j++] = ((ihash[i] >>> 8) & 0xff);
		 output[j++] = (ihash[i] & 0xff);
	 }
	 return output;
 }
 
 /* Get the internal hash as a hex string */
 function sha256_encode_hex() {
	 var output = new String();
	 for (var i = 0; i < 8; i++) {
		 for (var j = 28; j >= 0; j -= 4)
			 output += sha256_hex_digits.charAt((ihash[i] >>> j) & 0x0f);
	 }
	 return output;
 }
 
 /* Main function: returns a hex string representing the SHA256 value of the 
 given data */
 function sha256_Encrypt(data) {
	 sha256_init();
	 sha256_update(data, data.length);
	 sha256_final();
	 return sha256_encode_hex();
 }
 
 
 
 // 完整 Env
 function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
 
	 //#endregion
 