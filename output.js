//Wed Nov 19 2025 10:37:10 GMT+0000 (Coordinated Universal Time)
//
//
class LoginManager {
  constructor() {
    this.API_URL = "http://Apisx.tbsmartsoft.com/Base_Manage/Home/SubmitLogin";
    this.PORT_API_URL = "http://Apisx.tbsmartsoft.com/Base_Manage/Home/GetPort";
    this.DEFAULT_PORT = 12582;
    this.initializeElements();
    this.initializeEvents();
    this.checkLoginStatus();
    this.displayVersionInfo();
    this.listenToStorageChanges();
    this.checkShortcutSetup();
  }
  initializeElements() {
    this.statusEl = document.getElementById("status");
    this.loginFormEl = document.getElementById("loginForm");
    this.userNameInput = document.getElementById("userName");
    this.passwordInput = document.getElementById("password");
    this.loginBtn = document.getElementById("loginBtn");
    this.loadingEl = document.getElementById("loading");
    this.userInfoEl = document.getElementById("userInfo");
    this.userNameDisplayEl = document.getElementById("userNameDisplay");
    this.portDisplayEl = document.getElementById("portDisplay");
    this.tokenDisplayEl = document.getElementById("tokenDisplay");
    this.logoutBtn = document.getElementById("logoutBtn");
    this.copyTokenBtn = document.getElementById("copyTokenBtn");
    this.refreshPortBtn = document.getElementById("refreshPortBtn");
    this.usageEl = document.getElementById("usage");
    this.versionNumberEl = document.getElementById("versionNumber");
    this.buildHashEl = document.getElementById("buildHash");
    this.exportModeSectionEl = document.getElementById("exportModeSection");
    this.exportModeToggleEl = document.getElementById("exportModeToggle");
  }
  initializeEvents() {
    this.loginBtn.addEventListener("click", () => this.handleLogin());
    this.logoutBtn.addEventListener("click", () => this.handleLogout());
    this.copyTokenBtn.addEventListener("click", _0x2c8a07 => this.copyToken(_0x2c8a07));
    this.refreshPortBtn.addEventListener("click", () => this.handleRefreshPort());
    this.exportModeToggleEl.addEventListener("change", _0x5d67f1 => this.handleExportModeChange(_0x5d67f1));
    this.userNameInput.addEventListener("keypress", _0x4c4a00 => {
      _0x4c4a00.key === "Enter" && this.passwordInput.focus();
    });
    this.passwordInput.addEventListener("keypress", _0x88ba00 => {
      _0x88ba00.key === "Enter" && this.handleLogin();
    });
  }
  async checkLoginStatus() {
    try {
      const _0x41b9bb = await chrome.storage.local.get(["userToken", "userName", "wsPort", "exportMode"]);
      if (_0x41b9bb.userToken && _0x41b9bb.userName) {
        {
          !_0x41b9bb.wsPort && (await this.fetchAndSavePort());
          if (_0x41b9bb.exportMode === undefined) {
            const _0x4a0cc4 = {
              exportMode: true
            };
            await chrome.storage.local.set(_0x4a0cc4);
            _0x41b9bb.exportMode = true;
          }
          this.updateUI(true, _0x41b9bb.userName, _0x41b9bb.userToken, _0x41b9bb.wsPort || this.DEFAULT_PORT);
          this.exportModeToggleEl.checked = _0x41b9bb.exportMode;
          return;
        }
      }
      this.updateUI(false);
    } catch (_0x3ed6f5) {
      this.updateUI(false);
    }
  }
  async handleLogin() {
    const _0x3e894b = this.userNameInput.value.trim();
    const _0x222443 = this.passwordInput.value.trim();
    if (!_0x3e894b) {
      this.showToast("请输入账号", "error");
      return;
    }
    if (!_0x222443) {
      this.showToast("请输入密码", "error");
      return;
    }
    this.setLoading(true);
    try {
      const _0x20ba9a = {
        "Content-Type": "application/json"
      };
      const _0x46cf0b = {
        userName: _0x3e894b,
        password: _0x222443
      };
      const _0x50f34f = await fetch(this.API_URL, {
        method: "POST",
        headers: _0x20ba9a,
        body: JSON.stringify(_0x46cf0b)
      });
      const _0x50cd4f = await _0x50f34f.json();
      if (_0x50cd4f.Success) {
        const _0x3e690a = _0x50cd4f.Data;
        const _0x544530 = await this.fetchAndSavePort(_0x3e690a);
        await chrome.storage.local.set({
          userToken: _0x3e690a,
          userName: _0x3e894b,
          loginTime: new Date().toISOString(),
          wsPort: _0x544530,
          exportMode: true
        });
        const _0x46e7a9 = {
          type: "updateLoginStatus",
          isLoggedIn: true
        };
        chrome.runtime.sendMessage(_0x46e7a9);
        this.updateUI(true, _0x3e894b, _0x3e690a, _0x544530);
        this.exportModeToggleEl.checked = true;
        console.log("🔧 登录后设置开关状态为:", this.exportModeToggleEl.checked);
        this.showToast("登录成功！", "success");
        console.log("✅ 登录成功！");
        console.log("Token:", _0x3e690a);
        console.log("端口:", _0x544530);
        console.log("导出模式:", true);
      } else {
        this.showToast(_0x50cd4f.Msg || "登录失败，请重试", "error");
      }
    } catch (_0x53de5c) {
      this.showToast("网络错误，请检查网络连接", "error");
    } finally {
      this.setLoading(false);
    }
  }
  async handleLogout() {
    if (!confirm("确定要退出登录吗？")) {
      return;
    }
    try {
      await chrome.storage.local.remove(["userToken", "userName", "loginTime", "wsPort"]);
      const _0x41614d = {
        type: "updateLoginStatus",
        isLoggedIn: false
      };
      chrome.runtime.sendMessage(_0x41614d);
      this.updateUI(false);
      this.showToast("已退出登录", "info");
      this.userNameInput.value = "";
      this.passwordInput.value = "";
    } catch (_0x13935e) {
      this.showToast("操作失败，请重试", "error");
    }
  }
  updateUI(_0x4989ea, _0x2d538f = "", _0x3b5d3b = "", _0x46cf73 = null) {
    if (_0x4989ea) {
      this.statusEl.className = "status active";
      this.statusEl.innerHTML = "<span class=\"status-icon\">✅</span><span>状态：已登录</span>";
      this.loginFormEl.classList.add("hidden");
      this.userInfoEl.classList.remove("hidden");
      this.logoutBtn.classList.remove("hidden");
      this.usageEl.classList.remove("hidden");
      this.exportModeSectionEl.classList.remove("hidden");
      this.userNameDisplayEl.textContent = _0x2d538f;
      this.portDisplayEl.textContent = _0x46cf73 || this.DEFAULT_PORT;
      this.tokenDisplayEl.textContent = _0x3b5d3b.substring(0, 30) + "...";
    } else {
      this.statusEl.className = "status inactive";
      this.statusEl.innerHTML = "<span class=\"status-icon\">❌</span><span>状态：未登录</span>";
      this.loginFormEl.classList.remove("hidden");
      this.userInfoEl.classList.add("hidden");
      this.logoutBtn.classList.add("hidden");
      this.usageEl.classList.add("hidden");
      this.exportModeSectionEl.classList.add("hidden");
    }
  }
  setLoading(_0x5a0f38) {
    _0x5a0f38 ? (this.loadingEl.style.display = "block", this.loginBtn.disabled = true) : (this.loadingEl.style.display = "none", this.loginBtn.disabled = false);
  }
  showToast(_0x1e6aa0, _0x2c1f25 = "info") {
    const _0x13ba41 = document.createElement("div");
    _0x13ba41.className = "toast";
    _0x13ba41.style.cssText = "\n            position: fixed;\n            top: 10px;\n            right: 10px;\n            padding: 12px 20px;\n            border-radius: 4px;\n            color: white;\n            font-weight: bold;\n            z-index: 10000;\n            max-width: 250px;\n            word-wrap: break-word;\n            font-size: 13px;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n            animation: slideIn 0.3s ease-out;\n        ";
    switch (_0x2c1f25) {
      case "success":
        _0x13ba41.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
        break;
      case "error":
        _0x13ba41.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";
        break;
      case "info":
        _0x13ba41.style.background = "linear-gradient(135deg, #3498db, #2980b9)";
        break;
      default:
        _0x13ba41.style.background = "linear-gradient(135deg, #95a5a6, #7f8c8d)";
    }
    _0x13ba41.textContent = _0x1e6aa0;
    document.body.appendChild(_0x13ba41);
    const _0x92b07f = document.createElement("style");
    _0x92b07f.textContent = "\n            @keyframes slideIn {\n                from {\n                    transform: translateX(400px);\n                    opacity: 0;\n                }\n                to {\n                    transform: translateX(0);\n                    opacity: 1;\n                }\n            }\n        ";
    document.head.appendChild(_0x92b07f);
    setTimeout(() => {
      _0x13ba41.parentNode && (_0x13ba41.style.animation = "slideOut 0.3s ease-in", setTimeout(() => {
        _0x13ba41.parentNode && _0x13ba41.parentNode.removeChild(_0x13ba41);
      }, 300));
    }, 3000);
  }
  async copyToken(_0x29c3ce) {
    try {
      const _0x4140b0 = await chrome.storage.local.get(["userToken"]);
      if (_0x4140b0.userToken) {
        await navigator.clipboard.writeText(_0x4140b0.userToken);
        const _0xf8c219 = _0x29c3ce.target;
        const _0x4cdf3b = _0xf8c219.textContent;
        _0xf8c219.textContent = "已复制!";
        _0xf8c219.style.background = "#2ecc71";
        setTimeout(() => {
          _0xf8c219.textContent = _0x4cdf3b;
          _0xf8c219.style.background = "#27ae60";
        }, 1500);
      } else {
        this.showToast("未找到Token，请重新登录", "error");
      }
    } catch (_0x51147f) {
      this.showToast("复制失败，请手动复制Token", "error");
    }
  }
  displayVersionInfo() {
    try {
      const _0xba80ca = chrome.runtime.getManifest();
      const _0x54b304 = _0xba80ca.version;
      const _0x499b29 = _0xba80ca.description;
      this.versionNumberEl && (this.versionNumberEl.textContent = "v" + _0x54b304);
      if (this.buildHashEl && _0x499b29) {
        const _0xeb520b = _0x499b29.match(/\[build:([a-f0-9]+)\]/i);
        _0xeb520b && _0xeb520b[1] ? this.buildHashEl.textContent = "Build: " + _0xeb520b[1] : this.buildHashEl.textContent = "Build: " + new Date().toISOString().slice(0, 10).replace(/-/g, "");
      }
    } catch (_0x3084b0) {
      if (this.versionNumberEl) {
        {
          this.versionNumberEl.textContent = "未知";
        }
      }
    }
  }
  async fetchAndSavePort(_0x28988d = null) {
    try {
      if (!_0x28988d) {
        const _0xeb8e91 = await chrome.storage.local.get(["userToken"]);
        _0x28988d = _0xeb8e91.userToken;
      }
      if (!_0x28988d) {
        const _0x25bc01 = {
          wsPort: this.DEFAULT_PORT
        };
        await chrome.storage.local.set(_0x25bc01);
        return this.DEFAULT_PORT;
      }
      const _0x10922e = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + _0x28988d
      };
      const _0x282673 = {
        method: "GET",
        headers: _0x10922e
      };
      const _0x12c865 = await fetch(this.PORT_API_URL, _0x282673);
      const _0x37481d = await _0x12c865.json();
      let _0x4d9420 = this.DEFAULT_PORT;
      if (_0x37481d.Success && _0x37481d.Data) {
        {
          _0x4d9420 = _0x37481d.Data;
        }
      }
      const _0x49fae7 = {
        wsPort: _0x4d9420
      };
      await chrome.storage.local.set(_0x49fae7);
      return _0x4d9420;
    } catch (_0x3bea1a) {
      {
        const _0x19ca8d = {
          wsPort: this.DEFAULT_PORT
        };
        await chrome.storage.local.set(_0x19ca8d);
        return this.DEFAULT_PORT;
      }
    }
  }
  async handleRefreshPort() {
    try {
      const _0x351bea = this.refreshPortBtn;
      const _0x20f080 = _0x351bea.textContent;
      _0x351bea.textContent = "刷新中...";
      _0x351bea.disabled = true;
      const _0x3bf342 = await this.fetchAndSavePort();
      this.portDisplayEl.textContent = _0x3bf342;
      _0x351bea.textContent = "✅ 已刷新";
      _0x351bea.style.background = "#2ecc71";
      setTimeout(() => {
        _0x351bea.textContent = _0x20f080;
        _0x351bea.style.background = "#27ae60";
        _0x351bea.disabled = false;
      }, 1500);
      this.showToast("端口已更新: " + _0x3bf342, "success");
    } catch (_0x283219) {
      this.showToast("刷新端口失败", "error");
      this.refreshPortBtn.disabled = false;
    }
  }
  listenToStorageChanges() {
    chrome.storage.onChanged.addListener((_0xa0a1cf, _0x28659f) => {
      if (_0x28659f === "local" && _0xa0a1cf.wsPort) {
        const _0x1cf6d1 = _0xa0a1cf.wsPort.newValue;
        _0x1cf6d1 && this.portDisplayEl && (this.portDisplayEl.textContent = _0x1cf6d1, this.portDisplayEl.style.animation = "pulse 0.5s", setTimeout(() => {
          this.portDisplayEl.style.animation = "";
        }, 500));
      }
    });
  }
  async handleExportModeChange(_0x1e8093) {
    const _0x201897 = _0x1e8093.target.checked;
    try {
      const _0x3541b0 = {
        exportMode: _0x201897
      };
      await chrome.storage.local.set(_0x3541b0);
      this.showToast("导出模式已" + (_0x201897 ? "开启" : "关闭"), _0x201897 ? "success" : "info");
    } catch (_0x3bea1b) {
      this.showToast("设置失败，请重试", "error");
      _0x1e8093.target.checked = !_0x201897;
    }
  }
  async checkShortcutSetup() {
    try {
      const _0x4924fd = await chrome.storage.local.get(["shortcutNotified"]);
      if (_0x4924fd.shortcutNotified) {
        {
          return;
        }
      }
      const _0x2a929b = await chrome.commands.getAll();
      const _0x50f916 = _0x2a929b.find(_0x3678dc => _0x3678dc.name === "quick-collect");
      if (!_0x50f916 || !_0x50f916.shortcut) {
        setTimeout(() => {
          {
            const _0x351b95 = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
            const _0x405bbe = _0x351b95 ? "Command+Shift+Q" : "Ctrl+Q";
            if (confirm("⚠️ 快捷键未设置！\n\n" + ("建议设置快捷键 " + _0x405bbe + " 快速采集商品。\n\n") + "是否现在前往设置？")) {
              const _0x420f69 = {
                url: "chrome://extensions/shortcuts"
              };
              chrome.tabs.create(_0x420f69);
            }
            const _0x2fa24c = {
              shortcutNotified: true
            };
            chrome.storage.local.set(_0x2fa24c);
          }
        }, 1000);
      } else {
        const _0x499977 = {
          shortcutNotified: true
        };
        chrome.storage.local.set(_0x499977);
      }
    } catch (_0x461939) {}
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new LoginManager();
});