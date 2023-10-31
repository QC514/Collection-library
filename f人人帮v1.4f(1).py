'''
cron: 50 */15 8-22 * * *
new Env('f人人帮阅读');
活动入口微信打开：http://ebb.waterkafei.cloud/user/index.html?mid=1694834307044081664
下载地址：https://www.123pan.com/s/xzeSVv-IHpfv.html
公告地址：http://175.24.153.42:8881/getmsg?type=rrb

使用方法：
1.活动入口,微信打开：http://ebb.waterkafei.cloud/user/index.html?mid=1694834307044081664
2.打开活动入口，抓包http://ebb.vinse.cn/api/user/loginByWxauth接口响应体中的 un，uid，token,
或者http://ebb.vinse.cn/api/user/info接口headers请求头中的 un，uid，token。
3.青龙环境变量菜单，添加本脚本环境变量
名称 ：rrb_config
单个账户参数： ['name|un|uid|token|key|uids']
例如：['账户1|150xxxx1234|16948xxxx664|dxxxxx|xxxxx|UID_xxxx']
多个账户['name|un|uid|token|key|uids','name|un|uid|token|key|uids']
例如：['账户1|150xxxx1234|16948xxxx664|dxxxxx|xxxxx|UID_xxxx','账户2|151xxxx1234|16948xxxx664|dxxxxx|xxxxx|UID_xxxx']
参数说明与获取：
ck:打开活动入口，抓包http://ebb.vinse.cn/api/user/loginByWxauth接口响应体中的 un，uid，token，
或者http://ebb.vinse.cn/api/user/info接口headers请求头中的 un，uid，token。
key:每个账号的推送标准，每个账号全阅读只需要一个key,多个账号需要多个key,key永不过期。
为了防止恶意调用key接口，限制每个ip每天只能获取一个key。手机开飞行模式10s左右可以变更ip重新获取key
通过浏览器打开链接获取:http://175.24.153.42:8882/getkey
uids:wxpusher的参数，当一个微信关注了一个wxpusher的推送应用后，会在推送管理后台(https://wxpusher.zjiecode.com/admin/main)的'用户管理-->用户列表'中显示
用户在推送页面点击’我的-->我的UID‘也可以获取

4.青龙环境变量菜单，添加本脚wxpusher环境变量(不需要重复添加)
青名称 ：push_config
参数 ：{"printf":0,"threadingf":1,"appToken":"xxxx"}
例如：{"printf":0,"threadingf":1,"appToken":"AT_r1vNXQdfgxxxxxscPyoORYg"}
参数说明：
printf 0是不打印调试日志，1是打印调试日志
threadingf:并行运行账号参数 1并行执行，0顺序执行，并行执行优点，能够并行跑所以账号，加快完成时间，缺点日志打印混乱。
appToken 这个是填wxpusher的appToken

5.提现标准默认是3000，与需要修改，请在本脚本最下方，按照提示修改
'''
import time
import json
import random
import requests
import re
import os
import threading
checkDict={
'Mzg2Mzk3Mjk5NQ==':['欢乐的小鱼儿','gh_cf733a65ca3d'],
}
def getmsg():
    lvsion = 'v1.4f'
    r = ''
    try:
        u = 'http://175.24.153.42:8881/getmsg'
        p = {'type': 'rrb'}
        r = requests.get(u, params=p)
        rj = r.json()
        version = rj.get('version')
        gdict = rj.get('gdict')
        gmmsg = rj.get('gmmsg')
        print('系统公告:', gmmsg)
        print(f'最新版本{version}当前版本{lvsion}')
        print(f'系统的公众号字典{len(gdict)}个:{gdict}')
        print(f'本脚本公众号字典{len(checkDict.values())}个:{list(checkDict.keys())}')
        print('=' * 50)
    except Exception as e:
        print(r.text)
        print(e)
        print('公告服务器异常')

def push(title, link, text, type1, uids, key):
    str1 = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>TITLE</title>
<style type=text/css>
   body {
   	background-image: linear-gradient(120deg, #fdfbfb 0%, #a5d0e5 100%);
    background-size: 300%;
    animation: bgAnimation 6s linear infinite;
}
@keyframes bgAnimation {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}
</style>
</head>
<body>
<p>TEXT</p><br>
<p><a href="http://175.24.153.42:8882/lookstatus?key=KEY&type=TYPE">查看状态</a></p><br>
<p><a href="http://175.24.153.42:8882/lookwxarticle?key=KEY&type=TYPE&wxurl=LINK">点击阅读检测文章</a></p><br>
</body>
</html>
    '''
    content = str1.replace('TITTLE', title).replace('LINK', link).replace('TEXT', text).replace('TYPE', type1).replace(
        'KEY', key)
    datapust = {
        "appToken": appToken,
        "content": content,
        "summary": title,
        "contentType": 2,
        "uids": [uids]
    }
    urlpust = 'http://wxpusher.zjiecode.com/api/send/message'
    try:
        p = requests.post(url=urlpust, json=datapust).text
        print(p)
        return True
    except:
        print('推送失败！')
        return False

def getinfo(link):
    try:
        r=requests.get(link)
        #print(r.text)
        html = re.sub('\s', '', r.text)
        biz=re.findall('varbiz="(.*?)"\|\|', html)
        if biz!=[]:
            biz=biz[0]
        if biz=='' or biz==[]:
            if '__biz' in link:
                biz = re.findall('__biz=(.*?)&', link)
                if biz != []:
                    biz = biz[0]
        nickname = re.findall('varnickname=htmlDecode\("(.*?)"\);', html)
        if nickname!=[]:
            nickname=nickname[0]
        user_name = re.findall('varuser_name="(.*?)";', html)
        if user_name!=[]:
            user_name=user_name[0]
        msg_title = re.findall("varmsg_title='(.*?)'\.html\(", html)
        if msg_title!=[]:
            msg_title=msg_title[0]
        text=f'公众号唯一标识：{biz}|文章:{msg_title}|作者:{nickname}|账号:{user_name}'
        print(text)
        return nickname,user_name,msg_title,text,biz
    except Exception as e:
        print(e)
        print('异常')
        return False
class WXYD:
    def __init__(self, cg):
        print(cg)
        self.name = cg[0]
        self.un = cg[1]
        self.uid=cg[2]
        self.token=cg[3]
        self.key = cg[4]
        self.tsuids = cg[5]
        self.headers = {
            'Host': 'ebb.vinse.cn',
            'un': self.un,
            'mid': '1694834307044081664',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090621) XWEB/8351 Flue',
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'uid': self.uid,
            'platform': '0',
            'token': self.token,
            'Origin': 'http://ebb10.twopinkone.cloud',
            'Referer': 'http://ebb10.twopinkone.cloud/',
        }

    def setstatus(self):
        try:
            u = 'http://175.24.153.42:8882/setstatus'
            p = {'key': self.key, 'type': 'rrb', 'val': '1'}
            r = requests.get(u, params=p, timeout=10)
            print(self.name, r.text)
        except Exception as e:
            print('设置状态异常')
            print(e)

    def getstatus(self):
        try:
            u = 'http://175.24.153.42:8882/getstatus'
            p = {'key': self.key, 'type': 'rrb'}
            r = requests.get(u, params=p, timeout=3)
            return r.text
        except Exception as e:
            print('查询状态异常', e)
            return False

    def printjson(self, text):
        if printf == 0:
            return
        print(self.name, text)
    # 请求个人信息
    def userinfo(self):
        u = f"http://ebb.vinse.cn/api/user/info"
        p = {"pageSize": 10}
        r = requests.post(u, headers=self.headers, json=p)
        rj = r.json()
        if rj.get('code') == 0:
            nick_name = rj.get('result').get('nickName')
            self.moneyCurrent = rj.get('result').get('integralCurrent')
            print(f'{nick_name}帮豆：{self.moneyCurrent}')
            return True
        print(self.name,r.text)
        return False

    def getUserSignDays(self):
        u = f"http://ebb.vinse.cn/api/user/sign"
        p = {"pageSize": 10}
        r = requests.post(u, headers=self.headers, json=p)
        rj = r.json()
        if rj.get('code') == 0:
            print(f'签到成功，获得{rj.get("result").get("point")}帮豆')
            return True
        print(self.name,r.text)
        print(self.name,f'签到失败:{rj.get("msg")}')
    def getEntryUrl(self):
        h=self.headers.copy()
        h.update({'Host': 'u.cocozx.cn'})
        u=f'https://u.cocozx.cn/ipa/read/getEntryUrl?fr=ebb0726&uid={self.uid}'
        r=requests.get(u,headers=h)
        rj=r.json()
        link=rj.get('result').get('url')
        if link==None or link=='':
            print(self.name,r.text)
            print('获取阅读链接失败')
            return False
        n = re.findall('//mr(.*?)\.', link)[0]
        u=f'http://u.cocozx.cn/api/common/ustr?t={n}'
        p={"un":None,"token":None,"pageSize":20}
        r = requests.post(u, headers=h,json=p)
        rj = r.json()
        link=rj.get('result').get('str')
        if link==None or link=='':
            print(self.name,r.text)
            print('获取阅读链接失败')
            return False
        self.group = re.findall('&group=(.*?)endok', link+'endok')[0]
    def getbd(self):
        u1='http://ebb.vinse.cn/api/user/receiveOneDivideReward'
        u2='http://ebb.vinse.cn/api/user/receiveTwoDivideReward'
        p = {"pageSize": 10}
        r = requests.post(u1, headers=self.headers, json=p)
        rj = r.json()
        print('领取一级帮豆',rj.get('msg'))
        time.sleep(1)
        r = requests.post(u2, headers=self.headers, json=p)
        rj = r.json()
        print('领取二级帮豆',rj.get('msg'))
    def read(self):
        h = self.headers.copy()
        h.update({'Host': 'u.cocozx.cn'})
        while True:
            print('-'*50)
            u = f'http://u.cocozx.cn/ipa/read/read'
            p = {"fr":"ebb0726","uid":self.uid,"group":self.group,"un":None,"token":None,"pageSize":20}
            r = requests.post(u, headers=h, json=p)
            self.printjson(r.text)
            rj = r.json()
            if rj.get('code') == 0:
                status = rj.get('result').get('status')
                if status == 10:
                    url=rj.get('result').get('url')
                    a=getinfo(url)
                    if self.testCheck(a,url)==False:
                        return False
                    print('获取文章成功，准备阅读')
                    ts = random.randint(7, 10)
                    print(f'本次模拟读{ts}秒')
                    time.sleep(ts)
                    sub = self.submit()
                    if sub == True: return True
                    if sub == False: return False
                elif status==30:
                    print('未知情况')
                    time.sleep(2)
                    continue
                elif status==50 or status==80:
                    print('您的阅读暂时失效，请明天再来')
                    return False
                else:
                    print('本次推荐文章已全部读完')
                    return True
            else:
                print('read err')
                return False
    def testCheck(self,a,url):
        if a == False:
            print(self.name, '解析文章链接失败')
            return True
        if a[4] == []:
            print(self.name,'这个链接没有获取到微信号id', url)
            return True
        if checkDict.get(a[4]) != None:
            self.setstatus()
            for i in range(60):
                if i % 30 == 0:
                    push('人人帮过检测', url, a[3], 'rrb',self.tsuids,self.key)
                getstatusinfo = self.getstatus()
                if getstatusinfo == '0':
                    print('过检测文章已经阅读')
                    return True
                elif getstatusinfo == '1':
                    print(f'正在等待过检测文章阅读结果{i}秒。。。')
                    time.sleep(1)
                else:
                    print('服务器异常')
                    return False
            print('过检测超时中止脚本防止黑号')
            return False
        else:return True
    def submit(self):
        h = self.headers.copy()
        h.update({'Host': 'u.cocozx.cn'})
        u = f'http://u.cocozx.cn/ipa/read/submit'
        p = {"fr":"ebb0726","uid":self.uid,"group":self.group,"un":None,"token":None,"pageSize":20}
        r = requests.post(u, headers=h, json=p)
        self.printjson(r.text)
        rj = r.json()
        if rj.get('code') == 0:
            result = rj.get('result')
            print(f'获得200帮豆')
            progress = result.get('progress')
            if progress > 0:
                print(f'本轮剩余{progress}篇文章，继续阅读阅读')
            else:
                print('阅读已完成')
                print('-' * 50)
                return True
        else:
            print(self.name, r.text)
            print('异常,尝试继续阅读')

    # 提现
    def withdraw(self):
        if self.moneyCurrent < txbz:
            print(self.name,'没有达到提现标准')
            return False
        elif 3000 <= self.moneyCurrent < 10000:
            txm = 3000
        elif 10000 <= self.moneyCurrent < 50000:
            txm = 10000
        elif 50000 <= self.moneyCurrent < 100000:
            txm = 50000
        else:
            txm = 100000
        u = f"http://ebb.vinse.cn/apiuser/aliWd"
        p = {"val": txm, "pageSize": 10}
        r = requests.post(u, headers=self.headers, json=p)
        print(self.name,r.text)

    def run(self):
        if self.userinfo():
            time.sleep(2)
            self.getUserSignDays()
            time.sleep(2)
            self.getEntryUrl()
            self.read()
            time.sleep(2)
        self.getbd()
        time.sleep(2)
        self.userinfo()
        time.sleep(2)
        self.withdraw()


if __name__ == '__main__':
    pushconfig = os.getenv('push_config')
    if pushconfig == None:
        print('请检查你的推送变量名称是否填写')
        exit(0)
    try:
        pushconfig = json.loads(pushconfig.replace("'", '"'))
    except Exception as e:
        print(e)
        print(pushconfig)
        print('请检查你的推送变量参数是否填写正确')
        exit(0)
    rrbconfig = os.getenv('rrb_config')
    if rrbconfig == None:
        print('请检查你的人人帮脚本变量名称是否填写')
        exit(0)
    try:
        rrbconfig = json.loads(rrbconfig.replace("'", '"'))
    except Exception as e:
        print(e)
        print(rrbconfig)
        print('请检查你的人人帮脚本变量参数是否填写正确')
        exit(0)
    printf = pushconfig['printf']
    appToken = pushconfig['appToken']
    threadingf = pushconfig['threadingf']
    getmsg()
    txbz = 3000  # 这里是提现标志3000代表3毛
    tl = []
    if threadingf == 1:
        for i in rrbconfig:
            cg = i.split('|')
            print('*' * 50)
            print(f'开始执行{i[0]}')
            api = WXYD(cg)
            t = threading.Thread(target=api.run, args=())
            tl.append(t)
            t.start()
            time.sleep(0.5)
        for t in tl:
            t.join()
    elif threadingf == 0:
        for i in rrbconfig:
            cg = i.split('|')
            print('*' * 50)
            print(f'开始执行{cg[0]}')
            api = WXYD(cg)
            api.run()
            print(f'{cg[0]}执行完毕')
            time.sleep(3)
    else:
        print('请确定推送变量中threadingf参数是否正确')
    print('全部账号执行完成')
