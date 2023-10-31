//{"unionId":"","openId": "","sessionKey": "","mobile":""}
const axios = require("axios");
let $ = new Env("哈根达斯");
let Notify = 1;
async function signin(params) {
  let t = new Date().getTime();
  let json = JSON.parse(params);
  let sign = await $.post(
   "https://fc-mp-847b10b7-15f3-4aba-9d15-3a25c09b33ae.next.bspapp.com/hgds?t=" +
      t,
    {
      unionId: json.unionId,
      openId: json.openId,
      sessionKey: json.sessionKey,
    }
  );
  let data = {
    unionId: json.unionId,
    openId: json.openId,
    socialHubid: "b1lZDonG5YtEXLIS",
    mobile: json.mobile,
    sign,
    timestamp: t,
    sessionKey: json.sessionKey,
  };
  let url = "https://haagendazs.smarket.com.cn/v1/api/wxapp/daily/signIn";
  let Authorization =
    "Bearer " +
    (
      await $.post(
        "https://haagendazs.smarket.com.cn/v1/api/token",
        {
          partner: "apitest",
          secret: "Ou0HT@0W6e",
          openid: "gh_68065de13ad5",
          "app-id": "wx3656c2a2353eb377",
        },
        {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
        }
      )
    ).data;
  let res = await $.post(url, data, {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
    "content-type": "application/json",
    Authorization,
    Referer: "https://servicewechat.com/wx3656c2a2353eb377/273/page-frame.html",
  });
  $.addMsg(res.msg);
}

(async () => {
  let arr = $.getToken("hgds");
  if (!arr) return await $.SendMsg("未填写token");
  for (let index = 0; index < arr.length; index++) {
    $.addMsg(`账号[${index + 1}]:`);
    await signin(arr[index]);
    await $.wait(3);
  }

  await $.SendMsg($._msg);
  $.done();
})();

function Env(name) {
  return new (class {
    constructor(name) {
      this.name = name;
      console.log(`\ud83d\udd14${this.name},\u5f00\u59cb!`);
    }
    async get(url, headers) {
      try {
        this.result = await axios.get(url, { headers });
        return this.result.data;
      } catch (err) {
        console.log(`error:${err.message}`);
      }
    }
    async post(url, data, headers) {
      try {
        this.result = await axios.post(url, data, { headers: headers });
        return this.result.data;
      } catch (err) {
        console.log(`error:${err.message}`);
      }
    }
    async SendMsg(message) {
      if (!message) return;
      if (Notify > 0) {
        var notify = require("./sendNotify");
        await notify.sendNotify(this.name, message);
      }
    }
    addMsg(msg) {
      if (!this._msg) this._msg = "";
      console.log(msg);
      this._msg += msg + "\n";
    }
    wait(delay) {
      return new Promise((res) => {
        setTimeout(res, delay * 1000);
      });
    }
    getToken(key) {
      let tmp = process.env[key];
      if (!tmp) return "";

      if (tmp.includes("@")) {
        let arr = tmp.split("&");
        arr = arr.map((value) => {
          let tmp = value.split("@");
          return [tmp[0], tmp[1]];
        });
        return arr.length > 0 ? arr : "";
      }

      let arr = tmp.split("&");
      return arr.length > 0 ? arr : "";
    }
    done() {
      console.log(`\ud83d\udd14${this.name},\u7ed3\u675f!`);
    }
  })(name);
}
