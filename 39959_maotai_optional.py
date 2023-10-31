import datetime
import logging
import os
import random
import time
import sys
import traceback

import requests
import base64
import json

logging.basicConfig(level=logging.INFO, format='%(message)s')

env_key = "MAOTAI_CONFIG"
res_map = {
    # '10213': '贵州茅台酒（癸卯兔年）',
    # '10056': '茅台1935',
    '2478': '贵州茅台酒（珍品）',
    '10214': '贵州茅台酒（癸卯兔年）2'
}
mt_r = 'clips_OlU6TmFRag5rCXwbNAQ/Tz1SKlN8THcecBp/HGhHdw=='
p_c_map = {}
Version = '3.2.16'


# 加载通知
def load_send() -> None:
    logging.info("加载推送功能中...")
    global send
    send = None
    cur_path = os.path.abspath(os.path.dirname(__file__))
    sys.path.append(cur_path)
    if os.path.exists(cur_path + "/notify.py"):
        try:
            from notify import send
        except Exception:
            send = None
            logging.info(f"❌加载通知服务失败!!!\n{traceback.format_exc()}")
    else:
        logging.info(f"❌加载通知服务失败!!!\n")


# 获取环境变量
def get_envs(env_key):
    if env_key in os.environ:
        configs = os.environ[env_key]
        if len(configs) > 0:
            try:
                return configs
            except Exception as e:
                logging.error(f"{env_key}变量格式错误: {e}")
                sys.exit(1)

        else:
            logging.info(f"{env_key}变量量未启用")
            sys.exit(1)
    else:
        logging.info(f'未添加{env_key}变量')
        sys.exit(1)


# 抢购
def mt_add(item_id, shop_id, session_id, user_id, token, device_id):
    mt_k = f'{int(time.time() * 1000)}'
    r = requests.get(f'http://82.157.10.108:8086/get_mtv?DeviceID={device_id}&MTk={mt_k}&version={Version}&key=yaohuo')
    headers = {
        'User-Agent': 'iPhone 14',
        'MT-Token': token,
        'MT-Network-Type': 'WIFI', 'MT-User-Tag': '0',
        'MT-R': mt_r, 'MT-Lat': '', 'MT-K': mt_k,
        'MT-Lng': '', 'MT-Info': '028e7f96f6369cafe1d105579c5b9377', 'MT-APP-Version': Version,
        'MT-Request-ID': f'{int(time.time() * 1000)}', 'Accept-Language': 'zh-Hans-CN;q=1',
        'MT-Device-ID': device_id, 'MT-V': r.text,
        'MT-Bundle-ID': 'com.moutai.mall',
        'mt-lng': lng,
        'mt-lat': lat

    }
    d = {"itemInfoList": [{"count": 1, "itemId": str(item_id)}], "sessionId": session_id, "userId": str(user_id),
         "shopId": str(shop_id)}
    r = requests.get('http://82.157.10.108:8086/get_actParam?key=yaohuo&actParam=' + base64.b64encode(
        json.dumps(d).replace(' ', '').encode('utf8')).decode())
    d['actParam'] = r.text
    json_data = d
    response = requests.post('https://app.moutai519.com.cn/xhr/front/mall/reservation/add', headers=headers,
                             json=json_data)
    code = response.json().get('code', 0)
    if code == 2000:
        return response.json().get('data', {}).get('successDesc', "未知")
    return '申购失败, ' + response.json().get('message', "未知原因")


def get_session_id(device_id, token):
    headers = {
        'mt-device-id': device_id,
        'mt-user-tag': '0',
        'accept': '*/*',
        'mt-network-type': 'WIFI',
        'mt-token': token,
        'mt-bundle-id': 'com.moutai.mall',
        'accept-language': 'zh-Hans-CN;q=1',
        'mt-request-id': f'{int(time.time() * 1000)}',
        'mt-app-version': '3.2.16',
        'user-agent': 'iPhone 14',
        'mt-r': mt_r,
        'mt-lng': lng,
        'mt-lat': lat
    }

    response = requests.get('https://static.moutai519.com.cn/mt-backend/xhr/front/mall/index/session/get/' + time_keys,
                            headers=headers)
    session_id = response.json().get('data', {}).get('sessionId')
    item_list = response.json().get('data', {}).get('itemList', [])
    item_codes = [item.get('itemCode') for item in item_list]
    return session_id, item_codes


def get_shop_item(session_id, item_id, device_id, token, province, city):
    headers = {
        'mt-device-id': device_id,
        'mt-user-tag': '0',
        'mt-lat': '',
        'accept': '*/*',
        'mt-network-type': 'WIFI',
        'mt-token': token,
        'mt-bundle-id': 'com.moutai.mall',
        'accept-language': 'zh-Hans-CN;q=1',
        'mt-request-id': f'{int(time.time() * 1000)}',
        'mt-r': mt_r,
        'mt-app-version': '3.2.16',
        'user-agent': 'iPhone 14',
        'mt-lng': '',
        'mt-lng': lng,
        'mt-lat': lat
    }

    response = requests.get(
        'https://static.moutai519.com.cn/mt-backend/xhr/front/mall/shop/list/slim/v3/' + str(
            session_id) + '/' + province + '/' + str(item_id) + '/' + time_keys,
        headers=headers)
    data = response.json().get('data', {})
    shops = data.get('shops', [])
    shop_id_ = p_c_map[province][city]
    for shop in shops:
        if not shop.get('shopId') in shop_id_:
            continue
        if item_id in str(shop):
            return shop.get('shopId')


def get_user_id(token, Device_ID):
    headers = {
        'MT-User-Tag': '0',
        'Accept': '*/*',
        'MT-Network-Type': 'WIFI',
        'MT-Token': token,
        'MT-Bundle-ID': 'com.moutai.mall',
        'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9',
        'MT-Request-ID': f'{int(time.time() * 1000)}',
        'MT-APP-Version': '3.2.16',
        'User-Agent': 'iOS;16.0.1;Apple;iPhone 14 ProMax',
        'MT-R': mt_r,
        'MT-Device-ID': Device_ID,
        'mt-lng': lng,
        'mt-lat': lat
    }

    response = requests.get('https://app.moutai519.com.cn/xhr/front/user/info', headers=headers)
    user_name = response.json().get('data', {}).get('userName')
    user_id = response.json().get('data', {}).get('userId')
    mobile = response.json().get('data', {}).get('mobile')
    return user_name, user_id, mobile


def getUserEnergyAward(device_id, ck):
    cookies = {
        'MT-Device-ID-Wap': device_id,
        'MT-Token-Wap': ck,
        'YX_SUPPORT_WEBP': '1',
    }

    headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2_1 like Mac OS X)',
        'Referer': 'https://h5.moutai519.com.cn/gux/game/main?appConfig=2_1_2',
        'Client-User-Agent': 'iOS;15.0.1;Apple;iPhone 12 ProMax',
        'MT-R': mt_r,
        'Origin': 'https://h5.moutai519.com.cn',
        'MT-APP-Version': '3.2.16',
        'MT-Request-ID': f'{int(time.time() * 1000)}',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
        'MT-Device-ID': device_id,
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'mt-lng': lng,
        'mt-lat': lat
    }
    response = requests.post('https://h5.moutai519.com.cn/game/isolationPage/getUserEnergyAward', cookies=cookies,
                             headers=headers, json={})
    return response.json().get('message') if '无法领取奖励' in response.text else "领取奖励成功"


def get_map():
    global p_c_map
    url = 'https://static.moutai519.com.cn/mt-backend/xhr/front/mall/resource/get'
    headers = {
        'MT-R': mt_r,
        'Origin': 'https://h5.moutai519.com.cn',
        'MT-APP-Version': '3.2.16',
        'MT-Request-ID': f'{int(time.time() * 1000)}{random.randint(1111111, 999999999)}{int(time.time() * 1000)}',
        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
        'MT-Device-ID': f'{int(time.time() * 1000)}{random.randint(1111111, 999999999)}{int(time.time() * 1000)}',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'mt-lng': lng,
        'mt-lat': lat
    }
    res = requests.get(url, headers=headers)
    mtshops = res.json().get('data', {}).get('mtshops_pc', {})
    urls = mtshops.get('url')
    r = requests.get(urls)
    for k, v in dict(r.json()).items():
        province_name = v.get('provinceName')
        city_name = v.get('cityName')
        if not p_c_map.get(province_name):
            p_c_map[province_name] = {}
        if not p_c_map[province_name].get(city_name, None):
            p_c_map[province_name][city_name] = [k]
        else:
            p_c_map[province_name][city_name].append(k)
    return p_c_map


if __name__ == '__main__':
    # 加载通知
    load_send()

    # 抢购
    maotai_configs = get_envs(env_key)
    msg = ''
    index = 1
    for config in maotai_configs.split("&"):
        single_msg = f'===== 第{index}个账号 =====\n'
        if not config:
            continue
        province, city, lng, lat, device_id, token, ck = config.split(',')
        time_keys = str(int(time.mktime(datetime.date.today().timetuple())) * 1000)
        try:
            get_map()
            session_id, item_codes = get_session_id(device_id, token)
            user_name, user_id, mobile = get_user_id(token, device_id)
            for item_code in item_codes:
                if not res_map.get(item_code):
                    continue
                name = res_map.get(str(item_code))
                shop_id = get_shop_item(session_id, item_code, device_id, token, province, city)
                res = mt_add(item_code, str(shop_id), session_id, user_id, token, device_id)
                single_msg += f'{user_name}({mobile}) {name} 抢购结果: {res}\n'
            r = getUserEnergyAward(device_id, ck)
            single_msg += f'{user_name}({mobile} 耐力: {r}\n'
        except Exception as e:
            single_msg += f'异常: {e}'
        logging.info(single_msg)
        msg += single_msg + '\n\n'
        index += 1

        send('茅台抢购结果', msg)
