/*
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
软件名：聚看点
下载地址:http://a.app.qq.com/o/simple.jsp?ctx=1638082481021&pkgname=com.xiangzi.jukandian&ckey=CK1416436838701
邀请码必填得金币 24494192
[rewrite_local]
https://www.xiaodouzhuan.cn/jkd/weixin20/member/code.jsp? url script-request-header https://gitee.com/gossh520/script/raw/master/jkdapp.js
hostname = www.xiaodouzhuan.cn
##点我的邀请码获取数据##
nodejs变量
export jkdck='"xz_jkd_appkey=xxxxxxxx!iOS!5.6.5"'
多账号用@隔开
*/

// [task_local]
//#聚看点
// 10 10 * * * https://gitee.com/gossh520/script/raw/master/jkdapp.js, tag=聚看点, enabled=true
const $ = new Env('聚看点APP');
const notify = $.isNode() ? require('./sendNotify') : '';
let status;
status = (status = ($.getval("jkdstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let userIdx = 0;
let userCount = 0;
let userStatus = [];
let jkdckArr = [];
let jkdck = $.isNode() ? (process.env.jkdck ? process.env.jkdck : "") : ($.getdata('jkdck') ? $.getdata('jkdck') : "");
let jkdcks = "";
let DD = RT(31000, 35000);
let tz = ($.getval('jkdtz') || '1');
let host=`https://www.xiaodouzhuan.cn`;
$.message = ''
//开始运行
!(async () => {
  if (typeof $request !== "undefined") {
    huoquck()
  } else {
    if (!$.isNode()) {
      jkdckArr.push($.getdata('jkdck'))
      let count = ($.getval('jkdcount') || '1');
      for (let i = 2; i <= count; i++) {
        jkdckArr.push($.getdata(`jkdck${i}`))
      }
      if (!jkdckArr[0]) {
        $.log(`\n【傻吊提示】：你没填写ck跑个嘚`)
        $.message += `\n【傻吊提示】：你没填写ck跑个嘚`
      } else {
        userCount = jkdckArr.length
        console.log(`-------------共发现${userCount}个账号-------------\n`)
        await byxiaopeng()
      }
    } else {
      if (process.env.jkdck && process.env.jkdck.indexOf('@') > -1) {
        jkdckArr = process.env.jkdck.split('@');
        console.log(`您选择的是用"@"隔开\n`)
      } else {
        jkdcks = [process.env.jkdck]
      };
      Object.keys(jkdcks).forEach((item) => {
        if (jkdcks[item]) {
          jkdckArr.push(jkdcks[item])
        }
      })
      if (!jkdckArr[0]) {
        $.log(`\n【傻吊提示】：你没填写ck跑个嘚`)
        $.message += `\n【傻吊提示】：你没填写ck跑个嘚`
      } else {
        userCount = jkdckArr.length
        console.log(`-------------共发现${userCount}个账号-------------\n`)
        await byxiaopeng()
      }
    }
  }
  message() //通知
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//获取ck  
function huoquck() {
  if ($request.url.indexOf("jkd/weixin20/member") > -1) {
    if ($request.headers['Cookie']) {
      const jkdck = $request.headers['Cookie']
      $.log(`获取到Cookie: ${jkdck}`)
      $.message += `\n获取到Cookie: ${jkdck}`
      $.setdata(JSON.stringify(jkdck), `jkdck${status}`)
      $.message += '聚看点' + `${status}` + '数据获取成功！'
    }
  }
}
//要执行的代码
async function byxiaopeng() {
  //cookie = JSON.parse(jkdck)
  //n = cookie.match(/xz_jkd_appkey=(.+)/)[1]
  //console.log(n)
  //n = n.split('!')
  //openid = n[0]
  await panduan()
}
//脚本判断
function panduan(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://ppp520.coding.net/p/Gridea/d/Gridea/git/raw/master/code.json`,
      headers: {
        'Accept': 'application/json',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
      },
    }
    $.get(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data);
        if (result.jkdcode == 1) {
          $.log(`\n【脚本状态】：${result.jkdmsg}`)
          $.message += `\n【脚本状态】：${result.jkdmsg}`
          console.log('\n开始登录任务')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await userlogin()
          }
        
          console.log('\n开始用户信息')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await infoMe()
          }

          console.log('\n开始用户签到')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await sign()
          }
          console.log('\n开始用户分享')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await signShare()
          }
          console.log('\n开始任务中心气泡')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await getMoneyTreeProfit()
          }

          console.log('\n开始观看视频推荐')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await artlist()
          }

          console.log('\n开始观看新闻推荐')
          for (userIdx = 0; userIdx < userCount; userIdx++) {
            await $.wait(1000)
            await artlist1()
          }
          $.message += `\n【全部阅读新闻已全部完成】`
        } else {
          $.log(`\n【脚本状态】：${result.jkdmsg}`)
          $.message += `\n【脚本状态】：${result.jkdmsg}`
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//签到
function sign(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `${host}/jkd/task/sign.action?openID=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}&accountType=0`,
      headers: {
        'Content-Type' :'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent' :'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)'
      },
    }
    $.get(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}签到成功获得】：${result.datas.profitDesc}`)
          $.log(`\n【用户${userIdx + 1}签到天数】：${result.datas.signDays}`)
          $.log(`\n【用户${userIdx + 1}明天签到可获得金币】：${result.datas.nextSignAmt}`)
          $.message += `\n【用户${userIdx + 1}签到成功获得】：${result.datas.profitDesc}`
          $.message += `\n【用户${userIdx + 1}签到天数】：${result.datas.signDays}`
          $.message += `\n【用户${userIdx + 1}明天签到可获得金币】：${result.datas.nextSignAmt}`
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//每日分享
function signShare(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `${host}/jkd/account/signShareAccount.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)'
      },
      body: `jsondata={  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "channel" : "iOS",  "os" : "iOS",  "appversioncode" : "565",  "time" : "${time}",  "psign" : "92dea068b6c271161be05ed358b59932",  "apptoken" : "xzwltoken070704",  "appid" : "xzwl",  "appversion" : "5.6.5"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}分享成功获得金币】：${result.profit}`)
          $.message += `\n【用户${userIdx + 1}分享成功获得金币】：${result.profit}`
        } else {
          $.log(`\n【用户${userIdx + 1}分享信息】：` + result['rtn_msg'])
          $.message += `\n【用户${userIdx + 1}分享信息】：` + result['rtn_msg']
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//账户信息
function infoMe(timeout = 0) {
  return new Promise((resolve) => {
    time=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/newMobileMenu/infoMe.action`,
      headers: {
        'Content-Type' :'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent' :'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)'
      },
      body:`jsondata={  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "channel" : "iOS",  "os" : "iOS",  "appversioncode" : "565",  "time" : "${time}",  "psign" : "92dea068b6c271161be05ed358b59932",  "apptoken" : "xzwltoken070704",  "appid" : "xzwl",  "appversion" : "5.6.5"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【欢迎吊毛用户】：${result.userinfo.username}`)
          $.log(`\n【用户${userIdx + 1}今日金币】：${result.userinfo.infoMeGoldItem.value}`)
          $.message += `\n【欢迎吊毛用户】：${result.userinfo.username}`
          $.message += `\n【用户${userIdx + 1}今日金币】：${result.userinfo.infoMeGoldItem.value}`
        } else {
          $.log(`\n【用户${userIdx + 1}账户信息】：`+ result.msg)
          $.message += `\n【用户${userIdx + 1}账户信息】：`+ result.msg
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//任务中心气泡
function getMoneyTreeProfit(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `${host}/jkd/task/getMoneyTreeProfit.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)'
      },
      body: `box_type=1`
    }
    $.post(url, async (err, resp, data) => {
      try {
        //result = JSON.parse(data)
        if (data > 0) {
          $.log(`\n【用户${userIdx + 1}当前气泡金币】：${data}`)
          $.message += `\n【用户${userIdx + 1}当前气泡金币】：${data}`
          await getTaskBoxProfit()
        } else {
          $.log(`\n【用户${userIdx + 1}当前气泡金币】：${data}`)
          $.message += `\n【用户${userIdx + 1}当前气泡金币】：${data}`
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//气泡领取金币
function getTaskBoxProfit(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `${host}/jkd/task/getTaskBoxProfit.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)'
      },
      body: `box_type=1`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}领取气泡金币】：${result.profit}`)
          $.message += `\n【用户${userIdx + 1}领取气泡金币】：${result.profit}`
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}

//视频推荐页面
function artlist(timeout = 0) {
  return new Promise((resolve) => {
    time1=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/newmobile/artlist.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "connectionType" : 100,  "optaction" : "up",  "pagesize" : 12,  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time1}",  "apptoken" : "xzwltoken070704",  "cateid" : 53,  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "appversion" : "5.6.5",  "idfa" : "00000000-0000-0000-0000-000000000000",  "operatorType" : 0,  "page" : 1}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          /*
          if (result.artlist) {
            List = result.artlist
            for (let i = 1; i < List.length; i++) {
              qlid = List[i]['art_id']
              qrequestid = List[i]['request_id']
              await artDetail(qlid,qrequestid)
              await $.wait(DD)
              await readAccount(qlid)
            }
        }
        */
          qllist = result.artlist
          qlid = qllist[0]['art_id']
          qrequestid = qllist[0]['request_id']
          await artDetail(qlid,qrequestid)
          await $.wait(DD)
          await readAccount(qlid)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//阅读视频
function artDetail(artid,requestid) {
  return new Promise((resolve) => {
    time2=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/newmobile/artDetail.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time2}",  "apptoken" : "xzwltoken070704",  "requestid" : "${requestid}",  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "artid" : ${artid},  "appversion" : "5.6.5",  "relate" : "1",  "scenetype" : ""}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx+1}观看视频id】: ${artid}`)
          //$.message += `\n【观看视频】：${result.ret}`
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}
//领取视频奖励
function readAccount(artid) {
  return new Promise((resolve) => {
    time3=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/account/readAccount.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "read_weal" : 0,  "paytype" : 2,  "securitykey" : "",  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time3}",  "apptoken" : "xzwltoken070704",  "appversion" : "5.6.5",  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "artid" : ${artid},  "accountType" : "0",  "readmodel" : "1"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}观看视频奖励】:${result.profit}`)
          //$.message += `\n【观看视频奖励】：${result.profit}`
          await $.wait(2000)
          await artlist()
        } else {
          $.log(`\n【用户${userIdx + 1}观看视频奖励】：${result.rtn_msg}`)
          $.message += `\n【用户${userIdx + 1}观看视频奖励】：${result.rtn_msg}`
        }
        }
       catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

//新闻推荐页面
function artlist1(timeout = 0) {
  return new Promise((resolve) => {
    time4=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/newmobile/artlist.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "connectionType" : 100,  "optaction" : "up",  "pagesize" : 12,  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time4}",  "apptoken" : "xzwltoken070704",  "cateid" : 3,  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "appversion" : "5.6.5",  "idfa" : "00000000-0000-0000-0000-000000000000",  "operatorType" : 0,  "page" : 1}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          /*
          if (result.artlist) {
            List = result.artlist
            for (let i = 1; i < List.length; i++) {
              qlid = List[i]['art_id']
              await $.wait(2000)
              await articleDetail(qlid)
              await $.wait(DD)
              await xwreadAccount(qlid)
            }
        }
        */
          qllist = result.artlist
          qlid = qllist[1]['art_id']
          await articleDetail(qlid)
          await $.wait(DD)
          await xwreadAccount(qlid)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
//阅读新闻
function articleDetail(artid) {
  return new Promise((resolve) => {
    time5=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/newmobile/articleDetail.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "channel" : "iOS",  "os" : "iOS",  "appversioncode" : "565",  "time" : "${time5}",  "psign" : "92dea068b6c271161be05ed358b59932",  "artid" : ${artid},  "apptoken" : "xzwltoken070704",  "appid" : "xzwl",  "appversion" : "5.6.5"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}阅读新闻id】:  ${artid}`)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}
//领取新闻奖励
function xwreadAccount(artid) {
  return new Promise((resolve) => {
    time6=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/account/readAccount.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "read_weal" : 0,  "paytype" : 1,  "securitykey" : "",  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time6}",  "apptoken" : "xzwltoken070704",  "appversion" : "5.6.5",  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "artid" : ${artid},  "accountType" : "0",  "readmodel" : "1"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}观看新闻奖励】：${result.profit}`)
          await $.wait(1000)
          await artlist1()
        } else {
          $.log(`\n【用户${userIdx + 1}观看新闻奖励】：${result.rtn_msg}`)
          $.message += `\n【用户${userIdx + 1}观看新闻奖励】：${result.rtn_msg}`
        }
        }
       catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, 0)
  })
}

//UM_distinctid 17d64b22cba8-0230a5ca212f308-39176d50-4a640-17d64b22cbbc05
//xz_jkd_appkey 05679c6b6d3742918aece297c06b688a!iOS!5.6.5
//JSESSIONID C2E3D26EC3AA1FDA9542CEE8C5F30C32
//在线时长
function userlive(timeout = 0) {
  return new Promise((resolve) => {
    time7=Math.round(new Date().getTime()/1000).toString()
    let url = {
      url: `${host}/jkd/user/userlive.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': `xz_jkd_appkey=${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}!iOS!5.6.5`,
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "videotime" : "0",  "addvideotime" : "0",  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time7}",  "apptoken" : "xzwltoken070704",  "appversion" : "5.6.5",  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "articletime" : "0",  "livetime" : "5400000",  "addarticletime" : "0",  "addlivetime" : "5400000",  "opdate" : "20211128"}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log("\n【在线时长增加】" + "90分钟")
        }
        }
       catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}


//重新登录
function userlogin(timeout = 0) {
  return new Promise((resolve) => {
    time8 = Math.round(new Date().getTime() / 1000).toString()
    let url = {
      url: `${host}/jkd/login/userlogin.action`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'LS10000!iOS!5.6.5',
        'User-Agent': 'JuKanDian/5.6.5 (iPhone; iOS 15.0.2; Scale/3.00)',
      },
      body: `jsondata={  "appid" : "xzwl",  "logout" : "0",  "channel" : "iOS",  "psign" : "92dea068b6c271161be05ed358b59932",  "appversioncode" : "565",  "time" : "${time8}",  "upopenid" : "",  "apptoken" : "xzwltoken070704",  "openid" : "${jkdckArr[userIdx].match(/xz_jkd_appkey=(\w+)/)[1]}",  "os" : "iOS",  "uniqueid" : "",  "appversion" : "5.6.5",  "umengid" : "",  "memid" : "",  "smid" : ""}`
    }
    $.post(url, async (err, resp, data) => {
      try {
        result = JSON.parse(data)
        if (result.ret == "ok") {
          $.log(`\n【用户${userIdx + 1}重新登录成功】`)
          $.message += `\n【用户${userIdx + 1}重新登录成功】`
        }
      }
      catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve()
      }
    }, timeout)
  })
}
function RT(X, Y) {
  do rt = Math.floor(Math.random() * Y);
  while (rt < X)
  return rt;
}
//通知
async function message() {
  if (tz == 1) {
      $.msg($.name, "", $.message)
  }
  if ($.isNode()) {
      await notify.sendNotify($.name, $.message)
  }
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}