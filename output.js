//Sun Aug 17 2025 13:17:16 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  function initScript() {
    function createMenu() {
      const element = () => {
        const element = Array.from(document.querySelectorAll(".menu-btn")).find(t => t.textContent.includes("修改UID"));
        e ? e.remove() : setTimeout(e, 300);
      };
      e();
    }
    function handleClick(n) {
      if (n.matches(".menu-container")) {
        n.style.backgroundColor = t.menuContainerBg;
        n.style.padding = "12px";
        n.style.borderRadius = t.borderRadius;
        n.style.boxShadow = "0 0 15px rgba(255, 102, 178, 0.3)";
        n.style.backgroundSize = "200px auto";
        n.style.display = "block";
      }
      if (n.matches(".menu-btn")) {
        n.style.backgroundColor = t.menuBtnBg;
        n.style.color = t.menuBtnColor;
        n.style.border = t.menuBtnBorder;
        n.style.borderRadius = t.borderRadius;
        n.style.padding = "10px 16px";
        n.style.margin = "6px 0";
        n.style.transition = "0.3s";
        n.style.cursor = "pointer";
        n.addEventListener("mouseenter", () => {
          n.style.backgroundColor = t.menuBtnHoverBg;
          n.style.transform = "scale(1.05)";
        });
        n.addEventListener("mouseleave", () => {
          n.style.backgroundColor = t.menuBtnBg;
          n.style.transform = "scale(1)";
        });
      }
      if (n.matches("h2[style*=\"color: #333; margin: 0; font-size: 16px; font-weight: 600;\"]")) {
        n.style.backgroundColor = t.shopPanelBg;
        n.style.padding = "8px";
        n.style.borderRadius = t.borderRadius;
      }
      if (n.matches("#savePanel")) {
        n.style.backgroundColor = t.savePanelBg;
        n.style.color = t.savePanelTextColor;
        n.style.borderRadius = t.borderRadius;
        n.style.padding = "15px";
        n.style.boxShadow = "0 0 15px rgba(90, 42, 111, 0.5)";
      }
      if (n.matches(".save-slot")) {
        n.style.backgroundColor = t.saveSlotBg;
        n.style.border = "1px solid #A77DC2";
        n.style.borderRadius = t.borderRadius;
        n.style.padding = "10px";
        n.style.marginBottom = "10px";
        n.style.transition = "0.3s";
        n.querySelectorAll("div").forEach(e => {
          e.style.color = t.savePanelTextColor;
        });
        n.addEventListener("mouseenter", () => {
          n.style.backgroundColor = t.saveSlotHover;
        });
        n.addEventListener("mouseleave", () => {
          n.style.backgroundColor = t.saveSlotBg;
        });
      }
    }
    const obj = new MutationObserver(t => {
      t.forEach(t => {
        t.addedNodes.forEach(t => {
          if (1 === t.nodeType) {
            n(t);
            t.querySelectorAll(".menu-container, .menu-btn, h2[style*=\"color: #333;\"] , #savePanel, .save-slot").forEach(n);
            e();
          }
        });
      });
    });
    o.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => {
      e();
      document.querySelectorAll(".menu-container, .menu-btn, h2[style*=\"color: #333;\"] , #savePanel, .save-slot").forEach(n);
    }, 800);
  }
  "complete" === document.readyState ? setTimeout(t, 1000) : window.addEventListener("load", () => {
    setTimeout(t, 1000);
  });
}();
(function () {
  const _a = [{
    f: ["V", "B", "X"],
    c: 306
  }, {
    f: ["X", "Q", "1"],
    c: 331
  }, {
    f: ["H", "A", "D"],
    c: 335
  }, {
    f: ["N", "D", "M"],
    c: 345
  }, {
    f: ["Q", "B", "2"],
    c: 378
  }, {
    f: ["L", "J", "7"],
    c: 340
  }, {
    f: ["W", "Q", "Z"],
    c: 333
  }, {
    f: ["Z", "K", "8"],
    c: 344
  }, {
    f: ["P", "D", "N"],
    c: 310
  }, {
    f: ["E", "S", "G"],
    c: 332
  }];
  const _b = x => {
    if (!x) {
      return false;
    }
    const y = x.trim().toUpperCase();
    if (!/^TT-[A-Z0-9]{8}-[A-Z0-9]{8}$/.test(y)) {
      return false;
    }
    const z = [y[3], y[9], y[15]];
    let s = 0;
    for (let i = 0; i < y.length; i++) {
      s += y.charCodeAt(i);
    }
    return _a.some(r => r.f.every((c, d) => z[d] === c) && s % 1000 === r.c % 1000);
  };
  const _c = () => {
    const element = localStorage.getItem("_km_expiry");
    return e && Date.now() < parseInt(e);
  };
  const _d = () => {
    if (_c()) {
      return true;
    }
    localStorage.removeItem("_km_expiry");
    const f = () => {
      const g = prompt("请输入卡密（闲鱼：天天资源铺）：");
      if (g === null) {
        alert("必须输入有效卡密才能使用插件");
        return f();
      }
      if (_b(g)) {
        const h = Date.now() + 604800000;
        localStorage.setItem("_km_expiry", h.toString());
        alert("✅ 授权成功！插件已激活，有效期7天如过期请联系闲鱼");
        return true;
      } else {
        alert("❌ 卡密无效！请联系闲鱼：天天资源铺");
        return true;
      }
    };
    return true;
  };
  const _e = _d();
  const _f = setInterval(() => {
    if (!_c()) {
      clearInterval(_f);
      localStorage.removeItem("_km_expiry");
      alert("您的授权已过期，请联系闲鱼：天天资源铺");
      location.reload();
    }
  }, 3600000);
  if (_e) {
    console.log("插件核心功能已启动");
  }
})();
const target = "缘";
function watchAndReplace() {
  const selectors = ["h2[style*=\"color: #333; margin: 0; font-size: 16px; font-weight: 600;\"]", ".save-slot > div > div:first-child"];
  function replaceText(element) {
    if (element.matches(selectors[0]) || element.matches(selectors[1])) {
      element.textContent = target;
    }
  }
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          selectors.forEach(selector => {
            node.querySelectorAll(selector).forEach(replaceText);
            if (node.matches(selector)) {
              replaceText(node);
            }
          });
        }
      });
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(replaceText);
  });
}
watchAndReplace();
(function () {
  const _0x2873c2 = function () {
    let _0x497257 = true;
    return function (_0xec9169, _0x303afc) {
      const _0x40df97 = _0x497257 ? function () {
        if (_0x303afc) {
          {
            const _0x4cc248 = _0x303afc.apply(_0xec9169, arguments);
            _0x303afc = null;
            return _0x4cc248;
          }
        }
      } : function () {};
      _0x497257 = false;
      return _0x40df97;
    };
  }();
  "use strict";
  function _0x3a7fc3() {
    const _0x67f90d = _0x2873c2(this, function () {
      const _0x3f5246 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      const _0x4daa4b = function () {
        const _0x32ffb2 = new _0x3f5246.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
        return !_0x32ffb2.test(_0x67f90d);
      };
      return _0x4daa4b();
    });
    _0x67f90d();
    {
      {
        const _0x1909f7 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let _0x5fcd94;
        while (_0x5fcd94 = _0x1909f7.nextNode()) {
          {
            if (_0x5fcd94.textContent.includes("にこにこ")) {
              {
                {
                  _0x5fcd94.textContent = _0x5fcd94.textContent.replace(/にこにこ/g, "にこにこ");
                }
              }
            }
          }
        }
      }
    }
  }
  _0x3a7fc3();
  const _0x14e319 = {
    childList: true,
    subtree: true
  };
  new MutationObserver(_0x3a7fc3).observe(document.body, _0x14e319);
  if (typeof _0xodF !== "undefined" && _0xodF.includes("にこにこ")) {
    {
      _0xodF = _0xodF.replace("にこにこ", "にこにこ");
    }
  }
})();
(function (_0x3d4519) {
  const _0x5d99cc = function () {
    {
      {
        let _0x3551f1 = true;
        return function (_0x431bde, _0x59660c) {
          {
            const _0x4f66df = _0x3551f1 ? function () {
              {
                if (_0x59660c) {
                  const _0x54bf58 = _0x59660c.apply(_0x431bde, arguments);
                  _0x59660c = null;
                  return _0x54bf58;
                }
              }
            } : function () {};
            _0x3551f1 = false;
            return _0x4f66df;
          }
        };
      }
    }
  }();
  const _0x2ed550 = _0x5d99cc(this, function () {
    {
      const _0x55abcc = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      const _0xc71271 = function () {
        {
          const _0x4de67e = new _0x55abcc.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
          return !_0x4de67e.test(_0x2ed550);
        }
      };
      return _0xc71271();
    }
  });
  _0x2ed550();
  let _0x517d91 = false;
  const _0x52755f = window.requestAnimationFrame;
  window.requestAnimationFrame = function (_0x571000) {
    {
      {
        if (_0x571000.name == "f") {
          return;
        }
        return _0x52755f(_0x571000);
      }
    }
  };
  const _0x5f004b = {
    get: function () {
      {
        return window.hxsj;
      }
    },
    set: function (_0x519631) {
      {
        {
          window.hxsj = _0x519631;
          if (!_0x519631) {
            return;
          }
        }
      }
    }
  };
  Object.defineProperty(Object.prototype, "scene", _0x5f004b);
  const _0x3f2a22 = {
    SLOT_COUNT: 20,
    DEFAULT_UID: "1",
    STORAGE_PREFIX: "cg_save_",
    GAME_ID_UNKNOWN: "unknown"
  };
  let _0x49952c = localStorage.getItem("desiredUid") || _0x3f2a22.DEFAULT_UID;
  let _0x43c2f4 = localStorage.getItem("lc") || "100";
  let _0x19331b = _0x4b2404();
  let _0x4f4d88 = "none";
  function _0x4b2404() {
    {
      const _0x3080c4 = window.location.pathname;
      const _0x102aff = _0x3080c4.match(/\/h5\/(\d+)/);
      return _0x102aff ? _0x102aff[1] : _0x3f2a22.GAME_ID_UNKNOWN;
    }
  }
  const _0x907fde = () => {
    if (typeof window.getUserData === "function") {
      const _0x5be8d7 = window.getUserData;
      window.getUserData = function () {
        const _0x259b46 = _0x5be8d7 ? _0x5be8d7() : {};
        _0x259b46.uid = parseInt(_0x49952c);
        _0x259b46.isLogin = true;
        const _0x2f9ac3 = parseInt(_0x43c2f4);
        ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(_0x2d59ad => {
          {
            _0x259b46[_0x2d59ad] = _0x2f9ac3;
          }
        });
        return _0x259b46;
      };
    } else {
      setTimeout(_0x907fde, 100);
    }
  };
  const _0x3e7d58 = () => {
    const _0x339d95 = document.createElement("div");
    _0x339d95.id = "shopPanel";
    _0x339d95.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 320px;\n      max-height: 70vh;\n      background: white;\n      border-radius: 12px;\n      padding: 20px;\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n      border: 1px solid rgba(0,0,0,0.05);\n      font-family: 'Helvetica Neue', Arial, sans-serif;\n      overflow-y: auto;\n    ";
    _0x339d95.innerHTML = "\n      <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;\">\n        <h2 style=\"color: #333; margin: 0; font-size: 16px; font-weight: 600;\">tokunoの商城面板🚫二传倒卖QQ3291840016</h2>\n        <button id=\"closeShopPanel\" style=\"background: none; border: none; font-size: 20px; cursor: pointer; color: #999;\">×</button>\n      </div>\n      <div id=\"shopItemsContainer\" style=\"display: flex; flex-direction: column; gap: 10px;\"></div>\n    ";
    document.body.appendChild(_0x339d95);
    document.getElementById("closeShopPanel").onclick = () => {
      _0x339d95.style.display = "none";
    };
    return _0x339d95;
  };
  const _0x318a07 = () => {
    const _0x504927 = document.getElementById("shopItemsContainer");
    if (!_0x504927) {
      return;
    }
    _0x504927.innerHTML = "";
    if (window.hxsj && window.hxsj.mallItems) {
      window.hxsj.mallItems.forEach(_0x30638b => {
        const _0x35c131 = document.createElement("div");
        _0x35c131.style.cssText = "\n          padding: 12px;\n          background: white;\n          border-radius: 8px;\n          border: 1px solid rgba(0,0,0,0.05);\n          cursor: pointer;\n          transition: all 0.2s;\n        ";
        _0x35c131.innerHTML = "\n          <div style=\"font-weight: 600; color: #333; font-size: 14px;\">" + _0x30638b.itemData.itemName + "</div>\n          <button style=\"margin-top: 8px; width: 100%; padding: 8px; background: #f0f0f0; border: none; border-radius: 6px; cursor: pointer; font-size: 13px;\">购买</button>\n        ";
        _0x35c131.querySelector("button").onclick = () => {
          {
            const _0x5534de = prompt("请输入购买数量(1-99):", "1");
            if (_0x5534de && !isNaN(_0x5534de)) {
              const _0x242772 = parseInt(_0x5534de);
              _0x242772 >= 1 && _0x242772 <= 99 ? (window.hxsj.successPurchase(_0x30638b.itemData.itemId, _0x242772), alert("成功购买 " + _0x30638b.itemData.itemName + " x" + _0x242772)) : alert("请输入1-99之间的数字");
            }
          }
        };
        _0x504927.appendChild(_0x35c131);
      });
    } else {
      {
        _0x504927.innerHTML = "\n        <div style=\"color: #999; text-align: center; padding: 20px;\">\n          请先在游戏中打开商城页面\n        </div>\n      ";
      }
    }
  };
  const _0x151665 = _0x23903e => {
    {
      try {
        {
          const _0x28085c = JSON.parse(_0x23903e);
          if (_0x28085c.Header) {
            return {
              gameName: _0x28085c.Header.Name || "未知游戏",
              storyName: _0x28085c.Header.StoryName || "未知剧情",
              saveTime: _0x28085c.Header.SaveTime ? new Date(_0x28085c.Header.SaveTime).toLocaleString() : "未知时间",
              valid: true
            };
          }
          const _0x16950f = {
            valid: false
          };
          return _0x16950f;
        }
      } catch (_0x2b0686) {
        const _0x58b5e5 = {
          valid: false
        };
        return _0x58b5e5;
      }
    }
  };
  const _0x39e521 = () => {
    {
      try {
        for (const _0x209fdf of Object.keys(localStorage)) {
          {
            if (_0x209fdf.startsWith("save") && _0x209fdf.indexOf(_0x49952c) !== -1) {
              const _0x4586a8 = localStorage.getItem(_0x209fdf);
              if (_0x4586a8) {
                {
                  const _0xd0aec4 = JSON.parse(_0x4586a8);
                  if (_0xd0aec4.Header && _0xd0aec4.Header.StoryName) {
                    {
                      return _0xd0aec4.Header.StoryName;
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x222869) {
        console.error("获取剧情名称失败:", _0x222869);
      }
      return "当前剧情";
    }
  };
  const _0x1eb940 = () => {
    const _0x1b2cd7 = document.getElementById("saveSlotsContainer");
    if (!_0x1b2cd7) {
      return;
    }
    _0x1b2cd7.innerHTML = "";
    for (let _0x58a06e = 1; _0x58a06e <= _0x3f2a22.SLOT_COUNT; _0x58a06e++) {
      {
        const _0x37cb5a = document.createElement("div");
        _0x37cb5a.className = "save-slot";
        _0x37cb5a.style.cssText = "\n        padding: 12px;\n        background: white;\n        border-radius: 8px;\n        border: 1px solid rgba(0,0,0,0.05);\n        cursor: pointer;\n        transition: all 0.2s;\n        margin-bottom: 8px;\n      ";
        const _0x585513 = "" + _0x3f2a22.STORAGE_PREFIX + _0x49952c + "_" + _0x19331b + "_" + _0x58a06e;
        const _0x63674 = localStorage.getItem(_0x585513);
        if (_0x63674) {
          {
            try {
              const _0x3ca3d1 = JSON.parse(_0x63674);
              const _0x5b8789 = _0x151665(JSON.stringify(_0x3ca3d1.data));
              const _0x430c98 = _0x3ca3d1.info?.["customName"] || "未命名存档";
              const _0x3eb219 = _0x3ca3d1.info?.["saveTime"] ? new Date(_0x3ca3d1.info.saveTime).toLocaleString() : "未知时间";
              _0x37cb5a.innerHTML = "\n            <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n              <div style=\"font-weight: 600; color: #333; font-size: 14px;\">tokunoの存档🚫二传倒卖QQ3291840016 " + _0x58a06e + "</div>\n              <div style=\"font-size: 11px; color: #999;\">" + _0x3eb219 + "</div>\n            </div>\n            <div style=\"margin-top: 6px; font-size: 13px; color: #666; \n                 font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">\n              " + _0x430c98 + "\n            </div>\n            <div style=\"margin-top: 2px; font-size: 12px; color: #999; \n                 white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">\n              " + (_0x5b8789.storyName || "当前剧情") + "\n            </div>\n          ";
              _0x37cb5a.onclick = () => {
                if (_0x4f4d88 === "save") {
                  _0x173580(_0x58a06e);
                } else {
                  _0x4f4d88 === "load" && confirm("是否读取存档 " + _0x58a06e + ": " + _0x430c98 + "？") && _0x3aae08(_0x58a06e);
                }
              };
            } catch (_0x59ba46) {
              {
                _0x37cb5a.innerHTML = "\n            <div style=\"color: #ff6b6b; font-size: 14px;\">存档 " + _0x58a06e + " - 数据损坏</div>\n          ";
              }
            }
          }
        } else {
          _0x37cb5a.innerHTML = "\n          <div style=\"color: #999; font-size: 14px; margin-bottom: 5px;\">存档 " + _0x58a06e + "</div>\n          <div style=\"font-size: 13px; color: #ccc;\">空存档位</div>\n        ";
          _0x37cb5a.onclick = () => {
            {
              if (_0x4f4d88 === "save") {
                _0x173580(_0x58a06e);
              } else {
                _0x4f4d88 === "load" && alert("该存档位为空");
              }
            }
          };
        }
        _0x1b2cd7.appendChild(_0x37cb5a);
      }
    }
  };
  const _0x173580 = _0x2873dd => {
    const _0x59dc6c = prompt("请输入存档名称（必填）:", "我的存档 " + _0x2873dd);
    if (_0x59dc6c === null) {
      return;
    }
    if (!_0x59dc6c || _0x59dc6c.trim() === "") {
      alert("存档名称不能为空");
      return;
    }
    if (_0x59dc6c.length > 20) {
      alert("存档名称不能超过20个字符");
      return;
    }
    const _0x5758ad = {};
    for (const _0x3d43f0 of Object.keys(localStorage)) {
      _0x3d43f0.startsWith("save") && _0x3d43f0 !== "saveData" && _0x3d43f0.indexOf(_0x49952c) !== -1 && (_0x5758ad[_0x3d43f0] = localStorage.getItem(_0x3d43f0));
    }
    if (Object.keys(_0x5758ad).length === 0) {
      alert("未检测到当前游戏的存档数据");
      return;
    }
    const _0x266255 = new Date();
    const _0x3980ed = {
      saveTime: _0x266255.getTime(),
      gameName: document.title || "未知游戏",
      storyName: _0x39e521(),
      gameId: _0x19331b,
      customName: _0x59dc6c
    };
    const _0x178d13 = "" + _0x3f2a22.STORAGE_PREFIX + _0x49952c + "_" + _0x19331b + "_" + _0x2873dd;
    const _0x75aab2 = {
      data: _0x5758ad,
      info: _0x3980ed
    };
    localStorage.setItem(_0x178d13, JSON.stringify(_0x75aab2));
    alert("已保存到存档 " + _0x2873dd + ": " + _0x59dc6c);
    _0x1eb940();
  };
  const _0x3aae08 = _0x5b149f => {
    const _0x5b8037 = "" + _0x3f2a22.STORAGE_PREFIX + _0x49952c + "_" + _0x19331b + "_" + _0x5b149f;
    const _0x945044 = localStorage.getItem(_0x5b8037);
    if (!_0x945044) {
      alert("该存档位为空");
      return;
    }
    try {
      const _0x382a7b = JSON.parse(_0x945044);
      for (const _0x117e4d of Object.keys(localStorage)) {
        _0x117e4d.startsWith("save") && _0x117e4d !== "saveData" && _0x117e4d.indexOf(_0x49952c) !== -1 && localStorage.removeItem(_0x117e4d);
      }
      Object.entries(_0x382a7b.data).forEach(([_0x366f02, _0x3cc02a]) => {
        _0x366f02.startsWith("save") && _0x366f02 !== "saveData" && localStorage.setItem(_0x366f02, _0x3cc02a);
      });
      alert("已从存档 " + _0x5b149f + " 读取成功");
      setTimeout(() => location.reload(), 500);
    } catch (_0x19ace7) {
      {
        alert("存档数据损坏");
      }
    }
  };
  const _0x1cb4c2 = () => {
    const _0x19c6a9 = document.createElement("div");
    _0x19c6a9.id = "savePanel";
    _0x19c6a9.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 320px;\n      max-height: 70vh;\n      background: white;\n      border-radius: 12px;\n      padding: 20px;\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n      border: 1px solid rgba(0,0,0,0.05);\n      font-family: 'Helvetica Neue', Arial, sans-serif;\n      overflow-y: auto;\n    ";
    _0x19c6a9.innerHTML = "\n      <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;\">\n        <h2 style=\"color: #333; margin: 0; font-size: 16px; font-weight: 600;\">存档管理</h2>\n        <button id=\"closeSavePanel\" style=\"background: none; border: none; font-size: 20px; cursor: pointer; color: #999;\">×</button>\n      </div>\n      <div style=\"display: flex; gap: 10px; margin-bottom: 15px;\">\n        <button id=\"saveModeBtn\" style=\"flex: 1; padding: 8px; background: " + (_0x4f4d88 === "save" ? "#f0f0f0" : "white") + "; color: #333; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; cursor: pointer; font-size: 13px;\">存档</button>\n        <button id=\"loadModeBtn\" style=\"flex: 1; padding: 8px; background: " + (_0x4f4d88 === "load" ? "#f0f0f0" : "white") + "; color: #333; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; cursor: pointer; font-size: 13px;\">读档</button>\n      </div>\n      <div id=\"saveSlotsContainer\" style=\"display: flex; flex-direction: column; gap: 10px;\"></div>\n    ";
    document.body.appendChild(_0x19c6a9);
    document.getElementById("closeSavePanel").onclick = () => {
      _0x19c6a9.style.display = "none";
      _0x4f4d88 = "none";
    };
    document.getElementById("saveModeBtn").onclick = () => {
      {
        _0x4f4d88 = _0x4f4d88 === "save" ? "none" : "save";
        document.getElementById("saveModeBtn").style.background = _0x4f4d88 === "save" ? "#f0f0f0" : "white";
        _0x1eb940();
      }
    };
    document.getElementById("loadModeBtn").onclick = () => {
      _0x4f4d88 = _0x4f4d88 === "load" ? "none" : "load";
      document.getElementById("loadModeBtn").style.background = _0x4f4d88 === "load" ? "#f0f0f0" : "white";
      _0x1eb940();
    };
    return _0x19c6a9;
  };
  async function _0x1e6c1c() {
    {
      if (document.querySelector("canvas")) {
        {
          async function _0x16806f() {
            {
              {
                window.listVisible = false;
                const _0x20436b = document.createElement("style");
                _0x20436b.textContent = "\n                #base-btn {\n                  background: white;\n                  color: #333;\n                  border: 1px solid rgba(0,0,0,0.1);\n                  border-radius: 8px;\n                  cursor: pointer;\n                  user-select: none;\n                  padding: 8px 16px;\n                  position: fixed;\n                  top: 20px;\n                  left: 20px;\n                  z-index: 1000;\n                  font-weight: 500;\n                  font-size: 14px;\n                  box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n                  font-family: 'Helvetica Neue', Arial, sans-serif;\n                  transition: all 0.2s ease;\n                }\n                \n                #base-btn:hover {\n                  background: #f8f8f8;\n                  transform: translateY(-2px);\n                  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n                }\n                \n                .menu-container {\n                  position: absolute;\n                  display: none;\n                  flex-direction: column;\n                  gap: 6px;\n                  background: white;\n                  border: 1px solid rgba(0,0,0,0.05);\n                  border-radius: 8px;\n                  padding: 10px;\n                  z-index: 999;\n                  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n                  min-width: 120px;\n                }\n                \n                .menu-btn {\n                  background: white;\n                  color: #333;\n                  border: 1px solid rgba(0,0,0,0.05);\n                  border-radius: 6px;\n                  cursor: pointer;\n                  user-select: none;\n                  padding: 8px 12px;\n                  min-width: 100px;\n                  text-align: left;\n                  font-size: 13px;\n                  white-space: nowrap;\n                  transition: all 0.2s ease;\n                }\n                \n                .menu-btn:hover {\n                  background: #f0f0f0;\n                }\n              ";
                document.head.appendChild(_0x20436b);
                const _0x3f720a = document.createElement("button");
                _0x3f720a.id = "base-btn";
                _0x3f720a.textContent = "缘";
                document.body.appendChild(_0x3f720a);
                const _0x4e3e6c = document.createElement("div");
                _0x4e3e6c.className = "menu-container";
                document.body.appendChild(_0x4e3e6c);
                _0x3f720a.onclick = function (_0x40f037) {
                  _0x40f037.stopPropagation();
                  const _0x3cab2e = this.getBoundingClientRect();
                  _0x4e3e6c.style.left = _0x3cab2e.left + "px";
                  _0x4e3e6c.style.top = _0x3cab2e.bottom + 5 + "px";
                  _0x4e3e6c.style.display = _0x4e3e6c.style.display === "flex" ? "none" : "flex";
                };
                const _0x5be4bf = (_0x244c9b, _0x58327a) => {
                  {
                    const _0x9f1beb = document.createElement("button");
                    _0x9f1beb.className = "menu-btn";
                    _0x9f1beb.textContent = _0x244c9b;
                    _0x9f1beb.onclick = _0x58327a;
                    _0x4e3e6c.appendChild(_0x9f1beb);
                    return _0x9f1beb;
                  }
                };
                _0x5be4bf("商城面板", () => {
                  {
                    const _0x4c6f24 = document.getElementById("shopPanel") || _0x3e7d58();
                    _0x4c6f24.style.display = "flex";
                    _0x318a07();
                    _0x4e3e6c.style.display = "none";
                  }
                });
                _0x5be4bf("修改UID", () => {
                  const _0x4485bc = prompt("请输入UID:", _0x49952c);
                  _0x4485bc && !isNaN(_0x4485bc) && (_0x49952c = _0x4485bc, localStorage.setItem("desiredUid", _0x4485bc), alert("UID修改成功"));
                  _0x4e3e6c.style.display = "none";
                });
                _0x5be4bf("修改累充", () => {
                  {
                    const _0xd0fc5 = prompt("请输入鲜花数量:", _0x43c2f4);
                    _0xd0fc5 && !isNaN(_0xd0fc5) && (_0x43c2f4 = _0xd0fc5, localStorage.setItem("lc", _0x43c2f4), alert("鲜花数量修改成功"));
                    _0x4e3e6c.style.display = "none";
                  }
                });
                _0x5be4bf("存档管理", () => {
                  const _0x55d3ab = document.getElementById("savePanel") || _0x1cb4c2();
                  _0x55d3ab.style.display = "flex";
                  _0x1eb940();
                  _0x4e3e6c.style.display = "none";
                });
                _0x5be4bf("全屏开关", () => {
                  {
                    _0x517d91 = !_0x517d91;
                    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
                    _0x4e3e6c.style.display = "none";
                  }
                });
                _0x5be4bf("隐藏菜单", () => {
                  {
                    _0x3f720a.style.display = "none";
                    _0x4e3e6c.style.display = "none";
                  }
                });
                document.addEventListener("click", _0x448a12 => {
                  !_0x4e3e6c.contains(_0x448a12.target) && _0x448a12.target !== _0x3f720a && (_0x4e3e6c.style.display = "none");
                });
              }
            }
          }
          function _0x526141() {
            {
              document.cookie ? _0x16806f() : window.requestAnimationFrame(_0x526141);
            }
          }
          _0x526141();
        }
      } else {
        setTimeout(_0x1e6c1c, 100);
      }
    }
  }
  _0x907fde();
  setTimeout(_0x1e6c1c, 100);
})(GM);