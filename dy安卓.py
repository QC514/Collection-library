"""
安卓正常跑，苹果自己找原版
改自by Pearson大佬，修复安卓
开宝箱,宝箱广告,视频广告，走路
6.2
url是链接？后面的
变量名(dyjsb)    url#cookie#x-argus#x-ladon
多账号@
ua换成自己的
"""
ua = ""

import os
from urllib.parse import unquote
import time
import random
import base64
import requests
import json
import threading

cookies = os.getenv("dyjsb")


class DY:
    def __init__(self, cookie):
        self.url = cookie.split("#")[0]
        self.cookie = cookie.split("#")[1]
        self.argus = cookie.split("#")[2]
        self.ladon = cookie.split("#")[3]
        self.nickname = self.get_nickname()

    def run(self):
        self.get_info()
        self.sign_in()
        time.sleep(1.5)
        self.read()
        time.sleep(1.5)
        self.open_box()
        print(f"•••准备看广告,假装看15s•••")
        time.sleep(random.randint(20, 30))
        self.box_ad()
        self.detail_info()
        time.sleep(random.randint(20, 30))
        self.detail_ad()
        step = self.get_step()
        time.sleep(0.5)
        self.read()
        time.sleep(1.5)
        self.upload_step(step)
        self.step_reward()

    def sign_in(self):
        try:
            url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/sign_in?{self.url}"
            headers = {
                'Host': 'api5-normal-c-lf.amemv.com',
                'Connection': 'keep-alive',
                'Content-Length': '22',
                'Accept': 'application/json',
                'Cookie': self.cookie,
                'User-Agent': ua,
                'passport-sdk-version': '5.12.1',
                'X-Argus': self.argus,
                'X-Ladon': self.ladon,
                'Content-Type': 'text/plain'}
            payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
            response = requests.request("POST", url=url, headers=headers, data=payload)
            print(f"[{self.nickname}]签到成功,获取金币{response.json().get('data').get('amount')}")
        except:
            print("签到失败,可能今日已签到")
    def get_info(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/page?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Accept': 'application/json',
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        response = requests.request("GET", url=url, headers=headers)
        if response.json().get("data").get("is_login"):
            print(f"[{self.nickname}]登录成功\n"
                  f"[{self.nickname}]今日金币{response.json().get('data').get('income_data').get('amount1')}")

    def get_nickname(self):
        now = str(time.time()).replace(".", "")[:10]
        url = f"https://api5-core-c-lf.amemv.com/aweme/v1/user/profile/self/?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Content-Type': 'application/json; encoding=utf-8',
                   'Accept': 'application/json',
                   'tt-request-time': now,
                   'X-Argus': self.argus,
                   'X-Ladon': self.ladon,
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        payload = None
        try:
            response = requests.request("GET", url=url, headers=headers, data=payload)
            i = 1
            for cookie in cookies:
                nickname = f"账号{i}"
                # nickname = response.json().get("user").get("nickname")
                return nickname
        except:
            print("获取用户名失败")

    def read(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/read?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Content-Length': '22',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon,
            'Content-Type': 'text/plain'}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAsCiAgInRhc2tfa2V5IiA6ICJyZWFkIgp9")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]刷视频奖励--{response.json().get('data').get('score_amount')}")



    def open_box(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/treasure_task?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Content-Length': '22',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon,
            'Content-Type': 'text/plain'}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]开宝箱奖励金币--{response.json().get('data').get('amount')}")
        elif response.json().get("err_no") == 10006:
            print(response.json().get("err_tips"))
        else:
            print("开宝箱"+response.text)########

    def box_ad(self):
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("POST", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]看宝箱广告--{response.json().get('data').get('amount')}")
        elif response.json().get("err_no") == 10006:
            print(response.json().get("err_tips"))
        else:
            print("宝箱广告"+response.text)#########

    def detail_info(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/sign_in/detail?{self.url}"
        headers = {'Host': 'api5-normal-c-lq.amemv.com',
                   'Content-Type': 'application/json; encoding=utf-8',
                   'Accept': 'application/json',
                   'tt-request-time': now,
                   'X-Argus': self.argus,
                   'X-Ladon': self.ladon,
                   'Cookie': self.cookie,
                   'User-Agent': ua}
        response = requests.request("GET", url=url, headers=headers)
        score_amount = response.json().get("data").get("calendar_reminder_button").get("score_amount")
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]获取广告视频成功,预计获得{score_amount},假装看15秒")
        
        else:
            print("获取广告视频"+response.text)
    def detail_ad(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/done/excitation_ad?{self.url}"
        headers = {
            'Host': 'api3-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '203100',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("POST", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]看视频奖励金币成功--{response.json().get('data').get('amount')}")
        else:
            print("看视频奖励"+response.text)

    def get_step(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/page?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        response = requests.request("GET", url=url, headers=headers)
        if response.json().get("err_tips") == "成功":
            step = response.json().get("data").get("continue_walk_list")[0].get("step")
            print(f"[{self.nickname}]当前步数{step}")
            return step
        else:
            print("走路出错")

    def upload_step(self, steps):
        now = str(time.time()).replace(".", "")[:10]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/step_submit?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        step = random.randint(steps, steps+1200)
        payload = {"step": step,
                   "submit_time": int(now),
                   "in_sp_time": 0}
        payload = json.dumps(payload)
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]上传步数成功,当前步数--{response.json().get('data').get('today_step')}")

    def step_reward(self):
        now = str(time.time()).replace(".", "")[:13]
        url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/walk/receive_step_reward?{self.url}"
        headers = {
            'Host': 'api5-normal-c-lf.amemv.com',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Cookie': self.cookie,
            'User-Agent': ua,
            'passport-sdk-version': '5.12.1',
            'X-Argus': self.argus,
            'X-Ladon': self.ladon}
        payload = base64.b64decode("ewogICJpbl9zcF90aW1lIiA6IDAKfQ==")
        response = requests.request("POST", url=url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]领取步数奖励成功--{response.json().get('data').get('reward_amount')}")
        elif response.json().get("err_no") == 10009:
            print(response.json().get("err_tips"))
        else:
            print(response.text)



if __name__ == "__main__":
    cookies = cookies.split("@")
    print(f"抖音极速版共获取到{len(cookies)}个账号，偷撸冲")
    print("\n"+unquote('%40%E4%B8%8D%E6%89%8D%E4%BF%AE%E5%A4%8D%EF%BC%8C%E5%AE%89%E5%8D%93%E6%AD%A3%E5%B8%B8','utf-8'))
    i = 1
    for cookie in cookies:
        print(f"\n---开始第{i}个账号---")
        i += 1
        DY(cookie).run()
        print("\n随机等待30s进行下一个账号")
        time.sleep(random.randint(30,60))
