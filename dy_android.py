# coding=utf-8
# 抖音-安卓
# 抓包内容 逛街一次 抓包done/shopping_gold?mode=done
# url没有mode=done可能会运行出错
# 全部的url#cookie#argus#ladon
# 自己填写ua，可以更改剩余水滴数量
import json
import os
import random
import re
import time

import requests
from jsonsearch import JsonSearch

if os.name == 'nt':
	from dotenv import load_dotenv

	try:
		load_dotenv(dotenv_path='dy_cookie.env', verbose=True)
	except EnvironmentError:
		print(EnvironmentError)

cookies = os.getenv('android_dyjsb')

ua = ''
debug_mode = 0

referer = 'https://tmaservice.developer.toutiao.com/?appid=tt521124accd2b7abe&version=0.5.23'
remain_water_num = 200


def strInsert(origin_str, pos, insert_str):
	# 将str变为列表
	str_list = list(origin_str)
	# 插入到指定位置
	str_list.insert(pos, insert_str)
	# 列表元素拼接
	return ''.join(str_list)


class User():
	sdk_version = '2'
	passport_sdk_version = '203100'
	sign_completed = None
	ad_req_id = None
	ad_completed = None
	team_info_arr = None
	shopping_completed = None

	treasure_box_req_id = ''
	treasure_box_amount = 0  # 开宝箱获得的金币
	treasure_box_score_amount = 0  # 开宝箱看广告获得的金币
	treasure_box_next_time = None
	amount = 0

	water_num = None
	bottle_state = None

	def __init__(self, cookie1):

		self.task_url = cookie1.split("#")[0]
		self.cookie = cookie1.split("#")[1]
		self.argus = cookie1.split("#")[2]
		self.ladon = cookie1.split("#")[3]
		self.params = re.findall('\?(.*?)$', self.task_url)[0]
		try:
			self.clear_mode_params = re.findall('mode=done&(.*?)$', self.params)[0]
		except Exception:
			print('url中没有mode=done')

	def find_params(self):
		json_data = JsonSearch(object=self.get_info(), mode='j')

		task_list_arr = json_data.search_all_value('task_list')

		task_list_path_arr = json_data.search_all_path('task_list')
		treasure_box_info = json_data.search_first_value('treasure_box')
		task_list = []
		for t in task_list_arr:
			if len(t) != 0:
				task_list = t

		task = {
			'task_list': task_list
		}
		json_data = JsonSearch(object=task, mode='j')
		task_id_arr = json_data.search_all_value('task_id')
		task_id_dict = {
			'签到': 203,
			'逛街赚钱': 1334,
			'吃饭打卡赚金币': 1095,
			'浏览爆款赚金币': 1455,
			'搜索赚金币': 1495,
			'看广告赚金币': 111,
			'看小说赚金币': 1313,
			'逛商城赚金币': 130024,
			'逛热销爆品赚金币': 130003,
			'看视频赚金币': 1007,
		}
		shopping_info = task_list[task_id_arr.index(task_id_dict.get('逛街赚钱'))]

		sign_info = task_list[task_id_arr.index(task_id_dict.get('签到'))]
		sign_completed = sign_info.get('completed')
		ad_info = task_list[task_id_arr.index(task_id_dict.get('看广告赚金币'))]
		ad_completed = ad_info.get('completed')
		ad_req_id = (json.loads(ad_info.get('status_extra'))).get('req_id')
		# treasure_box_cur_time = treasure_box_info.get('treasure_stats').get('cur_time')
		treasure_box_next_time = treasure_box_info.get('treasure_stats').get('next_time')
		self.sign_completed = sign_completed
		self.ad_completed = ad_completed
		self.ad_req_id = ad_req_id
		self.treasure_box_next_time = treasure_box_next_time
		shopping_info_desc = shopping_info.get('desc')

		shopping_max_count = re.findall('/([0-9]*)', shopping_info_desc)[0]
		shopping_cur_count = re.findall('([0-9]*)/', shopping_info_desc)[0]
		if shopping_cur_count == shopping_max_count:
			self.shopping_completed = True

	def struct_requests(self, method, url, payload, referer):
		# url 为完整的url
		host = re.findall('https://(.*?)/', url)[0]
		proxies = {
			"http": None,
			"https": None,
		}
		if method == 'get':
			headers = {
				'Host': host,
				'User-Agent': ua,
				'Connection': 'keep-alive',
				'Accept': '*/*',
				'Accept-Encoding': 'gzip, deflate',
				'sdk-version': self.sdk_version,
				'passport-sdk-version': self.passport_sdk_version,
				'Cookie': self.cookie
			}
			if referer is not None:
				headers['referer'] = referer
			response = requests.get(url=url, headers=headers, proxies=proxies)
			if debug_mode == 1:
				print(response.text)
			return response.json()

		elif method == 'post':
			headers = {
				'Host': host,
				'User-Agent': ua,
				'Connection': 'keep-alive',
				'Accept': '*/*',
				'Accept-Encoding': 'gzip, deflate',
				'sdk-version': self.sdk_version,
				'passport-sdk-version': self.passport_sdk_version,
				'x-argus': self.argus,
				'x-ladon': self.ladon,
				'Cookie': self.cookie
			}
			if referer is not None:
				headers['referer'] = referer
			if payload is not None:
				headers['content-length'] = str(len(payload))
				response = requests.post(url=url, headers=headers, data=payload, proxies=proxies)
			else:
				response = requests.post(url=url, headers=headers, proxies=proxies)
			return response.json()

	def get_info(self):
		time.sleep(random.uniform(2, 5))
		url = f"https://api5-normal-c-lf.amemv.com/luckycat/aweme/v1/task/page?" + self.params
		response = self.struct_requests(method='get', url=url, payload=None, referer=None)
		if debug_mode == 1:
			print(response)
		if response.get('err_no') == 0:
			amount = response.get('data').get('income_data').get('amount1')
			print(f'【查询信息】今日金币{amount}')
			if debug_mode == 1:
				print(response.get("data").get("is_login"))
			return response
		else:
			print('【查询信息】' + response.get('err_tips'))

	def task(self, task_key):
		temp = task_key
		from_task_key = None
		if task_key.rfind('#') != -1:
			from_task_key = task_key[task_key.rfind('#') + 1:]
			task_key = task_key[:task_key.rfind('#')]
		url = f'https://api3-normal-c.amemv.com/luckycat/aweme/v1/task/{task_key}?' + self.params
		task_key = temp
		if task_key == 'done/sign_in':
			time.sleep(random.uniform(3, 5))
			payload = json.dumps({})
			res = self.struct_requests(method='post', url=url, payload=payload, referer=None)

			if debug_mode == 1:
				print(res)
			if res.get('err_no') == 0:
				amount = res.get('data').get('amount')
				print(f"【签到】获得{amount}金币")
				self.amount += amount
				return 1
			else:
				print('【签到】' + res.get('err_tips'))

		elif task_key == 'done/excitation_ad':
			# 每5分钟完成一次广告任务

			# 获取广告金币数量
			amount = self.task('excitation_ad/detail')
			time.sleep(random.uniform(15, 25))
			payload = json.dumps({
				"amount": str(amount),
				"inspire_modal_add_modal_manage": False,
				"ad_rit": "12315",
				"ad_inspire": {
					"score_amount": str(amount),
					"experience": "-1",
					"req_id": str(self.ad_req_id)
				},
				"task_key": "excitation_ad",
				"stage_score_amount": [],
				"ad_alias_position": "task",
				"need_reward": True,
				"experience": "-1",
				"params_for_special": "luckydog_sdk",
				"static_settings_version": 50,
				"dynamic_settings_version": 50,
				"poll_settings_version": 0,
				"aggr_income_id": ""
			})
			res = self.struct_requests(method='post', url=url, payload=payload, referer=None)
			# print(res)
			if debug_mode == 1:
				print(res)
			if res.get('err_no') == 0:
				# if 'data' in res and 'amount' in res.get('data'):
				amount = res.get('data').get('amount')
				print(f"【看广告赚金币】获得{amount}金币")
				self.amount += amount
				return 1

			else:
				print('【看广告赚金币】' + res.get('err_tips'))
				return 0

		elif task_key == 'done/treasure_task':
			time.sleep(random.uniform(3, 5))
			payload = json.dumps({})
			res = self.struct_requests(method='post', url=url, payload=payload, referer=None)
			if debug_mode == 1:
				print('------【开宝箱】------')
				print(res)
				print('------------')
			if res.get('err_no') == 0:
				if 'data' in res and 'amount' in res.get('data'):
					self.treasure_box_amount = res.get('data').get('amount')
					self.treasure_box_score_amount = res.get('data').get('excitation_ad_info').get('score_amount')
					self.treasure_box_req_id = res.get('data').get('excitation_ad_info').get('req_id')
					print(f"【开宝箱】获得{self.treasure_box_amount}金币")
					self.amount += self.treasure_box_amount
					return 1
				return 0
			else:
				print('【开宝箱】' + res.get('err_tips'))
				return 0

		elif task_key == 'done/excitation_ad_treasure_box':
			# 看宝箱第一个广告
			time.sleep(random.uniform(20, 25))
			payload = json.dumps({
				"amount": str(self.treasure_box_score_amount),
				"inspire_modal_add_modal_manage": False,
				"cat_treasure_reward": 0,
				"ad_rit": "12317",
				"ad_inspire": {
					"score_amount": str(self.treasure_box_score_amount),
					"amount": str(self.treasure_box_amount),
					"req_id": str(self.treasure_box_req_id)
				},
				"task_key": "excitation_ad_treasure_box",
				"stage_score_amount": [],
				"ad_alias_position": "box",
				"need_reward": True,
				"finish_action": 0,
				"params_for_special": "luckydog_sdk",
				"static_settings_version": 50,
				"dynamic_settings_version": 50,
				"poll_settings_version": 0,
				"aggr_income_id": ""
			})
			res = self.struct_requests(method='post', url=url, payload=payload, referer=None)

			if debug_mode == 1:
				print('------【宝箱】第1个视频------')
				print(res)
				print('------------')
			if res.get('err_no') == 0:
				amount = res.get('data').get('amount')
				# print(amount)
				print(f"【宝箱】第1个视频获得{amount}金币")
				self.amount += amount
				return 1
			else:
				print('【宝箱】第1个视频' + res.get('err_tips'))
				return 0

		elif task_key == 'done/excitation_ad/one_more#excitation_ad':
			for rid in range(2):
				time.sleep(random.uniform(20, 25))
				payload = json.dumps({
					"task_key": from_task_key,
					"rit": "28038",
					"creator_id": "12315000",
					"one_more_round": rid,
					"aggr_income_id": ""
				})
				res = self.struct_requests(method='post', url=url, payload=payload, referer=None)
				if debug_mode == 1:
					print(f'------【看广告赚金币】第{2 + rid}个视频------')
					print(res)
					print('------------')
				if res.get('err_no') == 0:
					amount = res.get('data').get('amount')
					# print(amount)
					print(f"【看广告赚金币】第{2 + rid}个视频获得{amount}金币")
					self.amount += amount
				else:
					print(f'【看广告赚金币】第{2 + rid}个视频：' + res.get('err_tips'))
					break

		elif task_key == 'done/excitation_ad/one_more#excitation_ad_treasure_box':
			for rid in range(2):
				time.sleep(random.uniform(20, 25))
				payload = json.dumps({
					"task_key": from_task_key,
					"rit": "28038",
					"creator_id": "12317000",
					"one_more_round": rid,
					"aggr_income_id": ""
				})
				res = self.struct_requests(method='post', url=url, payload=payload, referer=None)
				if debug_mode == 1:
					print(f'------【宝箱】第{2 + rid}个视频------')
					print(res)
					print('------------')
				if res.get('err_no') == 0:
					amount = res.get('data').get('amount')
					# print(amount)
					print(f"【宝箱】第{2 + rid}个视频获得{amount}金币")
					self.amount += amount
				else:
					print(f'【宝箱】第{2 + rid}个视频' + res.get('err_tips'))
					break

		elif task_key == 'done/shopping_gold':
			# 逛街赚金币
			time.sleep(random.uniform(30, 40))
			payload = 'body=null'
			res = self.struct_requests(method='post', url=url, payload=payload, referer=None)
			if debug_mode == 1:
				print('------【逛街赚金币】------')
				print(res)
				print('------------')
			if res.get('err_no') == 0:
				if 'data' in res and 'amount' in res.get('data'):
					amount = res.get('data').get('amount')
					print(f"【逛街赚金币】获得{amount}金币")
					self.amount += amount
					return 1
				return 0
			else:
				print('【逛街赚金币】' + res.get('err_tips'))
				return 0

		# ======================================== get方法 ====================================
		elif task_key == 'excitation_ad/detail':
			time.sleep(random.uniform(2, 5))
			res = self.struct_requests(method='get', url=url, payload=None, referer=None)
			if res.get('err_no') == 0:
				if res.get('data').get('score_amount') is not None:
					return res.get('data').get('score_amount')
				else:
					print(f'【获取第1个广告】没有返回金币数量')
					return 0
			else:
				print(f'【获取第1个广告错误】' + res.get('err_tips'))
				return 0

	# =================================果园 ===============================

	def game_orchard_task_list(self):
		# 查询果园任务
		time.sleep(random.uniform(3, 5))
		url = 'https://minigame.zijieapi.com/ttgame/game_orchard/tasks/list?' + self.clear_mode_params

		try:
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			# print(res)
			if res.get('status_code') == 0:
				task_list = res.get('data').get('tasks')
				task_except_list = ['领取一次组队奖励', '分享找到的水滴给好友', '邀请好友种树领水滴',
									'购买优惠好物', '体验道具拍视频']
				todo_task_list = []
				for t in task_list:
					id = t.get('id')
					state = t.get('reward_item').get('state')
					action = t.get('action')
					name = t.get('name')
					if name not in task_except_list and state == 3:
						todo_task_list.append(f'{id}#{action}')
				# 返回格式为 id#action的list
				return todo_task_list
			else:
				print('【果园 查询水滴任务】' + res.get('message'))
		except AttributeError:
			print('get值错误')
		except Exception:
			print('game_orchard_task_list 异常')

	def game_orchard_sign_in_reward(self):
		time.sleep(random.uniform(2, 4))
		try:
			url = 'https://minigame.zijieapi.com/ttgame/game_orchard/sign_in/reward?watch_ad=1&extra_ad_num=0&' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_name = res.get('data').get('reward_item').get('name')
				cur_water_num = res.get('data').get('kettle').get('water_num')
				cur_fertilizer_lite = res.get('data').get('fertilizer').get('lite')
				cur_fertilizer_normal = res.get('data').get('fertilizer').get('normal')
				print(f'【果园 签到】获得{reward_num}个{reward_name}')
				print(f'当前水滴{cur_water_num},小化肥{cur_fertilizer_lite},大化肥{cur_fertilizer_normal}')
			else:
				print('【果园 签到】' + res.get('message'))
		except Exception:
			print('game_orchard_sign_in_reward 异常')

	def game_orchard_tasks_reward(self, todo_task_list):
		# 做果园水滴任务
		try:
			for t in todo_task_list:
				t_id = re.findall('^(.*?)#', t)[0]
				t_action = re.findall('#(.*?)$', t)[0]
				time.sleep(random.uniform(15, 30))
				url = f'https://minigame.zijieapi.com/ttgame/game_orchard/tasks/reward?task_id={t_id}&do_action={t_action}&extra_ad_num=0&' + self.clear_mode_params
				res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
				if res.get('status_code') == 0:
					reward_num = res.get('data').get('reward_item').get('num')
					reward_name = res.get('data').get('reward_item').get('name')
					cur_water_num = res.get('data').get('kettle').get('water_num')
					cur_fertilizer_lite = res.get('data').get('fertilizer').get('lite')
					cur_fertilizer_normal = res.get('data').get('fertilizer').get('normal')
					print(f'【果园 任务】获得{reward_num}个{reward_name}')
					print(f'当前水滴{cur_water_num},小化肥{cur_fertilizer_lite},大化肥{cur_fertilizer_normal}')
				else:
					print('【果园 任务】' + res.get('message'))
		except Exception:
			print('game_orchard_tasks_reward 异常')

	def game_orchard_water_bottle_reward(self):
		# 领取水瓶的水
		time.sleep(random.uniform(2, 4))
		url = f'https://minigame.zijieapi.com/ttgame/game_orchard/water_bottle/reward?' + self.clear_mode_params

		try:
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_name = res.get('data').get('reward_item').get('name')
				cur_water_num = res.get('data').get('kettle').get('water_num')
				cur_fertilizer_lite = res.get('data').get('fertilizer').get('lite')
				cur_fertilizer_normal = res.get('data').get('fertilizer').get('normal')
				print(f'【果园 领取水瓶的水】获得{reward_num}个{reward_name}')
				print(f'当前水滴{cur_water_num},小化肥{cur_fertilizer_lite},大化肥{cur_fertilizer_normal}')
			else:
				print('【果园 领取水瓶的水】' + res.get('message'))
		except AttributeError:
			print('get值错误')
		except Exception:
			print('【果园 领取水瓶的水】异常')

	def game_orchard_tree_water(self, water_count):
		# 可以查询果树所有信息
		# three_water_resp.state == 4（完成未领取） ==5（已领取）
		# three_water_resp.times 浇水宝箱剩余浇水次数
		# 浇水
		try:
			for count in range(water_count):
				time.sleep(random.uniform(2, 4))
				url = f'https://minigame.zijieapi.com/ttgame/game_orchard/tree/water?' + self.clear_mode_params
				res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
				# print(res)
				# 最后一次打印明日领取水瓶的水的信息
				if res.get('status_code') == 0:
					cur_water_num = res.get('data').get('kettle').get('water_num')
					today_watered_count = res.get('data').get('today_water')
					progress_current = res.get('data').get('progress').get('current')
					progress_target = res.get('data').get('progress').get('target')
					bottle = res.get('data').get('bottle').get('water_num')
					bottle_time = res.get('data').get('bottle').get('availiable_time')
					three_water_resp_status = res.get('data').get('three_water_resp').get('state')
					three_water_resp_remain_times = res.get('data').get('three_water_resp').get('times')
					print(f'【果园】浇水1次成功,剩余水滴{cur_water_num}')
					progress = "{:.2f}".format((progress_current / progress_target) * 100)
					print(f'今日共浇水{today_watered_count}次,进度{progress}%')
					shake_tree_state = res.get('data').get('shake_tree_state')
					if shake_tree_state != 0:
						self.game_orchard_fortune_tree_shake()
					# 需要完善摇树
					if three_water_resp_remain_times != 0:
						print(f'再浇水{three_water_resp_remain_times}次可领取浇水宝箱奖励')
					elif three_water_resp_status == 4 and three_water_resp_remain_times == 0:
						print('可领取浇水宝箱奖励')
						self.game_orchard_three_water_reward()
				else:
					print('【果园】浇水1次：' + res.get('message'))
		except Exception:
			print('game_orchard_tree_water 异常')

	def game_orchard_three_water_reward(self):
		time.sleep(random.uniform(2, 4))
		url = 'https://minigame.zijieapi.com/ttgame/game_orchard/three_water/reward?' + self.clear_mode_params
		res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
		# print(res)
		if res.get('status_code') == 0:
			# 空
			print('【果园 领取浇水宝箱奖励】成功')
		else:
			print('【果园 领取浇水宝箱奖励】' + res.get('message'))

	def game_orchard_team_list(self):
		# 组队领化肥
		# 组队列表查询
		try:
			url = 'https://minigame.zijieapi.com/ttgame/game_orchard/team/list?open=open' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			# print(res)
			if res.get('status_code') == 0:
				reward_items_list = res.get('data').get('tasks').get('reward_items')
				team_info_list = res.get('data').get('team_info')
				todo_team_reward_dic = {}  # 去领取团队奖励的dic
				todo_token_list = []  # 好友的token
				for l in reward_items_list:
					if l.get('state') == 4:
						todo_team_reward_dic[l.get('id')] = l.get('type')
				for lindex in range(len(team_info_list)):
					if lindex == 0:
						continue
					info = team_info_list[lindex]
					if info.get('status') != 2:
						todo_token_list.append(info.get('token'))
				# 执行组队奖励领取
				todo_team_reward_dic_keys = todo_team_reward_dic.keys()
				for key in todo_team_reward_dic_keys:
					do_action = key
					reward_type = todo_team_reward_dic.get(key)
					self.game_orchard_team_reward(reward_type, do_action)

				if len(todo_team_reward_dic) != 0:
					time.sleep(random.uniform(4, 8))

				return todo_token_list
			else:
				print('【组队列表查询】' + res.get('message'))
		except Exception:
			print('game_orchard_team_list 异常')

	def game_orchard_team_reward(self, reward_type, do_action):

		time.sleep(random.uniform(3, 5))
		try:
			url = f'https://minigame.zijieapi.com/ttgame/game_orchard/team/reward?type={reward_type}&do_action={do_action}&token=null&' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			type_and_name = {
				1: '水滴',
				4: '小化肥'
			}
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_type = int(res.get('data').get('reward_item').get('type'))
				cur_water_num = res.get('data').get('kettle').get('water_num')
				cur_fertilizer_lite = res.get('data').get('fertilizer').get('lite')
				cur_fertilizer_normal = res.get('data').get('fertilizer').get('normal')
				print(f'【果园 组队奖励领取】获得{reward_num}个{type_and_name.get(reward_type)}')
				print(f'当前水滴{cur_water_num},小化肥{cur_fertilizer_lite},大化肥{cur_fertilizer_normal}')
			else:
				print('【果园 组队奖励领取】' + res.get('message'))
		except Exception:
			print('game_orchard_team_reward 异常')

	def game_orchard_team_find_water(self, friend_token):
		time.sleep(random.uniform(3, 5))
		try:
			url = f'https://minigame.zijieapi.com/ttgame/game_orchard/team/find_water?token={friend_token}&' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				friend_name = res.get('data').get('nick_name')
				print(f'【果园 好友果园】好友：{friend_name}')
				water_list = res.get('data').get('water_list')
				return water_list
			else:
				print('【果园 好友果园】' + res.get('message'))
		except Exception:
			print('game_orchard_team_find_water 异常')

	def game_orchard_team_gain_water(self, water_index, water_type, friend_token):
		time.sleep(random.uniform(3, 5))
		try:
			url = f'https://minigame.zijieapi.com/ttgame/game_orchard/team/gain_water?water_index={water_index}&water_type={water_type}&token={friend_token}&' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_name = res.get('data').get('reward_item').get('name')
				print(f'【果园 去好友果园】获得{reward_num}个{reward_name}')
			else:
				print('【果园 去好友果园】' + res.get('message'))
		except Exception:
			print('game_orchard_team_gain_water 异常')

	def game_orchard_fortune_tree_shake(self):
		time.sleep(random.uniform(2, 5))
		try:
			url = 'https://minigame.zijieapi.com/ttgame/game_orchard/fortune_tree/shake?' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_name = res.get('data').get('reward_item').get('name')
				print(f'【果园 摇树】获得{reward_num}个{reward_name}')
			else:
				print('【果园 摇树】' + res.get('message'))
		except Exception:
			print('game_orchard_fortune_tree_shake 异常')

	# 待完善
	def game_orchard_three_gift_reward(self, task_id, watch_ad_type):
		time.sleep(random.uniform(15, 20))
		# task_id 0 早
		# task_id 1 中
		# task_id 2 晚
		three_dift_dic = {
			'1': '早餐',
			'2': '午餐',
			'3': '晚餐'
		}
		try:
			url = f'https://minigame.zijieapi.com/ttgame/game_orchard/three_gift/reward?task_id={task_id}&watch_ad={watch_ad_type}&extra_ad_num=0&' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				reward_num = res.get('data').get('reward_item').get('num')
				reward_name = res.get('data').get('reward_item').get('name')
				cur_water_num = res.get('data').get('kettle').get('water_num')
				cur_fertilizer_lite = res.get('data').get('fertilizer').get('lite')
				cur_fertilizer_normal = res.get('data').get('fertilizer').get('normal')
				print(f'【果园 三餐礼包{three_dift_dic.get(task_id)}】获得{reward_num}个{reward_name}')
				print(f'当前水滴{cur_water_num},小化肥{cur_fertilizer_lite},大化肥{cur_fertilizer_normal}')
			else:
				print('【果园 三餐礼包】' + res.get('message'))
		except Exception:
			print('game_orchard_three_gift_reward 异常')

	def game_orchard_polling_info_write(self):
		time.sleep(random.uniform(2, 5))
		try:
			url = 'https://minigame.zijieapi.com/ttgame/game_orchard/polling_info_write?' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				if 'kettle' in res.get('data') and 'water_num' in res.get('data').get('kettle'):
					water_num = res.get('data').get('kettle').get('water_num')
					self.water_num = water_num
				if 'bottle' in res.get('data') and 'state' in res.get('data').get('bottle'):
					bottle_state = res.get('data').get('bottle').get('state')
					# print(f'【果园】当前水瓶状态{bottle_state}')
					self.bottle_state = bottle_state
			else:
				print('【果园 信息查询】' + res.get('message'))
		except Exception:
			print('game_orchard_polling_info_write 异常')

	def game_orchard_three_gift_list(self):
		# 三餐礼包查询
		time.sleep(random.uniform(2, 5))
		try:
			url = 'https://minigame.zijieapi.com/ttgame/game_orchard/three_gift/list?' + self.clear_mode_params
			res = self.struct_requests(method='get', url=url, payload=None, referer=referer)
			if res.get('status_code') == 0:
				if 'data' in res and 'gift_list' in res.get('data'):
					three_gift_list = res.get('data').get('gift_list')
					three_gift_dic = {}
					for l in three_gift_list:
						# 查询未领取的三餐礼包
						if l.get('current_rounds') == 0:
							begin = l.get('available_time').get('begin')
							end = l.get('available_time').get('end')
							three_gift_dic[l.get('id')] = f'{begin}#{end}'
					return three_gift_dic
			else:
				print('【果园 三餐礼包查询】' + res.get('message'))
		except Exception:
			print('game_orchard_three_gift_list 异常')

	def run_test(self):
		# 测试
		return

	def game_orchard_run(self):

		format_time = time.strftime('%H:%M:%S')
		# 获取状态
		self.game_orchard_polling_info_write()

		# ==================== 领取水滴  ======================

		# 签到 时间段：06:00:00-08:00:00
		if '06:00:00' <= format_time <= '08:00:00':
			self.game_orchard_sign_in_reward()

		# 水滴任务 时间段:08:00:00-10:00:00  14:00:00-16:00:00
		if '08:00:00' <= format_time <= '10:00:00' or '14:00:00' <= format_time <= '16:00:00':
			todo_task_list = self.game_orchard_task_list()
			self.game_orchard_tasks_reward(todo_task_list)

		# 领取水瓶的水 08:00:00-10:00:00
		if '08:00:00' <= format_time <= '10:00:00':
			if self.bottle_state is not None and self.bottle_state != 3:
				self.game_orchard_water_bottle_reward()

		# 去好友果园获取水滴 07:00:00-08:00:00 16:00:00-17:00:00
		if '09:00:00' <= format_time <= '10:00:00' or '16:00:00' <= format_time <= '17:00:00':
			todo_token_list = self.game_orchard_team_list()
			for token in todo_token_list:
				friend_orchard_water_list = self.game_orchard_team_find_water(token)
				todo_friend_orchard_dic = {}
				for l_index in range(len(friend_orchard_water_list)):
					item = friend_orchard_water_list[l_index]
					if item.get('has_gain') is False:
						todo_friend_orchard_dic[l_index] = friend_orchard_water_list[l_index].get('type')
				# 要执行的好友 key = index, value = type
				if len(todo_friend_orchard_dic) == 0:
					continue
				keys = todo_friend_orchard_dic.keys()
				for key in keys:
					water_type = todo_friend_orchard_dic.get(key)
					self.game_orchard_team_gain_water(water_index=key, water_type=water_type, friend_token=token)
				time.sleep(random.uniform(5, 10))

		if ('07:00:00' <= format_time <= '09:00:00') or ('11:00:00' <= format_time <= '14:00:00') or (
				'18:00:00' <= format_time <= '21:00:00'):

			three_gift_dic = self.game_orchard_three_gift_list()
			three_gift_keys = three_gift_dic.keys()

			for key in three_gift_keys:
				# 判断当前时间
				task_hour = three_gift_dic.get(key)
				task_id = key
				start_hour = int(re.findall('^(.*?)#', task_hour)[0])
				end_hour = int(re.findall('#(.*?)$', task_hour)[0])
				format_hour = int(time.strftime('%H'))
				format_minute_and_second = time.strftime('%M:%S')
				# 执行正常领取
				if start_hour <= format_hour < end_hour:
					self.game_orchard_three_gift_reward(task_id, 1)
				# 执行补领
				elif format_hour >= end_hour and format_minute_and_second > '00:00':
					self.game_orchard_three_gift_reward(task_id, 2)
				time.sleep(random.uniform(5, 10))

		# ==================== 浇水  ======================

		# 查询
		self.game_orchard_polling_info_write()
		water_num = self.water_num
		print(f'【果园】当前水滴{water_num}')
		# 剩余水 其余全部浇水
		water_count = int((water_num - remain_water_num) / 10)
		# 浇水
		self.game_orchard_tree_water(water_count)
		print(f'【果园】已设置剩余水量{remain_water_num},不再浇水')

	def origin_run(self):
		if self.sign_completed:
			print('【签到】已完成')
		else:
			self.task('done/sign_in')
		if self.ad_completed:
			print('【看广告赚金币】已完成')
		else:
			if self.task('done/excitation_ad'):
				self.task('done/excitation_ad/one_more#excitation_ad')
		cur_time = time.time()
		if cur_time < self.treasure_box_next_time:
			local_time = time.localtime(self.treasure_box_next_time)
			formatted_time = time.strftime('%Y-%m-%d %H:%M:%S', local_time)
			print(f'【开宝箱】时间未到,在{formatted_time}开宝箱')
		else:
			if self.task('done/treasure_task'):
				if self.task('done/excitation_ad_treasure_box'):
					self.task('done/excitation_ad/one_more#excitation_ad_treasure_box')

		if self.shopping_completed:
			print('【逛街赚金币】已完成')
		else:
			self.task('done/shopping_gold')

	def run(self):
		# self.run_test()
		self.find_params()
		self.origin_run()
		format_time = time.strftime('%H:%M:%S')
		if '06:00:00' <= format_time <= '20:00:00':
			time.sleep(random.uniform(8, 20))
			print('等待执行果园任务')
			self.game_orchard_run()
		print(f'本次执行获得{self.amount}金币')


if __name__ == "__main__":
	user_cookie = cookies.split('\n')
	print(f"极速版共获取到{len(user_cookie)}个账号")
	i = 0
	for cookie in user_cookie:
		print(f"=========开始第{i + 1}个账号=========")
		User(cookie).run()
		if i != len(user_cookie) - 1:
			i += 1
			wait_time = random.randint(60, 150)
			print(f'等待{wait_time}')
			time.sleep(wait_time)
