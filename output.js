//Tue Jul 22 2025 15:00:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  "use strict";
  const _0x2165f7 = unsafeWindow || window;
  const _0x3883d8 = "[咸鱼工具箱]:";
  const _0x532f5d = {
    top: "10px",
    left: "10px"
  };
  const _0x4b0dda = {
    engine_speed_rate: 1,
    quench_speed_enabled: true,
    nightmare_speed_enabled: true,
    panel_pos: _0x532f5d,
    panel_collapsed: false,
    accounts: [],
    selectedAccountFileName: null,
    activeTab: "accounts"
  };
  let _0x3e1c86 = {};
  function _0x5b83ac() {
    {
      try {
        {
          const _0x57a08b = {
            ..._0x3e1c86,
            accounts: _0x3e1c86.accounts.map(_0xfb8045 => ({
              fileName: _0xfb8045.fileName,
              hexString: _0xfb8045.hexString
            }))
          };
          localStorage.setItem("XYWZ_ToolboxConfig_v9.9", JSON.stringify(_0x57a08b));
        }
      } catch (_0x4218b8) {
        console.error(_0x3883d8 + " 保存配置失败:", _0x4218b8);
      }
    }
  }
  function _0x1359ea() {
    {
      try {
        {
          const _0x4edd99 = localStorage.getItem("XYWZ_ToolboxConfig_v9.9");
          _0x3e1c86 = {
            ..._0x4b0dda,
            ...JSON.parse(_0x4edd99)
          };
        }
      } catch (_0x461eb4) {
        {
          const _0x3d4fac = {
            ..._0x4b0dda
          };
          _0x3e1c86 = _0x3d4fac;
        }
      }
    }
  }
  function _0x27c5c0() {
    {
      GM_addStyle("\n            #accelerator-panel, #accelerator-toggle-btn { font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; user-select: none; box-sizing: border-box; }\n            #accelerator-panel { position: fixed; z-index: 99999; background: linear-gradient(145deg, #3e3e3e, #2a2a2a); border: 1px solid #555; border-radius: 12px; color: #e0e0e0; font-size: 14px; box-shadow: 0 5px 20px rgba(0,0,0,0.5); display: " + (_0x3e1c86.panel_collapsed ? "none" : "block") + "; width: 280px; overflow: hidden; }\n            #accelerator-panel .panel-header { padding: 10px 12px; background: rgba(0,0,0,0.2); cursor: move; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #4a4a4a; }\n            #accelerator-panel .panel-title { font-weight: bold; font-size: 15px; }\n            .panel-tabs { display: flex; border-bottom: 1px solid #4a4a4a; }\n            .panel-tabs button { flex: 1; background: none; border: none; color: #aaa; padding: 12px 0; font-size: 14px; cursor: pointer; transition: background 0.2s, color 0.2s; border-bottom: 3px solid transparent; }\n            .panel-tabs button:hover { background: rgba(255,255,255,0.05); }\n            .panel-tabs button.active { color: #fff; font-weight: bold; border-bottom-color: #4CAF50; }\n            .panel-body { padding: 15px; }\n            .tab-content { display: none; flex-direction: column; gap: 18px; }\n            .tab-content.active { display: flex; }\n            .setting-row { display: flex; align-items: center; justify-content: space-between; }\n            .slider-container { display: flex; flex-direction: column; gap: 8px; }\n            .speed-display { display: flex; justify-content: space-between; align-items: baseline; }\n            #speed-indicator { font-weight: bold; color: #4CAF50; font-size: 16px; }\n            .account-manager { display: flex; flex-direction: column; gap: 12px; }\n            #account-selector { background-color: #333; color: #fff; border: 1px solid #555; border-radius: 4px; padding: 8px; width: 100%; font-size: 14px; }\n            #account-selector:focus { outline: 1px solid #4CAF50; }\n            .button-row { display: flex; gap: 8px; }\n            .custom-file-upload, #refresh-page-btn, #delete-account-btn { flex-grow: 1; text-align: center; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; transition: background-color 0.2s; }\n            .custom-file-upload { background-color: #4CAF50; }\n            .custom-file-upload:hover { background-color: #45a049; }\n            #refresh-page-btn { background-color: #2196F3; }\n            #refresh-page-btn:hover { background-color: #1976D2; }\n            #delete-account-btn { background-color: #f44336; }\n            #delete-account-btn:hover { background-color: #d32f2f; }\n            #delete-account-btn:disabled { background-color: #757575; cursor: not-allowed; opacity: 0.7; }\n            #account-file-input { display: none; }\n            .disclaimer-box { margin-top: 15px; padding-top: 15px; border-top: 1px solid #4a4a4a; font-size: 12px; color: #9e9e9e; line-height: 1.5; text-align: justify; }\n            .switch-label { position: relative; display: inline-flex; align-items: center; cursor: pointer; }\n            .switch-label input { opacity: 0; width: 0; height: 0; }\n            .switch-slider { width: 38px; height: 20px; background-color: #555; border-radius: 10px; transition: background-color 0.2s ease; position: relative; }\n            .switch-slider::before { content: \"\"; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background-color: white; border-radius: 50%; transition: transform 0.2s ease; }\n            .switch-label input:checked + .switch-slider { background-color: #4CAF50; }\n            .switch-label input:checked + .switch-slider::before { transform: translateX(18px); }\n            input[type=\"range\"] { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; background: #555; border-radius: 3px; outline: none; margin: 5px 0; }\n            input[type=\"range\"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; background: #4CAF50; border-radius: 50%; cursor: pointer; border: 2px solid #fff; }\n            .collapse-btn { cursor: pointer; font-weight: bold; font-size: 20px; color: #aaa; line-height: 1; transition: color 0.2s; padding: 0 5px; }\n            .collapse-btn:hover { color: #fff; }\n            #accelerator-toggle-btn { position: fixed; z-index: 99998; background: linear-gradient(145deg, #3e3e3e, #2a2a2a); color: #fff; border: 1px solid #555; border-radius: 50%; width: 45px; height: 45px; display: " + (_0x3e1c86.panel_collapsed ? "flex" : "none") + "; justify-content: center; align-items: center; cursor: move; font-size: 24px; box-shadow: 0 2px 10px rgba(0,0,0,0.4); }\n        ");
      const _0x835f04 = "\n            <div id=\"accelerator-panel\">\n                <div class=\"panel-header\">\n                    <span class=\"panel-title\">咸鱼之王工具箱-苏御</span>\n                    <span class=\"collapse-btn\" title=\"折叠\">−</span>\n                </div>\n                <div class=\"panel-tabs\">\n                    <button data-tab=\"accounts\">账号管理</button>\n                    <button data-tab=\"accelerator\">功能加速</button>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"tab-content\" data-tab=\"accounts\">\n                        <div class=\"account-manager\">\n                            <select id=\"account-selector\"></select>\n                            <div class=\"button-row\">\n                               <label for=\"account-file-input\" class=\"custom-file-upload\">导入</label>\n                               <input type=\"file\" id=\"account-file-input\" multiple accept=\".bin\">\n                               <button id=\"delete-account-btn\" title=\"删除当前选中的账号\">删除</button>\n                               <button id=\"refresh-page-btn\" title=\"使用当前选中账号刷新游戏\">刷新</button>\n                            </div>\n                        </div>\n                        <div class=\"disclaimer-box\">\n                            <strong>免责声明：</strong>\n                            本工具仅供学习与技术交流，所有账号数据均存储于您的本地浏览器。作者不收集、不上传任何信息，亦不承担任何因使用本工具可能导致的风险或后果。\n                        </div>\n                    </div>\n                    <div class=\"tab-content\" data-tab=\"accelerator\">\n                        <div class=\"slider-container\">\n                            <div class=\"speed-display\">\n                                <label>引擎全局加速</label>\n                                <span id=\"speed-indicator\"></span>\n                            </div>\n                            <input type=\"range\" id=\"engine_speed_rate\" min=\"0\" max=\"50\" step=\"0.1\">\n                        </div>\n                        <div class=\"setting-row\">\n                            <span>淬炼秒完成</span>\n                            <label class=\"switch-label\"><input type=\"checkbox\" id=\"quench_speed_enabled\"><span class=\"switch-slider\"></span></label>\n                        </div>\n                        <div class=\"setting-row\">\n                            <span>十殿秒通关</span>\n                            <label class=\"switch-label\"><input type=\"checkbox\" id=\"nightmare_speed_enabled\"><span class=\"switch-slider\"></span></label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"accelerator-toggle-btn\" title=\"展开\">🚀</div>\n        ";
      document.body.insertAdjacentHTML("beforeend", _0x835f04);
      _0x558858();
      _0x2a02be();
    }
  }
  function _0x558858() {
    {
      document.getElementById("engine_speed_rate").value = _0x3e1c86.engine_speed_rate;
      document.getElementById("speed-indicator").textContent = parseFloat(_0x3e1c86.engine_speed_rate).toFixed(1) + "x";
      document.getElementById("quench_speed_enabled").checked = _0x3e1c86.quench_speed_enabled;
      document.getElementById("nightmare_speed_enabled").checked = _0x3e1c86.nightmare_speed_enabled;
      _0x3d29d4();
      const _0x5372eb = document.getElementById("accelerator-panel");
      const _0x4591ea = document.getElementById("accelerator-toggle-btn");
      _0x5372eb.style.top = _0x3e1c86.panel_pos.top;
      _0x5372eb.style.left = _0x3e1c86.panel_pos.left;
      _0x4591ea.style.top = _0x3e1c86.panel_pos.top;
      _0x4591ea.style.left = _0x3e1c86.panel_pos.left;
      _0x226f95(_0x3e1c86.activeTab);
    }
  }
  function _0x226f95(_0x1b6cad) {
    document.querySelectorAll(".panel-tabs button").forEach(_0x7da71d => {
      _0x7da71d.classList.toggle("active", _0x7da71d.dataset.tab === _0x1b6cad);
    });
    document.querySelectorAll(".tab-content").forEach(_0x28e569 => {
      {
        _0x28e569.classList.toggle("active", _0x28e569.dataset.tab === _0x1b6cad);
      }
    });
  }
  function _0x3d29d4() {
    {
      const _0x480465 = document.getElementById("account-selector");
      const _0x4ee42a = _0x3e1c86.accounts.length > 0;
      document.getElementById("delete-account-btn").disabled = !_0x4ee42a;
      _0x480465.innerHTML = "";
      if (!_0x4ee42a) {
        {
          const _0x59e88c = new Option("请先导入BIN文件", "", true, true);
          _0x59e88c.disabled = true;
          _0x480465.add(_0x59e88c);
          return;
        }
      }
      _0x3e1c86.accounts.forEach(_0x2eb8cb => {
        {
          const _0x3d3e84 = _0x2eb8cb.fileName === _0x3e1c86.selectedAccountFileName;
          const _0x2c1975 = new Option(_0x2eb8cb.fileName.replace(".bin", ""), _0x2eb8cb.fileName, false, _0x3d3e84);
          _0x480465.add(_0x2c1975);
        }
      });
      if (_0x3e1c86.selectedAccountFileName) {
        {
          _0x480465.value = _0x3e1c86.selectedAccountFileName;
        }
      }
    }
  }
  function _0x2a02be() {
    {
      const _0x5d7e23 = document.getElementById("accelerator-panel");
      const _0x54461c = _0x5d7e23.querySelector(".panel-header");
      const _0x249c70 = document.getElementById("accelerator-toggle-btn");
      const _0x10d6c2 = _0x5d7e23.querySelector(".collapse-btn");
      const _0x21a722 = _0x5d7e23.querySelector(".panel-tabs");
      _0x21a722.addEventListener("click", _0x408f5f => {
        {
          if (_0x408f5f.target.tagName === "BUTTON") {
            {
              const _0x16d482 = _0x408f5f.target.dataset.tab;
              _0x3e1c86.activeTab = _0x16d482;
              _0x226f95(_0x16d482);
              _0x5b83ac();
            }
          }
        }
      });
      _0x5d7e23.querySelectorAll("input[type=\"checkbox\"]").forEach(_0xa44ec5 => {
        {
          _0xa44ec5.addEventListener("change", _0x453c3f => {
            {
              _0x3e1c86[_0x453c3f.target.id] = _0x453c3f.target.checked;
              _0x5b83ac();
              if (_0x453c3f.target.id === "nightmare_speed_enabled") {
                {
                  _0x49266a.accelerator.applyNightmareSpeed();
                }
              }
            }
          });
        }
      });
      const _0x374513 = document.getElementById("engine_speed_rate");
      _0x374513.addEventListener("input", _0x244b93 => {
        {
          _0x3e1c86.engine_speed_rate = parseFloat(_0x244b93.target.value);
          document.getElementById("speed-indicator").textContent = _0x3e1c86.engine_speed_rate.toFixed(1) + "x";
          _0x49266a.accelerator.engine_speed.apply();
        }
      });
      _0x374513.addEventListener("change", () => _0x5b83ac());
      document.getElementById("account-file-input").addEventListener("change", _0x4612ce);
      document.getElementById("account-selector").addEventListener("change", _0x2269bb => {
        {
          _0x3e1c86.selectedAccountFileName = _0x2269bb.target.value;
          _0x5b83ac();
          console.log(_0x3883d8 + " 已选择账号: " + _0x2269bb.target.value + "，将自动刷新应用...");
          location.reload();
        }
      });
      document.getElementById("refresh-page-btn").addEventListener("click", () => {
        {
          if (!_0x3e1c86.selectedAccountFileName) {
            {
              alert("请先选择一个要登录的账号！");
              return;
            }
          }
          console.log(_0x3883d8 + " 正在手动刷新页面...");
          location.reload();
        }
      });
      document.getElementById("delete-account-btn").addEventListener("click", _0x321116);
      const _0x44fd77 = _0xc0b516 => {
        _0x3e1c86.panel_collapsed = _0xc0b516;
        _0x5d7e23.style.display = _0xc0b516 ? "none" : "block";
        _0x249c70.style.display = _0xc0b516 ? "flex" : "none";
        _0x5b83ac();
      };
      _0x10d6c2.onclick = () => _0x44fd77(true);
      _0x249c70.onclick = () => _0x44fd77(false);
      _0x41a8f4(_0x54461c, _0x5d7e23);
      _0x41a8f4(_0x249c70, _0x249c70);
    }
  }
  function _0x321116() {
    {
      const _0x1611fc = document.getElementById("account-selector");
      const _0x43fa0e = _0x1611fc.value;
      if (!_0x43fa0e || _0x3e1c86.accounts.length === 0) {
        {
          alert("当前没有可删除的账号。");
          return;
        }
      }
      const _0x1bda5f = _0x1611fc.options[_0x1611fc.selectedIndex].text;
      if (confirm("您确定要删除账号 \"" + _0x1bda5f + "\" 吗？\n此操作不可撤销！")) {
        {
          const _0xc8d4d8 = _0x3e1c86.accounts.findIndex(_0xbfac75 => _0xbfac75.fileName === _0x43fa0e);
          if (_0xc8d4d8 > -1) {
            {
              _0x3e1c86.accounts.splice(_0xc8d4d8, 1);
              if (_0x3e1c86.selectedAccountFileName === _0x43fa0e) {
                {
                  _0x3e1c86.selectedAccountFileName = _0x3e1c86.accounts.length > 0 ? _0x3e1c86.accounts[0].fileName : null;
                  if (_0x3e1c86.selectedAccountFileName) {
                    console.log(_0x3883d8 + " 已删除当前活动账号，自动切换到: " + _0x3e1c86.selectedAccountFileName);
                  }
                }
              }
              _0x5b83ac();
              _0x3d29d4();
              console.log(_0x3883d8 + " 账号 \"" + _0x43fa0e + "\" 已被删除。");
              alert("账号 \"" + _0x1bda5f + "\" 已成功删除。");
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
  async function _0x4612ce(_0x270041) {
    {
      const _0x157414 = _0x270041.target.files;
      if (!_0x157414 || _0x157414.length === 0) {
        return;
      }
      let _0xaa605d = false;
      let _0x1e256a = "";
      const _0x50d1ef = _0x5511f8 => new Promise((_0xf154c7, _0x37e1ad) => {
        {
          const _0x1081bd = new FileReader();
          _0x1081bd.onload = _0x5684d4 => {
            {
              try {
                {
                  const _0x196a38 = Array.from(new Uint8Array(_0x5684d4.target.result)).map(_0x172125 => _0x172125.toString(16).padStart(2, "0")).join("");
                  const _0x4491c6 = {
                    fileName: _0x5511f8.name,
                    hexString: _0x196a38
                  };
                  _0xf154c7(_0x4491c6);
                }
              } catch (_0x48d65f) {
                {
                  _0x37e1ad(_0x48d65f);
                }
              }
            }
          };
          _0x1081bd.onerror = _0x4f6baf => _0x37e1ad(_0x4f6baf);
          _0x1081bd.readAsArrayBuffer(_0x5511f8);
        }
      });
      try {
        {
          const _0x55992b = await Promise.all(Array.from(_0x157414).map(_0x50d1ef));
          _0x55992b.forEach(_0x56275e => {
            {
              const {
                fileName: _0x24c044,
                hexString: _0x998c23
              } = _0x56275e;
              const _0x5aee0f = _0x3e1c86.accounts.findIndex(_0x29f3c5 => _0x29f3c5.fileName === _0x24c044);
              if (_0x5aee0f > -1) {
                {
                  _0x3e1c86.accounts[_0x5aee0f].hexString = _0x998c23;
                }
              } else {
                {
                  const _0x165f8b = {
                    fileName: _0x24c044,
                    hexString: _0x998c23
                  };
                  _0x3e1c86.accounts.push(_0x165f8b);
                  _0xaa605d = true;
                }
              }
              _0x1e256a = _0x24c044;
            }
          });
          if (!_0x3e1c86.selectedAccountFileName && _0x3e1c86.accounts.length > 0) {
            {
              _0x3e1c86.selectedAccountFileName = _0x3e1c86.accounts[0].fileName;
            }
          }
          _0x3d29d4();
          if (_0xaa605d) {
            {
              if (confirm("成功导入新账号\"" + _0x1e256a.replace(".bin", "") + "\"，是否立即切换并刷新游戏？")) {
                {
                  _0x3e1c86.selectedAccountFileName = _0x1e256a;
                  _0x5b83ac();
                  location.reload();
                }
              } else {
                _0x5b83ac();
              }
            }
          } else {
            {
              _0x5b83ac();
              alert("所有选中的账号文件已成功更新！");
            }
          }
        }
      } catch (_0x5debdb) {
        {
          console.error(_0x3883d8 + " 处理文件时出错:", _0x5debdb);
          alert("处理文件时出错，请检查文件格式或在控制台查看详情。");
        }
      }
      _0x270041.target.value = "";
    }
  }
  function _0x41a8f4(_0x472bd5, _0x33d707) {
    {
      let _0x7d9153 = false;
      let _0x1d4e48;
      let _0x54666e;
      let _0x3bb561;
      let _0x101d8c;
      const _0x3b75ec = _0x2b24d1 => {
        {
          if (_0x2b24d1.target.classList.contains("collapse-btn")) {
            return;
          }
          const _0x5ba3f0 = _0x2b24d1.type.startsWith("touch");
          if (_0x5ba3f0 && _0x2b24d1.touches.length > 1) {
            return;
          }
          const _0x329a5e = _0x5ba3f0 ? _0x2b24d1.touches[0] : _0x2b24d1;
          _0x7d9153 = false;
          _0x3bb561 = _0x329a5e.clientX;
          _0x101d8c = _0x329a5e.clientY;
          _0x1d4e48 = _0x329a5e.clientX - _0x33d707.offsetLeft;
          _0x54666e = _0x329a5e.clientY - _0x33d707.offsetTop;
          const _0x256a4b = {
            passive: false
          };
          document.addEventListener(_0x5ba3f0 ? "touchmove" : "mousemove", _0x5d170f, _0x256a4b);
          document.addEventListener(_0x5ba3f0 ? "touchend" : "mouseup", _0x1567c5);
        }
      };
      const _0x5d170f = _0x1f642d => {
        {
          const _0x2e6680 = _0x1f642d.type.startsWith("touch");
          const _0xde8595 = _0x2e6680 ? _0x1f642d.touches[0] : _0x1f642d;
          if (!_0x7d9153 && (Math.abs(_0xde8595.clientX - _0x3bb561) > 5 || Math.abs(_0xde8595.clientY - _0x101d8c) > 5)) {
            {
              _0x7d9153 = true;
            }
          }
          if (_0x7d9153) {
            {
              _0x1f642d.preventDefault();
              let _0x38dffa = _0xde8595.clientX - _0x1d4e48;
              let _0x2f7ddc = _0xde8595.clientY - _0x54666e;
              const _0x22d2d8 = 5;
              _0x38dffa = Math.max(_0x22d2d8, Math.min(_0x38dffa, window.innerWidth - _0x33d707.offsetWidth - _0x22d2d8));
              _0x2f7ddc = Math.max(_0x22d2d8, Math.min(_0x2f7ddc, window.innerHeight - _0x33d707.offsetHeight - _0x22d2d8));
              _0x33d707.style.left = _0x38dffa + "px";
              _0x33d707.style.top = _0x2f7ddc + "px";
            }
          }
        }
      };
      const _0x1567c5 = _0x2f1104 => {
        {
          const _0x57e0df = _0x2f1104.type.startsWith("touch");
          document.removeEventListener(_0x57e0df ? "touchmove" : "mousemove", _0x5d170f);
          document.removeEventListener(_0x57e0df ? "touchend" : "mouseup", _0x1567c5);
          if (_0x7d9153) {
            {
              const _0x38a53 = {
                top: _0x33d707.style.top,
                left: _0x33d707.style.left
              };
              _0x3e1c86.panel_pos = _0x38a53;
              document.getElementById("accelerator-panel").style.top = _0x33d707.style.top;
              document.getElementById("accelerator-panel").style.left = _0x33d707.style.left;
              document.getElementById("accelerator-toggle-btn").style.top = _0x33d707.style.top;
              document.getElementById("accelerator-toggle-btn").style.left = _0x33d707.style.left;
              _0x5b83ac();
            }
          }
        }
      };
      _0x472bd5.addEventListener("mousedown", _0x3b75ec);
      const _0x1a815e = {
        passive: false
      };
      _0x472bd5.addEventListener("touchstart", _0x3b75ec, _0x1a815e);
    }
  }
  const _0x532527 = {
    accelerator: false,
    login: false
  };
  const _0x1bc060 = {
    quench: false,
    nightmare: false
  };
  const _0x221329 = {
    authUser: false,
    serverList: false,
    isolate: false
  };
  const _0x49266a = {
    isReady: _0x532527,
    accelerator: {
      hooksInjected: _0x1bc060,
      engine_speed: {
        isReady: false,
        apply: () => {
          {
            if (_0x49266a.accelerator.engine_speed.isReady) {
              _0x2165f7.cc.director.getScheduler().setTimeScale(_0x3e1c86.engine_speed_rate);
            }
          }
        }
      },
      injectQuenchHook: () => {
        {
          if (_0x49266a.accelerator.hooksInjected.quench) {
            return;
          }
          try {
            {
              const _0x5a1eea = _0x2165f7.__require("TimerManager").TimerManager;
              if (!_0x5a1eea || !_0x5a1eea.instance || _0x5a1eea.instance.onTimer.__isPatched) {
                return;
              }
              const _0xffcf86 = _0x5a1eea.instance.onTimer;
              _0x5a1eea.instance.onTimer = function (..._0x40103d) {
                {
                  if (_0x3e1c86.quench_speed_enabled && _0x40103d[0] && _0x40103d[1] && _0x40103d[0] === _0x40103d[1]._updateQuench) {
                    {
                      _0x40103d[2] = 1;
                      const _0x3c6767 = _0x40103d[0];
                      _0x40103d[0] = function (_0x41291d) {
                        {
                          this._isInQuenchAnim = false;
                          _0x3c6767.call(this, _0x41291d);
                        }
                      };
                    }
                  }
                  return _0xffcf86.apply(this, _0x40103d);
                }
              };
              _0x5a1eea.instance.onTimer.__isPatched = true;
              console.log(_0x3883d8 + " 淬炼加速补丁已注入。");
              _0x49266a.accelerator.hooksInjected.quench = true;
            }
          } catch (_0x6f78d4) {}
        }
      },
      injectNightmareHook: () => {
        {
          if (_0x49266a.accelerator.hooksInjected.nightmare) {
            return;
          }
          try {
            {
              const _0x1657c5 = _0x2165f7.__require("NightmareBattlePanel").NightmareBattlePanel;
              if (!_0x1657c5 || !_0x1657c5.prototype.onShow || _0x1657c5.prototype.onShow.__isPatched) {
                return;
              }
              const _0x2bc93e = _0x1657c5.prototype.onShow;
              _0x1657c5.prototype.onShow = function (..._0x258d6a) {
                {
                  _0x2bc93e.apply(this, _0x258d6a);
                  if (this._originalDefaultTimescale === undefined) {
                    {
                      this._originalDefaultTimescale = this.DEFAULT_TIMESCALE;
                    }
                  }
                  if (_0x3e1c86.nightmare_speed_enabled) {
                    {
                      this.DEFAULT_TIMESCALE = 100;
                    }
                  } else {
                    {
                      this.DEFAULT_TIMESCALE = this._originalDefaultTimescale;
                    }
                  }
                }
              };
              _0x1657c5.prototype.onShow.__isPatched = true;
              console.log(_0x3883d8 + " 十殿加速补丁已更新并注入。");
              _0x49266a.accelerator.hooksInjected.nightmare = true;
            }
          } catch (_0x152262) {}
        }
      },
      applyNightmareSpeed: () => {
        {
          try {
            {
              const _0x3a7845 = _0x2165f7.cc.director.getScene()?.["getComponentInChildren"]("NightmareBattlePanel");
              if (_0x3a7845) {
                {
                  if (_0x3e1c86.nightmare_speed_enabled) {
                    {
                      _0x3a7845.DEFAULT_TIMESCALE = 100;
                    }
                  } else {
                    _0x3a7845.DEFAULT_TIMESCALE = _0x3a7845._originalDefaultTimescale || 1.4;
                  }
                }
              }
            }
          } catch (_0x1873a2) {}
        }
      }
    },
    login: {
      decryptedData: null,
      patchesApplied: _0x221329,
      decryptActiveAccount: () => {
        {
          if (_0x49266a.login.decryptedData) {
            return true;
          }
          if (!_0x3e1c86.selectedAccountFileName) {
            return false;
          }
          const _0x173638 = _0x3e1c86.accounts.find(_0x56dc4d => _0x56dc4d.fileName === _0x3e1c86.selectedAccountFileName);
          if (!_0x173638) {
            {
              console.error(_0x3883d8 + " 找不到选定的账号文件: " + _0x3e1c86.selectedAccountFileName);
              return false;
            }
          }
          const _0x21d75b = _0x2165f7.__require("13");
          const _0x1b9e6d = _0x173638.hexString.match(/.{1,2}/g).map(_0x18a4b7 => parseInt(_0x18a4b7, 16));
          _0x49266a.login.decryptedData = _0x21d75b.decMsg(new Uint8Array(_0x1b9e6d).buffer, {
            decrypt: _0x21d75b.lz4XorDecode,
            encrypt: _0x21d75b.lz4XorEncode
          });
          console.log(_0x3883d8 + " 账号 [" + _0x173638.fileName + "] 解密成功。");
          return true;
        }
      },
      apply: () => {
        {
          const _0x295a53 = _0x2165f7.__require("data-index");
          const _0x143bc5 = _0x295a53.LoginService;
          const _0x252154 = _0x49266a.login.decryptedData;
          if (!_0x143bc5 || !_0x143bc5.authUser || !_0x143bc5.serverList || !_0x295a53.Isolate) {
            return false;
          }
          if (!_0x143bc5.authUser.isSelfCreate) {
            {
              const _0x4d063e = _0x143bc5.authUser;
              _0x143bc5.authUser = _0x39554a => {
                {
                  console.log(_0x3883d8 + " authUser 已拦截");
                  const _0x21a961 = {
                    ..._0x39554a,
                    platformExt: _0x252154._raw.platformExt,
                    info: _0x252154._raw.info
                  };
                  return _0x4d063e(_0x21a961);
                }
              };
              _0x143bc5.authUser.isSelfCreate = true;
              _0x49266a.login.patchesApplied.authUser = true;
            }
          }
          if (!_0x143bc5.serverList.isSelfCreate) {
            {
              const _0x1fa526 = _0x143bc5.serverList;
              _0x143bc5.serverList = () => {
                {
                  console.log(_0x3883d8 + " serverList 已拦截");
                  return _0x1fa526(_0x252154._raw);
                }
              };
              _0x143bc5.serverList.isSelfCreate = true;
              _0x49266a.login.patchesApplied.serverList = true;
            }
          }
          if (!_0x295a53.Isolate.isSelfCreate) {
            {
              const _0xcfd798 = _0x295a53.Isolate;
              _0x295a53.Isolate = function (..._0x3cdf73) {
                {
                  const _0x1a7990 = new _0xcfd798(..._0x3cdf73);
                  if (_0x1a7990.LoginService && !_0x1a7990.LoginService.authUser.isSelfCreate) {
                    {
                      const _0x27a21d = _0x1a7990.LoginService.authUser;
                      _0x1a7990.LoginService.authUser = _0x21eb9f => _0x27a21d({
                        ..._0x21eb9f,
                        platformExt: _0x252154._raw.platformExt,
                        info: _0x252154._raw.info
                      });
                      _0x1a7990.LoginService.authUser.isSelfCreate = true;
                    }
                  }
                  return _0x1a7990;
                }
              };
              _0x295a53.Isolate.isSelfCreate = true;
              _0x49266a.login.patchesApplied.isolate = true;
            }
          }
          const _0x2336e4 = Object.values(_0x49266a.login.patchesApplied).every(Boolean);
          if (_0x2336e4 && !_0x49266a.isReady.login) {
            {
              document.title = "【" + _0x3e1c86.selectedAccountFileName.replace(".bin", "") + "】" + document.title;
              console.log(_0x3883d8 + " 所有登录补丁应用成功！");
            }
          }
          return _0x2336e4;
        }
      }
    }
  };
  function _0x2e5347() {
    _0x1359ea();
    _0x27c5c0();
    console.log(_0x3883d8 + " 初始化，开始轮询等待游戏模块...");
    const _0x1c5486 = setInterval(() => {
      if (_0x49266a.isReady.accelerator && _0x49266a.isReady.login) {
        {
          console.log(_0x3883d8 + " 所有模块已加载并注入，初始化完成。");
          clearInterval(_0x1c5486);
          return;
        }
      }
      if (!_0x49266a.isReady.accelerator) {
        {
          try {
            !_0x49266a.accelerator.engine_speed.isReady && _0x2165f7.cc && _0x2165f7.cc.director && _0x2165f7.cc.director.getScheduler() && (_0x49266a.accelerator.engine_speed.isReady = true, _0x49266a.accelerator.engine_speed.apply(), console.log(_0x3883d8 + " Cocos引擎已就绪。"));
            typeof _0x2165f7.__require === "function" && (_0x49266a.accelerator.injectQuenchHook(), _0x49266a.accelerator.injectNightmareHook());
            _0x49266a.accelerator.engine_speed.isReady && _0x49266a.accelerator.hooksInjected.quench && _0x49266a.accelerator.hooksInjected.nightmare && (_0x49266a.isReady.accelerator = true);
          } catch (_0x559eb1) {}
        }
      }
      if (!_0x49266a.isReady.login) {
        if (!_0x3e1c86.selectedAccountFileName) {
          console.log(_0x3883d8 + " 未选择任何账号，登录补丁将不生效。");
          _0x49266a.isReady.login = true;
          return;
        }
        try {
          _0x49266a.login.decryptActiveAccount() && _0x49266a.login.apply() && (_0x49266a.isReady.login = true);
        } catch (_0x393086) {}
      }
    }, 200);
  }
  _0x2e5347();
})();