/**
 * 抖音极速版，按理来说只需要传sessionid就行
 * 定时格式： cron 32 0/30 * * ?
 * 变量名 dyjsbck
 * 格式：export dyjsbck="sessionid=xxxx&device_id=xxxxx&iid=xxxx"  
 * sessionid必填，device_id和iid实在抓不到不填应该问题不大
 * 多账户用 @ 隔开
 * 更新日志：
 * 修复开宝箱金币溜走问题
 *  by  偷CK的六舅哥
 */

const $ = new Env('抖音极速版-测试');

let tokens = $.getdata('dyjsbck') || process.env['dyjsbck'] || '';
let is_bf = $.getdata('dyjsb_bf') || process.env['dyjsb_bf'] ||
'1'; //是否并发 0否 1是
!(async () => {
    $.log("当前版本 v1.0.0")
    $.log("更新日志：1.修复开宝箱金币溜走问题\n------------------");
    $.log("有问题请联系：https://t.me/jiangyutck \n------------------");
    is_bf = parseInt(is_bf);
    if (tokens.indexOf("@") != -1) {
        tokens = tokens.split('@') || [];
    } else {
        tokens = tokens.split('\n') || [];
    }
    if (!tokens[0]) {
        $.log(`请设置环境变量添加抖音极速版账号`)
        return;
    }
    $.log(`共获取到${tokens.length}个账号`);
    let userList = [];
    tokens.forEach(token => {
        let user = jxUser(token);
        if (user.sessionid) {
            userList.push(new UserInfo(user.sessionid, user
                .device_id, user.iid));
        } else {
            console.log("账号格式错误");
        }
    })
    for (let i = 0; i < userList.length; i++) {
        let userInfo = userList[i];
        if (is_bf) {
            userInfo.main(i);
        } else {
            await userInfo.main(i);
        }
    }
})()
.catch((e) => $.logErr(e))
    .finally(() => {
        if (is_bf) {
            $.done();
        }
    });

function jxUser(val) {
    let res = {};
    let arrs = val.split("&");
    arrs.forEach(arr => {
        let kvs = arr.split("=");
        res[kvs[0]] = kvs[1];
    })
    return res;
}


function UserInfo(seesion = '', device_id = '', iid = '') {
    let isbreak = false;
    let cookie = 'sessionid=' + seesion;
    let $user_agent = 'com.ss.android.ugc.aweme.lite/250101 (Linux; U; Android 13; zh_CN; V2185A; Build/TP1A.220624.014;tt-ok/3.12.13.1)';
    let version_name = '25.01.01';
    let aid = 2329;
    let app_name = 'douyin_lite';
    let index = 0;
    let isOpenBox = false;
    let treasurebox = false;
    let task_list = [];

    function randomString(e, t = "abcdefhijkmnprstwxyz123456789") {
        e = e || 32;
        let a = t.length,
            n = "";
        for (let i = 0; i < e; i++)
            n += t.charAt(Math.floor(Math.random() * a));
        return n
    }

    this.main = async function (i) {
        let startTime = new Date().getTime();
        index = i + 1;
        if (!device_id) {
            device_id = randomString(16, "0123456789")
        }
        if (!iid) {
            iid = randomString(16)
        }
        await get_info();
        if (!isbreak) {
            await sign();
            await task('excitation_ad_signin','签到广告视频');
            if (task_list.filter(item => item.name === '走路赚金币').length > 0) {
                await upload_step();
            }
            await task('read','观看同城视频');
            await one_more_detail();
            await excitation_ad();
            if (task_list.filter(item => item.name === '逛街赚钱').length > 0) {
                await shopping_gold();
            }
            await excitation_ad_treasure_box();
            await ad_append('excitation_ad', '看广告追加');
            await ad_append('walk_excitation_ad', '步行额外视频');

            if (task_list.filter(item => item.name === '搜索赚金币').length > 0) {
                await search_excitation();
            }
            if (task_list.filter(item => item.name === '填写好友邀请码').length > 0) {
                //await task('post_invite_code', '填写邀请码', {invite_code: ""});
            }
            if (task_list.filter(item => item.name === '吃饭补贴').length > 0) {
                await meal_check_in();
            }
            if (task_list.filter(item => item.name === '看小说赚金币').length > 0) {
                await task('read_novel', '看小说赚金币');
            }
            await get_info(false);
        }
        const e = (new Date).getTime(), s = (e - startTime) / 1e3;
        $.log(`账号[${index}] 运行完毕, 结束! 🕛 ${s} 秒`);
    }

    function get_info(open = true) {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/page?mode=done&update_version_code=250100&os_api=33&device_platform=android&iid=${iid}&device_id=${device_id}&aid=${aid}`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                }
            }
            $.get(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.data.is_login) {
                            if (open) {
                                if (data.data.treasure_stats) {
                                    task_list = data.data.task_list;
                                    let treasure_stats = data.data.treasure_stats;
                                    if (treasure_stats.next_time <= treasure_stats.cur_time) {
                                        $.log(`==================开宝箱====================\n💣账号[${index}]准备开宝箱，这里可能会卡一会哦~`);
                                        //可以开宝箱
                                        let openCount = 0;
                                        while (!isOpenBox) {
                                            openCount++;
                                            await open_box();
                                            // if(openCount>100){
                                            //     isOpenBox=true;
                                            // }
                                            // await $.wait(1000);
                                        }
                                    } else {
                                        $.log(`==================开宝箱====================\n🧧账号[${index}]下次开宝箱时间：${$.time('yyyy-MM-dd HH:mm:ss', treasure_stats.next_time * 1000)}\n==================开宝箱结束====================`);
                                    }
                                }
                            } else {
                                $.log(`======================================\n🧧小主，账号[${index}]资产情况如下:\n金币余额:${data.data.income_data?.amount1} 现金余额:${data.data.income_data?.amount2 / 100}元\n======================================`);
                            }
                            isbreak = false;
                        } else {
                            $.log(`账号[${index}]登录失败！`);
                            isbreak = true;
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function sign() {
        return new Promise(resolve => {
            let t = new Date().getTime(), ts = parseInt((t / 1000) + '');
            let url = `https://api26-normal-lq.amemv.com/luckycat/aweme/v1/task/done/sign_in?iid=${iid}&device_id=${device_id}&ac=5g&channel=31575073k&aid=${aid}&app_name=${app_name}&version_code=250100&version_name=${version_name}&device_platform=android&os=android&ssmix=a&device_type=SHARK+KSR-A10&device_brand=blackshark&language=zh&os_api=33&os_version=12&manifest_version_code=250101&resolution=1080*2190&dpi=440&update_version_code=25109900&_rticket=${t}&package=com.ss.android.ugc.aweme.lite&mcc_mnc=46001&gold_container=1&cpu_support64=true&host_abi=armeabi-v7a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=dark&need_personal_recommend=1&is_android_pad=0&ts=${ts}&status_bar_height=29`;
            const options = {
                url: url,
                headers: {
                    'Host': 'api26-normal-lq.amemv.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: '{}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        $.log(`账号[${index}]签到: ${data.err_tips}`);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function excitation_ad_signin() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad_signin?mode=done&update_version_code=25109900&oaid=5992671818827601&os_api=29&device_platform=android&ac=wifi&channel=bf_1007913_2329_47_3&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: '{}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        $.log(`账号[${index}]签到视频: ${data.err_tips}`);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function open_box() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/treasure_task?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: '{}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            isOpenBox = true;
                            $.log(`账号[${index}]${data.data.success_desc}: ${data.data.amount}金币`);
                            $.log(`账号[${index}]下次开宝箱时间为：${$.time('yyyy-MM-dd HH:mm:ss', data.data.next_time * 1000)}\n================开宝箱结束====================`);
                            let excitation_ad_info = data.data.excitation_ad_info;
                            if (excitation_ad_info) {
                                excitation_ad_info.amount = data.data.amount;
                                excitation_ad_info.ad_alias_position = 'box';
                                $.log(`账号[${index}]开宝箱-看广告视频预计再赚${excitation_ad_info.score_amount}金币`);
                                await show_ad(excitation_ad_info);
                                $.log(`账号[${index}]等待45s广告`);
                                await $.wait(15000);
                                $.log(`账号[${index}]45s广告success`);
                                $.log(`==================开宝箱1200金币=================\n💣账号[${index}]准备看宝箱视频，这里可能会卡一会哦~`);
                                        let openbox = 0;
                                        while (!treasurebox) {
                                            openbox++;
                                            await excitation_ad_treasure_box()
                                            if(openbox>250){
                                            isOpenBox=true;
                                             }
                                            await $.wait(1000);
                                        }
                            }
                        } else {
                            //$.log(`账号[${index}]开宝箱: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function ad_append(task_key = 'excitation_ad', name = '', one_more_round = 0) {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: '{"task_key":"' + task_key + '","rit":"28038","creator_id":"12315000","one_more_round":' + one_more_round + '}'
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]${name ? name : task_key}: 获得${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]${name ? name : task_key}: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function show_ad(ad_info) {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/${ad_info.task_key}?_request_from=web&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie
                },
                body: `{"task_key":"${ad_info.task_key}","amount":"${ad_info.score_amount}","ad_rit":"${ad_info.ad_id}","ad_inspire":"{"score_amount":"${ad_info.score_amount}","amount":"${ad_info.amount}","req_id":"${ad_info.req_id}"}","ad_alias_position":"${ad_info.ad_alias_position}","timeout":4000}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]${data.data.content}: ${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]看广告视频: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function upload_step() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/walk/step_submit?iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{"step":${parseInt((10000 + Math.random() * 10000) + "")},"submit_time":${parseInt((new Date().getTime() / 1000) + "")}}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]上传步数：今日步数${data.data.today_step}步`);
                            await receive_step_reward();
                        } else {
                            $.log(`账号[${index}]上传步数: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }


    function receive_step_reward() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/walk/receive_step_reward?iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: ``
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]领取步数奖励：${data.data.reward_amount}金币`);
                        } else {
                            $.log(`账号[${index}]领取步数奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function excitation_ad() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `{"from":"excitation_ad"}`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]看广告: 获得${data.data.amount}金币`);
                        } else {
                            $.log(`账号[${index}]看广告: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function shopping_gold() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/shopping_gold?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=2509900&device_platform=android&ssmix=a&device_type=16s%20Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&openudid=24f98283275a56fc&manifest_version_code=250101&resolution=1080*2232&dpi=480&_rticket=1683899803704&mcc_mnc=46011&tool_grey_user=0&cpu_support64=true&host_abi=armeabi-v7`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `body=11222`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]逛街: ${data.data.reward_text}`);
                        } else {
                            $.log(`账号[${index}]逛街: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function excitation_ad_treasure_box() {
        return new Promise(resolve => {
            let t = new Date().getTime(),
                ts = parseInt((t / 1000) + '');
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?mode=done&iid=${iid}&device_id=${device_id}&ac=5g&channel=31575073k&aid=2329&app_name=douyin_lite&version_code=250100&version_name=25.1.0&device_platform=android&os=android&ssmix=a&device_type=RNA-AN00&device_brand=HONOR&language=zh&os_api=31&os_version=12&openudid=acb2c7481f3d2737&manifest_version_code=250101&resolution=1236*2562&dpi=520&update_version_code=25109900&_rticket=1683983540390&package=com.ss.android.ugc.aweme.lite&mcc_mnc=46001&gold_container=0&cpu_support64=true&host_abi=arm64-v8a&is_guest_mode=0&app_type=normal&minor_status=0&appTheme=light&need_personal_recommend=1&is_android_pad=0&ts=${ts}&cdid=bb4348ff-60c6-4b34-9628-c402fe361bb5&oaid=0c6cd837-6830-4145-8447-9f6cb10aa5fd&rom=EMUI&has_alipay=1&p_switch=1&launch_method=enter_launch&rom_version=MagicOS_7.0.0&luckydog_base=Zm_1GzCIIb6IlT10frcgpm8hjRXTDXRajr68axrvNYdWMeXGAwpi7e36pHTOLD3IdMDam-LbJRy6yf1ZRhL4S4RUI6YsZ5lXIT8ejEUNWGeNnWz8iAZ0A-ViioikSAYM8wU1QcxHFAppiurXM14a1kNHWVtI51PHIme6tzI-vnzGeYulkAdY33cMM8ARxvIj&luckydog_data=FKlxq4aSv2hw07vieQgQ2FHCovzbGKLHnIkn6OuUEZ2ohD29G2CyRKSveldgOt6869_W-eomGhKBksgB4wIKtBPXibAViAW41B71N359xVfVRPE4ypf4af341-U-DWoxkn0DzdtLD_-RZK0ut45UU7h5WlCVprjpYRPA581YgGaOlmdbKURUNCmyFjqaGuUv0waRO0ujC9ZcsSALldeZKo5u0zz6b2Ud1zTbZ9RC4xaEpLJVXC1StX6wkujPsoUxTnMD8htSd-_55U8fV6zVG0706oiXlp4JblplVPm1z5g&luckydog_token=UYSEyUkWlD-DG9bw9rO1wLQu2vhO4Stn9igoVS1fVrcT_OwtMMGPTdSzADtgS-iQdYKU_eXfb1JjaWxhV3BAZw&luckydog_sdk_version=8.1.0-rc.17-dy&luckydog_api_version=8.1.0-rc.17-dy&static_settings_version=49&dynamic_settings_version=49&polling_settings_version=0&luckycat_version_name=8.1.0-rc.17-dy&luckycat_version_code=810017&lucky_is_32=0&lucky_device_score=9.0435&lucky_device_type=RNA-AN00&status_bar_height=34&md=0`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: `body=11222`
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                        treasurebox = true;
                            $.log(`账号[${index}]开宝箱视频: ${data.data.amount} 金币 \n================开宝箱1200结束==================`);
                        } else {
                            //$.log(`账号[${index}]开宝箱视频: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function one_more_detail() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/excitation_ad/one_more/detail?task_key=excitation_ad_treasure_box&rit=28038&creator_id=12317000&one_more_round=0&mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
            }
            $.get(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            if (data.data.has_one_more) {
                                //$.log(`账号[${index}]宝箱连续视频下次奖励: ${data.data.amount}金币`);
                                await ad_append('excitation_ad_treasure_box', '宝箱连续视频');
                            }
                        } else {
                            $.log(`账号[${index}]宝箱连续视频下次奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }


    function search_excitation() {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/search_excitation?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: ``
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]领取搜索奖励: ${data.data.score_amount}金币`);
                        } else {
                            $.log(`账号[${index}]领取搜索奖励: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function task(taskKey, taskName, body = {}) {
        return new Promise(resolve => {
            let url = `https://aweme.snssdk.com/luckycat/aweme/v1/task/done/${taskKey}?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'aweme.snssdk.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: JSON.stringify(body)
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.err_no == 0) {
                            $.log(`账号[${index}]${taskName}: ${data.data.score_amount}金币`);
                        } else {
                            $.log(`账号[${index}]${taskName}: ${data.err_tips}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }

    function meal_check_in(taskName = "吃饭补贴") {
        return new Promise(resolve => {
            let timeHours = parseInt($.time('HH'));
            let meal_index = 0;
            if (timeHours > 5 && timeHours < 9) {
                meal_index = 0;
            } else if (timeHours > 11 && timeHours < 14) {
                meal_index = 1;
            } else if (timeHours > 17 && timeHours < 19) {
                meal_index = 2;
            } else if (timeHours > 21 && timeHours < 23) {
                meal_index = 3;
            } else {
                resolve();
                return;
            }
            let body = {"meal_index": meal_index, "aid": "2329"}
            let url = `https://gecko.zijieapi.com/ttgame/meal/check_in?mode=done&iid=${iid}&device_id=${device_id}&app_name=${app_name}&version_name=${version_name}&aid=${aid}&device_platform=android&dpi=411&update_version_code=25109900`;
            const options = {
                url: url,
                headers: {
                    'Host': 'gecko.zijieapi.com',
                    'content-type': 'application/json; charset=utf-8',
                    'user-agent': $user_agent,
                    'Cookie': cookie,
                },
                body: JSON.stringify(body)
            }
            $.post(options, async (err, resp, data) => {
                try {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.code == 0) {
                            $.log(`账号[${index}]${taskName}: ${data.data.reward}金币`);
                            await ad_append('meal_excitation_ad', '吃饭补贴视频');
                        } else {
                            $.log(`账号[${index}]${taskName}: ${data.message}`);
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        })
    }


}


function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
