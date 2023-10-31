#by：不才
# 18号的id
# 17:20----6FAEB8B631384C8290EE0A0924EDA728
# 17:30----B4394A5374304B1DA010AE5A98216F06
# 17:40----2F12F73F71A34308BB96B802F0402047
# 17:50----AF0348077FF1436AA9A1661A3E5BBB7C
# 18:00----5DE3087F38E94BD38FF7A0FB3B763352
# 18:10----45A45F8BD27D4BBABEB431BADB1811D1

import requests

#美团的token=xxx，记得每一场都要手动进去一下活动页面才能抢，填写ck和couponxxx就能抢
ck=''
couponReferId=''#场次id;

num = 50#抢购次数
#定时建议提前几秒

notice = 1#开启通知
token = ''#pushplus的token




name = '美团18-18抢购'
v = "1.0"
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,ru;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Cookie': ck,
    'Origin': 'https://market.waimai.meituan.com',
    'Referer': 'https://market.waimai.meituan.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'mtgsig':'{"cType":"mti","fpPlatform":3,"wxOpenId":"","appVersion":"","mtFingerprint":"H5dfp_1.8.2_tttt_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"}',    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'couponReferId': couponReferId,
    'actualLng': '113.551454',
    'actualLat': '23.32507',
    'geoType': '2',
    'gdPageId': '379391',
    'pageId': '378925',
    'version': '1',
    'utmSource': '70200',
    'utmCampaign': 'wmsq-678762',
    'instanceId': '16619982800580.30892480633143027',
    'componentId': '16619982800580.30892480633143027',
}

json_data = {
    'cType': 'wm_wxapp',
    'fpPlatform': 1,
    'wxOpenId': '',
    'appVersion': '',
    'mtFingerprint': 'H5dfp_1.8.2_tttt_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',
}
tip = "不才提醒您:"
i=0
while i < num:
    response = requests.post(   'https://promotion.waimai.meituan.com/lottery/limitcouponcomponent/fetchcoupon',
    params=params,
    headers=headers,
    json=json_data,

)
    print(tip+response.text)
    i+=1
def pushplus(content, token):
   title = '美团抢购通知: '
   url = 'http://www.pushplus.plus/send'
   data = {
      'token': token,
      'title': title,
      'content': content
   }
   res = requests.post(url, data=data).json()
   # print(res)
   try:
      status = '推送成功！' if res['code'] == 200 else res['msg']
      print(status)
   except:
      print('推送异常！')

if notice == 1:
   pushplus('不才提醒您'+response.text,token)
else:
   print("未开启推送")