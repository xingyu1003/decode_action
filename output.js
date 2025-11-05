//Wed Nov 05 2025 07:57:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
console.log("/*\n------------------------------------------\n@Description: eva\ncron: 12 12 * * *\n------------------------------------------\n#Notice:\nAPP CK的版本最少要是13.5以上\n变量名字-必填:ksck 格式ck#salt#socks\nck#salt#socks://用户名:密码@IP:端口 不写代理就是默认本地网络 报错503和脚本没关系\nsocks:// 或者 socks5://  哪个不报错写哪个\n\n多账号格式：\nksck=ck#salt#socks://用户名:密码@IP:端口\nksck1=ck#salt#socks://用户名:密码@IP:端口\nksck2=ck#salt#socks://用户名:密码@IP:端口\n...\nksck99=ck#salt#socks://用户名:密码@IP:端口\n\n变量名字 kscount=999 轮数\n变量名字 ksadtype='look' //可选 look&food&box\n多号必须设置代理 否则黑号不管\n\n变量名字 kscountnum=1,1,1\n变量名字 kstime=1800 自动定时秒数\n变量名字 kstime1=900 自动定时秒数\n变量名字 kssort=0 是否顺序执行 //可选 1.顺序执行 0.并发\n变量名字 ksip=1\n变量名字 failadnum=3 连续低价值次数，超过则停止运行脚本\n\n\n⚠️【免责声明】\n      依赖axios socks-proxy-agent querystring\n      //获取oaid和osVersion 下载https://hub.gitmirror.com/https://raw.githubusercontent.com/gzu-liyujiang/Android_CN_OAID/refs/heads/master/demo.apk 进行实时获取\n      //或者在群文件下载\n      //systemVersion 就是osVersion\n      //oaid就是oaid\n      //nwip就是本地ip\n      获取后填写到COOKIE后面 [如果不写则默认为以下两个参数]\n      例如\n      osVersion=10; oaid=9e4bb0e5bc326fb1;nwip=192.168.31.1\n------------------------------------------\n1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。\n2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。\n3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。\n4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。\n5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。\n6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。\n7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。\n------------------------------------------*/");
const x_0x458797 = {
  km: "1028-new"
};
let x_0x2c54ea = [];
const {
  SocksProxyAgent: x_0x12b5b3
} = require("socks-proxy-agent");
const x_0x22affd = require("axios");
const x_0x14e629 = "kwai-android aegon/4.28.0";
require("dotenv").config();
const x_0x2a4960 = (_0x26a2b7, _0x39970d = "YYYY-MM-DD HH:mm:ss") => {
  const _0x666714 = _0x26a2b7.getFullYear();
  const _0x2d321d = String(_0x26a2b7.getMonth() + 1).padStart(2, "0");
  const _0x1bfe1d = String(_0x26a2b7.getDate()).padStart(2, "0");
  const _0x4181a0 = String(_0x26a2b7.getHours()).padStart(2, "0");
  const _0x275bf5 = String(_0x26a2b7.getMinutes()).padStart(2, "0");
  const _0x13278e = String(_0x26a2b7.getSeconds()).padStart(2, "0");
  return _0x39970d.replace("YYYY", _0x666714).replace("MM", _0x2d321d).replace("DD", _0x1bfe1d).replace("HH", _0x4181a0).replace("mm", _0x275bf5).replace("ss", _0x13278e);
};
generateLocalIp = async (_0x33eb41 = 1, _0x2ee4b5 = "C") => {
  const _0x105ac5 = () => Math.floor(Math.random() * 256);
  switch (_0x2ee4b5.toUpperCase()) {
    case "A":
      return "10." + _0x105ac5() + "." + _0x105ac5() + "." + _0x105ac5();
    case "B":
      const _0x108409 = 16 + Math.floor(Math.random() * 16);
      return "172." + _0x108409 + "." + _0x105ac5() + "." + _0x105ac5();
    case "C":
    default:
      return "192.168." + _0x33eb41 + "." + _0x105ac5();
  }
};
class x_0x1cc7a1 {
  constructor(_0x3bb475) {
    this.index = x_0x4cf38f.userIdx++;
    this.nickname = this.index;
    this.totalCoin = 0;
    this.allCash = 0;
    this.user = _0x3bb475.split("#");
    this.ck = this.user[0];
    this.salt = this.user[1];
    this.sock = null;
    const _0x1ce75a = {
      businessId: "672",
      subPageId: "100026367",
      posId: "24067",
      requestSceneType: 1,
      taskType: 1
    };
    this.lookAdInfo = _0x1ce75a;
    const _0x4f68b7 = {
      businessId: "9362",
      subPageId: "100029907",
      posId: "29741",
      requestSceneType: 1,
      taskType: 2
    };
    this.foodAdInfo = _0x4f68b7;
    const _0x598225 = {
      businessId: "606",
      subPageId: "100024064",
      posId: "20346",
      requestSceneType: 1,
      taskType: 1
    };
    this.boxAdInfo = _0x598225;
    this.adinfo = {};
    this.userId = null;
    this.did = null;
    this.socks5 = null;
    this.adaddnum = 0;
    this.wwip = "";
    this.nwip = "192.168.31.57";
    this.adtype = [];
    this.cookies = "";
  }
  async getAccountBasicInfo() {
    x_0x4cf38f.wait(4000);
    try {
      const _0x2ab773 = {
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        method: "GET",
        timeout: 12000,
        headers: {}
      };
      _0x2ab773.headers["User-Agent"] = x_0x14e629;
      _0x2ab773.headers.Cookie = this.ck;
      _0x2ab773.headers["Content-Type"] = "application/x-www-form-urlencoded";
      const {
        data: _0x3d333a
      } = await x_0x22affd.request(_0x2ab773);
      if (_0x3d333a && _0x3d333a.result === 1 && _0x3d333a.data) {
        {
          this.nickname = "[" + this.index + "] " + _0x3d333a.data.userData?.["nickname"];
          this.totalCoin = _0x3d333a.data.totalCoin;
          this.allCash = _0x3d333a.data.totalCash;
          x_0x4cf38f.log("账号[" + this.nickname + "] 💰 当前金币: " + this.totalCoin + "，💸 当前余额: " + this.allCash);
        }
      }
    } catch (_0x39aff2) {
      {
        x_0x4cf38f.log("账号[" + this.nickname + "] 获取账户信息失败: " + _0x39aff2);
      }
    }
  }
  checkCookieVariables() {
    const _0x4155a6 = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid"];
    const _0x372de2 = this.ck;
    const _0x50cf5e = {};
    if (_0x372de2) {
      {
        _0x372de2.split(";").forEach(_0x1855f5 => {
          {
            const [_0x5869e9, _0x1d1c40] = _0x1855f5.trim().split("=");
            _0x50cf5e[_0x5869e9] = _0x1d1c40;
          }
        });
      }
    }
    const _0x5ee8fd = {};
    _0x4155a6.forEach(_0x5d89ab => {
      {
        _0x5ee8fd[_0x5d89ab] = _0x50cf5e[_0x5d89ab];
      }
    });
    let _0x306adb = /kuaishou\.api_st=([^;]+)/;
    let _0x3a520a = _0x372de2.match(new RegExp(_0x306adb, ""));
    this.api_st = _0x3a520a[1] || "";
    this.mod = _0x50cf5e.mod;
    this.userId = _0x50cf5e.userId;
    this.did = _0x50cf5e.did;
    this.kpf = _0x50cf5e.kpf;
    this.androidApiLevel = _0x50cf5e.androidApiLevel;
    this.kpn = _0x50cf5e.kpn;
    this.egid = _0x50cf5e.egid;
    this.oDid = _0x50cf5e.oDid;
    this.newOc = _0x50cf5e.newOc;
    this.rdid = _0x50cf5e.rdid;
    this.appver = _0x50cf5e.appver;
    this.c = _0x50cf5e.c;
    this.socName = _0x50cf5e.socName;
    this.language = _0x50cf5e.language;
    this.ftt = _0x50cf5e.ftt;
    this.abi = _0x50cf5e.abi;
    this.grant_browse_type = _0x50cf5e.grant_browse_type;
    this.device_abi = _0x50cf5e.device_abi;
    this.iuid = _0x50cf5e.iuid;
    this.userRecoBit = _0x50cf5e.userRecoBit;
    this.browseType = _0x50cf5e.browseType;
    this.did_tag = _0x50cf5e.did_tag;
    return _0x5ee8fd;
  }
  getOaid() {
    const _0x57f10e = this.ck;
    const _0x210ba7 = {};
    if (_0x57f10e) {
      {
        _0x57f10e.split(";").forEach(_0x313696 => {
          {
            const [_0x14d488, _0x16f2f7] = _0x313696.trim().split("=");
            _0x210ba7[_0x14d488] = _0x16f2f7;
          }
        });
      }
    }
    return _0x210ba7.oaid || "9e4bb0e5bc326fb1";
  }
  getNwip() {
    const _0x3f09e0 = this.ck;
    const _0x19861c = {};
    if (_0x3f09e0) {
      _0x3f09e0.split(";").forEach(_0x1b7a0d => {
        const [_0x170aff, _0x287c97] = _0x1b7a0d.trim().split("=");
        _0x19861c[_0x170aff] = _0x287c97;
      });
    }
    return _0x19861c.nwip || generateLocalIp();
  }
  getKsadtype() {
    const _0x46c65a = this.ck;
    const _0x75cbff = {};
    if (_0x46c65a) {
      {
        _0x46c65a.split(";").forEach(_0x2c78f1 => {
          const [_0x544266, _0x5ee268] = _0x2c78f1.trim().split("=");
          _0x75cbff[_0x544266] = _0x5ee268;
        });
      }
    }
    const _0x13a1df = _0x75cbff.ksadtype || x_0x2c54ea;
    return _0x13a1df.split("&");
  }
  getOsVersion() {
    const _0x8b7937 = this.ck;
    const _0x51e29f = {};
    if (_0x8b7937) {
      _0x8b7937.split(";").forEach(_0x2d019f => {
        {
          const [_0x33f08c, _0x4627be] = _0x2d019f.trim().split("=");
          _0x51e29f[_0x33f08c] = _0x4627be;
        }
      });
    }
    return _0x51e29f.osVersion || 10;
  }
  async getIP() {
    if (this.user.length > 2) {
      {
        this.sock = this.user[2];
        if (this.sock && (this.sock.includes("socks5://") || this.sock.includes("socks://"))) {
          try {
            {
              this.socks5 = new x_0x12b5b3(this.sock);
              const _0x177efc = {
                url: "https://www.2eva.cn/api/health",
                method: "GET",
                timeout: 30000,
                httpAgent: this.socks5,
                httpsAgent: this.socks5,
                proxy: false,
                headers: {}
              };
              _0x177efc.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
              let {
                data: _0x4bf259
              } = await x_0x22affd.request(_0x177efc);
              this.wwip = _0x4bf259.ip;
              this.nwip = await this.getNwip();
              x_0x4cf38f.log("账号[" + this.nickname + "] 外网IP:[" + this.wwip + "," + this.nwip + "]");
              return;
            }
          } catch (_0x82f16) {
            this.socks5 = null;
            console.log("账号[" + this.nickname + "]sock5代理错误");
          }
        }
      }
    }
    try {
      const _0x5d3cc5 = {
        url: "https://www.2eva.cn/api/health",
        method: "GET",
        timeout: 30000
      };
      let {
        data: _0x121f04
      } = await x_0x22affd.request(_0x5d3cc5);
      this.wwip = _0x121f04.ip;
      this.nwip = await this.getNwip();
      x_0x4cf38f.log("账号[" + this.nickname + "] 代理不存在 采用直连模式[" + this.wwip + "," + this.nwip + "]");
    } catch (_0x524197) {
      {
        x_0x4cf38f.log("账号[" + this.nickname + "] 网络获取失败");
      }
    }
  }
  async run() {
    this.cookies = this.checkCookieVariables();
    this.adtype = this.getKsadtype();
    if (!this.salt) {
      {
        return x_0x4cf38f.log("账号['" + this.nickname + "'] salt不存在");
      }
    }
    if (!x_0x4cf38f.failadnumobj.hasOwnProperty(this.salt)) {
      x_0x4cf38f.failadnumobj[this.salt] = 0;
    }
    if (x_0x4cf38f.failadnumobj[this.salt] >= x_0x4cf38f.failadnum) {
      return x_0x4cf38f.log("🙅 账号['" + this.nickname + "'] 连续" + x_0x4cf38f.failadnumobj[this.salt] + "次低价值广告，停止运行");
    }
    await this.getIP();
    this.oaid = this.getOaid();
    this.osVersion = this.getOsVersion();
    await this.getAccountBasicInfo();
    x_0x4cf38f.log("账号[" + this.nickname + " 广告设备标识[" + this.oaid + "]]获取系统版本 [" + this.osVersion + "],广告类型[" + this.adtype + "]");
    if (this.adtype.includes("food")) {
      const _0x33315d = x_0x4cf38f.foodcount;
      this.adaddnum = 0;
      let _0x5e6f97 = 0;
      for (let _0x212d62 = 1; _0x212d62 <= _0x33315d; _0x212d62++) {
        {
          let _0x43811c = await this.loadAd("food");
          if (!_0x43811c) {
            x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x212d62 + "/" + _0x33315d + " [饭补广告] 获取广告信息失败，跳过本次看广告");
            continue;
          }
          await x_0x4cf38f.wait(Math.floor(Math.random() * 4 + 4) * 1000);
          let _0x3b768a = await this.preSub(_0x43811c.cid, _0x43811c.llsid);
          if (!_0x3b768a) {
            {
              x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x212d62 + "/" + _0x33315d + " [饭补广告] 预加载失败，跳过本次饭补广告");
              continue;
            }
          }
          const _0x390ee9 = Math.floor((_0x43811c.watchAdTime + Math.floor(Math.random() * 10 + 10) * 1000) / 1000);
          x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x212d62 + "/" + _0x33315d + " [饭补广告] 广告" + _0x43811c.watchAdTime / 1000 + "秒 随机" + _0x390ee9 + "秒");
          await x_0x4cf38f.wait(_0x390ee9 * 1000);
          const {
            neoAmount: _0x190715,
            status: _0x249174
          } = await this.subAd(_0x43811c.cid, _0x43811c.llsid, _0x43811c.adExtInfo, Date.now(), _0x390ee9, _0x43811c.materialTime, _0x43811c.watchAdTime);
          if (_0x249174 == 2) {
            {
              return;
            }
          }
          if (_0x249174 == 3) {
            {
              x_0x4cf38f.failadnumobj[this.salt] = 9999999;
              return;
            }
          }
          const _0x36b103 = Math.floor(Math.random() * 5 + 26);
          x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x212d62 + "/" + _0x33315d + " [饭补广告] ✅ [获取金币[" + _0x190715 + "] 等待[" + _0x36b103 + "秒]");
          await this.getAccountBasicInfo();
          if (_0x190715 < 20) {
            x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x212d62 + "/" + _0x33315d + " [饭补广告] ❌ 领取金币不足20 等待[" + _0x36b103 + "秒]进入下一轮");
            x_0x4cf38f.failadnumobj[this.salt] = x_0x4cf38f.failadnumobj[this.salt] + 1;
            await x_0x4cf38f.wait(_0x36b103 * 1000);
            break;
          } else {
            {
              x_0x4cf38f.failadnumobj[this.salt] = 0;
              this.adaddnum = this.adaddnum + 1;
              _0x5e6f97++;
              await x_0x4cf38f.wait(_0x36b103 * 1000);
            }
          }
        }
      }
    }
    if (this.adtype.includes("box")) {
      {
        const _0x270eda = x_0x4cf38f.boxcount;
        let _0x57ce7e = 0;
        this.adaddnum = 0;
        for (let _0x32cb73 = 1; _0x32cb73 <= _0x270eda; _0x32cb73++) {
          {
            let _0x33ade3 = await this.loadAd("box");
            if (!_0x33ade3) {
              x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x32cb73 + "/" + _0x270eda + " [宝箱广告] 获取广告信息失败，跳过本次宝箱广告");
              continue;
            }
            await x_0x4cf38f.wait(Math.floor(Math.random() * 4 + 4) * 1000);
            let _0x35cae0 = await this.preSub(_0x33ade3.cid, _0x33ade3.llsid);
            if (!_0x35cae0) {
              x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x32cb73 + "/" + _0x270eda + " [宝箱广告] 预加载失败，跳过本次宝箱广告");
              continue;
            }
            const _0x3ab05e = Math.floor((_0x33ade3.watchAdTime + Math.floor(Math.random() * 10 + 10) * 1000) / 1000);
            x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x32cb73 + "/" + _0x270eda + " [宝箱广告] 广告" + _0x33ade3.watchAdTime / 1000 + "秒 随机" + _0x3ab05e + "秒");
            await x_0x4cf38f.wait(_0x3ab05e * 1000);
            const {
              neoAmount: _0x3979c2,
              status: _0x553273
            } = await this.subAd(_0x33ade3.cid, _0x33ade3.llsid, _0x33ade3.adExtInfo, Date.now(), _0x3ab05e, _0x33ade3.materialTime, _0x33ade3.watchAdTime);
            if (_0x553273 == 3) {
              x_0x4cf38f.failadnumobj[this.salt] = 9999999;
              return;
            }
            if (_0x553273 == 2) {
              return;
            }
            const _0x439a5d = Math.floor(Math.random() * 5 + 26);
            x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x32cb73 + "/" + _0x270eda + " [宝箱广告] ✅ 获取金币[" + _0x3979c2 + "] 等待[" + _0x439a5d + "秒]");
            await this.getAccountBasicInfo();
            if (_0x3979c2 < 20) {
              {
                x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x32cb73 + "/" + _0x270eda + " [宝箱广告] ❌领取金币不足20 等待[" + _0x439a5d + "秒]进入下一轮");
                x_0x4cf38f.failadnumobj[this.salt] = x_0x4cf38f.failadnumobj[this.salt] + 1;
                break;
              }
            } else {
              x_0x4cf38f.failadnumobj[this.salt] = 0;
              this.adaddnum = this.adaddnum + 1;
              _0x57ce7e++;
              await x_0x4cf38f.wait(_0x439a5d * 1000);
            }
          }
        }
      }
    }
    if (this.adtype.includes("look")) {
      {
        const _0x2150e2 = x_0x4cf38f.lookcount;
        let _0x10f564 = 0;
        this.adaddnum = 0;
        for (let _0x324bc2 = 1; _0x324bc2 <= _0x2150e2; _0x324bc2++) {
          let _0x44544b = await this.loadAd("look");
          if (!_0x44544b) {
            x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x324bc2 + "/" + _0x2150e2 + " [看广告] 获取广告信息失败，跳过本次看广告");
            continue;
          }
          await x_0x4cf38f.wait(Math.floor(Math.random() * 4 + 4) * 1000);
          let _0x152e07 = await this.preSub(_0x44544b.cid, _0x44544b.llsid);
          if (!_0x152e07) {
            {
              x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x324bc2 + "/" + _0x2150e2 + " [看广告] 预加载失败，跳过本次看广告");
              continue;
            }
          }
          const _0x469f6c = Math.floor((_0x44544b.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
          x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x324bc2 + "/" + _0x2150e2 + " [看广告] 广告" + _0x44544b.watchAdTime / 1000 + "秒 随机" + _0x469f6c + "秒");
          await x_0x4cf38f.wait(_0x469f6c * 1000);
          const {
            neoAmount: _0x55577d,
            status: _0x17048e
          } = await this.subAd(_0x44544b.cid, _0x44544b.llsid, _0x44544b.adExtInfo, Date.now(), _0x469f6c, _0x44544b.materialTime, _0x44544b.watchAdTime);
          if (_0x17048e == 3) {
            x_0x4cf38f.failadnumobj[this.salt] = 9999999;
            return;
          }
          if (_0x17048e == 2) {
            return;
          }
          const _0x10db94 = Math.floor(Math.random() * 5 + 26);
          x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x324bc2 + "/" + _0x2150e2 + " [看广告] ✅ 获取金币[" + _0x55577d + "] 等待[" + _0x10db94 + "秒]");
          await this.getAccountBasicInfo();
          if (_0x55577d < 20) {
            {
              x_0x4cf38f.log("账号 [" + this.nickname + "] " + x_0x4cf38f.wheelNum + "/" + _0x324bc2 + "/" + _0x2150e2 + " [看广告] ❌ 领取金币不足20 等待[" + _0x10db94 + "秒]进入下一轮");
              x_0x4cf38f.failadnumobj[this.salt] = x_0x4cf38f.failadnumobj[this.salt] + 1;
              await x_0x4cf38f.wait(_0x10db94 * 1000);
              break;
            }
          } else {
            {
              x_0x4cf38f.failadnumobj[this.salt] = 0;
              this.adaddnum = this.adaddnum + 1;
              _0x10f564++;
              await x_0x4cf38f.wait(_0x10db94 * 1000);
            }
          }
        }
      }
    }
    x_0x4cf38f.log("账号[" + this.nickname + "] " + x_0x4cf38f.wheelNum + "轮 所有任务完成！");
  }
  async loadReqParams(_0x18b1bb, _0x417a8b, _0x6a1185) {
    let _0x2b6ba3 = {
      mod: this.mod,
      c: this.c,
      appver: this.appver,
      language: this.language,
      ud: this.userId,
      did_tag: this.did_tag,
      egid: this.egid,
      kpf: this.kpf,
      oDid: this.oDid,
      kpn: this.kpn,
      newOc: this.newOc,
      androidApiLevel: this.androidApiLevel,
      browseType: this.browseType,
      socName: this.socName,
      abi: this.abi,
      ftt: this.ftt,
      userRecoBit: this.userRecoBit,
      device_abi: this.device_abi,
      grant_browse_type: this.grant_browse_type,
      iuid: this.iuid,
      rdid: this.rdid,
      did: this.did
    };
    try {
      const _0x85edf9 = {
        ...x_0x458797
      };
      let _0x4f2a5a = await x_0x22affd.request({
        url: "http://47.109.187.158:6848/nssig",
        headers: _0x85edf9,
        method: "POST",
        data: {
          path: _0x18b1bb,
          salt: _0x6a1185,
          data: x_0x4cf38f.queryStr(_0x417a8b) + "&" + x_0x4cf38f.queryStr(_0x2b6ba3)
        }
      });
      if (_0x4f2a5a.data) {
        const _0x5493c4 = {
          sig: _0x4f2a5a.data.sig,
          __NS_xfalcon: "",
          __NStokensig: _0x4f2a5a.data.nstokensig,
          __NS_sig3: _0x4f2a5a.data.nssig3
        };
        Object.assign(_0x2b6ba3, _0x5493c4);
        return _0x2b6ba3;
      } else {
        return null;
      }
    } catch (_0x1d5ff4) {
      console.log("加载nssig3失败");
      return null;
    }
  }
  async encsign(_0x4bb5a0) {
    try {
      {
        let _0x3d0c88 = JSON.stringify(_0x4bb5a0);
        const _0x3b8812 = {
          ...x_0x458797
        };
        const _0x5c4ad4 = {
          data: _0x3d0c88
        };
        const _0x46fd48 = {
          url: "http://47.109.187.158:6848/encsign",
          headers: _0x3b8812,
          method: "POST",
          data: _0x5c4ad4
        };
        const _0x200452 = await x_0x22affd.request(_0x46fd48);
        return _0x200452.data || null;
      }
    } catch (_0x1ead73) {
      console.log("加载encsign 失败");
      return null;
    }
  }
  loadAdInfo(_0x268724) {
    if (_0x268724 == "look") {
      this.adinfo = this.lookAdInfo;
    }
    if (_0x268724 == "food") {
      this.adinfo = this.foodAdInfo;
    }
    if (_0x268724 == "box") {
      this.adinfo = this.boxAdInfo;
    }
    if (this.adaddnum != 0) {
      this.adinfo.requestSceneType = 7;
    }
    const _0x5aa874 = {
      appId: "kuaishou_nebula",
      name: "快手极速版",
      packageName: "com.kuaishou.nebula",
      version: this.appver,
      versionCode: -1
    };
    const _0x2cf0ee = {
      width: 1080,
      height: 2068
    };
    const _0x61ed0c = {
      latitude: 0,
      longitude: 0
    };
    const _0x1ae66d = {
      toastDesc: null,
      toastImgUrl: null
    };
    const _0xe1cd91 = {
      exitInfo: _0x1ae66d
    };
    let _0x54270a = {
      appInfo: _0x5aa874,
      deviceInfo: {
        oaid: this.oaid,
        osType: 1,
        osVersion: 12,
        language: this.language,
        deviceId: "" + this.did,
        screenSize: _0x2cf0ee,
        ftt: "",
        supportGyroscope: true
      },
      networkInfo: {
        ip: this.nwip,
        connectionType: 100
      },
      geoInfo: _0x61ed0c,
      userInfo: {
        userId: this.userId,
        age: 0,
        gender: ""
      },
      impInfo: [{
        pageId: 11101,
        subPageId: this.adinfo.subPageId,
        action: 0,
        width: 0,
        height: 0,
        browseType: this.browseType,
        requestSceneType: this.adinfo.requestSceneType,
        lastReceiveAmount: 0,
        impExtData: "{\"openH5AdCount\":0,\"sessionLookedCompletedCount\":" + this.adaddnum + ",\"sessionType\":\"1\",\"neoParams\":\"" + Buffer.from(JSON.stringify({
          pageId: 11101,
          subPageId: this.adinfo.subPageId,
          posId: 0,
          businessId: this.adinfo.businessId,
          extParams: "",
          customData: _0xe1cd91,
          pendantType: 1,
          displayType: 2,
          singlePageId: 0,
          singleSubPageId: 0,
          channel: 0,
          countdownReport: false,
          themeType: 0,
          mixedAd: false,
          fullMixed: true,
          autoReport: true,
          fromTaskCenter: false,
          searchInspireSchemeInfo: null,
          amount: 0
        })).toString("base64") + "\"}",
        impExtData: "{}",
        mediaExtData: "{}",
        session: x_0x4cf38f.uuid()
      }],
      adClientInfo: "{\"ipdxIP\":\"" + this.wwip + "\"}"
    };
    return _0x54270a;
  }
  async loadAd(_0x2726fe) {
    const _0x436b53 = this.loadAdInfo(_0x2726fe);
    const _0x3bf015 = await this.encsign(_0x436b53);
    if (_0x3bf015 == null) {
      x_0x4cf38f.log("获取encsign失败");
      return;
    }
    const _0x5e0bd0 = {
      encData: _0x3bf015.encdata,
      sign: _0x3bf015.sign,
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_23",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    const _0x57c947 = await this.loadReqParams("/rest/e/reward/mixed/ad", _0x5e0bd0, this.salt);
    if (_0x57c947 == null) {
      x_0x4cf38f.log("获取广告信息失败");
      return;
    }
    try {
      let {
        data: _0x14be45
      } = await x_0x22affd.request({
        url: "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
        params: _0x57c947,
        httpAgent: this.socks5,
        httpsAgent: this.socks5,
        proxy: false,
        timeout: 30000,
        method: "POST",
        headers: {
          Host: "api.e.kuaishou.com",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "kuaishou.api_st=" + this.api_st,
          "User-Agent": x_0x14e629
        },
        data: _0x5e0bd0
      });
      if (_0x14be45.errorMsg === "OK" && _0x14be45.feeds && _0x14be45.feeds[0] && _0x14be45.feeds[0].ad) {
        const _0x126b66 = _0x14be45.feeds[0].caption || _0x14be45.feeds[0].ad?.["caption"] || "";
        if (_0x126b66) {
          {
            x_0x4cf38f.log("账号[" + this.nickname + "] 成功获取到广告信息：" + _0x126b66);
          }
        } else {
          {
            x_0x4cf38f.log("账号[" + this.nickname + "] 获取广告信息失败");
            return null;
          }
        }
        const _0x19958f = _0x14be45.feeds[0].exp_tag || "";
        const _0x2bc520 = _0x19958f.split("/")[1]?.["split"]("_")?.[0] || "";
        if (_0x14be45.feeds[0].streamManifest) {
          {
            const _0x2201d7 = {
              cid: _0x14be45.feeds[0].ad.creativeId,
              llsid: _0x2bc520,
              adExtInfo: _0x14be45.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
              materialTime: _0x14be45.feeds[0].streamManifest.adaptationSet[0].duration,
              watchAdTime: _0x14be45.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
            };
            return _0x2201d7;
          }
        } else {
          const _0x3c00e0 = {
            cid: _0x14be45.feeds[0].ad.creativeId,
            llsid: _0x2bc520,
            adExtInfo: _0x14be45.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
            materialTime: 3000,
            watchAdTime: _0x14be45.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
          };
          return _0x3c00e0;
        }
      } else {
        {
          x_0x4cf38f.log("账号[" + this.nickname + "] 获取广告信息失败");
          return null;
        }
      }
    } catch (_0x35ec5b) {
      {
        console.log("加载广告信息失败");
        return null;
      }
    }
  }
  async preSub(_0x14499e, _0x12fe1c) {
    const _0x543f65 = {
      bizStr: JSON.stringify({
        pageId: 11101,
        subPageId: this.adinfo.subPageId,
        posId: this.adinfo.posId,
        taskId: this.adinfo.businessId,
        items: [{
          basicType: 1,
          creativeId: _0x14499e,
          llsid: _0x12fe1c,
          mediaType: "video"
        }]
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    let _0x4c5a26 = await this.loadReqParams("/rest/r/ad/exposure/report", _0x543f65, this.salt);
    if (_0x4c5a26 == null) {
      {
        return x_0x4cf38f.log("获取曝光信息失败");
      }
    }
    try {
      {
        let {
          data: _0x23cfab
        } = await x_0x22affd.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/exposure/report",
          params: _0x4c5a26,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x14e629
          },
          method: "POST",
          data: _0x543f65
        });
        return _0x23cfab.result == 1 ? true : (x_0x4cf38f.log("账号[" + this.nickname + "] 曝光广告失败"), false);
      }
    } catch (_0x2f373c) {
      console.log("账号[" + this.nickname + "] 曝光广告失败");
      return false;
    }
  }
  async subAd(_0x4f7cad, _0x2c5bcc, _0x4d77ee, _0x494eae, _0x36a4cd, _0x2528c3, _0x518c61) {
    const _0x3c9a7a = _0x494eae + _0x36a4cd * 1000;
    const _0x4f1933 = {
      bizStr: JSON.stringify({
        businessId: this.adinfo.businessId,
        endTime: _0x3c9a7a,
        extParams: "",
        mediaScene: "video",
        neoInfos: [{
          clientExtInfo: "{\"serialPaySuccess\":true}",
          creativeId: _0x4f7cad,
          extInfo: "",
          llsid: _0x2c5bcc,
          adExtInfo: _0x4d77ee,
          materialTime: _0x2528c3,
          watchAdTime: _0x518c61,
          requestSceneType: this.adinfo.requestSceneType,
          taskType: this.adinfo.taskType,
          watchExpId: "",
          watchStage: 0
        }],
        pageId: 11101,
        posId: this.adinfo.posId,
        reportType: 0,
        sessionId: "adNeo-" + this.userId + "-" + this.adinfo.subPageId + "-" + _0x494eae,
        startTime: _0x3c9a7a,
        subPageId: this.adinfo.subPageId
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "",
      watchStage: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: "1##cmWns:-0#swLdgl:99#ecPp:--#cmNt:-1"
    };
    const _0x573a39 = await this.loadReqParams("/rest/r/ad/task/report", _0x4f1933, this.salt);
    if (_0x573a39 == null) {
      {
        console.log("获取sign失败 请重试");
        return 0;
      }
    }
    try {
      {
        let {
          data: _0x453ac2
        } = await x_0x22affd.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/task/report",
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          params: _0x573a39,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x14e629
          },
          data: _0x4f1933
        });
        if (_0x453ac2.result == 415) {
          {
            console.log(_0x453ac2);
            const _0x512cda = {
              neoAmount: 0,
              status: 3
            };
            return _0x512cda;
          }
        }
        if (_0x453ac2.result == 1003) {
          {
            console.log(_0x453ac2);
            const _0x23e1c1 = {
              neoAmount: 0,
              status: 3
            };
            return _0x23e1c1;
          }
        }
        if (_0x453ac2.message == "成功") {
          const _0x27ccdc = {
            neoAmount: _0x453ac2.data.neoAmount,
            status: 1
          };
          return _0x27ccdc;
        } else {
          console.log(_0x453ac2);
          const _0x128621 = {
            neoAmount: 0,
            status: 2
          };
          return _0x128621;
        }
      }
    } catch (_0x57553f) {
      {
        console.log(_0x57553f);
        const _0x117d76 = {
          neoAmount: 0,
          status: 1
        };
        return _0x117d76;
      }
    }
  }
}
function x_0x4b9bae(_0x305d50) {
  return new class {
    constructor(_0x50fbf1) {
      {
        this.userIdx = 1;
        this.userList = [];
        this.userCount = 0;
        this.name = _0x50fbf1;
        this.time = 480;
        this.time1 = 120;
        this.sort = 1;
        this.wheelNum = 0;
        this.startTime = new Date().getTime();
        this.log(this.name + ",开始!");
        this.count = 999;
        this.ip = 1;
        this.failadnum = 3;
        this.failadnumobj = {};
        this.foodcount = 3;
        this.boxcount = 3;
        this.lookcount = 5;
      }
    }
    checkEnv() {
      const _0x170521 = [];
      if (this.isNode()) {
        Object.keys(process.env).forEach(_0x295df5 => {
          if (_0x295df5.startsWith("ksck")) {
            _0x170521.push(_0x295df5);
          }
        });
      }
      let _0xf2e751 = [];
      _0x170521.forEach(_0x342ac4 => {
        const _0x204b4e = (this.isNode() ? process.env[_0x342ac4] : "") || "";
        if (_0x204b4e) {
          {
            _0xf2e751.push(_0x204b4e);
          }
        }
      });
      const _0x2bbfa4 = _0xf2e751.join("&");
      this.userList = _0x2bbfa4.split(["&", "\n"].find(_0x2049a3 => {
        {
          return _0x2bbfa4.includes(_0x2049a3);
        }
      }) || "&").filter(_0x472d47 => {
        return _0x472d47;
      });
      this.userCount = this.userList.length;
      const _0x470554 = (this.isNode() ? process.env.kscount : 999) || 999;
      this.count = _0x470554;
      const _0x32e0b9 = (this.isNode() ? process.env.ksadtype : "look&box") || "look&box";
      x_0x2c54ea = _0x32e0b9;
      const _0x37e478 = (this.isNode() ? process.env.km : "") || "";
      x_0x458797.km = _0x37e478;
      const _0x249e88 = (this.isNode() ? process.env.kstime : 480) || 480;
      this.time = Number(_0x249e88);
      const _0xc30d47 = (this.isNode() ? process.env.kstime1 : 120) || 120;
      this.time1 = Number(_0xc30d47);
      const _0x3c435c = (this.isNode() ? process.env.kssort : 0) || 0;
      this.sort = Number(_0x3c435c);
      const _0x4ef2b0 = (this.isNode() ? process.env.ksip : 1) || 1;
      this.ip = Number(_0x4ef2b0);
      const _0x1dd1f4 = (this.isNode() ? process.env.failadnum : 3) || 3;
      this.failadnum = Number(_0x1dd1f4);
      this.log({
        count: this.count,
        time: this.time,
        time1: this.time1,
        sort: this.sort
      });
      const _0x2ccf46 = (this.isNode() ? process.env.kscountnum : "3,3,5") || "3,3,5";
      const _0x1d9e12 = _0x2ccf46.split(",");
      this.foodcount = Number(_0x1d9e12[0]);
      this.boxcount = Number(_0x1d9e12[1]);
      this.lookcount = Number(_0x1d9e12[2]);
      this.log("共找到" + this.userCount + "个账号,运行" + this.count + "轮,全局广告类型为" + _0x32e0b9);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    queryStr(_0x5aef86) {
      const _0x3db664 = require("querystring");
      return _0x3db664.stringify(_0x5aef86);
    }
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x1a7754) {
        var _0x97bc0c = Math.random() * 16 | 0;
        var _0xac1787 = _0x1a7754 == "x" ? _0x97bc0c : _0x97bc0c & 3 | 8;
        return _0xac1787.toString(16);
      });
    }
    log(_0x4a8a0f) {
      const _0x36fb61 = new Date();
      console.log(x_0x2a4960(_0x36fb61, "MM-DD HH:mm:ss"), _0x4a8a0f);
    }
    wait(_0x5359f8) {
      return new Promise(_0x2c62b7 => {
        return setTimeout(_0x2c62b7, _0x5359f8);
      });
    }
    async done() {
      const _0x56585c = new Date().getTime();
      const _0x46d5f9 = (_0x56585c - this.startTime) / 1000;
      this.log(this.name + ",结束!" + _0x46d5f9 + "秒");
      if (this.isNode()) {
        {
          process.exit(1);
        }
      }
    }
  }(_0x305d50);
}
const x_0x4cf38f = new x_0x4b9bae("eva");
async function x_0x434ece() {
  const _0x112c8d = {
    url: "https://gitee.com/fxg1997/open/raw/master/notice.json",
    method: "GET"
  };
  const {
    data: _0x392754
  } = await x_0x22affd.request(_0x112c8d);
  console.log(_0x392754);
}
const x_0x43ff89 = async () => {
  x_0x4cf38f.wheelNum++;
  x_0x4cf38f.userIdx = 1;
  if (x_0x4cf38f.sort == 1) {
    for (let _0x5eb75d of x_0x4cf38f.userList) {
      {
        await new x_0x1cc7a1(_0x5eb75d).run();
        const _0x34d353 = Math.floor(Math.random() * 20 + 30);
        await x_0x4cf38f.wait(_0x34d353);
      }
    }
  } else {
    {
      await Promise.all(x_0x4cf38f.userList.map(_0x20316f => new x_0x1cc7a1(_0x20316f).run()));
    }
  }
  if (x_0x4cf38f.wheelNum < x_0x4cf38f.count) {
    const _0xd8f23a = Math.floor(Math.random() * x_0x4cf38f.time1 + x_0x4cf38f.time);
    x_0x4cf38f.log("第" + x_0x4cf38f.wheelNum + "次任务完成 等待" + _0xd8f23a + "秒后继续执行");
    await x_0x4cf38f.wait(_0xd8f23a * 1000);
    await x_0x43ff89();
  }
};
!(async () => {
  await x_0x434ece();
  x_0x4cf38f.checkEnv();
  await x_0x43ff89();
})().catch(_0x1f24ef => {
  return x_0x4cf38f.log(_0x1f24ef);
}).finally(() => {
  return x_0x4cf38f.done();
});