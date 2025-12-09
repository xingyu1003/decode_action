//Tue Dec 09 2025 09:55:09 GMT+0000 (Coordinated Universal Time)
//
//
(async function main() {
  "use strict";
  if (window.location.pathname.includes("/kami/") || window.location.pathname.includes("/kami")) {
    console.log("[上仙纪念币助手] 跳过加载");
    return;
  }
  if (window.location.hostname === "pay.xjmzf.com" || window.location.hostname.endsWith(".xjmzf.com")) {
    console.log("[上仙纪念币助手] 跳过加载");
    return;
  }
  if (window.location.hostname === "pay.wx6d.com" || window.location.hostname.endsWith(".wx6d.com")) {
    console.log("[上仙纪念币助手] 跳过加载");
    return;
  }
  const _0x3a7257 = await new Promise(_0xac6aae => {
    chrome.storage.local.get(["sx_script_enabled"], _0x1e36cc => {
      _0xac6aae(_0x1e36cc.sx_script_enabled !== false);
    });
  });
  if (!_0x3a7257) {
    {
      console.log("[上仙纪念币助手] 脚本已禁用（本地），跳过加载");
      return;
    }
  }
  const _0x35f9c6 = await new Promise(_0x23ba1a => {
    chrome.storage.local.get(["sx_kami_cache_v2"], _0x24ffd7 => {
      const _0x3b133a = _0x24ffd7.sx_kami_cache_v2;
      if (_0x3b133a && _0x3b133a.script_disabled === "1") {
        _0x23ba1a({
          disabled: true,
          msg: _0x3b133a.script_disabled_msg || "系统维护中，请稍后再试..."
        });
      } else {
        const _0x3433e2 = {
          disabled: false
        };
        _0x23ba1a(_0x3433e2);
      }
    });
  });
  if (_0x35f9c6.disabled) {
    {
      console.log("[上仙纪念币助手] 脚本已禁用（远程）");
      alert("⚠️ " + _0x35f9c6.msg);
      return;
    }
  }
  const _0xb1f4ea = await new Promise(_0x1afd5f => {
    {
      chrome.storage.local.get(["sx_theme"], _0x2dec34 => {
        _0x1afd5f(_0x2dec34.sx_theme || "light");
      });
    }
  });
  _0xb1f4ea === "dark" && (document.body.classList.add("sx-theme-dark"), console.log("[上仙纪念币助手] 应用深色主题"));
  console.log("[上仙纪念币助手] 扩展加载中...");
  async function _0x2e5ff7(_0x5ce915) {
    return new Promise((_0x3b6868, _0x57aa4c) => {
      const _0x515ab = document.createElement("script");
      _0x515ab.src = chrome.runtime.getURL(_0x5ce915);
      _0x515ab.onload = () => {
        document.head.removeChild(_0x515ab);
        _0x3b6868();
      };
      _0x515ab.onerror = _0x57aa4c;
      document.head.appendChild(_0x515ab);
    });
  }
  window.StorageHelper = {
    async get(_0x49f4bb, _0x9260c7 = null) {
      return new Promise(_0x3cfa93 => {
        chrome.storage.local.get([_0x49f4bb], _0x2a2b7b => {
          _0x3cfa93(_0x2a2b7b[_0x49f4bb] !== undefined ? _0x2a2b7b[_0x49f4bb] : _0x9260c7);
        });
      });
    },
    async set(_0xd78073, _0x5307b8) {
      return new Promise(_0x36a265 => {
        {
          const _0x839813 = {
            _0xd78073: _0x5307b8
          };
          chrome.storage.local.set(_0x839813, _0x36a265);
        }
      });
    }
  };
  window.StorageCache = {
    _cache: {},
    _loaded: false,
    async init() {
      const _0x42a6cb = await new Promise(_0x3c4b94 => {
        chrome.storage.local.get(null, _0x3c4b94);
      });
      this._cache = _0x42a6cb || {};
      this._loaded = true;
    },
    get(_0x4cf8a6, _0x1099aa = null) {
      return this._cache[_0x4cf8a6] !== undefined ? this._cache[_0x4cf8a6] : _0x1099aa;
    },
    set(_0x4df660, _0x63330d) {
      this._cache[_0x4df660] = _0x63330d;
      const _0x6622c2 = {
        _0x4df660: _0x63330d
      };
      chrome.storage.local.set(_0x6622c2);
    }
  };
  await StorageCache.init();
  console.log("[上仙纪念币助手] 存储初始化完成");
  window.SXUtils = {
    _fpCache: null,
    _uidCache: null,
    _webglCache: null,
    toMs(_0x3d0af4) {
      _0x3d0af4 = Number(_0x3d0af4 || 0);
      if (!isFinite(_0x3d0af4) || _0x3d0af4 <= 0) {
        return 0;
      }
      return _0x3d0af4 < 1000000000000 ? _0x3d0af4 * 1000 : _0x3d0af4;
    },
    miniSig(_0x10df1f) {
      let _0x5b619f = 2166136261;
      for (let _0x3ea5c3 = 0; _0x3ea5c3 < _0x10df1f.length; _0x3ea5c3++) {
        _0x5b619f ^= _0x10df1f.charCodeAt(_0x3ea5c3);
        _0x5b619f = _0x5b619f * 16777619 >>> 0;
      }
      return (_0x5b619f >>> 0).toString(16);
    },
    escapeHTML(_0xfc908) {
      {
        if (!_0xfc908) {
          return "";
        }
        const _0x1ccf54 = document.createElement("div");
        _0x1ccf54.textContent = _0xfc908;
        return _0x1ccf54.innerHTML;
      }
    },
    getWebGLFingerprint() {
      {
        if (this._webglCache) {
          return this._webglCache;
        }
        try {
          const _0x4ed715 = document.createElement("canvas");
          const _0x5bd737 = _0x4ed715.getContext("webgl") || _0x4ed715.getContext("experimental-webgl");
          if (!_0x5bd737) {
            this._webglCache = "webgl_unavailable";
            return this._webglCache;
          }
          const _0x34bd80 = _0x5bd737.getExtension("WEBGL_debug_renderer_info");
          if (!_0x34bd80) {
            this._webglCache = "webgl_no_debug";
            return this._webglCache;
          }
          this._webglCache = _0x5bd737.getParameter(_0x34bd80.UNMASKED_VENDOR_WEBGL) + "|" + _0x5bd737.getParameter(_0x34bd80.UNMASKED_RENDERER_WEBGL);
          return this._webglCache;
        } catch (_0x39c0c5) {
          this._webglCache = "webgl_error";
          return this._webglCache;
        }
      }
    },
    getFullDeviceFeatures() {
      if (this._fpCache) {
        return this._fpCache;
      }
      this._fpCache = [navigator.userAgent, navigator.language, navigator.languages ? navigator.languages.join(",") : "", new Date().getTimezoneOffset(), navigator.hardwareConcurrency || "unk", navigator.platform, navigator.maxTouchPoints || 0, navigator.deviceMemory || "unk", this.getWebGLFingerprint(), navigator.vendor || "unk", navigator.cookieEnabled ? "1" : "0"].join("|");
      return this._fpCache;
    },
    hashFingerprint(_0x8bd3bb) {
      let _0xaf7fb7 = 0;
      for (let _0x266f0e = 0; _0x266f0e < _0x8bd3bb.length; _0x266f0e++) {
        _0xaf7fb7 = (_0xaf7fb7 << 5) - _0xaf7fb7 + _0x8bd3bb.charCodeAt(_0x266f0e);
        _0xaf7fb7 = _0xaf7fb7 & _0xaf7fb7;
      }
      return Math.abs(_0xaf7fb7).toString(36);
    },
    uid() {
      {
        const _0x4387ec = this.getFullDeviceFeatures();
        const _0x15dc88 = this.hashFingerprint(_0x4387ec);
        let _0x2dbb76 = StorageCache.get("sx_device_salt", "");
        !_0x2dbb76 && (_0x2dbb76 = Math.random().toString(36).substring(2, 15), StorageCache.set("sx_device_salt", _0x2dbb76));
        return "dev_" + this.hashFingerprint(_0x15dc88 + _0x2dbb76);
      }
    },
    async uidAsync() {
      if (this._uidCache) {
        return this._uidCache;
      }
      const _0x10cbc7 = this.getFullDeviceFeatures();
      const _0x26a741 = this.hashFingerprint(_0x10cbc7);
      let _0x181340 = StorageCache.get("sx_device_salt", "");
      if (!_0x181340) {
        {
          const _0x2dbab4 = await new Promise(_0x1c2b47 => {
            {
              chrome.storage.local.get(["sx_device_salt"], _0x1c2b47);
            }
          });
          _0x181340 = _0x2dbab4.sx_device_salt || "";
          if (!_0x181340) {
            _0x181340 = Math.random().toString(36).substring(2, 15);
            const _0x2b4f20 = {
              sx_device_salt: _0x181340
            };
            chrome.storage.local.set(_0x2b4f20);
            StorageCache._cache.sx_device_salt = _0x181340;
          }
        }
      }
      this._uidCache = "dev_" + this.hashFingerprint(_0x26a741 + _0x181340);
      return this._uidCache;
    },
    formatDatetimeLocalInput(_0x5d0b80) {
      {
        const _0x461667 = _0x176a23 => String(_0x176a23).padStart(2, "0");
        return _0x5d0b80.getFullYear() + "-" + _0x461667(_0x5d0b80.getMonth() + 1) + "-" + _0x461667(_0x5d0b80.getDate()) + "T" + _0x461667(_0x5d0b80.getHours()) + ":" + _0x461667(_0x5d0b80.getMinutes()) + ":" + _0x461667(_0x5d0b80.getSeconds());
      }
    },
    parseDatetimeLocalValue(_0x3abf06) {
      if (!_0x3abf06) {
        return NaN;
      }
      const [_0x1ca4b2, _0x5a9221 = ""] = _0x3abf06.split("T");
      if (!_0x1ca4b2 || !_0x5a9221) {
        return NaN;
      }
      const [_0x5930b9, _0x55d080, _0xa75608] = _0x1ca4b2.split("-").map(Number);
      const [_0x1e96e2 = 0, _0x9afa45 = 0, _0x53d702 = 0] = _0x5a9221.split(":").map(Number);
      if ([_0x5930b9, _0x55d080, _0xa75608, _0x1e96e2, _0x9afa45, _0x53d702].some(_0x36bf9a => Number.isNaN(_0x36bf9a))) {
        return NaN;
      }
      const _0x4b3165 = new Date(_0x5930b9, (_0x55d080 || 1) - 1, _0xa75608 || 1, _0x1e96e2 || 0, _0x9afa45 || 0, _0x53d702 || 0, 0);
      return _0x4b3165.getTime();
    },
    formatDuration(_0x5c3d1c) {
      if (_0x5c3d1c < 0) {
        _0x5c3d1c = 0;
      }
      const _0x5a36c3 = Math.floor(_0x5c3d1c / 1000);
      const _0x557f04 = Math.floor(_0x5a36c3 / 60);
      const _0x1d5176 = _0x5a36c3 % 60;
      const _0x55a2d2 = _0x20839d => String(_0x20839d).padStart(2, "0");
      if (_0x557f04 >= 60) {
        const _0x5f0bb1 = Math.floor(_0x557f04 / 60);
        return _0x55a2d2(_0x5f0bb1) + ":" + _0x55a2d2(_0x557f04 % 60) + ":" + _0x55a2d2(_0x1d5176);
      }
      return _0x55a2d2(_0x557f04) + ":" + _0x55a2d2(_0x1d5176);
    },
    ensureTabId() {
      try {
        let _0x33bbd = sessionStorage.getItem("sx_timed_tab_id");
        !_0x33bbd && (_0x33bbd = "tab_" + Math.random().toString(36).slice(2) + Date.now().toString(36), sessionStorage.setItem("sx_timed_tab_id", _0x33bbd));
        return _0x33bbd;
      } catch {
        return "tab_" + Math.random().toString(36).slice(2);
      }
    }
  };
  const _0x2a655f = {
    BASE_API: SXCrypto.getApi(),
    APP_CODE: "sx_jnb_ocr",
    VER: "0.52",
    KEY_K: "sx_kami_key",
    CCH_K: "sx_kami_cache_v2",
    CONFIG_CACHE_KEY: "sx_config_cache",
    CONFIG_CACHE_TIME: 300000,
    cacheOK(_0x5f127e) {
      if (!_0x5f127e || !_0x5f127e.ok) {
        return false;
      }
      const _0x486a1a = SXUtils.toMs(_0x5f127e.expire_ts);
      if (!_0x486a1a) {
        return false;
      }
      return _0x486a1a > Date.now() && typeof _0x5f127e.sig === "string";
    },
    async remoteCheck(_0x45dfc4, _0x2066d0) {
      const _0x551e2c = await SXUtils.uidAsync();
      const _0x18c770 = SXUtils.getFullDeviceFeatures();
      return new Promise((_0x19735f, _0xcaca67) => {
        let _0x5b56fa = false;
        const _0x5a2e24 = setTimeout(() => {
          !_0x5b56fa && (_0x5b56fa = true, _0xcaca67(new Error("通信超时，请重试")));
        }, 12000);
        try {
          const _0x105768 = {
            action: "check",
            app: this.APP_CODE,
            key: _0x2066d0,
            uid: _0x551e2c,
            fingerprint: _0x18c770,
            version: this.VER
          };
          const _0x402c51 = {
            action: "checkLicense",
            data: _0x105768
          };
          chrome.runtime.sendMessage(_0x402c51, _0x13507c => {
            {
              if (_0x5b56fa) {
                return;
              }
              _0x5b56fa = true;
              clearTimeout(_0x5a2e24);
              if (chrome.runtime.lastError) {
                _0xcaca67(new Error("扩展通信失败: " + chrome.runtime.lastError.message));
                return;
              }
              if (_0x13507c && _0x13507c.success) {
                _0x19735f(_0x13507c.data);
              } else {
                _0xcaca67(new Error(_0x13507c?.["error"] || "网络请求失败"));
              }
            }
          });
        } catch (_0x280e09) {
          !_0x5b56fa && (_0x5b56fa = true, clearTimeout(_0x5a2e24), _0xcaca67(_0x280e09));
        }
      });
    },
    async getScriptConfig(_0x2826ad = true) {
      if (_0x2826ad) {
        const _0x1571a6 = StorageCache.get(this.CONFIG_CACHE_KEY, null);
        if (_0x1571a6 && _0x1571a6.timestamp && Date.now() - _0x1571a6.timestamp < this.CONFIG_CACHE_TIME) {
          console.log("[授权配置] 使用缓存数据");
          return _0x1571a6.data;
        }
      }
      return new Promise(_0x2deb66 => {
        const _0x4624ff = {
          action: "getConfig"
        };
        chrome.runtime.sendMessage(_0x4624ff, _0x4742e3 => {
          _0x4742e3 && _0x4742e3.success && _0x4742e3.data && _0x4742e3.data.ok ? (StorageCache.set(this.CONFIG_CACHE_KEY, {
            data: _0x4742e3.data,
            timestamp: Date.now()
          }), console.log("[授权配置] API返回:", _0x4742e3.data), _0x2deb66(_0x4742e3.data)) : (console.log("[授权配置] 获取失败"), _0x2deb66(null));
        });
      });
    },
    async showPanel(_0xa2f0a2) {
      console.log("[授权界面] 显示弹窗...");
      const _0x10c393 = document.createElement("div");
      _0x10c393.className = "sx-mask";
      const _0x282bf1 = 60;
      const _0x153562 = _0x282bf1 / 100;
      const _0x109748 = (_0x282bf1 - 30) / 3.5;
      const _0x582c02 = "backdrop-filter:blur(" + _0x109748.toFixed(1) + "px) saturate(180%);-webkit-backdrop-filter:blur(" + _0x109748.toFixed(1) + "px) saturate(180%);";
      let _0x5dfa8c = "<div class=\"sx-card\" style=\"background:rgba(255,255,255," + _0x153562.toFixed(2) + ");" + _0x582c02 + "\">";
      _0x5dfa8c += "<div class=\"sx-card-h\">\n        <div class=\"sx-card-h-center\">\n          <div id=\"sx-avatar-placeholder\" class=\"sx-avatar-wrapper\"></div>\n          <div class=\"sx-card-h-info\">\n            <div id=\"sx-title-text\" class=\"sx-card-h-title\">上仙纪念币助手Pro版</div>\n            <div class=\"sx-card-h-subtitle\">专业好用的纪念钞预约科技！</div>\n          </div>\n        </div>\n        <div class=\"sx-card-h-badge\">未激活将无法使用</div>\n      </div>";
      _0x5dfa8c += "<div class=\"sx-card-b\">";
      _0x5dfa8c += "<div class=\"sx-card-left\">";
      _0x5dfa8c += "<div id=\"sx-desc-placeholder\" class=\"sx-desc\" style=\"opacity:0.6;font-style:italic\">\n        <div style=\"text-align:center;padding:20px;color:#6b7280\">\n          📝 正在加载使用说明...\n        </div>\n      </div>";
      _0xa2f0a2 && (_0x5dfa8c += "<div class=\"sx-warn\">" + SXUtils.escapeHTML(_0xa2f0a2) + "</div>");
      _0x5dfa8c += "<div class=\"sx-row\">\n        <label>🔑 请您输入授权卡密 CDK</label>\n        <input id=\"sx-kami\" class=\"sx-inp\" placeholder=\"请输入您的卡密\" autocomplete=\"off\">\n      </div>";
      _0x5dfa8c += "<div class=\"sx-btns\">\n        <button id=\"sx-agent\" class=\"sx-btn sx-btn-agent\">成为代理</button>\n        <div style=\"flex:1\"></div>\n        <button id=\"sx-cancel\" class=\"sx-btn sx-btn-ghost\">稍后</button>\n        <button id=\"sx-ok\" class=\"sx-btn sx-btn-primary\">立即激活</button>\n      </div>";
      _0x5dfa8c += "<div class=\"sx-note\">输入您的卡密后点击激活按钮等待2~3秒</div>";
      _0x5dfa8c += "</div>";
      _0x5dfa8c += "<div id=\"sx-sidebar-placeholder\" class=\"sx-card-right\" style=\"opacity:0.6\">\n        <div style=\"text-align:center;padding:20px;color:#6b7280;font-size:12px\">\n          📝 正在加载...\n        </div>\n      </div>";
      _0x5dfa8c += "</div></div>";
      _0x10c393.innerHTML = _0x5dfa8c;
      document.body.appendChild(_0x10c393);
      _0x10c393.querySelector("#sx-cancel").onclick = () => _0x10c393.remove();
      const _0x1b0bde = _0x10c393.querySelector("#sx-ok");
      _0x1b0bde.onclick = async () => {
        {
          const _0x82d75c = (_0x10c393.querySelector("#sx-kami").value || "").trim();
          if (!_0x82d75c) {
            {
              alert("请先填写卡密");
              return;
            }
          }
          if (_0x1b0bde.disabled) {
            return;
          }
          _0x1b0bde.disabled = true;
          const _0x11bdef = _0x1b0bde.textContent;
          _0x1b0bde.textContent = "验证中...";
          _0x1b0bde.style.opacity = "0.7";
          try {
            const _0x34ba87 = await Promise.race([this.remoteCheck(this.BASE_API, _0x82d75c), new Promise((_0x516ed6, _0x31064e) => setTimeout(() => _0x31064e(new Error("请求超时，请重试")), 20000))]);
            if (_0x34ba87 && _0x34ba87.ok) {
              const _0x2a95d9 = SXUtils.toMs(_0x34ba87.expire_ts);
              if (!_0x2a95d9) {
                alert("❌ 授权返回的 expire_ts 无效");
                return;
              }
              const _0x33e02d = SXUtils.miniSig([SXUtils.uid(), _0x2a95d9, this.APP_CODE, _0x82d75c, this.VER].join("|"));
              StorageCache.set(this.KEY_K, _0x82d75c);
              StorageCache.set(this.CCH_K, {
                ok: true,
                expire_ts: _0x2a95d9,
                api: this.BASE_API,
                key: _0x82d75c,
                last_check: Date.now(),
                sig: _0x33e02d,
                announce: _0x34ba87.announce || "",
                announce_force: _0x34ba87.announce_force || "0",
                buttons: _0x34ba87.buttons || [],
                ocr_keys: _0x34ba87.ocr_keys || {},
                sms_config: _0x34ba87.sms_config || {},
                card_type: _0x34ba87.card_type || "会员",
                float_ball_logo: _0x34ba87.float_ball_logo || ""
              });
              const _0x1dd03c = {
                expire_ts: _0x2a95d9,
                sig: _0x33e02d
              };
              window.__SX_LIC_TICKET__ = _0x1dd03c;
              alert("✅ 激活成功，刷新后生效");
              location.reload();
            } else {
              alert("❌ " + (_0x34ba87?.["msg"] || "激活失败"));
            }
          } catch (_0x5dc7de) {
            alert("❌ 网络异常：" + (_0x5dc7de?.["message"] || _0x5dc7de));
          } finally {
            _0x1b0bde.disabled = false;
            _0x1b0bde.textContent = _0x11bdef;
            _0x1b0bde.style.opacity = "1";
          }
        }
      };
      _0x10c393.querySelector("#sx-agent").onclick = () => {
        {
          window.open(this.BASE_API.replace("/api.php", "/agent/"), "_blank");
        }
      };
      console.log("[授权界面] 异步加载配置...");
      try {
        const _0x49ac6d = await this.getScriptConfig(false);
        _0x49ac6d && this.updatePanelWithConfig(_0x10c393, _0x49ac6d);
      } catch (_0x57fa00) {
        console.error("[授权界面] 配置加载失败:", _0x57fa00);
      }
    },
    updatePanelWithConfig(_0x1d87b8, _0x114ece) {
      const _0x4ee8de = _0x114ece.script_avatar || "";
      const _0x2e092a = _0x114ece.script_title || "上仙纪念币助手";
      const _0x1a942c = _0x114ece.script_description || "";
      const _0x5dc014 = _0x114ece.script_sidebar_text || "";
      const backgroundImage = _0x114ece.script_background_image || "";
      const _0x119e93 = typeof _0x114ece.script_card_opacity === "number" ? _0x114ece.script_card_opacity : 60;
      if (backgroundImage) {
        let _0x45dd89 = backgroundImage;
        let _0x5ba726 = false;
        _0x45dd89.startsWith("video:") && (_0x5ba726 = true, _0x45dd89 = _0x45dd89.substring(6));
        const _0x289227 = _0x5ba726 || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(_0x45dd89);
        if (_0x289227) {
          const _0x5262c2 = document.createElement("video");
          _0x5262c2.className = "sx-bg-video";
          _0x5262c2.src = _0x45dd89;
          _0x5262c2.autoplay = true;
          _0x5262c2.loop = true;
          _0x5262c2.muted = true;
          _0x5262c2.playsInline = true;
          _0x5262c2.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;object-fit:cover;z-index:1;pointer-events:none;";
          _0x1d87b8.insertBefore(_0x5262c2, _0x1d87b8.firstChild);
          _0x1d87b8.style.background = "transparent";
          _0x1d87b8.style.backdropFilter = "none";
          _0x1d87b8.style.webkitBackdropFilter = "none";
          const _0x38dae2 = _0x1d87b8.querySelector(".sx-card");
          _0x38dae2 && (_0x38dae2.style.zIndex = "2", _0x38dae2.style.position = "relative");
          _0x5262c2.play().catch(() => {
            console.log("[授权界面] 视频播放失败，尝试作为图片加载");
            _0x5262c2.remove();
            _0x1d87b8.style.background = "rgba(0,0,0,.5)";
            _0x1d87b8.style.backgroundImage = "url(" + SXUtils.escapeHTML(_0x45dd89) + ")";
            _0x1d87b8.style.backgroundSize = "cover";
            _0x1d87b8.style.backgroundPosition = "center";
          });
        } else {
          _0x1d87b8.style.backgroundImage = "url(" + SXUtils.escapeHTML(_0x45dd89) + ")";
          _0x1d87b8.style.backgroundSize = "cover";
          _0x1d87b8.style.backgroundPosition = "center";
        }
      }
      const _0x32b551 = _0x1d87b8.querySelector(".sx-card");
      if (_0x32b551) {
        const _0x20d5f3 = _0x119e93 / 100;
        if (_0x119e93 >= 30) {
          const _0x868fff = (_0x119e93 - 30) / 3.5;
          _0x32b551.style.backdropFilter = "blur(" + _0x868fff.toFixed(1) + "px) saturate(180%)";
          _0x32b551.style.webkitBackdropFilter = _0x32b551.style.backdropFilter;
        }
        _0x32b551.style.background = "rgba(255,255,255," + _0x20d5f3.toFixed(2) + ")";
      }
      const _0x479da1 = _0x1d87b8.querySelector("#sx-avatar-placeholder");
      _0x479da1 && _0x4ee8de && (_0x479da1.className = "sx-avatar-wrapper", _0x479da1.innerHTML = "<img src=\"" + SXUtils.escapeHTML(_0x4ee8de) + "\" class=\"sx-avatar\" onerror=\"this.parentElement.style.display='none'\">");
      const _0x1ba342 = _0x1d87b8.querySelector("#sx-title-text");
      if (_0x1ba342 && _0x2e092a) {
        _0x1ba342.textContent = _0x2e092a + " · 授权";
      }
      const _0x23de55 = _0x1d87b8.querySelector("#sx-desc-placeholder");
      _0x23de55 && (_0x1a942c ? (_0x23de55.className = "sx-desc", _0x23de55.style.opacity = "1", _0x23de55.style.fontStyle = "normal", _0x23de55.innerHTML = _0x1a942c) : _0x23de55.remove());
      const _0x4cc5c0 = _0x1d87b8.querySelector("#sx-sidebar-placeholder");
      if (_0x4cc5c0) {
        if (_0x5dc014) {
          {
            _0x4cc5c0.className = "sx-card-right";
            _0x4cc5c0.style.opacity = "1";
            _0x4cc5c0.innerHTML = "<div class=\"sx-sidebar\">" + _0x5dc014 + "</div>";
          }
        } else {
          _0x4cc5c0.remove();
        }
      }
      console.log("[授权界面] UI更新完成");
    },
    async init() {
      let _0x587f76 = StorageCache.get(this.CCH_K, null);
      _0x587f76 && _0x587f76.expire_ts && (_0x587f76.expire_ts = SXUtils.toMs(_0x587f76.expire_ts), StorageCache.set(this.CCH_K, _0x587f76));
      if (this.cacheOK(_0x587f76)) {
        const _0xa0ce49 = {
          expire_ts: _0x587f76.expire_ts,
          sig: _0x587f76.sig
        };
        window.__SX_LIC_TICKET__ = _0xa0ce49;
        console.log("[授权] 使用本地缓存，跳过远程验证");
        return true;
      }
      const _0x2fea6a = StorageCache.get(this.KEY_K, "");
      this.showPanel(_0x2fea6a ? "温馨提示：授权已过期或校验失败，请重新激活" : "温馨提示：请先使用CDK授权激活才能使用全部功能");
      return false;
    }
  };
  window.SXLicense = _0x2a655f;
  const _0x4999d3 = await _0x2a655f.init();
  if (!_0x4999d3) {
    console.log("[上仙纪念币助手] 未授权，等待激活");
    return;
  }
  console.log("[上仙纪念币助手] 授权验证通过，加载功能模块...");
  async function _0x26d71e() {
    return;
  }
  window.__SX_CHECK_LICENSE__ = _0x26d71e;
  setTimeout(_0x26d71e, 2000);
  setInterval(_0x26d71e, 10000);
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && _0x26d71e();
  });
  let _0x48ea0f = 0;
  document.addEventListener("click", () => {
    const _0x61f286 = Date.now();
    _0x61f286 - _0x48ea0f > 5000 && (_0x48ea0f = _0x61f286, _0x26d71e());
  }, true);
  const _0xc36134 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x610b75 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x4e50c2 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x3372f8 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x13b353 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x3a8c6b = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x21dac0 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x26a7ed = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x5293df = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x6dbdc2 = {
    name: "",
    idCard: "",
    phone: "",
    bankBranch: "",
    reservationAmount: "20",
    note: "",
    smsSid: ""
  };
  const _0x105d48 = {
    groups: [_0xc36134, _0x610b75, _0x4e50c2, _0x3372f8, _0x13b353, _0x3a8c6b, _0x21dac0, _0x26a7ed, _0x5293df, _0x6dbdc2]
  };
  window.SXFormFill = {
    defaultData: _0x105d48,
    savedData: null,
    init() {
      const _0x56a321 = StorageCache.get("autofillDataVersion", 0);
      if (_0x56a321 < 3) {
        this.savedData = JSON.parse(JSON.stringify(this.defaultData));
        StorageCache.set("autofillDataVersion", 3);
        this.saveData();
        return;
      }
      this.savedData = StorageCache.get("autofillData", this.defaultData);
      if (!this.savedData?.["groups"]) {
        this.savedData = JSON.parse(JSON.stringify(this.defaultData));
      }
    },
    saveData() {
      StorageCache.set("autofillData", this.savedData);
    },
    setInputValueAndTrigger(_0x5c339c, _0x525dd5) {
      if (!_0x5c339c) {
        return false;
      }
      try {
        _0x5c339c.focus();
        const _0x5decc7 = {
          bubbles: true
        };
        _0x5c339c.dispatchEvent(new Event("focus", _0x5decc7));
        const _0x4f3a15 = _0x5c339c._valueTracker;
        if (_0x4f3a15) {
          _0x4f3a15.setValue("");
        }
        const _0x5cdd3c = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.["set"];
        _0x5c339c.tagName === "INPUT" && _0x5cdd3c ? _0x5cdd3c.call(_0x5c339c, _0x525dd5) : _0x5c339c.value = _0x525dd5;
        _0x5c339c.value = _0x525dd5;
        const _0x4da873 = {
          bubbles: true,
          cancelable: true
        };
        _0x5c339c.dispatchEvent(new Event("input", _0x4da873));
        const _0x3dc003 = {
          bubbles: true,
          cancelable: true
        };
        _0x5c339c.dispatchEvent(new Event("change", _0x3dc003));
        const _0x14e20b = {
          bubbles: true
        };
        _0x5c339c.dispatchEvent(new KeyboardEvent("keydown", _0x14e20b));
        const _0x2ca72b = {
          bubbles: true
        };
        _0x5c339c.dispatchEvent(new KeyboardEvent("keyup", _0x2ca72b));
        const _0x23cec1 = {
          bubbles: true,
          cancelable: true
        };
        _0x5c339c.dispatchEvent(new Event("blur", _0x23cec1));
      } catch (_0x1c14d6) {
        _0x5c339c.value = _0x525dd5;
        const _0x59b6fd = {
          bubbles: true
        };
        _0x5c339c.dispatchEvent(new Event("input", _0x59b6fd));
        const _0x28979f = {
          bubbles: true
        };
        _0x5c339c.dispatchEvent(new Event("change", _0x28979f));
      }
      return true;
    },
    isLikelyVerifyInput(_0x1f7c74) {
      if (!_0x1f7c74) {
        return false;
      }
      const _0x3a8597 = [_0x1f7c74.id || "", _0x1f7c74.name || "", _0x1f7c74.placeholder || "", _0x1f7c74.className || ""].join(" ").toLowerCase();
      const _0x162a7f = /(verify|captcha|code|yzm|sms|msg|验证码|短信|校验码)/.test(_0x3a8597);
      const _0x4cef90 = Number(_0x1f7c74.getAttribute("maxlength") || _0x1f7c74.maxLength || 0);
      return _0x162a7f || _0x4cef90 > 0 && _0x4cef90 <= 6;
    },
    autoFillForm(_0x2ad28e) {
      console.log("[表单填充] autoFillForm 开始执行, groupIndex:", _0x2ad28e);
      const _0x3cc86f = this.savedData.groups[_0x2ad28e];
      if (!_0x3cc86f) {
        return;
      }
      const _0x29ab70 = _0x5b14bc => _0x5b14bc.closest(".autofill-settings") || _0x5b14bc.closest(".sx-pane") || _0x5b14bc.classList.contains("sx-inp");
      document.querySelectorAll("input[type=\"text\"]").forEach(_0x2758d9 => {
        if (_0x29ab70(_0x2758d9)) {
          return;
        }
        const _0x4a1c0f = (_0x2758d9.id || "").toLowerCase();
        const _0x35d76f = (_0x2758d9.name || "").toLowerCase();
        const _0xc1484e = (_0x2758d9.placeholder || "").toLowerCase();
        const _0x4aaf66 = (_0x2758d9.labels?.[0]?.["textContent"] || "").toLowerCase();
        const _0xa5f873 = ((_0x2758d9.closest(".el-form-item") || _0x2758d9.parentElement)?.["textContent"] || "").toLowerCase();
        if (_0x4a1c0f.includes("dept") || _0x35d76f.includes("dept") || _0xc1484e.includes("网点") || _0xc1484e.includes("部门")) {
          return;
        }
        (_0x4a1c0f.includes("name") || _0x35d76f.includes("name") || _0x4a1c0f.includes("usr_nm") || _0x35d76f.includes("usr_nm") || _0xc1484e.includes("姓名") || _0x4aaf66.includes("姓名") || _0x4a1c0f.includes("客户") || /客户姓名|姓名/.test(_0xa5f873)) && this.setInputValueAndTrigger(_0x2758d9, _0x3cc86f.name);
      });
      document.querySelectorAll("input").forEach(_0x1efaf9 => {
        if (_0x29ab70(_0x1efaf9)) {
          return;
        }
        const _0xecdd71 = (_0x1efaf9.id || "").toLowerCase();
        const _0x39cf57 = (_0x1efaf9.name || "").toLowerCase();
        const _0x42b4a2 = (_0x1efaf9.placeholder || "").toLowerCase();
        const _0x302c30 = (_0x1efaf9.labels?.[0]?.["textContent"] || "").toLowerCase();
        (_0xecdd71.includes("id") || _0x39cf57.includes("id") || _0xecdd71.includes("crednum") || _0x39cf57.includes("crednum") || _0xecdd71.includes("crdt_no") || _0x39cf57.includes("crdt_no") || _0x42b4a2.includes("身份证") || _0x42b4a2.includes("证件") || _0x302c30.includes("身份证") || _0x302c30.includes("证件号") || _0xecdd71.includes("idcard") || _0x39cf57.includes("idcard")) && this.setInputValueAndTrigger(_0x1efaf9, _0x3cc86f.idCard);
      });
      document.querySelectorAll("input[type=\"tel\"], input[type=\"text\"], input[type=\"number\"]").forEach(_0x19e458 => {
        {
          if (_0x29ab70(_0x19e458)) {
            return;
          }
          if (_0x19e458.readOnly || this.isLikelyVerifyInput(_0x19e458)) {
            return;
          }
          const _0x240f1c = (_0x19e458.id || "").toLowerCase();
          const _0x4f207f = (_0x19e458.name || "").toLowerCase();
          const _0x2ef0de = (_0x19e458.placeholder || "").toLowerCase();
          const _0x63ca9d = (_0x19e458.labels?.[0]?.["textContent"] || "").toLowerCase();
          (_0x240f1c.includes("phone") || _0x240f1c.includes("mobile") || _0x4f207f.includes("phone") || _0x4f207f.includes("mobile") || _0x240f1c.includes("tel") || _0x4f207f.includes("tel") || _0x240f1c.includes("mblph_no") || _0x4f207f.includes("mblph_no") || _0x2ef0de.includes("手机") || _0x2ef0de.includes("电话") || _0x63ca9d.includes("手机") || _0x63ca9d.includes("电话")) && this.setInputValueAndTrigger(_0x19e458, _0x3cc86f.phone);
        }
      });
      if (_0x3cc86f.bankBranch && _0x3cc86f.bankBranch.trim()) {
        {
          this.fillBankBranchCascader(_0x3cc86f.bankBranch);
        }
      }
      document.querySelectorAll("input[type=\"number\"], input[type=\"text\"]").forEach(_0x50c4b2 => {
        if (_0x29ab70(_0x50c4b2)) {
          return;
        }
        const _0x16216b = (_0x50c4b2.id || "").toLowerCase();
        const _0x1c506a = (_0x50c4b2.name || "").toLowerCase();
        const _0x7dc510 = (_0x50c4b2.placeholder || "").toLowerCase();
        const _0x356f37 = (_0x50c4b2.labels?.[0]?.["textContent"] || "").toLowerCase();
        const _0x3398b0 = _0x16216b + _0x1c506a + _0x7dc510 + _0x356f37;
        if (/phone|mobile|tel|手机|电话/.test(_0x3398b0)) {
          return;
        }
        (_0x16216b.includes("amount") || _0x1c506a.includes("amount") || _0x7dc510.includes("数量") || _0x356f37.includes("数量") || _0x7dc510.includes("预约") || _0x356f37.includes("预约") || _0x16216b.includes("booking_num")) && this.setInputValueAndTrigger(_0x50c4b2, _0x3cc86f.reservationAmount);
      });
      console.log("[自动勾选] 强制执行自动勾选...");
      this.autoCheckAgreeBox();
      setTimeout(() => this.autoCheckAgreeBox(), 500);
      setTimeout(() => this.autoCheckAgreeBox(), 1000);
      setTimeout(() => this.autoCheckAgreeBox(), 2000);
    },
    autoCheckAgreeBox() {
      console.log("[自动勾选] 开始查找\"我已阅读并同意\"复选框...");
      let _0x1e502f = false;
      const _0x2f1464 = document.querySelector("#NOTICECHECK, input[name=\"NOTICECHECK\"]");
      if (_0x2f1464 && !_0x2f1464.checked) {
        console.log("[自动勾选] ✓ 找到建设银行复选框");
        _0x2f1464.checked = true;
        const _0x1483e8 = {
          bubbles: true
        };
        _0x2f1464.dispatchEvent(new Event("change", _0x1483e8));
        const _0x5af995 = {
          bubbles: true
        };
        _0x2f1464.dispatchEvent(new Event("click", _0x5af995));
        if (typeof window.read_notice === "function") {
          {
            try {
              window.read_notice();
            } catch (_0x443096) {
              console.log("[自动勾选] read_notice调用失败", _0x443096);
            }
          }
        }
        _0x1e502f = true;
      }
      if (!_0x1e502f) {
        const _0x30608a = document.querySelectorAll(".el-checkbox");
        console.log("[自动勾选] 找到el-checkbox数量:", _0x30608a.length);
        _0x30608a.forEach(_0x3a08ed => {
          if (_0x1e502f) {
            return;
          }
          if (_0x3a08ed.closest(".autofill-settings") || _0x3a08ed.closest(".sx-pane")) {
            return;
          }
          const _0x34ddef = _0x3a08ed.classList.contains("is-checked");
          if (_0x34ddef) {
            console.log("[自动勾选] el-checkbox已勾选，跳过");
            return;
          }
          const _0x44f9bb = _0x3a08ed.querySelector(".el-checkbox__label");
          const _0x4ec7b4 = (_0x44f9bb?.["textContent"] || _0x3a08ed.textContent || "").trim();
          console.log("[自动勾选] 检查el-checkbox文字:", _0x4ec7b4.substring(0, 50));
          if (/阅读|须知|同意|协议|服务|纪念币|预约/.test(_0x4ec7b4)) {
            console.log("[自动勾选] ✓ 找到工商银行ElementUI复选框，准备点击");
            const _0x2bdc50 = _0x3a08ed.querySelector(".el-checkbox__original, input[type=\"checkbox\"]");
            _0x2bdc50 && (console.log("[自动勾选] 点击内部input"), _0x2bdc50.click());
            const _0x362314 = _0x3a08ed.querySelector(".el-checkbox__inner");
            if (_0x362314) {
              {
                console.log("[自动勾选] 点击el-checkbox__inner");
                _0x362314.click();
              }
            }
            console.log("[自动勾选] 点击整个el-checkbox");
            _0x3a08ed.click();
            _0x1e502f = true;
          }
        });
      }
      if (!_0x1e502f) {
        const _0x20e8da = document.querySelector("#protocal_checkbox, .protocal-checkbox");
        if (_0x20e8da) {
          const _0x35e257 = document.querySelector("#has_checked, .has-checked");
          const _0x3074c8 = !_0x35e257 || _0x35e257.classList.contains("hide") || _0x35e257.style.display === "none";
          _0x3074c8 && (console.log("[自动勾选] ✓ 找到中国银行自定义复选框"), _0x20e8da.click(), _0x35e257 && (_0x35e257.classList.remove("hide"), _0x35e257.style.display = ""), _0x1e502f = true);
        }
      }
      if (!_0x1e502f) {
        const _0x1a6c86 = document.querySelector(".notice-protocal");
        if (_0x1a6c86) {
          const _0x2139af = _0x1a6c86.querySelector("[class*=\"checkbox\"], div[id*=\"checkbox\"]");
          _0x2139af && (console.log("[自动勾选] ✓ 找到中国银行notice-protocal复选框"), _0x2139af.click(), _0x1e502f = true);
        }
      }
      if (!_0x1e502f) {
        const _0x298bb0 = document.querySelectorAll("input[type=\"checkbox\"]:not(:checked)");
        _0x298bb0.forEach(_0x2298d8 => {
          {
            if (_0x1e502f) {
              return;
            }
            if (_0x2298d8.closest(".autofill-settings") || _0x2298d8.closest(".sx-pane")) {
              return;
            }
            let _0x294a6e = "";
            const _0x503d85 = _0x2298d8.closest("div") || _0x2298d8.closest("label") || _0x2298d8.parentElement;
            if (_0x503d85) {
              _0x294a6e = (_0x503d85.textContent || "").trim();
            }
            const _0x3da254 = _0x2298d8.nextElementSibling;
            if (_0x3da254) {
              _0x294a6e += " " + (_0x3da254.textContent || "");
            }
            const _0x47f367 = _0x2298d8.previousElementSibling;
            if (_0x47f367) {
              _0x294a6e += " " + (_0x47f367.textContent || "");
            }
            const _0x585a2f = _0x503d85?.["parentElement"];
            if (_0x585a2f) {
              _0x294a6e += " " + (_0x585a2f.textContent || "").trim();
            }
            if (_0x2298d8.id) {
              const _0xa010df = document.querySelector("label[for=\"" + _0x2298d8.id + "\"]");
              if (_0xa010df) {
                _0x294a6e += " " + (_0xa010df.textContent || "");
              }
            }
            console.log("[自动勾选] 检查通用checkbox:", _0x294a6e.substring(0, 80));
            if (/我已阅读|阅读并同意|同意.*协议|同意.*须知|同意.*内容|服务须知|兑换服务|预约兑换|授权书|隐私政策|纪念币|纪念钞/.test(_0x294a6e)) {
              console.log("[自动勾选] ✓ 找到通用复选框");
              _0x2298d8.checked = true;
              const _0x8b1259 = {
                bubbles: true
              };
              _0x2298d8.dispatchEvent(new Event("change", _0x8b1259));
              const _0x31bb49 = {
                bubbles: true
              };
              _0x2298d8.dispatchEvent(new Event("click", _0x31bb49));
              const _0x11c081 = {
                bubbles: true
              };
              _0x2298d8.dispatchEvent(new Event("input", _0x11c081));
              _0x2298d8.click();
              _0x1e502f = true;
            }
          }
        });
      }
      if (!_0x1e502f) {
        const _0x250dfa = document.querySelectorAll("input[type=\"checkbox\"]");
        _0x250dfa.forEach(_0x4a3524 => {
          if (_0x1e502f) {
            return;
          }
          if (_0x4a3524.closest(".autofill-settings") || _0x4a3524.closest(".sx-pane")) {
            return;
          }
          let _0x1a82d6 = "";
          const _0x4b26ce = _0x4a3524.closest("div") || _0x4a3524.closest("label") || _0x4a3524.parentElement;
          if (_0x4b26ce) {
            _0x1a82d6 = (_0x4b26ce.textContent || "").trim();
          }
          if (/我已阅读|纪念币|纪念钞|兑换服务/.test(_0x1a82d6)) {
            if (!_0x4a3524.checked) {
              console.log("[自动勾选] ✓ 找到未勾选的纪念币相关复选框，尝试勾选");
              _0x4a3524.checked = true;
              _0x4a3524.click();
              const _0x30bb10 = {
                bubbles: true
              };
              _0x4a3524.dispatchEvent(new Event("change", _0x30bb10));
              _0x1e502f = true;
            }
          }
        });
      }
      if (!_0x1e502f) {
        const _0x17381e = document.querySelectorAll("[class*=\"checkbox\"]:not(input), [class*=\"check-box\"], [class*=\"agreement\"], [class*=\"protocal\"]");
        _0x17381e.forEach(_0x2f5e91 => {
          if (_0x1e502f) {
            return;
          }
          if (_0x2f5e91.closest(".autofill-settings") || _0x2f5e91.closest(".sx-pane")) {
            return;
          }
          const _0x36a1c8 = (_0x2f5e91.textContent || "").trim();
          const _0xb59b6e = (_0x2f5e91.parentElement?.["textContent"] || "").trim();
          const _0x3fb86e = _0x36a1c8 + " " + _0xb59b6e;
          if (/我已阅读|阅读并同意|同意/.test(_0x3fb86e)) {
            const _0x44dcff = _0x2f5e91.classList.contains("is-checked") || _0x2f5e91.classList.contains("checked") || _0x2f5e91.classList.contains("active");
            !_0x44dcff && (console.log("[自动勾选] ✓ 找到自定义复选框:", _0x3fb86e.substring(0, 50)), _0x2f5e91.click(), _0x1e502f = true);
          }
        });
      }
      _0x1e502f ? console.log("[自动勾选] ✅ 已自动勾选\"我已阅读并同意\"") : console.log("[自动勾选] ⚠️ 未找到\"我已阅读并同意\"复选框，页面可能还在加载");
      return _0x1e502f;
    },
    fillBankBranchCascader(_0x2b8db0) {
      const _0x13b85f = _0x2b8db0.split(/[\/\>]/).map(_0x309e08 => _0x309e08.trim()).filter(_0x47dcb5 => _0x47dcb5);
      if (_0x13b85f.length === 0) {
        console.log("[网点选择] 路径为空，跳过");
        return;
      }
      console.log("[网点选择] ========== 开始模拟点击选择网点 ==========");
      console.log("[网点选择] 目标路径:", _0x13b85f);
      const _0x742f94 = () => {
        {
          const _0x469faf = document.querySelectorAll(".el-cascader");
          console.log("[网点选择] 找到 el-cascader 数量:", _0x469faf.length);
          for (const _0x53113e of _0x469faf) {
            const _0x5bc18a = _0x53113e.closest(".el-form-item");
            const _0x1d75be = _0x5bc18a?.["querySelector"](".el-form-item__label");
            const _0x2f13ec = _0x1d75be?.["textContent"] || "";
            console.log("[网点选择] 检查级联选择器, 标签:", _0x2f13ec);
            if (_0x2f13ec.includes("网点") || _0x2f13ec.includes("兑换")) {
              console.log("[网点选择] ✓ 找到目标级联选择器");
              return _0x53113e;
            }
          }
          const _0x1e7940 = document.querySelectorAll(".el-form-item");
          for (const _0x358b5b of _0x1e7940) {
            const _0x3f4a8f = _0x358b5b.querySelector(".el-form-item__label");
            if (_0x3f4a8f && (_0x3f4a8f.textContent.includes("网点") || _0x3f4a8f.textContent.includes("兑换"))) {
              const _0x116180 = _0x358b5b.querySelector(".el-cascader");
              if (_0x116180) {
                console.log("[网点选择] ✓ 通过标签找到级联选择器");
                return _0x116180;
              }
            }
          }
          const _0x4b02b5 = document.querySelectorAll(".el-cascader .el-input input, .el-cascader input");
          for (const _0x5f1105 of _0x4b02b5) {
            if (_0x5f1105.placeholder && _0x5f1105.placeholder.includes("选择")) {
              {
                const _0xf2843f = _0x5f1105.closest(".el-cascader");
                if (_0xf2843f) {
                  console.log("[网点选择] ✓ 通过placeholder找到级联选择器");
                  return _0xf2843f;
                }
              }
            }
          }
          return null;
        }
      };
      const _0x9fc3f5 = _0x742f94();
      if (!_0x9fc3f5) {
        console.log("[网点选择] ✗ 未找到级联选择器容器");
        return;
      }
      const _0x4962e6 = (_0x188d0f, _0x38da0b) => {
        const _0x4b3c7d = _0x188d0f.getBoundingClientRect();
        const _0xd74322 = _0x4b3c7d.left + _0x4b3c7d.width / 2;
        const _0x9c747f = _0x4b3c7d.top + _0x4b3c7d.height / 2;
        const _0x1d9831 = {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: _0xd74322,
          clientY: _0x9c747f,
          screenX: _0xd74322,
          screenY: _0x9c747f,
          button: 0,
          buttons: 1
        };
        _0x188d0f.dispatchEvent(new MouseEvent("mouseenter", _0x1d9831));
        _0x188d0f.dispatchEvent(new MouseEvent("mouseover", _0x1d9831));
        if (_0x188d0f.focus) {
          _0x188d0f.focus();
        }
        const _0x21a788 = {
          bubbles: true
        };
        _0x188d0f.dispatchEvent(new FocusEvent("focus", _0x21a788));
        setTimeout(() => {
          _0x188d0f.dispatchEvent(new MouseEvent("mousedown", _0x1d9831));
          setTimeout(() => {
            _0x188d0f.dispatchEvent(new MouseEvent("mouseup", _0x1d9831));
            _0x188d0f.dispatchEvent(new MouseEvent("click", _0x1d9831));
            console.log("[网点选择] 已点击元素:", _0x188d0f.textContent?.["substring"](0, 20) || _0x188d0f.tagName);
            if (_0x38da0b) {
              _0x38da0b();
            }
          }, 50);
        }, 100);
      };
      console.log("[网点选择] 步骤1: 尝试打开下拉框...");
      const _0x4e4463 = _0x9fc3f5.querySelector(".el-input input") || _0x9fc3f5.querySelector("input") || _0x9fc3f5;
      const _0x5d2045 = _0x9fc3f5.querySelector(".el-input__suffix") || _0x9fc3f5.querySelector(".el-cascader__suffix") || _0x9fc3f5.querySelector("[class*=\"suffix\"]") || _0x9fc3f5.querySelector("[class*=\"arrow\"]");
      console.log("[网点选择] 触发元素:", _0x4e4463?.["tagName"], "后缀图标:", _0x5d2045 ? "有" : "无");
      const _0x37f94c = _0x3e8714 => {
        _0x4e4463.click();
        const _0x9bcbdc = {
          bubbles: true
        };
        _0x4e4463.dispatchEvent(new MouseEvent("click", _0x9bcbdc));
        _0x5d2045 && _0x5d2045.click();
        _0x4e4463.focus();
        const _0x34e8fd = {
          bubbles: true
        };
        _0x4e4463.dispatchEvent(new FocusEvent("focus", _0x34e8fd));
        const _0x493884 = {
          bubbles: true
        };
        _0x4e4463.dispatchEvent(new FocusEvent("focusin", _0x493884));
        try {
          const _0x93ee57 = {
            bubbles: true,
            cancelable: true
          };
          _0x4e4463.dispatchEvent(new PointerEvent("pointerdown", _0x93ee57));
          const _0x11e548 = {
            bubbles: true,
            cancelable: true
          };
          _0x4e4463.dispatchEvent(new PointerEvent("pointerup", _0x11e548));
        } catch (_0x3a6c76) {}
        _0x9fc3f5.click();
        const _0x2335fb = {
          bubbles: true
        };
        _0x9fc3f5.dispatchEvent(new MouseEvent("mouseenter", _0x2335fb));
        const _0x25c64a = {
          bubbles: true
        };
        _0x4e4463.dispatchEvent(new MouseEvent("mouseenter", _0x25c64a));
        if (_0x3e8714) {
          setTimeout(_0x3e8714, 300);
        }
      };
      let _0x5a6cf0 = 0;
      let _0x27dd2a = 0;
      let _0xf806c1 = 0;
      const _0x541c5c = 15;
      const _0x18738e = 800;
      const _0x11198e = () => {
        const _0x2b10df = document.querySelectorAll(".el-cascader-panel, .el-cascader__dropdown, .el-popper");
        const _0x420d43 = document.querySelectorAll(".el-cascader-menu");
        console.log("[网点选择] 检测下拉框: panels=", _0x2b10df.length, "menus=", _0x420d43.length);
        _0x420d43.length > 0 ? (console.log("[网点选择] ✓ 下拉框已打开！开始选择..."), setTimeout(_0x508f75, 300)) : (_0xf806c1++, _0xf806c1 < 10 ? (console.log("[网点选择] 下拉框未打开，重试... (", _0xf806c1, "/10)"), _0xf806c1 % 3 === 0 && _0x37f94c(), setTimeout(_0x11198e, 500)) : (console.log("[网点选择] ✗ 无法打开下拉框，放弃"), console.log("[网点选择] 提示: 请手动点击网点输入框查看是否能打开下拉列表")));
      };
      _0x37f94c(() => {
        console.log("[网点选择] 已触发打开事件，等待下拉框...");
        setTimeout(_0x11198e, 500);
      });
      const _0x508f75 = () => {
        if (_0x5a6cf0 >= _0x13b85f.length) {
          console.log("[网点选择] ✓✓✓ 全部选择完成！共", _0x13b85f.length, "级");
          setTimeout(() => {
            document.body.click();
            console.log("[网点选择] 已关闭下拉框");
          }, 500);
          return;
        }
        const _0x183be9 = _0x13b85f[_0x5a6cf0];
        console.log("[网点选择] ===== 步骤", _0x5a6cf0 + 2, ": 选择第", _0x5a6cf0 + 1, "级 =====");
        console.log("[网点选择] 目标文本:", _0x183be9);
        const _0x24a1bb = document.querySelectorAll(".el-cascader-panel, .el-cascader__dropdown, .el-popper");
        if (_0x24a1bb.length === 0) {
          _0x27dd2a++;
          _0x27dd2a < _0x541c5c ? (console.log("[网点选择] 等待下拉框打开... (", _0x27dd2a, "/", _0x541c5c, ")"), setTimeout(_0x508f75, 400)) : console.log("[网点选择] ✗ 下拉框未打开，超时放弃");
          return;
        }
        const _0x3f49c8 = document.querySelectorAll(".el-cascader-menu");
        console.log("[网点选择] 当前已展开菜单数:", _0x3f49c8.length, ", 需要第", _0x5a6cf0 + 1, "级");
        const _0x14705d = _0x3f49c8[_0x5a6cf0];
        if (!_0x14705d) {
          {
            _0x27dd2a++;
            _0x27dd2a < _0x541c5c ? (console.log("[网点选择] 等待第", _0x5a6cf0 + 1, "级菜单... (", _0x27dd2a, "/", _0x541c5c, ")"), setTimeout(_0x508f75, 400)) : console.log("[网点选择] ✗ 菜单加载超时");
            return;
          }
        }
        const _0x30ccba = _0x14705d.querySelectorAll(".el-cascader-node");
        console.log("[网点选择] 第", _0x5a6cf0 + 1, "级有", _0x30ccba.length, "个选项");
        const _0x215041 = Array.from(_0x30ccba).map(_0x57b7a7 => {
          const _0x48b899 = _0x57b7a7.querySelector(".el-cascader-node__label");
          return _0x48b899 ? _0x48b899.textContent.trim() : _0x57b7a7.textContent.trim();
        });
        console.log("[网点选择] 可选:", _0x215041.slice(0, 10).join(" | "));
        let _0x307e69 = null;
        let _0x302ec9 = 0;
        let _0x2e8475 = "";
        for (const _0x54a64f of _0x30ccba) {
          {
            const _0x1aaa33 = _0x54a64f.querySelector(".el-cascader-node__label");
            const _0x16c8de = _0x1aaa33 ? _0x1aaa33.textContent.trim() : _0x54a64f.textContent.trim();
            let _0x5b5268 = 0;
            if (_0x16c8de === _0x183be9) {
              _0x5b5268 = 100;
            } else {
              if (_0x16c8de.includes(_0x183be9)) {
                _0x5b5268 = 80;
              } else {
                if (_0x183be9.includes(_0x16c8de)) {
                  _0x5b5268 = 70;
                } else {
                  {
                    for (let _0x4bb804 = Math.min(_0x183be9.length, _0x16c8de.length); _0x4bb804 >= 2; _0x4bb804--) {
                      if (_0x16c8de.includes(_0x183be9.substring(0, _0x4bb804)) || _0x183be9.includes(_0x16c8de.substring(0, _0x4bb804))) {
                        _0x5b5268 = 50 + _0x4bb804;
                        break;
                      }
                    }
                  }
                }
              }
            }
            _0x5b5268 > _0x302ec9 && (_0x302ec9 = _0x5b5268, _0x307e69 = _0x54a64f, _0x2e8475 = _0x16c8de);
          }
        }
        if (_0x307e69 && _0x302ec9 >= 50) {
          console.log("[网点选择] ✓ 找到匹配:", _0x2e8475, "(匹配度:", _0x302ec9, ")");
          console.log("[网点选择] 正在模拟点击...");
          const _0x5bdfc8 = {
            behavior: "smooth",
            block: "center"
          };
          _0x307e69.scrollIntoView(_0x5bdfc8);
          setTimeout(() => {
            _0x4962e6(_0x307e69, () => {
              _0x5a6cf0++;
              _0x27dd2a = 0;
              console.log("[网点选择] 点击完成，等待下一级菜单加载...");
              setTimeout(_0x508f75, _0x18738e);
            });
          }, 200);
        } else {
          console.log("[网点选择] ✗ 未找到匹配项:", _0x183be9);
          console.log("[网点选择] 全部选项:", _0x215041.join(", "));
        }
      };
    },
    autoFillFormWithRetry(_0x2a745f, _0x33fa5c = 3, _0x2b7f80 = 300) {
      this.autoFillForm(_0x2a745f);
      _0x33fa5c > 0 && setTimeout(() => {
        this.autoFillFormBasic(_0x2a745f);
        if (_0x33fa5c > 1) {
          setTimeout(() => this.autoFillFormBasic(_0x2a745f), _0x2b7f80);
        }
      }, _0x2b7f80);
    },
    autoFillFormBasic(_0x18e823) {
      const _0x537815 = this.savedData.groups[_0x18e823];
      if (!_0x537815) {
        return;
      }
      const _0xdba2af = _0x355818 => _0x355818.closest(".autofill-settings") || _0x355818.closest(".sx-pane") || _0x355818.classList.contains("sx-inp");
      document.querySelectorAll("input[type=\"text\"]").forEach(_0x1929fa => {
        {
          if (_0xdba2af(_0x1929fa)) {
            return;
          }
          const _0x4b2aa8 = (_0x1929fa.id || "").toLowerCase();
          const _0x1849f0 = (_0x1929fa.name || "").toLowerCase();
          const _0x39be18 = (_0x1929fa.placeholder || "").toLowerCase();
          const _0x412c52 = (_0x1929fa.labels?.[0]?.["textContent"] || "").toLowerCase();
          const _0x252598 = ((_0x1929fa.closest(".el-form-item") || _0x1929fa.parentElement)?.["textContent"] || "").toLowerCase();
          if (_0x4b2aa8.includes("dept") || _0x1849f0.includes("dept") || _0x39be18.includes("网点") || _0x39be18.includes("部门")) {
            return;
          }
          if (_0x4b2aa8.includes("name") || _0x1849f0.includes("name") || _0x4b2aa8.includes("usr_nm") || _0x1849f0.includes("usr_nm") || _0x39be18.includes("姓名") || _0x412c52.includes("姓名") || _0x4b2aa8.includes("客户") || /客户姓名|姓名/.test(_0x252598)) {
            {
              this.setInputValueAndTrigger(_0x1929fa, _0x537815.name);
            }
          }
        }
      });
      document.querySelectorAll("input").forEach(_0x54b5ff => {
        if (_0xdba2af(_0x54b5ff)) {
          return;
        }
        const _0x5e7ce1 = (_0x54b5ff.id || "").toLowerCase();
        const _0x4ee522 = (_0x54b5ff.name || "").toLowerCase();
        const _0x3eac0c = (_0x54b5ff.placeholder || "").toLowerCase();
        const _0x139650 = (_0x54b5ff.labels?.[0]?.["textContent"] || "").toLowerCase();
        (_0x5e7ce1.includes("id") || _0x4ee522.includes("id") || _0x5e7ce1.includes("crednum") || _0x4ee522.includes("crednum") || _0x5e7ce1.includes("crdt_no") || _0x4ee522.includes("crdt_no") || _0x3eac0c.includes("身份证") || _0x3eac0c.includes("证件") || _0x139650.includes("身份证") || _0x139650.includes("证件号") || _0x5e7ce1.includes("idcard") || _0x4ee522.includes("idcard")) && this.setInputValueAndTrigger(_0x54b5ff, _0x537815.idCard);
      });
      document.querySelectorAll("input[type=\"tel\"], input[type=\"text\"], input[type=\"number\"]").forEach(_0x17e47c => {
        if (_0xdba2af(_0x17e47c)) {
          return;
        }
        if (_0x17e47c.readOnly || this.isLikelyVerifyInput(_0x17e47c)) {
          return;
        }
        const _0x5598e2 = (_0x17e47c.id || "").toLowerCase();
        const _0x1133cc = (_0x17e47c.name || "").toLowerCase();
        const _0x3cef6b = (_0x17e47c.placeholder || "").toLowerCase();
        const _0x5b6639 = (_0x17e47c.labels?.[0]?.["textContent"] || "").toLowerCase();
        if (_0x5598e2.includes("phone") || _0x5598e2.includes("mobile") || _0x1133cc.includes("phone") || _0x1133cc.includes("mobile") || _0x5598e2.includes("tel") || _0x1133cc.includes("tel") || _0x5598e2.includes("mblph_no") || _0x1133cc.includes("mblph_no") || _0x3cef6b.includes("手机") || _0x3cef6b.includes("电话") || _0x5b6639.includes("手机") || _0x5b6639.includes("电话")) {
          {
            this.setInputValueAndTrigger(_0x17e47c, _0x537815.phone);
          }
        }
      });
      document.querySelectorAll("input[type=\"number\"], input[type=\"text\"]").forEach(_0x3c8471 => {
        if (_0xdba2af(_0x3c8471)) {
          return;
        }
        const _0x449452 = (_0x3c8471.id || "").toLowerCase();
        const _0x8b16d8 = (_0x3c8471.name || "").toLowerCase();
        const _0x23b63d = (_0x3c8471.placeholder || "").toLowerCase();
        const _0x1d6ce7 = (_0x3c8471.labels?.[0]?.["textContent"] || "").toLowerCase();
        const _0x144ceb = _0x449452 + _0x8b16d8 + _0x23b63d + _0x1d6ce7;
        if (/phone|mobile|tel|手机|电话/.test(_0x144ceb)) {
          return;
        }
        (_0x449452.includes("amount") || _0x8b16d8.includes("amount") || _0x23b63d.includes("数量") || _0x1d6ce7.includes("数量") || _0x23b63d.includes("预约") || _0x1d6ce7.includes("预约") || _0x449452.includes("booking_num")) && this.setInputValueAndTrigger(_0x3c8471, _0x537815.reservationAmount);
      });
    }
  };
  SXFormFill.init();
  function _0x48acef() {
    console.log("[自动勾选] 开始查找复选框...");
    let _0x263ab6 = false;
    const _0x4be3fc = document.querySelector("#NOTICECHECK, input[name=\"NOTICECHECK\"]");
    if (_0x4be3fc && !_0x4be3fc.checked) {
      console.log("[自动勾选] ✓ 找到建设银行复选框");
      _0x4be3fc.checked = true;
      _0x4be3fc.click();
      const _0x34a561 = {
        bubbles: true
      };
      _0x4be3fc.dispatchEvent(new Event("change", _0x34a561));
      if (typeof window.read_notice === "function") {
        try {
          window.read_notice();
        } catch (_0xb435ec) {}
      }
      _0x263ab6 = true;
    }
    if (!_0x263ab6) {
      const _0x38523f = document.querySelectorAll(".el-checkbox:not(.is-checked)");
      _0x38523f.forEach(_0x7b044e => {
        if (_0x263ab6) {
          return;
        }
        if (_0x7b044e.closest(".sx-pane")) {
          return;
        }
        const _0x19830a = (_0x7b044e.textContent || "").trim();
        /阅读|须知|同意|协议|纪念币|预约/.test(_0x19830a) && (console.log("[自动勾选] ✓ 找到工商银行复选框"), _0x7b044e.click(), _0x263ab6 = true);
      });
    }
    if (!_0x263ab6) {
      const _0x2d258b = document.querySelector("#protocal_checkbox, .protocal-checkbox");
      _0x2d258b && (console.log("[自动勾选] ✓ 找到中国银行复选框"), _0x2d258b.click(), _0x263ab6 = true);
    }
    if (!_0x263ab6) {
      const _0xc4dbff = document.querySelectorAll("input[type=\"checkbox\"]:not(:checked)");
      console.log("[自动勾选] 找到checkbox数量:", _0xc4dbff.length);
      _0xc4dbff.forEach(_0x3d2567 => {
        {
          if (_0x263ab6) {
            return;
          }
          if (_0x3d2567.closest(".sx-pane")) {
            return;
          }
          let _0x35664d = "";
          const _0x220e12 = _0x3d2567.closest("label") || _0x3d2567.closest("div") || _0x3d2567.parentElement;
          if (_0x220e12) {
            _0x35664d = _0x220e12.textContent || "";
          }
          const _0x26d48a = _0x220e12?.["parentElement"];
          if (_0x26d48a) {
            _0x35664d += " " + (_0x26d48a.textContent || "");
          }
          console.log("[自动勾选] 检查checkbox文字:", _0x35664d.substring(0, 60));
          if (/我已阅读|阅读.*同意|同意.*内容|纪念币|纪念钞|兑换服务|预约兑换|服务须知/.test(_0x35664d)) {
            console.log("[自动勾选] ✓ 找到匹配的复选框，尝试勾选");
            _0x3d2567.checked = true;
            _0x3d2567.click();
            const _0xcd01d2 = {
              bubbles: true
            };
            _0x3d2567.dispatchEvent(new Event("change", _0xcd01d2));
            const _0x5ede4d = {
              bubbles: true
            };
            _0x3d2567.dispatchEvent(new Event("input", _0x5ede4d));
            _0x263ab6 = true;
          }
        }
      });
    }
    if (_0x263ab6) {
      console.log("[自动勾选] ✅ 成功");
    } else {
      {
        console.log("[自动勾选] ⚠️ 未找到符合条件的复选框");
      }
    }
    return _0x263ab6;
  }
  window.__SX_AUTO_CHECK_AGREE__ = _0x48acef;
  console.log("[自动勾选] 初始化定时检测...");
  const _0x597015 = setInterval(() => {
    const _0x2f8745 = StorageCache.get("sx_auto_agree", false);
    console.log("[自动勾选] 定时检测, 设置状态:", _0x2f8745);
    const _0x38ba43 = _0x48acef();
    _0x38ba43 && (console.log("[自动勾选] 成功，停止定时检测"), clearInterval(_0x597015));
  }, 2000);
  setTimeout(() => {
    console.log("[自动勾选] 页面加载后首次执行");
    _0x48acef();
  }, 1000);
  setTimeout(() => _0x48acef(), 3000);
  setTimeout(() => _0x48acef(), 5000);
  setTimeout(() => {
    console.log("[自动勾选] 30秒超时，停止定时检测");
    clearInterval(_0x597015);
  }, 30000);
  window.SXSMS = {
    get API_USER() {
      {
        const _0x304530 = StorageCache.get("sx_kami_cache_v2", null);
        const _0x404054 = _0x304530?.["sms_config"] || {};
        return _0x404054.api_user || "";
      }
    },
    get API_PASS() {
      const _0x3603a1 = StorageCache.get("sx_kami_cache_v2", null);
      const _0xfbb8a8 = _0x3603a1?.["sms_config"] || {};
      return _0xfbb8a8.api_pass || "";
    },
    RELAY_API: SXCrypto.getSmsApi(),
    token: null,
    currentPhone: null,
    currentSid: null,
    monitorInterval: null,
    monitoringGroup: null,
    projectsCache: null,
    monitorStartTime: null,
    monitorTimeout: 60,
    relayTimeout: 120,
    useRelay: false,
    saveMonitoringState(_0x2d1a0e) {
      sessionStorage.setItem("sx_sms_monitoring_state", JSON.stringify(_0x2d1a0e));
    },
    clearMonitoringState() {
      sessionStorage.removeItem("sx_sms_monitoring_state");
    },
    getMonitoringState() {
      try {
        const _0x5f4821 = sessionStorage.getItem("sx_sms_monitoring_state");
        return _0x5f4821 ? JSON.parse(_0x5f4821) : null;
      } catch (_0x1ca7f0) {
        return null;
      }
    },
    restoreMonitoring() {
      const _0x22b312 = this.getMonitoringState();
      if (!_0x22b312) {
        return;
      }
      const _0x4d1059 = Math.floor((Date.now() - _0x22b312.startTime) / 1000);
      const _0xb74311 = _0x22b312.timeout - _0x4d1059;
      if (_0xb74311 <= 0) {
        {
          this.clearMonitoringState();
          console.log("[接码平台] 监控已超时，不恢复");
          return;
        }
      }
      console.log("[接码平台] 恢复监控，剩余时间:", _0xb74311 + "秒");
      this.currentPhone = _0x22b312.phone;
      this.currentSid = _0x22b312.sid;
      this.monitoringGroup = _0x22b312.groupIndex;
      this.monitorStartTime = _0x22b312.startTime;
      this.useRelay = _0x22b312.isRelay;
      this.showMonitoringToast(_0x22b312.phone, _0xb74311, _0x22b312.isRelay, _0x22b312.hidePhoneMiddle || false);
      const _0x38b2ca = _0xb74311 * 2;
      let _0x4c490b = 0;
      this.monitorInterval = setInterval(async () => {
        {
          _0x4c490b++;
          if (_0x4c490b > _0x38b2ca) {
            {
              console.log(_0x22b312.isRelay ? "[中转API] 验证码监控超时" : "[接码平台] 验证码监控超时");
              this.stopMonitoring();
              !_0x22b312.isRelay && _0x22b312.sid && this.releasePhone(_0x22b312.sid, _0x22b312.phone).catch(() => {});
              return;
            }
          }
          try {
            if (_0x22b312.isRelay) {
              const _0x5620c6 = await this.queryRelayCode(_0x22b312.phone);
              if (_0x5620c6.success && _0x5620c6.data && _0x5620c6.data.code) {
                const _0x4fc769 = _0x5620c6.data.code;
                console.log("[中转API] 收到验证码:", _0x4fc769);
                this.stopMonitoring();
                this.fillVerifyCode(_0x4fc769);
                this.markRelayUsed(_0x22b312.phone);
                this.updateToastSuccess(_0x4fc769);
              }
            } else {
              const _0x307cd3 = await this.getMessage(_0x22b312.sid, _0x22b312.phone);
              const _0xe2bfa0 = _0x307cd3.yzm || _0x307cd3.code_value || _0x307cd3.sms || _0x307cd3.msg || _0x307cd3.message || _0x307cd3.content || _0x307cd3.data?.["yzm"] || _0x307cd3.data?.["code"];
              const _0x3c9d99 = _0x307cd3.code === 0 || _0x307cd3.code === "0" || _0x307cd3.status === "success" || _0x307cd3.success === true;
              if (_0xe2bfa0 && (_0x3c9d99 || typeof _0x307cd3.code === "undefined")) {
                let _0x2387c0 = _0xe2bfa0;
                if (typeof _0xe2bfa0 === "string" && _0xe2bfa0.length > 10) {
                  const _0x289daa = _0xe2bfa0.match(/(\d{4,6})/);
                  if (_0x289daa) {
                    _0x2387c0 = _0x289daa[1];
                  }
                }
                console.log("[接码平台] 收到验证码:", _0x2387c0);
                this.stopMonitoring();
                this.fillVerifyCode(_0x2387c0);
                this.updateToastSuccess(_0x2387c0);
              }
            }
          } catch (_0x139a82) {}
        }
      }, 500);
    },
    async queryRelayCode(_0x823b01) {
      return new Promise(_0xb0f9f4 => {
        const _0x4b7303 = this.RELAY_API + "?action=query&phone=" + encodeURIComponent(_0x823b01);
        const _0x32fe28 = {
          action: "fetchUrl",
          url: _0x4b7303
        };
        chrome.runtime.sendMessage(_0x32fe28, _0xb38556 => {
          if (_0xb38556 && _0xb38556.success) {
            console.log("[中转API] 查询结果:", _0xb38556.data);
            _0xb0f9f4(_0xb38556.data);
          } else {
            console.log("[中转API] 查询失败:", _0xb38556?.["error"]);
            const _0x3011e3 = {
              success: false,
              message: _0xb38556?.["error"] || "请求失败"
            };
            _0xb0f9f4(_0x3011e3);
          }
        });
      });
    },
    async markRelayUsed(_0x2201c2) {
      {
        const _0x1bc3a8 = this.RELAY_API + "?action=used&phone=" + encodeURIComponent(_0x2201c2);
        const _0x332502 = {
          action: "fetchUrl",
          url: _0x1bc3a8
        };
        chrome.runtime.sendMessage(_0x332502, () => {});
      }
    },
    startRelayMonitoring(_0x2f4ace, _0x3ed5a9, _0x53081f) {
      this.stopMonitoring();
      this.currentPhone = _0x2f4ace;
      this.monitoringGroup = _0x3ed5a9;
      this.monitorStartTime = Date.now();
      this.useRelay = true;
      const _0x30f614 = SXFormFill.savedData.groups[_0x3ed5a9] || {};
      this.saveMonitoringState({
        phone: _0x2f4ace,
        sid: null,
        groupIndex: _0x3ed5a9,
        startTime: this.monitorStartTime,
        timeout: this.relayTimeout,
        isRelay: true,
        keepSmsPopup: _0x30f614.keepSmsPopup || false,
        hidePhoneMiddle: _0x30f614.hidePhoneMiddle || false
      });
      this.markRelayUsed(_0x2f4ace);
      let _0x59783d = 0;
      const _0x4f1220 = this.relayTimeout * 2;
      console.log("[中转API] 开始监控验证码, 手机号:", _0x2f4ace, "超时:", this.relayTimeout + "秒");
      this.showMonitoringToast(_0x2f4ace, this.relayTimeout, true, _0x30f614.hidePhoneMiddle || false);
      this.monitorInterval = setInterval(async () => {
        _0x59783d++;
        if (_0x59783d > _0x4f1220) {
          console.log("[中转API] 验证码监控超时");
          this.stopMonitoring();
          return;
        }
        try {
          const _0x3b0c5c = await this.queryRelayCode(_0x2f4ace);
          if (_0x3b0c5c.success && _0x3b0c5c.data && _0x3b0c5c.data.code) {
            const _0x3e8437 = _0x3b0c5c.data.code;
            console.log("[中转API] 收到验证码:", _0x3e8437);
            this.stopMonitoring();
            const _0x103172 = this.fillVerifyCode(_0x3e8437);
            console.log("[中转API] 填充结果:", _0x103172 ? "成功" : "失败");
            this.markRelayUsed(_0x2f4ace);
            this.updateToastSuccess(_0x3e8437);
            if (_0x53081f) {
              try {
                {
                  _0x53081f(_0x3e8437, _0x3ed5a9);
                }
              } catch (_0x3eae86) {
                console.log("[中转API] 回调执行出错:", _0x3eae86);
              }
            }
          }
        } catch (_0x5afbed) {
          console.log("[中转API] 获取验证码出错:", _0x5afbed);
        }
      }, 500);
    },
    async login() {
      if (!this.API_USER || !this.API_PASS) {
        console.log("[接码平台] 未配置账号密码，请在后台设置");
        return Promise.reject(new Error("接码平台未配置，请联系管理员在后台设置账号密码"));
      }
      return new Promise((_0x474d5c, _0x1348e7) => {
        const _0x34a430 = {
          action: "smsLogin",
          user: this.API_USER,
          pass: this.API_PASS
        };
        chrome.runtime.sendMessage(_0x34a430, _0x7fd61 => {
          if (_0x7fd61 && _0x7fd61.success && _0x7fd61.data) {
            if (_0x7fd61.data.code === 0 || _0x7fd61.data.token) {
              this.token = _0x7fd61.data.token;
              console.log("[接码平台] 登录成功");
              _0x474d5c(_0x7fd61.data);
            } else {
              {
                _0x1348e7(new Error(_0x7fd61.data.msg || "登录失败"));
              }
            }
          } else {
            _0x1348e7(new Error(_0x7fd61?.["error"] || "网络错误"));
          }
        });
      });
    },
    async getProjects() {
      {
        if (this.projectsCache && this.projectsCache.length > 0) {
          {
            return this.projectsCache;
          }
        }
        !this.token && (await this.login());
        return new Promise((_0x3e4e65, _0x1006c9) => {
          {
            const _0x146057 = {
              action: "smsGetProjects",
              token: this.token
            };
            chrome.runtime.sendMessage(_0x146057, _0x137e30 => {
              console.log("[接码平台] getProjects响应:", _0x137e30);
              if (_0x137e30 && _0x137e30.success && _0x137e30.data) {
                let _0x59652d = [];
                const _0x59dc83 = _0x137e30.data;
                if (Array.isArray(_0x59dc83)) {
                  _0x59652d = _0x59dc83;
                } else {
                  if (_0x59dc83.data && Array.isArray(_0x59dc83.data)) {
                    _0x59652d = _0x59dc83.data;
                  } else {
                    if (_0x59dc83.list && Array.isArray(_0x59dc83.list)) {
                      _0x59652d = _0x59dc83.list;
                    } else {
                      if (_0x59dc83.projects && Array.isArray(_0x59dc83.projects)) {
                        _0x59652d = _0x59dc83.projects;
                      } else {
                        typeof _0x59dc83 === "object" && (_0x59652d = Object.values(_0x59dc83).filter(_0x5a7e73 => typeof _0x5a7e73 === "object" && _0x5a7e73 !== null));
                      }
                    }
                  }
                }
                this.projectsCache = _0x59652d;
                console.log("[接码平台] 获取项目列表成功:", _0x59652d.length, "个项目");
                _0x3e4e65(_0x59652d);
              } else {
                console.log("[接码平台] 获取项目列表失败:", _0x137e30?.["error"]);
                _0x3e4e65([]);
              }
            });
          }
        });
      }
    },
    async searchProjectsFromAPI(_0x600dfd) {
      !this.token && (await this.login());
      return new Promise(_0xcf3a54 => {
        const _0x3b5e98 = {
          action: "smsSearchProject",
          token: this.token,
          keyword: _0x600dfd
        };
        chrome.runtime.sendMessage(_0x3b5e98, _0x5c5bba => {
          console.log("[接码平台] searchProject响应:", _0x5c5bba);
          if (_0x5c5bba && _0x5c5bba.success && _0x5c5bba.data) {
            {
              let _0x11ad3f = [];
              const _0x38d813 = _0x5c5bba.data;
              if (Array.isArray(_0x38d813)) {
                _0x11ad3f = _0x38d813;
              } else {
                if (_0x38d813.data && Array.isArray(_0x38d813.data)) {
                  _0x11ad3f = _0x38d813.data;
                } else {
                  _0x38d813.list && Array.isArray(_0x38d813.list) && (_0x11ad3f = _0x38d813.list);
                }
              }
              _0xcf3a54(_0x11ad3f);
            }
          } else {
            _0xcf3a54([]);
          }
        });
      });
    },
    async searchProjects(_0x2f4a2d) {
      {
        try {
          const _0x31c12e = await this.getProjects();
          if (_0x31c12e.length > 0) {
            if (!_0x2f4a2d) {
              return _0x31c12e.slice(0, 20);
            }
            const _0x27a2c9 = _0x2f4a2d.toLowerCase();
            const _0x2a6e33 = _0x31c12e.filter(_0x39b436 => {
              const _0x4ecea9 = (_0x39b436.name || _0x39b436.project_name || "").toLowerCase();
              const _0x14ebd8 = String(_0x39b436.sid || _0x39b436.id || _0x39b436.project_id || "");
              const _0x4a79a8 = (_0x39b436.sign || _0x39b436.signature || _0x39b436.sms_sign || "").toLowerCase();
              return _0x4ecea9.includes(_0x27a2c9) || _0x14ebd8.includes(_0x27a2c9) || _0x4a79a8.includes(_0x27a2c9);
            });
            if (_0x2a6e33.length > 0) {
              return _0x2a6e33.slice(0, 20);
            }
          }
          if (_0x2f4a2d) {
            const _0x4e91be = await this.searchProjectsFromAPI(_0x2f4a2d);
            if (_0x4e91be.length > 0) {
              return _0x4e91be.slice(0, 20);
            }
          }
          return [];
        } catch (_0x35657d) {
          console.error("[接码平台] 搜索项目失败:", _0x35657d);
          return [];
        }
      }
    },
    async getPhone(_0x53a2e7) {
      !this.token && (await this.login());
      return new Promise((_0x18471e, _0x470185) => {
        const _0x27aad7 = {
          action: "smsGetPhone",
          token: this.token,
          sid: _0x53a2e7
        };
        chrome.runtime.sendMessage(_0x27aad7, _0x1f59cb => {
          _0x1f59cb && _0x1f59cb.success && _0x1f59cb.data ? _0x1f59cb.data.code === 0 || _0x1f59cb.data.phone ? (this.currentPhone = _0x1f59cb.data.phone, this.currentSid = _0x53a2e7, console.log("[接码平台] 获取手机号成功:", _0x1f59cb.data.phone), _0x18471e(_0x1f59cb.data)) : _0x470185(new Error(_0x1f59cb.data.msg || "获取手机号失败")) : _0x470185(new Error(_0x1f59cb?.["error"] || "网络错误"));
        });
      });
    },
    async getMessage(_0x39a6d6, _0x38c8ab) {
      !this.token && (await this.login());
      return new Promise((_0x382d44, _0x1bd0d7) => {
        const _0x356df2 = {
          action: "smsGetMessage",
          token: this.token,
          sid: _0x39a6d6 || this.currentSid,
          phone: _0x38c8ab || this.currentPhone
        };
        chrome.runtime.sendMessage(_0x356df2, _0x581c9d => {
          _0x581c9d && _0x581c9d.success && _0x581c9d.data ? _0x382d44(_0x581c9d.data) : _0x1bd0d7(new Error(_0x581c9d?.["error"] || "网络错误"));
        });
      });
    },
    async releasePhone(_0x2af18a, _0x1911a4) {
      if (!this.token) {
        return;
      }
      return new Promise(_0x406313 => {
        const _0x23351e = {
          action: "smsReleasePhone",
          token: this.token,
          sid: _0x2af18a || this.currentSid,
          phone: _0x1911a4 || this.currentPhone
        };
        chrome.runtime.sendMessage(_0x23351e, _0x1c60cf => {
          {
            _0x406313(_0x1c60cf?.["data"]);
          }
        });
      });
    },
    async addBlack(_0x1d5d2d, _0x39cb73) {
      if (!this.token) {
        return;
      }
      return new Promise(_0x3b7637 => {
        {
          const _0xeaca80 = {
            action: "smsAddBlack",
            token: this.token,
            sid: _0x1d5d2d || this.currentSid,
            phone: _0x39cb73 || this.currentPhone
          };
          chrome.runtime.sendMessage(_0xeaca80, _0x16ce6a => {
            {
              _0x3b7637(_0x16ce6a?.["data"]);
            }
          });
        }
      });
    },
    showMonitoringToast(_0x450977, _0x4cba16 = 120, _0x392cbd = false, _0x28b97b = false) {
      const _0xd8e6cf = document.getElementById("sx-sms-monitor-toast");
      if (_0xd8e6cf) {
        _0xd8e6cf.remove();
      }
      let _0x267670 = _0x450977;
      _0x28b97b && _0x450977 && _0x450977.length >= 7 && (_0x267670 = _0x450977.substring(0, 3) + "****" + _0x450977.substring(7));
      const _0x15998b = document.createElement("div");
      _0x15998b.id = "sx-sms-monitor-toast";
      _0x15998b.style.cssText = "\n        position: fixed;\n        z-index: 2147483647;\n        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n        color: white;\n        padding: 0;\n        border-radius: 12px;\n        box-shadow: 0 10px 40px rgba(102,126,234,0.4);\n        font-family: system-ui, sans-serif;\n        font-size: 14px;\n        min-width: 280px;\n        animation: sx-toast-slide-in 0.3s ease;\n        user-select: none;\n      ";
      if (!document.getElementById("sx-toast-styles")) {
        {
          const _0x14b979 = document.createElement("style");
          _0x14b979.id = "sx-toast-styles";
          _0x14b979.textContent = "\n          @keyframes sx-toast-slide-in {\n            from { transform: translateX(100%); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n          }\n          @keyframes sx-toast-pulse {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0.6; }\n          }\n        ";
          document.head.appendChild(_0x14b979);
        }
      }
      const _0x5517a6 = _0x392cbd ? "📲 自己手机" : "📱 接码平台";
      _0x15998b.innerHTML = "\n        <div id=\"sx-toast-header\" style=\"display:flex;align-items:center;gap:10px;padding:12px 16px;cursor:move;background:rgba(0,0,0,0.1);border-radius:12px 12px 0 0;\">\n          <span style=\"font-size:20px;animation:sx-toast-pulse 1.5s infinite;\">" + (_0x392cbd ? "📲" : "📱") + "</span>\n          <span style=\"font-weight:600;\">验证码监控中</span>\n          <span style=\"font-size:10px;background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px;\">" + (_0x392cbd ? "自己手机" : "接码平台") + "</span>\n          <button id=\"sx-toast-close\" style=\"margin-left:auto;background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;\">×</button>\n        </div>\n        <div style=\"padding:12px 16px;\">\n          <div style=\"background:rgba(255,255,255,0.15);padding:10px;border-radius:8px;margin-bottom:10px;\">\n            <div style=\"font-size:12px;opacity:0.9;\">手机号</div>\n            <div style=\"font-size:16px;font-weight:600;letter-spacing:1px;\">" + _0x267670 + "</div>\n          </div>\n          <div style=\"display:flex;justify-content:space-between;align-items:center;\">\n            <span style=\"font-size:12px;opacity:0.9;\">剩余监控时间</span>\n            <span id=\"sx-monitor-countdown\" style=\"font-size:18px;font-weight:600;\">" + _0x4cba16 + "秒</span>\n          </div>\n          <div style=\"margin-top:10px;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;overflow:hidden;\">\n            <div id=\"sx-monitor-progress\" style=\"height:100%;background:rgba(255,255,255,0.8);width:100%;transition:width 1s linear;\"></div>\n          </div>\n        </div>\n      ";
      document.body.appendChild(_0x15998b);
      const _0x51f608 = localStorage.getItem("sx_sms_toast_position");
      if (_0x51f608) {
        try {
          {
            const _0x472099 = JSON.parse(_0x51f608);
            _0x15998b.style.left = _0x472099.left + "px";
            _0x15998b.style.top = _0x472099.top + "px";
            _0x15998b.style.right = "auto";
          }
        } catch (_0x1cd5ad) {
          _0x15998b.style.top = "20px";
          _0x15998b.style.right = "20px";
        }
      } else {
        _0x15998b.style.top = "20px";
        _0x15998b.style.right = "20px";
      }
      const _0x1fbc8f = _0x15998b.querySelector("#sx-toast-header");
      let _0x45084b = false;
      let _0x226534 = 0;
      let _0x2784b4 = 0;
      _0x1fbc8f.addEventListener("mousedown", _0x2ea487 => {
        if (_0x2ea487.target.id === "sx-toast-close") {
          return;
        }
        _0x45084b = true;
        _0x226534 = _0x2ea487.clientX - _0x15998b.offsetLeft;
        _0x2784b4 = _0x2ea487.clientY - _0x15998b.offsetTop;
        _0x15998b.style.transition = "none";
      });
      document.addEventListener("mousemove", _0x164843 => {
        {
          if (!_0x45084b) {
            return;
          }
          const _0x463998 = window.innerWidth - _0x15998b.offsetWidth;
          const _0xceea39 = window.innerHeight - _0x15998b.offsetHeight;
          _0x15998b.style.left = Math.min(_0x463998, Math.max(0, _0x164843.clientX - _0x226534)) + "px";
          _0x15998b.style.top = Math.min(_0xceea39, Math.max(0, _0x164843.clientY - _0x2784b4)) + "px";
          _0x15998b.style.right = "auto";
        }
      });
      document.addEventListener("mouseup", () => {
        if (_0x45084b) {
          const _0x24e141 = {
            left: _0x15998b.offsetLeft,
            top: _0x15998b.offsetTop
          };
          localStorage.setItem("sx_sms_toast_position", JSON.stringify(_0x24e141));
        }
        _0x45084b = false;
      });
      _0x15998b.querySelector("#sx-toast-close").onclick = () => {
        _0x15998b.remove();
        this.stopMonitoring();
      };
      let _0x40660d = _0x4cba16;
      const _0xc9523e = _0x15998b.querySelector("#sx-monitor-countdown");
      const _0x35bad4 = _0x15998b.querySelector("#sx-monitor-progress");
      this.toastInterval = setInterval(() => {
        _0x40660d--;
        if (_0x40660d <= 0) {
          clearInterval(this.toastInterval);
          _0xc9523e.textContent = "已超时";
          _0x35bad4.style.width = "0%";
          return;
        }
        _0xc9523e.textContent = _0x40660d + "秒";
        _0x35bad4.style.width = _0x40660d / _0x4cba16 * 100 + "%";
      }, 1000);
      return _0x15998b;
    },
    async copyToClipboard(_0x3ca505) {
      try {
        await navigator.clipboard.writeText(_0x3ca505);
        console.log("[接码平台] 验证码已复制到剪贴板:", _0x3ca505);
        return true;
      } catch (_0x5d7452) {
        try {
          const _0x4b899e = document.createElement("textarea");
          _0x4b899e.value = _0x3ca505;
          _0x4b899e.style.position = "fixed";
          _0x4b899e.style.opacity = "0";
          document.body.appendChild(_0x4b899e);
          _0x4b899e.select();
          document.execCommand("copy");
          document.body.removeChild(_0x4b899e);
          console.log("[接码平台] 验证码已复制到剪贴板(备用方案):", _0x3ca505);
          return true;
        } catch (_0xbe4790) {
          console.error("[接码平台] 复制失败:", _0xbe4790);
          return false;
        }
      }
    },
    showTestToast() {
      this.showMonitoringToast("测试模式", 300);
      const _0x4c692e = document.getElementById("sx-sms-monitor-toast");
      if (_0x4c692e) {
        const _0x18c89a = _0x4c692e.querySelector("#sx-toast-header span:nth-child(2)");
        if (_0x18c89a) {
          _0x18c89a.textContent = "短信验证码填充测试";
        }
        const _0x33bfb5 = _0x4c692e.querySelector("#sx-monitor-countdown");
        if (_0x33bfb5) {
          _0x33bfb5.parentElement.style.display = "none";
        }
        const _0x4a4095 = _0x4c692e.querySelector("#sx-monitor-progress");
        if (_0x4a4095) {
          _0x4a4095.parentElement.style.display = "none";
        }
      }
    },
    async updateToastSuccess(_0x4725b4) {
      await this.copyToClipboard(_0x4725b4);
      const _0x27a547 = document.getElementById("sx-sms-monitor-toast");
      if (_0x27a547) {
        this.toastInterval && clearInterval(this.toastInterval);
        _0x27a547.style.background = "linear-gradient(135deg, #10b981 0%, #34d399 100%)";
        _0x27a547.innerHTML = "\n          <div id=\"sx-toast-header\" style=\"display:flex;align-items:center;gap:10px;padding:12px 16px;cursor:move;background:rgba(0,0,0,0.1);border-radius:12px 12px 0 0;\">\n            <span style=\"font-size:24px;\">✅</span>\n            <span style=\"font-weight:600;\">验证码已收到!</span>\n            <button id=\"sx-toast-close\" style=\"margin-left:auto;background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:14px;\">×</button>\n          </div>\n          <div style=\"padding:12px 16px;\">\n            <div style=\"background:rgba(255,255,255,0.15);padding:16px;border-radius:8px;text-align:center;margin-bottom:10px;\">\n              <div style=\"font-size:32px;font-weight:700;letter-spacing:6px;font-family:monospace;\">" + _0x4725b4 + "</div>\n            </div>\n            <div style=\"font-size:12px;text-align:center;opacity:0.9;\">\n              ✓ 已自动复制到剪贴板<br>\n              <span style=\"opacity:0.7;\">如未自动填充，请手动粘贴 (Ctrl+V)</span>\n            </div>\n          </div>\n        ";
        const _0x37fbd5 = _0x27a547.querySelector("#sx-toast-header");
        let _0x5b7c8a = false;
        let _0x366ff5 = 0;
        let _0x23c533 = 0;
        _0x37fbd5.addEventListener("mousedown", _0x3f0186 => {
          if (_0x3f0186.target.id === "sx-toast-close") {
            return;
          }
          _0x5b7c8a = true;
          _0x366ff5 = _0x3f0186.clientX - _0x27a547.offsetLeft;
          _0x23c533 = _0x3f0186.clientY - _0x27a547.offsetTop;
        });
        const _0x536012 = _0x3869e0 => {
          {
            if (!_0x5b7c8a) {
              return;
            }
            const _0x3d7619 = window.innerWidth - _0x27a547.offsetWidth;
            const _0x5e4a3c = window.innerHeight - _0x27a547.offsetHeight;
            _0x27a547.style.left = Math.min(_0x3d7619, Math.max(0, _0x3869e0.clientX - _0x366ff5)) + "px";
            _0x27a547.style.top = Math.min(_0x5e4a3c, Math.max(0, _0x3869e0.clientY - _0x23c533)) + "px";
            _0x27a547.style.right = "auto";
          }
        };
        const _0x50e36b = () => {
          _0x5b7c8a = false;
        };
        document.addEventListener("mousemove", _0x536012);
        document.addEventListener("mouseup", _0x50e36b);
        _0x27a547.querySelector("#sx-toast-close").onclick = () => {
          document.removeEventListener("mousemove", _0x536012);
          document.removeEventListener("mouseup", _0x50e36b);
          _0x27a547.remove();
        };
      }
    },
    startMonitoring(_0x3420ba, _0xdc5d36, _0x5e3c2d, _0x17cb1f) {
      {
        this.stopMonitoring();
        this.currentSid = _0x3420ba;
        this.currentPhone = _0xdc5d36;
        this.monitoringGroup = _0x5e3c2d;
        this.monitorStartTime = Date.now();
        this.useRelay = false;
        this.saveMonitoringState({
          phone: _0xdc5d36,
          sid: _0x3420ba,
          groupIndex: _0x5e3c2d,
          startTime: this.monitorStartTime,
          timeout: this.monitorTimeout,
          isRelay: false,
          keepSmsPopup: false
        });
        let _0x337278 = 0;
        const _0x53e8c6 = this.monitorTimeout * 2;
        console.log("[接码平台] 开始监控验证码, 手机号:", _0xdc5d36);
        this.showMonitoringToast(_0xdc5d36, this.monitorTimeout);
        this.monitorInterval = setInterval(async () => {
          {
            _0x337278++;
            if (_0x337278 > _0x53e8c6) {
              console.log("[接码平台] 验证码监控超时，释放号码");
              this.stopMonitoring();
              this.releasePhone(_0x3420ba, _0xdc5d36).then(() => {
                console.log("[接码平台] 号码已释放:", _0xdc5d36);
              }).catch(_0x1869c5 => {
                console.log("[接码平台] 释放号码失败:", _0x1869c5);
              });
              return;
            }
            try {
              const _0x26fc14 = await this.getMessage(_0x3420ba, _0xdc5d36);
              console.log("[接码平台] 获取验证码响应:", _0x26fc14);
              const _0x112f3c = _0x26fc14.yzm || _0x26fc14.code_value || _0x26fc14.sms || _0x26fc14.msg || _0x26fc14.message || _0x26fc14.content || _0x26fc14.data?.["yzm"] || _0x26fc14.data?.["code"];
              const _0x476edf = _0x26fc14.code === 0 || _0x26fc14.code === "0" || _0x26fc14.status === "success" || _0x26fc14.success === true;
              if (_0x112f3c && (_0x476edf || typeof _0x26fc14.code === "undefined")) {
                let _0x41a2e2 = _0x112f3c;
                if (typeof _0x112f3c === "string" && _0x112f3c.length > 10) {
                  {
                    const _0x2be274 = _0x112f3c.match(/(\d{4,6})/);
                    if (_0x2be274) {
                      {
                        _0x41a2e2 = _0x2be274[1];
                      }
                    }
                  }
                }
                console.log("[接码平台] 收到验证码:", _0x41a2e2);
                this.stopMonitoring();
                const _0x203bf7 = this.fillVerifyCode(_0x41a2e2);
                console.log("[接码平台] 填充结果:", _0x203bf7 ? "成功" : "失败");
                this.updateToastSuccess(_0x41a2e2);
                if (_0x17cb1f) {
                  {
                    try {
                      _0x17cb1f(_0x41a2e2, _0x5e3c2d);
                    } catch (_0x1f07c4) {
                      console.log("[接码平台] 回调执行出错:", _0x1f07c4);
                    }
                  }
                }
              } else {
                _0x26fc14.code !== 0 && _0x26fc14.msg && console.log("[接码平台] 等待验证码中...", _0x26fc14.msg);
              }
            } catch (_0x48cee7) {
              console.log("[接码平台] 获取验证码出错:", _0x48cee7);
            }
          }
        }, 500);
      }
    },
    stopMonitoring() {
      this.monitorInterval && (clearInterval(this.monitorInterval), this.monitorInterval = null);
      this.toastInterval && (clearInterval(this.toastInterval), this.toastInterval = null);
      this.monitoringGroup = null;
      this.clearMonitoringState();
    },
    fillVerifyCode(_0x154780) {
      console.log("[接码平台] 开始查找短信验证码输入框，验证码:", _0x154780);
      const _0x10c619 = (_0x29c0f2, _0x2fd0d3) => {
        {
          console.log("[接码平台] 填充到输入框:", _0x29c0f2.id || _0x29c0f2.name || "无名");
          _0x29c0f2.focus();
          _0x29c0f2.value = _0x2fd0d3;
          const _0x12fffb = {
            bubbles: true
          };
          _0x29c0f2.dispatchEvent(new Event("input", _0x12fffb));
          const _0x58e7e4 = {
            bubbles: true
          };
          _0x29c0f2.dispatchEvent(new Event("change", _0x58e7e4));
          try {
            const _0x4269f5 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
            _0x4269f5.call(_0x29c0f2, _0x2fd0d3);
            const _0x5a3dcd = {
              bubbles: true
            };
            _0x29c0f2.dispatchEvent(new Event("input", _0x5a3dcd));
          } catch (_0x3f7d63) {}
          console.log("[接码平台] ✓ 已填充, 当前值:", _0x29c0f2.value);
          return _0x29c0f2.value === _0x2fd0d3;
        }
      };
      console.log("[接码平台] === 最快路径：通过获取短信验证码按钮定位 ===");
      const _0x5a08d3 = document.querySelectorAll("button, a, span");
      for (const _0x270498 of _0x5a08d3) {
        {
          const _0x4db3c7 = (_0x270498.textContent || "").trim();
          if (/^获取短信验证码$/.test(_0x4db3c7)) {
            console.log("[接码平台] 找到获取短信验证码按钮");
            let _0x551831 = _0x270498.previousElementSibling;
            while (_0x551831) {
              if (_0x551831.tagName === "INPUT" && !_0x551831.readOnly && (!_0x551831.value || _0x551831.value.length < 4)) {
                console.log("[接码平台] ✓ 最快路径：按钮前兄弟就是输入框");
                _0x10c619(_0x551831, _0x154780);
                return true;
              }
              const _0x422459 = _0x551831.querySelector && _0x551831.querySelector("input[type=\"text\"], input:not([type])");
              if (_0x422459 && !_0x422459.readOnly && (!_0x422459.value || _0x422459.value.length < 4)) {
                console.log("[接码平台] ✓ 最快路径：通过按钮前兄弟找到输入框");
                _0x10c619(_0x422459, _0x154780);
                return true;
              }
              _0x551831 = _0x551831.previousElementSibling;
            }
            const _0x318e68 = _0x270498.parentElement;
            if (_0x318e68 && (_0x318e68.textContent || "").length < 60) {
              const _0x1641a3 = _0x318e68.querySelector("input[type=\"text\"], input:not([type])");
              if (_0x1641a3 && !_0x1641a3.readOnly && (!_0x1641a3.value || _0x1641a3.value.length < 4)) {
                {
                  console.log("[接码平台] ✓ 最快路径：通过按钮父元素找到输入框");
                  _0x10c619(_0x1641a3, _0x154780);
                  return true;
                }
              }
            }
          }
        }
      }
      console.log("[接码平台] === 快速路径：查找短信验证码标签 ===");
      const _0x440f1d = document.querySelectorAll("label, span, td");
      for (const _0xaf1bd8 of _0x440f1d) {
        const _0x452a6d = (_0xaf1bd8.textContent || "").trim();
        if (_0x452a6d.length <= 10 && /^短信验证码[:：]?$/.test(_0x452a6d)) {
          console.log("[接码平台] 找到短信验证码标签:", _0x452a6d);
          let _0x5d73d3 = _0xaf1bd8.nextElementSibling;
          while (_0x5d73d3) {
            if (_0x5d73d3.tagName === "INPUT" && !_0x5d73d3.readOnly && !_0x5d73d3.disabled && (!_0x5d73d3.value || _0x5d73d3.value.length < 4)) {
              console.log("[接码平台] ✓ 快速路径：通过兄弟元素找到短信验证码输入框");
              _0x10c619(_0x5d73d3, _0x154780);
              return true;
            }
            const _0x1a3bdd = _0x5d73d3.querySelector && _0x5d73d3.querySelector("input[type=\"text\"], input[type=\"tel\"], input:not([type])");
            if (_0x1a3bdd && !_0x1a3bdd.readOnly && !_0x1a3bdd.disabled && (!_0x1a3bdd.value || _0x1a3bdd.value.length < 4)) {
              console.log("[接码平台] ✓ 快速路径：通过嵌套元素找到短信验证码输入框");
              _0x10c619(_0x1a3bdd, _0x154780);
              return true;
            }
            _0x5d73d3 = _0x5d73d3.nextElementSibling;
          }
          const _0x1031e9 = _0xaf1bd8.closest("tr, .el-form-item");
          if (_0x1031e9) {
            const _0x3ff3c0 = _0x1031e9.textContent || "";
            if (_0x3ff3c0.length < 50 || !(/姓名|证件|手机号码/.test(_0x3ff3c0) && /短信验证码/.test(_0x3ff3c0))) {
              const _0x20c8b0 = _0x1031e9.querySelectorAll("input[type=\"text\"], input[type=\"tel\"], input:not([type])");
              for (const _0x519abf of _0x20c8b0) {
                {
                  if (_0x519abf.readOnly || _0x519abf.disabled) {
                    continue;
                  }
                  if (_0x519abf.value && _0x519abf.value.length >= 4) {
                    continue;
                  }
                  const _0x3b307f = _0x519abf.id ? document.querySelector("label[for=\"" + _0x519abf.id + "\"]") : null;
                  if (_0x3b307f && /姓名|图形验证码/.test(_0x3b307f.textContent)) {
                    continue;
                  }
                  const _0x48c210 = _0x519abf.previousElementSibling;
                  if (_0x48c210 && /姓名|图形验证码/.test(_0x48c210.textContent || "")) {
                    continue;
                  }
                  console.log("[接码平台] ✓ 快速路径：通过行容器找到短信验证码输入框");
                  _0x10c619(_0x519abf, _0x154780);
                  return true;
                }
              }
            }
          }
          let _0x28dfbd = _0xaf1bd8.parentElement;
          for (let _0x51347c = 0; _0x51347c < 2 && _0x28dfbd; _0x51347c++) {
            {
              const _0x2ae6a0 = (_0x28dfbd.textContent || "").length;
              if (_0x2ae6a0 > 80) {
                _0x28dfbd = _0x28dfbd.parentElement;
                continue;
              }
              const _0x5f1bf9 = _0x28dfbd.querySelectorAll(":scope > input, :scope > div > input, :scope > span > input");
              for (const _0x3043fd of _0x5f1bf9) {
                {
                  if (_0x3043fd.readOnly || _0x3043fd.disabled) {
                    continue;
                  }
                  if (_0x3043fd.value && _0x3043fd.value.length >= 4) {
                    continue;
                  }
                  console.log("[接码平台] ✓ 快速路径：通过父元素找到短信验证码输入框");
                  _0x10c619(_0x3043fd, _0x154780);
                  return true;
                }
              }
              _0x28dfbd = _0x28dfbd.parentElement;
            }
          }
        }
      }
      const _0x5b5196 = document.querySelectorAll("input[type=\"text\"], input[type=\"tel\"], input[type=\"number\"], input:not([type])");
      const _0x4df29c = Array.from(_0x5b5196).filter(_0x20dfeb => {
        if (_0x20dfeb.closest(".autofill-settings") || _0x20dfeb.closest(".sx-pane") || _0x20dfeb.closest("#sx-sms-monitor-toast")) {
          return false;
        }
        if (_0x20dfeb.hasAttribute("data-sx-ext")) {
          return false;
        }
        return true;
      });
      console.log("[接码平台] 找到", _0x4df29c.length, "个输入框(已排除扩展输入框)");
      const isInImageCaptchaRow = _0x3a3780 => {
        if (_0x3a3780.id) {
          const _0x40457a = document.querySelector("label[for=\"" + _0x3a3780.id + "\"]");
          if (_0x40457a && /图形验证码|图片验证码/.test(_0x40457a.textContent)) {
            console.log("[接码平台] 排除: 图形验证码(label匹配)");
            return true;
          }
        }
        let _0x2dba62 = _0x3a3780.previousElementSibling;
        while (_0x2dba62) {
          const _0x3369b0 = (_0x2dba62.textContent || "").trim();
          if (_0x3369b0.length < 20 && /图形验证码|图片验证码/.test(_0x3369b0)) {
            console.log("[接码平台] 排除: 图形验证码(前兄弟匹配)");
            return true;
          }
          _0x2dba62 = _0x2dba62.previousElementSibling;
        }
        let _0x45ad64 = _0x3a3780.parentElement;
        for (let _0x1c7d17 = 0; _0x1c7d17 < 3 && _0x45ad64; _0x1c7d17++) {
          const _0x46b2b4 = _0x45ad64.textContent || "";
          if (_0x46b2b4.length > 100) {
            const _0x255619 = _0x45ad64.querySelector(":scope > label, :scope > span, :scope > div > label");
            if (_0x255619 && /图形验证码|图片验证码/.test(_0x255619.textContent)) {
              console.log("[接码平台] 排除: 图形验证码行(直接标签)");
              return true;
            }
            _0x45ad64 = _0x45ad64.parentElement;
            continue;
          }
          if (/图形验证码|图片验证码/.test(_0x46b2b4) && !/短信验证码/.test(_0x46b2b4)) {
            console.log("[接码平台] 排除: 图形验证码行(文字匹配)");
            return true;
          }
          const _0x17b32e = _0x45ad64.querySelector(":scope > img, :scope > canvas, :scope > div > img");
          if (_0x17b32e && !/短信|手机|获取验证码|发送验证码/.test(_0x46b2b4)) {
            console.log("[接码平台] 排除: 图形验证码行(有直接图片)");
            return true;
          }
          _0x45ad64 = _0x45ad64.parentElement;
        }
        return false;
      };
      const _0x33dc9a = _0x2cd421 => {
        let _0x54a205 = _0x2cd421.parentElement;
        for (let _0x5b7362 = 0; _0x5b7362 < 4 && _0x54a205; _0x5b7362++) {
          const _0x264435 = _0x54a205.textContent || "";
          if (_0x264435.length > 150) {
            break;
          }
          if (/短信验证码|手机验证码|短信校验码/.test(_0x264435)) {
            return true;
          }
          if (/获取验证码|发送验证码|\d+s?后?发送/.test(_0x264435) && !/图形验证码|图片验证码/.test(_0x264435)) {
            return true;
          }
          _0x54a205 = _0x54a205.parentElement;
        }
        return false;
      };
      const _0x152caf = _0x26c4d1 => {
        const _0x23ab69 = ((_0x26c4d1.id || "") + " " + (_0x26c4d1.name || "") + " " + (_0x26c4d1.placeholder || "")).toLowerCase();
        const _0x46c805 = ["姓名", "name", "证件", "身份证", "idcard", "id_card", "idno", "手机号", "phone", "mobile", "tel", "电话", "邮箱", "email", "地址", "address", "银行卡", "card", "账号", "account", "user"];
        if (_0x46c805.some(_0x3178cb => _0x23ab69.includes(_0x3178cb))) {
          console.log("[接码平台] 排除(属性):", _0x23ab69);
          return true;
        }
        if (_0x26c4d1.id) {
          const _0x59c137 = document.querySelector("label[for=\"" + _0x26c4d1.id + "\"]");
          if (_0x59c137) {
            const _0x2d5a0f = (_0x59c137.textContent || "").trim();
            if (/姓名|真实姓名|证件|身份证|手机号码|电话|邮箱|地址|银行卡|账号/.test(_0x2d5a0f)) {
              console.log("[接码平台] 排除(label):", _0x2d5a0f);
              return true;
            }
          }
        }
        let _0x51791e = _0x26c4d1.previousElementSibling;
        while (_0x51791e) {
          {
            const _0x37bd5b = (_0x51791e.textContent || "").trim();
            if (_0x37bd5b.length > 0 && _0x37bd5b.length < 20) {
              if (/姓名|真实姓名|证件|身份证|手机号码|电话|邮箱|地址|银行卡|账号/.test(_0x37bd5b)) {
                console.log("[接码平台] 排除(前兄弟):", _0x37bd5b);
                return true;
              }
            }
            _0x51791e = _0x51791e.previousElementSibling;
          }
        }
        let _0x471567 = _0x26c4d1.parentElement;
        for (let _0x2888fc = 0; _0x2888fc < 4 && _0x471567; _0x2888fc++) {
          const _0x84ca6c = _0x471567.querySelector(".el-form-item__label");
          if (_0x84ca6c) {
            const _0x4018e7 = (_0x84ca6c.textContent || "").trim();
            if (/姓名|真实姓名|证件|身份证|手机号码|电话|邮箱|地址|银行卡|账号/.test(_0x4018e7)) {
              console.log("[接码平台] 排除(ElementUI标签):", _0x4018e7);
              return true;
            }
            if (/短信验证码|手机验证码/.test(_0x4018e7)) {
              return false;
            }
          }
          const _0x17baad = _0x471567.querySelectorAll(":scope > label, :scope > span, :scope > div > label");
          for (const _0x1e598a of _0x17baad) {
            const _0x2679ff = (_0x1e598a.textContent || "").trim();
            if (_0x2679ff.length > 0 && _0x2679ff.length < 15) {
              if (/^姓名$|^真实姓名$|^证件|^身份证|^手机号码?$|^电话$|^邮箱$/.test(_0x2679ff)) {
                {
                  console.log("[接码平台] 排除(标签):", _0x2679ff);
                  return true;
                }
              }
            }
          }
          _0x471567 = _0x471567.parentElement;
        }
        return false;
      };
      console.log("[接码平台] === 第零步A：农行特殊表格结构 ===");
      const _0x263159 = document.querySelectorAll("td .cell");
      let _0x2f3f1c = null;
      let _0xf97ceb = null;
      for (const _0x297125 of _0x263159) {
        const _0x5e4a5c = _0x297125.querySelectorAll(".information-item");
        const _0x4f506a = _0x297125.querySelectorAll(".information-input");
        if (_0x5e4a5c.length >= 5 && !_0x2f3f1c) {
          _0x2f3f1c = _0x297125;
        }
        if (_0x4f506a.length >= 5 && !_0xf97ceb) {
          _0xf97ceb = _0x297125;
        }
      }
      if (_0x2f3f1c && _0xf97ceb) {
        const _0xffb8c4 = _0x2f3f1c.querySelectorAll(".information-item");
        const _0x18a4c8 = _0xf97ceb.querySelectorAll(".information-input");
        console.log("[接码平台] 检测到农行表格结构，标签数:", _0xffb8c4.length, "输入框数:", _0x18a4c8.length);
        let _0x49f4fc = -1;
        _0xffb8c4.forEach((_0x5995f5, _0x5bf7c4) => {
          const _0x49bcac = (_0x5995f5.textContent || "").trim();
          _0x49bcac === "短信验证码" && (_0x49f4fc = _0x5bf7c4, console.log("[接码平台] 找到短信验证码标签，索引:", _0x49f4fc));
        });
        if (_0x49f4fc >= 0 && _0x18a4c8[_0x49f4fc]) {
          const _0x126708 = _0x18a4c8[_0x49f4fc];
          const _0x441cb0 = _0x126708.querySelector("input.el-input__inner, input[type=\"text\"]");
          if (_0x441cb0 && !_0x441cb0.readOnly && (!_0x441cb0.value || _0x441cb0.value.length < 4)) {
            console.log("[接码平台] ✓ 农行结构：通过索引找到短信验证码输入框");
            _0x10c619(_0x441cb0, _0x154780);
            return true;
          }
        }
      }
      const _0x1f8564 = document.querySelectorAll(".information-item");
      for (const _0x3e0557 of _0x1f8564) {
        const _0x5a0870 = (_0x3e0557.textContent || "").trim();
        if (_0x5a0870 === "短信验证码") {
          const _0x1230fb = _0x3e0557.closest("tr");
          if (_0x1230fb) {
            const _0x3b2d24 = _0x1230fb.querySelectorAll(".information-item");
            const _0x24e627 = _0x1230fb.querySelectorAll(".information-input");
            let _0xd63227 = -1;
            _0x3b2d24.forEach((_0x2fbada, _0x4a6567) => {
              if (_0x2fbada === _0x3e0557) {
                _0xd63227 = _0x4a6567;
              }
            });
            if (_0xd63227 >= 0 && _0x24e627[_0xd63227]) {
              const _0x1b0da4 = _0x24e627[_0xd63227].querySelector("input.el-input__inner, input[type=\"text\"]");
              if (_0x1b0da4 && !_0x1b0da4.readOnly && (!_0x1b0da4.value || _0x1b0da4.value.length < 4)) {
                console.log("[接码平台] ✓ 农行结构(备用)：通过行索引找到短信验证码输入框");
                _0x10c619(_0x1b0da4, _0x154780);
                return true;
              }
            }
          }
        }
      }
      console.log("[接码平台] === 第零步B：通过短信按钮精确定位 ===");
      const _0x33d540 = document.querySelectorAll("button, a, span");
      for (const _0xd5e0cb of _0x33d540) {
        const _0x59a762 = (_0xd5e0cb.textContent || "").trim();
        if (/获取短信|短信验证|发送短信|获取验证码|发送验证码/.test(_0x59a762) && !/图形/.test(_0x59a762)) {
          console.log("[接码平台] 找到短信按钮:", _0x59a762);
          const _0x2f4ed7 = _0xd5e0cb.closest("tr, .el-table__row");
          if (_0x2f4ed7) {
            const _0x15a777 = _0x2f4ed7.querySelectorAll("td");
            for (const _0x5cf63c of _0x15a777) {
              {
                const _0x1880dd = _0x5cf63c.querySelectorAll("input.el-input__inner");
                const _0x48e75d = Array.from(_0x1880dd).filter(_0x143a09 => !_0x143a09.readOnly && (!_0x143a09.value || _0x143a09.value.length < 4));
                if (_0x48e75d.length > 0) {
                  const _0x4b89b1 = _0x48e75d[_0x48e75d.length - 1];
                  console.log("[接码平台] ✓ 通过表格行找到输入框");
                  _0x10c619(_0x4b89b1, _0x154780);
                  return true;
                }
              }
            }
          }
          let _0x2ab810 = _0xd5e0cb.parentElement;
          for (let _0x20cad9 = 0; _0x20cad9 < 5 && _0x2ab810; _0x20cad9++) {
            {
              const _0x3f1343 = _0x2ab810.querySelectorAll("input[type=\"text\"], input[type=\"tel\"], input:not([type])");
              for (const _0x5ef293 of _0x3f1343) {
                if (_0x5ef293.type === "hidden" || _0x5ef293.readOnly) {
                  continue;
                }
                if (_0x5ef293.value && _0x5ef293.value.length >= 4) {
                  continue;
                }
                if (isInImageCaptchaRow(_0x5ef293)) {
                  console.log("[接码平台] 跳过图形验证码输入框");
                  continue;
                }
                console.log("[接码平台] ✓ 通过短信按钮容器定位到输入框");
                _0x10c619(_0x5ef293, _0x154780);
                return true;
              }
              _0x2ab810 = _0x2ab810.parentElement;
            }
          }
        }
      }
      console.log("[接码平台] === 第一步：查找短信验证码行 ===");
      for (const _0x593d4e of _0x4df29c) {
        if (_0x593d4e.type === "hidden") {
          continue;
        }
        if (_0x593d4e.value && _0x593d4e.value.length >= 4) {
          continue;
        }
        if (_0x152caf(_0x593d4e)) {
          console.log("[接码平台] 排除非验证码字段:", _0x593d4e.id || _0x593d4e.name || _0x593d4e.placeholder);
          continue;
        }
        if (_0x33dc9a(_0x593d4e) && !isInImageCaptchaRow(_0x593d4e)) {
          console.log("[接码平台] ✓ 找到短信验证码输入框");
          _0x10c619(_0x593d4e, _0x154780);
          return true;
        }
      }
      console.log("[接码平台] === 第二步：通过倒计时按钮查找 ===");
      const _0x3bfa36 = document.querySelectorAll("button, a, span, div");
      const _0x9a959a = Array.from(_0x3bfa36).filter(_0x4bd0e1 => !_0x4bd0e1.closest(".autofill-settings") && !_0x4bd0e1.closest(".sx-pane"));
      for (const _0x1e0873 of _0x9a959a) {
        const _0x4d6ceb = (_0x1e0873.textContent || "").trim();
        if (/^\d+s?\s*后?发送$|^\d+\s*秒$|^已发送$|^发送中$/.test(_0x4d6ceb)) {
          console.log("[接码平台] 找到倒计时按钮:", _0x4d6ceb);
          let _0x407319 = _0x1e0873.parentElement;
          for (let _0x4493ee = 0; _0x4493ee < 3 && _0x407319; _0x4493ee++) {
            const _0x3621d4 = (_0x407319.textContent || "").length;
            if (_0x3621d4 > 100) {
              _0x407319 = _0x407319.parentElement;
              continue;
            }
            const _0x491de7 = Array.from(_0x407319.querySelectorAll("input")).filter(_0xb9de67 => !_0xb9de67.closest(".autofill-settings"));
            for (const _0x36d941 of _0x491de7) {
              if (_0x36d941.type === "hidden") {
                continue;
              }
              if (_0x36d941.value && _0x36d941.value.length >= 4) {
                continue;
              }
              if (_0x152caf(_0x36d941)) {
                continue;
              }
              if (isInImageCaptchaRow(_0x36d941)) {
                console.log("[接码平台] 跳过图形验证码输入框");
                continue;
              }
              console.log("[接码平台] ✓ 通过倒计时按钮找到输入框");
              _0x10c619(_0x36d941, _0x154780);
              return true;
            }
            _0x407319 = _0x407319.parentElement;
          }
        }
      }
      console.log("[接码平台] === 第三步：通过获取按钮查找 ===");
      for (const _0x3eb964 of _0x9a959a) {
        const _0x31b8f8 = (_0x3eb964.textContent || "").trim();
        if (/^获取验证码$|^发送验证码$/.test(_0x31b8f8)) {
          console.log("[接码平台] 找到发送按钮:", _0x31b8f8);
          let _0x113253 = _0x3eb964.parentElement;
          for (let _0x90871d = 0; _0x90871d < 4 && _0x113253; _0x90871d++) {
            const _0x1e3a39 = Array.from(_0x113253.querySelectorAll("input[type=\"text\"], input[type=\"tel\"], input:not([type])")).filter(_0x57b720 => !_0x57b720.closest(".autofill-settings"));
            for (const _0x2f9eb9 of _0x1e3a39) {
              if (_0x2f9eb9.type === "hidden" || _0x2f9eb9.value && _0x2f9eb9.value.length >= 4) {
                continue;
              }
              if (_0x152caf(_0x2f9eb9)) {
                continue;
              }
              if (!isInImageCaptchaRow(_0x2f9eb9)) {
                console.log("[接码平台] ✓ 通过发送按钮找到输入框");
                _0x10c619(_0x2f9eb9, _0x154780);
                return true;
              }
            }
            _0x113253 = _0x113253.parentElement;
          }
        }
      }
      console.log("[接码平台] === 第四步：通过属性匹配 ===");
      for (const _0x576aec of _0x4df29c) {
        if (_0x576aec.type === "hidden") {
          continue;
        }
        if (_0x576aec.value && _0x576aec.value.length >= 4) {
          continue;
        }
        if (_0x152caf(_0x576aec)) {
          continue;
        }
        const _0x1915b2 = ((_0x576aec.id || "") + " " + (_0x576aec.name || "") + " " + (_0x576aec.placeholder || "")).toLowerCase();
        if (/(img|pic|captcha|kaptcha|graph|image|图形|图片)/.test(_0x1915b2)) {
          console.log("[接码平台] 排除(属性):", _0x1915b2);
          continue;
        }
        if (/(sms|msg|phone.*code|mobile.*code|smscode|msgcode|phonecode)/.test(_0x1915b2)) {
          {
            if (!isInImageCaptchaRow(_0x576aec)) {
              console.log("[接码平台] ✓ 通过属性找到输入框:", _0x1915b2);
              _0x10c619(_0x576aec, _0x154780);
              return true;
            }
          }
        }
      }
      console.log("[接码平台] ✗ 未找到短信验证码输入框");
      return false;
    },
    autoClickSendSmsButton() {
      const _0x280f17 = document.querySelectorAll("button, a, span, div, input[type=\"button\"]");
      for (const _0x5d4199 of _0x280f17) {
        const _0x2e8581 = (_0x5d4199.textContent || _0x5d4199.value || "").trim();
        if (/(发送验证码|获取验证码|发送短信|获取短信|点击获取|免费获取|发送动态码|获取动态码)/.test(_0x2e8581)) {
          {
            if (!_0x5d4199.disabled && !/\d+\s*[秒s]/i.test(_0x2e8581)) {
              console.log("[接码平台] 找到发送验证码按钮:", _0x2e8581);
              _0x5d4199.click();
              return true;
            } else {
              console.log("[接码平台] 发送按钮不可点击或正在倒计时:", _0x2e8581);
            }
          }
        }
      }
      console.log("[接码平台] 未找到发送验证码按钮");
      return false;
    }
  };
  (function () {
    const _0x435ecf = SXSMS.getMonitoringState();
    if (_0x435ecf && _0x435ecf.keepSmsPopup) {
      console.log("[接码平台] keepSmsPopup已开启，恢复监控状态");
      SXSMS.restoreMonitoring();
    } else {
      {
        SXSMS.clearMonitoringState();
      }
    }
  })();
  window.SXUI = {
    paneOriginal: null,
    paneOCR: null,
    paneQuick: null,
    ocrPaneVisible: true,
    fillPaneVisible: true,
    createPane(_0xe7510, _0x3689aa, _0x231d87, _0x417dc0, _0x4fcbc0) {
      const _0x137cbc = "sx_pane_pos_" + _0xe7510;
      const _0x552547 = "sx_pane_min_" + _0xe7510;
      const _0x2ed12e = StorageCache.get(_0x137cbc, null);
      const _0x41904e = StorageCache.get(_0x552547, false);
      const _0x1d6530 = document.createElement("div");
      _0x1d6530.className = "sx-pane";
      if (_0x41904e) {
        _0x1d6530.classList.add("minimized");
      }
      _0x1d6530.dataset.paneId = _0xe7510;
      _0x1d6530.style.zIndex = String(_0x4fcbc0);
      const _0x14deb3 = document.createElement("div");
      _0x14deb3.className = "sx-pane-head";
      const _0x1051e6 = _0xe7510 === "quick" ? "sx-pane-title sx-title-art" : "sx-pane-title";
      const _0xfcda9f = _0xe7510 === "quick" ? "<img src=\"" + chrome.runtime.getURL("icon16.png") + "\" class=\"sx-title-icon\" alt=\"\">" : "";
      const _0x48439c = _0xe7510 === "quick" ? "<span class=\"sx-pro-badge\">Pro</span>" : "";
      _0x14deb3.innerHTML = "<div class=\"sx-pane-head-left\">" + _0xfcda9f + "<span class=\"" + _0x1051e6 + "\">" + _0x3689aa + "</span>" + _0x48439c + "</div><div class=\"sx-pane-head-right\"><span style=\"opacity:.7;font-size:11px;line-height:1.1;text-align:center;display:inline-block;white-space:nowrap;\">拖拽<br>移动</span><button class=\"sx-pane-minimize-btn\" title=\"" + (_0x41904e ? "展开" : "最小化") + "\">" + (_0x41904e ? "▢" : "−") + "</button></div>";
      const _0x367b53 = document.createElement("div");
      _0x367b53.className = "sx-pane-body";
      _0x1d6530.append(_0x14deb3, _0x367b53);
      document.body.appendChild(_0x1d6530);
      const _0x16128d = {
        l: _0x231d87,
        t: _0x417dc0
      };
      const _0x54c48d = _0x2ed12e || _0x16128d;
      _0x1d6530.style.left = _0x54c48d.l + "px";
      _0x1d6530.style.top = _0x54c48d.t + "px";
      const _0x4d308e = _0x14deb3.querySelector(".sx-pane-minimize-btn");
      let _0x8968c3 = null;
      if (_0xe7510 === "original") {
        const _0x4a4272 = StorageCache.get("sx_kami_cache_v2", null);
        const _0x48af34 = _0x4a4272?.["float_ball_logo"] || chrome.runtime.getURL("icon48.png");
        _0x8968c3 = document.createElement("div");
        _0x8968c3.className = "sx-float-ball";
        _0x8968c3.dataset.paneId = _0xe7510;
        _0x8968c3.innerHTML = "<img src=\"" + _0x48af34 + "\" alt=\"展开\" draggable=\"false\">";
        _0x8968c3.title = "点击展开面板";
        _0x8968c3.style.display = _0x41904e ? "flex" : "none";
        _0x8968c3.style.zIndex = String(_0x4fcbc0);
        const _0xc5b34c = "sx_ball_pos_" + _0xe7510;
        const _0x523786 = {
          l: _0x54c48d.l,
          t: _0x54c48d.t
        };
        const _0x269b8d = StorageCache.get(_0xc5b34c, null) || _0x523786;
        _0x8968c3.style.left = _0x269b8d.l + "px";
        _0x8968c3.style.top = _0x269b8d.t + "px";
        document.body.appendChild(_0x8968c3);
        let _0xa22655 = false;
        let _0x4b5842 = false;
        _0x8968c3.addEventListener("mousedown", _0x1634ea => {
          {
            _0xa22655 = true;
            _0x4b5842 = false;
            const _0x8ed139 = _0x1634ea.clientX - _0x8968c3.offsetLeft;
            const _0xc2233b = _0x1634ea.clientY - _0x8968c3.offsetTop;
            const _0xceea25 = _0x38c4c0 => {
              if (!_0xa22655) {
                return;
              }
              const _0x3429fa = window.innerWidth - _0x8968c3.offsetWidth;
              const _0x477403 = window.innerHeight - _0x8968c3.offsetHeight;
              const _0x218c81 = Math.min(_0x3429fa, Math.max(0, _0x38c4c0.clientX - _0x8ed139));
              const _0x5d9166 = Math.min(_0x477403, Math.max(0, _0x38c4c0.clientY - _0xc2233b));
              (Math.abs(_0x218c81 - _0x8968c3.offsetLeft) > 3 || Math.abs(_0x5d9166 - _0x8968c3.offsetTop) > 3) && (_0x4b5842 = true);
              _0x8968c3.style.left = _0x218c81 + "px";
              _0x8968c3.style.top = _0x5d9166 + "px";
            };
            const _0x291655 = () => {
              {
                _0xa22655 = false;
                document.removeEventListener("mousemove", _0xceea25);
                const _0x51b43e = {
                  l: _0x8968c3.offsetLeft,
                  t: _0x8968c3.offsetTop
                };
                StorageCache.set(_0xc5b34c, _0x51b43e);
              }
            };
            document.addEventListener("mousemove", _0xceea25);
            const _0x2a18ae = {
              once: true
            };
            document.addEventListener("mouseup", _0x291655, _0x2a18ae);
            _0x1634ea.preventDefault();
            _0x1634ea.stopPropagation();
          }
        });
        _0x8968c3.addEventListener("click", _0x55bf95 => {
          if (_0x4b5842) {
            _0x4b5842 = false;
            return;
          }
          _0x1d6530.style.left = _0x8968c3.offsetLeft + "px";
          _0x1d6530.style.top = _0x8968c3.offsetTop + "px";
          _0x1d6530.classList.remove("minimized");
          _0x1d6530.style.display = "block";
          _0x8968c3.style.display = "none";
          _0x4d308e.textContent = "−";
          _0x4d308e.title = "最小化";
          StorageCache.set(_0x552547, false);
          const _0xbb763 = {
            l: _0x8968c3.offsetLeft,
            t: _0x8968c3.offsetTop
          };
          StorageCache.set(_0x137cbc, _0xbb763);
        });
        _0x4d308e.onclick = _0x486652 => {
          _0x486652.stopPropagation();
          _0x8968c3.style.left = _0x1d6530.offsetLeft + "px";
          _0x8968c3.style.top = _0x1d6530.offsetTop + "px";
          _0x1d6530.style.display = "none";
          _0x8968c3.style.display = "flex";
          StorageCache.set(_0x552547, true);
          const _0x55fca3 = {
            l: _0x1d6530.offsetLeft,
            t: _0x1d6530.offsetTop
          };
          StorageCache.set(_0xc5b34c, _0x55fca3);
        };
        _0x41904e && (_0x1d6530.style.display = "none");
      } else {
        _0x4d308e.onclick = _0xad811e => {
          _0xad811e.stopPropagation();
          const _0x2340f4 = _0x1d6530.classList.toggle("minimized");
          _0x4d308e.textContent = _0x2340f4 ? "▢" : "−";
          _0x4d308e.title = _0x2340f4 ? "展开" : "最小化";
          StorageCache.set(_0x552547, _0x2340f4);
        };
      }
      let _0x2829ad = false;
      let _0xa74046 = 0;
      let _0x321dc0 = 0;
      _0x14deb3.addEventListener("mousedown", _0x2266c7 => {
        if (_0x2266c7.target.closest(".sx-pane-minimize-btn")) {
          return;
        }
        _0x2829ad = true;
        _0xa74046 = _0x2266c7.clientX - _0x1d6530.offsetLeft;
        _0x321dc0 = _0x2266c7.clientY - _0x1d6530.offsetTop;
        const _0x1e59eb = _0x17d2d0 => {
          if (!_0x2829ad) {
            return;
          }
          const _0x9523dd = window.innerWidth - _0x1d6530.offsetWidth;
          const _0x271514 = window.innerHeight - _0x1d6530.offsetHeight;
          _0x1d6530.style.left = Math.min(_0x9523dd, Math.max(6, _0x17d2d0.clientX - _0xa74046)) + "px";
          _0x1d6530.style.top = Math.min(_0x271514, Math.max(6, _0x17d2d0.clientY - _0x321dc0)) + "px";
        };
        const _0x6fb53d = () => {
          {
            _0x2829ad = false;
            document.removeEventListener("mousemove", _0x1e59eb);
            const _0xe0dc48 = {
              l: _0x1d6530.offsetLeft,
              t: _0x1d6530.offsetTop
            };
            StorageCache.set(_0x137cbc, _0xe0dc48);
          }
        };
        document.addEventListener("mousemove", _0x1e59eb);
        const _0xdc8848 = {
          once: true
        };
        document.addEventListener("mouseup", _0x6fb53d, _0xdc8848);
      });
      const _0x5d1aa1 = {
        pane: _0x1d6530,
        head: _0x14deb3,
        body: _0x367b53,
        floatBall: _0x8968c3
      };
      return _0x5d1aa1;
    },
    createFillButtons(_0x34b2f7) {
      const _0xb7503c = SXFormFill.savedData.groups.filter(_0x1e6d2b => _0x1e6d2b.name && _0x1e6d2b.name.trim());
      const _0x3c13f2 = _0xb7503c.length >= 2;
      this.fillButtonLayout = StorageCache.get("sx_fill_layout", "single");
      if (_0x3c13f2) {
        const _0x4f5993 = document.createElement("div");
        _0x4f5993.className = "sx-layout-toggle-wrapper";
        const _0x53b81f = document.createElement("span");
        _0x53b81f.className = "label";
        _0x53b81f.textContent = "单列";
        const _0x637ecd = document.createElement("label");
        _0x637ecd.className = "cosmic-toggle";
        _0x637ecd.innerHTML = "\n          <input class=\"toggle\" type=\"checkbox\" " + (this.fillButtonLayout === "double" ? "checked" : "") + " />\n          <div class=\"slider\">\n            <div class=\"cosmos\"></div>\n            <div class=\"energy-line\"></div>\n            <div class=\"energy-line\"></div>\n            <div class=\"energy-line\"></div>\n            <div class=\"toggle-orb\">\n              <div class=\"inner-orb\"></div>\n              <div class=\"ring\"></div>\n            </div>\n          </div>\n        ";
        const _0xbf4fdb = _0x637ecd.querySelector(".toggle");
        _0xbf4fdb.onchange = () => {
          this.fillButtonLayout = _0xbf4fdb.checked ? "double" : "single";
          StorageCache.set("sx_fill_layout", this.fillButtonLayout);
          this.applyFillButtonLayout();
        };
        const _0x2068f2 = document.createElement("span");
        _0x2068f2.className = "label";
        _0x2068f2.textContent = "双列";
        _0x4f5993.append(_0x53b81f, _0x637ecd, _0x2068f2);
        _0x34b2f7.appendChild(_0x4f5993);
      }
      const _0x2705c6 = document.createElement("div");
      _0x2705c6.className = "autofill-buttons";
      _0x2705c6.style.position = "static";
      _0x2705c6.id = "sx-fill-buttons-container";
      _0x3c13f2 && this.fillButtonLayout === "double" && (_0x2705c6.style.cssText += "display:grid;grid-template-columns:1fr 1fr;gap:8px;");
      SXFormFill.savedData.groups.forEach((_0x352f9f, _0x1cbf7a) => {
        if (_0x352f9f.name && _0x352f9f.name.trim()) {
          const _0x3f92f5 = document.createElement("button");
          _0x3f92f5.className = "autofill-button";
          const _0x1ee628 = _0x352f9f.smsSid && _0x352f9f.smsSid.trim();
          const _0x16a08e = _0x352f9f.useOwnPhone && _0x352f9f.phone && _0x352f9f.phone.trim();
          const _0x168750 = _0x1ee628 || _0x16a08e;
          const _0x5e557b = _0x16a08e ? " 📲" : _0x1ee628 ? " 📱" : "";
          _0x3f92f5.textContent = (_0x352f9f.note || _0x352f9f.name || "填充第 " + (_0x1cbf7a + 1) + " 组") + _0x5e557b;
          _0x3f92f5.style.background = _0x16a08e ? "linear-gradient(to right, #10b981, #34d399)" : _0x1ee628 ? "linear-gradient(to right, #667eea, #764ba2)" : "linear-gradient(to right, #228B22, #66CDAA)";
          _0x3c13f2 && this.fillButtonLayout === "double" && (_0x3f92f5.style.width = "100%");
          _0x3f92f5.onclick = async () => {
            {
              const _0x3574d4 = (_0x352f9f.note || _0x352f9f.name || "填充第 " + (_0x1cbf7a + 1) + " 组") + _0x5e557b;
              if (_0x16a08e) {
                _0x3f92f5.disabled = true;
                _0x3f92f5.textContent = "📲 填充中...";
                SXFormFill.autoFillFormWithRetry(_0x1cbf7a, 3, 300);
                _0x3f92f5.textContent = "✓ 已填充!";
                setTimeout(() => {
                  const _0x18de3a = SXSMS.autoClickSendSmsButton();
                  _0x18de3a && console.log("[中转API] 已自动点击发送验证码按钮");
                }, 1000);
                SXSMS.startRelayMonitoring(_0x352f9f.phone, _0x1cbf7a);
                _0x3f92f5.disabled = false;
                setTimeout(() => _0x3f92f5.textContent = _0x3574d4, 3000);
              } else {
                if (_0x1ee628) {
                  _0x3f92f5.disabled = true;
                  const _0xcd069 = 30;
                  let _0x4af692 = 0;
                  let _0x35c0a7 = false;
                  while (!_0x35c0a7 && _0x4af692 < _0xcd069) {
                    _0x4af692++;
                    _0x3f92f5.textContent = "⏳ 获取中" + (_0x4af692 > 1 ? "(" + _0x4af692 + ")" : "") + "...";
                    try {
                      const _0x5553fd = await SXSMS.getPhone(_0x352f9f.smsSid);
                      if (_0x5553fd.phone) {
                        _0x35c0a7 = true;
                        console.log("[接码平台] 获取手机号成功:", _0x5553fd.phone);
                        SXFormFill.savedData.groups[_0x1cbf7a].phone = _0x5553fd.phone;
                        SXFormFill.autoFillFormWithRetry(_0x1cbf7a, 3, 300);
                        _0x3f92f5.textContent = "✓ 已填充!";
                        setTimeout(() => {
                          const _0x443fac = SXSMS.autoClickSendSmsButton();
                          _0x443fac && console.log("[接码平台] 已自动点击发送验证码按钮");
                        }, 1000);
                        SXSMS.startMonitoring(_0x352f9f.smsSid, _0x5553fd.phone, _0x1cbf7a);
                      } else {
                        console.log("[接码平台] 获取失败(" + _0x4af692 + "), 立即重试...");
                      }
                    } catch (_0x52dd65) {
                      console.log("[接码平台] 获取出错(" + _0x4af692 + "): " + _0x52dd65.message);
                    }
                  }
                  !_0x35c0a7 && (_0x3f92f5.textContent = "❌ 获取失败");
                  _0x3f92f5.disabled = false;
                  _0x35c0a7 ? setTimeout(() => _0x3f92f5.textContent = _0x3574d4, 3000) : setTimeout(() => _0x3f92f5.textContent = _0x3574d4, 5000);
                } else {
                  SXFormFill.autoFillFormWithRetry(_0x1cbf7a, 3, 300);
                  _0x3f92f5.textContent = "✓ 已填充!";
                  setTimeout(() => _0x3f92f5.textContent = _0x3574d4, 3000);
                }
              }
            }
          };
          _0x2705c6.appendChild(_0x3f92f5);
        }
      });
      const _0x288de4 = document.createElement("button");
      _0x288de4.className = "autofill-button";
      _0x288de4.textContent = "设置";
      _0x288de4.style.background = "linear-gradient(to right, #1E90FF, #00BFFF)";
      _0x3c13f2 && this.fillButtonLayout === "double" && (_0x288de4.style.width = "100%", _0x288de4.style.gridColumn = "1 / -1");
      _0x288de4.onclick = () => {
        const _0x4ea9c5 = document.querySelector(".autofill-settings");
        if (_0x4ea9c5) {
          _0x4ea9c5.style.display = "block";
        }
      };
      _0x2705c6.appendChild(_0x288de4);
      _0x34b2f7.appendChild(_0x2705c6);
      const _0x1abf48 = document.createElement("div");
      _0x1abf48.style.cssText = "display:flex;gap:8px;margin-top:1px;";
      const _0x4e8ce3 = document.createElement("button");
      _0x4e8ce3.className = "autofill-button";
      _0x4e8ce3.textContent = "定时填充";
      _0x4e8ce3.style.cssText = "background:linear-gradient(to right,#ef4444,#f97316);flex:1;margin:0;";
      _0x4e8ce3.onclick = () => {
        typeof SXTimedFill !== "undefined" && SXTimedFill.openTimedFillDialog ? SXTimedFill.openTimedFillDialog() : alert("定时填充模块未加载");
      };
      _0x1abf48.appendChild(_0x4e8ce3);
      const _0x239382 = document.createElement("button");
      _0x239382.className = "autofill-button";
      _0x239382.textContent = "一键多开";
      _0x239382.style.cssText = "background:linear-gradient(to right,#8b5cf6,#06b6d4);flex:1;margin:0;";
      _0x239382.onclick = () => this.openMultiWindowDialog();
      _0x1abf48.appendChild(_0x239382);
      _0x34b2f7.appendChild(_0x1abf48);
      const _0xb1b921 = document.createElement("div");
      _0xb1b921.style.cssText = "height:1px;background:rgba(0,0,0,0.3);margin:10px 0 8px 0;";
      _0x34b2f7.appendChild(_0xb1b921);
      this.createOCRControls(_0x34b2f7);
    },
    fillButtonLayout: "single",
    applyFillButtonLayout() {
      {
        const _0x194d36 = document.getElementById("sx-fill-buttons-container");
        if (!_0x194d36) {
          return;
        }
        const _0x42a30e = this.fillButtonLayout === "double";
        _0x42a30e ? (_0x194d36.style.display = "grid", _0x194d36.style.gridTemplateColumns = "1fr 1fr", _0x194d36.style.gap = "8px") : (_0x194d36.style.display = "flex", _0x194d36.style.flexDirection = "column", _0x194d36.style.gridTemplateColumns = "", _0x194d36.style.gap = "10px");
        const _0x51e66e = _0x194d36.querySelectorAll(".autofill-button");
        _0x51e66e.forEach((_0x55d372, _0x3a23da) => {
          {
            const _0x4d5d19 = _0x55d372.textContent === "设置";
            if (_0x42a30e) {
              _0x55d372.style.width = "100%";
              _0x4d5d19 && (_0x55d372.style.gridColumn = "1 / -1");
            } else {
              {
                _0x55d372.style.width = "";
                _0x55d372.style.gridColumn = "";
              }
            }
          }
        });
      }
    },
    ocrProvider: "jfbym",
    ocrMode: "auto",
    pickingImage: false,
    preferredInput: null,
    ocrStatus: null,
    autoRunning: false,
    autoRunInterval: null,
    lastCaptchaHash: null,
    createOCRControls(_0x9c5d6f) {
      this.ocrProvider = StorageCache.get("sx_ocr_provider", "jfbym");
      this.ocrMode = StorageCache.get("sx_ocr_mode", "auto");
      const _0x36af24 = document.createElement("div");
      _0x36af24.style.cssText = "display:flex;flex-direction:column;gap:6px;margin-bottom:4px;";
      const _0x4afadd = document.createElement("select");
      _0x4afadd.className = "sx-ocr-mode";
      _0x4afadd.innerHTML = "\n        <option value=\"auto\">OCR纠错：自动</option>\n        <option value=\"num\">OCR纠错：偏数字</option>\n        <option value=\"alpha\">OCR纠错：偏字母</option>\n      ";
      _0x4afadd.value = this.ocrMode;
      _0x4afadd.title = "选择 OCR 纠错倾向";
      _0x4afadd.style.cssText = "padding:6px 10px;border-radius:6px;font-size:12px;border:1px solid #ddd;background:#fff;cursor:pointer;width:100%;";
      _0x4afadd.onchange = () => {
        this.ocrMode = _0x4afadd.value;
        StorageCache.set("sx_ocr_mode", this.ocrMode);
        this.setOCRStatus("<span class=\"ok\">已切换纠错模式：" + this.ocrMode + "</span>");
        setTimeout(() => this.setOCRStatus(""), 3000);
      };
      const _0x7f23f4 = document.createElement("select");
      _0x7f23f4.className = "sx-ocr-provider";
      _0x7f23f4.innerHTML = "\n        <option value=\"jfbym\">OCR接口：上仙MY快速精准线路</option>\n        <option value=\"baidu\">OCR接口：上仙BD高精准线路</option>\n        <option value=\"ocr.space\">OCR接口：上仙SP普通国外线路①</option>\n        <option value=\"local\">OCR接口：上仙SP普通国外线路②</option>\n      ";
      _0x7f23f4.value = this.ocrProvider;
      _0x7f23f4.title = "选择 OCR 识别接口";
      _0x7f23f4.style.cssText = "padding:6px 10px;border-radius:6px;font-size:12px;border:1px solid #ddd;background:#fff;cursor:pointer;width:100%;";
      _0x7f23f4.onchange = () => {
        this.autoRunning && this.stopAutoRun();
        this.ocrProvider = _0x7f23f4.value;
        StorageCache.set("sx_ocr_provider", this.ocrProvider);
        const _0x20d603 = {
          jfbym: "上仙MY快速精准线路",
          baidu: "上仙BD高精准线路",
          local: "上仙SP普通国外线路②",
          "ocr.space": "上仙SP普通国外线路①"
        };
        this.setOCRStatus("<span class=\"ok\">已切换OCR接口：" + _0x20d603[this.ocrProvider] + "</span>");
        setTimeout(() => this.setOCRStatus(""), 3000);
        this.updateAutoButtonsState();
      };
      _0x36af24.append(_0x4afadd, _0x7f23f4);
      const _0x4c49d2 = document.createElement("div");
      _0x4c49d2.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;justify-content:center;";
      const _0xb26cd1 = document.createElement("button");
      _0xb26cd1.className = "autofill-button sx-ocr-choose-input";
      _0xb26cd1.textContent = "选择验证码框";
      _0xb26cd1.title = "点击后再点页面上的验证码输入框";
      _0xb26cd1.style.cssText = "background:linear-gradient(to right,#f59e0b,#fbbf24);font-size:13px;padding:8px 16px;";
      _0xb26cd1.onclick = () => this.startInputPicking();
      const _0x5d61dc = document.createElement("button");
      _0x5d61dc.className = "autofill-button sx-ocr-autorun";
      _0x5d61dc.textContent = "自动识别：关";
      _0x5d61dc.title = "开启后自动监测并识别验证码（部分接口可能不支持）";
      _0x5d61dc.style.cssText = "background:linear-gradient(to right,#6b7280,#9ca3af);font-size:13px;padding:8px 16px;";
      _0x5d61dc.onclick = () => this.toggleAutoRun(_0x5d61dc);
      this.autoRunBtn = _0x5d61dc;
      _0x4c49d2.append(_0xb26cd1, _0x5d61dc);
      const _0x1424e5 = document.createElement("div");
      _0x1424e5.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;justify-content:center;";
      const _0x19aa4f = document.createElement("button");
      _0x19aa4f.className = "autofill-button sx-ocr-btn";
      _0x19aa4f.textContent = "OCR识别";
      _0x19aa4f.style.cssText = "background:linear-gradient(to right,#3b82f6,#60a5fa);font-size:13px;padding:8px 16px;";
      _0x19aa4f.onclick = () => this.startImagePicking();
      const _0x5c668e = document.createElement("button");
      _0x5c668e.className = "autofill-button sx-ocr-file-btn";
      _0x5c668e.textContent = "截图识别";
      _0x5c668e.style.cssText = "background:linear-gradient(to right,#10b981,#34d399);font-size:13px;padding:8px 16px;";
      _0x5c668e.onclick = () => this.startRegionSelection();
      const _0x528a0e = document.createElement("button");
      _0x528a0e.className = "autofill-button sx-ocr-auto-btn";
      _0x528a0e.textContent = "一键识别";
      _0x528a0e.title = "自动查找验证码并识别，填入后点击获取验证码按钮";
      _0x528a0e.style.cssText = "background:linear-gradient(to right,#8b5cf6,#a78bfa);font-size:13px;padding:8px 16px;";
      _0x528a0e.onclick = () => this.autoOCR();
      this.autoOcrBtn = _0x528a0e;
      this.updateAutoButtonsState();
      _0x1424e5.append(_0x19aa4f, _0x5c668e, _0x528a0e);
      const _0x5b5ead = StorageCache.get("sx_ocr_autorun", false);
      _0x5b5ead && this.ocrProvider !== "baidu" && setTimeout(() => {
        this.startAutoRun(_0x5d61dc);
      }, 1000);
      const _0x3d3ba8 = document.createElement("div");
      _0x3d3ba8.className = "sx-ocr-status";
      _0x3d3ba8.style.cssText = "margin-top:10px;padding:8px 12px;background:#111827;color:#e5e7eb;border-radius:8px;font-size:12px;box-shadow:0 2px 10px rgba(0,0,0,.3);display:none;word-wrap:break-word;overflow-wrap:break-word;max-width:100%;box-sizing:border-box;";
      _0x3d3ba8.innerHTML = "<span class=\"warn\">等待操作…</span>";
      this.ocrStatus = _0x3d3ba8;
      _0x9c5d6f.append(_0x36af24, _0x4c49d2, _0x1424e5, _0x3d3ba8);
    },
    setOCRStatus(_0xf850f2, _0x56be0e = true) {
      {
        this.ocrStatus && (_0xf850f2 ? (this.ocrStatus.innerHTML = _0xf850f2, this.ocrStatus.style.display = _0x56be0e ? "block" : "none") : this.ocrStatus.style.display = "none");
      }
    },
    updateAutoButtonsState() {
      const _0x49ccba = StorageCache.get("sx_kami_cache_v2", null);
      const _0x3711f6 = {
        jfbym: "1",
        baidu: "0",
        ocrspace: "1",
        local: "1"
      };
      const _0xb942af = _0x49ccba?.["ocr_auto"] || _0x3711f6;
      const _0x53b64c = this.ocrProvider;
      const _0x172ce1 = _0xb942af[_0x53b64c] !== "1";
      this.autoRunBtn && (this.autoRunBtn.style.opacity = _0x172ce1 ? "0.5" : "1", this.autoRunBtn.style.cursor = _0x172ce1 ? "not-allowed" : "pointer", _0x172ce1 && this.autoRunning && (this.stopAutoRun(), StorageCache.set("sx_ocr_autorun", false)));
    },
    toggleAutoRun(_0x722cba) {
      const _0x4e19c3 = StorageCache.get("sx_kami_cache_v2", null);
      const _0x47aef6 = {
        jfbym: "1",
        baidu: "0",
        ocrspace: "1",
        local: "1"
      };
      const _0x21d865 = _0x4e19c3?.["ocr_auto"] || _0x47aef6;
      const _0xf0c90d = {
        jfbym: "jfbym",
        baidu: "baidu",
        ocrspace: "ocrspace",
        local: "local"
      };
      const _0x13c2f6 = _0xf0c90d[this.ocrProvider] || this.ocrProvider;
      if (_0x21d865[_0x13c2f6] !== "1") {
        const _0x30a79c = {
          jfbym: "云码",
          baidu: "百度OCR",
          ocrspace: "OCR.Space",
          local: "本地Tesseract"
        };
        const _0xc1749c = _0x30a79c[this.ocrProvider] || this.ocrProvider;
        this.setOCRStatus("<span class=\"warn\">" + _0xc1749c + "接口不支持自动识别，请切换其他接口</span>");
        return;
      }
      if (this.autoRunning) {
        this.stopAutoRun();
      } else {
        this.startAutoRun(_0x722cba);
      }
    },
    startAutoRun(_0x59463a) {
      this.autoRunning = true;
      this.lastCaptchaHash = null;
      _0x59463a.textContent = "自动识别：开";
      _0x59463a.style.background = "linear-gradient(to right,#ef4444,#f97316)";
      this.setOCRStatus("<span class=\"ok\">自动识别已开启，监测验证码变化中...</span>");
      StorageCache.set("sx_ocr_autorun", true);
      this.autoRunInterval = setInterval(async () => {
        {
          if (!this.autoRunning) {
            return;
          }
          const _0x10dcfa = this.findCaptchaImage();
          if (!_0x10dcfa) {
            return;
          }
          const _0x340e84 = await this.getCaptchaHash(_0x10dcfa);
          if (!_0x340e84) {
            return;
          }
          if (_0x340e84 === this.lastCaptchaHash) {
            return;
          }
          this.lastCaptchaHash = _0x340e84;
          this.setOCRStatus("<span class=\"warn\">检测到验证码变化，正在识别...</span>");
          await this.autoOCRSilent();
        }
      }, 2000);
    },
    async getCaptchaHash(_0x2a1c91) {
      try {
        let _0x4939f1;
        if (_0x2a1c91 instanceof HTMLCanvasElement) {
          _0x4939f1 = _0x2a1c91;
        } else {
          if (_0x2a1c91 instanceof HTMLImageElement) {
            {
              _0x4939f1 = document.createElement("canvas");
              _0x4939f1.width = _0x2a1c91.naturalWidth || _0x2a1c91.width || 100;
              _0x4939f1.height = _0x2a1c91.naturalHeight || _0x2a1c91.height || 40;
              try {
                _0x4939f1.getContext("2d").drawImage(_0x2a1c91, 0, 0);
                _0x4939f1.toDataURL();
              } catch (_0x5f0197) {
                {
                  return _0x2a1c91.src + "_" + Date.now();
                }
              }
            }
          } else {
            return null;
          }
        }
        const _0x4b221c = _0x4939f1.getContext("2d");
        const _0x49077a = _0x4b221c.getImageData(0, 0, Math.min(_0x4939f1.width, 50), Math.min(_0x4939f1.height, 20)).data;
        let _0x5887e5 = 0;
        for (let _0x307fa5 = 0; _0x307fa5 < _0x49077a.length; _0x307fa5 += 40) {
          _0x5887e5 = (_0x5887e5 << 5) - _0x5887e5 + _0x49077a[_0x307fa5];
          _0x5887e5 |= 0;
        }
        return String(_0x5887e5);
      } catch (_0x5cc97f) {
        return null;
      }
    },
    stopAutoRun() {
      this.autoRunning = false;
      this.autoRunInterval && (clearInterval(this.autoRunInterval), this.autoRunInterval = null);
      this.autoRunBtn && (this.autoRunBtn.textContent = "自动识别：关", this.autoRunBtn.style.background = "linear-gradient(to right,#6b7280,#9ca3af)");
      this.setOCRStatus("<span class=\"warn\">自动识别已关闭</span>");
      setTimeout(() => this.setOCRStatus(""), 2000);
      StorageCache.set("sx_ocr_autorun", false);
    },
    startInputPicking() {
      this.setOCRStatus("<span class=\"warn\">请点击一个验证码输入框…</span>");
      const _0xd8b775 = document.querySelectorAll("input[type=\"text\"], input:not([type])");
      _0xd8b775.forEach(_0xebf549 => {
        _0xebf549.classList.add("sx-ocr-highlight-input");
      });
      const _0x5adcb7 = () => {
        _0xd8b775.forEach(_0x11dfa2 => {
          _0x11dfa2.classList.remove("sx-ocr-highlight-input");
        });
        document.removeEventListener("click", _0x40c9c9, true);
        document.removeEventListener("keydown", _0x48ee37, true);
      };
      const _0x40c9c9 = _0x546d2a => {
        const _0x5c6daf = _0x546d2a.target;
        _0x5c6daf instanceof HTMLInputElement && (_0x546d2a.preventDefault(), _0x546d2a.stopPropagation(), _0x5adcb7(), this.preferredInput = _0x5c6daf, _0x5c6daf.classList.add("sx-ocr-highlight-input"), this.setOCRStatus("<span class=\"ok\">✓ 已选定验证码输入框，OCR结果将填入此框</span>"), setTimeout(() => this.setOCRStatus("", false), 3000));
      };
      const _0x48ee37 = _0x2adfb9 => {
        _0x2adfb9.key === "Escape" && (_0x5adcb7(), this.setOCRStatus("<span class=\"warn\">已取消选择</span>"), setTimeout(() => this.setOCRStatus("", false), 2000));
      };
      document.addEventListener("click", _0x40c9c9, true);
      document.addEventListener("keydown", _0x48ee37, true);
    },
    startRegionSelection() {
      this.setOCRStatus("<span class=\"warn\">请框选要识别的区域，ESC取消</span>");
      const _0x488a27 = document.createElement("div");
      _0x488a27.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.3);cursor:crosshair;z-index:2147483647;";
      document.body.appendChild(_0x488a27);
      const _0x1d2f84 = document.createElement("div");
      _0x1d2f84.style.cssText = "position:absolute;border:2px dashed #3b82f6;background:rgba(59,130,246,0.1);display:none;";
      _0x488a27.appendChild(_0x1d2f84);
      let _0x1e8f74 = 0;
      let _0x414bec = 0;
      let _0x5da19b = false;
      const _0x59a4f7 = () => {
        _0x488a27.remove();
        document.removeEventListener("keydown", _0x138e1e, true);
      };
      _0x488a27.onmousedown = _0x4489fc => {
        _0x1e8f74 = _0x4489fc.clientX;
        _0x414bec = _0x4489fc.clientY;
        _0x5da19b = true;
        _0x1d2f84.style.left = _0x1e8f74 + "px";
        _0x1d2f84.style.top = _0x414bec + "px";
        _0x1d2f84.style.width = "0";
        _0x1d2f84.style.height = "0";
        _0x1d2f84.style.display = "block";
      };
      _0x488a27.onmousemove = _0x50701c => {
        if (!_0x5da19b) {
          return;
        }
        const _0x146619 = _0x50701c.clientX - _0x1e8f74;
        const _0x98aed4 = _0x50701c.clientY - _0x414bec;
        _0x1d2f84.style.left = (_0x146619 >= 0 ? _0x1e8f74 : _0x50701c.clientX) + "px";
        _0x1d2f84.style.top = (_0x98aed4 >= 0 ? _0x414bec : _0x50701c.clientY) + "px";
        _0x1d2f84.style.width = Math.abs(_0x146619) + "px";
        _0x1d2f84.style.height = Math.abs(_0x98aed4) + "px";
      };
      _0x488a27.onmouseup = _0x506169 => {
        if (!_0x5da19b) {
          return;
        }
        _0x5da19b = false;
        const _0x3996b6 = {
          left: Math.min(_0x1e8f74, _0x506169.clientX) + window.scrollX,
          top: Math.min(_0x414bec, _0x506169.clientY) + window.scrollY,
          width: Math.abs(_0x506169.clientX - _0x1e8f74),
          height: Math.abs(_0x506169.clientY - _0x414bec)
        };
        _0x59a4f7();
        if (_0x3996b6.width < 10 || _0x3996b6.height < 10) {
          this.setOCRStatus("<span class=\"warn\">选区太小，已取消</span>");
          setTimeout(() => this.setOCRStatus(""), 3000);
          return;
        }
        this.setOCRStatus("<span class=\"warn\">正在截取并识别选区...</span>");
        this.captureAndOCR(_0x3996b6);
      };
      const _0x138e1e = _0x77d123 => {
        _0x77d123.key === "Escape" && (_0x59a4f7(), this.setOCRStatus("<span class=\"warn\">已取消截图</span>"), setTimeout(() => this.setOCRStatus(""), 2000));
      };
      document.addEventListener("keydown", _0x138e1e, true);
    },
    async captureAndOCR(_0x57a9f8) {
      try {
        {
          this.setOCRStatus("<span class=\"warn\">正在截取选区...</span>");
          const _0x39c5b9 = await new Promise((_0x21e901, _0x3235c7) => {
            const _0x599e64 = {
              action: "captureVisibleTab"
            };
            chrome.runtime.sendMessage(_0x599e64, _0x21890a => {
              if (_0x21890a && _0x21890a.success) {
                {
                  _0x21e901(_0x21890a.dataUrl);
                }
              } else {
                _0x3235c7(new Error(_0x21890a?.["error"] || "截图失败"));
              }
            });
          });
          const _0x544b1b = new Image();
          await new Promise((_0x2ede5f, _0x58bfde) => {
            _0x544b1b.onload = _0x2ede5f;
            _0x544b1b.onerror = () => _0x58bfde(new Error("图片加载失败"));
            _0x544b1b.src = _0x39c5b9;
          });
          const _0x370190 = window.devicePixelRatio || 1;
          const _0x29a7ec = document.createElement("canvas");
          _0x29a7ec.width = _0x57a9f8.width * _0x370190;
          _0x29a7ec.height = _0x57a9f8.height * _0x370190;
          const _0x34bfc9 = _0x29a7ec.getContext("2d");
          _0x34bfc9.drawImage(_0x544b1b, (_0x57a9f8.left - window.scrollX) * _0x370190, (_0x57a9f8.top - window.scrollY) * _0x370190, _0x57a9f8.width * _0x370190, _0x57a9f8.height * _0x370190, 0, 0, _0x57a9f8.width * _0x370190, _0x57a9f8.height * _0x370190);
          this.setOCRStatus("<span class=\"warn\">区域截取完成，开始识别...</span>");
          await this.runOCR(_0x29a7ec);
        }
      } catch (_0xdd4605) {
        {
          const _0x3c1f20 = _0xdd4605 instanceof Error ? _0xdd4605.message : String(_0xdd4605);
          this.setOCRStatus("<span class=\"err\">区域截图失败：" + _0x3c1f20 + "</span>");
        }
      }
    },
    async checkOCRLimit(_0x3fc9f0) {
      const _0x5198bb = StorageCache.get("sx_kami_key", "");
      if (!_0x5198bb) {
        {
          throw new Error("卡密未初始化，请先激活授权");
        }
      }
      return new Promise((_0x40292b, _0x38e70d) => {
        chrome.runtime.sendMessage({
          action: "checkOCRLimit",
          data: {
            app: "sx_jnb_ocr",
            key: _0x5198bb,
            provider: _0x3fc9f0 || "baidu"
          }
        }, _0x3bcdec => {
          _0x3bcdec && _0x3bcdec.success && _0x3bcdec.data && _0x3bcdec.data.ok ? _0x40292b(_0x3bcdec.data) : _0x38e70d(new Error(_0x3bcdec?.["data"]?.["msg"] || _0x3bcdec?.["error"] || "OCR次数验证失败"));
        });
      });
    },
    async runOCR(_0x515c9f) {
      try {
        this.setOCRStatus("<span class=\"warn\">检查OCR限额...</span>");
        try {
          const _0x2a0e17 = await this.checkOCRLimit(this.ocrProvider);
          if (_0x2a0e17.skip_check) {
            console.log("[OCR] 该接口不受限制:", this.ocrProvider);
          } else {
            if (_0x2a0e17.card_remaining !== undefined) {
              const _0x595d11 = _0x2a0e17.card_remaining;
              _0x595d11 >= 0 && (console.log("[OCR] 剩余次数:", _0x595d11), this.setOCRStatus("<span class=\"ok\">OCR剩余" + _0x595d11 + "次</span>"));
            }
          }
        } catch (_0x2e1a91) {
          const _0x3887ba = _0x2e1a91.message || "本接口今日已限额，请切换接口使用！";
          this.setOCRStatus("<span class=\"err\">" + _0x3887ba + "</span>");
          return false;
        }
        let _0x5e1efb = _0x515c9f;
        if (!(_0x5e1efb instanceof HTMLCanvasElement)) {
          if (_0x5e1efb instanceof HTMLImageElement) {
            const _0x42c3e7 = document.createElement("canvas");
            _0x42c3e7.width = _0x5e1efb.naturalWidth || _0x5e1efb.width;
            _0x42c3e7.height = _0x5e1efb.naturalHeight || _0x5e1efb.height;
            _0x42c3e7.getContext("2d").drawImage(_0x5e1efb, 0, 0);
            _0x5e1efb = _0x42c3e7;
          } else {
            throw new Error("不支持的元素类型");
          }
        }
        const _0x202e4f = _0x5e1efb.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
        this.setOCRStatus("<span class=\"warn\">识别中（" + this.ocrProvider + "）...</span>");
        let _0xeb12e9 = null;
        if (this.ocrProvider === "jfbym") {
          _0xeb12e9 = await this.doJfbymOCR(_0x202e4f);
        } else {
          if (this.ocrProvider === "baidu") {
            _0xeb12e9 = await this.doBaiduOCR(_0x202e4f);
          } else {
            if (this.ocrProvider === "ocr.space") {
              _0xeb12e9 = await this.doCloudOCR(_0x202e4f);
            } else {
              if (this.ocrProvider === "local") {
                _0xeb12e9 = await this.doLocalTesseractOCR(_0x5e1efb);
              } else {
                this.setOCRStatus("<span class=\"warn\">未知OCR接口</span>");
                return false;
              }
            }
          }
        }
        if (_0xeb12e9 && _0xeb12e9.trim()) {
          const _0x3b68b8 = this.smartFix(_0xeb12e9, this.ocrMode);
          this.fillOCRResult(_0x3b68b8);
          return true;
        } else {
          this.setOCRStatus("<span class=\"err\">识别失败，未识别到有效字符</span>");
          return false;
        }
      } catch (_0xfc70d7) {
        this.setOCRStatus("<span class=\"err\">OCR异常：" + (_0xfc70d7.message || _0xfc70d7) + "</span>");
        return false;
      }
    },
    async doBaiduOCR(_0x1da2b3) {
      const _0x5a4199 = StorageCache.get("sx_kami_cache_v2", null);
      const _0x4ed81c = _0x5a4199 && _0x5a4199.ocr_keys || {};
      const _0x187146 = _0x4ed81c.baidu_api || "";
      const _0x1abbfa = _0x4ed81c.baidu_secret || "";
      if (!_0x187146 || !_0x1abbfa) {
        throw new Error("百度OCR密钥未配置，请刷新页面重新授权");
      }
      const _0x322e01 = await new Promise((_0x24a727, _0x3d63f5) => {
        {
          const _0x58615b = {
            action: "baiduGetToken",
            apiKey: _0x187146,
            secretKey: _0x1abbfa
          };
          chrome.runtime.sendMessage(_0x58615b, _0x46c1c3 => {
            {
              if (_0x46c1c3 && _0x46c1c3.success && _0x46c1c3.data.access_token) {
                _0x24a727(_0x46c1c3.data.access_token);
              } else {
                _0x3d63f5(new Error(_0x46c1c3?.["data"]?.["error_description"] || "获取Token失败"));
              }
            }
          });
        }
      });
      const _0x1b19d2 = await new Promise((_0xf9a4c0, _0x3fc13b) => {
        const _0x58c0fd = {
          action: "baiduOCR",
          token: _0x322e01,
          imageBase64: _0x1da2b3
        };
        chrome.runtime.sendMessage(_0x58c0fd, _0x57627f => {
          if (_0x57627f && _0x57627f.success) {
            _0xf9a4c0(_0x57627f.data);
          } else {
            _0x3fc13b(new Error("OCR请求失败"));
          }
        });
      });
      if (_0x1b19d2.words_result && _0x1b19d2.words_result.length > 0) {
        return _0x1b19d2.words_result.map(_0x4fce98 => _0x4fce98.words).join("");
      }
      return "";
    },
    async doCloudOCR(_0x2e89ff) {
      const _0x578b1e = StorageCache.get("sx_kami_cache_v2", null);
      const _0x36c73e = _0x578b1e && _0x578b1e.ocr_keys || {};
      const _0x174d50 = _0x36c73e.ocr_space || "";
      if (!_0x174d50) {
        throw new Error("OCR.Space密钥未配置，请刷新页面重新授权");
      }
      const _0x53822a = await new Promise((_0x3369b1, _0x3664fc) => {
        const _0x42cfd6 = {
          action: "cloudOCR",
          apiKey: _0x174d50,
          imageBase64: _0x2e89ff
        };
        chrome.runtime.sendMessage(_0x42cfd6, _0x3e6ae8 => {
          if (_0x3e6ae8 && _0x3e6ae8.success) {
            _0x3369b1(_0x3e6ae8.data);
          } else {
            _0x3664fc(new Error("OCR请求失败"));
          }
        });
      });
      if (_0x53822a.ParsedResults && _0x53822a.ParsedResults.length > 0) {
        return _0x53822a.ParsedResults[0].ParsedText || "";
      }
      return "";
    },
    async doJfbymOCR(_0x4a62fe) {
      const _0x12e459 = StorageCache.get("sx_kami_cache_v2", null);
      const _0x427097 = _0x12e459 && _0x12e459.ocr_keys || {};
      const _0x57026a = _0x427097.jfbym_token || "";
      if (!_0x57026a) {
        throw new Error("上仙快速精准OCR Token未配置，请刷新页面重新授权");
      }
      const _0x1221f8 = await new Promise((_0x4402cd, _0x4f4ded) => {
        const _0x2431d7 = {
          action: "jfbymOCR",
          token: _0x57026a,
          imageBase64: _0x4a62fe
        };
        chrome.runtime.sendMessage(_0x2431d7, _0x36967e => {
          if (_0x36967e && _0x36967e.success && _0x36967e.data) {
            _0x4402cd(_0x36967e.data);
          } else {
            _0x4f4ded(new Error(_0x36967e?.["error"] || "OCR请求失败"));
          }
        });
      });
      if (_0x1221f8.success && _0x1221f8.text) {
        return _0x1221f8.text;
      }
      return "";
    },
    async doLocalTesseractOCR(_0x302b76) {
      this.setOCRStatus("<span class=\"warn\">本地OCR识别中...</span>");
      const _0xa8bacb = _0x302b76.toDataURL("image/png").replace(/^data:image\/png;base64,/, "");
      return new Promise((_0x364dfa, _0x2a5209) => {
        const _0x1f5887 = {
          action: "localTesseractOCR",
          imageBase64: _0xa8bacb
        };
        chrome.runtime.sendMessage(_0x1f5887, _0x5ce656 => {
          if (_0x5ce656 && _0x5ce656.success && _0x5ce656.data) {
            {
              _0x364dfa(_0x5ce656.data.text || "");
            }
          } else {
            _0x2a5209(new Error(_0x5ce656?.["error"] || "本地OCR识别失败"));
          }
        });
      });
    },
    smartFix(_0x2c80f9, _0x86b24) {
      let _0x531f6d = _0x2c80f9.replace(/\s+/g, "").trim();
      if (_0x86b24 === "num") {
        _0x531f6d = _0x531f6d.replace(/[Oo]/g, "0").replace(/[IilL]/g, "1").replace(/[Ss]/g, "5").replace(/[Bb]/g, "8");
      } else {
        _0x86b24 === "alpha" && (_0x531f6d = _0x531f6d.replace(/0/g, "O").replace(/1/g, "l").replace(/5/g, "S").replace(/8/g, "B"));
      }
      return _0x531f6d;
    },
    fillOCRResult(_0x40c6e7) {
      let _0x8a2488 = false;
      this.preferredInput && this.isUsableInput(this.preferredInput) && (this.fillInput(this.preferredInput, _0x40c6e7), _0x8a2488 = true);
      if (!_0x8a2488) {
        {
          _0x8a2488 = this.tryFillNearbyInput(_0x40c6e7);
        }
      }
      if (_0x8a2488) {
        {
          try {
            navigator.clipboard.writeText(_0x40c6e7);
          } catch (_0xdcfac4) {}
          this.setOCRStatus("<span class=\"ok\">✓ 已填入：" + _0x40c6e7 + "（已复制到剪贴板）</span>");
        }
      } else {
        {
          try {
            navigator.clipboard.writeText(_0x40c6e7);
          } catch (_0x55e6db) {}
          this.setOCRStatus("<span class=\"warn\">识别：" + _0x40c6e7 + "（未找到输入框，已复制）</span>");
        }
      }
    },
    isUsableInput(_0x10b56c) {
      return _0x10b56c && _0x10b56c.offsetParent !== null && !_0x10b56c.disabled && !_0x10b56c.readOnly;
    },
    fillInput(_0x541ac1, _0x12abfc) {
      _0x541ac1.value = _0x12abfc;
      const _0x55c3b1 = {
        bubbles: true
      };
      _0x541ac1.dispatchEvent(new Event("input", _0x55c3b1));
      const _0x1c30d6 = {
        bubbles: true
      };
      _0x541ac1.dispatchEvent(new Event("change", _0x1c30d6));
    },
    tryFillNearbyInput(_0x1a04d2) {
      console.log("[OCR] 开始查找图形验证码输入框...");
      const _0x3e3cb8 = ["#ccode", "#captcha", "#vcode", "#verifycode", "#imgcode", "#checkcode"];
      for (const _0x24f476 of _0x3e3cb8) {
        try {
          const _0x11b9d8 = document.querySelector(_0x24f476);
          if (_0x11b9d8 && this.isUsableInput(_0x11b9d8)) {
            const _0x1a2746 = _0x11b9d8.id ? document.querySelector("label[for=\"" + _0x11b9d8.id + "\"]") : null;
            const _0x523e5d = _0x1a2746 ? _0x1a2746.textContent : "";
            if (/验证码|captcha|code/i.test(_0x523e5d)) {
              console.log("[OCR] ✓ 快速路径找到验证码输入框:", _0x24f476, "覆盖旧值:", _0x11b9d8.value || "无");
              this.fillInput(_0x11b9d8, _0x1a04d2);
              return true;
            }
          }
        } catch (_0x11c5d6) {}
      }
      const _0xfaf33f = document.querySelectorAll("input[type=\"text\"], input:not([type]), input[type=\"tel\"], input[type=\"number\"]");
      for (const _0x1823f0 of _0xfaf33f) {
        if (!this.isUsableInput(_0x1823f0)) {
          continue;
        }
        const _0xb7af0b = ((_0x1823f0.id || "") + " " + (_0x1823f0.name || "") + " " + (_0x1823f0.placeholder || "")).toLowerCase();
        if (/姓名|username|证件|idcard|手机|phone|mobile|邮箱|email|地址|address|银行卡|账号|兑换人/.test(_0xb7af0b)) {
          continue;
        }
        const _0x307391 = _0x1823f0.id ? document.querySelector("label[for=\"" + _0x1823f0.id + "\"]") : null;
        const _0x1dc283 = _0x307391 ? _0x307391.textContent : "";
        if (/兑换人姓名|^姓名|证件|手机号/.test(_0x1dc283) && !/验证码/.test(_0x1dc283)) {
          {
            continue;
          }
        }
        let _0x5813e0 = _0x1823f0.parentElement;
        let _0x2fd3d0 = 0;
        while (_0x5813e0 && _0x2fd3d0 < 5) {
          const _0x313c28 = (_0x5813e0.textContent || "").replace(/\s+/g, "");
          if (_0x313c28.length > 200) {
            _0x5813e0 = _0x5813e0.parentElement;
            _0x2fd3d0++;
            continue;
          }
          const isImageCaptchaRow = /图形验证码|图片验证码|验证码图片|附加码/.test(_0x313c28);
          const _0x411508 = /短信验证码|手机验证码|获取验证码|发送验证码|动态验证码/.test(_0x313c28);
          const hasImage = _0x5813e0.querySelector("img, canvas");
          if (isImageCaptchaRow && !_0x411508) {
            {
              console.log("[OCR] ✓ 找到图形验证码输入框（通过标签匹配）");
              this.fillInput(_0x1823f0, _0x1a04d2);
              return true;
            }
          }
          if (hasImage && !_0x411508 && _0x313c28.includes("验证码")) {
            console.log("[OCR] ✓ 找到图形验证码输入框（通过图片匹配）");
            this.fillInput(_0x1823f0, _0x1a04d2);
            return true;
          }
          _0x5813e0 = _0x5813e0.parentElement;
          _0x2fd3d0++;
        }
      }
      const _0x421f42 = this.findCaptchaImage();
      if (_0x421f42) {
        console.log("[OCR] 找到验证码图片，查找附近输入框...");
        let _0xed6328 = _0x421f42.parentElement;
        let _0x58c271 = 0;
        while (_0xed6328 && _0x58c271 < 5) {
          const _0x269bb4 = _0xed6328.querySelector("input[type=\"text\"], input:not([type])");
          if (_0x269bb4 && this.isUsableInput(_0x269bb4)) {
            console.log("[OCR] ✓ 找到验证码图片附近的输入框，覆盖旧值:", _0x269bb4.value || "无");
            this.fillInput(_0x269bb4, _0x1a04d2);
            return true;
          }
          _0xed6328 = _0xed6328.parentElement;
          _0x58c271++;
        }
        let _0x5d8b3d = _0x421f42.previousElementSibling;
        while (_0x5d8b3d) {
          if (_0x5d8b3d.tagName === "INPUT" && this.isUsableInput(_0x5d8b3d)) {
            this.fillInput(_0x5d8b3d, _0x1a04d2);
            return true;
          }
          const _0x5c0a62 = _0x5d8b3d.querySelector && _0x5d8b3d.querySelector("input");
          if (_0x5c0a62 && this.isUsableInput(_0x5c0a62)) {
            this.fillInput(_0x5c0a62, _0x1a04d2);
            return true;
          }
          _0x5d8b3d = _0x5d8b3d.previousElementSibling;
        }
      }
      const _0x3696e1 = ["input[name*=\"imgCode\"]", "input[id*=\"imgCode\"]", "input[name*=\"imageCode\"]", "input[id*=\"imageCode\"]", "input[name*=\"picCode\"]", "input[id*=\"picCode\"]", "input[name*=\"imgValiCode\"]", "input[id*=\"imgValiCode\"]", "input[name*=\"picValiCode\"]", "input[id*=\"picValiCode\"]", "input[name*=\"graphCode\"]", "input[id*=\"graphCode\"]", "input[name*=\"randCode\"]", "input[id*=\"randCode\"]", "input[name*=\"captcha\"]:not([name*=\"sms\"])", "input[id*=\"captcha\"]:not([id*=\"sms\"])", "input[name*=\"verifyCode\"]:not([name*=\"sms\"]):not([name*=\"phone\"])", "input[id*=\"verifyCode\"]:not([id*=\"sms\"]):not([id*=\"phone\"])", "input[name*=\"imgYzm\"]", "input[id*=\"imgYzm\"]", "input[name*=\"picYzm\"]", "input[id*=\"picYzm\"]", "input[name*=\"kaptcha\"]", "input[id*=\"kaptcha\"]", "input[name*=\"附加码\"]", "input[placeholder*=\"附加\"]", "input[placeholder*=\"图形验证\"]", "input[placeholder*=\"图中\"]", "input[placeholder*=\"右图\"]", "input[placeholder*=\"图片\"]", "input[placeholder*=\"验证码\"]:not([placeholder*=\"短信\"])"];
      for (const _0x17aa3b of _0x3696e1) {
        try {
          const _0x12340e = document.querySelector(_0x17aa3b);
          if (_0x12340e && this.isUsableInput(_0x12340e)) {
            console.log("[OCR] ✓ 通过选择器找到:", _0x17aa3b, "覆盖旧值:", _0x12340e.value || "无");
            this.fillInput(_0x12340e, _0x1a04d2);
            return true;
          }
        } catch (_0x56b23d) {}
      }
      const _0x5a5117 = document.querySelectorAll("input[type=\"text\"], input:not([type])");
      for (const _0x3f9d90 of _0x5a5117) {
        if (!this.isUsableInput(_0x3f9d90)) {
          continue;
        }
        const _0x1355a2 = (_0x3f9d90.id || "").toLowerCase();
        const _0x3a3fb3 = (_0x3f9d90.name || "").toLowerCase();
        const _0x8e8786 = (_0x3f9d90.placeholder || "").toLowerCase();
        if (_0x1355a2.includes("name") || _0x3a3fb3.includes("name")) {
          continue;
        }
        if (_0x1355a2.includes("phone") || _0x3a3fb3.includes("phone") || _0x1355a2.includes("mobile") || _0x3a3fb3.includes("mobile")) {
          continue;
        }
        if (_0x1355a2.includes("idcard") || _0x3a3fb3.includes("idcard") || _0x1355a2.includes("id_card") || _0x1355a2.includes("certno")) {
          continue;
        }
        if (_0x1355a2.includes("sms") || _0x3a3fb3.includes("sms") || _0x1355a2.includes("msg")) {
          continue;
        }
        if (_0x8e8786.includes("短信") || _0x8e8786.includes("手机验证")) {
          continue;
        }
        const _0x5b8964 = _0x3f9d90.closest("td") || _0x3f9d90.closest("tr") || _0x3f9d90.closest(".form-group") || _0x3f9d90.closest(".el-form-item") || _0x3f9d90.closest("div") || _0x3f9d90.parentElement;
        const _0x41dc26 = (_0x5b8964?.["textContent"] || "").toLowerCase();
        if (_0x41dc26.includes("图形验证码") || _0x41dc26.includes("附加码") || _0x41dc26.includes("图片验证") || _0x41dc26.includes("图中") || _0x41dc26.includes("右图") || _0x8e8786.includes("右图") || _0x8e8786.includes("图片中")) {
          if (!_0x41dc26.includes("短信") && !_0x41dc26.includes("手机验证") && !_0x41dc26.includes("获取验证码") && !_0x41dc26.includes("发送验证码")) {
            console.log("[OCR] ✓ 通过周围文本找到图形验证码输入框");
            this.fillInput(_0x3f9d90, _0x1a04d2);
            return true;
          }
        }
      }
      for (const _0x5f1f52 of _0x5a5117) {
        if (!this.isUsableInput(_0x5f1f52)) {
          continue;
        }
        const _0x527577 = (_0x5f1f52.id || "").toLowerCase();
        const _0x4630fc = (_0x5f1f52.name || "").toLowerCase();
        const _0x2b40d2 = (_0x5f1f52.placeholder || "").toLowerCase();
        if (_0x527577.includes("name") || _0x4630fc.includes("name")) {
          continue;
        }
        if (_0x527577.includes("phone") || _0x4630fc.includes("phone") || _0x527577.includes("mobile") || _0x4630fc.includes("mobile")) {
          continue;
        }
        if (_0x527577.includes("idcard") || _0x4630fc.includes("idcard") || _0x527577.includes("certno")) {
          continue;
        }
        if (_0x527577.includes("sms") || _0x4630fc.includes("sms")) {
          continue;
        }
        if (_0x2b40d2.includes("短信") || _0x2b40d2.includes("手机验证")) {
          continue;
        }
        const _0x96ebf5 = _0x5f1f52.closest("td") || _0x5f1f52.closest("tr") || _0x5f1f52.closest(".form-group") || _0x5f1f52.closest(".el-form-item") || _0x5f1f52.closest("div") || _0x5f1f52.parentElement;
        const _0x3ef26b = (_0x96ebf5?.["textContent"] || "").toLowerCase();
        if (_0x3ef26b.includes("短信验证码") || _0x3ef26b.includes("手机验证码") || _0x3ef26b.includes("获取验证码") || _0x3ef26b.includes("发送验证码") || _0x3ef26b.includes("业务验证码") || _0x3ef26b.includes("交易验证码")) {
          {
            continue;
          }
        }
        const _0x9ec7de = _0x96ebf5?.["querySelector"]("img") || _0x96ebf5?.["querySelector"]("canvas");
        if (_0x527577.includes("code") || _0x4630fc.includes("code") || _0x527577.includes("captcha") || _0x4630fc.includes("captcha") || _0x527577.includes("verify") || _0x4630fc.includes("verify") || _0x527577.includes("yzm") || _0x4630fc.includes("yzm") || _0x527577.includes("vali") || _0x4630fc.includes("vali") || _0x2b40d2.includes("验证")) {
          if (_0x9ec7de || _0x3ef26b.includes("换一张") || _0x3ef26b.includes("看不清")) {
            {
              this.fillInput(_0x5f1f52, _0x1a04d2);
              return true;
            }
          }
        }
      }
      for (const _0x2e4d2a of _0x5a5117) {
        if (!this.isUsableInput(_0x2e4d2a)) {
          continue;
        }
        const _0x153298 = _0x2e4d2a.closest("td") || _0x2e4d2a.closest("tr") || _0x2e4d2a.closest(".form-group") || _0x2e4d2a.closest(".el-form-item") || _0x2e4d2a.closest("div") || _0x2e4d2a.parentElement;
        const _0x223494 = (_0x153298?.["textContent"] || "").trim();
        if (/^[\s\*]*验证码[\s\:：]*$/.test(_0x223494.split("\n")[0]) || _0x223494.startsWith("验证码") && _0x223494.includes("换一张")) {
          this.fillInput(_0x2e4d2a, _0x1a04d2);
          return true;
        }
      }
      return false;
    },
    async autoOCR() {
      {
        try {
          this.setOCRStatus("<span class=\"warn\">自动OCR：正在查找验证码图片...</span>");
          const _0x126f80 = this.findCaptchaImage();
          if (!_0x126f80) {
            this.setOCRStatus("<span class=\"err\">未找到验证码图片</span>");
            this.completeAutoOCR(false);
            return;
          }
          this.setOCRStatus("<span class=\"warn\">自动OCR：正在截取验证码...</span>");
          let _0x2cdf82;
          if (_0x126f80 instanceof HTMLCanvasElement) {
            _0x2cdf82 = _0x126f80;
          } else {
            _0x2cdf82 = document.createElement("canvas");
            const _0x2fa492 = _0x126f80.naturalWidth || _0x126f80.width || 100;
            const _0x50a423 = _0x126f80.naturalHeight || _0x126f80.height || 40;
            _0x2cdf82.width = _0x2fa492;
            _0x2cdf82.height = _0x50a423;
            try {
              _0x2cdf82.getContext("2d").drawImage(_0x126f80, 0, 0, _0x2fa492, _0x50a423);
              _0x2cdf82.toDataURL();
            } catch (_0x177247) {
              {
                const _0x478bdf = _0x126f80.getBoundingClientRect();
                const _0x4723d8 = await new Promise((_0x4fc127, _0x561f9f) => {
                  const _0x2e3033 = {
                    action: "captureVisibleTab"
                  };
                  chrome.runtime.sendMessage(_0x2e3033, _0x31fe96 => {
                    {
                      if (_0x31fe96 && _0x31fe96.success) {
                        _0x4fc127(_0x31fe96.dataUrl);
                      } else {
                        _0x561f9f(new Error("截图失败"));
                      }
                    }
                  });
                });
                const _0x155414 = new Image();
                await new Promise((_0x1be980, _0x4ece39) => {
                  _0x155414.onload = _0x1be980;
                  _0x155414.onerror = _0x4ece39;
                  _0x155414.src = _0x4723d8;
                });
                const _0x16a7b3 = window.devicePixelRatio || 1;
                _0x2cdf82 = document.createElement("canvas");
                _0x2cdf82.width = _0x478bdf.width * _0x16a7b3;
                _0x2cdf82.height = _0x478bdf.height * _0x16a7b3;
                _0x2cdf82.getContext("2d").drawImage(_0x155414, _0x478bdf.left * _0x16a7b3, _0x478bdf.top * _0x16a7b3, _0x478bdf.width * _0x16a7b3, _0x478bdf.height * _0x16a7b3, 0, 0, _0x478bdf.width * _0x16a7b3, _0x478bdf.height * _0x16a7b3);
              }
            }
          }
          this.setOCRStatus("<span class=\"warn\">自动OCR：识别中...</span>");
          const _0x48830c = await this.runOCR(_0x2cdf82);
          _0x48830c ? this.waitAndClickSmsButton() : this.completeAutoOCR(false);
        } catch (_0x2e47a4) {
          this.setOCRStatus("<span class=\"err\">自动OCR失败：" + (_0x2e47a4.message || _0x2e47a4) + "</span>");
          this.completeAutoOCR(false);
        }
      }
    },
    waitAndClickSmsButton() {
      let _0x48b970 = 0;
      const _0x92774b = 15;
      const _0x2695a3 = setInterval(() => {
        _0x48b970++;
        const _0x1ccf1b = document.querySelectorAll("input[type=\"text\"], input:not([type]), input[type=\"tel\"], input[type=\"number\"]");
        let _0x3e24b2 = false;
        for (const _0x5fa9eb of _0x1ccf1b) {
          if (!this.isUsableInput(_0x5fa9eb)) {
            continue;
          }
          if (!_0x5fa9eb.value || _0x5fa9eb.value.trim().length < 2) {
            continue;
          }
          let _0x29f10b = _0x5fa9eb.parentElement;
          let _0x2a03d2 = 0;
          while (_0x29f10b && _0x2a03d2 < 5) {
            const _0x53c3a8 = (_0x29f10b.textContent || "").replace(/\s+/g, "");
            const hasImage = _0x29f10b.querySelector("img, canvas");
            const _0x51d2c4 = /短信验证码|手机验证码|获取验证码|发送验证码/.test(_0x53c3a8);
            if (hasImage && !_0x51d2c4) {
              _0x3e24b2 = true;
              console.log("[OCR] 检测到图形验证码已填充:", _0x5fa9eb.value);
              break;
            }
            _0x29f10b = _0x29f10b.parentElement;
            _0x2a03d2++;
          }
          if (_0x3e24b2) {
            break;
          }
        }
        !_0x3e24b2 && this.preferredInput && this.preferredInput.value && this.preferredInput.value.trim().length >= 2 && (_0x3e24b2 = true, console.log("[OCR] preferredInput已填充:", this.preferredInput.value));
        if (_0x3e24b2) {
          clearInterval(_0x2695a3);
          this.setOCRStatus("<span class=\"ok\">验证码已填入，正在点击获取验证码...</span>");
          setTimeout(() => {
            {
              const _0x9863dc = this.clickSmsButton();
              if (_0x9863dc) {
                this.completeAutoOCR(true);
              } else {
                {
                  this.setOCRStatus("<span class=\"warn\">已填入验证码，但未找到获取验证码按钮</span>");
                  this.completeAutoOCR(false);
                }
              }
            }
          }, 500);
        } else {
          _0x48b970 >= _0x92774b ? (clearInterval(_0x2695a3), this.setOCRStatus("<span class=\"warn\">等待超时，尝试点击获取验证码...</span>"), setTimeout(() => {
            this.clickSmsButton();
            this.completeAutoOCR(false);
          }, 300)) : this.setOCRStatus("<span class=\"warn\">等待验证码填入中... (" + _0x48b970 + "/" + _0x92774b + ")</span>");
        }
      }, 200);
    },
    findCaptchaInput() {
      const _0x5cee18 = document.querySelectorAll("input[type=\"text\"], input:not([type]), input[type=\"tel\"], input[type=\"number\"]");
      for (const _0x422f5b of _0x5cee18) {
        {
          if (!this.isUsableInput(_0x422f5b)) {
            continue;
          }
          let _0xaa9f30 = _0x422f5b.parentElement;
          let _0x2b5cf7 = 0;
          while (_0xaa9f30 && _0x2b5cf7 < 5) {
            const _0x3f6641 = (_0xaa9f30.textContent || "").replace(/\s+/g, "");
            const isImageCaptchaRow = /图形验证码|图片验证码|附加码/.test(_0x3f6641);
            const _0xc9b562 = /短信验证码|手机验证码|获取验证码|发送验证码/.test(_0x3f6641);
            const hasImage = _0xaa9f30.querySelector("img, canvas");
            if (isImageCaptchaRow && !_0xc9b562 && hasImage) {
              console.log("[OCR] findCaptchaInput: 找到图形验证码输入框");
              return _0x422f5b;
            }
            _0xaa9f30 = _0xaa9f30.parentElement;
            _0x2b5cf7++;
          }
        }
      }
      for (const _0x33204a of _0x5cee18) {
        if (!this.isUsableInput(_0x33204a)) {
          continue;
        }
        const _0x97cda7 = (_0x33204a.id || "").toLowerCase();
        const _0x4ada76 = (_0x33204a.name || "").toLowerCase();
        const _0x5794e3 = (_0x33204a.placeholder || "").toLowerCase();
        if (_0x97cda7.includes("sms") || _0x4ada76.includes("sms") || _0x97cda7.includes("phone") || _0x4ada76.includes("phone")) {
          continue;
        }
        if (_0x5794e3.includes("短信") || _0x5794e3.includes("手机")) {
          continue;
        }
        if (_0x97cda7.includes("imgcode") || _0x4ada76.includes("imgcode") || _0x97cda7.includes("piccode") || _0x4ada76.includes("piccode") || _0x97cda7.includes("captcha") || _0x4ada76.includes("captcha") || _0x97cda7.includes("imgyzm") || _0x4ada76.includes("imgyzm") || _0x97cda7.includes("kaptcha") || _0x4ada76.includes("kaptcha")) {
          return _0x33204a;
        }
        if (_0x97cda7.includes("code") || _0x4ada76.includes("code") || _0x97cda7.includes("verify") || _0x4ada76.includes("verify") || _0x97cda7.includes("yzm") || _0x4ada76.includes("yzm") || _0x5794e3.includes("验证") || _0x5794e3.includes("code")) {
          const _0x3510fa = _0x33204a.closest("tr, .form-group, .el-form-item, div") || _0x33204a.parentElement;
          const _0x115f35 = _0x3510fa?.["querySelector"]("button, a, span")?.["textContent"]?.["includes"]("发送验证码") || _0x3510fa?.["querySelector"]("button, a, span")?.["textContent"]?.["includes"]("获取验证码");
          if (!_0x115f35) {
            {
              return _0x33204a;
            }
          }
        }
      }
      if (this.preferredInput && this.isUsableInput(this.preferredInput)) {
        return this.preferredInput;
      }
      return null;
    },
    async autoOCRSilent() {
      {
        try {
          const _0x274829 = this.findCaptchaImage();
          if (!_0x274829) {
            return;
          }
          let _0x218939;
          if (_0x274829 instanceof HTMLCanvasElement) {
            _0x218939 = _0x274829;
          } else {
            {
              _0x218939 = document.createElement("canvas");
              const _0x245746 = _0x274829.naturalWidth || _0x274829.width || 100;
              const _0x4c11ca = _0x274829.naturalHeight || _0x274829.height || 40;
              _0x218939.width = _0x245746;
              _0x218939.height = _0x4c11ca;
              try {
                _0x218939.getContext("2d").drawImage(_0x274829, 0, 0, _0x245746, _0x4c11ca);
                _0x218939.toDataURL();
              } catch (_0x5b7be8) {
                {
                  const _0x14e030 = _0x274829.getBoundingClientRect();
                  const _0x393a51 = await new Promise((_0x30981f, _0x4bda8a) => {
                    const _0x3a8671 = {
                      action: "captureVisibleTab"
                    };
                    chrome.runtime.sendMessage(_0x3a8671, _0x2d7a6c => {
                      {
                        if (_0x2d7a6c && _0x2d7a6c.success) {
                          _0x30981f(_0x2d7a6c.dataUrl);
                        } else {
                          _0x4bda8a(new Error("截图失败"));
                        }
                      }
                    });
                  });
                  const _0x4198b3 = new Image();
                  await new Promise((_0x72818e, _0x3ef5e8) => {
                    _0x4198b3.onload = _0x72818e;
                    _0x4198b3.onerror = _0x3ef5e8;
                    _0x4198b3.src = _0x393a51;
                  });
                  const _0x4fca2a = window.devicePixelRatio || 1;
                  _0x218939 = document.createElement("canvas");
                  _0x218939.width = _0x14e030.width * _0x4fca2a;
                  _0x218939.height = _0x14e030.height * _0x4fca2a;
                  _0x218939.getContext("2d").drawImage(_0x4198b3, _0x14e030.left * _0x4fca2a, _0x14e030.top * _0x4fca2a, _0x14e030.width * _0x4fca2a, _0x14e030.height * _0x4fca2a, 0, 0, _0x14e030.width * _0x4fca2a, _0x14e030.height * _0x4fca2a);
                }
              }
            }
          }
          await this.runOCR(_0x218939);
        } catch (_0x624a2f) {
          this.setOCRStatus("<span class=\"err\">识别失败：" + (_0x624a2f.message || _0x624a2f) + "</span>");
        }
      }
    },
    findCaptchaImage() {
      const _0xd24ac = document.querySelectorAll("img");
      for (const _0x4f025f of _0xd24ac) {
        {
          const _0x47facf = (_0x4f025f.src || "").toLowerCase();
          const _0x3580b3 = (_0x4f025f.id || "").toLowerCase();
          const _0x3f3219 = (_0x4f025f.className || "").toLowerCase();
          const _0x23af9f = (_0x4f025f.alt || "").toLowerCase();
          if (_0x47facf.includes("captcha") || _0x47facf.includes("verify") || _0x47facf.includes("randcode") || _0x47facf.includes("yzm") || _0x47facf.includes("imgcode") || _0x47facf.includes("valicode") || _0x47facf.includes("checkcode") || _0x3580b3.includes("captcha") || _0x3580b3.includes("verify") || _0x3580b3.includes("code") || _0x3580b3.includes("yzm") || _0x3f3219.includes("captcha") || _0x3f3219.includes("verify") || _0x3f3219.includes("code") || _0x23af9f.includes("验证") || _0x23af9f.includes("captcha")) {
            const _0x4f7877 = _0x4f025f.getBoundingClientRect();
            if (_0x4f7877.width > 30 && _0x4f7877.height > 15 && _0x4f7877.width < 300 && _0x4f7877.height < 100) {
              {
                return _0x4f025f;
              }
            }
          }
        }
      }
      for (const _0x45dd52 of _0xd24ac) {
        {
          const _0x22b5f2 = _0x45dd52.getBoundingClientRect();
          if (_0x22b5f2.width < 50 || _0x22b5f2.width > 250 || _0x22b5f2.height < 15 || _0x22b5f2.height > 100) {
            continue;
          }
          const _0xbfc085 = (_0x45dd52.src || "").toLowerCase();
          if (_0xbfc085.includes("logo") || _0xbfc085.includes("icon") || _0xbfc085.includes("avatar") || _0xbfc085.includes("bank") || _0xbfc085.includes("header") || _0xbfc085.includes("banner")) {
            continue;
          }
          const _0x54c8e0 = _0x45dd52.closest("td") || _0x45dd52.closest("tr") || _0x45dd52.closest(".form-group") || _0x45dd52.closest(".el-form-item") || _0x45dd52.closest("div");
          const _0x5a1126 = (_0x54c8e0?.["textContent"] || "").toLowerCase();
          if (_0x5a1126.includes("验证码") || _0x5a1126.includes("附加码") || _0x5a1126.includes("图形码") || _0x5a1126.includes("换一张") || _0x5a1126.includes("看不清") || _0x5a1126.includes("刷新")) {
            if (!_0x5a1126.includes("银行") || _0x5a1126.includes("验证")) {
              return _0x45dd52;
            }
          }
        }
      }
      const _0x479d43 = document.querySelectorAll("canvas");
      for (const _0x2256f4 of _0x479d43) {
        const _0x1e26f3 = (_0x2256f4.id || "").toLowerCase();
        const _0x283f9e = (_0x2256f4.className || "").toLowerCase();
        const _0x3fa4f1 = _0x2256f4.getBoundingClientRect();
        if (_0x3fa4f1.width > 50 && _0x3fa4f1.width < 250 && _0x3fa4f1.height > 15 && _0x3fa4f1.height < 100) {
          if (_0x1e26f3.includes("captcha") || _0x1e26f3.includes("verify") || _0x1e26f3.includes("code") || _0x283f9e.includes("captcha") || _0x283f9e.includes("verify") || _0x283f9e.includes("code")) {
            return _0x2256f4;
          }
          const _0x36a212 = _0x2256f4.closest("td") || _0x2256f4.closest("tr") || _0x2256f4.closest("div");
          const _0x24172c = (_0x36a212?.["textContent"] || "").toLowerCase();
          if (_0x24172c.includes("验证码") || _0x24172c.includes("附加码")) {
            return _0x2256f4;
          }
        }
      }
      for (const _0x5db42d of _0xd24ac) {
        {
          const _0x10aeb6 = _0x5db42d.getBoundingClientRect();
          if (_0x10aeb6.width >= 70 && _0x10aeb6.width <= 180 && _0x10aeb6.height >= 25 && _0x10aeb6.height <= 60) {
            const _0x568dc2 = (_0x5db42d.src || "").toLowerCase();
            const _0x2fb9b8 = (_0x5db42d.alt || "").toLowerCase();
            const _0xa7ee05 = (_0x5db42d.className || "").toLowerCase();
            if (_0x568dc2.includes("logo") || _0x568dc2.includes("bank") || _0x568dc2.includes("icon") || _0x2fb9b8.includes("logo") || _0x2fb9b8.includes("银行") || _0xa7ee05.includes("logo") || _0xa7ee05.includes("header")) {
              continue;
            }
            if (_0x5db42d.closest("header") || _0x5db42d.closest("nav") || _0x5db42d.closest(".header") || _0x5db42d.closest(".navbar") || _0x5db42d.closest(".top") || _0x5db42d.closest(".logo")) {
              continue;
            }
            return _0x5db42d;
          }
        }
      }
      return null;
    },
    clickSmsButton() {
      console.log("[OCR] 开始查找获取验证码按钮...");
      const _0x2bf49a = _0x41b04 => {
        console.log("[OCR] 尝试点击按钮:", _0x41b04.textContent?.["trim"]());
        try {
          _0x41b04.click();
          console.log("[OCR] ✓ 已执行点击");
          return true;
        } catch (_0x7858e9) {
          {
            console.log("[OCR] click失败:", _0x7858e9);
          }
        }
        try {
          const _0x397ad4 = {
            bubbles: true,
            cancelable: true,
            view: window
          };
          const clickEvent = new MouseEvent("click", _0x397ad4);
          _0x41b04.dispatchEvent(clickEvent);
          return true;
        } catch (_0x43eb61) {
          console.log("[OCR] MouseEvent失败:", _0x43eb61);
        }
        return false;
      };
      const _0x206685 = document.querySelectorAll("button, a, span, input[type=\"button\"], [role=\"button\"]");
      for (const _0x3f1569 of _0x206685) {
        const _0x161ca7 = (_0x3f1569.textContent || _0x3f1569.value || "").trim();
        if (/^(获取验证码|发送验证码|获取短信验证码|发送短信验证码|点击获取|免费获取|获取动态码)$/.test(_0x161ca7)) {
          if (_0x3f1569.offsetParent !== null && !/\d+\s*[秒s]/i.test(_0x161ca7)) {
            console.log("[OCR] ✓ 精确匹配找到按钮:", _0x161ca7);
            _0x2bf49a(_0x3f1569);
            this.setOCRStatus("<span class=\"ok\">✓ 已点击获取验证码按钮</span>");
            return true;
          }
        }
      }
      for (const _0x3bd508 of _0x206685) {
        const _0x258356 = (_0x3bd508.textContent || _0x3bd508.value || "").trim();
        if (_0x258356.length <= 12 && /(获取|发送).*(验证码|短信)/.test(_0x258356)) {
          if (_0x3bd508.offsetParent !== null && !/\d+\s*[秒s]/i.test(_0x258356)) {
            console.log("[OCR] ✓ 模糊匹配找到按钮:", _0x258356);
            _0x2bf49a(_0x3bd508);
            this.setOCRStatus("<span class=\"ok\">✓ 已点击获取验证码按钮</span>");
            return true;
          }
        }
      }
      const _0x11b418 = [".free_get.ml20.next", "#free_get.ml20.next", ".to_code", "#to_code", "[class*=\"getcode\"]", "[class*=\"get-code\"]", "[class*=\"send-code\"]", "[id*=\"getcode\"]", "[id*=\"get-code\"]", "[id*=\"send-code\"]"];
      for (const _0x5c97be of _0x11b418) {
        try {
          const _0x5810df = document.querySelectorAll(_0x5c97be);
          for (const _0x33a14c of _0x5810df) {
            const _0x17c337 = (_0x33a14c.textContent || "").trim();
            if (_0x33a14c.offsetParent !== null && !/\d+\s*[秒s]/i.test(_0x17c337)) {
              {
                console.log("[OCR] ✓ 通过选择器找到按钮:", _0x5c97be);
                _0x2bf49a(_0x33a14c);
                this.setOCRStatus("<span class=\"ok\">✓ 已点击获取验证码按钮</span>");
                return true;
              }
            }
          }
        } catch (_0x30b2a6) {}
      }
      const _0x4dbe1e = document.querySelectorAll("input");
      for (const _0xabd451 of _0x4dbe1e) {
        let _0x204cd3 = _0xabd451.parentElement;
        let _0x35ea59 = 0;
        while (_0x204cd3 && _0x35ea59 < 4) {
          {
            const _0x5b9a20 = _0x204cd3.textContent || "";
            if (/短信验证码|手机验证码/.test(_0x5b9a20)) {
              {
                const _0x58a0ff = _0x204cd3.querySelectorAll("button, a, span, [role=\"button\"]");
                for (const _0x890c28 of _0x58a0ff) {
                  const _0x51da10 = (_0x890c28.textContent || "").trim();
                  if (_0x51da10.length <= 10 && /(获取|发送)/.test(_0x51da10) && !/\d+\s*[秒s]/i.test(_0x51da10)) {
                    if (_0x890c28.offsetParent !== null) {
                      {
                        console.log("[OCR] ✓ 在短信行找到按钮:", _0x51da10);
                        _0x2bf49a(_0x890c28);
                        this.setOCRStatus("<span class=\"ok\">✓ 已点击获取验证码按钮</span>");
                        return true;
                      }
                    }
                  }
                }
              }
            }
            _0x204cd3 = _0x204cd3.parentElement;
            _0x35ea59++;
          }
        }
      }
      console.log("[OCR] ✗ 未找到获取验证码按钮");
      this.setOCRStatus("<span class=\"warn\">未找到获取验证码按钮</span>");
      return false;
    },
    completeAutoOCR(_0x94b652) {
      {
        typeof SXTimedFill !== "undefined" && SXTimedFill.pendingSmsJobId && setTimeout(() => {
          SXTimedFill.removeTimedFillJob(SXTimedFill.pendingSmsJobId);
        }, _0x94b652 ? 2000 : 500);
      }
    },
    createQuickControls(_0x3f0222) {
      const _0x4d4fa9 = StorageCache.get("sx_kami_cache_v2", null);
      const _0x5ca225 = _0x4d4fa9?.["card_type"] || "会员";
      const _0x557d3f = document.createElement("div");
      _0x557d3f.className = "sx-beijing-time";
      _0x557d3f.innerHTML = "<div class=\"sx-beijing-welcome\">欢迎您<span class=\"sx-card-type\">" + _0x5ca225 + "卡</span>用户：</div><div class=\"sx-beijing-time-label\">当前北京时间为</div><div class=\"sx-beijing-time-display\">--:--:--</div><div class=\"sx-beijing-date-display\">----年--月--号</div>";
      const _0x590c0e = () => {
        const _0x18716a = new Date();
        const _0x28ecef = new Date(_0x18716a.getTime() + (_0x18716a.getTimezoneOffset() + 480) * 60 * 1000);
        _0x557d3f.querySelector(".sx-beijing-time-display").textContent = String(_0x28ecef.getHours()).padStart(2, "0") + ":" + String(_0x28ecef.getMinutes()).padStart(2, "0") + ":" + String(_0x28ecef.getSeconds()).padStart(2, "0");
        _0x557d3f.querySelector(".sx-beijing-date-display").textContent = _0x28ecef.getFullYear() + "年" + String(_0x28ecef.getMonth() + 1).padStart(2, "0") + "月" + String(_0x28ecef.getDate()).padStart(2, "0") + "号";
      };
      _0x590c0e();
      setInterval(_0x590c0e, 1000);
      _0x3f0222.appendChild(_0x557d3f);
      const _0x2f5554 = document.createElement("button");
      _0x2f5554.className = "autofill-button";
      _0x2f5554.textContent = "最新公告";
      _0x2f5554.style.cssText = "background:linear-gradient(to right,#228B22,#66CDAA);width:100%;margin-top:2px;";
      _0x2f5554.onclick = () => this.showAnnouncement(true);
      _0x3f0222.appendChild(_0x2f5554);
      this.createScriptButtons(_0x3f0222);
    },
    createScriptButtons(_0x298493) {
      const _0xfab775 = StorageCache.get("sx_kami_cache_v2", null);
      if (!_0xfab775 || !_0xfab775.buttons || !Array.isArray(_0xfab775.buttons) || !_0xfab775.buttons.length) {
        return;
      }
      _0xfab775.buttons.forEach((_0x11c73e, _0x5ec0bb) => {
        if (!_0x11c73e.title || !_0x11c73e.url) {
          return;
        }
        const _0x513fbb = _0x11c73e.color1 || "#667eea";
        const _0x2b0cbd = _0x11c73e.color2 || "#764ba2";
        const _0x445b75 = document.createElement("button");
        _0x445b75.className = "autofill-button";
        _0x445b75.textContent = _0x11c73e.title;
        _0x445b75.title = "点击前往：" + _0x11c73e.url;
        _0x445b75.style.cssText = "background:linear-gradient(135deg, " + _0x513fbb + " 0%, " + _0x2b0cbd + " 100%);width:100%;margin-top:2px;";
        _0x445b75.onclick = () => window.open(_0x11c73e.url, "_blank");
        _0x298493.appendChild(_0x445b75);
      });
    },
    showAnnouncement(_0x36892a = false) {
      const _0x293cad = StorageCache.get("sx_kami_cache_v2", null);
      const _0x281603 = _0x293cad && _0x293cad.announce || "暂无公告";
      const _0x1893e1 = SXUtils.miniSig(_0x281603);
      const _0x349f8d = StorageCache.get("sx_announce_shown_hash", "");
      const _0x3a10b7 = _0x293cad?.["announce_force"] === "1";
      if (!_0x36892a && !_0x3a10b7 && _0x349f8d === _0x1893e1) {
        return;
      }
      const _0xaeecd1 = document.querySelector(".sx-announce-mask");
      if (_0xaeecd1) {
        _0xaeecd1.remove();
      }
      const _0x4ff8b8 = document.createElement("div");
      _0x4ff8b8.className = "sx-mask sx-announce-mask";
      _0x4ff8b8.style.background = "rgba(0,0,0,0.5)";
      const _0x24b5ab = document.createElement("div");
      _0x24b5ab.style.cssText = "background:white;border-radius:16px;padding:24px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;text-align:center;";
      const _0x396164 = document.createElement("h2");
      _0x396164.textContent = _0x3a10b7 ? "【重要公告】" : "最新公告";
      _0x396164.style.cssText = _0x3a10b7 ? "color:#ef4444;margin:0 0 16px 0;" : "color:#f59e0b;margin:0 0 16px 0;";
      const _0x6205b3 = document.createElement("div");
      _0x6205b3.style.cssText = "text-align:left;line-height:1.8;margin-bottom:16px;";
      _0x6205b3.innerHTML = _0x281603;
      _0x24b5ab.append(_0x396164, _0x6205b3);
      if (_0x3a10b7) {
        const _0x22616d = document.createElement("div");
        _0x22616d.style.cssText = "margin-top:10px;color:#ef4444;font-weight:bold;font-size:14px;";
        _0x22616d.textContent = "⚠️ 此为管理员强制公告，无法关闭";
        _0x24b5ab.appendChild(_0x22616d);
      } else {
        const _0x42980b = document.createElement("label");
        _0x42980b.style.cssText = "display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:16px;font-size:14px;color:#666;";
        const _0x5d8a54 = document.createElement("input");
        _0x5d8a54.type = "checkbox";
        _0x42980b.append(_0x5d8a54, document.createTextNode("不再弹出该公告"));
        const _0x5b921b = document.createElement("button");
        _0x5b921b.className = "sx-btn sx-btn-primary";
        _0x5b921b.textContent = "我知道了";
        _0x5b921b.style.cssText = "padding:10px 30px;";
        _0x5b921b.onclick = () => {
          _0x5d8a54.checked && StorageCache.set("sx_announce_shown_hash", _0x1893e1);
          _0x4ff8b8.remove();
        };
        _0x24b5ab.append(_0x42980b, _0x5b921b);
      }
      _0x4ff8b8.appendChild(_0x24b5ab);
      document.body.appendChild(_0x4ff8b8);
    },
    startAnnouncePolling() {
      console.log("[轮询] 启动轮询服务");
      const _0x1a1d8d = 30000;
      const _0x34999c = async () => {
        {
          console.log("[轮询] 执行轮询检查...");
          try {
            const _0x2f61f2 = StorageCache.get("sx_kami_cache_v2", null);
            console.log("[轮询] 缓存key:", _0x2f61f2?.["key"]);
            if (!_0x2f61f2 || !_0x2f61f2.key) {
              {
                console.log("[轮询] 无缓存或无key，跳过");
                return;
              }
            }
            const _0x3ab579 = await new Promise(_0x2393a4 => {
              const _0x12c209 = {
                action: "getAnnounce",
                key: _0x2f61f2.key
              };
              chrome.runtime.sendMessage(_0x12c209, _0x2393a4);
            });
            console.log("[轮询] 响应:", JSON.stringify(_0x3ab579));
            if (_0x3ab579 && _0x3ab579.success && _0x3ab579.data && _0x3ab579.data.ok) {
              {
                const _0x286835 = _0x3ab579.data;
                console.log("[轮询] card_valid:", _0x286835.card_valid, "debug_key:", _0x286835.debug_key);
                let _0xbad5ec = false;
                if (_0x286835.card_valid === false) {
                  console.log("[轮询] 卡密已失效:", _0x286835.card_msg);
                  StorageCache.remove("sx_kami_cache_v2");
                  StorageCache.remove("sx_kami_key");
                  document.querySelectorAll(".sx-ball, .sx-pane, .autofill-settings").forEach(_0x38469a => {
                    {
                      _0x38469a.style.display = "none";
                    }
                  });
                  alert("⚠️ " + (_0x286835.card_msg || "授权已失效") + "，请刷新页面重新激活");
                  return;
                }
                if ((_0x286835.announce || "") !== (_0x2f61f2.announce || "") || (_0x286835.announce_force || "0") !== (_0x2f61f2.announce_force || "0")) {
                  console.log("[轮询] 检测到公告更新");
                  _0x2f61f2.announce = _0x286835.announce || "";
                  _0x2f61f2.announce_force = _0x286835.announce_force || "0";
                  _0xbad5ec = true;
                  _0x286835.announce && this.showAnnouncement(false);
                }
                _0x286835.ocr_keys && JSON.stringify(_0x286835.ocr_keys) !== JSON.stringify(_0x2f61f2.ocr_keys || {}) && (console.log("[轮询] 检测到OCR配置更新"), _0x2f61f2.ocr_keys = _0x286835.ocr_keys, _0xbad5ec = true);
                _0x286835.sms_config && JSON.stringify(_0x286835.sms_config) !== JSON.stringify(_0x2f61f2.sms_config || {}) && (console.log("[轮询] 检测到接码平台配置更新"), _0x2f61f2.sms_config = _0x286835.sms_config, _0xbad5ec = true);
                if (_0x286835.float_ball_logo !== undefined && _0x286835.float_ball_logo !== (_0x2f61f2.float_ball_logo || "")) {
                  {
                    console.log("[轮询] 检测到悬浮球Logo更新");
                    _0x2f61f2.float_ball_logo = _0x286835.float_ball_logo || "";
                    _0xbad5ec = true;
                  }
                }
                _0x286835.buttons && JSON.stringify(_0x286835.buttons) !== JSON.stringify(_0x2f61f2.buttons || []) && (console.log("[轮询] 检测到按钮配置更新"), _0x2f61f2.buttons = _0x286835.buttons, _0xbad5ec = true);
                _0x286835.script_disabled !== undefined && _0x286835.script_disabled !== (_0x2f61f2.script_disabled || "0") && (console.log("[轮询] 检测到脚本开关更新:", _0x286835.script_disabled), _0x2f61f2.script_disabled = _0x286835.script_disabled, _0x2f61f2.script_disabled_msg = _0x286835.script_disabled_msg || "", _0xbad5ec = true, _0x286835.script_disabled === "1" && (console.log("[轮询] 脚本已被远程关闭"), document.querySelectorAll(".sx-ball, .sx-pane, .autofill-settings").forEach(_0x5b20f5 => {
                  _0x5b20f5.style.display = "none";
                }), alert("⚠️ " + (_0x286835.script_disabled_msg || "系统维护中，请稍后再试..."))));
                _0x286835.ocr_limits && JSON.stringify(_0x286835.ocr_limits) !== JSON.stringify(_0x2f61f2.ocr_limits || {}) && (console.log("[轮询] 检测到OCR限额配置更新"), _0x2f61f2.ocr_limits = _0x286835.ocr_limits, _0xbad5ec = true);
                if (_0x286835.card_ocr_limit !== undefined && _0x286835.card_ocr_limit !== _0x2f61f2.card_ocr_limit) {
                  {
                    console.log("[轮询] 检测到卡密OCR限制更新:", _0x286835.card_ocr_limit);
                    _0x2f61f2.card_ocr_limit = _0x286835.card_ocr_limit;
                    _0xbad5ec = true;
                  }
                }
                if (_0x286835.ocr_auto && JSON.stringify(_0x286835.ocr_auto) !== JSON.stringify(_0x2f61f2.ocr_auto || {})) {
                  console.log("[轮询] 检测到OCR自动识别配置更新:", _0x286835.ocr_auto);
                  _0x2f61f2.ocr_auto = _0x286835.ocr_auto;
                  _0xbad5ec = true;
                  if (typeof SXUI !== "undefined" && SXUI.autoRunning) {
                    const _0x39ee6b = SXUI.ocrProvider;
                    _0x286835.ocr_auto[_0x39ee6b] !== "1" && (console.log("[轮询] 当前接口自动识别已被远程关闭，停止自动识别"), SXUI.stopAutoRun(), SXUI.updateAutoButtonsState(), SXUI.setOCRStatus("<span class=\"warn\">自动识别已被管理员关闭</span>"));
                  }
                }
                _0xbad5ec && (StorageCache.set("sx_kami_cache_v2", _0x2f61f2), console.log("[轮询] 缓存已更新"));
              }
            }
          } catch (_0x2af925) {
            console.log("[轮询] 失败:", _0x2af925);
          }
        }
      };
      setTimeout(() => {
        console.log("[轮询] 首次轮询开始");
        _0x34999c();
        setInterval(_0x34999c, _0x1a1d8d);
      }, 2000);
    },
    openMultiWindowDialog() {
      const _0x4e7067 = document.getElementById("sx-multi-open-pane");
      if (_0x4e7067) {
        _0x4e7067.remove();
        return;
      }
      const _0x5e1ffe = document.createElement("div");
      _0x5e1ffe.id = "sx-multi-open-pane";
      _0x5e1ffe.className = "sx-pane";
      _0x5e1ffe.style.cssText = "position:fixed;top:100px;left:50%;transform:translateX(-50%);width:380px;z-index:2147483646;";
      const _0x5bb423 = document.createElement("div");
      _0x5bb423.className = "sx-pane-head";
      _0x5bb423.innerHTML = "<div class=\"sx-pane-head-left\"><span class=\"sx-pane-title\">🖥️ 一键多开窗口</span></div><div class=\"sx-pane-head-right\"><span style=\"opacity:.7;font-size:11px;\">拖拽移动</span><button class=\"sx-pane-minimize-btn\" title=\"关闭\">✕</button></div>";
      const _0x116984 = document.createElement("div");
      _0x116984.className = "sx-pane-body";
      _0x116984.style.padding = "16px";
      const _0x30c09c = _0x116984;
      const _0x10eb9e = "display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;";
      const _0xafa84a = "width:100%;padding:10px 12px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;background:#fff;transition:all 0.2s;box-sizing:border-box;outline:none;";
      const _0x732a1f = "width:18px;height:18px;accent-color:#8b5cf6;cursor:pointer;flex-shrink:0;";
      const _0x2dbe7a = "display:flex;align-items:center;gap:10px;padding:10px 12px;background:#f9fafb;border-radius:8px;cursor:pointer;margin-bottom:8px;border:1px solid #e5e7eb;transition:all 0.2s;";
      const _0x52dcc9 = document.createElement("p");
      _0x52dcc9.style.cssText = "font-size:13px;color:#6b7280;margin-bottom:16px;padding:10px;background:linear-gradient(135deg,#eff6ff,#dbeafe);border-radius:8px;border-left:3px solid #3b82f6;";
      _0x52dcc9.textContent = "选择要打开的窗口数量，窗口将自动平铺适应屏幕";
      const _0x249276 = document.createElement("label");
      _0x249276.textContent = "窗口数量";
      _0x249276.style.cssText = _0x10eb9e;
      const _0x142add = document.createElement("select");
      _0x142add.style.cssText = _0xafa84a + "margin-bottom:16px;cursor:pointer;appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 10px center;background-size:16px;padding-right:36px;";
      _0x142add.onfocus = () => {
        _0x142add.style.borderColor = "#8b5cf6";
        _0x142add.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.1)";
      };
      _0x142add.onblur = () => {
        _0x142add.style.borderColor = "#d1d5db";
        _0x142add.style.boxShadow = "none";
      };
      for (let _0x754f50 = 1; _0x754f50 <= 10; _0x754f50++) {
        const _0x3e438a = document.createElement("option");
        _0x3e438a.value = String(_0x754f50);
        _0x3e438a.textContent = _0x754f50 + " 个窗口（对应数据组1-" + _0x754f50 + "）";
        _0x142add.appendChild(_0x3e438a);
      }
      _0x142add.value = "4";
      const _0x209144 = document.createElement("label");
      _0x209144.style.cssText = _0x2dbe7a;
      _0x209144.onmouseover = () => _0x209144.style.background = "#f3f4f6";
      _0x209144.onmouseout = () => _0x209144.style.background = "#f9fafb";
      const _0x3dbf74 = document.createElement("input");
      _0x3dbf74.type = "checkbox";
      _0x3dbf74.checked = true;
      _0x3dbf74.style.cssText = _0x732a1f;
      const _0x42765f = document.createElement("span");
      _0x42765f.textContent = "自动填充（窗口1填充数据组1，依次类推）";
      _0x42765f.style.cssText = "font-size:13px;color:#374151;";
      _0x209144.append(_0x3dbf74, _0x42765f);
      const _0x22433c = document.createElement("label");
      _0x22433c.style.cssText = _0x2dbe7a;
      _0x22433c.onmouseover = () => _0x22433c.style.background = "#f3f4f6";
      _0x22433c.onmouseout = () => _0x22433c.style.background = "#f9fafb";
      const _0x5af06d = document.createElement("input");
      _0x5af06d.type = "checkbox";
      _0x5af06d.checked = false;
      _0x5af06d.style.cssText = _0x732a1f;
      const _0x2c06d4 = document.createElement("span");
      _0x2c06d4.textContent = "一键识别（自动OCR验证码并点击获取按钮）";
      _0x2c06d4.style.cssText = "font-size:13px;color:#374151;";
      _0x22433c.append(_0x5af06d, _0x2c06d4);
      const _0x188650 = document.createElement("label");
      _0x188650.style.cssText = _0x2dbe7a;
      _0x188650.onmouseover = () => _0x188650.style.background = "#f3f4f6";
      _0x188650.onmouseout = () => _0x188650.style.background = "#f9fafb";
      const _0x474d26 = document.createElement("input");
      _0x474d26.type = "checkbox";
      _0x474d26.checked = false;
      _0x474d26.style.cssText = _0x732a1f;
      const _0x285820 = document.createElement("span");
      _0x285820.textContent = "自定义窗口布局";
      _0x285820.style.cssText = "font-size:13px;color:#374151;";
      _0x188650.append(_0x474d26, _0x285820);
      const _0x309601 = document.createElement("div");
      _0x309601.style.cssText = "display:none;margin-bottom:16px;padding:12px;background:#f5f5f5;border-radius:8px;";
      const _0x153b26 = {
        label: "2+2",
        value: [2, 2],
        icon: "▢▢\n▢▢"
      };
      const _0x5a13ed = {
        label: "3+3",
        value: [3, 3],
        icon: "▢▢▢\n▢▢▢"
      };
      const _0x3bdac9 = {
        label: "2+2+2",
        value: [2, 2, 2],
        icon: "▢▢\n▢▢\n▢▢"
      };
      const _0x33eb5a = {
        label: "3+2",
        value: [3, 2],
        icon: "▢▢▢\n▢▢"
      };
      const _0x2ca692 = {
        label: "3+3+2",
        value: [3, 3, 2],
        icon: "▢▢▢\n▢▢▢\n▢▢"
      };
      const _0x30f3cc = {
        label: "4+4",
        value: [4, 4],
        icon: "▢▢▢▢\n▢▢▢▢"
      };
      const _0x47876f = {
        label: "4+4+2",
        value: [4, 4, 2],
        icon: "▢▢▢▢\n▢▢▢▢\n▢▢"
      };
      const _0x50c38 = [_0x153b26, _0x5a13ed, _0x3bdac9, _0x33eb5a, _0x2ca692, _0x30f3cc, _0x47876f];
      const _0x1b270a = document.createElement("div");
      _0x1b270a.style.cssText = "display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;";
      let _0x274aa9 = null;
      const _0x2780c2 = document.createElement("input");
      _0x2780c2.type = "hidden";
      _0x50c38.forEach(_0x24d171 => {
        const _0x52bb53 = document.createElement("button");
        _0x52bb53.type = "button";
        _0x52bb53.style.cssText = "padding:8px 4px;border:2px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;font-size:11px;transition:all 0.2s;";
        _0x52bb53.textContent = _0x24d171.label;
        _0x52bb53.title = _0x24d171.icon;
        _0x52bb53.onclick = () => {
          _0x1b270a.querySelectorAll("button").forEach(_0x5c3e00 => _0x5c3e00.style.borderColor = "#ddd");
          _0x52bb53.style.borderColor = "#6366f1";
          _0x52bb53.style.background = "#eef2ff";
          _0x274aa9 = _0x24d171.value;
          _0x2780c2.value = _0x24d171.value.join(",");
          _0x114297.value = _0x24d171.value.join(",");
        };
        _0x1b270a.appendChild(_0x52bb53);
      });
      const _0x63d84e = document.createElement("p");
      _0x63d84e.style.cssText = "font-size:12px;color:#666;margin-bottom:6px;";
      _0x63d84e.textContent = "或手动输入（上,中,下每行窗口数，两行则为上,下）";
      const _0x114297 = document.createElement("input");
      _0x114297.type = "text";
      _0x114297.placeholder = "如: 3,3,2 表示上3中3下2";
      _0x114297.style.cssText = "width:100%;padding:8px;border-radius:6px;border:1px solid #ddd;box-sizing:border-box;";
      _0x114297.oninput = () => {
        _0x2780c2.value = _0x114297.value;
        _0x1b270a.querySelectorAll("button").forEach(_0x377b05 => {
          _0x377b05.style.borderColor = "#ddd";
          _0x377b05.style.background = "#fff";
        });
      };
      _0x309601.append(_0x1b270a, _0x63d84e, _0x114297, _0x2780c2);
      _0x474d26.onchange = () => {
        _0x309601.style.display = _0x474d26.checked ? "block" : "none";
      };
      const _0x2e32e7 = document.createElement("div");
      _0x2e32e7.className = "sx-timed-fill-actions";
      const _0x4e66f6 = document.createElement("button");
      _0x4e66f6.className = "cancel";
      _0x4e66f6.textContent = "取消";
      const _0x283373 = document.createElement("button");
      _0x283373.className = "ok";
      _0x283373.textContent = "开始多开";
      _0x4e66f6.onclick = () => mask.remove();
      _0x283373.onclick = () => {
        const _0x47a8d4 = parseInt(_0x142add.value, 10);
        const _0x50c746 = window.location.href;
        const _0xd180c3 = _0x3dbf74.checked;
        const _0x1828d8 = _0x5af06d.checked;
        let _0x1e4d58 = null;
        const _0x4b8574 = _0x114297.value.trim() || _0x2780c2.value.trim();
        if (_0x474d26.checked && _0x4b8574) {
          const _0xccca15 = _0x4b8574.split(/[,，+]/).map(_0x1aff4e => parseInt(_0x1aff4e.trim(), 10)).filter(_0x3e3d06 => !isNaN(_0x3e3d06) && _0x3e3d06 > 0);
          if (_0xccca15.length > 0) {
            _0x1e4d58 = _0xccca15;
            const _0xb6aadc = _0xccca15.reduce((_0x1646b2, _0x830850) => _0x1646b2 + _0x830850, 0);
            if (_0xb6aadc !== _0x47a8d4) {
              alert("布局窗口总数(" + _0xb6aadc + ")与选择的窗口数量(" + _0x47a8d4 + ")不匹配");
              return;
            }
          }
        }
        const _0x24e8a5 = {
          action: "multiOpenWindows",
          count: _0x47a8d4,
          url: _0x50c746,
          autoFill: _0xd180c3,
          autoOcr: _0x1828d8,
          customLayout: _0x1e4d58
        };
        chrome.runtime.sendMessage(_0x24e8a5, _0x37d26d => {
          {
            _0x37d26d && _0x37d26d.success ? _0x5e1ffe.remove() : alert("多开失败：" + (_0x37d26d?.["error"] || "未知错误"));
          }
        });
      };
      _0x2e32e7.append(_0x4e66f6, _0x283373);
      _0x30c09c.append(_0x52dcc9, _0x249276, _0x142add, _0x209144, _0x22433c, _0x188650, _0x309601, _0x2e32e7);
      _0x5e1ffe.append(_0x5bb423, _0x116984);
      document.body.appendChild(_0x5e1ffe);
      _0x5bb423.querySelector(".sx-pane-minimize-btn").onclick = () => _0x5e1ffe.remove();
      _0x4e66f6.onclick = () => _0x5e1ffe.remove();
      let _0x3eeaca = false;
      let _0x2e8f05 = 0;
      let _0x2b9300 = 0;
      _0x5bb423.addEventListener("mousedown", _0x3bf321 => {
        if (_0x3bf321.target.closest(".sx-pane-minimize-btn")) {
          return;
        }
        _0x3eeaca = true;
        _0x5e1ffe.style.transform = "none";
        _0x2e8f05 = _0x3bf321.clientX - _0x5e1ffe.offsetLeft;
        _0x2b9300 = _0x3bf321.clientY - _0x5e1ffe.offsetTop;
        const _0x24cd41 = _0x29c5b2 => {
          if (!_0x3eeaca) {
            return;
          }
          const _0x4c44e1 = window.innerWidth - _0x5e1ffe.offsetWidth;
          const _0x2dabb5 = window.innerHeight - _0x5e1ffe.offsetHeight;
          _0x5e1ffe.style.left = Math.min(_0x4c44e1, Math.max(0, _0x29c5b2.clientX - _0x2e8f05)) + "px";
          _0x5e1ffe.style.top = Math.min(_0x2dabb5, Math.max(0, _0x29c5b2.clientY - _0x2b9300)) + "px";
        };
        const _0x155e7b = () => {
          _0x3eeaca = false;
          document.removeEventListener("mousemove", _0x24cd41);
        };
        document.addEventListener("mousemove", _0x24cd41);
        const _0x55296f = {
          once: true
        };
        document.addEventListener("mouseup", _0x155e7b, _0x55296f);
      });
    },
    openTimedFillDialog() {
      const _0x48eb98 = document.getElementById("sx-timed-fill-pane");
      if (_0x48eb98) {
        _0x48eb98.remove();
        return;
      }
      const _0x376acf = document.createElement("div");
      _0x376acf.id = "sx-timed-fill-pane";
      _0x376acf.className = "sx-pane";
      _0x376acf.style.cssText = "position:fixed;top:100px;left:50%;transform:translateX(-50%);width:380px;z-index:2147483646;";
      const _0x35c0a6 = document.createElement("div");
      _0x35c0a6.className = "sx-pane-head";
      _0x35c0a6.innerHTML = "<div class=\"sx-pane-head-left\"><span class=\"sx-pane-title\">⏰ 定时填充</span></div><div class=\"sx-pane-head-right\"><span style=\"opacity:.7;font-size:11px;\">拖拽移动</span><button class=\"sx-pane-minimize-btn\" title=\"关闭\">✕</button></div>";
      const _0x2b1562 = document.createElement("div");
      _0x2b1562.className = "sx-pane-body";
      _0x2b1562.style.padding = "16px";
      const _0x5c680c = _0x2b1562;
      const _0x5a5035 = document.createElement("div");
      const _0xe1dc93 = document.createElement("label");
      _0xe1dc93.textContent = "选择数据组";
      const _0x2610c6 = document.createElement("select");
      SXFormFill.savedData.groups.forEach((_0x3d89d6, _0x5f3002) => {
        const _0x965137 = document.createElement("option");
        _0x965137.value = String(_0x5f3002);
        const _0xcc6eee = _0x3d89d6.note && _0x3d89d6.note.trim() || _0x3d89d6.name && _0x3d89d6.name.trim() || "第 " + (_0x5f3002 + 1) + " 组";
        _0x965137.textContent = "第 " + (_0x5f3002 + 1) + " 组 · " + _0xcc6eee;
        _0x2610c6.appendChild(_0x965137);
      });
      const _0x4069f5 = document.createElement("label");
      _0x4069f5.textContent = "设定执行时间";
      const _0x76a4d2 = document.createElement("input");
      _0x76a4d2.type = "datetime-local";
      _0x76a4d2.step = "1";
      _0x76a4d2.value = SXUtils.formatDatetimeLocalInput(new Date(Date.now() + 60000));
      const _0x43277f = document.createElement("label");
      _0x43277f.className = "sx-timed-fill-option";
      const _0x56f103 = document.createElement("input");
      _0x56f103.type = "checkbox";
      _0x43277f.append(_0x56f103, document.createTextNode("一键预约模式（填充后自动OCR）"));
      const _0x58c3b = document.createElement("div");
      _0x58c3b.className = "sx-timed-fill-actions";
      const _0x59a5e8 = document.createElement("button");
      _0x59a5e8.className = "cancel";
      _0x59a5e8.textContent = "关闭";
      const _0x2d8b7f = document.createElement("button");
      _0x2d8b7f.className = "ok";
      _0x2d8b7f.textContent = "添加任务";
      _0x58c3b.append(_0x59a5e8, _0x2d8b7f);
      _0x5c680c.append(_0xe1dc93, _0x2610c6, _0x4069f5, _0x76a4d2, _0x43277f, _0x58c3b);
      _0x376acf.append(_0x35c0a6, _0x2b1562);
      document.body.appendChild(_0x376acf);
      _0x35c0a6.querySelector(".sx-pane-minimize-btn").onclick = () => _0x376acf.remove();
      _0x59a5e8.onclick = () => _0x376acf.remove();
      _0x2d8b7f.onclick = () => {
        {
          const _0x546351 = SXUtils.parseDatetimeLocalValue(_0x76a4d2.value);
          if (Number.isNaN(_0x546351) || _0x546351 <= Date.now()) {
            alert("请设置一个未来的时间");
            return;
          }
          alert("定时任务已添加！\n将在 " + new Date(_0x546351).toLocaleString() + " 执行填充");
          _0x376acf.remove();
        }
      };
      let _0x233cbf = false;
      let _0xc2f863 = 0;
      let _0xe91bb7 = 0;
      _0x35c0a6.addEventListener("mousedown", _0x72452b => {
        if (_0x72452b.target.closest(".sx-pane-minimize-btn")) {
          return;
        }
        _0x233cbf = true;
        _0x376acf.style.transform = "none";
        _0xc2f863 = _0x72452b.clientX - _0x376acf.offsetLeft;
        _0xe91bb7 = _0x72452b.clientY - _0x376acf.offsetTop;
        const _0x1846bc = _0x327a04 => {
          {
            if (!_0x233cbf) {
              return;
            }
            const _0xd29453 = window.innerWidth - _0x376acf.offsetWidth;
            const _0x4764f4 = window.innerHeight - _0x376acf.offsetHeight;
            _0x376acf.style.left = Math.min(_0xd29453, Math.max(0, _0x327a04.clientX - _0xc2f863)) + "px";
            _0x376acf.style.top = Math.min(_0x4764f4, Math.max(0, _0x327a04.clientY - _0xe91bb7)) + "px";
          }
        };
        const _0x4a7199 = () => {
          _0x233cbf = false;
          document.removeEventListener("mousemove", _0x1846bc);
        };
        document.addEventListener("mousemove", _0x1846bc);
        const _0x374fec = {
          once: true
        };
        document.addEventListener("mouseup", _0x4a7199, _0x374fec);
      });
    },
    startImagePicking() {
      this.pickingImage = true;
      this.setOCRStatus("<span class=\"warn\">请点击验证码图片或画布进行识别…</span>");
      const _0x3d962e = document.querySelectorAll("img, canvas");
      _0x3d962e.forEach(_0x95e363 => {
        _0x95e363.classList.add("sx-ocr-highlight");
      });
      const _0x17fc87 = () => {
        this.pickingImage = false;
        _0x3d962e.forEach(_0x38419a => {
          _0x38419a.classList.remove("sx-ocr-highlight");
        });
        document.removeEventListener("click", _0x3eb3d0, true);
        document.removeEventListener("keydown", _0x285175, true);
      };
      const _0x3eb3d0 = async _0x3dd482 => {
        const _0x29a05f = _0x3dd482.target;
        if (_0x29a05f instanceof HTMLImageElement || _0x29a05f instanceof HTMLCanvasElement) {
          {
            _0x3dd482.preventDefault();
            _0x3dd482.stopPropagation();
            _0x17fc87();
            this.setOCRStatus("<span class=\"warn\">正在截取验证码图片...</span>");
            try {
              this.setOCRStatus("<span class=\"warn\">正在截取图片...</span>");
              let _0x545f95;
              if (_0x29a05f instanceof HTMLCanvasElement) {
                _0x545f95 = _0x29a05f;
              } else {
                if (_0x29a05f instanceof HTMLImageElement) {
                  _0x545f95 = document.createElement("canvas");
                  const _0x4a2775 = _0x29a05f.naturalWidth || _0x29a05f.width;
                  const _0x27781d = _0x29a05f.naturalHeight || _0x29a05f.height;
                  _0x545f95.width = _0x4a2775;
                  _0x545f95.height = _0x27781d;
                  try {
                    _0x545f95.getContext("2d").drawImage(_0x29a05f, 0, 0, _0x4a2775, _0x27781d);
                    _0x545f95.toDataURL();
                  } catch (_0x2b865e) {
                    this.setOCRStatus("<span class=\"warn\">检测到跨域图片，使用截图方式...</span>");
                    const _0x5c846f = _0x29a05f.getBoundingClientRect();
                    const _0x42d0c4 = await new Promise((_0x5d2978, _0x4c38dc) => {
                      const _0x133564 = {
                        action: "captureVisibleTab"
                      };
                      chrome.runtime.sendMessage(_0x133564, _0x3779fc => {
                        if (_0x3779fc && _0x3779fc.success) {
                          _0x5d2978(_0x3779fc.dataUrl);
                        } else {
                          _0x4c38dc(new Error(_0x3779fc?.["error"] || "截图失败"));
                        }
                      });
                    });
                    const _0x320e73 = new Image();
                    await new Promise((_0x159dd4, _0x5d221c) => {
                      {
                        _0x320e73.onload = _0x159dd4;
                        _0x320e73.onerror = () => _0x5d221c(new Error("截图加载失败"));
                        _0x320e73.src = _0x42d0c4;
                      }
                    });
                    const _0x52313b = window.devicePixelRatio || 1;
                    _0x545f95 = document.createElement("canvas");
                    _0x545f95.width = _0x5c846f.width * _0x52313b;
                    _0x545f95.height = _0x5c846f.height * _0x52313b;
                    _0x545f95.getContext("2d").drawImage(_0x320e73, _0x5c846f.left * _0x52313b, _0x5c846f.top * _0x52313b, _0x5c846f.width * _0x52313b, _0x5c846f.height * _0x52313b, 0, 0, _0x5c846f.width * _0x52313b, _0x5c846f.height * _0x52313b);
                  }
                }
              }
              this.setOCRStatus("<span class=\"warn\">截图完成，开始识别...</span>");
              await this.runOCR(_0x545f95);
            } catch (_0x589f20) {
              const _0x570735 = _0x589f20 instanceof Error ? _0x589f20.message : String(_0x589f20);
              this.setOCRStatus("<span class=\"err\">图片截取失败：" + _0x570735 + "</span>");
            }
          }
        }
      };
      const _0x285175 = _0x361821 => {
        _0x361821.key === "Escape" && (_0x17fc87(), this.setOCRStatus("<span class=\"warn\">已取消选择</span>"), setTimeout(() => this.setOCRStatus(""), 2000));
      };
      document.addEventListener("click", _0x3eb3d0, true);
      document.addEventListener("keydown", _0x285175, true);
    },
    createSettingsPanel() {
      const _0x2fced9 = document.createElement("div");
      _0x2fced9.className = "autofill-settings";
      let _0x23e46d = "\n        <style>\n        .autofill-settings .btm {\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 15px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            backdrop-filter: blur(3px);\n            -webkit-backdrop-filter: blur(10px);\n            padding: 20px;\n            width: 600px;\n            text-align: center;\n            color: #fff;\n            font-family: 'Arial', sans-serif;\n            margin: 0 auto;\n        }\n        .autofill-settings .btm-1 {\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 15px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            backdrop-filter: blur(30px);\n            -webkit-backdrop-filter: blur(10px);\n            padding: 20px;\n            width: 400px;\n            text-align: center;\n            color: #fff;\n            font-family: 'Arial', sans-serif;\n            margin: 0 auto;\n        }\n        .autofill-settings .btm-2 {\n            background: rgba(255, 255, 255, 0.2);\n            border-radius: 15px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            backdrop-filter: blur(3px);\n            -webkit-backdrop-filter: blur(10px);\n            padding: 10px;\n            width: 300px;\n            text-align: center;\n            color: #fff;\n            margin: 10px auto;\n            display: block;\n            clear: both;\n        }\n        .autofill-settings h4 { text-align: center; font-size: 20px; color: #fff; }\n        .autofill-settings > .btm h3, .autofill-settings > .btm-1 h3, .autofill-settings > .btm-2 h3 { font-size: 28px; color: #fff; }\n        .autofill-settings .group label.hint { \n          color: #764ba2; \n          font-size: 11px; \n          line-height: 1.4;\n          padding: 5px;\n          background: rgba(118,75,162,0.1);\n          border: 1px solid rgba(118,75,162,0.3);\n          border-radius: 4px;\n          margin-bottom: 8px;\n        }\n        .autofill-settings .image-container { text-align: center; margin: 20px 0; display: block !important; }\n        .autofill-settings .image-container img { \n          width: 100px !important; \n          height: 100px !important; \n          max-width: 100px !important;\n          max-height: 100px !important;\n          min-width: 100px !important;\n          min-height: 100px !important;\n          border-radius: 60px !important; \n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;\n          display: inline-block !important;\n          object-fit: cover !important;\n          position: relative !important;\n          float: none !important;\n          margin: 0 auto !important;\n          padding: 0 !important;\n          border: none !important;\n          background: transparent !important;\n        }\n        @keyframes rainbowBackground { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }\n        .autofill-settings .rainbow-title {\n          font-size: 35px; text-align: center;\n          background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);\n          background-size: 400% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;\n          animation: rainbowBackground 7s linear infinite;\n        }\n        .autofill-settings .but { margin: 0 auto; padding: 20px; }\n        .autofill-settings .but button { padding: 10px 30px; margin: 0 10px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; }\n        .autofill-settings .but .cancel { background: #6b7280; color: white; }\n        .autofill-settings .but .save { background: linear-gradient(135deg, #10b981, #34d399); color: white; }\n        .autofill-settings .floating-window {\n            position: fixed; top: 50%; right: 20px; width: 150px;\n            background: rgba(255,255,255,0.2); border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); color: white; padding: 15px; z-index: 2147483647;\n            font-family: 'Arial', sans-serif; text-align: center; transform: translateY(-50%);\n        }\n        .autofill-settings .floating-window h5 {\n          font-size: 16px; text-align: center; margin: 5px 0;\n          background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);\n          background-size: 400% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;\n          animation: rainbowBackground 7s linear infinite;\n        }\n        .autofill-settings .resize-hint {\n          position: sticky;\n          bottom: 0;\n          right: 0;\n          text-align: right;\n          padding: 8px 15px;\n          background: linear-gradient(135deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9));\n          color: white;\n          font-size: 12px;\n          cursor: se-resize;\n          border-radius: 8px 0 10px 0;\n          margin-left: auto;\n          width: fit-content;\n        }\n        .autofill-settings .resize-hint:hover {\n          background: linear-gradient(135deg, rgba(118,75,162,1), rgba(102,126,234,1));\n        }\n        .sx-settings-drag-head {\n          display:flex;\n          justify-content:space-between;\n          align-items:center;\n        }\n        .sx-settings-close-btn {\n          background:transparent;\n          border:none;\n          color:#fff;\n          font-size:20px;\n          cursor:pointer;\n          padding:0 8px;\n          line-height:1;\n        }\n        .sx-settings-close-btn:hover { color:#ffd2d2; }\n        </style>\n        <div class=\"sx-settings-drag-head\">\n          <div>\n            <span>填充设置（拖拽可移动面板）</span>\n            <span style=\"font-size:12px;margin-left:8px;\">右下角拉动可缩放设置面板</span>\n          </div>\n          <button class=\"sx-settings-close-btn\" title=\"关闭设置面板\">点我关闭面板</button>\n        </div>\n        <div class=\"image-container\">\n          <img src=\"https://sxian.sznxwl.com/img/ikun.jpg\" alt=\"avatar\" />\n        </div>\n        <div class=\"btm-1\"><h1 class=\"rainbow-title\">上仙纪念钞预约助手</h1></div>\n        <br>\n        <div class=\"btm\">\n          <h3>使用说明</h3>\n          <h4>1.现在预约脚本完美支持Pc使用.<br>\n          2.脚本填充现已支持全部纪念币承办银行.<br>\n          3.使用前在设置内输入每组数据 目前支持10组.<br>\n          4.网点一键填充支持：建/农/工/建.<br>其它银行网点填充自测 有翻车可能.<br>\n          5.OCR识别英文或数字效验码：<br>由于个别银行防护可能识别率较低（可自行开关）.<br>\n          5.此工具仅用于参考交流学习.</h4>\n          <div class=\"but\"><button class=\"cancel\">关闭</button><button class=\"save\">保存</button></div>\n        </div>\n        <div style=\"display:flex;gap:15px;margin:10px 15px 20px 15px;flex-wrap:wrap;\">\n          <!-- 左侧：全局设置 -->\n          <div style=\"flex:1;min-width:280px;\">\n            <div class=\"btm-2\" style=\"margin-bottom:10px;\"><h3>全局设置：</h3></div>\n            <div style=\"background:rgba(255,255,255,0.2);border-radius:12px;padding:16px;border:1px solid rgba(255,255,255,0.2);height:calc(100% - 50px);box-sizing:border-box;box-shadow:0 4px 8px rgba(0,0,0,0.2);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(10px);\">\n              <div style=\"margin-bottom:12px;\">\n                <label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;margin:0;\">\n                  <input type=\"checkbox\" id=\"sx-auto-agree\" " + (StorageCache.get("sx_auto_agree", false) ? "checked" : "") + " style=\"width:18px;height:18px;cursor:pointer;\">\n                  <span style=\"color:#22c55e;font-weight:600;font-size:14px;\">✅ 自动勾选「我已阅读并同意」</span>\n                </label>\n                <div style=\"margin-top:6px;background:linear-gradient(to right,#ecfdf5,#d1fae5);padding:8px 10px;border-radius:6px;border-left:3px solid #22c55e;font-size:11px;color:#065f46;\">\n                  💡 <b>说明：</b>开启后，填充表单时会自动勾选工行/中行/建行预约页面的「我已阅读并同意」复选框\n                </div>\n              </div>\n              <div>\n                <label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;margin:0;\">\n                  <input type=\"checkbox\" id=\"sx-auto-sort\" " + (StorageCache.get("sx_auto_sort", false) ? "checked" : "") + " style=\"width:18px;height:18px;cursor:pointer;\">\n                  <span style=\"color:#3b82f6;font-weight:600;font-size:14px;\">🔢 自动排序每组数据</span>\n                </label>\n                <div style=\"margin-top:6px;background:linear-gradient(to right,#eff6ff,#dbeafe);padding:8px 10px;border-radius:6px;border-left:3px solid #3b82f6;font-size:11px;color:#1e40af;\">\n                  💡 <b>说明：</b>开启后，如果某组数据被清空，后面的数据会自动往前排序填补空位\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- 右侧：导入导出 -->\n          <div style=\"flex:1;min-width:280px;\">\n            <div class=\"btm-2\" style=\"margin-bottom:10px;\"><h3>导入导出数据：</h3></div>\n            <div style=\"background:rgba(255,255,255,0.2);border-radius:12px;padding:16px;border:1px solid rgba(255,255,255,0.2);height:calc(100% - 50px);box-sizing:border-box;box-shadow:0 4px 8px rgba(0,0,0,0.2);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(10px);\">\n              <div style=\"display:flex;align-items:center;gap:10px;flex-wrap:wrap;\">\n                <button id=\"sx-import-csv-btn\" type=\"button\" style=\"padding:10px 16px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;\">📥 导入数据</button>\n                <button id=\"sx-export-csv-btn\" type=\"button\" style=\"padding:10px 16px;background:linear-gradient(135deg,#10b981,#34d399);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;\">📤 导出数据</button>\n                <button id=\"sx-download-template-btn\" type=\"button\" style=\"padding:10px 16px;background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;\">📋 下载模板</button>\n                <input type=\"file\" id=\"sx-csv-file-input\" accept=\".csv,.tsv,.xlsx,.xls,.xml,.txt\" style=\"display:none;\">\n              </div>\n              <div style=\"margin-top:12px;background:linear-gradient(to right,#eff6ff,#dbeafe);padding:10px;border-radius:6px;border-left:3px solid #3b82f6;font-size:11px;color:#1e40af;\">\n                💡 <b>说明：</b>支持xml格式一键填充下方10组数据，下载模板用Excel软件打开填写好数据即可快速导入。<br>列顺序：姓名、身份证号、手机号、银行网点、预约数量、备注、用自己手机(1=勾选/0=不勾选)\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"btm-2\" style=\"margin:50px auto 15px auto;display:block;clear:both;position:relative;\"><h3>自动填充设置：</h3></div>\n        <div class=\"grid-container\" style=\"position:relative;z-index:1;\">\n      ";
      const _0xa3ec28 = _0x254db0 => String(_0x254db0 || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      SXFormFill.savedData.groups.forEach((_0x389d14, _0x3d05e1) => {
        _0x23e46d += "<div class=\"group\" data-group-index=\"" + _0x3d05e1 + "\">\n          <div class=\"group-header\">\n            <h3>第 " + (_0x3d05e1 + 1) + " 组数据</h3>\n            <button class=\"clear-group-btn\" data-group=\"" + _0x3d05e1 + "\" type=\"button\">清空</button>\n          </div>\n          <label>姓名：</label>\n          <input type=\"text\" class=\"name-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.name) + "\">\n          <label>身份证号：</label>\n          <input type=\"text\" class=\"idcard-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.idCard) + "\">\n          <label>手机号：</label>\n          <input type=\"text\" class=\"phone-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.phone) + "\">\n          <div style=\"margin:8px 0;display:flex;align-items:center;gap:8px;\">\n            <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;margin:0;\">\n              <input type=\"checkbox\" class=\"use-own-phone\" data-group=\"" + _0x3d05e1 + "\" " + (_0x389d14.useOwnPhone ? "checked" : "") + " style=\"width:16px;height:16px;cursor:pointer;\">\n              <span style=\"color:#10b981;font-weight:600;\">📲 使用自己手机接收验证码</span>\n            </label>\n          </div>\n          <div class=\"own-phone-hint\" data-group=\"" + _0x3d05e1 + "\" style=\"display:" + (_0x389d14.useOwnPhone ? "block" : "none") + ";margin-bottom:8px;background:linear-gradient(to right,#ecfdf5,#d1fae5);padding:8px;border-radius:6px;border-left:3px solid #10b981;font-size:11px;color:#065f46;\">\n            📱 <b>使用自己手机：</b>在手机上安装短信转发APP，填充时会自动监控你的手机收到的验证码\n          </div>\n          <div class=\"keep-sms-popup-row\" data-group=\"" + _0x3d05e1 + "\" style=\"display:" + (_0x389d14.useOwnPhone ? "block" : "none") + ";margin:8px 0;\">\n            <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;margin:0;\">\n              <input type=\"checkbox\" class=\"keep-sms-popup\" data-group=\"" + _0x3d05e1 + "\" " + (_0x389d14.keepSmsPopup ? "checked" : "") + " style=\"width:16px;height:16px;cursor:pointer;\">\n              <span style=\"color:#f59e0b;font-weight:600;\">🔄 刷新不关闭监测短信悬浮窗</span>\n            </label>\n            <div style=\"margin-top:4px;background:linear-gradient(to right,#fffbeb,#fef3c7);padding:8px;border-radius:6px;border-left:3px solid #f59e0b;font-size:11px;color:#92400e;\">\n              ⚠️ <b>说明：</b>勾选后，刷新页面也不会关闭监测短信悬浮窗，只能等监测120秒结束或者用户手动去关闭。<br>此功能对于部分银行验证码输入框不在第一级页面有所帮助，避免因为刷新关闭导致在第二级页面无法填充监测短信码。\n            </div>\n          </div>\n          <div class=\"hide-phone-middle-row\" data-group=\"" + _0x3d05e1 + "\" style=\"display:" + (_0x389d14.useOwnPhone ? "block" : "none") + ";margin:8px 0;\">\n            <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;margin:0;\">\n              <input type=\"checkbox\" class=\"hide-phone-middle\" data-group=\"" + _0x3d05e1 + "\" " + (_0x389d14.hidePhoneMiddle ? "checked" : "") + " style=\"width:16px;height:16px;cursor:pointer;\">\n              <span style=\"color:#8b5cf6;font-weight:600;\">🔒 隐藏悬浮窗手机号中间四位</span>\n            </label>\n            <div style=\"margin-top:4px;background:linear-gradient(to right,#f5f3ff,#ede9fe);padding:8px;border-radius:6px;border-left:3px solid #8b5cf6;font-size:11px;color:#5b21b6;\">\n              🔒 <b>说明：</b>勾选后，监控悬浮窗中的手机号会显示为 132****9172 格式，保护隐私。\n            </div>\n          </div>\n          <label style=\"margin-top:8px;color:#667eea;font-weight:600;\" class=\"sms-platform-label\" data-group=\"" + _0x3d05e1 + "\">📱 接码平台设置：</label>\n          <div class=\"sms-platform-row\" data-group=\"" + _0x3d05e1 + "\" style=\"position:relative;margin:4px 0 8px 0;box-sizing:border-box;display:" + (_0x389d14.useOwnPhone ? "none" : "block") + ";\">\n            <input type=\"text\" class=\"sid-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" placeholder=\"输入项目ID或搜索短信签名...\" style=\"width:100%;padding:10px 12px;border:2px solid #e0e7ff;border-radius:8px;font-size:13px;transition:border-color 0.2s;box-sizing:border-box;\" value=\"" + _0xa3ec28(_0x389d14.smsSid || "") + "\" autocomplete=\"off\">\n            <div class=\"sid-dropdown\" data-group=\"" + _0x3d05e1 + "\" style=\"display:none;position:absolute;top:100%;left:0;right:0;max-height:200px;overflow-y:auto;background:#fff;border:2px solid #667eea;border-top:none;border-radius:0 0 8px 8px;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.15);\"></div>\n          </div>\n          <div class=\"sms-status\" data-group=\"" + _0x3d05e1 + "\" style=\"font-size:11px;color:#666;margin-bottom:8px;display:none;padding:8px;background:#f3f4f6;border-radius:6px;\"></div>\n          <label class=\"hint sms-platform-hint\" data-group=\"" + _0x3d05e1 + "\" style=\"margin-bottom:8px;background:linear-gradient(to right,#f0f9ff,#e0f2fe);padding:8px;border-radius:6px;border-left:3px solid #0ea5e9;display:" + (_0x389d14.useOwnPhone ? "none" : "block") + ";\">💡 <b>使用说明：</b>用户直接勾选√使用自己手机接收验证码，接码平台设置请留空即可！</label>\n          <label>银行网点：</label>\n          <input type=\"text\" class=\"branch-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.bankBranch) + "\">\n          <label class=\"hint\">①输入规范示例：xx省(自治区) xx市 xx区 xx行<br>②直辖市不写省 规范示例：天津市 xx区 xx行<br>③【省 区 市 行】每级之间要有一个空格<br>④最后支/分行名称 严格按银行公布计划填<br>⑤重要提示：网点可不填 小部分银行有概率翻车 尽量手动 等验证码的时间就可以自己选好</label>\n          <label>预约数量：</label>\n          <input type=\"text\" class=\"amount-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.reservationAmount) + "\">\n          <label class=\"hint\">按需选择，默认20即可，每人最大预约数量</label>\n          <label>备注：</label>\n          <input type=\"text\" class=\"note-input\" data-group=\"" + _0x3d05e1 + "\" data-sx-ext=\"1\" value=\"" + _0xa3ec28(_0x389d14.note) + "\">\n          <label class=\"hint\">这里可以填这组数据的备注<br>备注会显示在填充按钮上方便识别</label>\n        </div>";
      });
      _0x23e46d += "</div>\n        <div class=\"floating-window\">\n          <span>上仙QQ：</span><h5>76541609</h5>\n          <span>微信公众号：</span><h5>上仙圈圈</h5>\n        </div>\n        <div class=\"resize-hint\" title=\"拖动右下角可调整窗口大小\">\n          <span>↘ 拖动右下角改变悬浮窗大小</span>\n        </div>\n      ";
      _0x2fced9.innerHTML = _0x23e46d;
      document.body.appendChild(_0x2fced9);
      const _0x2c3d0a = _0x2fced9.querySelector(".sx-settings-close-btn");
      _0x2c3d0a && _0x2c3d0a.addEventListener("click", () => {
        _0x2fced9.style.display = "none";
      });
      const _0x34757a = StorageCache.get("sx_settings_panel_size", null);
      if (_0x34757a && _0x34757a.width && _0x34757a.height) {
        {
          _0x2fced9.style.width = _0x34757a.width + "px";
          _0x2fced9.style.height = _0x34757a.height + "px";
        }
      }
      const _0x303780 = new ResizeObserver(_0x4d28da => {
        for (const _0x13a672 of _0x4d28da) {
          {
            const {
              width: _0x2890f4,
              height: _0x2028bf
            } = _0x13a672.contentRect;
            _0x2890f4 > 100 && _0x2028bf > 100 && StorageCache.set("sx_settings_panel_size", {
              width: Math.round(_0x2890f4),
              height: Math.round(_0x2028bf)
            });
          }
        }
      });
      _0x303780.observe(_0x2fced9);
      const _0x66b0af = _0x2fced9.querySelector(".sx-settings-drag-head");
      let _0x2d5ce3 = false;
      let _0x47b9ca = 0;
      let _0x2b84f8 = 0;
      _0x66b0af.addEventListener("mousedown", _0x33cb76 => {
        _0x2d5ce3 = true;
        const _0x3de283 = _0x2fced9.getBoundingClientRect();
        _0x47b9ca = _0x33cb76.clientX - _0x3de283.left;
        _0x2b84f8 = _0x33cb76.clientY - _0x3de283.top;
        _0x2fced9.style.position = "fixed";
        _0x2fced9.style.transform = "none";
        _0x2fced9.style.margin = "0";
        const _0x4639ff = _0x6f5d82 => {
          if (!_0x2d5ce3) {
            return;
          }
          const _0x18be0a = window.innerWidth - _0x2fced9.offsetWidth;
          const _0x519563 = window.innerHeight - _0x2fced9.offsetHeight;
          _0x2fced9.style.left = Math.min(_0x18be0a, Math.max(0, _0x6f5d82.clientX - _0x47b9ca)) + "px";
          _0x2fced9.style.top = Math.min(_0x519563, Math.max(0, _0x6f5d82.clientY - _0x2b84f8)) + "px";
        };
        const _0x5e8285 = () => {
          _0x2d5ce3 = false;
          document.removeEventListener("mousemove", _0x4639ff);
        };
        document.addEventListener("mousemove", _0x4639ff);
        const _0x2830ec = {
          once: true
        };
        document.addEventListener("mouseup", _0x5e8285, _0x2830ec);
      });
      _0x2fced9.querySelector(".save").onclick = () => {
        for (let _0x2cf022 = 0; _0x2cf022 < 10; _0x2cf022++) {
          SXFormFill.savedData.groups[_0x2cf022] = {
            name: _0x2fced9.querySelector(".name-input[data-group=\"" + _0x2cf022 + "\"]").value,
            idCard: _0x2fced9.querySelector(".idcard-input[data-group=\"" + _0x2cf022 + "\"]").value,
            phone: _0x2fced9.querySelector(".phone-input[data-group=\"" + _0x2cf022 + "\"]").value,
            bankBranch: _0x2fced9.querySelector(".branch-input[data-group=\"" + _0x2cf022 + "\"]").value,
            reservationAmount: _0x2fced9.querySelector(".amount-input[data-group=\"" + _0x2cf022 + "\"]").value,
            note: _0x2fced9.querySelector(".note-input[data-group=\"" + _0x2cf022 + "\"]").value,
            smsSid: _0x2fced9.querySelector(".sid-input[data-group=\"" + _0x2cf022 + "\"]").value,
            useOwnPhone: _0x2fced9.querySelector(".use-own-phone[data-group=\"" + _0x2cf022 + "\"]").checked,
            keepSmsPopup: _0x2fced9.querySelector(".keep-sms-popup[data-group=\"" + _0x2cf022 + "\"]")?.["checked"] || false,
            hidePhoneMiddle: _0x2fced9.querySelector(".hide-phone-middle[data-group=\"" + _0x2cf022 + "\"]")?.["checked"] || false
          };
        }
        const _0x9a8212 = _0x2fced9.querySelector("#sx-auto-agree");
        const _0x162a82 = _0x2fced9.querySelector("#sx-auto-sort");
        _0x9a8212 && StorageCache.set("sx_auto_agree", _0x9a8212.checked);
        _0x162a82 && StorageCache.set("sx_auto_sort", _0x162a82.checked);
        if (_0x162a82?.["checked"]) {
          const _0x579509 = SXFormFill.savedData.groups;
          const _0x2709c5 = [];
          const _0x3f7936 = [];
          for (let _0x72194d = 0; _0x72194d < _0x579509.length; _0x72194d++) {
            {
              const _0x4f04ec = _0x579509[_0x72194d];
              const _0x4dda43 = _0x4f04ec.name && _0x4f04ec.name.trim() || _0x4f04ec.idCard && _0x4f04ec.idCard.trim() || _0x4f04ec.phone && _0x4f04ec.phone.trim();
              if (_0x4dda43) {
                _0x2709c5.push(_0x4f04ec);
              } else {
                const _0x2474c8 = {
                  name: "",
                  idCard: "",
                  phone: "",
                  note: "",
                  smsSid: "",
                  useOwnPhone: false,
                  keepSmsPopup: false,
                  hidePhoneMiddle: false
                };
                _0x3f7936.push(_0x2474c8);
              }
            }
          }
          SXFormFill.savedData.groups = [..._0x2709c5, ..._0x3f7936.slice(0, _0x579509.length - _0x2709c5.length)];
          while (SXFormFill.savedData.groups.length < 10) {
            {
              const _0x2e7c3a = {
                name: "",
                idCard: "",
                phone: "",
                note: "",
                smsSid: "",
                useOwnPhone: false,
                keepSmsPopup: false,
                hidePhoneMiddle: false
              };
              SXFormFill.savedData.groups.push(_0x2e7c3a);
            }
          }
        }
        SXFormFill.saveData();
        _0x2fced9.style.display = "none";
        alert("✅ 数据已保存！");
        location.reload();
      };
      _0x2fced9.querySelectorAll(".use-own-phone").forEach(_0x27d050 => {
        {
          _0x27d050.addEventListener("change", _0xe086a8 => {
            {
              const _0x58ec2e = _0x27d050.getAttribute("data-group");
              const _0x4c884b = _0x27d050.checked;
              const _0x46dc11 = _0x2fced9.querySelector(".own-phone-hint[data-group=\"" + _0x58ec2e + "\"]");
              const _0x2321eb = _0x2fced9.querySelector(".keep-sms-popup-row[data-group=\"" + _0x58ec2e + "\"]");
              const _0x5e91d7 = _0x2fced9.querySelector(".hide-phone-middle-row[data-group=\"" + _0x58ec2e + "\"]");
              const _0x3702e3 = _0x2fced9.querySelector(".sms-platform-row[data-group=\"" + _0x58ec2e + "\"]");
              const _0x438b62 = _0x2fced9.querySelector(".sms-platform-label[data-group=\"" + _0x58ec2e + "\"]");
              const _0x5db8e5 = _0x2fced9.querySelector(".sms-platform-hint[data-group=\"" + _0x58ec2e + "\"]");
              _0x46dc11.style.display = _0x4c884b ? "block" : "none";
              if (_0x2321eb) {
                _0x2321eb.style.display = _0x4c884b ? "block" : "none";
              }
              if (_0x5e91d7) {
                _0x5e91d7.style.display = _0x4c884b ? "block" : "none";
              }
              _0x3702e3.style.display = _0x4c884b ? "none" : "block";
              if (_0x438b62) {
                _0x438b62.style.display = _0x4c884b ? "none" : "block";
              }
              if (_0x5db8e5) {
                _0x5db8e5.style.display = _0x4c884b ? "none" : "block";
              }
            }
          });
        }
      });
      _0x2fced9.querySelector(".cancel").onclick = () => _0x2fced9.style.display = "none";
      const _0x33dbdc = _0x2fced9.querySelector("#sx-csv-file-input");
      _0x2fced9.querySelector("#sx-download-template-btn").onclick = () => {
        const _0x166931 = [["姓名", "身份证号", "手机号", "银行网点", "预约数量", "备注", "是否勾选使用自己手机接收验证码（填1为勾选/0为不勾选）"], ["张三", "110101199001011234", "13800138001", "北京市 海淀区 中关村支行", "20", "示例数据1", "1"], ["李四", "110101199002022345", "13900139002", "上海市 浦东新区 陆家嘴支行", "20", "示例数据2", "0"], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""], ["", "", "", "", "", "", ""]];
        let _0x31c1f1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        _0x31c1f1 += "<?mso-application progid=\"Excel.Sheet\"?>\n";
        _0x31c1f1 += "<Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\n";
        _0x31c1f1 += " xmlns:o=\"urn:schemas-microsoft-com:office:office\"\n";
        _0x31c1f1 += " xmlns:x=\"urn:schemas-microsoft-com:office:excel\"\n";
        _0x31c1f1 += " xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\">\n";
        _0x31c1f1 += "<Styles>\n";
        _0x31c1f1 += "  <Style ss:ID=\"Default\" ss:Name=\"Normal\"><Font ss:FontName=\"宋体\" ss:Size=\"11\"/></Style>\n";
        _0x31c1f1 += "  <Style ss:ID=\"s1\"><NumberFormat ss:Format=\"@\"/></Style>\n";
        _0x31c1f1 += "</Styles>\n";
        _0x31c1f1 += "<Worksheet ss:Name=\"填充数据\">\n";
        _0x31c1f1 += "<Table>\n";
        _0x166931.forEach((_0xcaee78, _0x439e9b) => {
          {
            _0x31c1f1 += "  <Row>\n";
            _0xcaee78.forEach((_0x163754, _0xa08043) => {
              const _0x58b1a8 = _0xa08043 === 1 && _0x439e9b > 0 ? " ss:StyleID=\"s1\"" : "";
              _0x31c1f1 += "    <Cell" + _0x58b1a8 + "><Data ss:Type=\"String\">" + (_0x163754 || "") + "</Data></Cell>\n";
            });
            _0x31c1f1 += "  </Row>\n";
          }
        });
        _0x31c1f1 += "</Table>\n";
        _0x31c1f1 += "</Worksheet>\n";
        _0x31c1f1 += "</Workbook>";
        const _0x11efc8 = {
          type: "application/vnd.ms-excel"
        };
        const _0x53ed79 = new Blob([_0x31c1f1], _0x11efc8);
        const _0x2d5e2f = URL.createObjectURL(_0x53ed79);
        const _0x1d3e35 = document.createElement("a");
        _0x1d3e35.href = _0x2d5e2f;
        _0x1d3e35.download = "填充数据导入模板.xml";
        _0x1d3e35.click();
        URL.revokeObjectURL(_0x2d5e2f);
      };
      _0x2fced9.querySelector("#sx-export-csv-btn").onclick = () => {
        const _0x1068fd = ["姓名", "身份证号", "手机号", "银行网点", "预约数量", "备注", "是否勾选使用自己手机接收验证码（填1为勾选/0为不勾选）"];
        const _0x485c45 = SXFormFill.savedData.groups.map(_0xaf7680 => {
          return [_0xaf7680.name || "", _0xaf7680.idCard || "", _0xaf7680.phone || "", _0xaf7680.bankBranch || "", _0xaf7680.reservationAmount || "", _0xaf7680.note || "", _0xaf7680.useOwnPhone ? "1" : "0"];
        });
        let _0x2d5b94 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
        _0x2d5b94 += "<?mso-application progid=\"Excel.Sheet\"?>\n";
        _0x2d5b94 += "<Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\n";
        _0x2d5b94 += " xmlns:o=\"urn:schemas-microsoft-com:office:office\"\n";
        _0x2d5b94 += " xmlns:x=\"urn:schemas-microsoft-com:office:excel\"\n";
        _0x2d5b94 += " xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\">\n";
        _0x2d5b94 += "<Styles>\n";
        _0x2d5b94 += "  <Style ss:ID=\"Default\" ss:Name=\"Normal\"><Font ss:FontName=\"宋体\" ss:Size=\"11\"/></Style>\n";
        _0x2d5b94 += "  <Style ss:ID=\"s1\"><NumberFormat ss:Format=\"@\"/></Style>\n";
        _0x2d5b94 += "</Styles>\n";
        _0x2d5b94 += "<Worksheet ss:Name=\"填充数据\">\n";
        _0x2d5b94 += "<Table>\n";
        _0x2d5b94 += "  <Row>\n";
        _0x1068fd.forEach(_0x490933 => {
          _0x2d5b94 += "    <Cell><Data ss:Type=\"String\">" + _0x490933 + "</Data></Cell>\n";
        });
        _0x2d5b94 += "  </Row>\n";
        _0x485c45.forEach(_0x4c45ad => {
          _0x2d5b94 += "  <Row>\n";
          _0x4c45ad.forEach((_0x17434b, _0x51f160) => {
            const _0x535adc = _0x51f160 === 1 && _0x17434b ? " ss:StyleID=\"s1\"" : "";
            _0x2d5b94 += "    <Cell" + _0x535adc + "><Data ss:Type=\"String\">" + (_0x17434b || "") + "</Data></Cell>\n";
          });
          _0x2d5b94 += "  </Row>\n";
        });
        _0x2d5b94 += "</Table>\n";
        _0x2d5b94 += "</Worksheet>\n";
        _0x2d5b94 += "</Workbook>";
        const _0x62b1fa = {
          type: "application/vnd.ms-excel"
        };
        const _0x54f911 = new Blob([_0x2d5b94], _0x62b1fa);
        const _0x543453 = URL.createObjectURL(_0x54f911);
        const _0x3b3c29 = document.createElement("a");
        _0x3b3c29.href = _0x543453;
        _0x3b3c29.download = "填充数据导出_" + new Date().toISOString().slice(0, 10) + ".xml";
        _0x3b3c29.click();
        URL.revokeObjectURL(_0x543453);
      };
      _0x2fced9.querySelector("#sx-import-csv-btn").onclick = () => _0x33dbdc.click();
      _0x33dbdc.onchange = async _0x563598 => {
        const _0x4cc79d = _0x563598.target.files[0];
        if (!_0x4cc79d) {
          return;
        }
        try {
          let _0x3fbc7e = "";
          const _0x3fec8a = await _0x4cc79d.arrayBuffer();
          const uint8Array = new Uint8Array(_0x3fec8a);
          const _0x16a395 = uint8Array[0] === 239 && uint8Array[1] === 187 && uint8Array[2] === 191;
          const _0x45a9a7 = new TextDecoder("utf-8");
          _0x3fbc7e = _0x45a9a7.decode(_0x3fec8a);
          const _0x57212a = /\ufffd{2,}|[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(_0x3fbc7e) || !_0x16a395 && /[\u0080-\u00ff]{3,}/.test(_0x3fbc7e);
          if (_0x57212a) {
            try {
              const _0x2873cd = new TextDecoder("gbk");
              _0x3fbc7e = _0x2873cd.decode(_0x3fec8a);
              console.log("[CSV导入] 使用GBK编码解析");
            } catch (_0x1220d9) {
              console.log("[CSV导入] GBK解码失败，回退UTF-8");
            }
          } else {
            console.log("[CSV导入] 使用UTF-8编码解析");
          }
          let _0x363a46 = [];
          if (_0x3fbc7e.includes("<Workbook") || _0x3fbc7e.includes("urn:schemas-microsoft-com:office:spreadsheet")) {
            {
              console.log("[导入] 检测到Excel XML格式");
              const _0x413d0a = new DOMParser();
              const _0x50b535 = _0x413d0a.parseFromString(_0x3fbc7e, "text/xml");
              const _0x255efe = _0x50b535.querySelectorAll("Row");
              let _0x31bd45 = 0;
              _0x255efe.forEach((_0x1509fb, _0xc8f816) => {
                const _0x477128 = _0x1509fb.querySelectorAll("Cell");
                if (_0x477128.length > 0) {
                  const _0x278a55 = _0x477128[0]?.["querySelector"]("Data")?.["textContent"]?.["trim"]() || "";
                  if (_0x278a55 === "姓名" || _0x278a55.includes("身份证")) {
                    _0x31bd45 = _0xc8f816 + 1;
                    return;
                  }
                  if (_0xc8f816 >= _0x31bd45 && _0x363a46.length < 10) {
                    {
                      _0x363a46.push(Array.from(_0x477128).map(_0xb87bdc => _0xb87bdc.querySelector("Data")?.["textContent"]?.["trim"]() || ""));
                    }
                  }
                }
              });
            }
          } else {
            if (_0x3fbc7e.includes("<html") || _0x3fbc7e.includes("<table")) {
              console.log("[导入] 检测到HTML格式，解析表格");
              const _0x4bd35d = new DOMParser();
              const _0x24de7f = _0x4bd35d.parseFromString(_0x3fbc7e, "text/html");
              const _0x265458 = _0x24de7f.querySelectorAll("tr");
              let _0x531504 = 0;
              _0x265458.forEach((_0x460368, _0x3e01f7) => {
                const _0x426ec6 = _0x460368.querySelectorAll("td");
                if (_0x426ec6.length > 0) {
                  {
                    const _0x312f82 = _0x426ec6[0]?.["textContent"]?.["trim"]() || "";
                    if (_0x312f82 === "姓名" || _0x312f82.includes("身份证")) {
                      _0x531504 = _0x3e01f7 + 1;
                      return;
                    }
                    if (_0x3e01f7 >= _0x531504 && _0x363a46.length < 10) {
                      {
                        _0x363a46.push(Array.from(_0x426ec6).map(_0x47135e => _0x47135e.textContent?.["trim"]() || ""));
                      }
                    }
                  }
                }
              });
            } else {
              {
                const _0x4bd064 = _0x3fbc7e.split(/\r?\n/).filter(_0x387cc6 => {
                  const _0x29c41f = _0x387cc6.trim();
                  return _0x29c41f && !_0x29c41f.startsWith("#");
                });
                let _0x31f2dd = 0;
                _0x4bd064[0] && (_0x4bd064[0].includes("姓名") || _0x4bd064[0].includes("身份证")) && (_0x31f2dd = 1);
                const _0xf41b2c = _0x4bd064.slice(_0x31f2dd, _0x31f2dd + 10);
                const _0x5b1957 = _0xf41b2c[0] || "";
                const _0x10c05e = _0x5b1957.includes("\t") ? "\t" : ",";
                console.log("[导入] 检测到分隔符:", _0x10c05e === "\t" ? "Tab" : "逗号");
                _0xf41b2c.forEach(_0x12bb8f => {
                  if (_0x10c05e === "\t") {
                    _0x363a46.push(_0x12bb8f.split("\t").map(_0x138a37 => _0x138a37.trim()));
                  } else {
                    const _0x2a9f52 = [];
                    let _0x1e3e1b = "";
                    let _0x36eaa2 = false;
                    for (let _0x4e2981 = 0; _0x4e2981 < _0x12bb8f.length; _0x4e2981++) {
                      const _0x79491c = _0x12bb8f[_0x4e2981];
                      if (_0x79491c === "\"") {
                        {
                          if (_0x36eaa2 && _0x12bb8f[_0x4e2981 + 1] === "\"") {
                            {
                              _0x1e3e1b += "\"";
                              _0x4e2981++;
                            }
                          } else {
                            _0x36eaa2 = !_0x36eaa2;
                          }
                        }
                      } else {
                        _0x79491c === "," && !_0x36eaa2 ? (_0x2a9f52.push(_0x1e3e1b.trim()), _0x1e3e1b = "") : _0x1e3e1b += _0x79491c;
                      }
                    }
                    _0x2a9f52.push(_0x1e3e1b.trim());
                    _0x363a46.push(_0x2a9f52);
                  }
                });
              }
            }
          }
          if (_0x363a46.length === 0) {
            alert("❌ 未找到有效数据，请检查表格格式");
            return;
          }
          const _0x524c38 = _0x3307a1 => {
            if (!_0x3307a1) {
              return "";
            }
            _0x3307a1 = String(_0x3307a1).trim();
            _0x3307a1.startsWith("'") && (_0x3307a1 = _0x3307a1.substring(1));
            if (/^\d+\.?\d*[eE][+\-]?\d+$/.test(_0x3307a1)) {
              try {
                const _0x585a68 = parseFloat(_0x3307a1);
                if (!isNaN(_0x585a68) && _0x585a68 > 10000000000) {
                  const _0x102e54 = {
                    useGrouping: false
                  };
                  return _0x585a68.toLocaleString("fullwide", _0x102e54);
                }
              } catch (_0x5401a3) {}
            }
            return _0x3307a1;
          };
          _0x363a46.forEach((_0x2af4ec, _0x4c6299) => {
            if (_0x2af4ec.length >= 1) {
              const _0x3d8e44 = _0x2fced9.querySelector(".name-input[data-group=\"" + _0x4c6299 + "\"]");
              const _0x2536bd = _0x2fced9.querySelector(".idcard-input[data-group=\"" + _0x4c6299 + "\"]");
              const _0x232399 = _0x2fced9.querySelector(".phone-input[data-group=\"" + _0x4c6299 + "\"]");
              const _0x119a14 = _0x2fced9.querySelector(".branch-input[data-group=\"" + _0x4c6299 + "\"]");
              const _0x1e1cb2 = _0x2fced9.querySelector(".amount-input[data-group=\"" + _0x4c6299 + "\"]");
              const _0x7a86b9 = _0x2fced9.querySelector(".note-input[data-group=\"" + _0x4c6299 + "\"]");
              if (_0x3d8e44) {
                _0x3d8e44.value = _0x2af4ec[0] || "";
              }
              if (_0x2536bd) {
                _0x2536bd.value = _0x524c38(_0x2af4ec[1]);
              }
              if (_0x232399) {
                _0x232399.value = _0x2af4ec[2] || "";
              }
              if (_0x119a14) {
                _0x119a14.value = _0x2af4ec[3] || "";
              }
              if (_0x1e1cb2) {
                _0x1e1cb2.value = _0x2af4ec[4] || "";
              }
              if (_0x7a86b9) {
                _0x7a86b9.value = _0x2af4ec[5] || "";
              }
              const _0x3bf6d0 = _0x2fced9.querySelector(".use-own-phone[data-group=\"" + _0x4c6299 + "\"]");
              if (_0x3bf6d0) {
                const _0x53ce4d = (_0x2af4ec[6] || "").trim();
                const _0xda2989 = _0x53ce4d === "1";
                _0x3bf6d0.checked = _0xda2989;
                const _0x2af874 = {
                  bubbles: true
                };
                _0x3bf6d0.dispatchEvent(new Event("change", _0x2af874));
              }
            }
          });
          alert("✅ 成功导入 " + _0x363a46.length + " 组数据！\n请检查数据后点击\"保存\"按钮。");
        } catch (_0xc4628a) {
          alert("❌ 导入失败: " + _0xc4628a.message);
        }
        _0x33dbdc.value = "";
      };
      _0x2fced9.querySelectorAll(".clear-group-btn").forEach(_0x2d4848 => {
        _0x2d4848.onclick = _0x5e8b18 => {
          _0x5e8b18.preventDefault();
          const _0x32e016 = _0x2d4848.getAttribute("data-group");
          confirm("确定清空第 " + (parseInt(_0x32e016) + 1) + " 组数据？") && (_0x2fced9.querySelector(".name-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".idcard-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".phone-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".branch-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".amount-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".note-input[data-group=\"" + _0x32e016 + "\"]").value = "", _0x2fced9.querySelector(".sid-input[data-group=\"" + _0x32e016 + "\"]").value = "");
        };
      });
      _0x2fced9.querySelectorAll(".sid-input").forEach(_0xc13a2c => {
        const _0x1fc5f2 = _0xc13a2c.getAttribute("data-group");
        const _0x24e644 = _0x2fced9.querySelector(".sid-dropdown[data-group=\"" + _0x1fc5f2 + "\"]");
        const _0x25477b = _0x2fced9.querySelector(".sms-status[data-group=\"" + _0x1fc5f2 + "\"]");
        let _0x379a98 = null;
        _0xc13a2c.addEventListener("focus", async () => {
          _0xc13a2c.style.borderColor = "#667eea";
          const _0x896ec4 = _0xc13a2c.value.trim();
          await _0x90bb3b(_0x896ec4);
        });
        _0xc13a2c.addEventListener("blur", () => {
          _0xc13a2c.style.borderColor = "#e0e7ff";
          setTimeout(() => _0x24e644.style.display = "none", 200);
        });
        _0xc13a2c.addEventListener("input", () => {
          clearTimeout(_0x379a98);
          _0x379a98 = setTimeout(async () => {
            const _0xcd7c90 = _0xc13a2c.value.trim();
            await _0x90bb3b(_0xcd7c90);
          }, 300);
        });
        async function _0x90bb3b(_0xce98c) {
          try {
            {
              _0x25477b.style.display = "block";
              _0x25477b.innerHTML = "<span style=\"color:#f59e0b;\">🔍 正在查询...</span>";
              const _0x498696 = await SXSMS.searchProjects(_0xce98c);
              if (_0x498696.length === 0) {
                const _0x55d112 = /^\d+$/.test(_0xce98c);
                _0x55d112 && _0xce98c.length >= 3 ? (_0x24e644.innerHTML = "\n                  <div class=\"sid-option\" data-sid=\"" + _0xce98c + "\" style=\"padding:12px;cursor:pointer;background:#f0fdf4;border-left:3px solid #10b981;\">\n                    <div style=\"display:flex;justify-content:space-between;align-items:center;\">\n                      <span style=\"font-weight:600;color:#333;\">使用此项目ID</span>\n                      <span style=\"background:#10b981;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;\">ID: " + _0xce98c + "</span>\n                    </div>\n                    <div style=\"font-size:11px;color:#666;margin-top:4px;\">点击确认使用项目ID: " + _0xce98c + "</div>\n                  </div>\n                  <div style=\"padding:10px;color:#666;text-align:center;font-size:11px;border-top:1px solid #eee;\">\n                    💡 提示：此平台可能不支持项目搜索<br>请在接码网站查询项目ID后直接输入\n                  </div>\n                ", _0x25477b.innerHTML = "<span style=\"color:#10b981;\">👆 点击上方确认使用项目ID: " + _0xce98c + "</span>") : (_0x24e644.innerHTML = "\n                  <div style=\"padding:16px;text-align:center;\">\n                    <div style=\"font-size:13px;color:#666;margin-bottom:8px;\">未找到匹配的项目</div>\n                    <div style=\"font-size:12px;color:#999;line-height:1.6;\">\n                      💡 此接码请勿使用 留空即可<br>\n                      有问题请联系 <a href=\"https://sxian.sznxwl.com/img/sx.jpg\" target=\"_blank\" style=\"color:#667eea;\">上仙</a> 咨询\n                    </div>\n                  </div>\n                ", _0x25477b.innerHTML = "<span style=\"color:#666;\">💡 请直接输入项目ID（纯数字）</span>");
              } else {
                _0x24e644.innerHTML = _0x498696.map(_0x1ce519 => {
                  const _0x22f021 = _0x1ce519.sid || _0x1ce519.id || _0x1ce519.project_id || "";
                  const _0x52b6e1 = _0x1ce519.name || _0x1ce519.project_name || "未知项目";
                  const _0x21445b = _0x1ce519.sign || _0x1ce519.signature || _0x1ce519.sms_sign || "";
                  const _0x2370af = _0x1ce519.price || _0x1ce519.cost || "";
                  return "\n                  <div class=\"sid-option\" data-sid=\"" + _0x22f021 + "\" style=\"padding:10px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:background 0.15s;\">\n                    <div style=\"display:flex;justify-content:space-between;align-items:center;\">\n                      <span style=\"font-weight:600;color:#333;\">" + _0x52b6e1 + "</span>\n                      <span style=\"background:#667eea;color:#fff;padding:2px 8px;border-radius:10px;font-size:11px;\">ID: " + _0x22f021 + "</span>\n                    </div>\n                    " + (_0x21445b ? "<div style=\"font-size:11px;color:#666;margin-top:4px;\">签名: " + _0x21445b + "</div>" : "") + "\n                    " + (_0x2370af ? "<div style=\"font-size:11px;color:#10b981;margin-top:2px;\">价格: " + _0x2370af + "</div>" : "") + "\n                  </div>\n                ";
                }).join("");
                _0x25477b.innerHTML = "<span style=\"color:#10b981;\">✅ 找到 " + _0x498696.length + " 个项目，点击选择</span>";
              }
              _0x24e644.querySelectorAll(".sid-option").forEach(_0x20878e => {
                _0x20878e.addEventListener("mouseenter", () => _0x20878e.style.background = "#f0f7ff");
                _0x20878e.addEventListener("mouseleave", () => _0x20878e.style.background = "");
                _0x20878e.addEventListener("mousedown", _0x3c78d1 => {
                  {
                    _0x3c78d1.preventDefault();
                    const _0x4510a3 = _0x20878e.getAttribute("data-sid");
                    _0xc13a2c.value = _0x4510a3;
                    _0x24e644.style.display = "none";
                    _0x25477b.innerHTML = "<span style=\"color:#10b981;\">✅ 已设置项目ID: " + _0x4510a3 + "</span>";
                  }
                });
              });
              _0x24e644.style.display = "block";
            }
          } catch (_0x5b7700) {
            console.error("[接码平台] 搜索出错:", _0x5b7700);
            _0x24e644.innerHTML = "\n              <div style=\"padding:16px;text-align:center;\">\n                <div style=\"font-size:12px;color:#ef4444;margin-bottom:8px;\">❌ 查询失败</div>\n                <div style=\"font-size:11px;color:#666;\">请直接输入项目ID（纯数字）</div>\n              </div>\n            ";
            _0x24e644.style.display = "block";
            _0x25477b.innerHTML = "<span style=\"color:#666;\">💡 请直接输入项目ID</span>";
          }
        }
      });
    },
    init() {
      const _0x1cb0b5 = StorageCache.get("sx_kami_cache_v2", null);
      this.fillPaneVisible = StorageCache.get("sx_fill_pane_visible", true);
      this.paneOriginal = this.createPane("original", "一键填充/OCR识别 控制面板", 20, 20, 2147483643);
      this.paneQuick = this.createPane("quick", "上仙纪念钞脚本", 20, 280, 2147483641);
      this.createFillButtons(this.paneOriginal.body);
      this.createQuickControls(this.paneQuick.body);
      this.createSettingsPanel();
      if (!this.fillPaneVisible) {
        this.paneOriginal.pane.style.display = "none";
      }
      setTimeout(() => this.showAnnouncement(), 1000);
      this.startAnnouncePolling();
      console.log("[上仙纪念币助手] UI初始化完成");
    }
  };
  function _0x104362() {
    const _0x38078b = new URLSearchParams(window.location.search);
    const _0x1b88c5 = _0x38078b.get("sx_autofill") === "1";
    const _0x2fd97e = parseInt(_0x38078b.get("sx_group") || "0", 10);
    const _0x1a57f2 = _0x38078b.get("sx_autoocr") === "1";
    if (_0x1b88c5 || _0x1a57f2) {
      {
        const _0x30dd76 = window.location.href.split("?")[0];
        window.history.replaceState({}, document.title, _0x30dd76);
        const _0x447d2e = setInterval(() => {
          if (document.readyState === "complete") {
            {
              clearInterval(_0x447d2e);
              if (_0x1b88c5 && typeof SXFormFill !== "undefined") {
                console.log("[上仙] 多开自动填充: 数据组 " + (_0x2fd97e + 1));
                try {
                  SXFormFill.autoFillForm(_0x2fd97e);
                } catch (_0x25e277) {
                  console.error("[上仙] 自动填充失败:", _0x25e277);
                }
              }
              _0x1a57f2 && (console.log("[上仙] 多开自动OCR识别"), setTimeout(() => {
                if (typeof SXUI !== "undefined" && SXUI.autoOCR) {
                  SXUI.autoOCR();
                } else {
                  window.__SX_TRIGGER_AUTO_OCR__ && window.__SX_TRIGGER_AUTO_OCR__();
                }
              }, 100));
            }
          }
        }, 50);
      }
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      {
        SXUI.init();
        typeof SXTimedFill !== "undefined" && SXTimedFill.restoreTimedFillJobs();
        _0x104362();
        _0x52e9d5();
      }
    });
  } else {
    {
      SXUI.init();
      typeof SXTimedFill !== "undefined" && SXTimedFill.restoreTimedFillJobs();
      _0x104362();
      _0x52e9d5();
    }
  }
  function _0x52e9d5() {
    let _0x58540d = null;
    function _0x5ecf1c() {
      if (_0x58540d) {
        return _0x58540d;
      }
      _0x58540d = document.createElement("button");
      _0x58540d.id = "sx-close-multiopen-btn";
      _0x58540d.innerHTML = "🔴 一键关闭多开 (<span id=\"sx-multiopen-count\">0</span>)";
      _0x58540d.style.cssText = "\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        z-index: 2147483647;\n        padding: 10px 16px;\n        background: linear-gradient(135deg, #ef4444, #dc2626);\n        color: #fff;\n        border: none;\n        border-radius: 8px;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n        transition: all 0.2s;\n        font-family: system-ui, sans-serif;\n      ";
      _0x58540d.onmouseenter = () => {
        _0x58540d.style.transform = "scale(1.05)";
        _0x58540d.style.boxShadow = "0 6px 16px rgba(239, 68, 68, 0.5)";
      };
      _0x58540d.onmouseleave = () => {
        _0x58540d.style.transform = "scale(1)";
        _0x58540d.style.boxShadow = "0 4px 12px rgba(239, 68, 68, 0.4)";
      };
      _0x58540d.onclick = () => {
        if (confirm("确定要关闭所有多开窗口吗？")) {
          const _0x3f0937 = {
            action: "closeMultiOpenWindows"
          };
          chrome.runtime.sendMessage(_0x3f0937, () => {
            _0x58540d.remove();
            _0x58540d = null;
          });
        }
      };
      document.body.appendChild(_0x58540d);
      return _0x58540d;
    }
    function _0x47b0c5() {
      const _0x11c205 = {
        action: "getMultiOpenCount"
      };
      chrome.runtime.sendMessage(_0x11c205, _0x28033a => {
        if (_0x28033a && _0x28033a.count > 0) {
          const _0x2f46c9 = _0x5ecf1c();
          const _0x212ab0 = _0x2f46c9.querySelector("#sx-multiopen-count");
          if (_0x212ab0) {
            _0x212ab0.textContent = _0x28033a.count;
          }
        } else {
          _0x58540d && (_0x58540d.remove(), _0x58540d = null);
        }
      });
    }
    setTimeout(_0x47b0c5, 500);
    setInterval(_0x47b0c5, 1000);
  }
  window.__SX_TRIGGER_AUTO_OCR__ = () => {
    {
      SXUI && typeof SXUI.autoOCR === "function" && SXUI.autoOCR();
    }
  };
  window.__SX_TEST_SMS_FILL__ = () => {
    SXSMS && typeof SXSMS.showTestToast === "function" && SXSMS.showTestToast();
  };
  console.log("[上仙] 提示: 在控制台输入 __SX_TEST_SMS_FILL__() 可以测试短信验证码填充功能");
  console.log("[上仙纪念币助手] 扩展加载完成！");
})();