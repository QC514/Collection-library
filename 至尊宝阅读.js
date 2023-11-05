/*
微信打开地址：http://w.tnpoazqiotl.cn?p=115742
查看请求头的cookie
变量
export zzbhd=''
多号@或换行
 */

const $ = new Env('至尊宝阅读');
const axios = require('axios');
let request = require("request");
request = request.defaults({
    jar: true
});
const {
    log
} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let zzbhd = ($.isNode() ? process.env.zzbhd : $.getdata("zzbhd")) || ""
let zzbhdArr = [];
let data = '';
let msg = '';
var hours = new Date().getMonth();
var t = Date.parse(new Date) / 1e3;
var signs = sign(t)
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
            log(`\n=================== 共找到 ${zzbhdArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${zzbhdArr}`);
            }
            for (let index = 0; index < zzbhdArr.length; index++) {

                let num = index + 1
                addNotifyStr(`\n==== 开始【第 ${num} 个账号】====\n`, true)

                zzbhd = zzbhdArr[index];
                await readinfo()
                await userinfo()
                await task()

                await $.wait(8000)
                await finish()


            }
            //await SendMsg(msg);
        }
    }
})()
    .catch((e) => log(e))
    .finally(() => $.done())
async function readinfo() {
    return new Promise((resolve) => {



        var options = {
            method: 'GET',
            url: 'http://l.youth365.top/read/info',
            params: {
                time: t,
                sign: signs
            },
            headers: {
                Host: 'l.youth365.top',
                Connection: 'keep-alive',
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,
                Referer: 'http://l.youth365.top/page',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Accept-Encoding': 'gzip, deflate'
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
                log(JSON.stringify(response.data));
            }
            if (data.code == 0) {

                gold = data.data.gold
                read = data.data.read
                remain = data.data.remain
                log('gold:'+gold)
                log('read:'+read)
                log('remain:'+remain)
            } else
                log(data)



        } catch (e) {
            log(`异常：${data}，原因：${data.message}`)
        }
    }).catch(function(error) {
        console.error(error);
    }).then(res => {
        //这里处理正确返回
        resolve();
    });
})

}
async function userinfo() {
    return new Promise((resolve) => {



        var options = {
            method: 'GET',
            url: 'http://l.youth365.top/user/info',
            params: {
                time: t,
                sign: signs
            },
            headers: {
                Host: 'l.youth365.top',
                Connection: 'keep-alive',
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,
                Referer: 'http://l.youth365.top/page',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Accept-Encoding': 'gzip, deflate'
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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {

                    uid = data.data.uid

                    log('uid:'+uid)

                } else
                    log(data)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function task() {
    return new Promise((resolve) => {



        var options = {
            method: 'GET',
            url: 'http://l.youth365.top/read/task',
            params: {
                time: t,
                sign: sign(t)
            },
            headers: {
                Host: 'l.youth365.top',
                Connection: 'keep-alive',
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,
                Referer: 'http://l.youth365.top/page',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Accept-Encoding': 'gzip, deflate'
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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {

                    link = data.data.link
                    await  links(link)
                    log('link:'+link)

                } else
                    log(data)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function links(url) {
    return new Promise((resolve) => {



        var options = {
            method: 'GET',
            url: url,
            headers: {
                Host: 'l.youth365.top',
                Connection: 'keep-alive',
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,
                Referer: 'http://l.youth365.top/page',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Accept-Encoding': 'gzip, deflate'
            }
        };

        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.headers;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data && data.Location) {

                    Location = data.Location
                    await  golinks(Location)
                    //log('Location:'+Location)

                } else
                    log(data)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function golinks(url) {
    return new Promise((resolve) => {



        var options = {
            method: 'GET',
            url: url,
            headers: {

                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,

            }
        };

        if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                data = response.headers;
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }
                if (data && data.Location) {

                    Locations = data.Location

                    //log('Location:'+Locations)

                } else
                    log(data)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function finish() {
    return new Promise((resolve) => {



        var options = {
            method: 'POST',
            url: 'http://l.youth365.top/read/finish',

            headers: {
                Host: 'l.youth365.top',
                Connection: 'keep-alive',
                Accept: 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63060012)',
                Cookie: zzbhd,
                Referer: 'http://l.youth365.top/page',
                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'Accept-Encoding': 'gzip, deflate'
            },

            data: 'time='+t+'&sign='+signs
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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                    gain = data.data.gain
                    gold = data.data.gold
                    read = data.data.read
                    remain = data.data.remain
                    log('gain'+gain)
                    log('gold:'+gold)
                    log('read:'+read)
                    log('remain:'+remain)
                } else
                    log(data)



            } catch (e) {
                log(`异常：${data}，原因：${data.message}`)
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
    if (zzbhd) {
        if (zzbhd.indexOf("@") != -1) {
            zzbhd.split("@").forEach((item) => {

                zzbhdArr.push(item);
            });
        } else if (zzbhd.indexOf("\n") != -1) {
            zzbhd.split("\n").forEach((item) => {
                zzbhdArr.push(item);
            });
        } else {
            zzbhdArr.push(zzbhd);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 zzbhd`)
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
function sign(a) {
    return hash_256('key=4fck9x4dqa6linkman3ho9b1quarto49x0yp706qi5185o&time='+a).toString()
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
function hash_256(_0x1f7d0f){var _0x41a224=8;var _0x3a2f19=0;function _0x172424(_0x53379d,_0x73556d){var _0x531653=(_0x53379d&65535)+(_0x73556d&65535);var _0x17051f=(_0x53379d>>16)+(_0x73556d>>16)+(_0x531653>>16);return _0x17051f<<16|_0x531653&65535;}function _0x8bb3da(_0x2630ec,_0x42a2d3){return _0x2630ec>>>_0x42a2d3|_0x2630ec<<32-_0x42a2d3;}function _0x18dca1(_0x499cdd,_0x44a4ef){return _0x499cdd>>>_0x44a4ef;}function _0x392a31(_0x1b3aa5,_0x35fe4e,_0x548184){return _0x1b3aa5&_0x35fe4e^~_0x1b3aa5&_0x548184;}function _0x3738c6(_0x3e576e,_0x1cab9a,_0x303a9f){return _0x3e576e&_0x1cab9a^_0x3e576e&_0x303a9f^_0x1cab9a&_0x303a9f;}function _0xbfaf1a(_0x59e241){return _0x8bb3da(_0x59e241,2)^_0x8bb3da(_0x59e241,13)^_0x8bb3da(_0x59e241,22);}function _0x39b66b(_0x1b4c34){return _0x8bb3da(_0x1b4c34,6)^_0x8bb3da(_0x1b4c34,11)^_0x8bb3da(_0x1b4c34,25);}function _0x31e46a(_0x2469bd){return _0x8bb3da(_0x2469bd,7)^_0x8bb3da(_0x2469bd,18)^_0x18dca1(_0x2469bd,3);}function _0x1edb96(_0xdc651c){return _0x8bb3da(_0xdc651c,17)^_0x8bb3da(_0xdc651c,19)^_0x18dca1(_0xdc651c,10);}function _0x35b41f(_0x5c91ab,_0x10ee6b){var _0x2e9a48=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);var _0x454c3d=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);var _0x7191b8=new Array(64);var _0x8f72c6,_0x3506c5,_0x52ddd1,_0x423bc0,_0x53bd8b,_0x2aadf4,_0x28525d,_0x2d49d4,_0x1cf2bb,_0x21fba5;var _0xbf2241,_0x2dea17;_0x5c91ab[_0x10ee6b>>5]|=128<<24-_0x10ee6b%32;_0x5c91ab[(_0x10ee6b+64>>9<<4)+15]=_0x10ee6b;for(var _0x1cf2bb=0;_0x1cf2bb<_0x5c91ab["length"];_0x1cf2bb+=16){_0x8f72c6=_0x454c3d[0];_0x3506c5=_0x454c3d[1];_0x52ddd1=_0x454c3d[2];_0x423bc0=_0x454c3d[3];_0x53bd8b=_0x454c3d[4];_0x2aadf4=_0x454c3d[5];_0x28525d=_0x454c3d[6];_0x2d49d4=_0x454c3d[7];for(var _0x21fba5=0;_0x21fba5<64;_0x21fba5++){if(_0x21fba5<16){_0x7191b8[_0x21fba5]=_0x5c91ab[_0x21fba5+_0x1cf2bb];}else{_0x7191b8[_0x21fba5]=_0x172424(_0x172424(_0x172424(_0x1edb96(_0x7191b8[_0x21fba5-2]),_0x7191b8[_0x21fba5-7]),_0x31e46a(_0x7191b8[_0x21fba5-15])),_0x7191b8[_0x21fba5-16]);}_0xbf2241=_0x172424(_0x172424(_0x172424(_0x172424(_0x2d49d4,_0x39b66b(_0x53bd8b)),_0x392a31(_0x53bd8b,_0x2aadf4,_0x28525d)),_0x2e9a48[_0x21fba5]),_0x7191b8[_0x21fba5]);_0x2dea17=_0x172424(_0xbfaf1a(_0x8f72c6),_0x3738c6(_0x8f72c6,_0x3506c5,_0x52ddd1));_0x2d49d4=_0x28525d;_0x28525d=_0x2aadf4;_0x2aadf4=_0x53bd8b;_0x53bd8b=_0x172424(_0x423bc0,_0xbf2241);_0x423bc0=_0x52ddd1;_0x52ddd1=_0x3506c5;_0x3506c5=_0x8f72c6;_0x8f72c6=_0x172424(_0xbf2241,_0x2dea17);}_0x454c3d[0]=_0x172424(_0x8f72c6,_0x454c3d[0]);_0x454c3d[1]=_0x172424(_0x3506c5,_0x454c3d[1]);_0x454c3d[2]=_0x172424(_0x52ddd1,_0x454c3d[2]);_0x454c3d[3]=_0x172424(_0x423bc0,_0x454c3d[3]);_0x454c3d[4]=_0x172424(_0x53bd8b,_0x454c3d[4]);_0x454c3d[5]=_0x172424(_0x2aadf4,_0x454c3d[5]);_0x454c3d[6]=_0x172424(_0x28525d,_0x454c3d[6]);_0x454c3d[7]=_0x172424(_0x2d49d4,_0x454c3d[7]);}return _0x454c3d;}function _0x5bb8d8(_0x19fb8d){var _0x227201=Array();var _0x1e9ef1=255;for(var _0x3bf7ca=0;_0x3bf7ca<_0x19fb8d["length"]*_0x41a224;_0x3bf7ca+=_0x41a224){_0x227201[_0x3bf7ca>>5]|=(_0x19fb8d["charCodeAt"](_0x3bf7ca/_0x41a224)&_0x1e9ef1)<<24-_0x3bf7ca%32;}return _0x227201;}function _0x5563cf(_0x306361){var _0x5b448a=new RegExp("\n","g");_0x306361=_0x306361["replace"](_0x5b448a,"\n");var _0x16692b="";for(var _0x53d980=0;_0x53d980<_0x306361["length"];_0x53d980++){var _0x3cc0a1=_0x306361["charCodeAt"](_0x53d980);if(_0x3cc0a1<128){_0x16692b+=String["fromCharCode"](_0x3cc0a1);}else{if(_0x3cc0a1>127&&_0x3cc0a1<2048){_0x16692b+=String["fromCharCode"](_0x3cc0a1>>6|192);_0x16692b+=String["fromCharCode"](_0x3cc0a1&63|128);}else{_0x16692b+=String["fromCharCode"](_0x3cc0a1>>12|224);_0x16692b+=String["fromCharCode"](_0x3cc0a1>>6&63|128);_0x16692b+=String["fromCharCode"](_0x3cc0a1&63|128);}}}return _0x16692b;}function _0x46dbf7(_0x55ec53){var _0x54c759=_0x3a2f19?"0123456789ABCDEF":"0123456789abcdef";var _0xe6437a="";for(var _0x11be01=0;_0x11be01<_0x55ec53["length"]*4;_0x11be01++){_0xe6437a+=_0x54c759["charAt"](_0x55ec53[_0x11be01>>2]>>(3-_0x11be01%4)*8+4&15)+_0x54c759["charAt"](_0x55ec53[_0x11be01>>2]>>(3-_0x11be01%4)*8&15);}return _0xe6437a;}_0x1f7d0f=_0x5563cf(_0x1f7d0f);return _0x46dbf7(_0x35b41f(_0x5bb8d8(_0x1f7d0f),_0x1f7d0f["length"]*_0x41a224));};
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}
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
