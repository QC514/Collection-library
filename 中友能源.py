import requests,time,json,os,random
from notify import send
xiaoxi = "no"
user_cookie = os.getenv("zyny")
cookies = user_cookie.split("&")
class Zyny:
    url = "https://zyny123.h5.yunhuiyuan.cn/"
    payload ={}
    headers = {
    "Host": "zyny123.h5.yunhuiyuan.cn",
    "Connection": "keep-alive",
    "Content-Length": "2",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; V1986A Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5249 MMWEBSDK/20230504 MMWEBID/2183 MicroMessenger/8.0.37.2380(0x2800255B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
    "Content-Type": "application/json;charset\u003dUTF-8",
    "Origin": "https://zyny123.h5.yunhuiyuan.cn",
    "X-Requested-With": "com.tencent.mm",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://zyny123.h5.yunhuiyuan.cn/Member/PointCenter/?bid\u003d574c639c-3009-4b3b-9ab8-da4749c0189d",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q\u003d0.9,en-US;q\u003d0.8,en;q\u003d0.7",
   
  }
    def run(self):
        self.qd()
        
    def qd(self):
        print("正在运行签到")
        jieko = "Member/Sign?bid\u003d574c639c-3009-4b3b-9ab8-da4749c0187d"
        url = requests.post(self.url+jieko,headers=self.headers,json=self.payload).json()
        #print(url)
        print("签到成功" if url.get("success") == True else url.get("message"))
        time.sleep(3)
        return
    

sl=Zyny()
results = []
for o in range(len(cookies)):
    print("---------------开始运行中友能源账号%s-----------"%str(o+1))
    mse = "---------------开始运行中友能源账号%s-----------"%str(o+1)
    results.append(mse)
    ck=cookies[o]
    sl.headers["Cookie"]=ck
    sl.run()
if xiaoxi == "yes":
    print("运行推送:")
    result = '\n\n'.join(results)
    send("🎉中友能源🎉",result)
