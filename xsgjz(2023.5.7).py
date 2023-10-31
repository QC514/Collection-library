#变量xsgCookie，抓取小时工记账的authorization变量
#定时5 6-18/3 * * *   （6点到八点每3小时运行一次)(定时看情况运行我这个脚本有的时候报错有的奖励领不到)
#定时5 6-18/6 * * *   （6点到八点每6小时运行一次)

from cgitb import text
import json
import time
import requests as r
import requests
import re
import json
import os

#获取名字链接
mzurl = "https://xsg-api.julanling.com/app/user/info" 
#获取金币数量链接
jburl = "https://xsg-api.julanling.com/h5/api/activityThirdAccount/coin/getAccount"
#签到链接
signurl = "https://market-gateway.julanling.com/market-center/api2/signIn/signIn"
#转盘链接
zpurl = "https://market-gateway.julanling.com/market-center/api2/dial/luckyDraw"
#转盘金币领奖链接
zpljurl = "https://market-gateway.julanling.com/market-center/api2/dial/receiveDialCoin"
#转盘宝箱领奖链接
zpbxurl = "https://market-gateway.julanling.com/market-center/api2/dial/openBox"
#转盘双倍卡链接
zpsburl = "https://market-gateway.julanling.com/market-center/api2/dial/receiveDoubleCardBag"
#获取宝箱状态
bxzturl= "https://market-gateway.julanling.com/market-center/api2/dial/detailCore?appVersion=4.4.20"
#刷新扭蛋状态
ndsxurl = "https://market-gateway.julanling.com/market-center/api2/gacha/index?os=ANDROID&appVersion=4.4.20"
#扭蛋链接
ndurl = "https://market-gateway.julanling.com/market-center/api2/gacha/luckyDraw"
#扭蛋广告链接
ndadurl = "https://market-gateway.julanling.com/market-center/api2/gacha/finishGachaTask"
#7次广告链接
qiadurl = "https://market-gateway.julanling.com/market-center/api2/assignment/finishAssignment"
#扭蛋碎片兑换
nddhurl = "https://market-gateway.julanling.com/market-center/api2/gacha/cashExchange"
#任务列表链接
rwlburl = "https://market-gateway.julanling.com/market-center/api2/assignment/batchListByPositions?positions=MONEY_CENTER_NEW_WELFARE,MONEY_CENTER_DAILY_WELFARE,MONEY_CENTER_GLOBAL_WELFARE,MONEY_CENTER_WEEK_WELFARE&os=ANDROID&appVersion=6.9.30&appChannel=xiaomi&deviceToken=aadc1864a17c7493e6190f63c2dd0e4c"
#任务列表奖励链接
rwlbjlurl = "https://market-gateway.julanling.com/market-center/api2/assignment/receiveAwardByBusinessType"



if os.environ.get("xsgCookie"):
    dvm = os.environ["xsgCookie"]
    if dvm != '':
        if "@" in dvm:
            Coo = dvm.split("@")
        elif "&" in dvm:
            Coo = dvm.split('&')
        else:
            Coo = dvm.split('\n')
    adv=1
    for i in Coo:
        try:
            headers = {
                "security": "cD1jb20uanVsYW5nbGluZy54c2dqeiZjPXhzZ2p6X3lpbmd5b25nYmFvJnY9NC40LjIwJmQ9MzU1MWU0MDFiYjQ0MWVlY2JiNDU5ZjkwMDE1MzJlMzEmdT1ZN2wyVitQNWdOd0RBRFZjR0huQ2VzbXAmdD0xNjczMDk4OTY5.7e9e9d0818df515f6a384d9d5debde40",
                "authorization": i,
                "user-agent": 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.105 Mobile Safari/537.36;_android{"version":4420,"versionName":"4.4.20","userType":"1","sdkVersion":"30","statusBarHeight":29,"toolBarHeight":73,"imei":"","oaid":"ad58bc17b41a81c7","channel":"xsgjz_yingyongbao","uid":10522}_android',
                "content-type": "application/json;charset=UTF-8"
            }

            #登录验证
            resp = r.post(mzurl, headers=headers)
            xx = json.loads(resp.text)
            if xx["results"] == "null":
                print("❌登录失败，请重新获取Authorization")
                continue
            else:
                name = xx["results"]["nickname"]
                print(f'******开始【小时工记账账号{adv}】{name} *********')
                adv=adv+1
            
            #获取金币数量
            jb = r.post(jburl, headers=headers)
            xb = json.loads(jb.text)
            if xb["results"] == "null":
                print("❌获取金币失败，请检测Authorization是否可用")
            else:
                print("💰目前金币数量:"+str(xb["results"]["credits"]))
                print("💰可提现:"+str(xb["results"]["aboutAmount"]))
                print("💰今日赚取金币数量:"+str(xb["results"]["currentCredits"]))

            time.sleep(2)

            #签到
            qdbody = {"os":"ANDROID","appVersion":"4.4.20","appChannel":"xsgjz_yingyongbao","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9"}
            qd = r.post(signurl, headers=headers, json=qdbody)
            qdd = json.loads(qd.text)
            print("📅开始签到")
            if qdd["errorCode"] == 0:
                print("✅签到成功获取金币:"+str(qdd["results"]["amount"]))
            else:
                print("❌签到失败原因:"+str(qdd["errorStr"]))

            time.sleep(2)

            #扭蛋
            vc=1
            bc=1
            #先刷新扭蛋列表
            ndsx = r.get(ndsxurl, headers=headers)
            ndsxx = json.loads(ndsx.text)
            #判断扭蛋广告可观看次数
            ndadcs= ndsxx["results"]["remainVideoTimes"]
            print("🥚扭蛋广告剩余次数"+str(ndadcs))
            #观看扭蛋广告
            for o in range(ndadcs):
                print("🥚开始第"+str(bc)+"次观看扭蛋广告")
                bc=bc+1
                time.sleep(3)
                ndadbody={"businessType":"XSG_DAILY_GACHA_INC_VIDEOS","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","version":"4.4.20","os":"ANDROID","appVersion":"4.4.20","appChannel":"unknow"}
                ndad = r.post(ndadurl, headers=headers,json=ndadbody)
                nddad = json.loads(ndad.text)
                if nddad['errorCode'] == 0: 
                    print("🥚获得"+str(nddad["results"]["amount"])+"次抽奖次数")
                    print("🥚目前有"+str(nddad["results"]["remainTimes"])+"次抽奖次数")
                    time.sleep(3)
                else:
                    print("❌扭蛋失败原因"+nddad['errorStr'])


            ndsx = r.get(ndsxurl, headers=headers)
            ndsxx = json.loads(ndsx.text)
            #判断扭蛋次数
            ndsycs = ndsxx["results"]["remainTimes"]
            print("🥚扭蛋剩余次数"+str(ndsycs))
            #开始扭蛋
            for o in range(ndsycs):
                print("🥚开始第"+str(vc)+"次扭蛋")
                vc=vc+1
                time.sleep(3)
                ndbody={"deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","version":"4.4.20","os":"ANDROID","appVersion":"4.4.20","appChannel":"unknow"}
                nd = r.post(ndurl, headers=headers,json=ndbody)
                ndd = json.loads(nd.text)
                if ndd['errorCode'] == 0: 
                    if ndd["results"]["awardType"] == 'ADVERT':
                        print("💨抽到了空气广告")
                    else:
                        print("🧩抽到"+str(ndd["results"]["name"]))
                else:
                    print("❌扭蛋失败原因"+ndd['errorStr'])
            #判断是否可以提现
            ndsx = r.get(ndsxurl, headers=headers)
            ndsxx = json.loads(ndsx.text)
            yyspbody = {"payChannel":"ALI_PAY","goodsId":"300100","deviceToken":"28918e23fb8c9d0e91cc440e768c635c","version":"4.4.20","os":"ANDROID","appVersion":"4.4.20","appChannel":"unknow"}
            if ndsxx["errorCode"] == 0:
                yysp= ndsxx["results"]["exchangeList"][7]["chipNum"]
                print("🧩目前一元话费碎片数量:"+str(yysp))
                if yysp >= 10 :
                    print("⭐一元碎片达到10片开始兑换")
                    nddh = r.post(nddhurl, headers=headers,json=yyspbody)
                    ndddh = json.loads(nddh.text)
                    if ndddh["errorCode"] == 0:
                        print("💰提现一元成功")
                    else:
                        print("❌提现失败原因："+str(ndddh["errorStr"]))

            time.sleep(3)

            #转转盘
            nc=1
            zzpyz = r.get(bxzturl, headers=headers)
            zptz = json.loads(zzpyz.text)
            zpsycs = str(zptz["results"]["dialValidNum"])
            print("🕛转盘剩余次数"+zpsycs)
            zpsycs=int(zpsycs)
            for o in range(zpsycs):
                print("🕛开始第"+str(nc)+"次转盘")
                time.sleep(3)
                nc=nc+1 
                body = {"appChannel":"xsgjz_yingyongbao","appVersion":"4.4.20","appPackage":"com.julangling.xsgjz","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","operatingSystem":"ANDROID"}
                zp = r.post(zpurl, headers=headers,json=body)
                zpp = json.loads(zp.text)
                if zpp["errorCode"] == 0:
                    if zpp["results"]["awardType"] == "GOLD":
                        biz = zpp["results"]["bizNo"]
                        zpbody = {
                            "bizNo":biz,
                            "appChannel":"xsgjz_yingyongbao",
                            "appVersion":"4.4.20",
                            "appPackage":"com.julangling.xsgjz",
                            "deviceToken":"19a9e4453155dcbc348f5fbff0c075c9",
                            "operatingSystem":"ANDROID"
                        }
                        time.sleep(3)
                        lj = r.post(zpljurl, headers=headers,json=zpbody)
                        ljj = json.loads(lj.text)
                        print("💴抽到金币"+str(ljj["results"]["amount"]))

                    elif zpp["results"]["awardType"] == "DOUBLE_VIDEO":
                        print("抽到双倍卡,需要观看广告")
                        biz = zpp["results"]["bizNo"]
                        zpbody = {
                            "bizNo":biz,
                            "appChannel":"xsgjz_yingyongbao",
                            "appVersion":"4.4.20",
                            "appPackage":"com.julangling.xsgjz",
                            "deviceToken":"19a9e4453155dcbc348f5fbff0c075c9",
                            "operatingSystem":"ANDROID"
                            }
                        time.sleep(3)
                        sb = r.post(zpsburl, headers=headers,json=zpbody)
                        sbb = json.loads(sb.text)
                        print("观看成功剩余翻倍奖励次数"+str(sbb["results"]["dialCardBag"]["DOUBLE"]))

            print("🔚转盘结束，查看可领取那些宝箱")
            #转盘5次宝箱奖励body
            bx1={"businessType":"XSG_BOX_ONE","appChannel":"xsgjz_yingyongbao","appVersion":"4.4.20","appPackage":"com.julangling.xsgjz","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","operatingSystem":"ANDROID"}
            #转盘18次宝箱奖励body
            bx2={"businessType":"XSG_BOX_TWO","appChannel":"xsgjz_yingyongbao","appVersion":"4.4.20","appPackage":"com.julangling.xsgjz","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","operatingSystem":"ANDROID"}
            #转盘30次宝箱奖励body
            bx3={"businessType":"XSG_BOX_THREE","appChannel":"xsgjz_yingyongbao","appVersion":"4.4.20","appPackage":"com.julangling.xsgjz","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","operatingSystem":"ANDROID"}
            #转盘55次宝箱奖励body
            bx4={"businessType":"XSG_BOX_FOUR","appChannel":"xsgjz_yingyongbao","appVersion":"4.4.20","appPackage":"com.julangling.xsgjz","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9","operatingSystem":"ANDROID"}

            #转盘宝箱领取
            time.sleep(3)
            print("🎁开始领转盘5次箱子奖励")
            zpbx1 = r.post(zpbxurl, headers=headers,json=bx1)
            bxx1 = json.loads(zpbx1.text)
            if bxx1["errorCode"] == 0:
                results = bxx1['results']
                openBoxAwards = results['openBoxAwards']
                bx1jb = openBoxAwards[0]['amount']
                print("💴领取成功获得"+str(bx1jb)+"金币")
            else:
                print("❌领取失败，原因:"+str(bxx1["errorStr"]))
                time.sleep(3)

            time.sleep(3)
            print("🎁开始领转盘18次箱子奖励")
            zpbx2 = r.post(zpbxurl, headers=headers,json=bx2)
            bxx2 = json.loads(zpbx2.text)
            if bxx2["errorCode"] == 0:
                results2 = bxx2['results']
                openBoxAwards2 = results2['openBoxAwards']
                bx2jb = openBoxAwards2[0]['amount']
                print("💴领取成功获得"+str(bx2jb)+"金币")
                bxbizNo2 = bxx2['results']['openBoxAwards'][1]['bizNo']
                print("🖥️领取箱子双倍卡,需要观看广告")
                zpbody = {
                    "bizNo":bxbizNo2,
                    "appChannel":"xsgjz_yingyongbao",
                    "appVersion":"4.4.20",
                    "appPackage":"com.julangling.xsgjz",
                    "deviceToken":"19a9e4453155dcbc348f5fbff0c075c9",
                    "operatingSystem":"ANDROID"
                    }
                time.sleep(3)
                sb = r.post(zpsburl, headers=headers,json=zpbody)
                sbb = json.loads(sb.text)
                print("🖥️观看成功剩余翻倍奖励次数"+str(sbb["results"]["dialCardBag"]["DOUBLE"]))
                del bxx2
                del results2
                del openBoxAwards2
                del bx2jb
                del bxbizNo2
                del sb
                del sbb
            else:
                print("❌领取失败，原因:"+str(bxx2["errorStr"]))
                time.sleep(3)
            

            time.sleep(5)
            print("🎁开始领转盘30次箱子奖励")
            zpbx3 = r.post(zpbxurl, headers=headers,json=bx3)
            bxx3 = json.loads(zpbx3.text)
            if bxx3["errorCode"] == 0:
                results3 = bxx3['results']
                openBoxAwards3 = results3['openBoxAwards']
                bx3jb = openBoxAwards3[0]['amount']
                print("💴领取成功获得"+str(bx3jb)+"金币")
                bxbizNo3 = bxx3['results']['openBoxAwards'][1]['bizNo']
                print("🖥️领取箱子双倍卡,需要观看广告")
                zpbody = {
                    "bizNo":bxbizNo3,
                    "appChannel":"xsgjz_yingyongbao",
                    "appVersion":"4.4.20",
                    "appPackage":"com.julangling.xsgjz",
                    "deviceToken":"19a9e4453155dcbc348f5fbff0c075c9",
                    "operatingSystem":"ANDROID"
                    }
                time.sleep(3)
                sb = r.post(zpsburl, headers=headers,json=zpbody)
                sbb = json.loads(sb.text)
                print("🖥️观看成功剩余翻倍奖励次数"+str(sbb["results"]["dialCardBag"]["DOUBLE"]))
                del bxx3
                del results3
                del openBoxAwards3
                del bx3jb
                del bxbizNo3
                del sb
                del sbb
            else:
                print("❌领取失败，原因:"+str(bxx3["errorStr"]))
                time.sleep(3)
            
            

            time.sleep(3)
            print("🎁开始领转盘55次箱子奖励")
            zpbx4 = r.post(zpbxurl, headers=headers,json=bx4)
            bxx4 = json.loads(zpbx4.text)
            if bxx4["errorCode"] == 0:
                results4 = bxx4['results']
                openBoxAwards4 = results4['openBoxAwards']
                bx4jb = openBoxAwards4[0]['amount']
                print("💴领取成功获得"+str(bx4jb)+"金币")
                bxbizNo4 = bxx4['results']['openBoxAwards'][1]['bizNo']
                print("🖥️领取箱子双倍卡,需要观看广告")
                zpbody = {
                    "bizNo":bxbizNo4,
                    "appChannel":"xsgjz_yingyongbao",
                    "appVersion":"4.4.20",
                    "appPackage":"com.julangling.xsgjz",
                    "deviceToken":"19a9e4453155dcbc348f5fbff0c075c9",
                    "operatingSystem":"ANDROID"
                    }
                time.sleep(3)
                sb = r.post(zpsburl, headers=headers,json=zpbody)
                sbb = json.loads(sb.text)
                print("🖥️观看成功剩余翻倍奖励次数"+str(sbb["results"]["dialCardBag"]["DOUBLE"]))
                del bxx4
                del results4
                del openBoxAwards4
                del bx4jb
                del bxbizNo4
                del sb
                del sbb
            else:
                print("❌领取失败，原因:"+str(bxx4["errorStr"]))
                time.sleep(3)
            #看广告7次
            for c in range(7):
                qiadbody={"businessType":"XSG_MONEY_CENTER_INCENTIVE_VIDEO","os":"ANDROID","appVersion":"4.4.20","appChannel":"xsgjz_yingyongbao","deviceToken":"19a9e4453155dcbc348f5fbff0c075c9"}
                adws = r.post(qiadurl, headers=headers,json=qiadbody)
                adwss = json.loads(adws.text)
                if adwss['errorCode'] == 0:
                    adwssjb = adwss["results"]["awardInfos"]
                    adwssjbb = adwssjb[0]['amount']
                    print("💴获得金币"+str(adwssjbb)+"个")
                    print("💤等待20秒,才可以观看广告")
                    time.sleep(21)
                else:

                    break
            
            #任务列表奖励
            rwlb = r.get(url=rwlburl,headers=headers)
            p=json.loads(rwlb.text)['results']['assignmentListResp']['MONEY_CENTER_DAILY_WELFARE']['assignments']
            # print(p)
            for c in p:
                if c['statistics']=='转盘活动':
                    h=c['assignmentStatusInfo']['buttonInfo']['MSG']
                    if h=='领金币':
                        businessType=c['businessType']
                        print('🕛开始领转盘任务金币奖励')
                        zprw1 = {"businessType":businessType,"os":"ANDROID","appVersion":"6.9.30","appChannel":"xiaomi","deviceToken":"aadc1864a17c7493e6190f63c2dd0e4c"}
                        rwlbjl = r.post(url=rwlbjlurl, headers=headers,json=zprw1)
                        rwl = json.loads(rwlbjl.text)
                        if rwl["errorCode"] == 0:
                            results = rwl['results']
                            awardInfos = results["awardInfos"]
                            rwjb = awardInfos[0]['amount']
                            print("💴获得"+str(rwjb)+"金币")
                        else:
                            print("❌领取失败，原因:"+str(rwl["errorStr"]))
                elif c['statistics']=='扭蛋活动':
                    h = c['assignmentStatusInfo']['buttonInfo']['MSG']
                    if h=='领金币':
                        businessType=c['businessType']
                        print('🥚开始领扭蛋任务金币奖励')
                        zprw1 = {"businessType":businessType,"os":"ANDROID","appVersion":"6.9.30","appChannel":"xiaomi","deviceToken":"aadc1864a17c7493e6190f63c2dd0e4c"}
                        rwlbjl = r.post(url=rwlbjlurl, headers=headers,json=zprw1)
                        rwl = json.loads(rwlbjl.text)
                        if rwl["errorCode"] == 0:
                            results = rwl['results']
                            awardInfos = results["awardInfos"]
                            rwjb = awardInfos[0]['amount']
                            print("💴获得"+str(rwjb)+"金币")
                        else:
                            print("❌领取失败，原因:"+str(rwl["errorStr"]))
                else:
                    continue
        except:
            print("脚本报错执行下一个账号")

    
