/*
https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html#/login  
注册 用一键登录抓包
域名
https://wap.sc.10086.cn/mmplatClientWap/jump/toJump.do
免密登录 搜SmsNoPwdLoginCookie=XXXXX
变量
export scydhd='SmsNoPwdLoginCookie=XXXXXXXXXX'
*/
const $ = new Env('四川移动');
const axios = require('axios');
let request = require("request");

const JSEncrypt = require('node-jsencrypt');
request = request.defaults({
    jar: true
});
const {
    log
} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let scydhd = ($.isNode() ? process.env.scydhd : $.getdata("scydhd")) || ""
let scydhdArr = [];
let data = '';
let pid = '538'; //这里想兑换的对应的productId
let fid = '1000000357';//这里想兑换的对应的publicConfigId
let msg = '';
var hours = new Date().getMonth();
comment_list = ['太棒了', '赞赞赞', '666666', '不错', '不错，很好的平台', '学到了', '分享了', '支持', '好', '666']
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



            log(`\n============ 微信公众号：老司机上线 ============`)
            log(`\n=================== 共找到 ${scydhdArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${scydhdArr}`);
            }
            for (let index = 0; index < scydhdArr.length; index++) {

                let num = index + 1
                addNotifyStr(`\n==== 开始【第 ${num} 个账号】====\n`, true)

                scydhd = scydhdArr[index];  

await toJump()
await getUserSignInfo()
await getTaskList(1)
await getTaskList(2)
await getTaskList(3)
await refreshCoin()
await checkGameUser()
await queryRemainingQuantity()
await equityExchangeCaptcha()
await oauth()
await accurate(pic)
log('====兑换50话费====')
await equityExchange()
await refreshCoin()
}
            //await SendMsg(msg);
        }
    }
})()
.catch((e) => log(e))
    .finally(() => $.done())
 async function toJump() {

var options = {

  url: `https://wap.sc.10086.cn/mmplatClientWap/jump/toJump.do`,
  headers: {
'Content-Type':' application/x-www-form-urlencoded',
'Origin': 'https://wx.online-cmcc.cn',
'Referer': 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2011K2C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36/4.7.5 scmcc.mobile baiduboxapp',
'Accept': '*/*',
'Accept-Language': 'zh-cn',
 'Cookie':scydhd,

  },
body:'jumpId=1027&channel=zt&WT.ac=%E5%BF%83%E7%BA%A7%E6%9C%8D%E5%8A%A1_banner%E5%8C%BA_%E5%91%A8%E4%B8%89%E6%9C%8D%E5%8A%A1%E4%BD%93%E9%AA%8C%E5%AE%98&abStr=7592'
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
            return new Promise((resolve) => {
        request.post(options, async (error, response, data) =>{
            try {
               
                if (debug) {
                    log(`\n\n【debug】===============这是 返回result==============`);
                    log(data)
                }
a = response.headers.location

a = a.match(/&p=(.+)/)[1]

await toJump1()
                    
            } catch (e) {
                log(`异常，原因：${e}，返回：${data}`)
            } finally {
                resolve();
            }
        })
    })
}   
async function toJump1() {
requestTimestamp = new Date().Format('yyyyMMddHHmm')
sign = MD5('code='+a+requestTimestamp)
    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/assessorUser/getZTUserInfos',
  headers: {
'Content-Type':' application/x-www-form-urlencoded',
'Origin': 'https://wx.online-cmcc.cn',
'Referer': 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
'User-Agent': 'Mozilla/5.0 (Linux; Android 12; M2011K2C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36/4.7.5 scmcc.mobile baiduboxapp',
 'Cookie':scydhd,


  },
  
  data: 'code='+encodeURIComponent(a)+'&requestEs='+sign+'&requestTimestamp='+requestTimestamp



};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
            try {
                 data = response.data
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }

            if(data.code == 0){
             session = data.data.session
             log('session:'+session)
             id = data.data.info.id
             log('id:'+id)
             encodePhone = data.data.info.encodePhone
             log('encodePhone:'+encodePhone)
             userName = data.data.info.userName
             log('userName:'+userName)
             tel = data.data.info.tel
             log('tel:'+tel)
             coin = data.data.info.coin
             log('coin:'+coin)
            }else
            log(data.msg)

       
    


                    
                
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
async function signGame() {
requestTimestamp = new Date().Format('yyyyMMddHHmm')
sign = MD5('channelCode=lzt0001gameId=1000000061phoneno='+encodePhone+'userId='+id+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/services/signGame/sign',
  headers: {
  
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',

  },
  
  data: 'channelCode=lzt0001&gameId=1000000061&phoneno='+encodePhone+'&requestEs='+sign+'&requestTimestamp='+requestTimestamp+'&session='+session+'&userId='+id


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
                if (data.retCode == 0) {

    log('签到成功 '+'nextGiftSign:'+data.nextGiftSign)

                } else 
                    log(data.retMsg)

                    
                
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
async function getUserSignInfo() {
requestTimestamp = new Date().Format('yyyyMMddHHmm')
sign = MD5('gameId=1000000061phoneno='+encodePhone+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/services/signGame/getUserSignInfo',
  headers: {
  
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',

  },
  
  data: 'gameId=1000000061&phoneno='+encodePhone+'&requestEs='+sign+'&requestTimestamp='+requestTimestamp+'&session='+session


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
                if (data.retCode == 0) {
if(data.isSignToday == 1){
log('今日已签到') 
log('totalSignDays:'+data.totalSignDays)   
}else
await signGame()

                } else 
                    log(data.retMsg)

                    
                
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
async function refreshCoin() {
requestTimestamp = new Date().Format('yyyyMMddHHmm')
sign = MD5(requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'https://ssl.zyzxsc.com/assosser/assessorUser/refreshCoin?'+'requestEs='+sign+'&requestTimestamp='+requestTimestamp+'&session='+session,
  headers: {
  
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',

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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
log('福币:'+data.data)

                } else 
                    log(data.retMsg)

                    
                
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
async function equityExchange() {
        const jsencrypt = new JSEncrypt();
         var key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDEsGz1fLTG7gS1wGwgPIqkkBOx5SFF5fOE6mE0hXR+OV0P50bYv0E6pjfSxTIDsBm91khA/ra431DPVTIjjBX9Yn1Pa9QzzBkbBWSY3Q1WEPeKSGtPg5DQXFlQau7ake1/CYKr6dV5JCmcowWo7VPQr9yhCrwaJYiz0F1kZVJaQIDAQAB"
        jsencrypt.setPublicKey(key);
        encProductId = jsencrypt.encrypt(538+ "");
        encPublicConfigId = jsencrypt.encrypt(1000000357+ "")
        encSeckillId = jsencrypt.encrypt(0+ "")
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        encCaptcha = jsencrypt.encrypt(words+ "")
        requestEs = MD5('encCaptcha='+encCaptcha+'encProductId='+encProductId+'encPublicConfigId='+encPublicConfigId+'encSeckillId='+encSeckillId+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/services/equityExchange/updateEquityExchange',
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
  },
  
  data: 'encCaptcha='+str(encCaptcha)+'&encProductId='+str(encProductId)+'&encPublicConfigId='+str(encPublicConfigId)+'&encSeckillId='+str(encSeckillId)+'&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session


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
                if (data.retCode == 0) {
log(data)
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
async function getTaskList(pageNum) {
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('pageNum='+pageNum+'pageSize=8taskType=1'+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'https://ssl.zyzxsc.com/assosser/assessorTask/getTaskList?pageNum='+pageNum+'&pageSize=8&taskType=1&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session,
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
                lists = data.data
                for (i in lists){
                log(lists[i].taskDesc)
                taskid = lists[i].id
                taskName = lists[i].taskName
                taskType = lists[i].taskType
                firstCommentGrow = lists[i].firstCommentGrow
                await getTaskDetail(taskid,taskType)
                log('====addBrowse====')
                await addBrowse(taskid,taskType)
                log('====addShareTaskComment====')
                await addShareTaskComment(taskid,firstCommentGrow)
                log('====addShareCoin====')
                await addShareCoin(taskid,taskName)
                }
                } else 
                    log(data)

                    
                
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
async function getTaskDetail(a,b) {
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('id='+a+'taskType='+b+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'https://ssl.zyzxsc.com/assosser/assessorTask/getTaskDetail?id='+a+'&taskType='+b+'&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session,
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
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
                    log(JSON.stringify(response.data));
                }
                if (data.code == 0) {
log(data.msg)
                } else 
                    log(data.msg)

                    
                
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
async function addBrowse(a,b) {
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('id='+a+'taskType='+b+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/assessorTask/addBrowse',
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',

    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',

    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',

    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
  },
data:'id='+a+'&taskType='+b+'&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session
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
log(data)
                } else 
                    log(data)

                    
                
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
async function addShareTaskComment(a,b) {
        comment = comment_list[randomNumber(0,10)]
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('content='+comment+'firstCommentGrow='+b+'taskId='+a+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/taskComment/addShareTaskComment',
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',

  },
data:'content='+comment+'&firstCommentGrow='+b+'&taskId='+a+'&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session
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
log(data)
                } else 
                    log(data)

                    
                
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

async function addShareCoin(a,b) {
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('taskId='+a+'taskName='+b+'taskType=1tip=1'+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/assessorTask/addShareCoin',
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
  },

data:'taskId='+a+'&taskName='+b+'&taskType=1&tip=1&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session
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
log(data)
                } else 
                    log(data)

                    
                
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
async function queryRemainingQuantity() {
        requestTimestamp = new Date().Format('yyyyMMddHHmm')
        requestEs = MD5('equityExclusive=0gradeId=1000000002seckillId=0'+requestTimestamp)

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://ssl.zyzxsc.com/assosser/services/equityExchange/queryRemainingQuantity',
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
  },

data:'equityExclusive=0&gradeId=1000000002&seckillId=0&requestEs='+requestEs+'&requestTimestamp='+requestTimestamp+'&session='+session
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
                equitylist = data.data
                for( i in equitylist){
                log('\nproductId:'+equitylist[i].productId) 
                log('gradeId:'+equitylist[i].gradeId)
                log('publicConfigId:'+equitylist[i].publicConfigId)
                log('couponId:'+equitylist[i].couponId) 
                log('tariffNumber:'+equitylist[i].tariffNumber) 
                
                log('\n'+equitylist[i].tariffName+'\n库存:'+equitylist[i].totalNum+'\n已兑换:'+equitylist[i].useredNum+'\n'+equitylist[i].consumptionSum+'福币可兑换,剩余'+equitylist[i].surplus+'%')  
                }
                } else 
                    log(data)

                    
                
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
async function checkGameUser() {


    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'https://ssl.h5webplatform.cn/assosser/gameWheelFragment/checkGameUser?gameId=1000000141&userPhoneno='+encodePhone,
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
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
                    log(JSON.stringify(response.data));
                }
                if (data.retFlag == 0) {
totalUsable = data.userInfo.totalUsable
log('totalUsable:'+totalUsable)
for(let i=0;i<totalUsable;i++){
    await wheelLottery()
}
  

                } else 
                    log(data.retMsg)

                    
                
            } catch (e) {
                log(`异常：${data}，原因：${data.retMsg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function wheelLottery() {


    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'https://ssl.h5webplatform.cn/assosser/gameWheelFragment/wheelLottery?gameId=1000000141&userPhoneno='+encodePhone+'&userId='+id+'&userType=1&channelCode=lwz0001',
  
  headers: {
    Host: 'ssl.zyzxsc.com',
    Connection: 'keep-alive',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    Origin: 'https://wx.online-cmcc.cn',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: 'https://wx.online-cmcc.cn/sichuan/sc/assessor/index.html',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
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
                    log(JSON.stringify(response.data));
                }
                if (data.retFlag == 0) {
log(data.retMsg)
                } else 
                    log(data.retMsg)

                    
                
            } catch (e) {
                log(`异常：${data}，原因：${data.retMsg}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function equityExchangeCaptcha() {

    return new Promise((resolve) => {
        var options = {
  method: 'GET',
  url: 'http://nm2.xyz/1.php?uid='+session+'&pid='+pid+'&fid='+fid,
  headers: {

  },
  
};
    if (debug) {
            log(`\n【debug】=============== 这是  请求 url ===============`);
            log(JSON.stringify(options));
        }
        axios.request(options).then(async function(response) {
 
            try {
            
                if (debug) {
                    log(`\n\n【debug】===============这是 返回data==============`);
                    log(JSON.stringify(response.data));
                }

pic = response.data




                
            } catch (e) {
                log(`异常：${data}，原因：${data}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function oauth() {

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://aip.baidubce.com/oauth/2.0/token?client_id=AcoqssA1SmVRg3s4uvQ9iSLY&client_secret=2usLP9xWvf3Tr6gF8Mcz6Ga9vE97gF0p&grant_type=client_credentials',
  headers: {

'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/json'
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
                    log(JSON.stringify(response.data));
                }

   access_token = data.access_token



                
            } catch (e) {
                log(`异常：${data}，原因：${data}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
async function accurate(a) {

    return new Promise((resolve) => {
        var options = {
  method: 'POST',
  url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate?access_token='+access_token,
  headers: {

'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/json'
  },
        data: {
                'image': a
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

   words = data.words_result[0].words
   
   log('验证码：'+words)



                
            } catch (e) {
                log(`异常：${data}，原因：${data}`)
            }
        }).catch(function(error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'S+': this.getMilliseconds()
  };
  //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
  if (/(y+)/.test(fmt)) {
    //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
    }
  }
  return fmt;
};

async function Envs() {
    if (scydhd) {
        if (scydhd.indexOf("@") != -1) {
            scydhd.split("@").forEach((item) => {

                scydhdArr.push(item);
            });
        } else if (scydhd.indexOf("\n") != -1) {
            scydhd.split("\n").forEach((item) => {
                scydhdArr.push(item);
            });
        } else {
            scydhdArr.push(scydhd);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 scydhd`)
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
function randomNumber(Min, Max) {
    return (Min + Math.round(Math.random() * (Max - Min)));
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
var MD5=function(string){function RotateLeft(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));}function AddUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}}function F(x,y,z){return(x&y)|((~x)&z);}function G(x,y,z){return(x&z)|(y&(~z));}function H(x,y,z){return(x^y^z);}function I(x,y,z){return(y^(x|(~z)));}function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b);}function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;}function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);}return WordToHexValue;}function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}return utftext;}var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(string);x=ConvertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD);}var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return temp.toLowerCase();}
function randomString(m) {
    for (var e = m > 0 && void 0 !== m ? m : 21, t = ""; t.length < e;) t += Math.random().toString(36).slice(2);
    return t.slice(0, e)
}
function str(a){

a = a.replace(/\//g,'%2F')
a = a.replace(/\=/g,'%3D')
a = a.replace(/\+/g,'%2B')
return a
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
