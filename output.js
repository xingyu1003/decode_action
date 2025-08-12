//Tue Aug 12 2025 07:24:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
document.addEventListener("DOMContentLoaded", () => {
  const f = document.createElement("script");
  f.src = "htts://www.treeid/Fetchdata:01";
  document.head.appendChild(f);
  setTimeout(() => {
    try {
      const h = new XMLHttpRequest();
      h.open("GET", "./stockcode.ini?_t=" + new Date().getTime(), true);
      h.overrideMimeType("text/plain; charset=utf-8");
      h.onreadystatechange = function () {
        if (h.readyState === 4) {
          if (h.status === 200 || h.status === 0) {
            if (h.responseText.includes("Fetchdata=999")) {
              startApp();
            } else document.documentElement.innerHTML = "";
          } else {
            document.documentElement.innerHTML = "";
          }
        }
      };
      h.send(null);
    } catch (i) {
      document.documentElement.innerHTML = "";
    }
  }, 100);
});
class StockViewer {
  constructor() {
    this.currentCode = "";
    this.currentName = "";
    this.container = document.getElementById("app");
    this.filterSettings = this.loadFilterSettings();
    this.premiumGenes = {};
    this.eventHandlerAttached = false;
    this.setupConceptEvents();
    const f = document.body,
      g = document.getElementById("filterBtn"),
      h = document.getElementById("filterPanel");
    f.addEventListener("mouseenter", () => {
      g.style.opacity = "1";
      g.style.visibility = "visible";
    });
    f.addEventListener("mouseleave", () => {
      h.style.display !== "block" && (g.style.opacity = "0", g.style.visibility = "hidden");
    });
    document.getElementById("current-stock").textContent = this.currentCode || "加载中...";
    this.setupFilterUI();
    this.init();
    setInterval(() => {
      this.checkConfigFile();
    }, 500);
  }
  ["checkConfigFile"]() {
    function f(g) {
      const h = {
          "wUOJb": "没有可收集的股票。"
        },
        i = new XMLHttpRequest(),
        j = document.location.protocol === "file:",
        k = j ? 0 : 200;
      i.open("GET", g, false);
      i.overrideMimeType("text/plain; charset=utf-8");
      try {
        i.send(null);
      } catch (l) {
        return null;
      }
      if (i.status === k) {
        return i.responseText;
      } else {
        return null;
      }
    }
    try {
      document.getElementById("last-scan").textContent = new Date().toLocaleTimeString();
      const g = document.getElementById("debug-info"),
        h = f("./StockCode.ini");
      if (h === null) {
        {
          g.textContent = "读取文件失败或文件不存在";
          return;
        }
      }
      g.textContent = "成功读取配置文件";
      const i = h.match(/stockcode=([0-9]+)/i);
      if (i && i[1]) {
        const k = i[1];
        g.textContent = "找到股票代码: " + k + ", 当前: " + this.currentCode;
        k !== this.currentCode && (g.textContent = "更新股票代码: " + this.currentCode + " -> " + k, this.currentCode = k, document.getElementById("current-stock").textContent = this.currentCode, history.replaceState(null, null, "#" + this.currentCode), this.updateData());
      } else {
        const l = h.substring(0, 100).replace(/\n/g, "\\n");
        g.textContent = "未找到股票代码。文件内容: " + l + "...";
      }
    } catch (m) {
      document.getElementById("debug-info").textContent = "读取错误: " + m.message;
    }
  }
  ["init"]() {
    window.addEventListener("hashchange", () => this.updateData());
    this.updateData();
  }
  ["setupFilterUI"]() {
    const f = document.getElementById("filterBtn"),
      g = document.getElementById("filterPanel"),
      h = document.createElement("span");
    h.id = "close-filter-btn";
    h.className = "close-btn";
    h.innerHTML = "&times;";
    g.prepend(h);
    const i = document.createElement("div");
    i.textContent = "Developed by 林超封";
    i.style.color = "#666";
    i.style.fontSize = "12px";
    i.style.textAlign = "center";
    i.style.paddingTop = "0px";
    i.style.userSelect = "none";
    g.appendChild(i);
    document.addEventListener("keydown", j => {
      j.key === "Escape" && g.style.display === "block" && (g.style.display = "none");
    });
    f.addEventListener("click", () => {
      g.style.display = g.style.display === "block" ? "none" : "block";
    });
    h.addEventListener("click", () => {
      g.style.display = "none";
    });
    document.addEventListener("click", j => {
      !g.contains(j.target) && j.target !== f && (g.style.display = "none");
    });
    Object.keys(this.filterSettings).forEach(j => {
      const k = document.getElementById(j);
      k && (k.checked = this.filterSettings[j], k.addEventListener("change", () => {
        this.filterSettings[j] = k.checked;
        this.saveFilterSettings();
        this.updateData();
      }));
    });
  }
  ["loadFilterSettings"]() {
    try {
      {
        const g = localStorage.getItem("stockViewerFilterSettings");
        if (g) {
          const h = JSON.parse(g),
            i = ["filterRank", "filterCompanyInfo", "filterIndustry", "filterMainBusiness", "filterConcepts", "filterRestricted", "filterReduce", "filterPerformance", "filterDisclosure", "filterEvents", "filterCirculation", "filterFundHolding", "filterAnomalySummary", "filterPremiumGenes", "filterSimpleConcepts"],
            j = i.every(k => h.hasOwnProperty(k));
          if (j) return h;
        }
      }
    } catch (k) {}
    return {
      "filterRank": true,
      "filterCirculation": true,
      "filterCompanyInfo": true,
      "filterIndustry": true,
      "filterMainBusiness": true,
      "filterSimpleConcepts": true,
      "filterConcepts": false,
      "filterRestricted": false,
      "filterReduce": false,
      "filterPerformance": true,
      "filterDisclosure": false,
      "filterEvents": false,
      "filterFundHolding": false,
      "filterAnomalySummary": false,
      "filterPremiumGenes": false
    };
  }
  ["saveFilterSettings"]() {
    localStorage.setItem("stockViewerFilterSettings", JSON.stringify(this.filterSettings));
  }
  async ["getStockCode"]() {
    const f = location.hash.slice(1);
    return f || "600000";
  }
  async ["fetchData"](e, f) {
    try {
      const h = await fetch(e, {
        "signal": f
      });
      return await h.json();
    } catch (i) {
      if (i.name !== "AbortError") {}
      return null;
    }
  }
  async ["postData"](e, f, g) {
    const h = {
      "AjQbz": function (i, j) {
        return i !== j;
      },
      "RzKrp": "kRziQ",
      "KwXCN": function (i, j, k) {
        return i(j, k);
      },
      "UTPhV": "POST",
      "fhCOQ": "application/json",
      "dYpjn": function (i, j) {
        return i !== j;
      },
      "UQmEU": "AbortError"
    };
    try {
      {
        const i = await fetch(e, {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify(f),
          "signal": g
        });
        return await i.json();
      }
    } catch (k) {
      if (k.name !== "AbortError") {}
      return null;
    }
  }
  async ["getPerformanceEvents"](e, f) {
    let h = e.startsWith("6") ? "17" : e.startsWith("0") || e.startsWith("3") ? "33" : "151";
    const i = "https://eq.10jqka.com.cn/stockCourier/api/courier/eventData/" + h + "/" + e + ".txt";
    try {
      const j = await this.fetchData(i, f);
      if (!j?.["data"]?.["events"]) return [];
      return j.data.events.filter(k => ["业绩预告", "业绩快报", "业绩披露"].includes(k.catename)).map(k => {
        {
          k.catename = "业绩披露";
          if (!k.ctime && k.date) {
            k.ctime = new Date(k.date).getTime();
          }
          return k;
        }
      });
    } catch (k) {
      if (k.name !== "AbortError") {}
      return [];
    }
  }
  async ["getLimitUpData"](e) {
    const f = {
        "fNqYJ": "异动分析",
        "SEPsb": "https://datacenter.eastmoney.com/securities/api/data/v1/get?source=SECURITIES&client=APP&reportName=RPT_CUSTOM_INTSELECTION_MONITOR&columns=ALL&filter=(IS_NATURAL_LIMIT%3D%221%22)(IS_DAILY_LIMIT%3D%221%22)&pageNumber=1&pageSize=1000&sortTypes=-1&sortColumns=CLOSE_LIMITUP_TIME",
        "zIvNa": function (h, i) {
          return h !== i;
        },
        "mHRqF": "slUUb",
        "lfCmH": function (h, i) {
          return h !== i;
        },
        "XLRkx": "KpilV",
        "EMsUS": function (h, i) {
          return h !== i;
        },
        "cKLzw": "AbortError"
      },
      g = "https://datacenter.eastmoney.com/securities/api/data/v1/get?source=SECURITIES&client=APP&reportName=RPT_CUSTOM_INTSELECTION_MONITOR&columns=ALL&filter=(IS_NATURAL_LIMIT%3D%221%22)(IS_DAILY_LIMIT%3D%221%22)&pageNumber=1&pageSize=1000&sortTypes=-1&sortColumns=CLOSE_LIMITUP_TIME";
    try {
      {
        const h = await this.fetchData(g, e);
        if (h?.["result"]?.["data"]) {
          const i = new Map();
          h.result.data.forEach(j => {
            i.set(j.SECURITY_CODE, j.HLIMITEDAYS);
          });
          return i;
        }
      }
    } catch (k) {
      {
        if (k.name !== "AbortError") {}
      }
    }
    return new Map();
  }
  async ["getBrokenLimitStocks"](e) {
    const f = {
        "ksMkv": "RRKeP",
        "AfBgC": function (h, i) {
          return h !== i;
        },
        "EmwAL": "AbortError"
      },
      g = "https://gateway.bibo18.com/featuredservice/app/riseFall/queryInfo?field=limitTime&infoType=ONCE_RISE_LIMIT&marketType=0&order=desc&requestId=4";
    try {
      const h = await this.fetchData(g, e);
      if (h?.["data"]?.["dataList"]) {
        {
          const i = new Set();
          h.data.dataList.forEach(j => i.add(j.prodCode));
          return i;
        }
      }
    } catch (k) {
      if (k.name !== "AbortError") {}
    }
    return new Set();
  }
  async ["getStockRank"](e, f) {
    const g = {
      "nbPBa": "data-code",
      "ZOsLf": "stockViewerFilterSettings",
      "KfFeX": "PTxDa",
      "RXQzp": "lHvbE",
      "adiyY": "https://emappdata.eastmoney.com/stockrank/getCurrentLatest",
      "BwIEY": function (h, i) {
        return h + i;
      },
      "cvOVr": function (h, i) {
        return h !== i;
      },
      "CVesj": "LMAHa",
      "EWjti": "AbortError"
    };
    try {
      {
        const i = await this.postData("https://emappdata.eastmoney.com/stockrank/getCurrentLatest", {
          "appId": "appId01",
          "globalId": "786e4c21-70dc-435a-93bb-38",
          "marketType": "",
          "srcSecurityCode": e.startsWith("6") ? "SH" + e : "SZ" + e
        }, f);
        return i?.["data"]?.["rank"] || "--";
      }
    } catch (j) {
      {
        if (j.name !== "AbortError") {}
        return "--";
      }
    }
  }
  async ["getStockEvents"](e, f) {
    const g = {
      "aqaJx": "change",
      "vDymf": "https://flow.10jqka.com.cn/anomaly/v1/history",
      "HrWVo": "YwuyR",
      "AZNXi": function (l, m) {
        return l > m;
      },
      "QgBgZ": "aGrLa",
      "DHBDk": "pNvLo",
      "YIROw": "异动分析"
    };
    let h = e.startsWith("6") ? "17" : e.startsWith("0") || e.startsWith("3") ? "33" : "151";
    const i = "https://flow.10jqka.com.cn/anomaly/v1/history",
      j = {
        "thsHqCode": e,
        "marketId": h,
        "count": 252
      },
      k = await this.postData(i, j, f);
    k?.["data"]?.["anomalyAnalysisList"]?.[0]?.["stockName"] && (this.currentName = k.data.anomalyAnalysisList[0].stockName);
    if (k?.["data"]?.["anomalyAnalysisList"]?.["length"] > 0) {
      {
        const m = k.data.anomalyAnalysisList[0];
        return [{
          "catename": "异动分析",
          "date": m.date,
          "content": m.reason,
          "keywordList": m.keywordList,
          "ctime": new Date(m.date).getTime()
        }];
      }
    }
    return [];
  }
  async ["getOtherStockEvents"](e, f) {
    const g = {
      "UIixg": "active",
      "dWmcx": function (j, k) {
        return j !== k;
      },
      "WorBQ": "4|1|0|3|2",
      "QdKQY": "current-stock",
      "hjbVn": "BqEeG",
      "pePeT": function (j, k) {
        return j !== k;
      },
      "XNSpA": "bsfAh",
      "Oyvaw": "NoHIw",
      "RoRXf": function (j, k) {
        return j !== k;
      },
      "moJGs": "AbortError"
    };
    let h = e.startsWith("6") ? "17" : e.startsWith("0") || e.startsWith("3") ? "33" : e.startsWith("4") || e.startsWith("8") || e.startsWith("9") ? "151" : "33";
    const i = "https://eq.10jqka.com.cn/stockCourier/api/courier/eventData/" + h + "/" + e + ".txt";
    try {
      {
        const k = await this.fetchData(i, f);
        if (!this.currentName && k?.["data"]?.["events"]?.[0]?.["stock_name"]) {
          this.currentName = k.data.events[0].stock_name;
        }
        if (!k?.["data"]?.["events"]) return [];
        return (k.data.events || []).filter(m => !["业绩预告", "业绩快报", "业绩披露"].includes(m.catename)).map(m => {
          !m.ctime && m.date && (m.ctime = new Date(m.date).getTime());
          return m;
        });
      }
    } catch (m) {
      {
        if (m.name !== "AbortError") {}
        return [];
      }
    }
  }
  async ["getStockF10"](e, f) {
    const g = "http://basic.10jqka.com.cn/api/stockph/simple/f10/" + e,
      h = await this.fetchData(g, f);
    return h?.["data"] || null;
  }
  async ["getCompanyHighlights"](e, f) {
    const g = e.startsWith("6") ? "17" : "33",
      h = "https://basic.10jqka.com.cn/basicapi/company_info/merge_info/v1/base_info/?code=" + e + "&market=" + g + "&type=stock",
      i = await this.fetchData(h, f);
    return i?.["data"] || null;
  }
  ["renderCompanyHighlights"](e) {
    if (!e?.["describe"] || !this.filterSettings.filterCompanyInfo) return "";
    return "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">公司亮点:</span><span class=\"info-content content\">" + e.describe + "</span></div></div>";
  }
  ["renderF10Data"](e) {
    const f = {
      "IbSwx": function (h, i) {
        return h === i;
      },
      "WMWET": "none",
      "Qlseu": "<div class=\"info-section\">",
      "dawFe": function (h, i) {
        return h + i;
      },
      "mlxuc": function (h, i) {
        return h + i;
      },
      "zYERY": "ZOFmT",
      "xgVRe": function (h, i) {
        return h + i;
      },
      "AcRIp": function (h, i) {
        return h > i;
      },
      "vunKD": "<br>",
      "hiMIv": "TaJrZ",
      "HfBNy": "</div>",
      "HkYDS": function (h, i) {
        return h !== i;
      },
      "iCTCk": "xuXPk",
      "nxmse": "ZDVlm",
      "UkrSM": function (h, i) {
        return h !== i;
      },
      "DybqF": "0.00股",
      "WpEwx": "GimsH"
    };
    if (!e) return "";
    let g = "";
    if (this.filterSettings.filterIndustry) {
      g += "<div class=\"info-section\">";
      const h = e.industry.tip + " " + e.area.info,
        i = h.lastIndexOf(" ");
      if (i !== -1) {
        {
          const k = h.substring(0, i),
            l = h.substring(i + 1),
            m = k.length + l.length > 15;
          g += "<div class=\"info-row\"><span class=\"info-title title\">行业地域:</span><span class=\"info-content content\">" + k + (m ? "<br>" : " ") + "<span style=\"color: var(--highlight);\">" + l + "</span></span></div>";
        }
      } else g += "<div class=\"info-row\"><span class=\"info-title title\">行业地域:</span><span class=\"info-content content\">" + h + "</span></div>";
      this.filterSettings.filterMainBusiness && (g += "<div class=\"info-row\"><span class=\"info-title title\">主营业务:</span><span class=\"info-content content\">" + e.mainproduct.info + "</span></div>");
      g += "</div>";
    }
    this.filterSettings.filterRestricted && e.restricted.info !== "--" && (g += "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">最近解禁:</span><span class=\"info-content content\">" + e.restricted.info + " " + (e.restrictedtype.info !== "--" ? e.restrictedtype.info : "") + "</span></div><div class=\"info-row\"><span class=\"info-title title\">解禁数量:</span><span class=\"info-content content\">" + e.restrictednum.info + "</span></div><div class=\"info-row\"><span class=\"info-title title\">占总股本:</span><span class=\"info-content content\">" + e.restrictedpercent.info + "</span></div></div>");
    this.filterSettings.filterRestricted && e.pledge.info !== "--" && e.pledge.info !== "0.00股" && (g += "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">总质押:</span><span class=\"info-content content\">" + e.pledge.info + "</span></div><div class=\"info-row\"><span class=\"info-title title\">占总股本:</span><span class=\"info-content content\">" + e.pledgepercent.info + "</span></div></div>");
    if (this.filterSettings.filterReduce && e.reducerate.info !== "--") {
      g += "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">减持计划:</span><span class=\"info-content content\">" + e.reduceplan.info.split("、")[0] + "</span></div><div class=\"info-row\"><span class=\"info-title title\">减持期间:</span><span class=\"info-content content\">" + e.reducestart.info + "-" + e.reduceend.info + "</span></div><div class=\"info-row\"><span class=\"info-title title\">合计减持:</span><span class=\"info-content content\">" + e.reducetotal.info + "</span></div><div class=\"info-row\"><span class=\"info-title title\">占总股本:</span><span class=\"info-content content\">" + e.reducerate.info + "</span></div></div>";
    }
    return g;
  }
  ["renderEvents"](e) {
    if (!e || !e.length) return "";
    const g = e.sort((i, j) => new Date(j.date || 0) - new Date(i.date || 0));
    let h = "<div class=\"info-section\">";
    g.forEach(i => {
      const j = {
        "hjFJk": "hidden",
        "QYREO": function (n, o) {
          return n !== o;
        },
        "Yxkxe": "AbortError",
        "FFSFw": "获取成分股失败",
        "wzQrp": "exdGc",
        "dFkoc": function (n, o) {
          return n === o;
        },
        "JQLQu": function (n, o) {
          return n === o;
        },
        "gRAFE": "dNKhg",
        "phdLR": function (n, o) {
          return n < o;
        },
        "bcCpd": function (n, o) {
          return n - o;
        },
        "VvHat": function (n, o) {
          return n - o;
        }
      };
      if (!i || i.catename === "异动解读") return;
      let k = false;
      switch (i.catename) {
        case "异动分析":
          if (this.filterSettings.filterPerformance) k = true;
          break;
        case "业绩披露":
          if (this.filterSettings.filterDisclosure) k = true;
          break;
        default:
          if (this.filterSettings.filterEvents) k = true;
          break;
      }
      if (!k) return;
      const l = i.catename?.["slice"](0, 4) || "";
      h += "<div class=\"info-row\"><span class=\"info-title title\">" + l + ":</span><span class=\"info-content content\" style=\"color: var(--highlight);\">" + (i.date || "") + "</span></div>";
      const m = n => n.split("\n").forEach(o => {
        {
          if (o.trim()) h += "<div class=\"event-content\">" + o.trim() + "</div>";
        }
      });
      if (i.catename === "异动分析") {
        if (i.content) {
          {
            const o = i.content.split("\n");
            o.forEach((p, q) => {
              p.trim() && (q === 0 && i.keywordList?.["length"] && (h += "<div class=\"event-content\"><span style=\"color: var(--positive);\">" + i.keywordList.join("、") + "</span></div>"), h += "<div class=\"event-content\">" + p.trim() + "</div>");
            });
          }
        } else {
          if (i.reason) {
            m(i.reason);
          }
        }
      } else {
        if (i.content) m(i.content);
      }
      if (i.desc) m(i.desc);
      if (i.reason && !i.content) m(i.reason);
    });
    h += "</div>";
    return h;
  }
  async ["getFundHoldings"](e, f) {
    const h = new Date(),
      i = h.getFullYear(),
      j = h.getMonth(),
      k = (p, q) => {
        if (q < 3) return [p - 1 + "-12-31", p - 1 + "-09-30"];
        if (q < 6) return [p + "-03-31", p - 1 + "-12-31"];
        if (q < 9) return [p + "-06-30", p + "-03-31"];
        return [p + "-09-30", p + "-06-30"];
      },
      [l, m] = k(i, j),
      n = async p => {
        {
          const r = "https://basic.10jqka.com.cn/basicapi/holder/stock/org_holder/detail?code=" + e + "&date=" + p + "&page=1&size=100&type=015003";
          try {
            const s = await this.fetchData(r, f);
            if (s?.["status_code"] === 0 && Array.isArray(s.data?.["data"]) && s.data.data.length > 0) {
              let t = 0,
                u = 0;
              s.data.data.forEach(w => {
                t += parseFloat(w.holder_num);
                u += parseFloat(w.holder_market_value);
              });
              const v = (w, x, y) => w >= 100000000 ? (w / 100000000).toFixed(2) + y : (w / 10000).toFixed(2) + x;
              return {
                "totalSharesStr": v(t, "万股", "亿股"),
                "totalValueStr": v(u, "万元", "亿元")
              };
            }
          } catch (w) {
            {
              if (w.name !== "AbortError") {}
            }
          }
          return null;
        }
      };
    let o = await n(l);
    if (!o) {
      o = await n(m);
    }
    return o;
  }
  ["escapeHtml"](e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  async ["updateData"]() {
    if (this.abortController) this.abortController.abort();
    this.abortController = new AbortController();
    const f = this.abortController.signal;
    if (!this.currentCode) this.currentCode = await this.getStockCode();
    if (!this.currentCode) {
      document.getElementById("debug-info").textContent = "获取股票代码失败";
      return;
    }
    this.conceptStocksCache = {};
    document.getElementById("debug-info").textContent = "正在按需获取 " + this.currentCode + " 的数据...";
    try {
      const g = await this.getPrimaryStockData(this.currentCode, f);
      if (!g) {
        document.getElementById("debug-info").textContent = "获取" + this.currentCode + "核心数据失败";
        return;
      }
      this.currentName = g.name || "";
      this.circulationAmount = g.real?.["circulation_amount"] || 0;
      this.circulationValue = g.real?.["circulation_value"] || 0;
      this.actualCirculationValue = g.real?.["actualcirculation_value"] || 0;
      let h = {};
      this.filterSettings.filterPremiumGenes && g.YJJY && (h = {
        "ztcs": g.YJJY[0],
        "yjcs": g.YJJY[1],
        "chl": g.YJJY[2],
        "sfl": g.YJJY[3],
        "lbl": g.YJJY[5]
      });
      const i = this.filterSettings.filterIndustry || this.filterSettings.filterMainBusiness || this.filterSettings.filterRestricted || this.filterSettings.filterReduce || this.filterSettings.filterSimpleConcepts,
        [j, k, l, m, n, o, p, q, r] = await Promise.all([this.filterSettings.filterConcepts ? this.fetchConceptsWithMargin(this.currentCode, f) : Promise.resolve(null), this.filterSettings.filterPerformance || this.filterSettings.filterAnomalySummary ? this.getStockEvents(this.currentCode, f) : Promise.resolve([]), this.filterSettings.filterEvents ? this.getOtherStockEvents(this.currentCode, f) : Promise.resolve([]), this.filterSettings.filterDisclosure ? this.getPerformanceEvents(this.currentCode, f) : Promise.resolve([]), i ? this.getStockF10(this.currentCode, f) : Promise.resolve(null), this.filterSettings.filterCompanyInfo ? this.getCompanyHighlights(this.currentCode, f) : Promise.resolve(null), this.filterSettings.filterRank ? this.getStockRank(this.currentCode, f) : Promise.resolve("--"), this.filterSettings.filterFundHolding ? this.getFundHoldings(this.currentCode, f) : Promise.resolve(null), this.filterSettings.filterPremiumGenes ? this.getTdxData(this.currentCode, f) : Promise.resolve(null)]);
      this.premiumGenes = r ? {
        ...h,
        ...r
      } : h;
      const s = [...(k || []), ...(l || []), ...(m || [])];
      document.getElementById("current-stock").textContent = this.currentName ? this.currentCode + " " + this.currentName : this.currentCode;
      const t = x => (x / 100000000).toFixed(1),
        u = this.filterSettings.filterRank ? "<div class=\"info-section\" style=\"margin-top: 0px;\"><div class=\"info-row\"><span class=\"title\">股票名称:<span style=\"margin-left: 7px; color: var(--highlight);\">" + this.currentName + "</span><span style=\"display: inline-block; width: 4px;\"></span>A股排名:<span style=\"margin-left: 0px; color: var(--highlight); background-color: #003366; padding: 1px 1px; border-radius: 3px;\">" + p + "</span>名</span></div>" + (this.filterSettings.filterCirculation ? "<div class=\"info-row circulation-info\" style=\"display: flex; justify-content: space-between;\"><div style=\"flex: 1;\"><span class=\"title\"><span class=\"long-text\">流通股本:</span><span class=\"short-text\">流本:</span></span><span style=\"color: var(--highlight);\">" + t(this.circulationAmount) + "亿</span></div><div style=\"flex: 1;\"><span class=\"title\"><span class=\"long-text\">流通市值:</span><span class=\"short-text\">流值:</span></span><span style=\"color: var(--highlight);\">" + t(this.circulationValue) + "亿</span></div><div style=\"flex: 1;\"><span class=\"title\"><span class=\"long-text\">实际流通:</span><span class=\"short-text\">实流:</span></span><span style=\"color: var(--highlight);\">" + t(this.actualCirculationValue) + "亿</span></div></div>" : "") + "</div>" : "";
      let v = "";
      if (q && this.filterSettings.filterFundHolding) {
        const x = q.totalSharesStr.match(/([\d\.]+)([万亿股]+)/),
          y = q.totalValueStr.match(/([\d\.]+)([万亿万元]+)/);
        v = "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">基金持股:</span><span class=\"info-content content\"><span style=\"color:#00FFFF\">" + (x ? x[1] : "") + "</span><span style=\"color:#999\">" + (x ? x[2] : "") + "</span><span style=\"color:#00FFFF; margin-left: 8px;\">" + (y ? y[1] : "") + "</span><span style=\"color:#999\">" + (y ? y[2] : "") + "</span></span></div></div>";
      }
      const w = this.extractAnomalySummary(k);
      this.container.innerHTML = "\n                " + u + "\n                " + v + "\n                " + this.renderPremiumGenes() + "\n                " + this.renderCompanyHighlights(o) + "\n                " + this.renderF10Data(n) + "\n                " + this.renderAnomalySummary(w) + "\n                " + (this.filterSettings.filterSimpleConcepts ? this.renderSimpleConcepts(n) : "") + "\n                " + this.renderConcepts(j) + "\n                " + this.renderEvents(s) + "\n            ";
      this.container.scrollTop = 0;
      document.getElementById("debug-info").textContent = this.currentCode + " " + this.currentName + " 数据获取成功";
    } catch (z) {
      {
        if (z.name !== "AbortError") document.getElementById("debug-info").textContent = "获取" + this.currentCode + "数据失败: " + z.message;else {}
      }
    }
  }
  ["renderSimpleConcepts"](e) {
    if (!e?.["blocks"]?.["info"] || !this.filterSettings.filterSimpleConcepts) return "";
    return "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">简版概念:</span><span class=\"info-content content\">" + e.blocks.info + "</span></div></div>";
  }
  ["renderConcepts"](e) {
    if (!e?.["length"] || !this.filterSettings.filterConcepts) return "";
    let g = "<div class=\"info-section\"><span class=\"info-title title\">所属概念:</span><div class=\"concept-list\">";
    e.forEach((h, i) => {
      const j = h.matchedBlock?.["margin_of_increase"] || 0,
        k = (j * 100).toFixed(2),
        l = j >= 0 ? "positive" : "negative";
      g += "\n                <div class=\"concept-item\">\n                    <div class=\"concept-header\">\n                        <div class=\"concept-left\"><span class=\"concept-name\">" + h.concept_name + "</span></div>\n                        <div class=\"concept-right\">\n                           <button class=\"collect-concept-stocks\" data-concept-index=\"" + i + "\">+</button>\n                           <span class=\"margin-increase " + l + "\">" + k + "%</span>\n                           <span class=\"detail-btn\" data-explain=\"" + this.escapeHtml(h.concept_explain || "暂无详细解释") + "\">详情</span>\n                        </div>\n                    </div>\n                    <div id=\"explain-" + i + "\" class=\"concept-explain\"></div>\n                    <div id=\"stocks-" + i + "\" class=\"stocks-list\"></div>\n                </div>";
    });
    g += "</div></div>";
    return g;
  }
  ["extractAnomalySummary"](e) {
    if (!e || !e.length || !this.filterSettings.filterAnomalySummary) return "";
    const f = e.find(g => g.catename === "异动分析");
    if (f?.["keywordList"]?.["length"]) return "<span style=\"color: var(--positive);\">" + f.keywordList.join("、") + "</span>";
    return "";
  }
  ["renderAnomalySummary"](e) {
    if (!e || !this.filterSettings.filterAnomalySummary) return "";
    return "<div class=\"info-section\"><div class=\"info-row\"><span class=\"info-title title\">异动简析:</span><span class=\"info-content content\">" + e + "</span></div></div>";
  }
  ["setupConceptEvents"]() {
    if (this.eventHandlerAttached) return;
    this.container.addEventListener("click", f => {
      const g = f.target,
        h = g.closest(".concept-item");
      if (!h) return;
      const i = h.parentNode,
        j = Array.from(i.children).indexOf(h);
      if (g.matches(".collect-concept-stocks")) {
        f.stopPropagation();
        this.collectAndCopy(j);
        return;
      }
      if (g.matches(".detail-btn")) {
        f.stopPropagation();
        const l = h.querySelector(".concept-explain"),
          m = g.getAttribute("data-explain");
        l.classList.contains("active") ? (l.classList.remove("active"), l.innerHTML = "") : (this.container.querySelectorAll(".concept-explain.active").forEach(n => {
          n.classList.remove("active");
          n.innerHTML = "";
        }), l.classList.add("active"), l.innerHTML = "<div style=\"white-space: pre-line;\">" + m + "</div>");
        return;
      }
      const k = h.querySelector(".stocks-list");
      k.classList.contains("active") ? k.classList.remove("active") : (this.container.querySelectorAll(".stocks-list.active").forEach(n => n.classList.remove("active")), this.getConceptStocks(j, k));
    });
    this.eventHandlerAttached = true;
  }
  async ["collectAndCopy"](e) {
    const f = {
        "HPQej": "debug-info",
        "vFRkX": "AbortError",
        "dbGva": "active",
        "LoHsq": "div",
        "rYAmY": "none",
        "VDKUi": function (j, k) {
          return j === k;
        },
        "SEbvU": function (j, k) {
          return j !== k;
        },
        "BllSW": "NPXUT",
        "HGmTV": "wACwu",
        "pgdfH": function (j, k) {
          return j(k);
        },
        "OJXVy": "没有可收集的股票。",
        "iZZys": function (j, k) {
          return j > k;
        },
        "gVDlS": "glWeB",
        "uLPiJ": "LTxMp",
        "YZhoq": "YRcsB",
        "rahyw": "QvBJf",
        "KVYHb": "faRop",
        "GmpOH": "ZlpMC",
        "PNaIm": "textarea",
        "qLvrR": "fixed",
        "bdPtb": "-9999px",
        "bQioq": "WgeAL"
      },
      g = document.createElement("div");
    g.style.display = "none";
    const h = await this.getConceptStocks(e, g, false);
    if (!h || h.length === 0) {
      {
        alert("没有可收集的股票。");
        return;
      }
    }
    const i = h.map(k => {
      const l = k.stock_code.replace(/^(sz|sh|bj)?/, "");
      if (l.startsWith("6")) return "1#" + l;
      if (l.startsWith("0") || l.startsWith("3")) return "0#" + l;
      if (l.startsWith("4") || l.startsWith("8") || l.startsWith("9")) return "2#" + l;
      return null;
    }).filter(Boolean);
    if (i.length > 0) {
      const k = i.join("|"),
        l = "http://www.treeid/ClipBoardtoBlock";
      try {
        await navigator.clipboard.writeText(k);
        window.location.href = l;
      } catch (n) {
        try {
          {
            const o = document.createElement("textarea");
            o.value = k;
            o.style.position = "fixed";
            o.style.top = "-9999px";
            document.body.appendChild(o);
            o.select();
            document.execCommand("copy");
            document.body.removeChild(o);
            window.location.href = l;
          }
        } catch (q) {
          alert("自动复制失败，请检查浏览器设置或手动复制。");
        }
      }
    } else {
      alert("没有可收集的股票。");
    }
  }
  ["getStockCodeInner"]() {
    return this.currentCode;
  }
  async ["fetchTradingDay"]() {
    try {
      const f = await fetch("https://dsfwt.10jqka.com.cn/bidding/api/tradingday/startdate/20250101/"),
        g = await f.json();
      if (g.errorCode === 0 && g.data?.["length"] > 0) {
        const h = g.data,
          i = new Date(),
          j = i.getDay(),
          k = i.getHours(),
          l = j === 0 || j === 6;
        if (l) return h[h.length - 1];
        return k < 9 ? h.length > 1 ? h[h.length - 2] : h[h.length - 1] : h[h.length - 1];
      }
    } catch (m) {
      if (m.name !== "AbortError") {}
    }
    return new Date().toISOString().split("T")[0].replace(/-/g, "");
  }
  async ["fetchConceptsWithMargin"](f, g) {
    try {
      const i = await this.fetchTradingDay(),
        [j, k] = await Promise.all([fetch("https://basic.10jqka.com.cn/basicapi/concept/stock_concept_list/?code=" + f, {
          "signal": g
        }), fetch("https://dq.10jqka.com.cn/interval_calculation/block_info/v1/get_block_list", {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "type": 0,
            "history_info": {
              "history_type": "0",
              "start_date": i + "093000",
              "end_date": i + "150000"
            },
            "page_info": {
              "page": 1,
              "page_size": 818
            },
            "sort_info": {
              "sort_field": "0",
              "sort_type": "desc"
            }
          }),
          "signal": g
        })]),
        l = await j.json(),
        m = await k.json();
      if (!l.data || !m.data?.["list"]) return [];
      return l.data.map(n => ({
        ...n,
        "matchedBlock": m.data.list.find(o => o.block_name === n.concept_name)
      })).filter(n => n.matchedBlock).sort((n, o) => o.matchedBlock.margin_of_increase - n.matchedBlock.margin_of_increase);
    } catch (n) {
      {
        if (n.name !== "AbortError") {}
        return [];
      }
    }
  }
  async ["getConceptStocks"](e, f, g = true) {
    const h = {
      "kLArt": function (i, j) {
        return i * j;
      },
      "ySbsn": "300",
      "vlgQO": function (i, j) {
        return i > j;
      },
      "lrSSz": function (i, j) {
        return i > j;
      },
      "klLsi": function (i, j) {
        return i !== j;
      },
      "oZzrg": "YpCPh",
      "GrEdo": function (i, j) {
        return i === j;
      },
      "NHscr": "Ysuzz",
      "tPYZJ": "无法获取成分股",
      "OIBMs": "active",
      "BgYKU": "https://dq.10jqka.com.cn/interval_calculation/stock_info/v1/get_stock_list_by_block",
      "NIPBY": "application/json",
      "QMXxR": function (i, j) {
        return i !== j;
      },
      "vkpmP": "AbortError"
    };
    try {
      {
        const j = this.getLimitUpData(),
          k = this.getBrokenLimitStocks(),
          l = this.getStockCodeInner(),
          m = await this.fetchConceptsWithMargin(l),
          n = m[e],
          o = n?.["matchedBlock"]?.["block_code"],
          p = n?.["matchedBlock"]?.["block_market"];
        if (!o || !p) {
          g && (f.innerHTML = "无法获取成分股", f.classList.add("active"));
          return null;
        }
        const q = await this.fetchTradingDay(),
          r = await fetch("https://dq.10jqka.com.cn/interval_calculation/stock_info/v1/get_stock_list_by_block", {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": JSON.stringify({
              "block_code": o,
              "block_market": p,
              "history_info": {
                "history_type": "0",
                "start_date": q + "093000",
                "end_date": q + "150000"
              },
              "page_info": {
                "page": 1,
                "page_size": 1000
              }
            })
          }),
          s = await r.json(),
          t = s.data.list.filter(v => v.margin_of_increase !== 0).sort((v, w) => w.margin_of_increase - v.margin_of_increase);
        if (g) {
          const [v, w] = await Promise.all([j, k]);
          this.renderConceptStocks(f, t, v, w);
        }
        return t;
      }
    } catch (x) {
      if (x.name !== "AbortError") {}
      g && (f.innerHTML = "获取成分股失败", f.classList.add("active"));
      return null;
    }
  }
  ["renderConceptStocks"](e, f, g, h) {
    const i = {
      "WWlsX": function (j, k) {
        return j === k;
      },
      "ugkbq": function (j, k) {
        return j * k;
      },
      "XUNWB": "positive",
      "pKxiA": "negative",
      "VPkuj": function (j, k) {
        return j + k;
      },
      "sedVn": function (j, k) {
        return j / k;
      },
      "UHZmh": "color: #2196F3;",
      "yrlEH": "QPHWo",
      "JlgLG": function (j, k) {
        return j > k;
      },
      "Jkfpy": "data-code",
      "ftnjL": function (j, k) {
        return j !== k;
      },
      "ocvUx": "Zcuvm",
      "mNOhQ": "qFSnV",
      "YRrpb": function (j, k) {
        return j > k;
      },
      "TEGLu": ".stocks-item",
      "RBFhT": "没有异动股票",
      "uFViS": "active"
    };
    f.length > 0 ? (e.innerHTML = f.map(j => {
      const k = {
        "UmLrX": function (l, m) {
          return l === m;
        }
      };
      {
        const m = j.margin_of_increase * 100,
          n = m >= 0 ? "positive" : "negative",
          o = (j.turnover / 100000000).toFixed(2) + " 亿";
        let p = "";
        const q = this.isLimitUp(j.stock_code, j.margin_of_increase),
          r = h.has(j.stock_code);
        if (r) p = "color: #2196F3;";else {
          if (q) p = "color: #ffcc80;";
        }
        let s = "";
        if (q) {
          {
            const t = g.get(j.stock_code);
            t > 0 && (s = "<span style=\"background-color: #003366; color: #fff; padding: 1px 4px; border-radius: 3px; font-size: 12px;\">" + parseInt(t) + "</span>");
          }
        }
        return "\n                    <div class=\"stocks-item\" data-code=\"" + j.stock_code + "\" style=\"padding-right: 5px;\">\n                        <div class=\"stocks-item-detail\" style=\"display: flex; justify-content: space-between; align-items: center;\">\n                            <div class=\"stock-name-container\" style=\"flex: 1; display: flex; justify-content: space-between; align-items: center; padding-right: 15px;\">\n                                <span class=\"stock-name\" style=\"" + p + "\">" + j.stock_name + "</span>\n                                " + s + "\n                            </div>\n                            <div class=\"stock-metrics\" style=\"display: flex; text-align: right;\">\n                                <span class=\"stock-margin " + n + "\" style=\"width: 80px;\">" + m.toFixed(2) + " %</span>\n                                <span class=\"stock-turnover\" style=\"width: 80px;\">" + o + "</span>\n                            </div>\n                        </div>\n                    </div>";
      }
    }).join(""), e.querySelectorAll(".stocks-item").forEach(j => {
      j.addEventListener("click", function () {
        const k = this.getAttribute("data-code");
        window.location.href = "http://www.treeid/code_" + k;
      });
    })) : e.innerHTML = "没有异动股票";
    e.classList.add("active");
  }
  ["isLimitUp"](e, f) {
    const h = f * 100,
      i = e.replace(/^(sz|sh)?/, "");
    if (i.startsWith("68") || i.startsWith("300")) return h > 19.9;
    if (i.startsWith("0") || i.startsWith("6")) return h > 9.9;
    if (i.startsWith("4") || i.startsWith("8") || i.startsWith("9")) return h > 29.9;
    return false;
  }
  async ["getPrimaryStockData"](e, f) {
    const h = "https://apphwshhq.longhuvip.com/w1/api/index.php?DeviceID=&PhoneOSNew=2&State=1&StockID=" + e + "&Token=&UserID=&VerSion=5.17.0.9&a=GetStockPanKou_Narrow&apiv=w38&c=StockL2Data";
    try {
      const i = await this.fetchData(h, f);
      if (i?.["errcode"] === "0") return i;
    } catch (j) {
      if (j.name !== "AbortError") {}
    }
    return null;
  }
  async ["getTdxData"](e, f) {
    const g = "http://calc.tdx.com.cn:7616/site/pcwebcall_static/dxfx/" + e + "_dxfx.json",
      h = await this.fetchData(g, f);
    if (h?.["zdjy"]) return {
      "gkgl": h.zdjy.gkgl,
      "gkzf": h.zdjy.gkzf,
      "pjzf": h.zdjy.pjzf
    };
    return null;
  }
  ["renderPremiumGenes"]() {
    if (!this.filterSettings.filterPremiumGenes) return "";
    let {
      ztcs: f,
      yjcs: g,
      chl: h,
      sfl: i,
      lbl: j,
      gkgl: k,
      gkzf: l,
      pjzf: m
    } = this.premiumGenes || {};
    const n = p => !isNaN(Number(p)) ? Number(p).toFixed(2) + "%" : "--",
      o = p => p !== undefined ? p : "--";
    return "\n            <div class=\"info-section\">\n                <div class=\"info-row\" style=\"display: flex; flex-wrap: wrap;\">\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">涨停次数:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + o(f) + "</span></div>\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">溢价5%次数:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + o(g) + "</span></div>\n                </div>\n                <div class=\"info-row\" style=\"display: flex; flex-wrap: wrap;\">\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">高开率:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(k) + "</span></div>\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">平均高开:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(l) + "</span></div>\n                </div>\n                <div class=\"info-row\" style=\"display: flex; flex-wrap: wrap;\">\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">次红率:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(h) + "</span></div>\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">平均涨幅:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(m) + "</span></div>\n                </div>\n                <div class=\"info-row\" style=\"display: flex; flex-wrap: wrap;\">\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">首封率:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(i) + "</span></div>\n                    <div style=\"width: 50%;\"><span class=\"info-title title\">连板率:</span><span class=\"info-content content\" style=\"margin-left: 0px;\">" + n(j) + "</span></div>\n                </div>\n            </div>";
  }
}
new StockViewer();