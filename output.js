//Tue Dec 16 2025 04:00:10 GMT+0000 (Coordinated Universal Time)
//
//
var W = typeof globalThis !== "undefined" && globalThis.AndroidBridge ? globalThis.AndroidBridge : typeof W !== "undefined" ? W : null;
function X() {
  try {
    if (W && W.log) W.log([].map.call(arguments, a => String(a)).join(" "));
  } catch (a) {}
}
function Y() {
  var b = [];
  for (var f = 0; f < arguments.length; f++) {
    {
      var g = String(arguments[f] || "");
      if (!g) continue;
      if (g[0] === "/" && f > 0) g = g.replace(/^\/+/, "");
      b.push(g.replace(/\\/g, "/"));
    }
  }
  return b.join("/").replace(/\\/g, "/").replace(/\/+/g, "/");
}
function Z(a) {
  if (!W || !W.readText) return null;
  try {
    return W.readText(a);
  } catch (b) {
    return null;
  }
}
function a0(a, b) {
  if (!W || !W.writeText) return false;
  try {
    return !!W.writeText(a, String(b));
  } catch (h) {
    return false;
  }
}
async function a1(a, b, f) {
  const g = {
    "qlbak": function (k, l, m) {
      return k(l, m);
    },
    "ApviG": function (k, l) {
      return k * l;
    },
    "GLgYB": function (k, l) {
      return k(l);
    },
    "iEjim": "HTTP不可用：AndroidBridge.http 缺失",
    "QPSua": "GET",
    "glhjo": function (k, l) {
      return k(l);
    },
    "uQvUy": function (k, l) {
      return k === l;
    },
    "pNgyq": "string",
    "rHeQr": function (k, l) {
      return k || l;
    },
    "UxPPe": "AVbRV",
    "rdfCv": function (k, l) {
      return k !== l;
    },
    "depZM": "hZxpe",
    "DHBQt": function (k, l) {
      return k + l;
    },
    "njqox": "HTTP请求失败: "
  };
  try {
    if (!W || !W.http) return X("HTTP不可用：AndroidBridge.http 缺失"), null;
    var h = {
        "method": String(a.method || "GET").toUpperCase(),
        "url": String(a.url || ""),
        "headers": a.headers || {},
        "body": typeof a.body === "string" ? a.body : a.body ? JSON.stringify(a.body) : "",
        "timeout": a.timeout || 20000,
        "proxy": f || null
      },
      i = await W.http(h),
      j = i && typeof i.body === "string" ? i.body : "";
    try {
      return JSON.parse(j);
    } catch (k) {
      return j;
    }
  } catch (m) {
    X("HTTP请求失败: " + (m && m.message || m));
    return null;
  }
}
function a2(a) {
  this.name = a;
  this.logSeparator = "\n";
}
a2.prototype.isNode = function () {
  return true;
};
a2.prototype.getdata = function () {
  return null;
};
a2.prototype.setdata = function () {
  return false;
};
a2.prototype.log = function () {
  try {
    X([].slice.call(arguments).join(this.logSeparator));
  } catch (b) {}
};
a2.prototype.done = function () {};
var a3 = false;
if (!W) {
  a3 = true;
  try {
    var a4 = require("fs");
    Z = function (a) {
      try {
        return a4.readFileSync(a, "utf8");
      } catch (f) {
        return null;
      }
    };
    a0 = function (a, b) {
      try {
        a4.writeFileSync(a, String(b));
        return true;
      } catch (h) {
        return false;
      }
    };
  } catch (b5) {}
  try {
    if (typeof fetch !== "function") {
      var a5 = null;
      try {
        a5 = require("node-fetch");
      } catch (b6) {
        a5 = null;
      }
      a5 && (global.fetch = a5);
    }
  } catch (b7) {}
  if (typeof fetch === "function") {
    async function b8(a, b, f) {
      const g = {
        "ZPPMr": function (m, n) {
          return m === n;
        },
        "lPBgR": "UywPC",
        "CBlAr": function (m, n) {
          return m(n);
        },
        "CaMKK": "GET",
        "BzOwJ": "HEAD",
        "mkhyx": function (m, n) {
          return m === n;
        },
        "KBiqP": "string",
        "lMBqU": function (m, n, o) {
          return m(n, o);
        },
        "MQxUv": function (m, n) {
          return m(n);
        },
        "sptHw": function (m, n) {
          return m !== n;
        },
        "vfGXz": "kHBvc",
        "chANM": "XGReB",
        "WDiPh": function (m, n) {
          return m + n;
        },
        "gjUGK": "[fetch] HTTP请求失败: "
      };
      try {
        {
          var h = String(a.method || "GET").toUpperCase(),
            i = a.headers || {},
            j = h === "GET" || h === "HEAD" ? undefined : typeof a.body === "string" ? a.body : a.body ? JSON.stringify(a.body) : undefined,
            k = await fetch(String(a.url || ""), {
              "method": h,
              "headers": i,
              "body": j
            }),
            l = await k.text();
          try {
            return JSON.parse(l);
          } catch (m) {
            return l;
          }
        }
      } catch (p) {
        console.log("[fetch] HTTP请求失败: " + (p && p.message || p));
        return null;
      }
    }
  }
}
const a6 = new a2("ks200"),
  a7 = "ks200",
  a8 = "phid";
function a9() {
  try {
    {
      var j = ["config.txt", "ks200.txt", ".env"];
      for (var l = 0; l < j.length; l++) {
        {
          var m = j[l],
            n = Z(m);
          if (n && String(n).length) {
            var o = {},
              p = String(n).split("\n");
            for (var r = 0; r < p.length; r++) {
              {
                var t = p[r].trim();
                if (!t || t.indexOf("#") === 0) continue;
                var u = t.indexOf("=");
                if (u > 0) {
                  {
                    var v = t.slice(0, u).trim(),
                      w = t.slice(u + 1).trim();
                    o[v] = w;
                  }
                }
              }
            }
            return o;
          }
        }
      }
      return {};
    }
  } catch (B) {
    a6.log("⚠️ 配置文件读取失败: " + (B && B.message || B));
    return {};
  }
}
const aa = a9();
let ae = aa.phid || (a6.isNode() ? process.env[a8] : a6.getdata(a8)) || "",
  af = aa.km || (a6.isNode() ? process.env.km : a6.getdata("km")) || "",
  ag = aa.jinbi || (a6.isNode() ? process.env.jinbi : a6.getdata("jinbi")) || "",
  ah = aa.AMA || (a6.isNode() ? process.env.AMA : a6.getdata("AMA")) || "0",
  ai = parseInt(aa.loops || (a6.isNode() ? process.env.loops : a6.getdata("loops")) || "10"),
  aj = aa.ad || (a6.isNode() ? process.env.ad : a6.getdata("ad")) || "",
  ak = aa.huihao || (a6.isNode() ? process.env.huihao : a6.getdata("huihao")) || "0";
const al = 0;
let am = 0,
  an = ["\n", "&"],
  ao = msg = "",
  ar = aa.ks200 || (a6.isNode() ? process.env[a7] : a6.getdata(a7)) || "",
  as = null;
function at() {
  return null;
}
let au = [],
  av = 0,
  aw = 0,
  ax = Date.now(),
  ay = ax - 25000;
const az = new Date(),
  aA = az.getHours();
let aB = [],
  aC = 20000,
  aD = 30000;
const aE = aa.xz || (a6.isNode() ? process.env.xz : a6.getdata("xz")) || "";
aE === "0" && (aC = 0, aD = 5000);
let aF = 0,
  aG = 0,
  aH = false,
  aI = 0;
const aJ = "Mozilla/5.0 (Linux; Android 13; 23116PN5BC Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160043 MMWEBSDK/20231202 MMWEBID/9859 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64";
function aK(a) {
  if (!a) return null;
  if (a.startsWith("socks5://") || a.startsWith("http://") || a.startsWith("https://")) return a;
  const f = a.split("|");
  if (f.length === 4) {
    const [g, h, i, j] = f;
    return "socks5://" + i + ":" + j + "@" + g + ":" + h;
  }
  if (a.includes(":") && !a.includes("|")) {
    return "socks5://" + a;
  }
  return a;
}
function aL(a) {
  const b = {
    "bvSJo": function (g, h) {
      return g === h;
    },
    "TZNnT": "MtVei",
    "hyQkL": "MZpKa",
    "VJukZ": function (g, h) {
      return g === h;
    },
    "FinAJ": "UTCXt",
    "EZvZt": function (g, h) {
      return g + h;
    },
    "OdnLx": function (g, h) {
      return g * h;
    },
    "pntmB": function (g, h) {
      return g * h;
    },
    "SrKnq": function (g, h) {
      return g + h;
    },
    "toFGX": function (g, h) {
      return g >= h;
    },
    "CcePq": function (g, h) {
      return g + h;
    },
    "zWdzz": function (g, h) {
      return g * h;
    },
    "mkvwJ": function (g, h) {
      return g * h;
    },
    "vgAmq": function (g, h) {
      return g - h;
    },
    "rMXai": function (g, h) {
      return g % h;
    },
    "ymLFR": function (g, h) {
      return g * h;
    },
    "IDoHc": function (g, h) {
      return g > h;
    },
    "LHyVl": "UYevs",
    "zbaqp": "OiAIs"
  };
  if (ak === "1") {
    return false;
  }
  const f = Date.now();
  if (a === 1 || a === 10) {
    {
      aF++;
      aG = f;
      if (aF === 1) {
        const h = 1;
        aI = f + h * 3600 * 1000;
        aH = true;
        console.log("检测到低金币(" + a + ")，暂停任务" + h + "小时");
        return true;
      } else {
        if (aF === 2) {
          const i = 2;
          aI = f + i * 3600 * 1000;
          aH = true;
          console.log("再次检测到低金币(" + a + ")，暂停任务" + i + "小时");
          return true;
        } else {
          if (aF === 3) {
            const j = 3;
            aI = f + j * 3600 * 1000;
            aH = true;
            console.log("第三次检测到低金币(" + a + ")，暂停任务" + j + "小时");
            return true;
          } else {
            if (aF >= 4) {
              const k = f + 86400000,
                l = k - k % 86400000;
              aI = l;
              aH = true;
              console.log("连续" + aF + "次检测到低金币(" + a + ")，暂停任务到明天");
              return true;
            }
          }
        }
      }
    }
  } else aF > 0 && (console.log("检测到正常金币(" + a + ")，重置低金币计数"), aF = 0, aH = false);
  return false;
}
function aM() {
  if (!aH) {
    return false;
  }
  const b = Date.now();
  if (b >= aI) {
    aH = false;
    aF = 0;
    console.log("低金币暂停时间已过，恢复任务执行");
    return false;
  }
  return true;
}
const aN = {
  "广告": 672,
  "宝箱": 606,
  "饭补": 9362,
  "搜索": 7038,
  "内容": 7054,
  "广告2": 7044,
  "内容2": 7060
};
function aO() {
  if (!aj) {
    return Object.values(aN);
  }
  const b = [],
    f = aj.split(",").map(h => h.trim()).filter(h => h);
  for (const h of f) {
    aN[h] && b.push(aN[h]);
  }
  return b;
}
function aP(a) {
  return aO().includes(a);
}
async function aQ() {
  try {
    const f = "http://121.204.244.130:18999/jk.php",
      g = await fetch(f, {
        "method": "GET",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }),
      h = await g.text();
    let i = null;
    try {
      i = JSON.parse(h);
    } catch (l) {
      i = h;
    }
    function j(n) {
      const o = {
        "qErKn": function (D, E) {
          return D === E;
        },
        "YeosK": "string",
        "qmgvd": "object",
        "CXgto": "mShFC"
      };
      if (Array.isArray(n)) return n;
      if (!n) return null;
      if (typeof n === "string") {
        try {
          return j(JSON.parse(n));
        } catch (D) {
          return null;
        }
      }
      if (typeof n === "object") {
        {
          function F(G) {
            if (!G) return [];
            if (Array.isArray(G)) {
              return G.map(function (K) {
                if (typeof K === "string") return {
                  "url": K
                };
                if (K && typeof K === "object" && K.url) return {
                  "url": K.url
                };
                return null;
              }).filter(Boolean);
            }
            if (typeof G === "object" && Array.isArray(G.interfaces)) {
              return G.interfaces.map(function (K) {
                if (typeof K === "string") return {
                  "url": K
                };
                if (K && typeof K === "object" && K.url) return {
                  "url": K.url
                };
                return null;
              }).filter(Boolean);
            }
            if (typeof G === "string") {
              {
                var I = G.split(/[\n,;\s]+/).map(function (M) {
                  return M.trim();
                }).filter(Boolean);
                return I.map(function (M) {
                  return {
                    "url": M
                  };
                });
              }
            }
            return [];
          }
          var p = n;
          if (n && typeof n.data === "object") p = n.data;
          if (p && typeof p.apiGroups !== "undefined") {
            var r = p.apiGroups;
            if (Array.isArray(r)) return r;
          }
          var t = [],
            u = [n, n.data].filter(function (G) {
              return !!G && typeof G === "object";
            });
          for (var v = 0; v < u.length; v++) {
            var y = u[v];
            var w = F(y.sign || y.SIGN || y.Sign);
            var x = F(y.enc || y.ENC || y.Enc);
            if (w.length) t.push({
              "name": "sign",
              "interfaces": w
            });
            if (x.length) t.push({
              "name": "enc",
              "interfaces": x
            });
            if (t.length) return t;
          }
          var z = Object.keys(p || n || {});
          for (var A = 0; A < z.length; A++) {
            var B = z[A],
              C = F((p || n)[B]);
            C.length && t.push({
              "name": B,
              "interfaces": C
            });
          }
          if (t.length) return t;
        }
      }
      return null;
    }
    var b = j(i);
    return b && Array.isArray(b) && b.length > 0 ? (aB = b, true) : (console.log("获取接口列表失败，返回值异常"), false);
  } catch (n) {
    console.log("获取接口列表异常: " + (n && n.message || n));
    return false;
  }
}
function aR(a, b = "") {
  const g = aB.find(j => j.name === a);
  if (!g || !g.interfaces || g.interfaces.length === 0) return null;
  const h = Math.floor(Math.random() * g.interfaces.length),
    i = g.interfaces[h];
  return i;
}
function aS() {
  return Math.floor(Math.random() * (aD - aC + 1)) + aC;
}
function aT() {
  return Math.floor(Math.random() * 8001) + 2000;
}
async function aU() {
  try {
    if (!ar) {
      return;
    }
    if (au.length === 0) return;
    for (const f of au) {
      {
        const g = {
            "Host": "nebula.kuaishou.com",
            "Connection": "keep-alive",
            "User-Agent": f.userAgent,
            "Cookie": "kuaishou.api_st=" + f.api_st + ";client_key=2ac2a76d;",
            "content-type": "application/json"
          },
          h = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo";
        try {
          {
            const i = await fetch(h, {
                "method": "GET",
                "headers": g
              }),
              j = await i.text();
            let k = null;
            try {
              k = JSON.parse(j);
            } catch (m) {
              k = null;
            }
            if (k && k.result == 1) {
              {
                const o = k.data.totalCoin,
                  p = k.data.allCash;
                console.log("账号[" + f.index + "] " + f.remark + "您的金币: " + o + " 余额: " + p);
                if (ag) {
                  {
                    const t = parseInt(ag);
                    if (o > t) console.log("账号[" + f.index + "] 金币(" + o + ")大于(" + t + ")，今天任务已完成");else {
                      console.log("账号[" + f.index + "] 金币(" + o + ")小于等于(" + t + ")，继续执行任务");
                    }
                  }
                }
              }
            } else console.log("账号[" + f.index + "] 查询失败 ❌，原因: 未知");
          }
        } catch (w) {}
      }
    }
  } catch (y) {}
}
async function aV() {
  console.log("\n================== 获取ad ==================\n");
  await aU();
  console.log("\n📊 本次执行共 " + au.length + " 个账号\n");
  let b = 0;
  while (b < ai) {
    b++;
    if (aM()) {
      while (aM()) {
        const g = Math.ceil((aI - Date.now()) / 1000);
        if (g > 0) {
          {
            const h = Math.floor(g / 3600),
              i = Math.floor(g % 3600 / 60),
              j = g % 60;
            console.log("⏸️ 因低金币暂停中，剩余时间: " + h.toString().padStart(2, "0") + ":" + i.toString().padStart(2, "0") + ":" + j.toString().padStart(2, "0"));
            await new Promise(k => setTimeout(k, 10000));
          }
        } else {
          aH = false;
          aF = 0;
          console.log("低金币暂停时间已过，恢复任务执行");
          break;
        }
      }
      continue;
    }
    for (let l of au) {
      {
        const n = aS();
        console.log("账号[" + l.index + "]  随机延迟 " + Math.round(n / 1000) + "秒");
        l.initialDelay = n;
      }
    }
    let f = [];
    for (let o of au) {
      f.push((async () => {
        {
          await new Promise(r => setTimeout(r, o.initialDelay));
          const p = [{
            "id": 672,
            "name": "广告"
          }, {
            "id": 606,
            "name": "宝箱"
          }, {
            "id": 9362,
            "name": "饭补"
          }, {
            "id": 7038,
            "name": "搜索"
          }, {
            "id": 7054,
            "name": "内容"
          }, {
            "id": 7044,
            "name": "广告2"
          }, {
            "id": 7060,
            "name": "内容2"
          }];
          for (const r of p) {
            if (aM()) {
              {
                console.log("账号[" + o.index + "] 因低金币暂停，停止所有任务");
                return;
              }
            }
            if (!aP(r.id)) {
              console.log("账号[" + o.index + "]  " + r.name + "任务已禁用，跳过执行");
              continue;
            }
            !o.isTaskStopped(r.id) ? await o.cid(r.id) : console.log("账号[" + o.index + "]  " + r.name + "任务已达上限，已停止执行");
          }
        }
      })());
    }
    await Promise.all(f);
    if (b < ai) {}
  }
}
class aW {
  constructor(a) {
    this.index = ++av;
    this.remark = a.remark || "小主";
    this.salt = a.salt;
    this.userAgent = a.userAgent || aJ;
    this.sock5 = aK(a.sock5);
    this.userId = a.userId;
    this.egid = a.egid;
    this.did = a.did;
    this.api_st = a.api_st;
    this.appver = a.appver || "13.2.41.9745";
    if (!this.salt || !this.userAgent || !this.userId || !this.egid || !this.did || !this.api_st) {
      console.log("账号[" + this.index + "] 参数不完整:", {
        "salt": this.salt,
        "userAgent": this.userAgent,
        "userId": this.userId,
        "egid": this.egid,
        "did": this.did,
        "api_st": this.api_st
      });
      this.valid = false;
      return;
    }
    this.valid = true;
    this.headers = {
      "Host": "nebula.kuaishou.cn",
      "Connection": "keep-alive",
      "User-Agent": this.userAgent,
      "Cookie": "kuaishou.api_st=" + this.api_st + ";client_key=2ac2a76d;",
      "content-type": "application/json"
    };
    this.hostt = "https://api.e.kuaishou.com";
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi(23116PN5BC)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.stoppedTasks = new Set();
    this.degradedTasks = new Set();
  }
  ["isTaskStopped"](a) {
    return this.stoppedTasks.has(a);
  }
  ["stopTask"](a) {
    this.stoppedTasks.add(a);
  }
  ["isTaskDegraded"](a) {
    return this.degradedTasks.has(a);
  }
  ["degradeTask"](a) {
    this.degradedTasks.add(a);
  }
  async ["sig3"](a, b, f, g, h) {
    const i = {
      "fugyz": "Cookie解析失败:",
      "GfVmh": function (l, m) {
        return l + m;
      },
      "bgtHT": function (l, m) {
        return l * m;
      },
      "fBUNt": function (l, m) {
        return l * m;
      },
      "XoZyx": function (l, m) {
        return l === m;
      },
      "gRHMZ": "object",
      "wsXtZ": "获取接口列表异常: ",
      "CkgPm": function (l, m) {
        return l && m;
      },
      "kOGeN": function (l, m) {
        return l !== m;
      },
      "NRuhT": "qUVmD",
      "pALfh": function (l, m) {
        return l !== m;
      },
      "RUUfs": "vxmUp",
      "IbAEb": "YPtlG",
      "hFnTF": function (l, m) {
        return l !== m;
      },
      "DDVbp": "kopkT",
      "GQfhn": "srxCG",
      "dqXTj": function (l, m) {
        return l === m;
      },
      "BCgmJ": function (l, m) {
        return l === m;
      },
      "LiWvd": "jIdMS",
      "dMYSC": "yRMfy",
      "CICMl": function (l, m, n) {
        return l(m, n);
      },
      "MfuSS": "sign",
      "Zaxfn": "post",
      "eBDbC": function (l, m) {
        return l(m);
      },
      "nrkUm": "application/json",
      "sMSrs": "POST",
      "ayDjH": "qFuJl",
      "VxFLX": "bTyMT",
      "kjDPZ": function (l, m) {
        return l === m;
      },
      "rpuNE": "WRWuA",
      "yPDGd": function (l, m) {
        return l === m;
      },
      "QxvLo": "xuSJp",
      "KrxaR": "yCuiy",
      "LByfl": function (l, m) {
        return l === m;
      },
      "wKYSi": function (l, m) {
        return l === m;
      },
      "vCTOh": function (l, m) {
        return l === m;
      },
      "WdaIm": function (l, m) {
        return l === m;
      },
      "aYknO": "HiRXg",
      "OYEOW": "fwefD",
      "hKKts": "AewvB"
    };
    if (!this.valid) return;
    if (f === 672) {
      {
        if (this.isTaskDegraded(672)) var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";else var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0},{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":3,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
      }
    }
    if (f === 606) {
      {
        if (this.isTaskDegraded(606)) {
          var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
        } else var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
      }
    }
    if (f === 9362) var k = ah === "1" ? 3 : 1,
      j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":" + k + ",\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
    if (f === 7038) {
      var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":96134,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100074584}&cs=false&client_key=2ac2a76d";
    }
    if (f === 7054) var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":186550,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100141480}&cs=false&client_key=2ac2a76d";
    if (f === 7044) var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":182533,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100138797}&cs=false&client_key=2ac2a76d";
    if (f === 7060) var j = "bizStr={\"businessId\":" + f + ",\"endTime\":" + ay + ",\"extParams\":\"\",\"mediaScene\":\"" + g + "\",\"neoInfos\":[{\"creativeId\":" + a + ",\"extInfo\":\"\",\"llsid\":" + b + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":188553,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + ax + ",\"subPageId\":100138797}&cs=false&client_key=2ac2a76d";
    try {
      const p = aR("sign", this.index);
      if (!p) return;
      let r = {
          "method": "post",
          "url": "http://" + p.url + "?km=" + encodeURIComponent(af) + "&user=" + this.userId,
          "headers": {
            "User-Agent": this.userAgent,
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "query": this.query,
            "body": j,
            "salt": this.salt,
            "path": this.path
          })
        },
        u = null;
      try {
        const v = await fetch(r.url, {
            "method": "POST",
            "headers": r.headers,
            "body": r.body
          }),
          w = await v.text();
        try {
          u = JSON.parse(w);
        } catch (x) {
          u = null;
        }
      } catch (y) {
        u = null;
      }
      if (u && u.Sig && u.Sig3 && u.NsSig) {
        let z = u.Sig,
          A = u.Sig3,
          B = u.NsSig;
        if (f === 672) {
          await this.ad(z, A, B, j, f);
        }
        if (f === 606) {
          await this.boxad(z, A, B, j, f);
        }
        if (f === 9362) {
          await this.fanbuad(z, A, B, j, f);
        }
        f === 7038 && (await this.ad7038(z, A, B, j, f));
        f === 7054 && (await this.ad7054(z, A, B, j, f));
        f === 7044 && (await this.ad7044(z, A, B, j, f));
        if (f === 7060) {
          await this.ad7060(z, A, B, j, f);
        }
      } else return;
    } catch (G) {
      return;
    }
  }
  async ["cid"](a, b) {
    const g = {
      "kNwsG": function (i, j, k) {
        return i(j, k);
      },
      "fHPmk": function (i, j) {
        return i * j;
      },
      "QMsev": function (i, j) {
        return i === j;
      },
      "hsjgn": "IwBDQ",
      "erPNR": "5|1|4|2|7|8|6|3|0",
      "unToi": function (i, j) {
        return i + j;
      },
      "iUcKM": function (i, j) {
        return i + j;
      },
      "WuLIX": "km=",
      "fdUDK": function (i, j) {
        return i(j);
      },
      "tCPIM": function (i, j) {
        return i + j;
      },
      "IHtAV": "userId=",
      "UJXJz": function (i, j) {
        return i(j);
      },
      "EdIMg": function (i, j) {
        return i(j);
      },
      "WfBtO": "adType=",
      "GkNla": function (i, j) {
        return i(j);
      },
      "HrjJh": "salt=",
      "isJCe": function (i, j) {
        return i(j);
      },
      "PoyQx": function (i, j) {
        return i(j);
      },
      "XWWeS": function (i, j) {
        return i + j;
      },
      "nQnvm": "apist=",
      "WvjeG": "did=",
      "HDYep": function (i, j) {
        return i(j);
      },
      "xkTPq": function (i, j) {
        return i(j);
      },
      "SUkTM": "oaid=",
      "DRsMK": function (i) {
        return i();
      },
      "wAzVw": function (i, j) {
        return i / j;
      },
      "oROFt": function (i, j) {
        return i > j;
      },
      "aFTMQ": function (i, j, k) {
        return i(j, k);
      },
      "jZMSZ": "enc",
      "VbxiD": function (i, j) {
        return i !== j;
      },
      "BCCfT": "eywcs",
      "pcvcQ": "get",
      "EmgWc": "MnMou",
      "NrfGd": function (i, j, k) {
        return i(j, k);
      },
      "MaPfT": "GET",
      "gtlcA": function (i, j) {
        return i !== j;
      },
      "JBPPM": "XlxSS",
      "qHLSX": "AzcZL",
      "niidV": function (i, j) {
        return i + j;
      },
      "ZTCTV": function (i, j) {
        return i(j);
      },
      "JAkqk": function (i, j) {
        return i(j);
      },
      "OEsDq": function (i, j) {
        return i + j;
      },
      "UDCqE": function (i, j) {
        return i(j);
      },
      "JEKDs": function (i, j) {
        return i(j);
      },
      "EmrYx": function (i, j) {
        return i + j;
      },
      "Zwkkq": function (i, j) {
        return i(j);
      },
      "LuSiL": function (i, j) {
        return i + j;
      },
      "bAXic": function (i, j) {
        return i(j);
      },
      "KCNJR": function (i, j) {
        return i + j;
      },
      "RXskX": function (i, j) {
        return i(j);
      },
      "gFTux": function (i, j) {
        return i(j);
      },
      "KwCnd": "POST",
      "gDpXg": "application/x-www-form-urlencoded",
      "jodzu": "bHPCj",
      "cMLng": function (i, j) {
        return i == j;
      },
      "pnddW": "IZWiL",
      "eWhPQ": "ZAOiS",
      "WYEYv": function (i, j) {
        return i === j;
      },
      "LHovP": "undefined",
      "GIbpc": function (i, j) {
        return i === j;
      },
      "ewnCa": function (i) {
        return i();
      },
      "YJbwb": "video",
      "XijQt": "dOEbq"
    };
    if (!this.valid) return;
    try {
      let i = a;
      const j = aR("enc", this.index);
      if (!j) {
        {
          console.log("账号[" + this.index + "] 无法获取enc接口");
          return;
        }
      }
      let k = {
          "method": "get",
          "url": function () {
            {
              var n = [];
              n.push("km=" + encodeURIComponent(af));
              n.push("salt=" + encodeURIComponent(String(this.salt || "")));
              n.push("userId=" + encodeURIComponent(String(this.userId || "")));
              n.push("did=" + encodeURIComponent(String(this.did || "")));
              n.push("oaid=");
              n.push("apist=" + encodeURIComponent(String(this.api_st || "")));
              n.push("adType=" + encodeURIComponent(String(i)));
              return "http://" + j.url + "?" + n.join("&");
            }
          }.call(this),
          "headers": {
            "User-Agent": this.userAgent
          }
        },
        l = null;
      try {
        {
          const n = await fetch(k.url, {
              "method": "GET",
              "headers": k.headers || {}
            }),
            o = await n.text();
          try {
            l = JSON.parse(o);
          } catch (p) {
            l = null;
          }
          if (!l) {
            {
              var h = [];
              h.push("km=" + encodeURIComponent(af));
              h.push("salt=" + encodeURIComponent(String(this.salt || "")));
              h.push("userId=" + encodeURIComponent(String(this.userId || "")));
              h.push("did=" + encodeURIComponent(String(this.did || "")));
              h.push("oaid=");
              h.push("apist=" + encodeURIComponent(String(this.api_st || "")));
              h.push("adType=" + encodeURIComponent(String(i)));
              const u = "http://" + j.url,
                v = await fetch(u, {
                  "method": "POST",
                  "headers": Object.assign({}, k.headers || {}, {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }),
                  "body": h.join("&")
                }),
                w = await v.text();
              try {
                l = JSON.parse(w);
              } catch (y) {
                l = null;
              }
            }
          }
        }
      } catch (B) {
        l = null;
      }
      if (l && l.result == 1 && l.feeds && l.feeds[0]) {
        {
          l.feeds[0].caption && console.log("账号[" + this.index + "] " + l.feeds[0].caption);
          let C = l.feeds[0].exp_tag,
            D = C.split("/"),
            E = D[1],
            F = E.split("_")[0],
            G = l.feeds[0].ad.creativeId,
            H = F,
            I = l.feedType;
          if (!H || H === "undefined" || H === "") return;
          if (I === 0) {
            const J = aS();
            console.log("账号[" + this.index + "]  随机延迟 " + Math.round(J / 1000) + "秒");
            await new Promise(L => setTimeout(L, J));
            let K = "video";
            await this.sig3(G, H, a, K);
          }
        }
      } else {
        return;
      }
    } catch (N) {
      return;
    }
  }
  async ["boxad"](a, b, f, g, h, i) {
    const j = {
      "JWbZf": function (k, l) {
        return k(l);
      },
      "WiQQC": function (k, l) {
        return k === l;
      },
      "SEWLy": "vjIYc",
      "qKDom": "uRFBJ",
      "lhjZC": "post",
      "HIXxN": "api.e.kuaishou.com",
      "jbRJk": "kwai-android aegon/4.9.1",
      "IDYIZ": "NEW_TASK_CENTER",
      "ZjRFB": "application/x-www-form-urlencoded",
      "czqvF": "model=V2049A;os=Android;nqe-score=33;network=WIFI;",
      "sGarp": function (k, l, m) {
        return k(l, m);
      },
      "GSlBA": "POST",
      "AMFcE": function (k, l) {
        return k == l;
      },
      "svtxj": function (k, l) {
        return k === l;
      },
      "DFKRW": "fltjC",
      "bKdhB": function (k) {
        return k();
      },
      "UAxlh": function (k, l) {
        return k / l;
      },
      "aEdlp": function (k, l) {
        return k == l;
      },
      "ZwBmx": "string",
      "GUMJA": "今日奖励领完啦",
      "mHPof": "RBIun",
      "lwMas": "PDRlP",
      "EIRvd": function (k, l) {
        return k == l;
      },
      "ZSenl": function (k, l) {
        return k !== l;
      },
      "xKkzJ": function (k, l) {
        return k !== l;
      }
    };
    try {
      {
        let l = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.9.1",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": g
          },
          m = null;
        try {
          const n = await fetch(l.url, {
              "method": "POST",
              "headers": l.headers,
              "body": g
            }),
            o = await n.text();
          try {
            m = JSON.parse(o);
          } catch (p) {
            m = null;
          }
        } catch (u) {
          m = null;
        }
        if (m && m.result == 1) {
          {
            let v = m.data.neoAmount || 0;
            console.log("账号[" + this.index + "]  开宝箱获得金币:" + v);
            aL(v);
            const w = aT();
            console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(w / 1000) + "秒");
            await new Promise(x => setTimeout(x, w));
          }
        } else {
          let y = m && m.result;
          const z = m && (m.message || m.error_msg) || "";
          if (y == 1003 || typeof z === "string" && z.includes("今日奖励领完啦")) {
            if (this.isTaskDegraded(606)) {
              {
                console.log("账号[" + this.index + "]  宝箱任务提示\"今日奖励领完啦\"，停止该任务");
                this.stopTask(606);
                return;
              }
            } else {
              console.log("账号[" + this.index + "]  宝箱任务提示\"今日奖励领完啦\"，降级重试");
              this.degradeTask(606);
              return;
            }
          }
          if (this.isTaskDegraded(606) && (y == 400 || y == 415)) {
            console.log("账号[" + this.index + "]  宝箱任务已达上限，已停止执行");
            this.stopTask(606);
            return;
          }
          m && m.result !== 400 && m.result !== 415 && console.log(m);
        }
      }
    } catch (B) {
      return;
    }
  }
  async ["ad"](a, b, f, g, h, i) {
    const j = {
      "XWeBN": function (k, l) {
        return k(l);
      },
      "UvJSm": function (k, l) {
        return k(l);
      },
      "eYgTm": function (k, l) {
        return k === l;
      },
      "uobae": "dpuxM",
      "kDiYx": "post",
      "lypuq": "api.e.kuaishou.com",
      "KYmwi": "kwai-android aegon/4.9.1",
      "SllkJ": "NEW_TASK_CENTER",
      "auKKn": "application/x-www-form-urlencoded",
      "ltxRw": "model=V2049A;os=Android;nqe-score=33;network=WIFI;",
      "XRMIj": function (k, l, m) {
        return k(l, m);
      },
      "xiifz": "POST",
      "wDGsH": function (k, l) {
        return k !== l;
      },
      "vrMVV": "eobOE",
      "NKqWq": function (k, l) {
        return k == l;
      },
      "PdtrP": function (k) {
        return k();
      },
      "vFtmN": function (k, l) {
        return k / l;
      },
      "rCuVU": function (k, l) {
        return k == l;
      },
      "MJAvE": "string",
      "uUdgL": "今日奖励领完啦",
      "YNgUx": function (k, l) {
        return k === l;
      },
      "FxUnx": "hOlFj",
      "twnCW": "bmFKB",
      "kmfpI": function (k, l) {
        return k !== l;
      },
      "dZTDe": "nTJNm",
      "IBLTQ": function (k, l) {
        return k === l;
      },
      "abbJp": "YjDPx"
    };
    try {
      {
        let k = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.9.1",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": g
          },
          l = null;
        try {
          const m = await fetch(k.url, {
              "method": "POST",
              "headers": k.headers,
              "body": g
            }),
            n = await m.text();
          try {
            l = JSON.parse(n);
          } catch (p) {
            l = null;
          }
        } catch (u) {
          l = null;
        }
        if (l && l.result == 1) {
          let v = l.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  看广告获得金额:" + v);
          aL(v);
          const w = aT();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(w / 1000) + "秒");
          await new Promise(x => setTimeout(x, w));
        } else {
          let x = l && l.result;
          const y = l && (l.message || l.error_msg) || "";
          if (x == 1003 || typeof y === "string" && y.includes("今日奖励领完啦")) {
            if (this.isTaskDegraded(672)) {
              {
                console.log("账号[" + this.index + "]  ad广告任务提示\"今日奖励领完啦\"，停止该任务");
                this.stopTask(672);
                return;
              }
            } else {
              {
                console.log("账号[" + this.index + "]  ad广告任务提示\"今日奖励领完啦\"，降级重试");
                this.degradeTask(672);
                return;
              }
            }
          }
          if (l && l.result !== 400 && l.result !== 415) {
            console.log(l);
          }
        }
      }
    } catch (D) {
      return;
    }
  }
  async ["fanbuad"](a, b, f, g, h, i) {
    try {
      {
        let k = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": g
          },
          l = null;
        try {
          const m = await fetch(k.url, {
              "method": "POST",
              "headers": k.headers,
              "body": g
            }),
            n = await m.text();
          try {
            l = JSON.parse(n);
          } catch (o) {
            l = null;
          }
        } catch (u) {
          l = null;
        }
        if (l && l.result == 1) {
          {
            let w = l.data.neoAmount || 0;
            console.log("账号[" + this.index + "]  饭补看广告" + w + "金币奖励！");
            aL(w);
            const x = aT();
            console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(x / 1000) + "秒");
            await new Promise(y => setTimeout(y, x));
          }
        } else {
          {
            const y = l && l.result,
              z = l && (l.message || l.error_msg) || "";
            if (y == 1003 || typeof z === "string" && z.includes("今日奖励领完啦")) {
              console.log("账号[" + this.index + "]  饭补任务提示\"今日奖励领完啦\"，停止该任务");
              this.stopTask(9362);
              return;
            }
            console.log("账号[" + this.index + "] 饭补奖励失败,多次失败请先手动点击饭补的广告是否正常");
            l && l.result !== 400 && l.result !== 415 && console.log(l);
          }
        }
      }
    } catch (C) {
      return;
    }
  }
  async ["ad7038"](a, b, f, g, h, i) {
    try {
      {
        let k = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.9.1",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": g
          },
          l = null;
        try {
          {
            const n = await fetch(k.url, {
                "method": "POST",
                "headers": k.headers,
                "body": g
              }),
              o = await n.text();
            try {
              l = JSON.parse(o);
            } catch (u) {
              l = null;
            }
          }
        } catch (w) {
          l = null;
        }
        if (l && l.result == 1) {
          {
            let z = l.data.neoAmount || 0;
            console.log("账号[" + this.index + "]  搜索看广告获得金额:" + z);
            aL(z);
            const A = aT();
            console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(A / 1000) + "秒");
            await new Promise(B => setTimeout(B, A));
          }
        } else {
          const B = l && l.result,
            C = l && (l.message || l.error_msg) || "";
          if (B == 1003 || typeof C === "string" && C.includes("今日奖励领完啦")) {
            console.log("账号[" + this.index + "]  搜索任务提示\"今日奖励领完啦\"，停止该任务");
            this.stopTask(7038);
            return;
          }
          console.log("账号[" + this.index + "]  搜索看广告奖励失败");
          if (l && l.result !== 400 && l.result !== 415) {
            console.log(l);
          }
        }
      }
    } catch (F) {
      return;
    }
  }
  async ["ad7054"](a, b, f, g, h, i) {
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": g
        },
        l = null;
      try {
        const m = await fetch(k.url, {
            "method": "POST",
            "headers": k.headers,
            "body": g
          }),
          n = await m.text();
        try {
          l = JSON.parse(n);
        } catch (p) {
          l = null;
        }
      } catch (u) {
        l = null;
      }
      if (l && l.result == 1) {
        let v = l.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  新任务看广告获得金额:" + v);
        aL(v);
        const w = aT();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(w / 1000) + "秒");
        await new Promise(x => setTimeout(x, w));
      } else {
        const x = l && l.result,
          y = l && (l.message || l.error_msg) || "";
        if (x == 1003 || typeof y === "string" && y.includes("今日奖励领完啦")) {
          console.log("账号[" + this.index + "]  新任务提示\"今日奖励领完啦\"，停止该任务");
          this.stopTask(7054);
          return;
        }
        console.log("账号[" + this.index + "]  新任务看广告奖励失败");
        l && l.result !== 400 && l.result !== 415 && console.log(l);
      }
    } catch (z) {
      return;
    }
  }
  async ["ad7044"](a, b, f, g, h, i) {
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": g
        },
        l = null;
      try {
        {
          const n = await fetch(k.url, {
              "method": "POST",
              "headers": k.headers,
              "body": g
            }),
            o = await n.text();
          try {
            l = JSON.parse(o);
          } catch (u) {
            l = null;
          }
        }
      } catch (w) {
        l = null;
      }
      if (l && l.result == 1) {
        let x = l.data && l.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  广告2看广告获得金额:" + x);
        aL(x);
        const y = aT();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(y / 1000) + "秒");
        await new Promise(z => setTimeout(z, y));
      } else {
        {
          const z = l && l.result,
            A = l && (l.message || l.error_msg) || "";
          if (z == 1003 || typeof A === "string" && A.includes("今日奖励领完啦")) {
            console.log("账号[" + this.index + "]  广告2任务提示\"今日奖励领完啦\"，停止该任务");
            this.stopTask(7044);
            return;
          }
          l && l.result !== 400 && l.result !== 415 && console.log(l);
        }
      }
    } catch (C) {
      return;
    }
  }
  async ["ad7060"](a, b, f, g, h, i) {
    const j = {
      "HfWik": function (k, l) {
        return k(l);
      },
      "hxlwd": function (k, l) {
        return k > l;
      },
      "RQeoe": function (k, l) {
        return k + l;
      },
      "jNFje": function (k, l) {
        return k * l;
      },
      "gaSDI": function (k, l) {
        return k + l;
      },
      "yHODQ": function (k, l) {
        return k - l;
      },
      "LZJVG": "[fetch] HTTP请求失败: ",
      "buBrn": "post",
      "YfFdB": "api.e.kuaishou.com",
      "fNeBr": "kwai-android aegon/4.9.1",
      "LJmhh": "NEW_TASK_CENTER",
      "eQIhz": "application/x-www-form-urlencoded",
      "kWRYL": "model=V2049A;os=Android;nqe-score=33;network=WIFI;",
      "TodrE": function (k, l) {
        return k === l;
      },
      "Ekjhl": "StwUQ",
      "dyWYe": "MNTDb",
      "UXKoK": function (k, l, m) {
        return k(l, m);
      },
      "japRN": "POST",
      "wCgeS": function (k, l) {
        return k !== l;
      },
      "ajQCs": "sjAOW",
      "VsRrH": "wrqOh",
      "eMXHx": function (k, l) {
        return k == l;
      },
      "rZDon": function (k) {
        return k();
      },
      "bRchg": function (k, l) {
        return k / l;
      },
      "FguBn": "string",
      "DQcNF": "今日奖励领完啦",
      "WWvly": function (k, l) {
        return k !== l;
      },
      "BTJTO": "rlTXg",
      "IxgjU": "OPqnu",
      "CrbEY": "WLKxO"
    };
    try {
      let k = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + a + "&__NS_sig3=" + b + "&__NS_xfalcon=&__NStokensig=" + f,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": g
        },
        l = null;
      try {
        {
          const n = await fetch(k.url, {
              "method": "POST",
              "headers": k.headers,
              "body": g
            }),
            o = await n.text();
          try {
            l = JSON.parse(o);
          } catch (p) {
            l = null;
          }
        }
      } catch (v) {
        l = null;
      }
      if (l && l.result == 1) {
        let x = l.data && l.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  内容2看广告获得金额:" + x);
        aL(x);
        const y = aT();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(y / 1000) + "秒");
        await new Promise(z => setTimeout(z, y));
      } else {
        const z = l && l.result,
          A = l && (l.message || l.error_msg) || "";
        if (z == 1003 || typeof A === "string" && A.includes("今日奖励领完啦")) {
          console.log("账号[" + this.index + "]  内容2任务提示\"今日奖励领完啦\"，停止该任务");
          this.stopTask(7060);
          return;
        }
        l && l.result !== 400 && l.result !== 415 && console.log(l);
      }
    } catch (C) {
      return;
    }
  }
}
async function aX(a, b) {
  try {
    {
      if (!am) return true;
      if (!a) return true;
      if (a3) return true;
      return true;
    }
  } catch (h) {
    return true;
  }
}
!(async () => {
  if (!(await b0())) return;
  try {
    {
      if (au.length > 0) for (const f of au) {
        try {
          await aX(f.sock5, f.index);
        } catch (h) {}
      }
    }
  } catch (j) {}
  const b = await aQ();
  if (!b) return;
  au.length > 0 ? await aV() : console.log("❌没有有效的账号配置，程序退出");
  await b4(msg);
})().catch(() => {}).finally(() => a6.done());
function aY() {
  return Math.floor(Math.random() * 3) + 8;
}
function aZ(a) {
  var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    g = String(a || "").replace(/=+$/, ""),
    h = "";
  if (!g || g.length % 4 === 1) return "";
  for (var i = 0, j, k, l = 0; k = g.charAt(l++); ~k && (j = i % 4 ? j * 64 + k : k, i++ % 4) ? h += String.fromCharCode(255 & j >> (-2 * i & 6)) : 0) {
    k = f.indexOf(k);
  }
  try {
    return decodeURIComponent(escape(h));
  } catch (n) {
    return h;
  }
}
async function b0() {
  if (!af) return console.log("❌未找到km环境变量，请设置青龙面板的km变量"), false;
  if (ar) {
    {
      const b = ar.split(new RegExp(an.join("|"))).map(g => g.trim()).filter(g => g),
        f = [];
      for (const g of b) {
        let h, i, j, k, l;
        if (g.includes("#")) {
          const o = g.split("#").map(p => p.trim()).filter(p => p);
          if (o.length < 2) {
            console.log("❌账号格式错误: " + g);
            console.log("正确格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
            continue;
          }
          if (o[0].includes("=")) {
            {
              i = o[0];
              j = o[1] || "";
              k = o[2] || aJ;
              l = o[3] || "";
              h = "小主" + (f.length + 1);
            }
          } else {
            h = o[0];
            i = o[1] || "";
            j = o[2] || "";
            k = o[3] || aJ;
            l = o[4] || "";
          }
        } else {
          if (g.includes("@")) {
            const w = g.split("@").map(y => y.trim()).filter(y => y);
            if (w.length < 3) {
              console.log("❌账号格式错误: " + g);
              console.log("旧格式: 备注@cookie@salt@ua@proxy 或 cookie@salt@ua@proxy");
              continue;
            }
            let x = 0;
            w[0].indexOf("=") === -1 ? (h = w[0], x = 1) : h = "小主" + (f.length + 1);
            i = w[x] || "";
            j = w[x + 1] || "";
            k = w[x + 2] || aJ;
            l = w[x + 3] || "";
          } else {
            {
              console.log("❌账号格式错误: " + g);
              console.log("请使用@或#分隔符");
              continue;
            }
          }
        }
        if (!i || !j) {
          console.log("❌账号信息不完整(跳过): " + g);
          console.log("必须包含cookie和salt");
          continue;
        }
        const m = b1(i);
        if (!m) {
          console.log("❌Cookie信息提取失败(跳过): " + h);
          continue;
        }
        const n = new aW({
          "remark": h,
          "salt": j,
          "userAgent": k,
          "sock5": l,
          ...m
        });
        if (!n.valid) {
          console.log("❌账号参数不完整(跳过): " + h);
          continue;
        }
        f.push(n);
      }
      if (f.length === 0) {
        console.log("❌未解析到任何有效账号，请检查变量内容");
        console.log("支持格式:");
        console.log("1. 旧格式: 备注@cookie@salt@ua@proxy");
        console.log("2. 新格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
        console.log("其中备注(可选), ua(可选), proxy(可选)");
        return false;
      }
      au = f;
      aw = au.length;
      as = au[0].sock5 || null;
      console.log("✅共找到" + aw + "个有效账号");
      return true;
    }
  } else {
    console.log("❌未找到ks200环境变量");
    console.log("支持格式:");
    console.log("1. 旧格式: 备注@cookie@salt@ua@proxy");
    console.log("2. 新格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
    console.log("其中备注(可选), ua(可选), proxy(可选)");
    console.log("多账号用换行或&分隔");
    return false;
  }
}
function b1(a) {
  const b = {
    "SkYwS": function (f, g) {
      return f !== g;
    },
    "YJcoH": "vXmbO",
    "XQtmq": "OQtVC",
    "eglyF": "mpjvX",
    "kPZIK": function (f, g) {
      return f && g;
    },
    "ZMoxo": "userId",
    "QLNSo": "egid",
    "xtvpj": "did",
    "GVCzh": "kuaishou.api_st",
    "nMiBT": "appver",
    "LtOJi": "13.2.41.9745",
    "RcMfW": function (f, g) {
      return f === g;
    },
    "tqmQa": "mecwF",
    "xXDXR": "LyedF",
    "sPjZt": "Cookie中缺少必要字段:",
    "lWXcf": "Cookie解析失败:"
  };
  try {
    {
      const g = {},
        h = a.split(";");
      for (let n of h) {
        {
          const [o, p] = n.trim().split("=");
          o && p && (g[o.trim()] = p.trim());
        }
      }
      const i = g.userId || g.ud,
        j = g.egid,
        k = g.did,
        l = g["kuaishou.api_st"],
        m = g.appver || "13.2.41.9745";
      return i && j && k && l ? {
        "userId": i,
        "egid": j,
        "did": k,
        "api_st": l,
        "appver": m
      } : (console.log("Cookie中缺少必要字段:", {
        "userId": i,
        "egid": j,
        "did": k,
        "api_st": l
      }), null);
    }
  } catch (u) {
    console.log("Cookie解析失败:", u.message);
    return null;
  }
}
function b2(a) {
  return new Promise(function (f) {
    setTimeout(f, a * 1000);
  });
}
function b3(a) {
  if (a6.isNode()) a && (console.log("" + a), msg += "\n" + a);else {
    console.log("" + a);
    msg += "\n" + a;
  }
}
async function b4(a) {
  if (!a) return;
  if (al > 0) {
    try {
      {
        var f = require("./sendNotify");
        await f.sendNotify(a6.name, a);
      }
    } catch (h) {}
  } else console.log(a);
}
function a2(a, b) {
  const f = {
    "gBAsR": function (g, h) {
      return g(h);
    },
    "knSAI": function (g, h) {
      return g === h;
    },
    "zedOb": "QtelS",
    "EyGpL": function (g, h) {
      return g === h;
    },
    "GfaqP": "yiOhT",
    "JFWGr": "nqznm",
    "GpmLe": function (g, h) {
      return g !== h;
    },
    "JPYcN": "MuTPq",
    "GzilQ": "vspDk",
    "ssuHT": "undefined",
    "zGZTp": function (g, h) {
      return g > h;
    },
    "ZcYBT": "GITHUB"
  };
  try {
    {
      if (typeof process !== "undefined" && JSON.stringify(process.env).indexOf("GITHUB") > -1) process.exit(0);
    }
  } catch (h) {}
  return new class {
    constructor(i, j) {
      this.name = a;
      this.logs = [];
      this.logSeparator = "\n";
      this.startTime = Date.now();
    }
    ["isNode"]() {
      return true;
    }
    ["msg"]() {}
    ["log"]() {
      try {
        console.log(Array.from(arguments).join(this.logSeparator));
      } catch (k) {}
    }
    ["done"]() {}
  }();
}