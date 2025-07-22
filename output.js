//Tue Jul 22 2025 14:53:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x2780d9 = unsafeWindow || window;
  const _0x36f5e5 = "[咸鱼工具箱]:";
  const _0x5b3949 = {
    top: "10px",
    left: "10px"
  };
  const _0x3c33e0 = {
    engine_speed_rate: 50,
    quench_speed_enabled: true,
    nightmare_speed_enabled: true,
    panel_pos: _0x5b3949,
    panel_collapsed: false,
    accounts: [],
    selectedAccountFileName: null,
    activeTab: "accounts"
  };
  let _0x47c766 = {};
  function _0xea8798() {
    {
      try {
        {
          const _0x98bfb6 = {
            ..._0x47c766,
            accounts: _0x47c766.accounts.map(_0x59b9d9 => ({
              fileName: _0x59b9d9.fileName,
              hexString: _0x59b9d9.hexString
            }))
          };
          localStorage.setItem("XYWZ_ToolboxConfig_v9.8", JSON.stringify(_0x98bfb6));
        }
      } catch (_0x179c9d) {
        {
          console.error(_0x36f5e5 + " 保存配置失败:", _0x179c9d);
        }
      }
    }
  }
  function _0x547365() {
    {
      try {
        {
          const _0x337149 = localStorage.getItem("XYWZ_ToolboxConfig_v9.8");
          _0x47c766 = {
            ..._0x3c33e0,
            ...JSON.parse(_0x337149)
          };
        }
      } catch (_0x4fd052) {
        {
          const _0x5d8d1d = {
            ..._0x3c33e0
          };
          _0x47c766 = _0x5d8d1d;
        }
      }
    }
  }
  function _0x255596() {
    {
      GM_addStyle("\n            #accelerator-panel, #accelerator-toggle-btn { font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; user-select: none; box-sizing: border-box; }\n            #accelerator-panel { position: fixed; z-index: 99999; background: linear-gradient(145deg, #3e3e3e, #2a2a2a); border: 1px solid #555; border-radius: 12px; color: #e0e0e0; font-size: 14px; box-shadow: 0 5px 20px rgba(0,0,0,0.5); display: " + (_0x47c766.panel_collapsed ? "none" : "block") + "; width: 280px; overflow: hidden; }\n            #accelerator-panel .panel-header { padding: 10px 12px; background: rgba(0,0,0,0.2); cursor: move; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #4a4a4a; }\n            #accelerator-panel .panel-title { font-weight: bold; font-size: 15px; }\n            /* 标签页导航栏 */\n            .panel-tabs { display: flex; border-bottom: 1px solid #4a4a4a; }\n            .panel-tabs button { flex: 1; background: none; border: none; color: #aaa; padding: 12px 0; font-size: 14px; cursor: pointer; transition: background 0.2s, color 0.2s; border-bottom: 3px solid transparent; }\n            .panel-tabs button:hover { background: rgba(255,255,255,0.05); }\n            .panel-tabs button.active { color: #fff; font-weight: bold; border-bottom-color: #4CAF50; }\n            /* 标签页内容 */\n            .panel-body { padding: 15px; }\n            .tab-content { display: none; flex-direction: column; gap: 18px; }\n            .tab-content.active { display: flex; }\n            /* 通用组件样式 */\n            .setting-row { display: flex; align-items: center; justify-content: space-between; }\n            .slider-container { display: flex; flex-direction: column; gap: 8px; }\n            .speed-display { display: flex; justify-content: space-between; align-items: baseline; }\n            #speed-indicator { font-weight: bold; color: #4CAF50; font-size: 16px; }\n            .account-manager { display: flex; flex-direction: column; gap: 12px; }\n            #account-selector { background-color: #333; color: #fff; border: 1px solid #555; border-radius: 4px; padding: 8px; width: 100%; font-size: 14px; }\n            #account-selector:focus { outline: 1px solid #4CAF50; }\n            .button-row { display: flex; gap: 8px; }\n            .custom-file-upload, #refresh-page-btn, #delete-account-btn { \n                flex-grow: 1; text-align: center; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; transition: background-color 0.2s;\n            }\n            .custom-file-upload { background-color: #4CAF50; }\n            .custom-file-upload:hover { background-color: #45a049; }\n            #refresh-page-btn { background-color: #2196F3; }\n            #refresh-page-btn:hover { background-color: #1976D2; }\n            #delete-account-btn { background-color: #f44336; }\n            #delete-account-btn:hover { background-color: #d32f2f; }\n            #delete-account-btn:disabled { background-color: #757575; cursor: not-allowed; opacity: 0.7; }\n            #account-file-input { display: none; }\n            .disclaimer-box { margin-top: 15px; padding-top: 15px; border-top: 1px solid #4a4a4a; font-size: 12px; color: #9e9e9e; line-height: 1.5; text-align: justify; }\n            .switch-label { position: relative; display: inline-flex; align-items: center; cursor: pointer; }\n            .switch-label input { opacity: 0; width: 0; height: 0; }\n            .switch-slider { width: 38px; height: 20px; background-color: #555; border-radius: 10px; transition: background-color 0.2s ease; position: relative; }\n            .switch-slider::before { content: \"\"; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s ease; }\n            .switch-label input:checked + .switch-slider { background-color: #4CAF50; }\n            .switch-label input:checked + .switch-slider::before { transform: translateX(18px); }\n            input[type=\"range\"] { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; background: #555; border-radius: 3px; outline: none; margin: 5px 0; }\n            input[type=\"range\"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; background: #4CAF50; border-radius: 50%; cursor: pointer; border: 2px solid #fff; }\n            .collapse-btn { cursor: pointer; font-weight: bold; font-size: 20px; color: #aaa; line-height: 1; transition: color 0.2s; padding: 0 5px; }\n            .collapse-btn:hover { color: #fff; }\n            #accelerator-toggle-btn { position: fixed; z-index: 99998; background: linear-gradient(145deg, #3e3e3e, #2a2a2a); color: #fff; border: 1px solid #555; border-radius: 50%; width: 45px; height: 45px; display: " + (_0x47c766.panel_collapsed ? "flex" : "none") + "; justify-content: center; align-items: center; cursor: move; font-size: 24px; box-shadow: 0 2px 10px rgba(0,0,0,0.4); }\n        ");
      const _0x58dbb9 = "\n            <div id=\"accelerator-panel\">\n                <div class=\"panel-header\">\n                    <span class=\"panel-title\">咸鱼之王工具箱-苏御</span>\n                    <span class=\"collapse-btn\" title=\"折叠\">−</span>\n                </div>\n                <div class=\"panel-tabs\">\n                    <button data-tab=\"accounts\">账号管理</button>\n                    <button data-tab=\"accelerator\">功能加速</button>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"tab-content\" data-tab=\"accounts\">\n                        <div class=\"account-manager\">\n                            <select id=\"account-selector\"></select>\n                            <div class=\"button-row\">\n                               <label for=\"account-file-input\" class=\"custom-file-upload\">导入</label>\n                               <input type=\"file\" id=\"account-file-input\" multiple accept=\".bin\">\n                               <button id=\"delete-account-btn\" title=\"删除当前选中的账号\">删除</button>\n                               <button id=\"refresh-page-btn\" title=\"使用当前选中账号刷新游戏\">刷新</button>\n                            </div>\n                        </div>\n                        <div class=\"disclaimer-box\">\n                            <strong>免责声明：</strong>\n                            本工具仅供学习与技术交流，所有账号数据均存储于您的本地浏览器。作者不收集、不上传任何信息，亦不承担任何因使用本工具可能导致的风险或后果。\n                        </div>\n                    </div>\n                    <div class=\"tab-content\" data-tab=\"accelerator\">\n                        <div class=\"slider-container\">\n                            <div class=\"speed-display\">\n                                <label>引擎全局加速</label>\n                                <span id=\"speed-indicator\"></span>\n                            </div>\n                            <input type=\"range\" id=\"engine_speed_rate\" min=\"0\" max=\"50\" step=\"0.1\">\n                        </div>\n                        <div class=\"setting-row\">\n                            <span>淬炼加速</span>\n                            <label class=\"switch-label\"><input type=\"checkbox\" id=\"quench_speed_enabled\"><span class=\"switch-slider\"></span></label>\n                        </div>\n                        <div class=\"setting-row\">\n                            <span>十殿加速</span>\n                            <label class=\"switch-label\"><input type=\"checkbox\" id=\"nightmare_speed_enabled\"><span class=\"switch-slider\"></span></label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"accelerator-toggle-btn\" title=\"展开\">🚀</div>\n        ";
      document.body.insertAdjacentHTML("beforeend", _0x58dbb9);
      _0x362517();
      _0x1b2cef();
    }
  }
  function _0x362517() {
    {
      document.getElementById("engine_speed_rate").value = _0x47c766.engine_speed_rate;
      document.getElementById("speed-indicator").textContent = parseFloat(_0x47c766.engine_speed_rate).toFixed(1) + "x";
      document.getElementById("quench_speed_enabled").checked = _0x47c766.quench_speed_enabled;
      document.getElementById("nightmare_speed_enabled").checked = _0x47c766.nightmare_speed_enabled;
      _0x1a02ee();
      const _0x256367 = document.getElementById("accelerator-panel");
      const _0x57d238 = document.getElementById("accelerator-toggle-btn");
      _0x256367.style.top = _0x47c766.panel_pos.top;
      _0x256367.style.left = _0x47c766.panel_pos.left;
      _0x57d238.style.top = _0x47c766.panel_pos.top;
      _0x57d238.style.left = _0x47c766.panel_pos.left;
      _0xeda764(_0x47c766.activeTab);
    }
  }
  function _0xeda764(_0xe756d2) {
    document.querySelectorAll(".panel-tabs button").forEach(_0x8d59ce => {
      {
        _0x8d59ce.classList.toggle("active", _0x8d59ce.dataset.tab === _0xe756d2);
      }
    });
    document.querySelectorAll(".tab-content").forEach(_0x553d3b => {
      _0x553d3b.classList.toggle("active", _0x553d3b.dataset.tab === _0xe756d2);
    });
  }
  function _0x1a02ee() {
    {
      const _0xa02aa2 = document.getElementById("account-selector");
      const _0x26fff4 = _0x47c766.accounts.length > 0;
      document.getElementById("delete-account-btn").disabled = !_0x26fff4;
      _0xa02aa2.innerHTML = "";
      if (!_0x26fff4) {
        {
          const _0x3efa87 = new Option("请先导入BIN文件", "", true, true);
          _0x3efa87.disabled = true;
          _0xa02aa2.add(_0x3efa87);
          return;
        }
      }
      _0x47c766.accounts.forEach(_0x3590ae => {
        {
          const _0x1984d4 = _0x3590ae.fileName === _0x47c766.selectedAccountFileName;
          const _0x17ce40 = new Option(_0x3590ae.fileName.replace(".bin", ""), _0x3590ae.fileName, false, _0x1984d4);
          _0xa02aa2.add(_0x17ce40);
        }
      });
      if (_0x47c766.selectedAccountFileName) {
        {
          _0xa02aa2.value = _0x47c766.selectedAccountFileName;
        }
      }
    }
  }
  function _0x1b2cef() {
    {
      const _0x183dd2 = document.getElementById("accelerator-panel");
      const _0x360bd3 = _0x183dd2.querySelector(".panel-header");
      const _0x59a63e = document.getElementById("accelerator-toggle-btn");
      const _0xd1e48f = _0x183dd2.querySelector(".collapse-btn");
      const _0xa06782 = _0x183dd2.querySelector(".panel-tabs");
      _0xa06782.addEventListener("click", _0x25dabe => {
        {
          if (_0x25dabe.target.tagName === "BUTTON") {
            {
              const _0x2796d3 = _0x25dabe.target.dataset.tab;
              _0x47c766.activeTab = _0x2796d3;
              _0xeda764(_0x2796d3);
              _0xea8798();
            }
          }
        }
      });
      _0x183dd2.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x202862 => {
        {
          _0x202862.addEventListener("change", _0x43d4ef => {
            _0x47c766[_0x43d4ef.target.id] = _0x43d4ef.target.checked;
            _0xea8798();
          });
        }
      });
      const _0x489e27 = document.getElementById("engine_speed_rate");
      _0x489e27.addEventListener("input", _0x308bdb => {
        _0x47c766.engine_speed_rate = parseFloat(_0x308bdb.target.value);
        document.getElementById("speed-indicator").textContent = _0x47c766.engine_speed_rate.toFixed(1) + "x";
        _0x2a05c.accelerator.engine_speed.apply();
      });
      _0x489e27.addEventListener("change", () => _0xea8798());
      document.getElementById("account-file-input").addEventListener("change", _0x16e835);
      document.getElementById("account-selector").addEventListener("change", _0x4a07e6 => {
        {
          _0x47c766.selectedAccountFileName = _0x4a07e6.target.value;
          _0xea8798();
          console.log(_0x36f5e5 + " 已选择账号: " + _0x4a07e6.target.value + "，将自动刷新应用...");
          location.reload();
        }
      });
      document.getElementById("refresh-page-btn").addEventListener("click", () => {
        {
          if (!_0x47c766.selectedAccountFileName) {
            {
              alert("请先选择一个要登录的账号！");
              return;
            }
          }
          console.log(_0x36f5e5 + " 正在手动刷新页面...");
          location.reload();
        }
      });
      document.getElementById("delete-account-btn").addEventListener("click", _0x2fcbf2);
      const _0x26308d = _0x5b51fa => {
        {
          _0x47c766.panel_collapsed = _0x5b51fa;
          _0x183dd2.style.display = _0x5b51fa ? "none" : "block";
          _0x59a63e.style.display = _0x5b51fa ? "flex" : "none";
          _0xea8798();
        }
      };
      _0xd1e48f.onclick = () => _0x26308d(true);
      _0x59a63e.onclick = () => _0x26308d(false);
      _0x15c183(_0x360bd3, _0x183dd2);
      _0x15c183(_0x59a63e, _0x59a63e);
    }
  }
  function _0x2fcbf2() {
    {
      const _0x54fb90 = document.getElementById("account-selector");
      const _0x127570 = _0x54fb90.value;
      if (!_0x127570 || _0x47c766.accounts.length === 0) {
        {
          alert("当前没有可删除的账号。");
          return;
        }
      }
      const _0x49bdf2 = _0x54fb90.options[_0x54fb90.selectedIndex].text;
      if (confirm("您确定要删除账号 \"" + _0x49bdf2 + "\" 吗？\n此操作不可撤销！")) {
        {
          const _0x3eaf4e = _0x47c766.accounts.findIndex(_0x3d1201 => _0x3d1201.fileName === _0x127570);
          if (_0x3eaf4e > -1) {
            {
              _0x47c766.accounts.splice(_0x3eaf4e, 1);
              if (_0x47c766.selectedAccountFileName === _0x127570) {
                {
                  _0x47c766.accounts.length > 0 ? (_0x47c766.selectedAccountFileName = _0x47c766.accounts[0].fileName, console.log(_0x36f5e5 + " 已删除当前活动账号，自动切换到: " + _0x47c766.selectedAccountFileName)) : _0x47c766.selectedAccountFileName = null;
                }
              }
              _0xea8798();
              _0x1a02ee();
              console.log(_0x36f5e5 + " 账号 \"" + _0x127570 + "\" 已被删除。");
              alert("账号 \"" + _0x49bdf2 + "\" 已成功删除。");
            }
          } else {
            {
              alert("错误：在配置中找不到要删除的账号。");
            }
          }
        }
      }
    }
  }
  async function _0x16e835(_0x5c3d86) {
    {
      const _0x4cfe89 = _0x5c3d86.target.files;
      if (!_0x4cfe89 || _0x4cfe89.length === 0) {
        return;
      }
      let _0x573275 = false;
      let _0x50a66d = "";
      const _0x34cd5a = _0x44e064 => new Promise((_0x287690, _0x4b1955) => {
        {
          const _0x4a984c = new FileReader();
          _0x4a984c.onload = _0x179982 => {
            {
              try {
                {
                  const _0x347ce1 = Array.from(new Uint8Array(_0x179982.target.result)).map(_0x454d82 => _0x454d82.toString(16).padStart(2, "0")).join("");
                  const _0x474abb = {
                    fileName: _0x44e064.name,
                    hexString: _0x347ce1
                  };
                  _0x287690(_0x474abb);
                }
              } catch (_0x4c54db) {
                {
                  _0x4b1955(_0x4c54db);
                }
              }
            }
          };
          _0x4a984c.onerror = _0x38bc8b => _0x4b1955(_0x38bc8b);
          _0x4a984c.readAsArrayBuffer(_0x44e064);
        }
      });
      try {
        {
          const _0x457cba = await Promise.all(Array.from(_0x4cfe89).map(_0x34cd5a));
          _0x457cba.forEach(_0x18a009 => {
            {
              const {
                fileName: _0xc74876,
                hexString: _0x39b159
              } = _0x18a009;
              const _0x54ea42 = _0x47c766.accounts.findIndex(_0x349be9 => _0x349be9.fileName === _0xc74876);
              if (_0x54ea42 > -1) {
                {
                  _0x47c766.accounts[_0x54ea42].hexString = _0x39b159;
                }
              } else {
                {
                  const _0x5b0ad0 = {
                    fileName: _0xc74876,
                    hexString: _0x39b159
                  };
                  _0x47c766.accounts.push(_0x5b0ad0);
                  _0x573275 = true;
                }
              }
              _0x50a66d = _0xc74876;
            }
          });
          !_0x47c766.selectedAccountFileName && _0x47c766.accounts.length > 0 && (_0x47c766.selectedAccountFileName = _0x47c766.accounts[0].fileName);
          _0x1a02ee();
          if (_0x573275) {
            {
              if (confirm("成功导入新账号\"" + _0x50a66d.replace(".bin", "") + "\"，是否立即切换并刷新游戏？")) {
                {
                  _0x47c766.selectedAccountFileName = _0x50a66d;
                  _0xea8798();
                  location.reload();
                }
              } else {
                {
                  _0xea8798();
                }
              }
            }
          } else {
            {
              _0xea8798();
              alert("所有选中的账号文件已成功更新！");
            }
          }
        }
      } catch (_0x33d55a) {
        console.error(_0x36f5e5 + " 处理文件时出错:", _0x33d55a);
        alert("处理文件时出错，请检查文件格式或在控制台查看详情。");
      }
      _0x5c3d86.target.value = "";
    }
  }
  function _0x15c183(_0x2e9e9d, _0x3b6975) {
    {
      let _0x5f2659 = false;
      let _0x2c08fe;
      let _0x53f68c;
      let _0x42a98d;
      let _0xb324e8;
      const _0x14e628 = _0x1441ad => {
        {
          if (_0x1441ad.target.classList.contains("collapse-btn")) {
            return;
          }
          const _0x58266b = _0x1441ad.type.startsWith("touch");
          if (_0x58266b && _0x1441ad.touches.length > 1) {
            return;
          }
          const _0x2346a7 = _0x58266b ? _0x1441ad.touches[0] : _0x1441ad;
          _0x5f2659 = false;
          _0x42a98d = _0x2346a7.clientX;
          _0xb324e8 = _0x2346a7.clientY;
          _0x2c08fe = _0x2346a7.clientX - _0x3b6975.offsetLeft;
          _0x53f68c = _0x2346a7.clientY - _0x3b6975.offsetTop;
          const _0x512284 = {
            passive: false
          };
          document.addEventListener(_0x58266b ? "touchmove" : "mousemove", _0x44cccc, _0x512284);
          document.addEventListener(_0x58266b ? "touchend" : "mouseup", _0xe7c9ed);
        }
      };
      const _0x44cccc = _0x41fbeb => {
        {
          const _0x4fce17 = _0x41fbeb.type.startsWith("touch");
          const _0x26d010 = _0x4fce17 ? _0x41fbeb.touches[0] : _0x41fbeb;
          if (!_0x5f2659 && (Math.abs(_0x26d010.clientX - _0x42a98d) > 5 || Math.abs(_0x26d010.clientY - _0xb324e8) > 5)) {
            {
              _0x5f2659 = true;
            }
          }
          if (_0x5f2659) {
            {
              _0x41fbeb.preventDefault();
              let _0xa580ca = _0x26d010.clientX - _0x2c08fe;
              let _0x4e7cb3 = _0x26d010.clientY - _0x53f68c;
              const _0x5df2ef = 5;
              _0xa580ca = Math.max(_0x5df2ef, Math.min(_0xa580ca, window.innerWidth - _0x3b6975.offsetWidth - _0x5df2ef));
              _0x4e7cb3 = Math.max(_0x5df2ef, Math.min(_0x4e7cb3, window.innerHeight - _0x3b6975.offsetHeight - _0x5df2ef));
              _0x3b6975.style.left = _0xa580ca + "px";
              _0x3b6975.style.top = _0x4e7cb3 + "px";
            }
          }
        }
      };
      const _0xe7c9ed = _0x234af8 => {
        {
          const _0x5b5cec = _0x234af8.type.startsWith("touch");
          document.removeEventListener(_0x5b5cec ? "touchmove" : "mousemove", _0x44cccc);
          document.removeEventListener(_0x5b5cec ? "touchend" : "mouseup", _0xe7c9ed);
          if (_0x5f2659) {
            {
              const _0x16f0d1 = {
                top: _0x3b6975.style.top,
                left: _0x3b6975.style.left
              };
              _0x47c766.panel_pos = _0x16f0d1;
              document.getElementById("accelerator-panel").style.top = _0x3b6975.style.top;
              document.getElementById("accelerator-panel").style.left = _0x3b6975.style.left;
              document.getElementById("accelerator-toggle-btn").style.top = _0x3b6975.style.top;
              document.getElementById("accelerator-toggle-btn").style.left = _0x3b6975.style.left;
              _0xea8798();
            }
          }
        }
      };
      _0x2e9e9d.addEventListener("mousedown", _0x14e628);
      const _0x5d8dce = {
        passive: false
      };
      _0x2e9e9d.addEventListener("touchstart", _0x14e628, _0x5d8dce);
    }
  }
  const _0x186d98 = {
    accelerator: false,
    login: false
  };
  const _0x1740bb = {
    quench: false,
    nightmare: false
  };
  const _0x31a0d4 = {
    authUser: false,
    serverList: false,
    isolate: false
  };
  const _0x2a05c = {
    isReady: _0x186d98,
    accelerator: {
      hooksInjected: _0x1740bb,
      engine_speed: {
        isReady: false,
        apply: () => {
          {
            if (_0x2a05c.accelerator.engine_speed.isReady) {
              _0x2780d9.cc.director.getScheduler().setTimeScale(_0x47c766.engine_speed_rate);
            }
          }
        }
      },
      injectQuenchHook: () => {
        {
          if (_0x2a05c.accelerator.hooksInjected.quench) {
            return;
          }
          try {
            {
              const _0x4feb68 = _0x2780d9.__require("TimerManager").TimerManager;
              if (!_0x4feb68 || !_0x4feb68.instance || _0x4feb68.instance.onTimer.__isPatched) {
                return;
              }
              const _0x540b5b = _0x4feb68.instance.onTimer;
              _0x4feb68.instance.onTimer = function (..._0x22c772) {
                {
                  if (_0x47c766.quench_speed_enabled && _0x22c772[0] && _0x22c772[1] && _0x22c772[0] === _0x22c772[1]._updateQuench) {
                    {
                      _0x22c772[2] = 1;
                      const _0x391ffe = _0x22c772[0];
                      _0x22c772[0] = function (_0x6af159) {
                        {
                          this._isInQuenchAnim = false;
                          _0x391ffe.call(this, _0x6af159);
                        }
                      };
                    }
                  }
                  return _0x540b5b.apply(this, _0x22c772);
                }
              };
              _0x4feb68.instance.onTimer.__isPatched = true;
              console.log(_0x36f5e5 + " 淬炼加速补丁已注入。");
              _0x2a05c.accelerator.hooksInjected.quench = true;
            }
          } catch (_0x2da307) {}
        }
      },
      injectNightmareHook: () => {
        {
          if (_0x2a05c.accelerator.hooksInjected.nightmare) {
            return;
          }
          try {
            {
              const _0x1afe77 = _0x2780d9.__require("NightmareBattlePanel").NightmareBattlePanel;
              if (!_0x1afe77 || !_0x1afe77.prototype.onShow || _0x1afe77.prototype.onShow.__isPatched) {
                return;
              }
              const _0x3d248f = _0x1afe77.prototype.onShow;
              _0x1afe77.prototype.onShow = function (..._0x59d202) {
                {
                  if (this._originalDefaultTimescale === undefined) {
                    this._originalDefaultTimescale = this.DEFAULT_TIMESCALE;
                  }
                  this.DEFAULT_TIMESCALE = _0x47c766.nightmare_speed_enabled ? 100 : this._originalDefaultTimescale;
                  return _0x3d248f.apply(this, _0x59d202);
                }
              };
              _0x1afe77.prototype.onShow.__isPatched = true;
              console.log(_0x36f5e5 + " 十殿加速补丁已注入。");
              _0x2a05c.accelerator.hooksInjected.nightmare = true;
            }
          } catch (_0x32f9a4) {}
        }
      }
    },
    login: {
      decryptedData: null,
      patchesApplied: _0x31a0d4,
      decryptActiveAccount: () => {
        {
          if (_0x2a05c.login.decryptedData) {
            return true;
          }
          if (!_0x47c766.selectedAccountFileName) {
            return false;
          }
          const _0x4055fc = _0x47c766.accounts.find(_0x26a9b1 => _0x26a9b1.fileName === _0x47c766.selectedAccountFileName);
          if (!_0x4055fc) {
            {
              console.error(_0x36f5e5 + " 找不到选定的账号文件: " + _0x47c766.selectedAccountFileName);
              return false;
            }
          }
          const _0x482531 = _0x2780d9.__require("13");
          const _0x20101a = _0x4055fc.hexString.match(/.{1,2}/g).map(_0x22424f => parseInt(_0x22424f, 16));
          _0x2a05c.login.decryptedData = _0x482531.decMsg(new Uint8Array(_0x20101a).buffer, {
            decrypt: _0x482531.lz4XorDecode,
            encrypt: _0x482531.lz4XorEncode
          });
          console.log(_0x36f5e5 + " 账号 [" + _0x4055fc.fileName + "] 解密成功。");
          return true;
        }
      },
      apply: () => {
        {
          const _0x2e9440 = _0x2780d9.__require("data-index");
          const _0x25d15c = _0x2e9440.LoginService;
          const _0x322bd1 = _0x2a05c.login.decryptedData;
          if (!_0x25d15c || !_0x25d15c.authUser || !_0x25d15c.serverList || !_0x2e9440.Isolate) {
            return false;
          }
          if (!_0x25d15c.authUser.isSelfCreate) {
            {
              const _0x3637c6 = _0x25d15c.authUser;
              _0x25d15c.authUser = _0x1e367b => {
                {
                  console.log(_0x36f5e5 + " authUser 已拦截");
                  const _0x12d4a1 = {
                    ..._0x1e367b,
                    platformExt: _0x322bd1._raw.platformExt,
                    info: _0x322bd1._raw.info
                  };
                  return _0x3637c6(_0x12d4a1);
                }
              };
              _0x25d15c.authUser.isSelfCreate = true;
              _0x2a05c.login.patchesApplied.authUser = true;
            }
          }
          if (!_0x25d15c.serverList.isSelfCreate) {
            {
              const _0x3e4641 = _0x25d15c.serverList;
              _0x25d15c.serverList = () => {
                {
                  console.log(_0x36f5e5 + " serverList 已拦截");
                  return _0x3e4641(_0x322bd1._raw);
                }
              };
              _0x25d15c.serverList.isSelfCreate = true;
              _0x2a05c.login.patchesApplied.serverList = true;
            }
          }
          if (!_0x2e9440.Isolate.isSelfCreate) {
            {
              const _0x2a63ab = _0x2e9440.Isolate;
              _0x2e9440.Isolate = function (..._0x54a382) {
                {
                  const _0x42a640 = new _0x2a63ab(..._0x54a382);
                  if (_0x42a640.LoginService && !_0x42a640.LoginService.authUser.isSelfCreate) {
                    {
                      const _0x56b18b = _0x42a640.LoginService.authUser;
                      _0x42a640.LoginService.authUser = _0x41be71 => _0x56b18b({
                        ..._0x41be71,
                        platformExt: _0x322bd1._raw.platformExt,
                        info: _0x322bd1._raw.info
                      });
                      _0x42a640.LoginService.authUser.isSelfCreate = true;
                    }
                  }
                  return _0x42a640;
                }
              };
              _0x2e9440.Isolate.isSelfCreate = true;
              _0x2a05c.login.patchesApplied.isolate = true;
            }
          }
          const _0x20541f = Object.values(_0x2a05c.login.patchesApplied).every(Boolean);
          if (_0x20541f && !_0x2a05c.isReady.login) {
            {
              document.title = "【" + _0x47c766.selectedAccountFileName.replace(".bin", "") + "】" + document.title;
              console.log(_0x36f5e5 + " 所有登录补丁应用成功！");
            }
          }
          return _0x20541f;
        }
      }
    }
  };
  function _0x889830() {
    _0x547365();
    _0x255596();
    console.log(_0x36f5e5 + " 初始化，开始轮询等待游戏模块...");
    const _0x35611e = setInterval(() => {
      if (_0x2a05c.isReady.accelerator && _0x2a05c.isReady.login) {
        {
          console.log(_0x36f5e5 + " 所有模块已加载并注入，初始化完成。");
          clearInterval(_0x35611e);
          return;
        }
      }
      if (!_0x2a05c.isReady.accelerator) {
        {
          try {
            {
              if (!_0x2a05c.accelerator.engine_speed.isReady && _0x2780d9.cc && _0x2780d9.cc.director && _0x2780d9.cc.director.getScheduler()) {
                {
                  _0x2a05c.accelerator.engine_speed.isReady = true;
                  _0x2a05c.accelerator.engine_speed.apply();
                  console.log(_0x36f5e5 + " Cocos引擎已就绪。");
                }
              }
              if (typeof _0x2780d9.__require === "function") {
                {
                  _0x2a05c.accelerator.injectQuenchHook();
                  _0x2a05c.accelerator.injectNightmareHook();
                }
              }
              if (_0x2a05c.accelerator.engine_speed.isReady && _0x2a05c.accelerator.hooksInjected.quench && _0x2a05c.accelerator.hooksInjected.nightmare) {
                {
                  _0x2a05c.isReady.accelerator = true;
                }
              }
            }
          } catch (_0x10eaa5) {}
        }
      }
      if (!_0x2a05c.isReady.login) {
        if (!_0x47c766.selectedAccountFileName) {
          {
            console.log(_0x36f5e5 + " 未选择任何账号，登录补丁将不生效。");
            _0x2a05c.isReady.login = true;
            return;
          }
        }
        try {
          _0x2a05c.login.decryptActiveAccount() && _0x2a05c.login.apply() && (_0x2a05c.isReady.login = true);
        } catch (_0x1503e1) {}
      }
    }, 200);
  }
  _0x889830();
})();