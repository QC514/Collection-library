# -*- coding: utf-8 -*-
"""
@Time ： 2023/6/16 15:28
@Auth ： LTX-Name
@File ：test11.py
@IDE ：PyCharm
"""
# 变量 export xingkong="账户1:密码"

import os
import re
from datetime import datetime

import requests
try:
    xingkong = os.environ["xingkong"]

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'DNT': '1',
        'Origin': 'http://www.xkdaili.com',
        'Referer': 'http://www.xkdaili.com/main/usercenter.aspx',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77',
        'X-Requested-With': 'XMLHttpRequest',
    }
    up = xingkong.split(":")
    data = {
        "username": up[0],
        "password": up[1],
        "remember": 0
    }

    msg = ""
    params = {
        'action': 'user_receive_point',
    }
    try:
        aa = requests.post("http://www.xkdaili.com/tools/submit_ajax.ashx?action=user_login&site_id=1", headers=headers,
                           data=data)
        ck = aa.cookies
        asp = re.findall(r"ASP\.NET_SessionId=(\w+)", str(ck))
        dt = re.findall(r"dt_cookie_user_name_remember=(\w+=\w+)", str(ck))
        cookies = {
            "ASP.NET_SessionId": asp[0],
            "dt_cookie_user_name_remember": dt[0]
        }
        data = {
            'type': 'login',
        }
        response = requests.post('http://www.xkdaili.com/tools/submit_ajax.ashx', params=params, cookies=cookies,
                                 headers=headers, data=data, verify=False)
        txt = response.json()
        print("星空签到 ", txt['msg'])
        msg += f"账户 {up[0]} 星空签到 {txt['msg']}\n"
    except Exception as e:
        print(f"账户 {up[0]} 星空签到异常 {str(e)}")
        msg += f"账户 {up[0]} 星空签到异常 {str(e)}\n"
    msg = f"⏰{str(datetime.now())[:19]}\n" + msg
except Exception as e:
    print("星空签到失败,失败原因 ", str(e))