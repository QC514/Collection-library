# !/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2023/8/7 14:17
# @Author  : ziyou
# -------------------------------
# cron "5 7,12,18 * * *" script-path=xxx.py,tag=匹配cron用
# const $ = new Env('建行生活')
# 活动信息: 奋斗季cc豆 功能：每日营收，签到 浏览任务，答题，抽奖，专区任务，互助
# 先开抓包，先开抓包，抓的是微信端,搜 wParam，复制wParam值，没抓到等两小时在抓
# 抓里面含有 _ck_bbq_224，全部cookie，没抓到所有专区进一下
# 建行生活
# export ccb_ck='wParam参数值#cookie值&wParam参数值#cookie值',多账号使用换行或&
# 参考大佬 木兮 的本，在此致谢


import json
import os
import random
import re
import sys
import time

#import cv2
#import numpy as np
import requests

CCB_CK_LIST = []

CCB_DRAW_PRIZE = True  # 超级娃娃机抽奖
SHOOT_BASKETBALL = True  # 街头投篮王

IDENT_DICT = {}
NEW_IDENT_DICT = {}

ccb_ck = os.getenv("ccb_ck")
if ccb_ck:
    CCB_CK_LIST += ccb_ck.replace("&", "\n").split("\n")


# cookie字符串转字典
def cookie_str_to_dict(cookie_str):
    cookie_list = cookie_str.split(';')
    cookie_dict = {}
    for i in cookie_list:
        result = re.match(r'(.*?)=(.*?)$', i.strip())
        if result:
            cookie_dict.update({result.group(1): result.group(2)})
    return cookie_dict


# 使用chatgpt答题
def chatgpt_answer_question(question_name, answer_str, knowledge_points=''):
    question_str = (f'{knowledge_points} 请回答一下问题，保证相对正确，仅需要回复答案前的序号，不需要回答其他内容！'
                    f'问题：{question_name} \n选项：\n{answer_str}')
    print(question_str)
    return ''


# 识别图片进行排序
def identify_sort(response_dict):
    thumb_dict = response_dict.get('data').get('thumb')
    big_url = response_dict.get('data').get('img')
    big_image = requests.get(big_url).content
    # 将字节码转换为numpy数组
    image_np_array = np.frombuffer(big_image, np.uint8)
    # 使用imdecode函数解码字节码并加载图像
    image = cv2.imdecode(image_np_array, cv2.IMREAD_COLOR)
    # 将图像大小调整为750x750像素
    big_image = cv2.resize(image, (750, 750))
    points = []
    for key, url in thumb_dict.items():
        small_image = requests.get(url).content
        # 将字节码转换为numpy数组
        image_np_array = np.frombuffer(small_image, np.uint8)
        # 使用imdecode函数解码字节码并加载图像
        small_image = cv2.imdecode(image_np_array, cv2.IMREAD_COLOR)
        # 执行匹配
        result = cv2.matchTemplate(big_image, small_image, cv2.TM_CCOEFF_NORMED)
        # 定位位置
        _, _, _, best_match = cv2.minMaxLoc(result)
        # print(best_match)
        points += [list(best_match) + [key]]
        # print(points)
    point_0 = []
    point_250 = []
    point_500 = []
    for point in points:
        if point[1] < 50:
            point_0.append(point)
        if 200 < point[1] < 300:
            point_250.append(point)
        if 450 < point[1]:
            point_500.append(point)
    sort_list = sorted(point_0) + sorted(point_250) + sorted(point_500)
    # print(sort_list)
    return ','.join([i[2] for i in sort_list])


class CCBLife:
    def __init__(self, ck, index):
        self.w_param, self.cookies = ck.split("#")
        self.index = index
        self.wx_uuid = ''
        self.token = ''
        self.ticket = ''
        self.businessCenter_headers = {'zhc_token': self.token}
        self.Component_headers = {'x-xsrf-token': '', 'authorization': ''}
        self.session = requests.Session()
        self.session.cookies.update(cookie_str_to_dict(self.cookies))
        self.regionId = "430100"  # 地区id

    # 获取token
    def get_token(self):
        url = "https://event.ccbft.com/api/flow/nf/shortLink/redirect/ccb_gjb"
        _json = {
            "appId": "wxd513efdbf26b5744",
            "shortId": "polFsWD2jPnjhOx9ruVBcA",
            "archId": "ccb_gjb",
            "wParam": self.w_param,
            "channelId": "wx", "ifWxFirst": True
        }
        response = self.session.post(url, json=_json)
        response_dict = response.json()
        # print(response_dict)
        redirect_url = response_dict.get('data', {}).get('redirectUrl')
        dmsp_token = re.findall(r'__dmsp_token=(.*?)&', redirect_url)
        dmsp_ticket = re.findall(r'__dmsp_ticket=(.*?)$', redirect_url)
        if dmsp_token:
            self.wx_uuid = response_dict['data'].get('wxUUID')
            self.token = dmsp_token[0]
            self.ticket = dmsp_ticket[0]
            self.businessCenter_headers = {'zhc_token': self.token, 'cookie': self.cookies}
            return True
        print(f'ck可能已失效！ {response_dict}')
        return False

    # 使用token登录
    def sign_in(self):
        if not self.get_token():
            return False
        url = "https://m3.dmsp.ccb.com/api/businessCenter/auth/login"
        _json = {"token": self.token, "channelId": "wx"}
        response = self.session.post(url, json=_json)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('success') is True:
            self.get_component_headers()
            return True
        print(response_dict.get('message'))
        return False

    # 获取用户信息
    def get_user(self):
        url = "https://m3.dmsp.ccb.com/api/businessCenter/user/getUser"
        _json = {"regionId": self.regionId}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        user_name = response_dict.get('data').get('userDTO').get('userName')
        response_dict = self.get_user_state()
        level = response_dict.get('data').get('level')
        need_growth_exp = response_dict.get('data').get('needGrowthExp')  # 升级还需要的经验
        next_level_need_growth_exp = response_dict.get('data').get('nextLevelNeedGrowthExp')
        print(f"{user_name} Lv{level}({next_level_need_growth_exp - need_growth_exp}/{next_level_need_growth_exp}) "
              f"CC豆：{self.get_user_ccd()}")

    # 获取用户CC豆数量
    def get_user_ccd(self):
        url = "https://m3.dmsp.ccb.com/api/businessCenter/user/getUserCCD"
        _json = {}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        return response_dict.get('data').get('userCCBeanInfo').get('count')

    # 签到
    def check_in(self):
        url = "https://m3.dmsp.ccb.com/api/businessCenter/taskCenter/signin"
        _json = {"taskId": 96}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        print(response_dict.get('message'))

    # 查询用户状态
    def get_user_state(self):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/mainVenue/getUserState'
        response = self.session.post(url, headers=self.businessCenter_headers)
        return response.json()

    # 领取每日营收
    def receive_daily_earnings(self):
        response_dict = self.get_user_state()
        receive_result = response_dict.get('data').get('receiveResult')
        if receive_result == '00':
            print('今日已经领取过了！')
            return
        level = response_dict.get('data').get('level')
        reward_id = response_dict.get('data').get('zhcRewardInfo').get('id')
        level_reward_type = response_dict.get('data').get('zhcRewardInfo').get('rewardType')
        url = "https://m3.dmsp.ccb.com/api/businessCenter/mainVenue/receiveLevelReward"
        _json = {"level": level, "rewardId": reward_id, "levelRewardType": level_reward_type}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))

    # 每日答题
    def daily_answer_question(self):
        url = "https://m3.dmsp.ccb.com/api/businessCenter/zhcUserDayAnswer/getAnswerStatus"
        response = self.session.get(url, headers=self.businessCenter_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('data').get('answerState') == 'Y':  # 今天已经答题过
            print(response_dict.get('message'))
            return
        url = "https://m3.dmsp.ccb.com/api/businessCenter/zhcUserDayAnswer/queryQuestionToday"
        response = self.session.get(url, headers=self.businessCenter_headers)
        response_dict = response.json()
        # print(response_dict)
        question_id = response_dict.get('data').get('questionId')
        question_name = response_dict.get('data').get('questionName')
        answer_list = response_dict.get('data').get('answerList')
        answer_str = ''
        for answer in answer_list:
            answer_str += f"{answer.get('id')} {answer.get('answerResult')}\n"
        response_text = chatgpt_answer_question(question_name, answer_str)
        print(response_text)
        for answer in answer_list:
            if str(answer.get('id')) in response_text:
                _json = {"questionId": question_id, "answerIds": str(answer.get('id'))}
                break
        else:
            print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
            print('开始随机选择！')
            _json = {"questionId": question_id, "answerIds": str(random.choice(answer_list).get('id'))}
        time.sleep(5)
        url = "https://m3.dmsp.ccb.com/api/businessCenter/zhcUserDayAnswer/userAnswerQuestion"
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))

    # 领取点亮所有勋章奖励
    def receive_500ccd_reward(self):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/zhc/medalPage/allGather'
        _json = {}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))

    # 激活勋章页
    def activation_medal(self):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/zhc/medalPage/getUserLightUpStatus'
        _json = {}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('data').get('hasPopupLightUpMedal') == 'Y' and response_dict.get('data').get(
                'hasReceiveAllGatherReward') == 'N':
            print('所有勋章已激活，开始领取额外CC豆奖励！')
            self.receive_500ccd_reward()
        light_up_status_dict: dict = response_dict.get('data').get('lightUpStatus')
        for medal_id, status in light_up_status_dict.items():
            if status.get('isReach') == 'Y' and status.get('isPopup') == 'N':
                print(f'开始激活{status.get("medalName")}勋章')
                url = 'https://m3.dmsp.ccb.com/api/businessCenter/zhc/medalPage/confirmMedalPopup'
                _json = {"medalId": medal_id}
                response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
                response_dict = response.json()
                print(response_dict.get('message'))

    # 升级每日营收等级
    def upgrade_daily_earnings_level(self):
        response_dict = self.get_user_state()
        # print(response_dict)
        level_state = response_dict.get('data').get('levelState')  # 01不可升级 02可升级
        need_growth_exp = response_dict.get('data').get('needGrowthExp')  # 升级还需要的经验
        if need_growth_exp != 0 and level_state != '02':
            print(f'当前不可升级，离下一等级还差{need_growth_exp}成长值！')
            return
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/mainVenue/upgradeUser'
        _json = {}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        if response_dict.get('data'):
            print(f"成功升级为：{response_dict.get('data')[0].get('rewardName')}")

    # 去完成任务
    def complete_task(self, task_id, browse_sec):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/taskCenter/browseTask'
        _json = {"taskId": task_id, "browseSec": browse_sec}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))

    # 领取任务奖励
    def receive_task_reward(self, task_id):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/taskCenter/receiveReward'
        _json = {"taskId": task_id}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))

    # 执行浏览任务
    def execute_task(self):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/taskCenter/getTaskList'
        _json = {"publishChannels": "03", "regionId": self.regionId}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        browse_tasks_list = response_dict.get('data').get('浏览任务')
        # print(browse_tasks_list)
        for task in browse_tasks_list:
            complete_status = task.get('taskDetail').get('completeStatus')
            if complete_status == '02':
                continue
            task_name = task.get('taskName')
            print(f'★开始任务：{task_name}')
            # print(task)
            task_id = task.get('id')
            browse_sec = task.get('taskDetail').get('browseSec')
            self.complete_task(task_id, browse_sec)
            self.receive_task_reward(task_id)

    # 获取Component_headers
    def get_component_headers(self):
        url = 'https://event.ccbft.com/api/flow/nf/shortLink/redirect/ccb_gjb?CCB_Chnl=1002702'
        _json = {"appId": "wxd513efdbf26b5744", "shortId": "jd9H3uCkzHaQBn8aeq5NWQ", "archId": "ccb_gjb",
                 "channelId": "wx", "ifWxFirst": False, "wxUUID": self.wx_uuid}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        # print(response_dict)
        redirect_url = response_dict.get('data').get('redirectUrl')
        self.session.get(redirect_url)  # 授权登录专区活动

        url = 'https://fission-events.ccbft.com/a/224/kmenz5Zd?CCB_Chnl=6000110'
        response = self.session.get(url, headers=self.businessCenter_headers)
        response_text = response.text
        csrf_token_pattern = r'<meta\s+name=csrf-token\s+content="([^"]+)">'
        authorization_pattern = r'<meta\s+name=Authorization\s+content="([^"]+)">'
        csrf_token_match = re.search(csrf_token_pattern, response_text)
        authorization_match = re.search(authorization_pattern, response_text)
        if csrf_token_match and authorization_match:
            csrf_token, authorization = csrf_token_match.group(1), authorization_match.group(1)
            if csrf_token and authorization:
                self.Component_headers['x-csrf-token'] = csrf_token
                self.Component_headers['authorization'] = f'Bearer {authorization}'
                return True
        return False

    # 超级娃娃机
    def ccb_draw_prize(self):
        if not CCB_DRAW_PRIZE:
            print("超级娃娃机已手动设置关闭！")
            return
        url = 'https://syx3.dmsp.ccb.com/Component/signup/status/224/xPOLkama'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') != 'success':
            print(response_dict.get("message"))
            return
        url = 'https://fission-events.ccbft.com/Component/draw/getUserCCB/224/xPOLkama'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        draw_day_max_num = int(response_dict.get('data', {}).get('draw_day_max_num'))  # 抽奖总次数
        user_day_draw_num = int(response_dict.get('data', {}).get('user_day_draw_num'))  # 抽奖已抽次数
        print(f'剩余抽奖次数：{draw_day_max_num - user_day_draw_num}')
        draw_day_num = draw_day_max_num - user_day_draw_num
        if draw_day_num == 0:
            return
        for _ in range(draw_day_num):
            time.sleep(5)
            url = 'https://syx5.dmsp.ccb.com/Component/draw/dmspCommonCcbDrawPrize/224/xPOLkama'
            _json = {}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            # print(response_dict)
            if response_dict.get('status') == 'success':
                print(f'获得{response_dict.get("data").get("prizename")}')
                continue
            print(response_dict.get("message"))
            return

    # 街头投篮王
    def shoot_basketball(self):
        if not SHOOT_BASKETBALL:
            return
        url = 'https://fission-events.ccbft.com/activity/dmspdunk/user/224/eZgpye3y'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        daily_times = response_dict.get('data', {}).get('remain_daily_times')
        print(f'剩余游戏次数: {daily_times}')
        for _ in range(daily_times):
            url = 'https://fission-events.ccbft.com/activity/dmspdunk/start/224/eZgpye3y'
            response = self.session.post(url, headers=self.Component_headers)
            response_dict = response.json()
            if response_dict.get('status') != 'success':
                print(response_dict.get('message'))
                return
            game_id = response_dict.get('data', {}).get('id')
            time.sleep(2)
            got_ccb = 0
            while True:
                dogame_url = 'https://fission-events.ccbft.com/activity/dmspdunk/shot/224/eZgpye3y'
                _json = {'id': game_id}
                response = self.session.post(dogame_url, headers=self.Component_headers, json=_json)
                response_dict = response.json()
                if response_dict.get('code') == 1503:  # 次数不足
                    print(f'游戏结束,获得cc豆数量: {got_ccb}')
                    break
                if response_dict.get('status') != 'success':
                    print(response_dict.get('message'))
                    time.sleep(1.5)
                    continue
                win_times = response_dict.get('data', {}).get('win_times')  # 投中数量
                got_ccb = response_dict.get('data', {}).get('got_ccb')  # 获得cc豆
                print(f'当前投中篮球数量: {win_times}')
                time.sleep(1.5)

    # 福兔登山赛
    def futu_mountain_climbing_race(self):
        activity_id = 'jmXN4Q3d'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx15.dmsp.ccb.com/Component/signup/status/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://fission-events.ccbft.com/a/224/{activity_id}/index?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        num_url = 'https://fission-events.ccbft.com/activity/dmspxbmountain/getUserInfo/224/jmXN4Q3d'
        response = self.session.get(num_url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict.get('status') != 'success':
            print(response_dict.get('message'))
            return
        remain_num = response_dict['data'].get('remain_num', 0)
        num = int(remain_num)
        print(f'剩余游戏次数：{num}')
        if num == 0:
            return
        for _ in range(num):
            url = 'https://fission-events.ccbft.com/activity/dmspxbmountain/startChallenge/224/jmXN4Q3d'
            _json = {}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            if response_dict.get('status') != 'success':
                print(response_dict.get('message'))
                return
            game_id = response_dict.get('data')
            print('开始登山游戏')
            sleep_time = 20
            print(f'等待{sleep_time}秒')
            time.sleep(sleep_time)
            url = 'https://fission-events.ccbft.com/activity/dmspxbmountain/doChallenge/224/jmXN4Q3d'
            data = {"l_id": game_id, "stage": 13, "score": 200}
            response = self.session.post(url, headers=self.Component_headers, json=data)
            response_dict = response.json()
            if response_dict.get('status') != 'success':
                print(response_dict.get('message'))
                return
            draw_payload = {}
            url = 'https://fission-events.ccbft.com/Component/draw/commonDrawPrize/224/jmXN4Q3d'
            response = self.session.post(url, headers=self.Component_headers, json=draw_payload)
            response_dict = response.json()
            if response_dict.get('status') != 'success':
                print(response_dict.get('message'))
                return
            prizename = response_dict.get('data', {}).get('prizename', '')
            print(f'{response_dict.get("message")}  {prizename}')
            time.sleep(5)

    # 养老专区
    # 养老健步行
    def elderly_walking(self):
        activity_id = '5P87Md3y'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx12.dmsp.ccb.com/Common/activity/getUserInfo/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://syx37.dmsp.ccb.com/a/224/5P87Md3y?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        tasklist_url = 'https://fission-events.ccbft.com/activity/dmspmileage/getindexdata/224/5P87Md3y'
        go_url = 'https://fission-events.ccbft.com/activity/dmspmileage/go/224/5P87Md3y'
        response = self.session.get(tasklist_url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict['status'] != 'success':
            return print(response_dict['message'])
        task_list = response_dict.get('data', {}).get('acttask', {}).get('limit_time')
        for task in task_list:
            state = task.get('state')
            title = task.get('title')
            if state == 1:
                print(f'已完成: {title}')
                continue
            ident = task.get('ident')
            reward = task.get('reward')
            print(f'去完成: {title}')
            dotask_url = 'https://fission-events.ccbft.com/activity/dmspmileage/taskgo/224/5P87Md3y'
            do_payload = {"type": "limit_time", "ident": ident}
            response = self.session.post(dotask_url, headers=self.Component_headers, json=do_payload)
            response_dict = response.json()
            if response_dict['status'] != 'success':
                return print(response_dict['message'])
            print(f'浏览成功获得: {reward} 里程')
            time.sleep(3)
        response = self.session.get(tasklist_url, headers=self.Component_headers)
        response_dict = response.json()
        surplus = response_dict.get('data', {}).get('mileage').get('surplus')
        if surplus != '0':
            response = self.session.post(go_url, headers=self.Component_headers)
            response_dict = response.json()
            mileage_go = response_dict.get('data', {}).get('mileage_go', '')
            user_node = response_dict.get('data', {}).get('user_node_value')
            print(f'前进: {mileage_go}里程， 当前: {user_node}里程')
            time.sleep(3)
        time.sleep(1)
        response = self.session.get(tasklist_url, headers=self.Component_headers)
        response_dict = response.json()
        rewards = response_dict.get('data', {}).get('map', {}).get('config').get('node')
        for reward in rewards:
            value = reward.get('value')
            state = reward.get('state')
            if value == 0 or state != 3:
                continue
            getreward_url = 'https://fission-events.ccbft.com/activity/dmspmileage/draw/224/5P87Md3y'
            reward_payload = {"value": value}
            response = self.session.post(getreward_url, headers=self.Component_headers, json=reward_payload)
            response_dict = response.json()
            if response_dict['status'] != 'success':
                return print(response_dict['message'])
            prizename = response_dict.get('data', {}).get('prizename')
            print(f'领取 {value}里程奖励: {prizename}')
            time.sleep(3)

    # 跨境专区
    # 闯关无国界 建行伴你海外行
    def cross_borders(self):
        activity_id = '1m0xM2mx'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx37.dmsp.ccb.com/Common/activity/getUserInfo/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://syx35.dmsp.ccb.com/a/224/1m0xM2mx?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        url = 'https://syx24.dmsp.ccb.com/activity/dmspkjdtcj/index/224/1m0xM2mx'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict.get('data').get('is_answer') == 0:  # 今天未答题
            time.sleep(2)
            print('开始答题！')
            url = 'https://syx24.dmsp.ccb.com/Component/answer/getLevels/224/1m0xM2mx'
            response = self.session.get(url, headers=self.Component_headers)
            response_dict = response.json()
            level = response_dict.get('data').get('list')[0].get('level')  # 获取关卡id
            url = 'https://syx24.dmsp.ccb.com/Component/answer/getQuestions/224/1m0xM2mx'
            _json = {"id": level}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            # print(response_dict)
            question_name = response_dict.get('data')[0].get('title')
            answer_list = response_dict.get('data')[0].get('options')
            question_id = response_dict.get('data')[0].get('questionId')
            answer_str = ''
            for answer in answer_list:
                answer_str += f"{answer.get('id')} {answer.get('option')}\n"
            response_text = chatgpt_answer_question(question_name, answer_str)
            print(response_text)
            for answer in answer_list:
                if str(answer.get('id')) in response_text:
                    _json = {"id": question_id, "options": str(answer.get('id')), "levelId": level}
                    break
            else:
                print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
                print('开始随机选择！')
                _json = {"id": question_id, "options": str(random.choice(answer_list).get('id')), "levelId": level}
            time.sleep(5)
            url = "https://syx24.dmsp.ccb.com/Component/answer/do/224/1m0xM2mx"
            self.session.post(url, headers=self.Component_headers, json=_json)
            time.sleep(2)
        url = 'https://fission-events.ccbft.com/Component/draw/getUserExtInfo/224/1m0xM2mx'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict['status'] != 'success':
            return print(response_dict['message'])
        remain = int(response_dict['data'].get('remain_num'))
        print(f'剩余抽奖次数：{remain}')
        if remain == 0:
            return
        print('开始抽奖')
        for _ in range(remain):
            url = "https://fission-events.ccbft.com/Component/draw/commonDrawPrize/224/1m0xM2mx"
            response = self.session.post(url, headers=self.Component_headers)
            response_dict = response.json()
            if response_dict.get('status') == 'success':
                print(f'获得{response_dict.get("data").get("prizename")}')
                time.sleep(3)
                continue
            print(response_dict.get('message'))
            break

    # 商户专区
    # 享建行商户服务 天天抽取CC豆
    def merchant_zone(self):
        url = 'https://fission-events.ccbft.com/a/224/8ZWXBM3w/index?CCB_Chnl=6000115'
        self.session.get(url, headers=self.Component_headers)  # 完成每日登录

        url = 'https://fission-events.ccbft.com/Component/task/lists/224/8ZWXBM3w'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict['status'] != 'success':
            print(response_dict['message'])
            return
        task_list = response_dict['data'].get('userTask')
        for value in task_list:
            complete_status = value['finish']
            if complete_status == 1:
                continue
            task_id = value['id']
            do_url = 'https://fission-events.ccbft.com/Component/task/do/224/8ZWXBM3w'
            payload = {"id": task_id}
            response = self.session.post(do_url, headers=self.Component_headers, json=payload)
            response_dict = response.json()
            if response_dict['status'] != 'success':
                print(response_dict['message'])
                return
            print('浏览完成')
            time.sleep(3)
        self.merchant_zone_lottery()

    # 商户专区
    # 享建行商户服务 天天抽取CC豆 抽奖
    def merchant_zone_lottery(self):
        query_url = 'https://fission-events.ccbft.com/activity/dmspshzq/getIndex/224/8ZWXBM3w'
        response = self.session.get(query_url, headers=self.Component_headers)
        response_dict = response.json()
        if response_dict['status'] != 'success':
            print(response_dict['message'])
            return
        remain_num = response_dict['data'].get('remain_num')
        print(f'摇骰子机会次数：{remain_num}')
        if remain_num == '0':
            return
        num = int(remain_num)
        for _ in range(num):
            draw_url = 'https://fission-events.ccbft.com/activity/dmspshzq/drawPrize/224/8ZWXBM3w'
            payload = {}
            response = self.session.post(draw_url, headers=self.Component_headers, json=payload)
            response_dict = response.json()
            if response_dict['status'] != 'success':
                print(response_dict['message'])
                return
            add_step = response_dict['data'].get('add_step')
            current_step = response_dict['data'].get('current_step')
            prize_name = response_dict['data'].get('prize_name')
            print(f"前进步数:{add_step},当前步数:{current_step} 获得奖励:{prize_name}")
            time.sleep(3)

    # 获取CC豆过期信息
    def get_expiration_information(self):
        url = 'https://m3.dmsp.ccb.com/api/businessCenter/user/getUserCCDExpired'
        _json = {}
        response = self.session.post(url, headers=self.businessCenter_headers, json=_json)
        response_dict = response.json()
        expire_date = response_dict.get('data').get('userCCBeanExpiredInfo').get('expireDate')
        count = response_dict.get('data').get('userCCBeanExpiredInfo').get('count')
        if count:
            print(f'将于{expire_date.split("T")[0]}过期{count}CC豆')

    # 消保知识大考验
    def consumer_protection_knowledge_test(self):
        activity_id = 'A3w4DaPj'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx24.dmsp.ccb.com/Common/activity/getUserInfo/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://syx24.dmsp.ccb.com/a/224/A3w4DaPj?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        url = "https://syx36.dmsp.ccb.com/Component/answer/getLevels/224/A3w4DaPj"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        answer_num = int(response_dict.get('data').get('answer_num'))
        print(f'答题机会次数：{answer_num}')
        for _ in range(answer_num):
            level_id = "n1m0V3xY"  # 问题等级，当前青铜
            url = "https://syx16.dmsp.ccb.com/Component/answer/getQuestions/224/A3w4DaPj"
            _json = {"id": level_id}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            # print(response_dict)
            question_id = response_dict.get('data')[0].get('questionId')
            question_name = response_dict.get('data')[0].get('title')
            answer_list = response_dict.get('data')[0].get('options')
            answer_str = ''
            for answer in answer_list:
                answer_str += f"{answer.get('id')} {answer.get('option')}\n"
            print('第一题')
            response_text = chatgpt_answer_question(question_name, answer_str, '消费者权益保护知识考验')
            print(response_text)
            for answer in answer_list:
                if str(answer.get('id')) in response_text:
                    _json = {"id": question_id, "levelId": level_id, "options": str(answer.get('id'))}
                    break
            else:
                print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
                print('开始随机选择！')
                _json = {"id": question_id, "levelId": level_id, "options": str(random.choice(answer_list).get('id'))}
            # 回答第一题
            time.sleep(5)
            url = "https://syx16.dmsp.ccb.com/Component/answer/do/224/A3w4DaPj"
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            question_id = response_dict.get('data').get('next').get('questionId')
            question_name = response_dict.get('data').get('next').get('title')
            answer_list = response_dict.get('data').get('next').get('options')
            answer_str = ''
            for answer in answer_list:
                answer_str += f"{answer.get('id')} {answer.get('option')}\n"
            print('第二题')
            response_text = chatgpt_answer_question(question_name, answer_str, '消费者权益保护知识考验')
            print(response_text)
            for answer in answer_list:
                if str(answer.get('id')) in response_text:
                    _json = {"id": question_id, "levelId": level_id, "options": str(answer.get('id'))}
                    break
            else:
                print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
                print('开始随机选择！')
                _json = {"id": question_id, "levelId": level_id, "options": str(random.choice(answer_list).get('id'))}
            # 回答第二题
            time.sleep(5)
            url = "https://syx16.dmsp.ccb.com/Component/answer/do/224/A3w4DaPj"
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            question_id = response_dict.get('data').get('next').get('questionId')
            question_name = response_dict.get('data').get('next').get('title')
            answer_list = response_dict.get('data').get('next').get('options')
            answer_str = ''
            for answer in answer_list:
                answer_str += f"{answer.get('id')} {answer.get('option')}\n"
            print('第三题')
            response_text = chatgpt_answer_question(question_name, answer_str, '消费者权益保护知识考验')
            print(response_text)
            for answer in answer_list:
                if str(answer.get('id')) in response_text:
                    _json = {"id": question_id, "levelId": level_id, "options": str(answer.get('id'))}
                    break
            else:
                print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
                print('开始随机选择！')
                _json = {"id": question_id, "levelId": level_id, "options": str(random.choice(answer_list).get('id'))}
            # 回答第三题
            time.sleep(5)
            url = "https://syx16.dmsp.ccb.com/Component/answer/do/224/A3w4DaPj"
            self.session.post(url, headers=self.Component_headers, json=_json)
            time.sleep(2)
            # 获取答题结果
            url = "https://syx16.dmsp.ccb.com/Component/answer/getResult/224/A3w4DaPj"
            _json = {"id": level_id}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            print(f'结果 {response_dict}')
            time.sleep(5)
        url = "https://syx24.dmsp.ccb.com/Component/draw/getUserExtInfo/224/A3w4DaPj"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        remain_num = int(response_dict.get('data').get('remain_num'))
        print(f'剩余抽奖次数：{remain_num}')
        if remain_num == 0:
            return
        print('开始抽奖')
        for _ in range(remain_num):
            url = "https://syx24.dmsp.ccb.com/Component/draw/commonDrawPrize/224/A3w4DaPj"
            _json = {}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            if response_dict.get('status') == 'success':
                print(f'获得{response_dict.get("data").get("prizename")}')
                time.sleep(3)
                continue
            print(response_dict.get('message'))
            break

    # 和我一起来闯关，答题函数
    def come_with_me_to_break_through_answer_question(self, bout_id, level_id, index):
        url = "https://syx38.dmsp.ccb.com/activity/dmspxbnnanswer/getQuestion/224/kZMpyxmW"
        params = {"boutId": bout_id, "levelId": level_id, "questionNo": str(index + 1)}
        response = self.session.get(url, params=params, headers=self.businessCenter_headers)
        response_dict = response.json()
        if response_dict.get('status') != 'success':
            return False
        # print(response_dict)
        question_name = response_dict.get('data').get('title')
        answer_list = response_dict.get('data').get('options')
        answer_str = ''
        for answer in answer_list:
            answer_str += f"{answer.get('id')} {answer.get('title')}\n"
        response_text = chatgpt_answer_question(question_name, answer_str, '生活安全知识问答，请以安全为主')
        print(response_text)
        for answer in answer_list:
            if str(answer.get('id')) in response_text:
                _json = {"levelId": level_id, "questionNo": str(index + 1), "answer": str(answer.get('id')),
                         "boutId": bout_id}
                break
        else:
            print(f'使用chatgpt回答问题失败！chatgpt：{response_text}')
            print('开始随机选择！')
            _json = {"levelId": level_id, "questionNo": str(index + 1),
                     "answer": str(random.choice(answer_list).get('id')), "boutId": bout_id}
        time.sleep(5)
        url = "https://syx38.dmsp.ccb.com/activity/dmspxbnnanswer/submitAnswer/224/kZMpyxmW"
        response = self.session.post(url, headers=self.Component_headers, json=_json)
        response_dict = response.json()
        print(response_dict.get('message'))
        return True

    # 和我一起来闯关
    def come_with_me_to_break_through(self):
        activity_id = 'kZMpyxmW'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx28.dmsp.ccb.com/Common/activity/getUserInfo/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://syx3.dmsp.ccb.com/a/224/kZMpyxmW/index?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        url = "https://syx28.dmsp.ccb.com/activity/dmspxbnnanswer/getChance/224/kZMpyxmW"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        remain = int(response_dict.get('data').get('remain'))
        print(f'剩余挑战次数：{remain}')
        _signal = True
        while remain > 0 and _signal:
            url = 'https://syx15.dmsp.ccb.com/activity/dmspxbnnanswer/levelList/224/kZMpyxmW'
            response = self.session.get(url, headers=self.businessCenter_headers)
            response_dict = response.json()
            # print(response_dict)
            level_list = response_dict.get('data')
            for level in level_list:
                if level.get('status') != 3:  # 1为已完成，3为可闯关，4为不可闯关
                    continue
                print(f'开始{level.get("name")}')
                bout_id = level.get('bout')
                level_id = level.get('mark')
                for index in range(3):
                    if not self.come_with_me_to_break_through_answer_question(bout_id, level_id, index):
                        print('可能没有闯关机会了！')
                        _signal = False
                        break
                    time.sleep(3)
                break
            else:
                break
        url = "https://syx3.dmsp.ccb.com/Component/draw/getUserExtInfo/224/kZMpyxmW"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        remain_num = int(response_dict.get('data').get('remain_num'))
        print(f'剩余抽奖次数：{remain_num}')
        if remain_num == 0:
            return
        print('开始抽奖')
        while True:
            url = 'https://syx3.dmsp.ccb.com/Component/draw/commonDrawPrize/224/kZMpyxmW'
            _json = {}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            if response_dict.get('status') == 'success':
                print(f'获得{response_dict.get("data").get("prizename")}')
                time.sleep(3)
                continue
            break

    # 拼图大作战
    def jigsaw_puzzle(self):
        activity_id = '4379wEmy'
        '''*****************************************助力相关*****************************************'''
        global NEW_IDENT_DICT
        url = f'https://syx35.dmsp.ccb.com/Common/activity/getUserInfo/224/{activity_id}'
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        # print(response_dict)
        if response_dict.get('status') == 'fail':
            print(response_dict.get('message'))
            return
        ident = response_dict.get('data').get('ident')
        NEW_IDENT_DICT.setdefault(activity_id, []).append(ident)
        ident_list = IDENT_DICT.get(activity_id, [])
        if len(ident_list) == len(CCB_CK_LIST):
            u_ident_index = self.index + 1
            if self.index == (len(CCB_CK_LIST) - 1):  # 如果这是最后一个账号
                u_ident_index = 0
            u_ident = ident_list[u_ident_index]
            url = f'https://syx19.dmsp.ccb.com/a/224/4379wEmy?u={u_ident}'
            self.session.get(url, headers=self.Component_headers)
        '''****************************************************************************************'''
        url = "https://syx1.dmsp.ccb.com/activity/dmspjigsaw/userData/224/4379wEmy"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        remain_num = int(response_dict.get('data').get('remain_num'))
        print(f'剩余挑战次数：{remain_num}')
        for _ in range(remain_num):
            print('开始拼图！')
            url = "https://syx35.dmsp.ccb.com/activity/dmspjigsaw/jigsawStart/224/4379wEmy"
            self.session.post(url, headers=self.Component_headers)
            time.sleep(3)
            url = "https://syx35.dmsp.ccb.com/activity/dmspjigsaw/getJigsawImgs/224/4379wEmy"
            response = self.session.post(url, headers=self.Component_headers)
            response_dict = response.json()
            # print(response_dict)
            if response_dict.get('status') != 'success':
                return
            sort_str = identify_sort(response_dict)
            # print(sort_str)
            time.sleep(10)
            url = 'https://syx35.dmsp.ccb.com/activity/dmspjigsaw/checkJigsaw/224/4379wEmy'
            _json = {"sort": sort_str}
            response = self.session.post(url, headers=self.Component_headers, json=_json)
            response_dict = response.json()
            print(f'拼图完成 {response_dict}')
            time.sleep(3)
        url = "https://syx1.dmsp.ccb.com/activity/dmspjigsaw/userData/224/4379wEmy"
        response = self.session.get(url, headers=self.Component_headers)
        response_dict = response.json()
        draw_remain_num = int(response_dict.get('data').get('draw_remain_num'))
        print(f'剩余抽奖次数：{draw_remain_num}')
        if draw_remain_num == 0:
            return
        while True:
            url = 'https://syx19.dmsp.ccb.com/Component/draw/commonDrawPrize/224/4379wEmy'
            response = self.session.post(url, headers=self.Component_headers)
            response_dict = response.json()
            if response_dict.get('status') == 'success':
                print(f'获得{response_dict.get("data").get("prizename")}')
                time.sleep(3)
                continue
            break

    # # 统计今日CC豆收支
    # def statistics_ccb_today(self):
    #     url = 'https://cy.cloud.ccb.com/gateway/user-server/user/promised/getCCBeanDetails'
    #     headers = self.Component_headers | {'Content-Type': 'application/x-www-form-urlencoded'}
    #     print(headers)
    #     data = 'pageNum=1&pageSize=10&type=01&queryMonth=202308'
    #     response = requests.post(url, headers=headers, data=data)
    #     response_dict = response.json()
    #     print(response_dict)

    def main(self):
        character = '★★'
        if not self.sign_in():
            return
        self.get_user()  # 获取用户信息
        print(f'{character}开始激活勋章')
        self.activation_medal()
        print(f'{character}开始签到')
        self.check_in()  # 签到
        print(f'{character}开始完成浏览任务')
        self.execute_task()
        print(f'{character}开始领取每日营收')
        self.receive_daily_earnings()
        print(f'{character}开始每日答题')
        self.daily_answer_question()
        print(f'{character}开始超级娃娃机抓娃娃')
        self.ccb_draw_prize()
        print(f'{character}开始街头投篮王')
        self.shoot_basketball()
        # 消保专区
        print(f'{character}开始福兔登山赛')
        self.futu_mountain_climbing_race()
        print(f'{character}开始拼图大作战')
        #self.jigsaw_puzzle()
        print(f'{character}开始和我一起来闯关')
        self.come_with_me_to_break_through()
        print(f'{character}开始消保知识大考验')
        self.consumer_protection_knowledge_test()
        # 养老专区
        print(f'{character}开始养老健步行')
        self.elderly_walking()
        # 跨境专区
        print(f'{character}开始闯关无国界 建行伴你海外行')
        self.cross_borders()
        # 商户专区
        print(f'{character}开始享建行商户服务 天天抽取CC豆')
        self.merchant_zone()
        print(f'{character}开始升级每日营收等级')
        self.upgrade_daily_earnings_level()
        self.get_expiration_information()  # 获取CC豆过期信息
        self.get_user()  # 获取用户信息


# 主程序
def main(ck_list):
    global IDENT_DICT
    if not ck_list:
        print('没有获取到账号！')
        return
    try:
        with open("ident_dict.json", "r", encoding="utf-8") as f:  # 打开 JSON 文件，以 UTF-8 编码方式打开
            IDENT_DICT = json.load(f)  # 使用 json.load() 方法将文件内容加载为 Python 对象
    except FileNotFoundError:  # 如果文件不存在
        IDENT_DICT = {}
    ck_list = [ck for ck in ck_list if ck]
    print(f'获取到{len(ck_list)}个账号！')
    for index, ck in enumerate(ck_list):
        print(f'*****第{index + 1}个账号*****')
        CCBLife(ck, index).main()
        print('')
    with open("ident_dict.json", "w", encoding="utf-8") as f:
        json.dump(NEW_IDENT_DICT, f)


if __name__ == '__main__':
    main(CCB_CK_LIST)
    sys.exit()
