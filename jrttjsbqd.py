import requests
import json
#by:不才
#就一个简单签到，不会用青龙变量，还在学，其它任务也在摸索,简单抓包请求，大佬看到写个完整的出来吧
#只有有开宝箱视频，签到，开宝箱接口，目测都是几金币，应该就签到能用吧，抓包：全部api5—normal域名全部cookie
#跑宝箱的定时0 0 */10 * * *，只跑签到0 * * *
cookie = ""#全部cookie
# pushplus推送
token = ""
notice = 0#0为不推送

print("这是一个垃圾本")
name = "今日头条极速版签到"
#签到
url = "https://api5-normal-lq.toutiaoapi.com/luckycat/lite/v1/sign_in/action?sa_enable=0&channel=lite_vivo_64&static_settings_version=49&device_type=V2055A&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080%2A2319&update_version_code=93015&cdid=1342e43c-037e-4e4d-97ee-ccccd3bd7d70&abflag=3&rit=coin&dynamic_settings_version=49&ac=wifi&device_id=3180260224926509&version_code=930&luckydog_api_version=8.2.0-rc.14&ab_version=668908%2C6042572%2C5315659%2C1859936%2C668905%2C6042536%2C668904%2C6042527%2C668907%2C6042568%2C668906%2C6042544%2C668776%2C6042565%2C668903%2C6042562%2C3891688%2C4743964%2C6142131&luckydog_base=GZWblGmfKUi5Qfp34GQzeBS05UY2PHwBHdefVAAevxuas-KbODrPBvNbskykaZ1Oa7ko8yyaEx8x3S9nozCW6A7BqqQnsLHXRY2S0aCbQe3McmPg9RYoRhIbsH_DMr71fbtrEhhTqpFQlaSlJ_9jWVFAjhsV9_KaIo4y8io3SJcXnNNO1A01EV_sNAIt5d5M&plugin_state=821344778461205&device_platform=android&aid=35&rom_version=33&manifest_version_code=9300&_rticket=1684215697280&iid=3521073794792040&isTTWebView=1&use_ecpm=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=28&os_api=33&luckydog_data=OwSWR2KExBGsnIhhAzsCKSI3qwiOQSEnPY7hZ_Lr821M3wtmvhZM6hNu_5jl-T5-WpeHJFGNjq4QCN7vYGa-e5_Nbk_vO76SBaGTojlgsuM&dpi=480&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=13&session_id=baa1ead1-bd49-4244-a9ad-b036f5c41e9e&luckydog_token=OWodj3qAQ8nqP-g_tuCvijvHI6SGN4ma9cr1E2Xl1Q-2UWz73rnOm9TZKwDscrls&app_name=news_article_lite&version_name=9.3.0&device_brand=vivo&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=8.9371&lucky_device_type=V2055"
payload = json.dumps({
   "use_ecpm": 0,
   "rit": "coin"
})
# 宝箱
url2 = "https://api5-normal-lq.toutiaoapi.com/score_task/v1/task/open_treasure_box/?sa_enable=0&channel=lite_vivo_64&static_settings_version=49&device_type=V2055A&language=zh&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080%2A2319&update_version_code=93015&cdid=1342e43c-037e-4e4d-97ee-ccccd3bd7d70&abflag=3&rit=coin&dynamic_settings_version=49&ac=wifi&device_id=3180260224926509&version_code=930&luckydog_api_version=8.2.0-rc.14&ab_version=668908%2C6042572%2C5315659%2C1859936%2C668905%2C6042536%2C668904%2C6042527%2C668907%2C6042568%2C668906%2C6042544%2C668776%2C6042565%2C668903%2C6042562%2C3891688%2C4743964%2C6142131&luckydog_base=9ccbBhPEuSwIcUIGXWk2VTvbnV6aIw2EHxbCxuSf2SWYDqVJ2Haa1_ZuKZpBzPe_qm_Gs7htZL0eMeaLW0C_LuO-O7F4n2HhZSMybMUhWLa6eLaUTrsdi1YWf4AvL-IFnpPb1L_EPrXcdkC_Gcnu5OIHWEqIMbYksK-_jC2gvJRy_GI8ByhCN652Exwb5eOt&plugin_state=821344778461205&device_platform=android&aid=35&rom_version=33&manifest_version_code=9300&_rticket=1684305292677&iid=3521073794792040&isTTWebView=1&use_ecpm=0&host_abi=arm64-v8a&is_pad=0&dq_param=0&status_bar_height=28&os_api=33&luckydog_data=kHIy9gAlIV5GXfacUAUB96QaRxexpDKqSEu-dJnRHZ41OKUAcsMEqJd6eZfDwIF3V6XvpwaeK_pyIxoKeio9UiKUiLswccR-FIf7WC5fMWw&dpi=480&ab_feature=z1&polling_settings_version=0&os=android&pass_through=null&os_version=13&session_id=d13a8602-9ab3-4fd3-968e-8f262a4b7b0f&luckydog_token=OWodj3qAQ8nqP-g_tuCvijvHI6SGN4ma9cr1E2Xl1Q-2UWz73rnOm9TZKwDscrls&app_name=news_article_lite&version_name=9.3.0&device_brand=vivo&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&polaris_version=1.0.5&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=8.9371&lucky_device_type=V2055"
payload2 = json.dumps({
   "from": "task_page",
   "use_ecpm": 0,
   "rit": "coin",
   "open_treasure_box_enter_from": ""
})
# 开宝箱看视频
url3 = "https://api5-normal-lq.toutiaoapi.com/luckycat/lite/v1/task/done/excitation_ad?manifest_version_code=9300&_rticket=1684306826048&sa_enable=0&iid=3521073794792040&channel=lite_vivo_64&isTTWebView=1&static_settings_version=49&device_type=V2055A&language=zh&host_abi=arm64-v8a&ab_client=a1%2Ce1%2Cf2%2Cg2%2Cf7&resolution=1080%2A2319&is_pad=0&update_version_code=93015&dq_param=0&status_bar_height=28&cdid=1342e43c-037e-4e4d-97ee-ccccd3bd7d70&os_api=33&abflag=3&luckydog_data=ASsoNMAQxvxvcj9d60wSCRYYBjvzKuBwyZa5Gjf861HoFWEWXcG86gAjo2TfRev3OwXDyDxpSiodUrL37Y4wDJ0hsucjNYVtpFbBXYIOwAM&dpi=480&ab_feature=z1&dynamic_settings_version=49&ac=wifi&polling_settings_version=0&device_id=3180260224926509&os=android&pass_through=null&os_version=13&version_code=930&session_id=7ab08340-ac85-4636-b793-0e65047ec86a&luckydog_token=OWodj3qAQ8nqP-g_tuCvijvHI6SGN4ma9cr1E2Xl1Q-2UWz73rnOm9TZKwDscrls&luckydog_api_version=8.2.0-rc.14&app_name=news_article_lite&ab_version=668908%2C6042572%2C5315659%2C1859936%2C668905%2C6042536%2C668904%2C6042527%2C668907%2C6042568%2C668906%2C6042544%2C668776%2C6042565%2C668903%2C6042562%2C3891688%2C4743964%2C6142131&version_name=9.3.0&luckydog_base=sBRpO82VKKTFVTlFZqMyqYSdg7NYyfH1p6z98zuOOhCR_Y7pxrbXpLvbWA2Db1PRL0izln3S9VBhOo07eRyqvK0eYqqR5vsxceIxXvtHc5kGBjOoGb6zIYrQTilSjut67czYQtINeK-Tpc1ivCX3IAN-19Ccm9mRCdU6s7VE1cTMpSdYiolG-0-P1M9q1EFC&device_brand=vivo&ssmix=a&luckydog_sdk_version=8.2.0-rc.14&plugin_state=821344778461205&device_platform=android&polaris_version=1.0.5&aid=35&rom_version=33&luckycat_version_name=8.2.0-rc.14&luckycat_version_code=820014&lucky_is_32=0&lucky_device_score=8.9371&lucky_device_type=V2055"

payload3 = json.dumps({
   "ad_id": "2",
   "amount": "702",
   "ad_rit": "2",
   "extra_data": {
      "enter_from": "tre_box",
      "track_id": "7234042362707085323"
   },
   "task_key": "excitation_ad",
   "extra": {
      "track_id": "7234042362707085323"
   },
   "task_id": "188",
   "ad_alias_position": "coin",
   "is_post_login": False,
   "ad_from": "coin",
   "score_source": 0,
   "coin_count": "702",
   "params_for_special": "luckydog_sdk",
   "static_settings_version": 49,
   "dynamic_settings_version": 49,
   "poll_settings_version": 0,
   "exci_extra": {
      "cid": 1766107551880221,
      "req_id": "20230517145947586167CCCC350C52DD67",
      "rit": 20047
   },
   "aggre_chain_id": ""
})

headers = {
   'Host': 'api5-normal-lq.toutiaoapi.com',
   'Cookie': cookie,
   'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)',
   'Content-Type': 'application/json',
   'Accept': '*/*',
   'Connection': 'keep-alive'
}
tip = "不才提醒您"
if cookie == "":
   print("请填写cookie")
else:
   response = requests.request("POST", url, headers=headers, data=payload)
   response2 = requests.request("POST", url2, headers=headers, data=payload2)
   time = 0
   for time in range(6):
      time+=1
      if time==5:
         response3 = requests.request("POST", url3, headers=headers, data=payload3)

   print(tip+response.text+response2.text+response3.text)
   def pushplus(content, token):
      title = '今日头条极速版签到通知: '
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
      pushplus(tip + response.text + response2.text + response3.text, token)
   else:
      print("未开启推送")