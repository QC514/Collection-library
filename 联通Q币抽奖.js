
/**
 * 
 * 项目类型：小程序
 * 项目名称：联通抽QB
 * 项目抓包：抓m.client.10010.com下的authorization填入变量
 * 项目变量：lekebo_ltqb_Cookie
 * 项目定时：每40分钟运行一次
 * cron: 0 0,7 * * *
 * github仓库：https://github.com/
 * 
 * 交流Q群：104062430 作者:乐客播 欢迎前来提交bug   邀请码:TNESO
 */


//===============脚本版本=================//
let scriptVersion = "1.0.1";
let update_data = "完成签到，浏览视频，二手市场，校园头条任务";
//=======================================//
const $ = new Env('联通抽QB');
const notify = $.isNode() ? require('./sendNotify') : '';
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
const {log} = console;
let scriptVersionLatest = "";
let UserCookie = ($.isNode() ? process.env.lekebo_ltqb_Cookie : $.getdata('lekebo_ltqb_Cookie')) || '';
let UserCookieArr = [];
let data = '';
let msg =``;
let isSign = false;
let host = 'm.client.10010.com';
let hostname = 'https://' + host;
//=======================================//
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs())){
            return;
        } else {
            DoubleLog(`\n 交流Q群：104062430 作者:乐客播 欢迎前来提交bug`)
            await getVersion();
            DoubleLog(`\n================ 共找到 ${UserCookieArr.length} 个账号 ================ \n 脚本执行✌北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString()} \n================ 版本对比检查更新 ================`);          
            if (scriptVersionLatest != scriptVersion) {
                DoubleLog(`\n 当前版本：${scriptVersion}`)
                DoubleLog(`\n 最新版本：${scriptVersionLatest}`)
                DoubleLog(`\n 更新信息：${update_data}`)
            } else {
                DoubleLog(`\n 版本信息：${scriptVersion} ，已是最新版本无需更新开始执行脚本`)
            }
            for (let index = 0; index < UserCookieArr.length; index++) {
                let num = index + 1
                DoubleLog(`\n================ 开始第 ${num} 个账号 ================`)
                ck = UserCookieArr[index].split("&");
                taskBeforeScore = 0;
                await start();
            }
            await SendMsg(msg);
        }
    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())

/**
 * 获取基础信息
 * @returns {Promise<boolean>}
 */
async function start() {
    await getMemberInfo(2 * 1000);
    await $.wait(2000);
    //await listWinning(2 * 1000);
    //await $.wait(2000);
    return true;
}
/**
 * 查询会员信息
 * @param timeout
 * @returns {Promise<unknown>}
 */
function getMemberInfo(timeout = 2000) {
    return new Promise((resolve) => {
        let url = {
            url: `${hostname}/TelecomDayActivityService/telecom/queryChance`,
            headers: {
                Host: host,
				'Content-Type': 'application/json',
				'Cookie': ck[0],
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36; unicom{version:android@10.0400,desmobile:15607872406};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 7 Pro};{yw_code:}',
            },
        }
        $.post(url, async (error, response, data) => {
            try {
                let result = JSON.parse(data);
                //console.log(result)
                if (result.status == 0000) {
                    remainnot = result.data.allRemainTimes
                    DoubleLog(`\n 查询抽奖: ✅ ，拥有抽奖：${remainnot} 次`)
                    for(let i=0;i<remainnot.length;i++){
                        await getMemberScore(2 * 1000);
                        await $.wait(6000);
                    }
                } else {
                    DoubleLog(`\n 查询失败: ❌ ，原因是：${result.msg}`)
                }
            } catch (e) {
                DoubleLog(`\n 信息异常: ❌ ，${response}`)
            } finally {
                resolve();
            }
        }, timeout)
    })
}
/**
 * 查询会员信息
 * @param timeout
 * @returns {Promise<unknown>}
 */
function getMemberScore(timeout = 2000) {
    return new Promise((resolve) => {
        let url = {
            url: `${hostname}/TelecomDayActivityService/telecom/lottery`,
            headers: {
                Host: host,
				'Content-Type': 'application/json',
				'Cookie': ck[0],
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36; unicom{version:android@10.0400,desmobile:15607872406};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 7 Pro};{yw_code:}',
            },
        }
        $.post(url, async (error, response, data) => {
            try {
                let result = JSON.parse(data);
                //console.log(result)
                if (result.status == 0000) {
                    DoubleLog(`\n 抽奖成功: ✅ ，等待 6 秒后继续抽奖`)
                } else {
                    DoubleLog(`\n 查询失败: ❌ ，原因是：${result.msg}`)
                }
            } catch (e) {
                DoubleLog(`\n 信息异常: ❌ ，${response}`)
            } finally {
                resolve();
            }
        }, timeout)
    })
}
/**
 * 查询会员信息
 * @param timeout
 * @returns {Promise<unknown>}
 */
function listWinning(timeout = 2000) {
    return new Promise((resolve) => {
        let url = {
            url: `${hostname}/myPrizeForActivity/openServices/listWinningRecordsForDouble11`,
            headers: {
                Host: host,
				'Content-Type': 'application/x-www-form-urlencoded',
				'Cookie': ck[0],
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Pro Build/QKQ1.190915.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36; unicom{version:android@10.0400,desmobile:15607872406};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 7 Pro};{yw_code:}',
            },
            body: `sysActiveStr=SHAKECLIENT_AC20230426142032%2CSHAKECLIENT_AC20230426153807&enMobile=&otherFlag=0`,
        }
        $.post(url, async (error, response, data) => {
            try {
                let result = JSON.parse(data);
                //console.log(result)
                if (result.code == 200) {
                    DoubleLog(`\n 中奖查询: ✅ ，${result.data.winningRecords.prizeName}`)
                } else {
                    DoubleLog(`\n 查询失败: ❌ ，原因是：${result.msg}`)
                }
            } catch (e) {
                DoubleLog(`\n 信息异常: ❌ ，${response}`)
            } finally {
                resolve();
            }
        }, timeout)
    })
}

























// ============================================重写============================================ \\
async function GetRewrite() {
    if ($request.url.indexOf("member/api/info/?userKeys=v1.0&pageName=member-info-index-search&formName=searchForm&kwwMember.memberId") > -1) {
        let ck = '';
        let theRequest = new Object();
        if ($request.url.indexOf("?") != -1) {
            let info = $request.url.split('?');
            let strs = info[1].split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
            ck = theRequest.memberId;
        }
        if (kwwUid) {
            if (memberId.indexOf(ck) == -1) {
                memberId = memberId + "@" + ck;
                $.setdata(memberId, "kwwUid");
                List = memberId.split("@");
                $.msg(`【${$.name}】` + ` 获取第${memberId.length}个 ck 成功: ${ck} ,不用请自行关闭重写!`);
            }
        } else {
            $.setdata(ck, "memberId");
            $.msg(`【${$.name}】` + ` 获取第1个 ck 成功: ${ck} ,不用请自行关闭重写!`);
        }
    }
}


// ============================================变量检查============================================ \\
async function Envs() {
    if (UserCookie) {
        if (UserCookie.indexOf("\n") != -1) {
            UserCookie.split("\n").forEach((item) => {
                UserCookieArr.push(item);
            });
        } else {
            UserCookieArr.push(UserCookie);
        }
    } else {
        console.log(`\n 乐客播提示：系统变量未填写 lekebo_ltqb_Cookie`)
        return;
    }
    return true;
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
/**
 * 添加消息
 * @param str
 * @param is_log
 */
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${str}\n`)
    }
    msg += `${str}\n`
}
/**
 * 双平台log输出
 */
function DoubleLog(data) {
	if ($.isNode()) {
		if (data) {
			console.log(`${data}`);
			msg += `${data}`;
		}
	} else {
		console.log(`${data}`);
		msg += `${data}`;
	}
}
function randomNum(min, max) {
	if (arguments.length === 0) return Math.random()
	if (!max) max = 10 ** (Math.log(min) * Math.LOG10E + 1 | 0) - 1
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function DealScriptStr(str) {
    str = str.replace(/\/\*.*?\*\//g, ' ');
    str = str.replace(/\b0(\d+)/g, '0o$1');
    return str;
}
/**
 * 随机数生成
 */
function randomString(e) {
    e = e || 32;
    var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}
/**
 * 获取远程版本
 */
function getVersion(timeout = 3 * 1000) {
    return new Promise((resolve) => {
        let url = {
            url: `https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_kww.js`,
        }
        $.get(url, async (err, resp, data) => {
            try {
                scriptVersionLatest = data.match(/scriptVersion = "([\d\.]+)"/)[1]
                update_data = data.match(/update_data = "(.*?)"/)[1]
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}
// 完整 Env
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }木木