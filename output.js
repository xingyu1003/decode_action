//Fri Nov 28 2025 06:43:41 GMT+0000 (Coordinated Universal Time)
//
//
(() => {
  var _0x182e97 = {
    129() {
      const _0x2c37b2 = {
        captchaId: "1dd87176b1565667de6f8add815425ed",
        product: "bind"
      };
      const _0xd95028 = {
        "Kr-Ver": "1.9.0"
      };
      const _0x3ffb66 = "application/x-www-form-urlencoded;charset=UTF-8";
      const _0x4c64a1 = {
        redirect_uri: "1",
        t: "1",
        pack_mark: "1",
        projectId: "G152",
        productId: "A1493",
        platform: "h5",
        channelId: "211",
        deviceNum: Utils.tadid(),
        version: "2.1.2",
        sdkVersion: "2.1.2",
        response_type: "code",
        client_id: "vvkewnskrxxwfo0yi61cy24l",
        deviceModel: Utils.browserName(),
        os: Utils.getOS(),
        pkg: "com.kurogame.mingchao",
        client_secret: "g9ej0i1jf3y68wchb0ncm266"
      };
      let _0x3bc2c2 = null;
      let _0x4c6845 = {};
      let _0x1d73be = null;
      let _0xbaf0f4 = null;
      let _0x33be41 = {};
      let _0x4d31bf = "";
      let _0x2d0198 = null;
      function _0x35b4d2() {
        _0x4c6845.loginContainer.style.display = "block";
        _0x4c6845.accountManager.style.display = "none";
        Object.keys(_0x33be41).length > 0 ? _0x4c6845.backToAccountBtn.style.display = "flex" : _0x4c6845.backToAccountBtn.style.display = "none";
      }
      function _0x307782() {
        _0x4c6845.loginContainer.style.display = "none";
        _0x4c6845.accountManager.style.display = "block";
        _0x5e8dc4();
      }
      function _0x45077d() {
        {
          const _0x520193 = document.querySelector(".main-container");
          0 === Object.keys(_0x33be41).length ? (_0x520193.classList.add("no-accounts"), _0x520193.classList.remove("has-accounts"), _0x35b4d2(), _0x4c6845.emptyState.style.display = "block", _0x4c6845.recordData.style.display = "none") : (_0x520193.classList.remove("no-accounts"), _0x520193.classList.add("has-accounts"), _0x307782(), _0xbaf0f4 && _0x33be41[_0xbaf0f4] ? _0x49bcb3() : (_0x4c6845.emptyState.style.display = "block", _0x4c6845.recordData.style.display = "none"));
        }
      }
      const _0x2f35e8 = () => {
        const {
          phoneInput: _0x225464,
          verificationCodeInput: _0x4d737d,
          loginBtn: _0x118b6f
        } = _0x4c6845;
        _0x118b6f.disabled = !(11 === _0x225464.value.length && _0x4d737d.value.length > 0);
      };
      function _0x484cff(_0x4ff38d) {
        const {
          url: _0x13200d,
          method: _0x4f1165 = "POST",
          data: _0x3d7a3d,
          headers: _0x505a91 = {},
          contentType: _0x459dbb,
          onSuccess: _0x412f6e,
          onError: _0x3a901d
        } = _0x4ff38d;
        const _0xd640f3 = {
          ..._0xd95028,
          ..._0x505a91
        };
        _0x459dbb && (_0xd640f3["Content-Type"] = _0x459dbb);
        const _0x6f071c = {
          url: _0x13200d,
          type: _0x4f1165,
          headers: _0xd640f3,
          dataType: "json",
          success: _0x412f6e || function (_0xa1cccc) {},
          error: _0x3a901d || function (_0x502ec8, _0x182f88, _0x457675) {
            _0x3f4c01("请求失败，请重试", "error");
          }
        };
        _0x3d7a3d && ("object" == typeof _0x3d7a3d && _0xd640f3["Content-Type"]?.["includes"]("json") ? _0x6f071c.data = JSON.stringify(_0x3d7a3d) : _0x6f071c.data = _0x3d7a3d);
        $.ajax(_0x6f071c);
      }
      const _0x543101 = (_0x126884, _0x640013, _0x4c013d = false) => (_0x126884.disabled = _0x4c013d, _0x126884.textContent = _0x640013);
      const _0x3eea74 = (_0xeb63e7, _0x17ab4b, _0x658eed = "操作失败") => {
        0 === _0xeb63e7.code ? _0x17ab4b(_0xeb63e7) : _0x3f4c01(_0xeb63e7.msg || _0x658eed, "error");
      };
      const _0x484cf3 = (_0x4c9cb0, _0x5c5d95 = "请求失败，请重试") => {
        {
          _0x3f4c01(_0x5c5d95, "error");
        }
      };
      function _0x223f30(_0x36dc9a) {
        {
          _0x36dc9a.preventDefault();
          const {
            phoneInput: _0x289993,
            verificationCodeInput: _0x2b9240,
            loginBtn: _0x553cf0
          } = _0x4c6845;
          const _0x275b43 = _0x289993.value;
          const _0x19468e = _0x2b9240.value;
          if (!_0x275b43 || !_0x19468e) {
            return _0x3f4c01("请填写完整信息", "error");
          }
          const _0x25b052 = {
            phone: _0x275b43,
            code: _0x19468e,
            ..._0x4c64a1
          };
          _0x543101(_0x553cf0, "登录中...", true);
          _0x484cff({
            url: "https://sdkapi.kurogame.com/sdkcom/v2/login/phoneCode.lg",
            contentType: _0x3ffb66,
            data: _0x25b052,
            onSuccess(_0x5c4fea) {
              return _0x3eea74(_0x5c4fea, _0x233ddb => {
                _0x3cc360 = _0x233ddb.data;
                return void _0x484cff({
                  url: "https://sdkapi.kurogame.com/sdkcom/v2/auth/getToken.lg",
                  contentType: _0x3ffb66,
                  data: {
                    grant_type: "authorization_code",
                    ..._0x4c64a1,
                    code: _0x3cc360.code
                  },
                  onSuccess: _0x43c7ac => _0x3eea74(_0x43c7ac, _0xae6879 => {
                    const _0xba9e94 = {
                      token: _0xae6879.data.access_token,
                      sdk_openid: _0x3cc360.cuid,
                      username: _0x3cc360.username,
                      phone: _0x3cc360.phone,
                      cuid: _0x3cc360.cuid
                    };
                    const _0x32c46c = _0x3cc360.phone;
                    _0x33be41[_0x32c46c] = {
                      id: _0x32c46c,
                      phone: _0x3cc360.phone,
                      username: _0x3cc360.username,
                      cuid: _0x3cc360.cuid,
                      sdkLoginInfo: _0xba9e94,
                      appLoginInfo: null,
                      gameRecord: null,
                      lastLoginTime: Date.now()
                    };
                    _0xbaf0f4 = _0x32c46c;
                    _0x780e2e();
                    _0x462ffd(_0xba9e94);
                  }),
                  onError() {
                    _0x484cf3(0, "Token获取失败，请重试");
                    _0x543101(_0x4c6845.loginBtn, "登录");
                  }
                });
                var _0x3cc360;
              }, "登录失败");
            },
            onError() {
              _0x484cf3(0, "登录失败，请重试");
              _0x543101(_0x553cf0, "登录");
            }
          });
        }
      }
      function _0x462ffd(_0xa75f6f) {
        _0x484cff({
          url: "/api/login",
          contentType: "application/json;charset=UTF-8",
          headers: {
            "x-b3-traceid": Utils.did(),
            "x-os": "web"
          },
          data: {
            loginType: 1,
            userId: _0xa75f6f.cuid,
            userName: _0xa75f6f.username,
            token: _0xa75f6f.token,
            deviceId: Utils.did(),
            platform: Utils.platformFormat(),
            appVersion: "2.8.2"
          },
          onSuccess(_0x79d14) {
            return _0x3eea74(_0x79d14, _0x7e1bfe => {
              var _0x1870a7;
              _0xbaf0f4 && _0x33be41[_0xbaf0f4] && (_0x33be41[_0xbaf0f4].appLoginInfo = _0x7e1bfe.data, _0x780e2e());
              _0x543101(_0x4c6845.loginBtn, "登录");
              _0x45077d();
              _0x1870a7 = _0x7e1bfe.data.token;
              _0x4c6845.loadingIndicator.style.display = "block";
              _0x4c6845.recordData.style.display = "none";
              _0x4c6845.emptyState.style.display = "none";
              _0x484cff({
                url: "/api/getGameRecord",
                method: "GET",
                headers: {
                  "x-b3-traceid": Utils.did(),
                  "x-os": "web",
                  "x-token": _0x1870a7
                },
                onSuccess(_0x4090dd) {
                  _0x4c6845.loadingIndicator.style.display = "none";
                  0 === _0x4090dd.code && _0x4090dd.data ? (_0x1d73be = _0x4090dd.data, _0xbaf0f4 && _0x33be41[_0xbaf0f4] && (_0x33be41[_0xbaf0f4].gameRecord = _0x4090dd.data, _0x780e2e()), _0x2f4ec0(), _0x4c6845.recordData.style.display = "block", _0x4c6845.emptyState.style.display = "none") : 317 === _0x4090dd.code ? _0x3f4c01(_0x4090dd.msg || "抽卡记录已过期，请重新获取", "error") : (_0x4c6845.emptyState.style.display = "block", _0x4c6845.recordData.style.display = "none", _0x3f4c01(_0x4090dd.msg || "获取记录失败", "error"));
                },
                onError() {
                  {
                    _0x4c6845.loadingIndicator.style.display = "none";
                    _0x4c6845.emptyState.style.display = "block";
                    _0x484cf3(0, "获取游戏记录失败，请重试");
                  }
                }
              });
            });
          },
          onError() {
            _0x484cf3(0, "登录失败，请重试");
            _0x543101(_0x4c6845.loginBtn, "登录");
          }
        });
      }
      function _0x2f4ec0() {
        {
          if (!_0x1d73be) {
            _0x4c6845.emptyState.style.display = "block";
            return void (_0x4c6845.recordData.style.display = "none");
          }
          _0xbaf0f4 && _0x33be41[_0xbaf0f4] ? _0x4c6845.currentAccount.textContent = _0x33be41[_0xbaf0f4].username + " (" + _0x3b175e(_0x33be41[_0xbaf0f4].phone) + ")" : _0x4c6845.currentAccount.textContent = "-";
          _0x4c6845.playerId.textContent = _0x1d73be.playerId || "-";
          _0x4c6845.recordId.textContent = _0x1d73be.recordId || "-";
          _0x4c6845.recordData.style.display = "block";
          _0x4c6845.emptyState.style.display = "none";
        }
      }
      function _0x49bcb3() {
        if (!_0xbaf0f4 || !_0x33be41[_0xbaf0f4]) {
          _0x4c6845.emptyState.style.display = "block";
          return void (_0x4c6845.recordData.style.display = "none");
        }
        const _0x1473c9 = _0x33be41[_0xbaf0f4];
        _0x1d73be = _0x1473c9.gameRecord;
        _0x2f4ec0();
      }
      async function _0x31c55b() {
        if (!_0x1d73be) {
          return void _0x3f4c01("暂无记录可复制", "warning");
        }
        const _0x195c4b = JSON.stringify(_0x1d73be, null, 2);
        if (navigator.clipboard && window.isSecureContext) {
          try {
            await navigator.clipboard.writeText(_0x195c4b);
            return void _0x3f4c01("记录已复制到剪贴板", "success");
          } catch (_0x4edd38) {}
        }
        try {
          const _0x516478 = document.createElement("textarea");
          _0x516478.value = _0x195c4b;
          _0x516478.style.position = "fixed";
          _0x516478.style.left = "-999999px";
          _0x516478.style.top = "-999999px";
          document.body.appendChild(_0x516478);
          _0x516478.focus();
          _0x516478.select();
          const _0x2470dd = document.execCommand("copy");
          if (document.body.removeChild(_0x516478), !_0x2470dd) {
            throw Error("execCommand复制失败");
          }
          _0x3f4c01("记录已复制到剪贴板", "success");
        } catch (_0xf6f26) {
          !function (_0x1573f6) {
            const _0x353785 = document.createElement("div");
            _0x353785.style.cssText = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 10000;\n    padding: 20px;\n    box-sizing: border-box;\n  ";
            const _0x48da30 = document.createElement("div");
            _0x48da30.style.cssText = "\n    background: white;\n    border-radius: 12px;\n    padding: 20px;\n    max-width: 90%;\n    max-height: 80%;\n    overflow: auto;\n    position: relative;\n  ";
            const _0x33abd6 = document.createElement("h3");
            _0x33abd6.textContent = "请手动复制以下内容";
            _0x33abd6.style.cssText = "\n    margin: 0 0 15px 0;\n    color: #333;\n    text-align: center;\n  ";
            const _0x50ae32 = document.createElement("textarea");
            _0x50ae32.value = _0x1573f6;
            _0x50ae32.style.cssText = "\n    width: 100%;\n    height: 300px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    padding: 10px;\n    font-family: monospace;\n    font-size: 12px;\n    resize: vertical;\n    box-sizing: border-box;\n  ";
            _0x50ae32.readOnly = true;
            const _0x303e15 = document.createElement("div");
            _0x303e15.style.cssText = "\n    display: flex;\n    gap: 10px;\n    margin-top: 15px;\n    justify-content: center;\n  ";
            const _0x3c34ad = document.createElement("button");
            _0x3c34ad.textContent = "全选";
            _0x3c34ad.style.cssText = "\n    padding: 8px 16px;\n    background: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n  ";
            _0x3c34ad.onclick = () => {
              {
                _0x50ae32.select();
                _0x50ae32.setSelectionRange(0, 99999);
              }
            };
            const _0x44605c = document.createElement("button");
            _0x44605c.textContent = "关闭";
            _0x44605c.style.cssText = "\n    padding: 8px 16px;\n    background: #6c757d;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n  ";
            _0x44605c.onclick = () => {
              document.body.removeChild(_0x353785);
            };
            _0x303e15.appendChild(_0x3c34ad);
            _0x303e15.appendChild(_0x44605c);
            _0x48da30.appendChild(_0x33abd6);
            _0x48da30.appendChild(_0x50ae32);
            _0x48da30.appendChild(_0x303e15);
            _0x353785.appendChild(_0x48da30);
            _0x353785.onclick = _0x5bb9e3 => {
              _0x5bb9e3.target === _0x353785 && document.body.removeChild(_0x353785);
            };
            document.body.appendChild(_0x353785);
            setTimeout(() => {
              _0x50ae32.select();
              _0x50ae32.setSelectionRange(0, 99999);
            }, 100);
            _0x3f4c01("自动复制失败，请手动选择并复制文本", "warning");
          }(_0x195c4b);
        }
      }
      const _0x90e800 = () => _0x4c6845.modal.classList.remove("show");
      function _0x3f4c01(_0x507944, _0x57cdd2 = "info") {
        document.querySelector(".message")?.["remove"]();
        const _0x5828f4 = {
          success: "#4CAF50",
          error: "#f44336",
          warning: "#ff9800",
          info: "#2196F3"
        };
        const _0x43cd44 = document.createElement("div");
        const _0x2d5d48 = {
          opacity: "1",
          transform: "translateX(0)"
        };
        _0x43cd44.className = "message message-" + _0x57cdd2;
        _0x43cd44.textContent = _0x507944;
        Object.assign(_0x43cd44.style, {
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "12px 20px",
          borderRadius: "8px",
          color: "white",
          fontWeight: "500",
          zIndex: "10000",
          opacity: "0",
          transform: "translateX(100%)",
          transition: "all 0.3s ease",
          maxWidth: "300px",
          wordWrap: "break-word",
          backgroundColor: _0x5828f4[_0x57cdd2] || "#2196F3"
        });
        document.body.appendChild(_0x43cd44);
        setTimeout(() => Object.assign(_0x43cd44.style, _0x2d5d48), 100);
        setTimeout(() => {
          {
            const _0x4134df = {
              opacity: "0",
              transform: "translateX(100%)"
            };
            Object.assign(_0x43cd44.style, _0x4134df);
            setTimeout(() => _0x43cd44.remove(), 300);
          }
        }, 3000);
      }
      function _0x780e2e() {
        {
          localStorage.setItem("wutheringWavesAccounts", JSON.stringify(_0x33be41));
          _0xbaf0f4 && localStorage.setItem("wutheringWavesCurrentAccount", _0xbaf0f4);
        }
      }
      function _0x3b175e(_0x3552d5) {
        {
          return _0x3552d5 && 11 === _0x3552d5.length ? _0x3552d5.substring(0, 3) + "****" + _0x3552d5.substring(7) : _0x3552d5;
        }
      }
      function _0x5e8dc4() {
        const _0x15bf55 = _0x4c6845.accountList;
        _0x15bf55.innerHTML = "";
        0 !== Object.keys(_0x33be41).length ? Object.values(_0x33be41).forEach(_0x21d7ba => {
          {
            const _0x463f3c = document.createElement("div");
            _0x463f3c.className = "account-item " + (_0x21d7ba.id === _0xbaf0f4 ? "active" : "");
            _0x463f3c.innerHTML = "\n      <div class=\"account-info\">\n        <div>\n          <div class=\"account-phone\">" + _0x3b175e(_0x21d7ba.phone) + "</div>\n          <div class=\"account-username\">" + _0x21d7ba.username + "</div>\n        </div>\n        <div class=\"account-actions\">\n          <button class=\"btn btn-primary btn-small\" onclick=\"switchAccount('" + _0x21d7ba.id + "')\">切换</button>\n          <button class=\"btn btn-danger btn-small\" onclick=\"deleteAccount('" + _0x21d7ba.id + "')\">删除</button>\n        </div>\n      </div>\n    ";
            _0x15bf55.appendChild(_0x463f3c);
          }
        }) : _0x15bf55.innerHTML = "<div class=\"empty-accounts\">暂无已保存的账号</div>";
      }
      function _0x37713e(_0x5b45e3, _0x483640 = false) {
        if (!_0x33be41[_0x5b45e3]) {
          _0x3f4c01("账号不存在", "error");
          return false;
        }
        const _0x23bf9c = _0x33be41[_0x5b45e3];
        const _0x2856b6 = _0x23bf9c.username + " (" + _0x3b175e(_0x23bf9c.phone) + ")";
        if (!_0x483640 && !confirm(_0xbaf0f4 === _0x5b45e3 ? "确定要删除当前账号 " + _0x2856b6 + " 吗？删除后将返回登录界面。" : "确定要删除账号 " + _0x2856b6 + " 吗？")) {
          return false;
        }
        try {
          {
            delete _0x33be41[_0x5b45e3];
            _0xbaf0f4 === _0x5b45e3 && (_0xbaf0f4 = null, _0x1d73be = null);
            _0x780e2e();
            _0x5e8dc4();
            _0x45077d();
            _0x3f4c01(_0x483640 ? "过期账号已删除" : "账号已删除", "success");
            return true;
          }
        } catch (_0x5dcf0e) {
          _0x3f4c01("删除账号失败", "error");
          return false;
        }
      }
      function _0x3ccaae() {
        if (!_0xbaf0f4 || !_0x33be41[_0xbaf0f4]) {
          return void _0x3f4c01("请先选择一个账号", "warning");
        }
        const _0x5be0c9 = _0x33be41[_0xbaf0f4];
        if (!_0x5be0c9.sdkLoginInfo) {
          _0x3f4c01("账号登录信息已过期，请重新登录", "error");
          return void function () {
            if (!_0xbaf0f4 || !_0x33be41[_0xbaf0f4]) {
              return false;
            }
            _0x37713e(_0xbaf0f4, true);
          }();
        }
        _0x462ffd(_0x5be0c9.sdkLoginInfo);
      }
      window.switchAccount = function (_0xfc5d9) {
        _0x33be41[_0xfc5d9] ? (_0xbaf0f4 = _0xfc5d9, _0x780e2e(), _0x5e8dc4(), _0x49bcb3(), _0x3f4c01("已切换到账号: " + _0x33be41[_0xfc5d9].username, "success")) : _0x3f4c01("账号不存在", "error");
      };
      window.deleteAccount = _0x37713e;
      document.addEventListener("DOMContentLoaded", function () {
        !function () {
          const _0x1b04b3 = ["loginContainer", "phoneInput", "verificationCodeInput", "getCodeBtn", "loginBtn", "loginForm", "modal", "recordContainer", "refreshBtn", "copyBtn", "loadingIndicator", "recordData", "emptyState", "playerId", "recordId", "currentAccount", "accountManager", "addAccountBtn", "accountList", "backToAccountBtn"];
          ["loginContainer", "phone", "verificationCode", "getCodeBtn", "loginBtn", "loginForm", "successModal", "recordContainer", "refreshBtn", "copyBtn", "loadingIndicator", "recordData", "emptyState", "playerId", "recordId", "currentAccount", "accountManager", "addAccountBtn", "accountList", "backToAccountBtn"].forEach((_0x2df763, _0x3d1251) => _0x4c6845[_0x1b04b3[_0x3d1251]] = document.getElementById(_0x2df763));
          _0x4c6845.modal && Object.assign(_0x4c6845, {
            closeBtn: _0x4c6845.modal.querySelector(".close"),
            redirectButton: _0x4c6845.modal.querySelector(".redirect-button"),
            countdownElement: _0x4c6845.modal.querySelector(".countdown")
          });
        }();
        (function () {
          const _0x384615 = localStorage.getItem("wutheringWavesAccounts");
          if (_0x384615) {
            try {
              _0x33be41 = JSON.parse(_0x384615);
              const _0x4faa3b = localStorage.getItem("wutheringWavesCurrentAccount");
              _0x4faa3b && _0x33be41[_0x4faa3b] && (_0xbaf0f4 = _0x4faa3b);
            } catch (_0x5af4c4) {
              {
                _0x33be41 = {};
              }
            }
          }
        })();
        _0x45077d();
        (function () {
          {
            const {
              phoneInput: _0x3b610d,
              verificationCodeInput: _0x4d3fb1,
              getCodeBtn: _0x539583,
              loginForm: _0xf34170,
              closeBtn: _0x3bbe6a,
              modal: _0x59cf1f,
              refreshBtn: _0x47f76e,
              copyBtn: _0x1ae07f
            } = _0x4c6845;
            _0x3b610d?.["addEventListener"]("input", () => {
              {
                const _0x4cded2 = _0x3b610d.value;
                _0x4d31bf && _0x4d31bf !== _0x4cded2 && (_0x4d3fb1.value = "", _0x2d0198 && (clearInterval(_0x2d0198), _0x2d0198 = null), _0x539583.disabled = false, _0x539583.textContent = "获取验证码", "登录中..." === _0x4c6845.loginBtn.textContent && (_0x4c6845.loginBtn.disabled = false, _0x4c6845.loginBtn.textContent = "登录"));
                _0x4d31bf = _0x4cded2;
                _0x539583.disabled = 11 !== _0x4cded2.length;
                _0x2f35e8();
              }
            });
            _0x4d3fb1?.["addEventListener"]("input", _0x2f35e8);
            _0x539583?.["addEventListener"]("click", () => {
              _0x3bc2c2 ? _0x3bc2c2.showCaptcha() : _0x3f4c01("验证码组件未初始化", "error");
            });
            _0xf34170?.["addEventListener"]("submit", _0x223f30);
            _0x3bbe6a?.["addEventListener"]("click", _0x90e800);
            _0x59cf1f?.["addEventListener"]("click", _0x592a43 => _0x592a43.target === _0x59cf1f && _0x90e800());
            _0x47f76e?.["addEventListener"]("click", _0x3ccaae);
            _0x1ae07f?.["addEventListener"]("click", _0x31c55b);
            _0x4c6845.addAccountBtn?.["addEventListener"]("click", () => {
              _0x35b4d2();
            });
            _0x4c6845.backToAccountBtn?.["addEventListener"]("click", () => {
              _0x307782();
            });
          }
        })();
        initGeetest4(_0x2c37b2, _0x190716 => {
          {
            _0x3bc2c2 = _0x190716;
            _0x190716.onSuccess(() => function (_0x3ee0df) {
              {
                const _0x6c3114 = {
                  phone: _0x4c6845.phoneInput.value,
                  geetestLotNumber: _0x3ee0df.lot_number,
                  geetestCaptchaOutput: _0x3ee0df.captcha_output,
                  geetestPassToken: _0x3ee0df.pass_token,
                  geetestGenTime: _0x3ee0df.gen_time,
                  ..._0x4c64a1
                };
                const _0x165da4 = _0x6c3114;
                _0x484cff({
                  url: "https://sdkapi.kurogame.com/sdkcom/v2/login/getPhoneCode.lg",
                  contentType: _0x3ffb66,
                  data: _0x165da4,
                  onSuccess: _0x1611fb => _0x3eea74(_0x1611fb, () => {
                    _0x3f4c01("验证码已发送", "success");
                    _0x4c6845.getCodeBtn.disabled = true;
                    (function (_0x5d2b27, _0x3e8f3a, _0xf7eda5, _0x4e6a3e = "s") {
                      {
                        _0x2d0198 && (clearInterval(_0x2d0198), _0x2d0198 = null);
                        let _0xcf95fd = _0x5d2b27;
                        _0x3e8f3a.textContent = _0xcf95fd + " " + _0x4e6a3e;
                        _0x2d0198 = setInterval(() => {
                          {
                            _0x3e8f3a.textContent = --_0xcf95fd + " " + _0x4e6a3e;
                            _0xcf95fd > 0 || (clearInterval(_0x2d0198), _0x2d0198 = null, _0xf7eda5());
                          }
                        }, 1000);
                      }
                    })(60, _0x4c6845.getCodeBtn, () => _0x543101(_0x4c6845.getCodeBtn, "获取验证码"));
                  }, "验证码发送失败"),
                  onError: () => _0x484cf3(0, "验证码发送失败，请重试")
                });
              }
            }(_0x190716.getValidate()));
            _0x190716.onError(_0x352dea => _0x484cf3(0, "验证码验证失败，请重试"));
          }
        });
        (() => {
          const _0x47d39f = new Image();
          _0x47d39f.onload = () => document.body.style.backgroundImage = "url(" + _0x47d39f.src + ")";
          _0x47d39f.src = "https://prod-alicdn-community.kurobbs.com/forum/f3bc28108d8b4d7a8bb80265c030965c20240805.png";
        })();
      });
    },
    510() {
      {
        let _0x23e5cb = null;
        let _0x3d3ebb = null;
        const _0xe160f7 = () => {
          const _0x306d90 = navigator.userAgent.toLowerCase();
          return /iphone|ipad|ipod/.test(_0x306d90) ? "iOS" : /android/.test(_0x306d90) ? "Android" : /mac/.test(_0x306d90) ? "Mac" : "PC";
        };
        window.Utils = {
          tadid() {
            if (_0x23e5cb) {
              return _0x23e5cb;
            }
            try {
              {
                const _0xf86b0c = localStorage.getItem("ThinkingDataJSSDK_cross");
                if (_0xf86b0c) {
                  const _0xf6bf32 = JSON.parse(_0xf86b0c);
                  if (_0xf6bf32?.["device_id"]) {
                    _0x23e5cb = _0xf6bf32.device_id;
                    return _0x23e5cb;
                  }
                }
              }
            } catch (_0x5f2045) {}
            const _0x283a13 = (() => {
              const _0x410c07 = new Date().getTime();
              const _0x17c8b8 = screen.height * screen.width + "";
              const _0x1122e8 = navigator.userAgent;
              return _0x410c07.toString(16) + "-" + Math.random().toString(16).replace(".", "") + "-" + (_0x241def => {
                let _0x32c973 = 0;
                for (let _0x3964b8 = 0; _0x3964b8 < _0x241def.length; _0x3964b8++) {
                  _0x32c973 = (_0x32c973 << 5) - _0x32c973 + _0x241def.charCodeAt(_0x3964b8);
                  _0x32c973 &= _0x32c973;
                }
                return Math.abs(_0x32c973).toString(16);
              })(_0x1122e8) + "-" + _0x17c8b8.toString(16) + "-" + _0x410c07.toString(16);
            })() || Math.random().toString(36).substr(2, 16);
            try {
              const _0x562780 = {
                device_id: _0x283a13
              };
              localStorage.setItem("ThinkingDataJSSDK_cross", JSON.stringify(_0x562780));
            } catch (_0x3c0156) {}
            _0x23e5cb = _0x283a13;
            return _0x283a13;
          },
          did() {
            if (_0x3d3ebb) {
              return _0x3d3ebb;
            }
            try {
              const _0x56818d = localStorage.getItem("useMcCloudGameDid");
              if (_0x56818d) {
                _0x3d3ebb = _0x56818d;
                return _0x3d3ebb;
              }
            } catch (_0x2f5125) {}
            _0x3d3ebb = uuidv7();
            try {
              localStorage.setItem("useMcCloudGameDid", _0x3d3ebb);
            } catch (_0x4d0ab7) {}
            return _0x3d3ebb;
          },
          getOS() {
            const _0x1d833e = navigator.userAgent;
            return /Windows NT/i.test(_0x1d833e) ? "Windows" : /iPhone OS|iPad OS/i.test(_0x1d833e) ? "iOS" : /Mac OS X/i.test(_0x1d833e) ? "macOS" : /Android/i.test(_0x1d833e) ? "Android" : /Linux/i.test(_0x1d833e) ? "Linux" : "Unknown";
          },
          browserName() {
            const _0x12a1c0 = navigator.userAgent;
            const _0x444dbd = {
              Chrome: /Chrome\/(\S+)/,
              Firefox: /Firefox\/(\S+)/,
              "QQ Browser": /MicroMessenger\/(\S+)/,
              Safari: /Safari\/(\S+)/,
              IE: /MSIE (\S+);/,
              Edge: /Edge\/(\S+)/,
              Opera: /OPR\/(\S+)/
            };
            for (const [_0x3fbf09, _0x5d3596] of Object.entries(_0x444dbd)) if (_0x5d3596.test(_0x12a1c0)) {
              return _0x3fbf09;
            }
            return "Unknown";
          },
          platform: _0xe160f7,
          platformFormat() {
            const _0x3c5a1d = _0xe160f7();
            return "Android" === _0x3c5a1d ? "web-android" : "iOS" === _0x3c5a1d ? "web-ios" : "Mac" === _0x3c5a1d ? "web-mac" : "web-pc";
          }
        };
      }
    }
  };
  var _0x4e3bfc = {};
  function _0x28ce91(_0x30d48e) {
    {
      var _0x120915 = _0x4e3bfc[_0x30d48e];
      if (undefined !== _0x120915) {
        return _0x120915.exports;
      }
      const _0x57c5f9 = {
        exports: {}
      };
      _0x4e3bfc[_0x30d48e] = _0x57c5f9;
      var _0x9cd4b2 = _0x4e3bfc[_0x30d48e];
      _0x182e97[_0x30d48e](_0x9cd4b2, _0x9cd4b2.exports, _0x28ce91);
      return _0x9cd4b2.exports;
    }
  }
  _0x28ce91.n = _0x272399 => {
    var _0x91d149 = _0x272399 && _0x272399.i ? () => _0x272399.default : () => _0x272399;
    _0x28ce91.d(_0x91d149, {
      a: _0x91d149
    });
    return _0x91d149;
  };
  _0x28ce91.d = (_0x56585d, _0x38ae49) => {
    for (var _0x1c8f6f in _0x38ae49) _0x28ce91.o(_0x38ae49, _0x1c8f6f) && !_0x28ce91.o(_0x56585d, _0x1c8f6f) && Object.defineProperty(_0x56585d, _0x1c8f6f, {
      enumerable: true,
      get: _0x38ae49[_0x1c8f6f]
    });
  };
  _0x28ce91.o = (_0x2c6c6e, _0x2a2adf) => ({}).hasOwnProperty.call(_0x2c6c6e, _0x2a2adf);
  (() => {
    "use strict";

    {
      _0x28ce91(510);
      _0x28ce91(129);
    }
  })();
})();