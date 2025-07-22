//Tue Jul 22 2025 09:15:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0x3ec33b) {
  let _0x55da85 = false;
  const _0x5cdce6 = window.requestAnimationFrame;
  window.requestAnimationFrame = function (_0x4af77f) {
    if (_0x4af77f.name == "f") return;
    return _0x5cdce6(_0x4af77f);
  };
  const _0x2b2ab6 = {
    "get": function () {
      return window.hxsj;
    },
    "set": function (_0x2c47ed) {
      window.hxsj = _0x2c47ed;
      if (!_0x2c47ed) return;
    }
  };
  Object.defineProperty(Object.prototype, "scene", _0x2b2ab6);
  window.buyItem = function (_0x18fd07) {
    const _0x1c8b99 = prompt("请输入购买数量(1-99):", "");
    if (Number.isInteger(_0x1c8b99) && _0x1c8b99 >= 1 && _0x1c8b99 <= 99) {
      alert("只可以输入1-99随意整数!");
      return;
    }
    const _0x363a84 = _0x18fd07.value;
    window.hxsj.successPurchase(_0x363a84, _0x1c8b99);
  };
  async function _0x2371ed() {
    if (document.querySelector("canvas")) {
      async function _0x56f526() {
        window.listVisible = false;
        const _0x3fc16f = document.createElement("style");
        _0x3fc16f.textContent = "\n          #base-btn {\n            background: #ffd700;\n            color: #333;\n            border: 1px solid #d4af37;\n            border-radius: 4px;\n            cursor: pointer;\n            user-select: none;\n            padding: 6px 12px;\n            position: fixed;\n            top: 20px;\n            left: 20px;\n            z-index: 1000;\n            font-weight: bold;\n            font-size: 14px;\n          }\n          \n          #base-btn:hover {\n            background: #ffdf40;\n          }\n          \n          .menu-container {\n            position: absolute;\n            display: none;\n            flex-direction: column;\n            gap: 3px;\n            background: white;\n            border: 1px solid #d4af37;\n            border-radius: 4px;\n            padding: 8px 6px;\n            z-index: 999;\n            box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n          }\n          \n          .menu-btn {\n            background: #fff8e1;\n            color: #333;\n            border: 1px solid #ffd700;\n            border-radius: 3px;\n            cursor: pointer;\n            user-select: none;\n            padding: 4px 8px;\n            min-width: 90px;\n            text-align: center;\n            font-size: 13px;\n            white-space: nowrap;\n          }\n          \n          .menu-btn:hover {\n            background: #ffecb3;\n          }\n        ";
        document.head.appendChild(_0x3fc16f);
        const _0x56d7b0 = document.createElement("button");
        _0x56d7b0.id = "base-btn";
        _0x56d7b0.textContent = "破天菜单";
        _0x56d7b0.onclick = function (_0x3e7085) {
          {
            _0x3e7085.stopPropagation();
            const _0x57b9c5 = this.getBoundingClientRect();
            _0x1e9357.style.left = _0x57b9c5.left - 11 + "px";
            _0x1e9357.style.top = _0x57b9c5.bottom + 5 + "px";
            if (_0x1e9357.style.display === "flex") {
              _0x1e9357.style.display = "none";
            } else _0x1e9357.style.display = "flex";
            _0x10d099.style.display = "none";
          }
        };
        document.body.appendChild(_0x56d7b0);
        const _0x1e9357 = document.createElement("div");
        _0x1e9357.id = "level1";
        _0x1e9357.className = "menu-container";
        document.body.appendChild(_0x1e9357);
        const _0x10d099 = document.createElement("div");
        _0x10d099.id = "level2";
        _0x10d099.className = "menu-container";
        document.body.appendChild(_0x10d099);
        const _0x4c867b = (_0x2d5f5b, _0x45a2eb, _0x3d2a03) => {
          {
            const _0x4236ca = document.createElement("button");
            _0x4236ca.className = "menu-btn";
            _0x4236ca.textContent = _0x2d5f5b;
            _0x4236ca.onclick = _0x45a2eb;
            _0x3d2a03.appendChild(_0x4236ca);
            return _0x4236ca;
          }
        };
        _0x4c867b("商城开启", _0x258a17 => {
          {
            _0x258a17.stopPropagation();
            if (window.hxsj && window.hxsj.successPurchase && window.hxsj.mallItems) _0x10d099.innerHTML = "", window.hxsj.mallItems.map(_0x25cae5 => {
              let _0x849b0e = _0x25cae5.itemData.itemName,
                _0x234e3a = _0x25cae5.itemData.itemId;
              _0x4c867b(_0x849b0e, function () {
                buyItem(this);
              }, _0x10d099).value = _0x234e3a;
            });else {
              alert("请先在游戏内打开商城页");
              return;
            }
            const _0x3223cd = _0x5d6902.getBoundingClientRect();
            _0x10d099.style.left = _0x3223cd.right + 8 + "px";
            _0x10d099.style.top = _0x3223cd.top - 4 + "px";
            _0x10d099.style.display = _0x10d099.style.display === "flex" ? "none" : "flex";
          }
        }, _0x1e9357);
        _0x4c867b("修改累充", () => {
          {
            const _0x9464cf = prompt("请输入累充数:", ""),
              _0x34c00c = parseInt(_0x9464cf) || 0,
              _0x2f3801 = window.getUserData?.() || {};
            ["totalFlower", "freshFlower", "wildFlower", "tempFlower", "realFlower", "haveFlower"].forEach(_0x58fa7b => {
              Object.defineProperty(_0x2f3801, _0x58fa7b, {
                "value": _0x34c00c,
                "writable": true
              });
            });
            alert("累充已修改为：" + _0x34c00c);
          }
        }, _0x1e9357);
        _0x4c867b("全屏开关", () => {
          _0x55da85 = !_0x55da85;
          if (!document.fullscreenElement) document.documentElement.requestFullscreen();else {
            document.exitFullscreen();
          }
        }, _0x1e9357);
        _0x4c867b("隐藏菜单", () => {
          _0x56d7b0.style.display = "none";
          _0x1e9357.style.display = "none";
          _0x10d099.style.display = "none";
        }, _0x1e9357);
        _0x4c867b("关闭菜单", () => {
          _0x1e9357.style.display = "none";
          _0x10d099.style.display = "none";
        }, _0x1e9357);
        _0x4c867b("显示菜单", () => {
          _0x56d7b0.style.display = "block";
        }, _0x1e9357);
        const _0x5d6902 = _0x1e9357.querySelector("button");
      }
      function _0x357025() {
        document.cookie ? _0x56f526() : window.requestAnimationFrame(_0x357025);
      }
      _0x357025();
    } else {
      setTimeout(_0x2371ed, 100);
    }
  }
  setTimeout(_0x2371ed, 100);
})(GM);