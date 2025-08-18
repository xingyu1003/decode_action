//Mon Aug 18 2025 08:44:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x1e433c = {
  SLOT_COUNT: 20,
  DEFAULT_UID: "1",
  STORAGE_PREFIX: "cg_save_",
  GAME_ID_UNKNOWN: "unknown",
  API_URL: "https://c.66rpg.com/cloud/v4/index/cloud_load"
};
let _0x151067 = localStorage.getItem("desiredUid") || _0x1e433c.DEFAULT_UID;
let _0x49520d = localStorage.getItem("lc") || "100";
let _0x5d142b = _0x3fbf8c();
let _0x3c5540 = "none";
let _0x4fb86a = false;
let _0x36cca6 = 0;
let _0x144483 = false;
let _0x33677d = [];
let _0x517e44 = null;
function _0x50fcf6() {
  let _0x56a8e2 = {
    msg: "ok",
    status: 1,
    data: {
      last_save_time: Math.floor(Date.now() / 1000),
      cloud_data: ""
    }
  };
  if (!_0x144483) {
    _0x144483 = true;
    return _0x56a8e2;
  }
  let _0x2113dc = {};
  const _0x27c183 = "" + _0x1e433c.STORAGE_PREFIX + _0x151067 + "_" + _0x5d142b + "_";
  const _0x2fde31 = localStorage.getItem(_0x27c183);
  let _0x535ca1 = false;
  let _0x31f315 = 1;
  for (const _0x3803f0 of Object.keys(localStorage)) {
    {
      if (_0x3803f0.startsWith(_0x27c183)) {
        _0x535ca1 = true;
        let _0x2aa4ce = localStorage.getItem(_0x3803f0);
        let _0x230b3d = null;
        try {
          _0x230b3d = JSON.parse(_0x2aa4ce);
        } catch (_0x139bcb) {
          _0x1571ce("出出错了+e");
        }
        if (_0x230b3d && _0x230b3d.data) {
          for (const _0x26d7b4 of Object.keys(_0x230b3d.data)) {
            {
              _0x1571ce(JSON.parse(_0x230b3d.data[_0x26d7b4]).Header.Name);
              _0x1571ce(document.title);
              if (_0x26d7b4.includes(_0x230b3d.info.cookieid)) {
                _0x2113dc[_0x31f315] = JSON.parse(_0x230b3d.data[_0x26d7b4]);
                _0x31f315++;
                break;
              }
            }
          }
        }
      }
    }
  }
  if (!_0x535ca1) {
    _0x3f051d("未找到存档", "error");
    return null;
  }
  _0x56a8e2.data.cloud_data = JSON.stringify(_0x2113dc);
  _0x1571ce(_0x56a8e2, "info");
  return _0x56a8e2;
}
function _0x2c9085() {
  const _0x1cbc23 = new Date("2025-08-20");
  const _0x3a4df9 = new Date();
  if (_0x3a4df9.getTime() > _0x1cbc23.getTime()) {
    {
      alert("出错了！请添加qq群：978854483或者请联系闲鱼用户“资源杂货铺”获取最新脚本，非资源杂货铺购买均无售后");
      return null;
    }
  }
  const _0x33a858 = prompt("请输入要进入的存档编号:");
  if (_0x33a858 <= 0) {
    {
      _0x3f051d("未找到存档", "error");
      return null;
    }
  }
  if (_0x33a858 !== null) {
    if (/^\d+$/.test(_0x33a858)) {
      let _0x322d70 = {
        msg: "ok",
        status: 1,
        data: {
          last_save_time: Math.floor(Date.now() / 1000),
          cloud_data: ""
        }
      };
      let _0x3123c5 = {};
      const _0x38a90f = "" + _0x1e433c.STORAGE_PREFIX + _0x151067 + "_" + _0x5d142b + "_";
      const _0x57356a = localStorage.getItem(_0x38a90f);
      let _0x185aef = false;
      let _0x4f1d19 = 1;
      _0x5192d6: for (const _0x20e471 of Object.keys(localStorage)) {
        _0x1571ce(_0x20e471);
        if (_0x20e471.startsWith(_0x38a90f)) {
          {
            if (_0x4f1d19 == _0x33a858) {
              _0x185aef = true;
              let _0x4a8f6a = localStorage.getItem(_0x20e471);
              let _0x433854 = null;
              try {
                _0x433854 = JSON.parse(_0x4a8f6a);
              } catch (_0x4b2656) {
                _0x1571ce("出出错了+e");
              }
              if (_0x433854 && _0x433854.data) {
                {
                  for (const _0x456f7f of Object.keys(_0x433854.data)) {
                    if (_0x456f7f.includes(_0x433854.info.cookieid)) {
                      {
                        _0x3123c5 = JSON.parse(_0x433854.data[_0x456f7f]);
                        break _0x5192d6;
                      }
                    }
                  }
                }
              } else {
                _0x3f051d("出现了异常", "error");
              }
            } else {
              _0x4f1d19++;
            }
          }
        }
      }
      if (!_0x185aef) {
        _0x3f051d("未找到存档", "error");
        return null;
      }
      _0x322d70.data.cloud_data = JSON.stringify(_0x3123c5);
      _0x1571ce(_0x322d70, "info");
      return _0x322d70;
    } else {
      _0x3f051d("未按要求填写，请输入数字", "error");
      return null;
    }
  }
}
const _0x268266 = {
  cloud_data: "{\"1\":{\"Header\":{\"Platform\":\"WEB\",\"Version\":\"1.0.0.0913\",\"Name\":\"魔女与往昔重逢\",\"StoryName\":\"跨年\",\"SaveTime\":1755391934228,\"IsFreeLimit\":0,\"isTimeMallGoods\":0,\"isNameChanged\":0,\"StoryID\":233,\"ver\":\"271\",\"CustomizedData\":[]},\"Thumbnail\":{\"base64\":\"https://c1.cgyouxi.com/website/hfplayer/v3/bin/res/logo/960x540.jpg\",\"cloudImageUrl\":\"https://cloudarchivecdn.cgyouxi.com/131232859/da4bd11493474d7f85591bb38504c93c/pic_0.jpeg\"}}}",
  last_save_time: 1755391935
};
const _0x50dd44 = {
  status: 1,
  msg: "ok",
  data: _0x268266
};
const _0x86edc = {
  status: 304,
  msg: "not modified",
  data: {
    last_save_time: () => Math.floor(Date.now() / 1000)
  }
};
function _0x3f051d(_0x211cba, _0x2cd81e = "info", _0x59b7dc = 3000) {
  const _0x1862b8 = document.getElementById("customNotification");
  if (_0x1862b8) {
    {
      _0x1862b8.remove();
    }
  }
  const _0x4e1297 = document.createElement("div");
  _0x4e1297.id = "customNotification";
  const _0x18ab2e = {
    background: "#10b981",
    color: "white"
  };
  const _0x11f04f = {
    background: "#ef4444",
    color: "white"
  };
  const _0x3755da = {
    background: "#f59e0b",
    color: "white"
  };
  const _0x16aa33 = {
    background: "#3b82f6",
    color: "white"
  };
  const _0x1bd5ec = {
    success: _0x18ab2e,
    error: _0x11f04f,
    warning: _0x3755da,
    info: _0x16aa33
  };
  const _0x22249d = _0x1bd5ec[_0x2cd81e];
  _0x4e1297.style.cssText = "\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      background: " + _0x22249d.background + ";\n      color: " + _0x22249d.color + ";\n      padding: 12px 16px;\n      border-radius: 12px;\n      box-shadow: 0 8px 16px rgba(0,0,0,0.12);\n      z-index: 100000;\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      font-size: 14px;\n      font-weight: 500;\n      max-width: 300px;\n      animation: fadeInRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    ";
  _0x4e1297.textContent = _0x211cba;
  document.body.appendChild(_0x4e1297);
  setTimeout(() => {
    _0x4e1297.style.animation = "fadeOutRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
    setTimeout(() => {
      {
        _0x4e1297.parentNode && _0x4e1297.remove();
      }
    }, 300);
  }, _0x59b7dc);
}
function _0x39dff8(_0x156c93, _0x545380, _0xe85298) {
  const _0x36327b = document.createElement("div");
  _0x36327b.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0,0,0,0.4);\n      z-index: 100001;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      backdrop-filter: blur(8px);\n      animation: fadeIn 0.2s ease;\n    ";
  const _0x2895c5 = document.createElement("div");
  _0x2895c5.style.cssText = "\n      background: white;\n      border-radius: 16px;\n      padding: 24px;\n      max-width: 360px;\n      width: 90%;\n      box-shadow: 0 25px 50px rgba(0,0,0,0.12);\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    ";
  _0x2895c5.innerHTML = "\n      <div style=\"margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #111827;\">确认操作</div>\n      <div style=\"color: #4b5563; font-size: 15px; line-height: 1.5; margin-bottom: 24px;\">" + _0x156c93 + "</div>\n      <div style=\"display: flex; gap: 12px; justify-content: flex-end;\">\n        <button id=\"cancelBtn\" style=\"\n          padding: 10px 16px;\n          background: #f3f4f6;\n          color: #4b5563;\n          border: none;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 14px;\n          font-weight: 500;\n          transition: all 0.2s ease;\n        \">取消</button>\n        <button id=\"confirmBtn\" style=\"\n          padding: 10px 16px;\n          background: #3b82f6;\n          color: white;\n          border: none;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 14px;\n          font-weight: 500;\n          transition: all 0.2s ease;\n        \">确认</button>\n      </div>\n    ";
  _0x36327b.appendChild(_0x2895c5);
  document.body.appendChild(_0x36327b);
  const _0x188be3 = _0x2895c5.querySelector("#cancelBtn");
  const _0x457d9d = _0x2895c5.querySelector("#confirmBtn");
  _0x188be3.onmouseover = () => _0x188be3.style.background = "#e5e7eb";
  _0x188be3.onmouseout = () => _0x188be3.style.background = "#f3f4f6";
  _0x457d9d.onmouseover = () => _0x457d9d.style.background = "#2563eb";
  _0x457d9d.onmouseout = () => _0x457d9d.style.background = "#3b82f6";
  const _0x3d533a = () => {
    _0x36327b.style.animation = "fadeOut 0.2s ease";
    setTimeout(() => _0x36327b.remove(), 200);
  };
  _0x188be3.onclick = () => {
    {
      _0x3d533a();
      if (_0xe85298) {
        _0xe85298();
      }
    }
  };
  _0x457d9d.onclick = () => {
    _0x3d533a();
    if (_0x545380) {
      _0x545380();
    }
  };
  _0x36327b.onclick = _0x24d492 => {
    if (_0x24d492.target === _0x36327b) {
      _0x3d533a();
      if (_0xe85298) {
        _0xe85298();
      }
    }
  };
}
function _0xb5f559(_0x5a2eac, _0x35acac = "", _0x1bf4b3, _0x4d73b2) {
  const _0x28463e = document.createElement("div");
  _0x28463e.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0,0,0,0.4);\n      z-index: 100001;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      backdrop-filter: blur(8px);\n      animation: fadeIn 0.2s ease;\n    ";
  const _0x283204 = document.createElement("div");
  _0x283204.style.cssText = "\n      background: white;\n      border-radius: 16px;\n      padding: 24px;\n      max-width: 360px;\n      width: 90%;\n      box-shadow: 0 25px 50px rgba(0,0,0,0.12);\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    ";
  _0x283204.innerHTML = "\n      <div style=\"margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #111827;\">" + _0x5a2eac + "</div>\n      <input type=\"text\" id=\"inputField\" value=\"" + _0x35acac + "\" style=\"\n        width: 100%;\n        padding: 12px 16px;\n        border: 1px solid #e5e7eb;\n        border-radius: 12px;\n        font-size: 15px;\n        outline: none;\n        transition: all 0.2s ease;\n        margin-bottom: 20px;\n        box-sizing: border-box;\n      \">\n      <div style=\"display: flex; gap: 12px; justify-content: flex-end;\">\n        <button id=\"cancelBtn\" style=\"\n          padding: 10px 16px;\n          background: #f3f4f6;\n          color: #4b5563;\n          border: none;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 14px;\n          font-weight: 500;\n          transition: all 0.2s ease;\n        \">取消</button>\n        <button id=\"confirmBtn\" style=\"\n          padding: 10px 16px;\n          background: #3b82f6;\n          color: white;\n          border: none;\n          border-radius: 10px;\n          cursor: pointer;\n          font-size: 14px;\n          font-weight: 500;\n          transition: all 0.2s ease;\n        \">确认</button>\n      </div>\n    ";
  _0x28463e.appendChild(_0x283204);
  document.body.appendChild(_0x28463e);
  const _0x2a3a97 = _0x283204.querySelector("#inputField");
  const _0x294fd0 = _0x283204.querySelector("#cancelBtn");
  const _0x477f60 = _0x283204.querySelector("#confirmBtn");
  _0x2a3a97.focus();
  _0x2a3a97.select();
  _0x2a3a97.onfocus = () => {
    _0x2a3a97.style.borderColor = "#3b82f6";
    _0x2a3a97.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
  };
  _0x2a3a97.onblur = () => {
    _0x2a3a97.style.borderColor = "#e5e7eb";
    _0x2a3a97.style.boxShadow = "none";
  };
  _0x294fd0.onmouseover = () => _0x294fd0.style.background = "#e5e7eb";
  _0x294fd0.onmouseout = () => _0x294fd0.style.background = "#f3f4f6";
  _0x477f60.onmouseover = () => _0x477f60.style.background = "#2563eb";
  _0x477f60.onmouseout = () => _0x477f60.style.background = "#3b82f6";
  const _0x166992 = () => {
    _0x28463e.style.animation = "fadeOut 0.2s ease";
    setTimeout(() => _0x28463e.remove(), 200);
  };
  const _0x92f9e1 = () => {
    const _0x36a491 = _0x2a3a97.value;
    _0x166992();
    if (_0x1bf4b3) {
      _0x1bf4b3(_0x36a491);
    }
  };
  _0x294fd0.onclick = () => {
    {
      _0x166992();
      if (_0x4d73b2) {
        _0x4d73b2();
      }
    }
  };
  _0x477f60.onclick = _0x92f9e1;
  _0x2a3a97.onkeypress = _0x115c87 => {
    if (_0x115c87.key === "Enter") {
      _0x92f9e1();
    } else {
      if (_0x115c87.key === "Escape") {
        {
          _0x166992();
          if (_0x4d73b2) {
            _0x4d73b2();
          }
        }
      }
    }
  };
  _0x28463e.onclick = _0xa58cbe => {
    if (_0xa58cbe.target === _0x28463e) {
      _0x166992();
      if (_0x4d73b2) {
        _0x4d73b2();
      }
    }
  };
}
function _0x3fbf8c() {
  const _0x2755bf = window.location.pathname;
  const _0x2a8bcc = _0x2755bf.match(/\/h5\/(\d+)/);
  return _0x2a8bcc ? _0x2a8bcc[1] : _0x1e433c.GAME_ID_UNKNOWN;
}
function _0x231766() {
  if (typeof window.getUserData === "function") {
    {
      const _0x3f6948 = window.getUserData;
      window.getUserData = function () {
        {
          const _0x575388 = _0x3f6948 ? _0x3f6948() : {};
          _0x575388.uid = parseInt(_0x151067);
          _0x575388.isLogin = true;
          const _0xac890a = parseInt(_0x49520d);
          ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(_0x3a6ac3 => {
            const _0x3bebcf = {
              value: _0xac890a,
              writable: true
            };
            Object.defineProperty(_0x575388, _0x3a6ac3, _0x3bebcf);
          });
          return _0x575388;
        }
      };
    }
  } else {
    setTimeout(_0x231766, 100);
  }
}
function _0x33748d(_0x385c1d) {
  _0xb5f559("请输入购买数量", "1", _0x2debe2 => {
    if (!_0x2debe2 || isNaN(_0x2debe2)) {
      _0x3f051d("请输入有效数字", "error");
      return;
    }
    const _0x4397f1 = parseInt(_0x2debe2);
    if (_0x4397f1 < 1 || _0x4397f1 > 99) {
      _0x3f051d("只可以输入1-99之间的整数", "error");
      return;
    }
    const _0x2eb07e = _0x385c1d.value;
    if (window.hxsj && window.hxsj.successPurchase) {
      {
        window.hxsj.successPurchase(_0x2eb07e, _0x4397f1);
        _0x3f051d("购买成功 × " + _0x4397f1, "success");
      }
    } else {
      _0x3f051d("购买失败，请先在游戏中打开商城", "error");
    }
  });
}
function _0x294f4() {
  const _0x5f1599 = document.createElement("div");
  _0x5f1599.id = "shopPanel";
  _0x5f1599.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 360px;\n      max-height: 70vh;\n      background: white;\n      border-radius: 20px;\n      padding: 0;\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      box-shadow: 0 25px 50px rgba(0,0,0,0.15);\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      overflow: hidden;\n      animation: fadeIn 0.3s ease;\n    ";
  _0x5f1599.innerHTML = "\n      <div style=\"padding: 20px; border-bottom: 1px solid #f3f4f6;\">\n        <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n          <h2 style=\"color: #111827; margin: 0; font-size: 18px; font-weight: 600;\">商城</h2>\n          <button id=\"closeShopPanel\" style=\"\n            background: transparent;\n            border: none;\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            cursor: pointer;\n            color: #9ca3af;\n            font-size: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.2s ease;\n          \">×</button>\n        </div>\n      </div>\n      <div style=\"flex: 1; padding: 20px; overflow-y: auto;\">\n        <div id=\"shopItemsContainer\" style=\"display: flex; flex-direction: column; gap: 12px;\"></div>\n      </div>\n    ";
  document.body.appendChild(_0x5f1599);
  const _0x14f681 = document.getElementById("closeShopPanel");
  _0x14f681.onmouseover = () => _0x14f681.style.color = "#ef4444";
  _0x14f681.onmouseout = () => _0x14f681.style.color = "#9ca3af";
  _0x14f681.onclick = () => {
    _0x5f1599.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => _0x5f1599.style.display = "none", 300);
  };
  return _0x5f1599;
}
function _0x1827f7() {
  const _0x1680a0 = document.getElementById("shopItemsContainer");
  if (!_0x1680a0) {
    return;
  }
  _0x1680a0.innerHTML = "";
  if (window.hxsj && window.hxsj.mallItems) {
    window.hxsj.mallItems.forEach((_0x4cad99, _0x3959a4) => {
      {
        const _0x28e47e = document.createElement("div");
        _0x28e47e.style.cssText = "\n          padding: 16px;\n          background: #f9fafb;\n          border-radius: 14px;\n          cursor: pointer;\n          transition: all 0.2s ease;\n          animation: fadeIn 0.3s ease " + _0x3959a4 * 0.05 + "s both;\n        ";
        _0x28e47e.innerHTML = "\n          <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;\">\n            <div style=\"font-weight: 600; color: #111827; font-size: 15px;\">" + _0x4cad99.itemData.itemName + "</div>\n            <div style=\"\n              background: #3b82f6;\n              color: white;\n              font-size: 12px;\n              font-weight: 500;\n              padding: 4px 8px;\n              border-radius: 6px;\n            \"></div>\n          </div>\n          <button style=\"\n            width: 100%;\n            padding: 10px;\n            background: #3b82f6;\n            border: none;\n            border-radius: 10px;\n            cursor: pointer;\n            font-size: 14px;\n            font-weight: 500;\n            color: white;\n            transition: all 0.2s ease;\n          \">购买</button>\n        ";
        const _0x382c10 = _0x28e47e.querySelector("button");
        _0x382c10.value = _0x4cad99.itemData.itemId;
        _0x382c10.onmouseover = () => _0x382c10.style.background = "#2563eb";
        _0x382c10.onmouseout = () => _0x382c10.style.background = "#3b82f6";
        _0x28e47e.onmouseover = () => _0x28e47e.style.background = "#f3f4f6";
        _0x28e47e.onmouseout = () => _0x28e47e.style.background = "#f9fafb";
        _0x382c10.onclick = function () {
          {
            _0x33748d(this);
          }
        };
        _0x1680a0.appendChild(_0x28e47e);
      }
    });
  } else {
    {
      _0x1680a0.innerHTML = "\n        <div style=\"\n          color: #6b7280;\n          text-align: center;\n          padding: 24px 16px;\n          background: #f9fafb;\n          border-radius: 12px;\n          font-size: 14px;\n        \">\n          请先在游戏中打开商城页面\n        </div>\n      ";
    }
  }
}
function _0x5e619d() {
  const _0x104a16 = document.createElement("div");
  _0x104a16.id = "logPanel";
  _0x104a16.style.cssText = "\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      width: 400px;\n      height: 300px;\n      background: rgba(0, 0, 0, 0.8);\n      border-radius: 12px;\n      padding: 0;\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      box-shadow: 0 10px 25px rgba(0,0,0,0.2);\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      overflow: hidden;\n      animation: fadeIn 0.3s ease;\n      backdrop-filter: blur(10px);\n    ";
  _0x104a16.innerHTML = "\n      <div style=\"padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;\">\n        <h2 style=\"color: white; margin: 0; font-size: 14px; font-weight: 600;\">开发者日志</h2>\n        <div style=\"display: flex; gap: 8px;\">\n          <button id=\"clearLogBtn\" style=\"\n            background: rgba(255,255,255,0.1);\n            border: none;\n            border-radius: 6px;\n            color: white;\n            padding: 4px 8px;\n            font-size: 12px;\n            cursor: pointer;\n            transition: all 0.2s ease;\n          \">清除</button>\n          <button id=\"closeLogPanel\" style=\"\n            background: transparent;\n            border: none;\n            width: 24px;\n            height: 24px;\n            border-radius: 50%;\n            cursor: pointer;\n            color: rgba(255,255,255,0.6);\n            font-size: 16px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.2s ease;\n          \">×</button>\n        </div>\n      </div>\n      <div id=\"logContent\" style=\"flex: 1; padding: 12px; overflow-y: auto; color: #a3e635; font-size: 12px; font-family: monospace; line-height: 1.5;\">\n        日志记录已启动...\n      </div>\n    ";
  document.body.appendChild(_0x104a16);
  const _0x56743f = document.getElementById("closeLogPanel");
  _0x56743f.onmouseover = () => _0x56743f.style.color = "white";
  _0x56743f.onmouseout = () => _0x56743f.style.color = "rgba(255,255,255,0.6)";
  _0x56743f.onclick = () => {
    _0x104a16.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => _0x104a16.style.display = "none", 300);
  };
  const _0x82739f = document.getElementById("clearLogBtn");
  _0x82739f.onmouseover = () => _0x82739f.style.background = "rgba(255,255,255,0.2)";
  _0x82739f.onmouseout = () => _0x82739f.style.background = "rgba(255,255,255,0.1)";
  _0x82739f.onclick = () => {
    const _0x4868bb = document.getElementById("logContent");
    _0x4868bb && (_0x4868bb.innerHTML = "日志已清除...", _0x33677d = []);
  };
  return _0x104a16;
}
function _0x1571ce(_0x3a3d79, _0x1c1d57 = "info") {
  return;
  const _0x10577c = document.getElementById("logContent");
  if (!_0x10577c) {
    return;
  }
  const _0x3fe5c2 = new Date();
  const _0x3c1473 = _0x3fe5c2.getHours().toString().padStart(2, "0") + ":" + _0x3fe5c2.getMinutes().toString().padStart(2, "0") + ":" + _0x3fe5c2.getSeconds().toString().padStart(2, "0");
  const _0x115838 = {
    info: "#a3e635",
    error: "#ef4444",
    warning: "#f59e0b",
    success: "#10b981",
    api: "#60a5fa"
  };
  const _0x17c733 = document.createElement("div");
  _0x17c733.style.marginBottom = "6px";
  _0x17c733.style.borderLeft = "2px solid " + (_0x115838[_0x1c1d57] || "#a3e635");
  _0x17c733.style.paddingLeft = "8px";
  let _0x519ba9 = "";
  if (typeof _0x3a3d79 === "object") {
    try {
      _0x519ba9 = JSON.stringify(_0x3a3d79, null, 2);
    } catch (_0x33b62c) {
      _0x519ba9 = "[无法序列化的对象]";
    }
  } else {
    _0x519ba9 = _0x3a3d79;
  }
  _0x17c733.innerHTML = "<span style=\"color: rgba(255,255,255,0.5); margin-right: 8px;\">[" + _0x3c1473 + "]</span> <span style=\"color: " + (_0x115838[_0x1c1d57] || "#a3e635") + ";\">" + _0x519ba9 + "</span>";
  _0x10577c.appendChild(_0x17c733);
  _0x10577c.scrollTop = _0x10577c.scrollHeight;
  const _0x501cc5 = {
    time: _0x3c1473,
    message: _0x519ba9,
    type: _0x1c1d57
  };
  _0x33677d.push(_0x501cc5);
  _0x33677d.length > 100 && _0x33677d.shift();
}
function _0x580555() {
  const _0x1202bd = XMLHttpRequest.prototype.open;
  const _0x3be01b = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (_0x46d922, _0x48e134, _0x10c830, _0x188f0b, _0x4897c7) {
    this._method = _0x46d922;
    this._url = _0x48e134;
    this._targetUrl = _0x48e134 && (_0x48e134.includes("/cloud/v4/index/cloud_load?") || _0x48e134.includes("/cloud/v4/index/cloud_load_ex?") || _0x48e134.includes("/cloud/v4/index/cloud_load_data_by_gear?") || _0x48e134.endsWith("/cloud/v4/index/cloud_load") || _0x48e134.endsWith("/cloud/v4/index/cloud_load_ex") || _0x48e134.endsWith("/cloud/v4/index/cloud_load_data_by_gear"));
    return _0x1202bd.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (_0x442fcc) {
    {
      if (this._targetUrl) {
        this.addEventListener("readystatechange", function () {
          {
            if (this.readyState === 4) {
              if (this.status >= 200 && this.status < 300) {
                let _0x51d34d = null;
                if (this._url.includes("cloud_load_data_by_gear")) {
                  let _0x3c302d = _0x2c9085();
                  if (!_0x3c302d) {
                    return;
                  }
                  _0x51d34d = _0x3c302d;
                  _0x1571ce("===== 拦截 gear 请求，使用固定响应 =====", "success");
                } else {
                  _0x51d34d = _0x50fcf6();
                  _0x1571ce("===== 使用自定义响应数据 =====", "success");
                }
                if (_0x51d34d) {
                  _0x1571ce(JSON.stringify(_0x51d34d), "api");
                  Object.defineProperty(this, "responseText", {
                    value: JSON.stringify(_0x51d34d),
                    writable: false
                  });
                  Object.defineProperty(this, "response", {
                    value: JSON.stringify(_0x51d34d),
                    writable: false
                  });
                } else {
                  if (this.responseText) {
                    {
                      _0x1571ce("===== 服务器响应数据 =====", "success");
                      _0x1571ce(this.responseText, "api");
                      try {
                        const _0x1b7f9a = JSON.parse(this.responseText);
                        _0x1571ce("===== JSON格式响应 =====", "success");
                        _0x1571ce(_0x1b7f9a, "api");
                        window._lastCloudLoadResponse = this.responseText;
                      } catch (_0x4696fb) {
                        _0x1571ce("响应不是JSON格式", "warning");
                      }
                    }
                  }
                }
              } else {
                _0x1571ce("请求失败: " + this.status, "error");
              }
            }
          }
        });
      }
      return _0x3be01b.apply(this, arguments);
    }
  };
  _0x1571ce("网络请求拦截器已启动", "success");
}
function _0x1ef036(_0x167b48) {
  try {
    {
      const _0x5ee158 = JSON.parse(_0x167b48);
      if (_0x5ee158.Header) {
        return {
          gameName: _0x5ee158.Header.Name || "未知游戏",
          storyName: _0x5ee158.Header.StoryName || "未知剧情",
          saveTime: _0x5ee158.Header.SaveTime ? new Date(_0x5ee158.Header.SaveTime).toLocaleString() : "未知时间",
          valid: true
        };
      }
      const _0x13fac6 = {
        valid: false
      };
      return _0x13fac6;
    }
  } catch (_0x1254ea) {
    const _0x4f57f6 = {
      valid: false
    };
    return _0x4f57f6;
  }
}
function _0x526c60() {
  try {
    {
      for (const _0x3b7878 of Object.keys(localStorage)) {
        if (_0x3b7878.startsWith("save") && _0x3b7878.indexOf(_0x151067) !== -1) {
          const _0x5c2f1a = localStorage.getItem(_0x3b7878);
          if (_0x5c2f1a) {
            const _0x31b9db = JSON.parse(_0x5c2f1a);
            if (_0x31b9db.Header && _0x31b9db.Header.StoryName) {
              {
                return _0x31b9db.Header.StoryName;
              }
            }
          }
        }
      }
    }
  } catch (_0x597bc3) {
    console.error("获取剧情名称失败:", _0x597bc3);
  }
  return "当前剧情";
}
function _0x1d8104() {
  const _0x1f1e7d = document.createElement("div");
  _0x1f1e7d.id = "savePanel";
  _0x1f1e7d.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 380px;\n      max-height: 75vh;\n      background: white;\n      border-radius: 20px;\n      padding: 0;\n      z-index: 99999;\n      display: none;\n      flex-direction: column;\n      box-shadow: 0 25px 50px rgba(0,0,0,0.15);\n      font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      overflow: hidden;\n      animation: fadeIn 0.3s ease;\n    ";
  _0x1f1e7d.innerHTML = "\n      <div style=\"padding: 20px; border-bottom: 1px solid #f3f4f6;\">\n        <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;\">\n          <h2 style=\"color: #111827; margin: 0; font-size: 18px; font-weight: 600;\">存档管理</h2>\n          <button id=\"closeSavePanel\" style=\"\n            background: transparent;\n            border: none;\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n            cursor: pointer;\n            color: #9ca3af;\n            font-size: 20px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.2s ease;\n          \">×</button>\n        </div>\n      </div>\n      <div style=\"flex: 1; padding: 16px; overflow-y: auto;\">\n        <div id=\"saveSlotsContainer\" style=\"display: flex; flex-direction: column; gap: 10px;\"></div>\n      </div>\n    ";
  document.body.appendChild(_0x1f1e7d);
  const _0x1caa81 = document.getElementById("closeSavePanel");
  _0x1caa81.onmouseover = () => _0x1caa81.style.color = "#ef4444";
  _0x1caa81.onmouseout = () => _0x1caa81.style.color = "#9ca3af";
  _0x1caa81.onclick = () => {
    _0x1f1e7d.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
      _0x1f1e7d.style.display = "none";
    }, 300);
  };
  _0x3c5540 = "save";
  return _0x1f1e7d;
}
function _0x5a8d98() {
  const _0xf98270 = document.getElementById("saveSlotsContainer");
  if (!_0xf98270) {
    return;
  }
  _0xf98270.innerHTML = "";
  for (let _0x32b0aa = 1; _0x32b0aa <= _0x1e433c.SLOT_COUNT; _0x32b0aa++) {
    const _0x140868 = document.createElement("div");
    _0x140868.className = "save-slot";
    _0x140868.style.cssText = "\n        padding: 14px;\n        background: #f9fafb;\n        border-radius: 12px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      ";
    const _0x5d700f = "" + _0x1e433c.STORAGE_PREFIX + _0x151067 + "_" + _0x5d142b + "_" + _0x32b0aa;
    const _0x27c7a7 = localStorage.getItem(_0x5d700f);
    if (_0x27c7a7) {
      {
        try {
          {
            const _0x29cc30 = JSON.parse(_0x27c7a7);
            const _0x5cab1a = _0x1ef036(JSON.stringify(_0x29cc30.data));
            const _0x1cb9a2 = _0x29cc30.info?.["customName"] || "未命名存档";
            const _0x529eec = _0x29cc30.info?.["saveTime"] ? new Date(_0x29cc30.info.saveTime).toLocaleString() : "未知时间";
            _0x140868.innerHTML = "\n            <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;\">\n              <div style=\"font-weight: 600; color: #111827; font-size: 14px;\">存档 " + _0x32b0aa + "</div>\n              <div style=\"font-size: 12px; color: #6b7280;\">" + _0x529eec + "</div>\n            </div>\n            <div style=\"font-size: 13px; color: #4b5563; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">\n              " + _0x1cb9a2 + "\n            </div>\n          ";
            _0x140868.onmouseover = () => _0x140868.style.background = "#f3f4f6";
            _0x140868.onmouseout = () => _0x140868.style.background = "#f9fafb";
            _0x140868.onclick = () => {
              _0x128fc7(_0x32b0aa);
            };
          }
        } catch (_0x401681) {
          _0x140868.innerHTML = "\n            <div style=\"display: flex; align-items: center; gap: 6px;\">\n              <div style=\"color: #ef4444; font-size: 13px; font-weight: 500;\">存档 " + _0x32b0aa + " - 数据损坏</div>\n            </div>\n          ";
        }
      }
    } else {
      {
        _0x140868.innerHTML = "\n          <div style=\"display: flex; align-items: center; gap: 6px; margin-bottom: 4px;\">\n            <div style=\"color: #6b7280; font-size: 14px; font-weight: 500;\">存档 " + _0x32b0aa + "</div>\n          </div>\n          <div style=\"font-size: 12px; color: #9ca3af;\">空存档位</div>\n        ";
        _0x140868.onmouseover = () => _0x140868.style.background = "#f3f4f6";
        _0x140868.onmouseout = () => _0x140868.style.background = "#f9fafb";
        _0x140868.onclick = () => {
          {
            _0x128fc7(_0x32b0aa);
          }
        };
      }
    }
    _0xf98270.appendChild(_0x140868);
  }
}
function _0x128fc7(_0x2230fb) {
  if (!_0x517e44) {
    _0x3f051d("请开始游戏后再存档", "error");
    return;
  }
  _0xb5f559("请输入存档名称", "我的存档 " + _0x2230fb, _0x249465 => {
    if (!_0x249465 || _0x249465.trim() === "") {
      {
        _0x3f051d("存档名称不能为空", "error");
        return;
      }
    }
    if (_0x249465.length > 20) {
      _0x3f051d("存档名称不能超过20个字符", "error");
      return;
    }
    const _0x4a8dbf = {};
    let _0xade412 = false;
    for (const _0x34491c of Object.keys(localStorage)) {
      {
        _0x34491c.startsWith("save") && _0x34491c !== "saveData" && (_0x34491c.includes("_" + _0x151067 + "_") || _0x34491c.includes("uid" + _0x151067) || !_0x34491c.includes("_uid") && !_0x34491c.includes("uid")) && (_0x4a8dbf[_0x34491c] = localStorage.getItem(_0x34491c), _0xade412 = true, _0x36cca6 === 1 && _0x1571ce("收集存档数据: " + _0x34491c, "info"));
      }
    }
    if (!_0xade412) {
      for (const _0x3d37c6 of Object.keys(localStorage)) {
        _0x3d37c6.startsWith("save") && _0x3d37c6 !== "saveData" && (_0x4a8dbf[_0x3d37c6] = localStorage.getItem(_0x3d37c6), _0xade412 = true, _0x36cca6 === 1 && _0x1571ce("收集存档数据: " + _0x3d37c6, "info"));
      }
    }
    if (!_0xade412) {
      _0x3f051d("未检测到游戏存档数据", "warning");
      _0x36cca6 === 1 && _0x1571ce("未检测到游戏存档数据", "warning");
      return;
    }
    const _0x216560 = new Date();
    const _0x378209 = {
      saveTime: _0x216560.getTime(),
      gameName: document.title || "未知游戏",
      storyName: _0x526c60(),
      gameId: _0x5d142b,
      customName: _0x249465,
      uid: _0x151067,
      cookieid: _0x517e44
    };
    const _0x16b13e = "" + _0x1e433c.STORAGE_PREFIX + _0x151067 + "_" + _0x5d142b + "_" + _0x2230fb;
    const _0x14ef78 = {
      data: _0x4a8dbf,
      info: _0x378209
    };
    _0x36cca6 === 1 && (_0x1571ce("===== 存档内容详情 =====", "success"), _0x1571ce("存档信息:", "info"), _0x1571ce(_0x378209, "info"), _0x1571ce("===== 存档数据 =====", "success"), Object.entries(_0x4a8dbf).forEach(([_0x3dedf9, _0x115655]) => {
      _0x1571ce(_0x3dedf9 + ":", "info");
      try {
        const _0x44b4db = JSON.parse(_0x115655);
        _0x1571ce(_0x44b4db, "api");
      } catch (_0x362f92) {
        {
          _0x1571ce(_0x115655, "info");
        }
      }
    }));
    localStorage.setItem(_0x16b13e, JSON.stringify(_0x14ef78));
    _0x36cca6 === 1 && (_0x1571ce("===== 存档保存完成 =====", "success"), _0x1571ce("保存位置: " + _0x16b13e, "success"));
    _0x3f051d("已保存到存档 " + _0x2230fb, "success");
    _0x5a8d98();
  });
}
function _0x2e2e98(_0x163d1a) {
  const _0x1c57b9 = "" + _0x1e433c.STORAGE_PREFIX + _0x151067 + "_" + _0x5d142b + "_" + _0x163d1a;
  const _0x369efb = localStorage.getItem(_0x1c57b9);
  if (!_0x369efb) {
    {
      _0x3f051d("该存档位为空", "warning");
      return;
    }
  }
  try {
    const _0x416465 = JSON.parse(_0x369efb);
    for (const _0x230eb7 of Object.keys(localStorage)) {
      _0x230eb7.startsWith("save") && _0x230eb7 !== "saveData" && _0x230eb7.indexOf(_0x151067) !== -1 && localStorage.removeItem(_0x230eb7);
    }
    Object.entries(_0x416465.data).forEach(([_0x3a5d3f, _0x2cda20]) => {
      {
        if (_0x3a5d3f.startsWith("save") && _0x3a5d3f !== "saveData") {
          {
            localStorage.setItem(_0x3a5d3f, _0x2cda20);
          }
        }
      }
    });
    _0x3f051d("已读取存档 " + _0x163d1a + "，即将刷新页面", "success");
    setTimeout(() => location.reload(), 1500);
  } catch (_0x507f8d) {
    {
      _0x3f051d("存档数据损坏", "error");
    }
  }
}
function _0x409830() {
  if (!document.querySelector("canvas")) {
    setTimeout(_0x409830, 100);
    return;
  }
  const _0x97ca0f = document.createElement("style");
  _0x97ca0f.textContent = "\n      @keyframes fadeIn {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n\n      @keyframes fadeOut {\n        from { opacity: 1; }\n        to { opacity: 0; }\n      }\n\n      @keyframes fadeInRight {\n        from {\n          opacity: 0;\n          transform: translateX(20px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      @keyframes fadeOutRight {\n        from {\n          opacity: 1;\n          transform: translateX(0);\n        }\n        to {\n          opacity: 0;\n          transform: translateX(20px);\n        }\n      }\n\n      @keyframes scaleIn {\n        from {\n          opacity: 0;\n          transform: scale(0.95);\n        }\n        to {\n          opacity: 1;\n          transform: scale(1);\n        }\n      }\n\n      #main-button {\n        position: fixed;\n        top: 20px;\n        left: 20px;\n        z-index: 10000;\n        background: white;\n        border-radius: 12px;\n        padding: 8px 16px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n        transition: all 0.2s ease;\n        border: none;\n        -webkit-tap-highlight-color: transparent;\n        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        font-weight: 600;\n        font-size: 16px;\n        color: #f97316;\n      }\n\n      #main-button:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 6px 16px rgba(0,0,0,0.15);\n      }\n\n      .menu-container {\n        position: fixed;\n        left: 20px;\n        top: 76px;\n        background: white;\n        border-radius: 16px;\n        padding: 8px;\n        z-index: 9999;\n        box-shadow: 0 10px 25px rgba(0,0,0,0.1);\n        min-width: 180px;\n        display: none;\n        animation: scaleIn 0.2s ease;\n      }\n\n      .menu-item {\n        padding: 12px 16px;\n        border-radius: 10px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        font-size: 14px;\n        font-weight: 500;\n        color: #4b5563;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n      }\n\n      .menu-item:hover {\n        background: #f3f4f6;\n        color: #111827;\n      }\n\n      .menu-icon {\n        width: 20px;\n        height: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #6b7280;\n      }\n\n      @media (max-width: 768px) {\n        #main-button {\n          width: 52px;\n          height: 52px;\n        }\n\n        .menu-container {\n          min-width: 200px;\n        }\n\n        .menu-item {\n          padding: 14px 16px;\n          font-size: 15px;\n        }\n      }\n    ";
  document.head.appendChild(_0x97ca0f);
  const _0x1f67b = document.createElement("button");
  _0x1f67b.id = "main-button";
  _0x1f67b.innerHTML = "橙光";
  document.body.appendChild(_0x1f67b);
  const _0x2d3be0 = document.createElement("div");
  _0x2d3be0.className = "menu-container";
  document.body.appendChild(_0x2d3be0);
  const _0x55b21d = () => {
    if (_0x2d3be0.style.display === "block") {
      _0x2d3be0.style.animation = "fadeOut 0.2s ease";
      setTimeout(() => {
        _0x2d3be0.style.display = "none";
      }, 200);
    } else {
      {
        _0x2d3be0.style.display = "block";
        _0x2d3be0.style.animation = "scaleIn 0.2s ease";
      }
    }
  };
  _0x1f67b.addEventListener("click", _0x16fd3b => {
    _0x16fd3b.stopPropagation();
    _0x55b21d();
  });
  const _0x32dfeb = (_0x392476, _0x1c9ae1, _0x22da07) => {
    const _0x260d13 = document.createElement("div");
    _0x260d13.className = "menu-item";
    _0x260d13.innerHTML = "\n        <div class=\"menu-icon\">" + _0x392476 + "</div>\n        <div>" + _0x1c9ae1 + "</div>\n      ";
    _0x260d13.onclick = () => {
      _0x22da07();
      _0x55b21d();
    };
    _0x2d3be0.appendChild(_0x260d13);
    return _0x260d13;
  };
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M3 6H21M3 12H21M3 18H21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "商城", () => {
    {
      const _0x4998d9 = document.getElementById("shopPanel") || _0x294f4();
      _0x4998d9.style.display = "flex";
      _0x1827f7();
    }
  });
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "修改UID", () => {
    _0xb5f559("请输入UID", _0x151067, _0x31bc10 => {
      _0x31bc10 && !isNaN(_0x31bc10) ? (_0x151067 = _0x31bc10, localStorage.setItem("desiredUid", _0x31bc10), _0x3f051d("UID修改成功", "success")) : _0x3f051d("请输入有效的UID", "error");
    });
  });
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "修改累充", () => {
    _0xb5f559("请输入累充数量", _0x49520d, _0x11052f => {
      _0x11052f && !isNaN(_0x11052f) ? (_0x49520d = _0x11052f, localStorage.setItem("lc", _0x49520d), _0x3f051d("累充数量修改成功", "success")) : _0x3f051d("请输入有效的数量", "error");
    });
  });
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 16.9422 19.3 15.3613 19.3H8.63874C7.05778 19.3 5.80647 18.0975 5.70132 16.5193L5 6M10 10V15M14 10V15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "存档管理", () => {
    const _0x1dd016 = document.getElementById("savePanel") || _0x1d8104();
    _0x1dd016.style.display = "flex";
    _0x5a8d98();
  });
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "全屏切换", () => {
    _0x4fb86a = !_0x4fb86a;
    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
  });
  _0x36cca6 === 1 && _0x32dfeb("\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M12 9V13M12 17H12.01M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      ", "显示日志", () => {
    {
      const _0xb57633 = document.getElementById("logPanel") || _0x5e619d();
      _0xb57633.style.display === "flex" ? (_0xb57633.style.animation = "fadeOut 0.3s ease", setTimeout(() => _0xb57633.style.display = "none", 300)) : (_0xb57633.style.display = "flex", _0xb57633.style.animation = "fadeIn 0.3s ease");
    }
  });
  _0x32dfeb("\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M13 10V3L4 14H11V21L20 10H13Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    ", "隐藏菜单", () => {
    {
      _0x1f67b.style.display = "none";
      const _0x37f913 = document.createElement("div");
      _0x37f913.style.cssText = "\n        position: fixed;\n        top: 20px;\n        left: 0;\n        width: 6px;\n        height: 40px;\n        background: #3b82f6;\n        border-radius: 0 4px 4px 0;\n        cursor: pointer;\n        z-index: 1000;\n        transition: all 0.2s ease;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n      ";
      _0x37f913.onmouseover = () => _0x37f913.style.width = "10px";
      _0x37f913.onmouseout = () => _0x37f913.style.width = "6px";
      _0x37f913.onclick = () => {
        _0x37f913.remove();
        _0x1f67b.style.display = "flex";
      };
      document.body.appendChild(_0x37f913);
    }
  });
  document.addEventListener("click", _0x38f9a7 => {
    {
      if (!_0x2d3be0.contains(_0x38f9a7.target) && _0x38f9a7.target !== _0x1f67b) {
        {
          if (_0x2d3be0.style.display === "block") {
            {
              _0x2d3be0.style.animation = "fadeOut 0.2s ease";
              setTimeout(() => {
                _0x2d3be0.style.display = "none";
              }, 200);
            }
          }
        }
      }
    }
  });
}
const _0xecc17c = {
  get: function () {
    return window.hxsj;
  },
  set: function (_0x3a07f6) {
    window.hxsj = _0x3a07f6;
    if (!_0x3a07f6) {
      return;
    }
  }
};
Object.defineProperty(Object.prototype, "scene", _0xecc17c);
const _0x4decd2 = window.requestAnimationFrame;
window.requestAnimationFrame = function (_0xa0e26f) {
  if (_0xa0e26f.name === "f") {
    return;
  }
  return _0x4decd2(_0xa0e26f);
};
function _0x19c9ac() {
  const _0x2345f5 = Object.keys(localStorage);
  _0x2345f5.forEach(_0x2393db => {
    _0x2393db.startsWith("save") && localStorage.removeItem(_0x2393db);
  });
  const _0x3c2712 = Storage.prototype.setItem;
  const _0x5ca7fe = Storage.prototype.removeItem;
  const _0x5f3fd3 = Storage.prototype.clear;
  Storage.prototype.setItem = function (_0x444ff3, _0x443d9b) {
    {
      _0x3c2712.call(this, _0x444ff3, _0x443d9b);
      this === window.localStorage && _0x444ff3.startsWith("save") && window.dispatchEvent(new CustomEvent("localStorageChange", {
        detail: {
          key: _0x444ff3,
          newValue: _0x443d9b,
          oldValue: localStorage.getItem(_0x444ff3)
        }
      }));
    }
  };
  const _0x26174e = {
    once: true
  };
  window.addEventListener("localStorageChange", function (_0x387841) {
    const {
      key: _0x8f45ba,
      newValue: _0x590d17,
      oldValue: _0x4df15f
    } = _0x387841.detail;
    _0x517e44 = _0x8f45ba;
  }, _0x26174e);
  _0x231766();
  if (document.readyState === "complete") {
    {
      setTimeout(_0x409830, 1000);
    }
  } else {
    window.addEventListener("load", () => {
      {
        setTimeout(_0x409830, 1000);
      }
    });
  }
  window.buyItem = _0x33748d;
  _0x580555();
  _0x36cca6 === 1 && setTimeout(() => {
    const _0x31169a = document.getElementById("logPanel") || _0x5e619d();
    _0x31169a.style.display = "flex";
    _0x1571ce("开发者模式已启动", "success");
  }, 1500);
}
_0x19c9ac();