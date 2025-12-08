//Mon Dec 08 2025 02:07:24 GMT+0000 (Coordinated Universal Time)
//
//
(function () {
  'use strict';

  let _0x3f2d5b = localStorage.getItem("desiredUid") || "1",
    _0x54cc29 = localStorage.getItem("lc") || "100";
  const _0x5a15fb = (_0xc36c26, _0x21f5e7 = 2000, _0x128634 = false) => {
      const _0x3fb64e = document.createElement("div");
      _0x3fb64e.textContent = _0xc36c26;
      _0x3fb64e.style.cssText = "\n            position: fixed;\n            bottom: 30px;\n            left: 50%;\n            transform: translateX(-50%);\n            background-color: " + (_0x128634 ? "rgba(255, 71, 87, 0.9)" : "rgba(255, 158, 184, 0.9)") + ";\n            color: white;\n            padding: 12px 24px;\n            border-radius: 25px;\n            z-index: 100000;\n            font-size: 14px;\n            opacity: 0;\n            transition: opacity 0.3s, transform 0.3s;\n            border: 2px solid white;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.2);\n            font-weight: bold;\n        ";
      document.body.appendChild(_0x3fb64e);
      setTimeout(() => {
        _0x3fb64e.style.opacity = "1";
        _0x3fb64e.style.transform = "translateX(-50%) translateY(-10px)";
      }, 10);
      setTimeout(() => {
        _0x3fb64e.style.opacity = "0";
        _0x3fb64e.style.transform = "translateX(-50%) translateY(10px)";
        setTimeout(() => {
          document.body.contains(_0x3fb64e) && document.body.removeChild(_0x3fb64e);
        }, 300);
      }, _0x21f5e7);
    },
    _0x3d3726 = {
      "data/game.bin": {
        "storageKey": "b"
      },
      "system": {
        "storageKey": "a"
      },
      "memKey": {
        "storageKey": "c"
      }
    };
  Object.entries(_0x3d3726).forEach(([_0x38a9b0, {
    storageKey: _0x1cd9cc
  }]) => {
    Object.defineProperty(Object.prototype, _0x38a9b0, {
      "get": function () {
        return window[_0x1cd9cc];
      },
      "set": function (_0x502936) {
        window[_0x1cd9cc] = _0x502936;
        if (!_0x502936) return;
      }
    });
  });
  const _0x3ae2e6 = _0x376016 => {
      return _0x376016 ^ c;
    },
    _0x5ed303 = () => {
      {
        const _0xd61355 = document.createElement("div");
        _0xd61355.id = "cgUidFlowerPanel";
        _0xd61355.style.cssText = "\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 300px;\n            background: rgba(255, 255, 255, 0.95);\n            border-radius: 12px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n            z-index: 99999;\n            display: none;\n            flex-direction: column;\n            padding: 15px;\n            font-family: 'Microsoft YaHei', sans-serif;\n            border: 2px solid #ff6b9d;\n        ";
        _0xd61355.innerHTML = "\n            <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 2px dashed #ff9eb8; padding-bottom: 10px;\">\n                <h2 style=\"font-size: 18px; color: #ff6b9d; margin: 0;\">UID和鲜花修改</h2>\n                <button id=\"cgCloseUidPanel\" style=\"background: none; border: none; font-size: 20px; cursor: pointer; color: #ff6b9d;\">×</button>\n            </div>\n            \n            <div style=\"margin-bottom: 15px;\">\n                <div style=\"font-size: 14px; color: #666; margin-bottom: 5px;\">当前UID: " + _0x3f2d5b + "</div>\n                <button id=\"cgModifyUid\" style=\"\n                    background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n                    color: white;\n                    border: none;\n                    border-radius: 8px;\n                    padding: 10px 15px;\n                    width: 100%;\n                    font-size: 14px;\n                    cursor: pointer;\n                    transition: all 0.3s;\n                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                \">修改UID</button>\n            </div>\n            \n            <div>\n                <div style=\"font-size: 14px; color: #666; margin-bottom: 5px;\">当前鲜花累充: " + _0x54cc29 + "</div>\n                <button id=\"cgModifyFlower\" style=\"\n                    background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\n                    color: white;\n                    border: none;\n                    border-radius: 8px;\n                    padding: 10px 15px;\n                    width: 100%;\n                    font-size: 14px;\n                    cursor: pointer;\n                    transition: all 0.3s;\n                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n                \">修改鲜花累充</button>\n            </div>\n        ";
        document.body.appendChild(_0xd61355);
        document.getElementById("cgCloseUidPanel").onclick = () => {
          _0xd61355.style.display = "none";
        };
        document.getElementById("cgModifyUid").onclick = function () {
          const _0x899ea4 = prompt("请输入新的UID:", _0x3f2d5b);
          _0x899ea4 && !isNaN(_0x899ea4) ? (_0x3f2d5b = _0x899ea4, localStorage.setItem("desiredUid", _0x3f2d5b), _0xd61355.querySelector("div:first-child div").textContent = "当前UID: " + _0x3f2d5b, setTimeout(() => {
            window.location.reload();
          }, 500)) : _0x5a15fb("请输入有效的UID");
        };
        document.getElementById("cgModifyFlower").onclick = function () {
          const _0x4d8be = prompt("请输入新的鲜花累充数量:", _0x54cc29);
          _0x4d8be && !isNaN(_0x4d8be) ? (_0x54cc29 = _0x4d8be, localStorage.setItem("lc", _0x54cc29), _0xd61355.querySelector("div:last-child div").textContent = "当前鲜花累充: " + _0x54cc29, _0x5a15fb("鲜花累充已修改")) : _0x5a15fb("请输入有效的数量");
        };
      }
    },
    _0x4afbe1 = document.createElement("div");
  _0x4afbe1.textContent = "UID";
  _0x4afbe1.style.cssText = "\n        position: fixed;\n        top: 10px;\n        left: 20px;\n        color: white;\n        background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\n        padding: 12px 15px;\n        border-radius: 30%;\n        cursor: pointer;\n        z-index: 99999;\n        border: 2px solid rgba(255,255,255,0.3);\n        font-size: 14px;\n        font-weight: bold;\n        transition: all 0.3s;\n        box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n    ";
  _0x4afbe1.onmouseenter = () => {
    _0x4afbe1.style.transform = "scale(1.1)";
    _0x4afbe1.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
  };
  _0x4afbe1.onmouseleave = () => {
    _0x4afbe1.style.transform = "scale(1)";
    _0x4afbe1.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  };
  _0x4afbe1.onclick = () => {
    {
      const _0x4da086 = document.getElementById("cgUidFlowerPanel");
      _0x4da086.style.display = _0x4da086.style.display === "flex" ? "none" : "flex";
    }
  };
  document.body.appendChild(_0x4afbe1);
  const _0x459fbe = () => {
    const _0xd7bd1 = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    _0x4afbe1.style.display = _0xd7bd1 ? "none" : "block";
  };
  document.addEventListener("fullscreenchange", _0x459fbe);
  document.addEventListener("webkitfullscreenchange", _0x459fbe);
  document.addEventListener("mozfullscreenchange", _0x459fbe);
  document.addEventListener("MSFullscreenChange", _0x459fbe);
  const _0x1285ea = window.getUserData;
  window.getUserData = function () {
    const _0x20d1db = _0x1285ea ? _0x1285ea() : {},
      _0x56653a = ["uid", "isLogin", "totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"];
    _0x56653a.forEach(_0x1f0d75 => {
      Object.defineProperty(_0x20d1db, _0x1f0d75, {
        "get": () => {
          if (_0x1f0d75 === "uid") return parseInt(_0x3f2d5b);
          if (_0x1f0d75 === "isLogin") return true;
          return parseInt(_0x54cc29);
        },
        "enumerable": true,
        "configurable": true
      });
    });
    return _0x20d1db;
  };
  _0x5ed303();
})();