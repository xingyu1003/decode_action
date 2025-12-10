//Wed Dec 10 2025 13:19:32 GMT+0000 (Coordinated Universal Time)
//
//
(function () {
  'use strict';

  const _0x4fa250 = typeof GM_setValue !== "undefined",
    _0x30ff6f = typeof cat !== "undefined",
    _0x506ddd = {
      "set": (_0x27f477, _0x44cf1e) => {
        try {
          _0x4fa250 ? GM_setValue(_0x27f477, _0x44cf1e) : localStorage.setItem(_0x27f477, _0x44cf1e);
          return true;
        } catch (_0x2e9054) {
          console.error("Storage set error:", _0x2e9054);
          return false;
        }
      },
      "get": (_0x14b3f4, _0x411837 = null) => {
        try {
          {
            if (_0x4fa250) {
              const _0x5c8eeb = GM_getValue(_0x14b3f4);
              return _0x5c8eeb !== undefined ? _0x5c8eeb : _0x411837;
            } else {
              const _0xf34678 = localStorage.getItem(_0x14b3f4);
              return _0xf34678 !== null ? _0xf34678 : _0x411837;
            }
          }
        } catch (_0x3cc9e0) {
          console.error("Storage get error:", _0x3cc9e0);
          return _0x411837;
        }
      },
      "remove": _0x1e5f3c => {
        try {
          _0x4fa250 ? GM_deleteValue(_0x1e5f3c) : localStorage.removeItem(_0x1e5f3c);
          return true;
        } catch (_0x2265b9) {
          console.error("Storage remove error:", _0x2265b9);
          return false;
        }
      }
    },
    _0x210e96 = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  let _0xb50b9f = {
    "uiCreated": false,
    "fastForwardVisible": false
  };
  const _0x203c71 = {
    "SLOT_COUNT": 6,
    "STORAGE_PREFIX": "cg_save_",
    "GAME_ID_UNKNOWN": "unknown"
  };
  let _0x7ce5ad = "none",
    _0x5e1eb3 = false,
    _0x227df4 = _0x53e822();
  let _0xad20d8 = _0x506ddd.get("desiredUid") || "1";
  const _0x10c0d5 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let _0x579555 = 0,
    _0x4475a4 = 0;
  const _0xe9ddf8 = 5,
    _0x577df9 = 1000;
  let _0x41930d = true,
    _0x1cfc37 = null;
  function _0x346235() {
    console.log("茶茶小店基础保护已启动");
    _0x2bbe40();
    setTimeout(() => {
      !_0xb50b9f.uiCreated && _0x4299cb();
    }, 2000);
  }
  function _0x2bbe40() {
    document.body.style.pointerEvents = "";
    const _0x5659ca = document.createElement("style");
    _0x5659ca.textContent = "\n            #game-container, #game-area, canvas, .game-content, .game-screen {\n                pointer-events: auto !important;\n            }\n            body {\n                pointer-events: auto !important;\n            }\n        ";
    document.head.appendChild(_0x5659ca);
  }
  function _0x5bd3e1() {
    console.log("茶茶小店功能已启动...");
    _0x346235();
    _0x2bbe40();
    _0x503236();
    _0x3a231c();
    _0x4299cb();
    _0x49770d("🎉 欢迎使用茶茶小店功能！", 3000);
  }
  function _0x3a231c() {
    {
      const _0x52a35b = _0x210e96.getUserData;
      _0x210e96.getUserData = function () {
        const _0x21f8fe = _0x52a35b ? _0x52a35b() : {};
        Object.defineProperty(_0x21f8fe, "uid", {
          "value": parseInt(_0xad20d8),
          "writable": true,
          "enumerable": true,
          "configurable": true
        });
        Object.defineProperty(_0x21f8fe, "isLogin", {
          "value": true,
          "writable": true,
          "enumerable": true,
          "configurable": true
        });
        return _0x21f8fe;
      };
      console.log("UID系统已初始化，当前UID:", _0xad20d8);
    }
  }
  function _0x1c55e4() {
    const _0x2266ca = prompt("请输入新的UID:", _0xad20d8);
    if (_0x2266ca && !isNaN(_0x2266ca)) _0xad20d8 = _0x2266ca, _0x506ddd.set("desiredUid", _0xad20d8), _0x49770d("UID已修改为: " + _0xad20d8 + "，页面将刷新"), setTimeout(() => {
      location.reload();
    }, 1500);else _0x2266ca !== null && alert("请输入有效的UID");
  }
  function _0x4299cb() {
    {
      if (_0xb50b9f.uiCreated) return;
      _0x405e1d();
      _0x511cd8();
      _0xb50b9f.uiCreated = true;
    }
  }
  function _0x511cd8() {
    document.addEventListener("click", function (_0x1bc3c7) {
      if (_0x1bc3c7.target.closest("#cgTriggerBtn") || _0x1bc3c7.target.closest("#cgControlPanel") || _0x1bc3c7.target.closest("#cg-fast-forward-btn")) return;
      const _0x100b53 = Date.now();
      _0x100b53 - _0x4475a4 > _0x577df9 && (_0x579555 = 0);
      _0x579555++;
      _0x4475a4 = _0x100b53;
      if (_0x579555 >= _0xe9ddf8) {
        _0x44b5fb();
        _0x579555 = 0;
        _0x49770d(_0x41930d ? "✅ 茶茶按钮已显示" : "🚫 茶茶按钮已隐藏");
      }
    }, {
      "passive": true
    });
  }
  function _0x44b5fb() {
    {
      const _0x1b5fd9 = document.getElementById("cgTriggerBtn");
      _0x1b5fd9 && (_0x41930d = !_0x41930d, _0x1b5fd9.style.display = _0x41930d ? "block" : "none");
    }
  }
  function _0x405e1d() {
    {
      const _0x53215a = document.createElement("div");
      _0x53215a.textContent = "茶茶";
      _0x53215a.id = "cgTriggerBtn";
      _0x53215a.style.cssText = "\n            position: fixed;\n            top: 10px;\n            left: 15px;\n            color: white;\n            background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n            padding: 14px 18px;\n            border-radius: 30%;\n            cursor: pointer;\n            z-index: 99999;\n            border: 2px solid rgba(255,255,255,0.3);\n            font-size: 18px;\n            font-weight: bold;\n            transition: all 0.3s;\n            box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n            pointer-events: auto;\n        ";
      _0x53215a.onmouseenter = () => {
        _0x53215a.style.transform = "scale(1.1) rotate(10deg)";
        _0x53215a.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
      };
      _0x53215a.onmouseleave = () => {
        _0x53215a.style.transform = "scale(1) rotate(0deg)";
        _0x53215a.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
      };
      _0x53215a.onclick = () => {
        !_0x5e1eb3 && (_0x21ce4d(), _0x5e1eb3 = true);
        const _0xb11723 = document.getElementById("cgControlPanel");
        _0xb11723 && (_0xb11723.style.display = _0xb11723.style.display === "flex" ? "none" : "flex", _0xb11723.style.display === "flex" && _0x551d0d());
      };
      document.body.appendChild(_0x53215a);
    }
  }
  function _0x21ce4d() {
    const _0x4c3d6f = document.createElement("div");
    _0x4c3d6f.id = "cgControlPanel";
    _0x4c3d6f.style.cssText = "\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 90%;\n            max-width: 700px;\n            max-height: 90vh;\n            overflow-y: auto;\n            background: rgba(255, 255, 255, 0.9);\n            border-radius: 16px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n            z-index: 99999;\n            display: none;\n            flex-direction: column;\n            padding: 15px;\n            font-family: 'Microsoft YaHei', sans-serif;\n            backdrop-filter: blur(10px);\n            border: 2px solid #ff9eb8;\n            pointer-events: auto;\n        ";
    _0x4c3d6f.innerHTML = "\n            <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 2px dashed #a8d8ff; padding-bottom: 10px;\">\n                <div>\n                    <h1 style=\"font-size: 24px; color: #ff6b9d; margin: 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\">茶茶小店功能菜单</h1>\n                    <div style=\"display: flex; gap: 15px; margin-top: 5px;\">\n                        <div style=\"font-size: 14px; color: #666;\">\n                            <span style=\"font-weight: bold; color: #6bc5ff;\">游戏ID:</span> " + _0x227df4 + "\n                        </div>\n                        <div style=\"font-size: 14px; color: #666;\">\n                            <span style=\"font-weight: bold; color: #6bc5ff;\">当前UID:</span> " + _0xad20d8 + "\n                        </div>\n                        <div style=\"font-size: 14px; color: #27ae60;\">\n                            <span style=\"font-weight: bold;\">✅ 免登录存档版</span>\n                        </div>\n                    </div>\n                </div>\n                <div>\n                    <button id=\"cgClosePanel\" style=\"background: none; border: none; font-size: 24px; cursor: pointer; color: #ff6b9d;\">×</button>\n                </div>\n            </div>\n            \n            <div style=\"display: flex; justify-content: space-around; margin-bottom: 15px; border-bottom: 2px dashed #a8d8ff; padding-bottom: 10px;\">\n                <button id=\"cgTabBasic\" class=\"cg-tab\" style=\"\n                    padding: 8px 20px;\n                    border: none;\n                    background: rgba(255, 158, 184, 0.2);\n                    font-size: 16px;\n                    cursor: pointer;\n                    border-radius: 8px;\n                    transition: all 0.3s;\n                    color: #ff3d7f;\n                    font-weight: bold;\n                \">茶茶功能</button>\n                <button id=\"cgTabSave\" class=\"cg-tab\" style=\"\n                    padding: 8px 20px;\n                    border: none;\n                    background: none;\n                    font-size: 16px;\n                    cursor: pointer;\n                    border-radius: 8px;\n                    transition: all 0.3s;\n                    color: #ff6b9d;\n                    font-weight: bold;\n                \">存档功能</button>\n            </div>\n            \n            <!-- 茶茶功能区域 -->\n            <div id=\"cgBasicSection\" style=\"\n                margin-bottom: 20px;\n                padding: 15px;\n                background: rgba(255, 255, 255, 0.7);\n                border-radius: 12px;\n                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n                border: 2px solid #a8d8ff;\n                backdrop-filter: blur(5px);\n            \">\n                <div style=\"\n                    font-size: 20px;\n                    font-weight: bold;\n                    color: #ff6b9d;\n                    margin-bottom: 15px;\n                    padding-bottom: 8px;\n                    border-bottom: 2px dashed #a8d8ff;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n                \">茶茶功能</div>\n                \n                <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n                    <!-- 累充功能 -->\n                    <div style=\"\n                        background: rgba(255, 255, 255, 0.9);\n                        padding: 15px;\n                        border-radius: 10px;\n                        border: 2px solid #ff9eb8;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                    \">\n                        <div style=\"font-weight: bold; color: #ff6b9d; margin-bottom: 10px; font-size: 16px;\">鲜花功能</div>\n                        <button id=\"cgModifyAccumulated\" style=\"\n                            background: linear-gradient(135deg, #ff9eb8 0%, #ff6b9d 100%);\n                            color: white;\n                            border: none;\n                            border-radius: 10px;\n                            padding: 12px 20px;\n                            font-size: 16px;\n                            cursor: pointer;\n                            transition: all 0.3s ease;\n                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                            border: 2px solid rgba(255, 255, 255, 0.5);\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                            width: 100%;\n                            margin-bottom: 10px;\n                        \">修改鲜花数值</button>\n                        <div style=\"font-size: 13px; color: #666; line-height: 1.4; background: rgba(255, 158, 184, 0.1); padding: 10px; border-radius: 6px;\">\n                            • 修改后可用于游戏中的领取累充福利,真人区的鲜花检测,等等鲜花检测功能 <br>\n                            • 数量够用即可,不宜改得过于大,否则容易崩档\n                        </div>\n                    </div>\n\n                    <!-- UID修改功能 -->\n                    <div style=\"\n                        background: rgba(255, 255, 255, 0.9);\n                        padding: 15px;\n                        border-radius: 10px;\n                        border: 2px solid #a8d8ff;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                    \">\n                        <div style=\"font-weight: bold; color: #6bc5ff; margin-bottom: 10px; font-size: 16px;\">UID修改</div>\n                        <button id=\"cgModifyUid\" style=\"\n                            background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\n                            color: white;\n                            border: none;\n                            border-radius: 10px;\n                            padding: 12px 20px;\n                            font-size: 16px;\n                            cursor: pointer;\n                            transition: all 0.3s ease;\n                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                            border: 2px solid rgba(255, 255, 255, 0.5);\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                            width: 100%;\n                            margin-bottom: 10px;\n                        \">修改UID (当前: " + _0xad20d8 + ")</button>\n                        <div style=\"font-size: 13px; color: #666; line-height: 1.4; background: rgba(168, 216, 255, 0.1); padding: 10px; border-radius: 6px;\">\n                            • 修改UID可以模拟不同用户登录状态<br>\n                            • 修改后页面会自动刷新以应用新的UID\n                        </div>\n                    </div>\n\n                    <!-- 全屏功能 -->\n                    <div style=\"\n                        background: rgba(255, 255, 255, 0.9);\n                        padding: 15px;\n                        border-radius: 10px;\n                        border: 2px solid #ffb56b;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                    \">\n                        <div style=\"font-weight: bold; color: #ffb56b; margin-bottom: 10px; font-size: 16px;\">显示设置</div>\n                        <button id=\"cgFullscreen\" style=\"\n                            background: linear-gradient(135deg, #ffd59e 0%, #ffb56b 100%);\n                            color: white;\n                            border: none;\n                            border-radius: 10px;\n                            padding: 12px 20px;\n                            font-size: 16px;\n                            cursor: pointer;\n                            transition: all 0.3s ease;\n                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                            border: 2px solid rgba(255, 255, 255, 0.5);\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                            width: 100%;\n                        \">全屏切换</button>\n                    </div>\n\n                    <!-- 快进功能 -->\n                    <div style=\"\n                        background: rgba(255, 255, 255, 0.9);\n                        padding: 15px;\n                        border-radius: 10px;\n                        border: 2px solid #b5ff9e;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                    \">\n                        <div style=\"font-weight: bold; color: #6bff6b; margin-bottom: 10px; font-size: 16px;\">快进功能</div>\n                        <button id=\"cgToggleFastForward\" style=\"\n                            background: linear-gradient(135deg, #b5ff9e 0%, #6bff6b 100%);\n                            color: white;\n                            border: none;\n                            border-radius: 10px;\n                            padding: 12px 20px;\n                            font-size: 16px;\n                            cursor: pointer;\n                            transition: all 0.3s ease;\n                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                            border: 2px solid rgba(255, 255, 255, 0.5);\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                            width: 100%;\n                            margin-bottom: 10px;\n                        \">" + (_0xb50b9f.fastForwardVisible ? "收回快进按钮" : "显示快进按钮") + "</button>\n                    </div>\n\n                    <!-- 隐藏功能提示 -->\n                    <div style=\"\n                        background: rgba(255, 255, 255, 0.9);\n                        padding: 12px;\n                        border-radius: 8px;\n                        border: 2px dashed #a8d8ff;\n                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n                    \">\n                        <div style=\"font-size: 13px; color: #666; line-height: 1.4; text-align: center;\">\n                            💡 提示：快速点击屏幕5次可隐藏/显示茶茶按钮<br>\n                            免登陆插件请勿登录账号游玩,封号概不负责也不退款\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- 存档功能区域 -->\n            <div id=\"cgSaveSection\" style=\"\n                margin-bottom: 20px;\n                padding: 15px;\n                background: rgba(255, 255, 255, 0.7);\n                border-radius: 12px;\n                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n                display: none;\n                border: 2px solid #a8d8ff;\n                backdrop-filter: blur(5px);\n            \">\n                <div style=\"\n                    font-size: 20px;\n                    font-weight: bold;\n                    color: #ff6b9d;\n                    margin-bottom: 15px;\n                    padding-bottom: 8px;\n                    border-bottom: 2px dashed #a8d8ff;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);\n                \">存档功能</div>\n                \n                <div style=\"display: flex; justify-content: space-between; margin-bottom: 15px;\">\n                    <button id=\"cgSaveMode\" style=\"\n                        background: linear-gradient(135deg, #a8d8ff 0%, #6bc5ff 100%);\n                        color: white;\n                        border: none;\n                        border-radius: 12px;\n                        padding: 12px 20px;\n                        font-size: 16px;\n                        cursor: pointer;\n                        transition: all 0.3s ease;\n                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                        border: 2px solid rgba(255, 255, 255, 0.5);\n                        font-weight: bold;\n                        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                        width: 48%;\n                    \">存档模式</button>\n                    <button id=\"cgLoadMode\" style=\"\n                        background: linear-gradient(135deg, #b5ff9e 0%, #6bff6b 100%);\n                        color: white;\n                        border: none;\n                        border-radius: 12px;\n                        padding: 12px 20px;\n                        font-size: 16px;\n                        cursor: pointer;\n                        transition: all 0.3s ease;\n                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                        border: 2px solid rgba(255, 255, 255, 0.5);\n                        font-weight: bold;\n                        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                        width: 48%;\n                    \">读档模式</button>\n                </div>\n                \n                <div id=\"cgSlotContainer\" style=\"width: 100%;\">\n                    " + Array(_0x203c71.SLOT_COUNT).fill().map((_0x2994f9, _0x17c194) => "\n                        <div id=\"cgSlot" + (_0x17c194 + 1) + "\" class=\"cg-slot\" style=\"\n                            display: flex;\n                            flex-direction: column;\n                            align-items: flex-start;\n                            justify-content: center;\n                            width: 100%;\n                            min-height: 80px;\n                            background: rgba(255, 255, 255, 0.8);\n                            border-radius: 12px;\n                            margin: 5px 0;\n                            padding: 12px;\n                            cursor: pointer;\n                            transition: all 0.2s;\n                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n                            position: relative;\n                            overflow: hidden;\n                            box-sizing: border-box;\n                            border: 2px solid #a8d8ff;\n                        \">\n                            <button class=\"cg-delete-slot\" style=\"\n                                position: absolute;\n                                top: 8px;\n                                right: 8px;\n                                background: rgba(255, 71, 87, 0.8);\n                                color: white;\n                                border: none;\n                                border-radius: 50%;\n                                width: 20px;\n                                height: 20px;\n                                font-size: 12px;\n                                cursor: pointer;\n                                display: none;\n                                align-items: center;\n                                justify-content: center;\n                                z-index: 1;\n                                transition: all 0.2s;\n                            \" title=\"删除存档\">×</button>\n                            <div style=\"display: flex; justify-content: space-between; width: 100%;\">\n                                <div style=\"font-weight: bold; font-size: 16px; color: #ff6b9d;\">存档 " + (_0x17c194 + 1) + "</div>\n                                <div class=\"cg-slot-time\" style=\"font-size: 12px; color: #666;\">空</div>\n                            </div>\n                            <div class=\"cg-slot-info\" style=\"margin-top: 8px; width: 100%;\">\n                                <div class=\"cg-game-name\" style=\"font-size: 14px; color: #333; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">未使用</div>\n                                <div class=\"cg-story-name\" style=\"font-size: 12px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\"></div>\n                            </div>\n                            <div class=\"cg-slot-preview-bar\" style=\"position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #a8d8ff 0%, #ff9eb8 100%);\"></div>\n                        </div>\n                    ").join("") + "\n                </div>\n                \n                <div style=\"margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;\">\n                    <button id=\"cgClearCurrent\" style=\"\n                        background: linear-gradient(135deg, #ffd59e 0%, #ffb56b 100%);\n                        color: white;\n                        border: none;\n                        border-radius: 12px;\n                        padding: 12px 20px;\n                        font-size: 16px;\n                        cursor: pointer;\n                        transition: all 0.3s ease;\n                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                        border: 2px solid rgba(255, 255, 255, 0.5);\n                        font-weight: bold;\n                        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                        flex: 1;\n                        min-width: 120px;\n                    \">清除当前存档</button>\n                    <button id=\"cgClearData\" style=\"\n                        background: linear-gradient(135deg, #ff9e9e 0%, #ff6b6b 100%);\n                        color: white;\n                        border: none;\n                        border-radius: 12px;\n                        padding: 12px 20px;\n                        font-size: 16px;\n                        cursor: pointer;\n                        transition: all 0.3s ease;\n                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n                        border: 2px solid rgba(255, 255, 255, 0.5);\n                        font-weight: bold;\n                        text-shadow: 1px 1px 2px rgba(0,0,0,0.2);\n                        flex: 1;\n                        min-width: 120px;\n                    \">清除所有数据</button>\n                </div>\n            </div>\n            \n            <div id=\"cgModeIndicator\" style=\"\n                position: fixed;\n                top: 10px;\n                right: 10px;\n                padding: 8px 15px;\n                background: rgba(255,158,184,0.9);\n                color: white;\n                border-radius: 20px;\n                font-size: 14px;\n                display: none;\n                z-index: 100000;\n                border: 2px solid white;\n                box-shadow: 0 2px 10px rgba(0,0,0,0.2);\n            \">\n                当前模式: <span id=\"cgCurrentModeText\">无</span>\n            </div>\n        ";
    document.body.appendChild(_0x4c3d6f);
    _0x5d9346();
  }
  function _0x5d9346() {
    document.getElementById("cgTabBasic").onclick = function () {
      _0xfdb65("basic");
    };
    document.getElementById("cgTabSave").onclick = function () {
      _0xfdb65("save");
    };
    document.getElementById("cgClosePanel").onclick = function () {
      document.getElementById("cgControlPanel").style.display = "none";
      _0x7ce5ad = "none";
      _0x2c0bea();
    };
    document.getElementById("cgFullscreen").onclick = _0x4d9a94;
    document.getElementById("cgSaveMode").onclick = function () {
      _0x7ce5ad = _0x7ce5ad === "save" ? "none" : "save";
      _0x2c0bea();
      _0x551d0d();
    };
    document.getElementById("cgLoadMode").onclick = function () {
      _0x7ce5ad = _0x7ce5ad === "load" ? "none" : "load";
      _0x2c0bea();
      _0x551d0d();
    };
    document.getElementById("cgModifyAccumulated").onclick = function () {
      _0x495269();
    };
    document.getElementById("cgModifyUid").onclick = function () {
      _0x1c55e4();
    };
    document.getElementById("cgToggleFastForward").onclick = function () {
      _0xf445c();
    };
    document.getElementById("cgClearCurrent").onclick = _0x3a565b;
    document.getElementById("cgClearData").onclick = _0x4fc243;
  }
  function _0xf445c() {
    _0xb50b9f.fastForwardVisible ? (_0x4be99a(), document.getElementById("cgToggleFastForward").textContent = "显示快进按钮", _0x49770d("🚫 快进按钮已收回")) : (_0x6af62b(), document.getElementById("cgToggleFastForward").textContent = "收回快进按钮", _0x49770d("✅ 快进按钮已显示"));
    _0xb50b9f.fastForwardVisible = !_0xb50b9f.fastForwardVisible;
  }
  function _0x6af62b() {
    const _0x73f0bc = document.createElement("div");
    _0x73f0bc.id = "cg-fast-forward-btn";
    _0x73f0bc.textContent = "⏩";
    _0x73f0bc.title = "长按快进 (模拟Z键)";
    _0x73f0bc.style.cssText = "\n            position: fixed;\n            top: 15px;\n            right: 15px;\n            width: 40px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: white;\n            border-radius: 50%;\n            cursor: pointer;\n            z-index: 9998;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n            font-size: 18px;\n            transition: all 0.2s;\n            user-select: none;\n            border: 2px solid #6bff6b;\n            pointer-events: auto;\n        ";
    function _0x188da7() {
      if (_0x1cfc37) return;
      const _0xf37200 = new KeyboardEvent("keydown", {
          "key": "z",
          "keyCode": 90,
          "code": "KeyZ",
          "which": 90,
          "bubbles": false,
          "cancelable": false,
          "repeat": true
        }),
        _0x1bb3bc = document.querySelector("#game-container") || document;
      _0x1bb3bc.dispatchEvent(_0xf37200);
      _0x1cfc37 = setInterval(() => {
        const _0x3ca701 = new KeyboardEvent("keydown", {
          "key": "z",
          "keyCode": 90,
          "code": "KeyZ",
          "which": 90,
          "bubbles": false,
          "cancelable": false,
          "repeat": true
        });
        _0x1bb3bc.dispatchEvent(_0x3ca701);
      }, 100);
    }
    function _0x29903f() {
      {
        if (!_0x1cfc37) return;
        clearInterval(_0x1cfc37);
        _0x1cfc37 = null;
        const _0x76d65c = new KeyboardEvent("keyup", {
            "key": "z",
            "keyCode": 90,
            "code": "KeyZ",
            "which": 90,
            "bubbles": false,
            "cancelable": false
          }),
          _0x2c6896 = document.querySelector("#game-container") || document;
        _0x2c6896.dispatchEvent(_0x76d65c);
      }
    }
    _0x73f0bc.addEventListener("mousedown", _0x188da7);
    _0x73f0bc.addEventListener("touchstart", _0x188da7);
    _0x73f0bc.addEventListener("mouseup", _0x29903f);
    _0x73f0bc.addEventListener("touchend", _0x29903f);
    _0x73f0bc.addEventListener("mouseleave", _0x29903f);
    window.addEventListener("blur", _0x29903f);
    _0x73f0bc.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.background = "#f0fff0";
      this.style.boxShadow = "0 4px 12px rgba(107, 255, 107, 0.4)";
    });
    _0x73f0bc.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.background = "white";
      this.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
    });
    document.body.appendChild(_0x73f0bc);
  }
  function _0x4be99a() {
    const _0x361c0d = document.getElementById("cg-fast-forward-btn");
    if (_0x361c0d) {
      if (_0x1cfc37) {
        clearInterval(_0x1cfc37);
        _0x1cfc37 = null;
        const _0x220589 = new KeyboardEvent("keyup", {
            "key": "z",
            "keyCode": 90,
            "code": "KeyZ",
            "which": 90,
            "bubbles": false,
            "cancelable": false
          }),
          _0x4b0521 = document.querySelector("#game-container") || document;
        _0x4b0521.dispatchEvent(_0x220589);
      }
      _0x361c0d.remove();
    }
  }
  function _0xfdb65(_0x713aae) {
    document.getElementById("cgBasicSection").style.display = _0x713aae === "basic" ? "block" : "none";
    document.getElementById("cgSaveSection").style.display = _0x713aae === "save" ? "block" : "none";
    document.querySelectorAll(".cg-tab").forEach(_0x5e946c => {
      _0x5e946c.style.background = "none";
      _0x5e946c.style.color = "#ff6b9d";
    });
    const _0x2265f8 = document.getElementById("cgTab" + (_0x713aae.charAt(0).toUpperCase() + _0x713aae.slice(1)));
    _0x2265f8 && (_0x2265f8.style.background = "rgba(255, 158, 184, 0.2)", _0x2265f8.style.color = "#ff3d7f");
  }
  function _0x495269() {
    {
      const _0x53d394 = prompt("请输入鲜花数值:", ""),
        _0x3dacad = parseInt(_0x53d394) || 0,
        _0x557c4e = _0x210e96.getUserData?.() || {};
      ["level1", "level2", "realFlower", "haveFlower", "totalFlower", "freshFlower"].forEach(_0x7adef9 => {
        const _0x19a816 = {
          "value": _0x3dacad,
          "writable": true
        };
        Object.defineProperty(_0x557c4e, _0x7adef9, _0x19a816);
      });
      alert("鲜花数已修改为：" + _0x3dacad);
      _0x49770d("鲜花数量已更新");
    }
  }
  function _0x49770d(_0x3be1d1, _0x294671 = 2000) {
    const _0xa282b8 = document.createElement("div");
    _0xa282b8.textContent = _0x3be1d1;
    _0xa282b8.style.cssText = "\n            position: fixed;\n            top: 70px;\n            left: 50%;\n            transform: translateX(-50%);\n            background: rgba(0, 0, 0, 0.8);\n            color: white;\n            padding: 10px 20px;\n            border-radius: 20px;\n            font-size: 14px;\n            font-family: \"Microsoft YaHei\", sans-serif;\n            z-index: 10000;\n            animation: fadeInOut 2s ease-in-out;\n            pointer-events: none;\n        ";
    if (!document.querySelector("#floating-animation")) {
      {
        const _0x4d0efd = document.createElement("style");
        _0x4d0efd.id = "floating-animation";
        _0x4d0efd.textContent = "\n                @keyframes fadeInOut {\n                    0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }\n                    20% { opacity: 1; transform: translateX(-50%) translateY(0); }\n                    80% { opacity: 1; transform: translateX(-50%) translateY(0); }\n                    100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }\n                }\n            ";
        document.head.appendChild(_0x4d0efd);
      }
    }
    document.body.appendChild(_0xa282b8);
    setTimeout(() => {
      _0xa282b8.parentNode && _0xa282b8.parentNode.removeChild(_0xa282b8);
    }, _0x294671);
  }
  function _0x503236() {
    console.log("茶茶小店：云端请求拦截已启动（仅监控）");
  }
  function _0x53e822() {
    {
      const _0x5c3456 = window.location.pathname,
        _0x5b870d = _0x5c3456.match(new RegExp("/h5/(\\d+)", ""));
      return _0x5b870d ? _0x5b870d[1] : _0x203c71.GAME_ID_UNKNOWN;
    }
  }
  function _0x2c0bea() {
    const _0x4526c2 = document.getElementById("cgModeIndicator"),
      _0x4fc311 = document.getElementById("cgCurrentModeText");
    _0x7ce5ad === "none" ? (_0x4526c2.style.display = "none", _0x4fc311.textContent = "无") : (_0x4526c2.style.display = "block", _0x4fc311.textContent = _0x7ce5ad === "save" ? "存档模式" : "读档模式", _0x4526c2.style.background = _0x7ce5ad === "save" ? "rgba(168, 216, 255, 0.9)" : "rgba(181, 255, 158, 0.9)");
  }
  function _0x551d0d() {
    for (let _0x9dfcb8 = 1; _0x9dfcb8 <= _0x203c71.SLOT_COUNT; _0x9dfcb8++) {
      const _0x150e80 = document.getElementById("cgSlot" + _0x9dfcb8),
        _0x506ec7 = _0x150e80.querySelector(".cg-delete-slot"),
        _0x13d74f = _0x150e80.querySelector(".cg-slot-time"),
        _0x1b42f5 = _0x150e80.querySelector(".cg-game-name"),
        _0x345ce7 = _0x150e80.querySelector(".cg-story-name"),
        _0x1ab74d = _0x150e80.querySelector(".cg-slot-preview-bar"),
        _0x39b15e = "" + _0x203c71.STORAGE_PREFIX + _0xad20d8 + "_" + _0x227df4 + "_" + _0x9dfcb8,
        _0x290e4a = _0x506ddd.get(_0x39b15e);
      _0x506ec7.onmouseenter = () => {
        _0x506ec7.style.background = "#ff4757";
        _0x506ec7.style.transform = "scale(1.1)";
      };
      _0x506ec7.onmouseleave = () => {
        _0x506ec7.style.background = "rgba(255, 71, 87, 0.8)";
        _0x506ec7.style.transform = "scale(1)";
      };
      _0x506ec7.onclick = _0x24b4d5 => {
        _0x24b4d5.stopPropagation();
        _0xa74061(_0x9dfcb8);
      };
      _0x150e80.onmouseenter = () => {
        _0x150e80.style.transform = "translateY(-3px)";
        _0x150e80.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
        _0x150e80.style.borderColor = "#ff9eb8";
        _0x290e4a && (_0x506ec7.style.display = "flex");
      };
      _0x150e80.onmouseleave = () => {
        _0x150e80.style.transform = "translateY(0)";
        _0x150e80.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        _0x150e80.style.borderColor = "#a8d8ff";
        _0x506ec7.style.display = "none";
      };
      if (_0x290e4a) {
        try {
          const _0x12d205 = JSON.parse(_0x290e4a),
            _0x16ff25 = _0x22126f(JSON.stringify(_0x12d205.data));
          _0x16ff25.valid ? (_0x1b42f5.textContent = _0x12d205.info.gameName || _0x16ff25.gameName || "未知游戏", _0x345ce7.textContent = _0x12d205.info.storyName || _0x16ff25.storyName || "未知剧情", _0x13d74f.textContent = _0x12d205.info.saveTime ? new Date(_0x12d205.info.saveTime).toLocaleString() : _0x16ff25.saveTime, _0x13d74f.style.color = "#666", _0x1b42f5.style.color = "#333", _0x1ab74d.style.background = "linear-gradient(90deg, #ff9eb8 0%, #a8d8ff 100%)", _0x150e80.onclick = () => {
            {
              if (_0x7ce5ad === "save") _0x1bff93(_0x9dfcb8);else _0x7ce5ad === "load" ? _0x21c464(_0x9dfcb8) : _0x49770d("请先选择存档或读档模式");
            }
          }) : _0x5bed21(_0x150e80, _0x13d74f, _0x1b42f5, _0x1ab74d);
        } catch (_0x178803) {
          _0x5bed21(_0x150e80, _0x13d74f, _0x1b42f5, _0x1ab74d);
        }
      } else {
        _0x293879(_0x150e80, _0x13d74f, _0x1b42f5, _0x1ab74d);
        _0x150e80.onclick = () => {
          if (_0x7ce5ad === "save") _0x1bff93(_0x9dfcb8);else {
            if (_0x7ce5ad === "load") {
              _0x49770d("该存档位为空");
            } else _0x49770d("请先选择存档或读档模式");
          }
        };
      }
      if (_0x7ce5ad === "save") _0x150e80.style.background = "rgba(168, 216, 255, 0.2)";else {
        if (_0x7ce5ad === "load") _0x150e80.style.background = "rgba(181, 255, 158, 0.2)";else {
          _0x150e80.style.background = "rgba(255, 255, 255, 0.8)";
        }
      }
    }
  }
  function _0x5bed21(_0x5b67f7, _0x16890c, _0x25dd6b, _0x127267) {
    _0x25dd6b.textContent = "数据损坏";
    _0x16890c.textContent = "无效存档";
    _0x16890c.style.color = "#ff4757";
    _0x25dd6b.style.color = "#ff4757";
    _0x127267.style.background = "#ff4757";
  }
  function _0x293879(_0x50c3ab, _0x5eca37, _0x4ba18b, _0x200348) {
    _0x4ba18b.textContent = "未使用";
    _0x5eca37.textContent = "空";
    _0x5eca37.style.color = "#666";
    _0x4ba18b.style.color = "#999";
    _0x200348.style.background = "#ddd";
  }
  function _0x22126f(_0x5bc727) {
    try {
      {
        const _0x24d05b = JSON.parse(_0x5bc727);
        if (_0x24d05b.Header) {
          return {
            "gameName": _0x24d05b.Header.Name || "未知游戏",
            "storyName": _0x24d05b.Header.StoryName || "未知剧情",
            "saveTime": _0x24d05b.Header.SaveTime ? new Date(_0x24d05b.Header.SaveTime).toLocaleString() : "未知时间",
            "valid": true
          };
        }
        for (const _0x2f0c44 in _0x24d05b) {
          {
            if (_0x2f0c44.startsWith("save")) {
              {
                const _0x5b616d = _0x24d05b[_0x2f0c44];
                if (_0x5b616d.includes("\"Name\"") && _0x5b616d.includes("\"StoryName\"")) {
                  const _0x30885b = _0x5b616d.match(new RegExp("\"Name\"\\s*[\\\\:]\\s*\"([^\"]+)\"", "")),
                    _0x2015f9 = _0x5b616d.match(new RegExp("\"StoryName\"\\s*[\\\\:]\\s*\"([^\"]+)\"", "")),
                    _0x418efb = _0x5b616d.match(new RegExp("\"SaveTime\"\\s*[\\\\:]\\s*([0-9]+)", ""));
                  return {
                    "gameName": _0x30885b ? _0x30885b[1] : "未知游戏",
                    "storyName": _0x2015f9 ? _0x2015f9[1] : "未知剧情",
                    "saveTime": _0x418efb ? new Date(parseInt(_0x418efb[1])).toLocaleString() : "未知时间",
                    "valid": true
                  };
                }
              }
            }
          }
        }
        return {
          "valid": false
        };
      }
    } catch (_0x3a34ad) {
      return {
        "valid": false
      };
    }
  }
  function _0x1bff93(_0x3fdf15) {
    const _0x38d311 = {};
    for (const _0x16aa31 of Object.keys(localStorage)) {
      if (_0x16aa31.startsWith("save") && _0x16aa31 !== "saveData") {
        _0x38d311[_0x16aa31] = localStorage.getItem(_0x16aa31);
      }
    }
    if (Object.keys(_0x38d311).length === 0) {
      _0x49770d("未检测到当前游戏的存档数据");
      return;
    }
    const _0x10621f = _0x4a3c99(_0x38d311),
      _0x1679ca = new Date(),
      _0x411bd8 = {
        "saveTime": _0x1679ca.getTime(),
        "gameName": document.title.replace(" - 橙光游戏", "") || "未知游戏",
        "storyName": _0xa2b573(),
        "gameId": _0x227df4
      },
      _0x1580ad = "" + _0x203c71.STORAGE_PREFIX + _0xad20d8 + "_" + _0x227df4 + "_" + _0x3fdf15,
      _0x457e9b = {
        "data": _0x10621f,
        "info": _0x411bd8
      };
    _0x506ddd.set(_0x1580ad, JSON.stringify(_0x457e9b));
    _0x49770d("已保存到存档 " + _0x3fdf15);
    _0x551d0d();
  }
  function _0x21c464(_0x1d9dcc) {
    const _0x3178e7 = "" + _0x203c71.STORAGE_PREFIX + _0xad20d8 + "_" + _0x227df4 + "_" + _0x1d9dcc,
      _0x18fca2 = _0x506ddd.get(_0x3178e7);
    if (!_0x18fca2) {
      {
        _0x49770d("该存档位为空");
        return;
      }
    }
    try {
      const _0x29da5f = JSON.parse(_0x18fca2);
      for (const _0x6e470b of Object.keys(localStorage)) {
        _0x6e470b.startsWith("save") && _0x6e470b !== "saveData" && localStorage.removeItem(_0x6e470b);
      }
      Object.entries(_0x29da5f.data).forEach(([_0x3b17d2, _0x24cc3d]) => {
        _0x3b17d2.startsWith("save") && _0x3b17d2 !== "saveData" && localStorage.setItem(_0x3b17d2, _0x24cc3d);
      });
      _0x49770d("已从存档 " + _0x1d9dcc + " 还原数据");
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (_0x2817a7) {
      console.error("加载存档错误:", _0x2817a7);
      _0x49770d("存档数据损坏或格式错误");
    }
  }
  function _0xa74061(_0x2d094f) {
    const _0x10687c = "" + _0x203c71.STORAGE_PREFIX + _0xad20d8 + "_" + _0x227df4 + "_" + _0x2d094f,
      _0x273f03 = _0x506ddd.get(_0x10687c);
    if (!_0x273f03) {
      _0x49770d("该存档位为空");
      return;
    }
    try {
      const _0x438c6b = JSON.parse(_0x273f03),
        _0xa2d8a1 = _0x438c6b.info.gameName || "未知游戏",
        _0x376c60 = _0x438c6b.info.storyName || "未知剧情";
      confirm("确定要删除存档 " + _0x2d094f + " 吗？\n游戏: " + _0xa2d8a1 + "\n剧情: " + _0x376c60) && (_0x506ddd.remove(_0x10687c), _0x49770d("已删除存档 " + _0x2d094f), _0x551d0d());
    } catch (_0x23dba1) {
      _0x49770d("删除存档失败");
    }
  }
  function _0x4a3c99(_0x49f4bb) {
    try {
      if (typeof _0x49f4bb === "object") {
        for (const _0x1e5ae6 in _0x49f4bb) {
          {
            if (_0x1e5ae6.startsWith("save")) try {
              const _0xec8dcc = JSON.parse(_0x49f4bb[_0x1e5ae6]);
              if (_0xec8dcc.PlayerBuyItem) {
                _0xec8dcc.PlayerBuyItem.items = [];
                _0x49f4bb[_0x1e5ae6] = JSON.stringify(_0xec8dcc);
              }
            } catch (_0x4c02c9) {}
          }
        }
      }
      return _0x49f4bb;
    } catch (_0x190392) {
      return _0x49f4bb;
    }
  }
  function _0xa2b573() {
    try {
      for (const _0x200463 of Object.keys(localStorage)) {
        if (_0x200463.startsWith("save") && _0x200463 !== "saveData") {
          const _0x476a5f = localStorage.getItem(_0x200463);
          if (_0x476a5f) {
            const _0x2a24a4 = JSON.parse(_0x476a5f);
            if (_0x2a24a4.Header && _0x2a24a4.Header.StoryName) return _0x2a24a4.Header.StoryName;
          }
        }
      }
    } catch (_0xf3a4ed) {
      console.error("获取剧情名称失败:", _0xf3a4ed);
    }
    return "当前剧情";
  }
  function _0x3a565b() {
    {
      if (confirm("确定要清除当前游戏的所有存档数据吗？")) {
        {
          for (const _0x212b02 of Object.keys(localStorage)) {
            _0x212b02.startsWith("save") && _0x212b02 !== "saveData" && localStorage.removeItem(_0x212b02);
          }
          for (let _0x3fc201 = 1; _0x3fc201 <= _0x203c71.SLOT_COUNT; _0x3fc201++) {
            {
              const _0x4b09de = "" + _0x203c71.STORAGE_PREFIX + _0xad20d8 + "_" + _0x227df4 + "_" + _0x3fc201;
              if (_0x506ddd.get(_0x4b09de)) {
                _0x506ddd.remove(_0x4b09de);
              }
            }
          }
          _0x49770d("已清除存档数据");
          _0x551d0d();
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }
    }
  }
  function _0x4fc243() {
    if (confirm("确定要清除所有存档数据吗？（包括所有游戏的存档）")) {
      for (const _0x3f9112 of Object.keys(localStorage)) {
        (_0x3f9112.startsWith("cg_save_") || _0x3f9112.startsWith("save")) && localStorage.removeItem(_0x3f9112);
      }
      const _0x4fb9e6 = ["desiredUid"];
      _0x4fb9e6.forEach(_0x475e7b => {
        _0x506ddd.remove(_0x475e7b);
      });
      _0x49770d("已清除数据");
      _0x551d0d();
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }
  function _0x4d9a94() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();else {
          if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();else {
            if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          }
        }
      }
    } else {
      if (document.exitFullscreen) document.exitFullscreen();else {
        if (document.mozCancelFullScreen) document.mozCancelFullScreen();else {
          if (document.webkitExitFullscreen) document.webkitExitFullscreen();else document.msExitFullscreen && document.msExitFullscreen();
        }
      }
    }
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _0x5bd3e1) : _0x5bd3e1();
  setInterval(() => {
    _0x210e96.fm && !_0xb50b9f.uiCreated && _0x4299cb();
  }, 3000);
})();