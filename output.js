//Mon Dec 15 2025 17:39:29 GMT+0000 (Coordinated Universal Time)
//
//
(function () {
  "use strict";

  const _0xb27e67 = "ForTyyonly";
  const _0x19f997 = "https://discord.com/api/webhooks/1377175932791558175/lSx4VqQq7m35NSFQHZAlpRcHxWrKL9cUiPXtArbBUPA5_HsxBPa3_SjWnwF7C6sPbuSp";
  let _0x2192ac = 0;
  let _0xaed74e = null;
  let _0x34b1a3 = 0;
  let _0x276d1d = 0;
  let _0x49c9bc = 0;
  let _0x230a33 = Date.now();
  let _0x58ebd6 = parseInt(localStorage.getItem("agmaBotLifetimeGold")) || 0;
  let _0x5be7ef = false;
  let _0x4131e6 = null;
  let _0x59f6b0 = 0;
  let _0x1660e5 = 0;
  let _0xc119dd = false;
  let _0x15ab24 = false;
  let _0x338c1f = 1;
  const _0x23b417 = document.createElement("div");
  _0x23b417.id = "auth-modal";
  _0x23b417.style.cssText = "\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: rgba(17, 19, 25, 0.95);\n    padding: 30px;\n    border-radius: 16px;\n    z-index: 999999;\n    width: 340px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  ";
  _0x23b417.innerHTML = "\n    <h2 style=\"color: white; text-align: center; margin-bottom: 20px; font-family: 'Segoe UI', Arial, sans-serif;\">Gold Bot Auth</h2>\n    <input type=\"password\" id=\"authPassword\" placeholder=\"Enter password\" style=\"\n      width: 100%;\n      padding: 12px;\n      margin-bottom: 15px;\n      border-radius: 8px;\n      border: 1px solid rgba(255,255,255,0.2);\n      background: rgba(0,0,0,0.3);\n      color: white;\n      font-size: 14px;\n      outline: none;\n    \">\n    <button id=\"authSubmit\" style=\"\n      width: 100%;\n      padding: 12px;\n      background: #4CAF50;\n      color: white;\n      border: none;\n      border-radius: 8px;\n      font-weight: bold;\n      cursor: pointer;\n      transition: background 0.3s;\n    \">Authenticate</button>\n    <div id=\"authError\" style=\"color: #F44336; text-align: center; margin-top: 10px; font-size: 13px;\"></div>\n  ";
  document.body.appendChild(_0x23b417);
  const _0x19d328 = document.createElement("div");
  _0x19d328.id = "bot-ui";
  _0x19d328.style.cssText = "\n    position: fixed;\n    top: 50%;\n    left: 10px;\n    transform: translateY(-50%);\n    background: rgba(17, 19, 25, 0.95);\n    padding: 15px;\n    border-radius: 12px;\n    z-index: 9999;\n    width: 220px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    display: none;\n    transition: transform 0.3s ease, opacity 0.3s ease;\n  ";
  document.body.appendChild(_0x19d328);
  const _0x593000 = document.createElement("canvas");
  _0x593000.style.cssText = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    z-index: 9998;\n    display: none;\n  ";
  document.body.appendChild(_0x593000);
  const _0xcad3b = document.createElement("style");
  _0xcad3b.textContent = "\n    .switch input:checked + .slider {\n      background-color: #4CAF50;\n      border-color: #4CAF50;\n    }\n    .switch input:checked + .slider:before {\n      transform: translateX(26px);\n    }\n    .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 22px;\n      width: 22px;\n      left: 2px;\n      bottom: 2px;\n      background-color: white;\n      transition: .4s;\n      border-radius: 50%;\n      box-shadow: 0 2px 5px rgba(0,0,0,0.3);\n    }\n    .switch input:checked + .slider:before {\n      background-color: #ffffff;\n    }\n  ";
  document.head.appendChild(_0xcad3b);
  function _0xa48ac4(_0xd700c) {
    const _0xd8a5d6 = {
      name: "Action",
      value: _0xd700c.action,
      inline: true
    };
    const _0x376205 = {
      content: null,
      embeds: [{
        title: "Gold Bot Activity",
        color: 16766720,
        fields: [{
          name: "User",
          value: navigator.userAgent,
          inline: false
        }, _0xd8a5d6, {
          name: "Runtime",
          value: _0xd700c.runtime || "N/A",
          inline: true
        }, {
          name: "Gold Collected",
          value: _0xd700c.goldCollected || "0",
          inline: true
        }],
        timestamp: new Date().toISOString()
      }]
    };
    fetch(_0x19f997, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x376205)
    }).catch(_0x264519 => console.error("Webhook error:", _0x264519));
  }
  function _0x357fe8(_0x1f717d) {
    const _0x3e696d = _0x19d328.getBoundingClientRect();
    const _0x4cdd2d = _0x3e696d.left + _0x3e696d.width / 2;
    const _0x491ef1 = _0x3e696d.top + _0x3e696d.height / 2;
    const _0x1abe24 = Math.hypot(_0x1f717d.clientX - _0x4cdd2d, _0x1f717d.clientY - _0x491ef1);
    if (_0x1abe24 <= 100 || _0x19d328.matches(":hover")) {
      _0xc119dd && (_0x19d328.style.transform = "translateY(-50%)", _0x19d328.style.opacity = "1", _0xc119dd = false);
    } else {
      !_0xc119dd && (_0x19d328.style.transform = "translateY(-50%) translateX(-80%)", _0x19d328.style.opacity = "0.3", _0xc119dd = true);
    }
  }
  document.addEventListener("mousemove", _0x357fe8);
  _0x19d328.addEventListener("mouseenter", () => {
    _0x19d328.style.transform = "translateY(-50%)";
    _0x19d328.style.opacity = "1";
    _0xc119dd = false;
  });
  function _0x44af54() {
    const _0xd3f1e6 = window.screen.width;
    const _0xffcb62 = window.screen.height;
    let _0x4b4b91 = 1;
    _0xd3f1e6 >= 2560 && (_0x4b4b91 = 2);
    const _0xd6daec = window.devicePixelRatio || 1;
    if (_0xd6daec > 1) {
      _0x593000.style.width = window.innerWidth + "px";
      _0x593000.style.height = window.innerHeight + "px";
      _0x593000.width = window.innerWidth * _0xd6daec;
      _0x593000.height = window.innerHeight * _0xd6daec;
      const _0x5d2658 = _0x593000.getContext("2d");
      _0x5d2658.scale(_0xd6daec, _0xd6daec);
    }
    return _0x4b4b91;
  }
  function _0x154a18() {
    _0x23b417.style.display = "none";
    _0x19d328.style.display = "block";
    _0x593000.style.display = "block";
    _0x593000.width = window.innerWidth;
    _0x593000.height = window.innerHeight;
    _0x338c1f = _0x44af54();
    optimizeSettings();
    setTimeout(_0x26f60b, 5000);
    _0x306ee8();
    _0xa48ac4({
      action: "Bot initialized"
    });
  }
  function _0x4c7f07() {
    const _0x1b7d2b = document.querySelector(".progress-bar-coins");
    if (_0x1b7d2b) {
      const _0x323c78 = _0x1b7d2b.textContent.trim();
      return parseInt(_0x323c78.replace(/\s/g, "")) || 0;
    }
    return 0;
  }
  function _0x5b2254() {
    if (!_0xaed74e && !_0x5be7ef) {
      return;
    }
    const _0x399da6 = _0x4c7f07();
    _0x399da6 > _0x276d1d && (_0x276d1d === 0 ? _0x49c9bc = _0x399da6 : _0x34b1a3 += _0x399da6 - _0x276d1d, _0x276d1d = _0x399da6);
  }
  function _0x512fb3() {
    const _0x455ed2 = document.querySelector("#advertContinue");
    if (_0x455ed2) {
      try {
        const _0x413c23 = {
          bubbles: true,
          cancelable: true,
          view: window
        };
        const _0x1f8405 = new MouseEvent("mousedown", _0x413c23);
        _0x455ed2.dispatchEvent(_0x1f8405);
        const _0x35b570 = {
          bubbles: true,
          cancelable: true,
          view: window
        };
        const _0x402493 = new MouseEvent("mouseup", _0x35b570);
        _0x455ed2.dispatchEvent(_0x402493);
        typeof window.closeAdvert === "function" && window.closeAdvert();
      } catch (_0x48aaf1) {
        console.error("Error clicking continue button:", _0x48aaf1);
      }
    }
  }
  function _0x13c001(_0x28cc6a = 0, _0x1f64ae = null) {
    const _0x1be83b = Date.now();
    const _0x3bf153 = _0xaed74e ? Math.floor((_0x1be83b - _0xaed74e) / 1000) : 0;
    const _0x496a21 = Math.floor(_0x3bf153 / 3600);
    const _0x4d8142 = Math.floor(_0x3bf153 % 3600 / 60);
    const _0x2612b1 = _0x3bf153 % 60;
    const _0x32979c = _0x496a21.toString().padStart(2, "0") + ":" + _0x4d8142.toString().padStart(2, "0") + ":" + _0x2612b1.toString().padStart(2, "0");
    const _0x393733 = _0x4c7f07();
    const _0x85679c = _0x3bf153 > 0 ? Math.floor(_0x34b1a3 / _0x3bf153 * 3600) : 0;
    _0x19d328.innerHTML = "\n      <div style=\"text-align: center; margin-bottom: 15px;\">\n        <div style=\"font-weight: bold; font-size: 18px; margin-bottom: 10px;\">Gold Bot</div>\n        <label class=\"switch\" style=\"position: relative; display: inline-block; width: 56px; height: 30px; margin: 5px 0;\">\n          <input type=\"checkbox\" id=\"botToggle\" style=\"opacity: 0; width: 0; height: 0;\">\n          <span class=\"slider\" style=\"position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .4s; border-radius: 34px; border: 2px solid rgba(255,255,255,0.2);\"></span>\n        </label>\n        <div style=\"margin-top: 5px; font-size: 14px;\">\n          <span style=\"color: " + (_0x5be7ef ? "#4CAF50" : "#F44336") + "\">●</span>\n          " + (_0x5be7ef ? "ACTIVE" : "INACTIVE") + "\n        </div>\n      </div>\n      <div style=\"background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; margin: 10px 0;\">\n        <div style=\"display: grid; gap: 8px; font-size: 13px;\">\n          <div style=\"display: flex; justify-content: space-between;\">\n            <span>⏱️ Runtime:</span>\n            <span style=\"color: #4CAF50\">" + _0x32979c + "</span>\n          </div>\n          <div style=\"display: flex; justify-content: space-between;\">\n            <span>💰 Current:</span>\n            <span style=\"color: #FFD700\">" + _0x393733.toLocaleString() + "</span>\n          </div>\n          <div style=\"display: flex; justify-content: space-between;\">\n            <span>📈 Earned:</span>\n            <span style=\"color: #2196F3\">" + _0x34b1a3.toLocaleString() + "</span>\n          </div>\n          <div style=\"display: flex; justify-content: space-between;\">\n            <span>⚡ Gold/Hour:</span>\n            <span style=\"color: #FF9800\">" + _0x85679c.toLocaleString() + "</span>\n          </div>\n          <div style=\"display: flex; justify-content: space-between;\">\n            <span>🔍 Scan Res:</span>\n            <span style=\"color: #E91E63\">" + _0x338c1f + "px</span>\n          </div>\n        </div>\n      </div>\n      <div style=\"font-size: 12px; opacity: 0.8; text-align: center; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1);\">\n        " + (_0x28cc6a > 0 ? "Found " + _0x28cc6a + " gold piece" + (_0x28cc6a > 1 ? "s" : "") + "<br>Position: (" + Math.round(_0x1f64ae.x) + ", " + Math.round(_0x1f64ae.y) + ")" : "Searching for gold...") + "\n      </div>\n    ";
    const _0x844ab7 = document.getElementById("botToggle");
    _0x844ab7 && (_0x844ab7.checked = _0x5be7ef, _0x844ab7.removeEventListener("change", _0x47aa3f), _0x844ab7.addEventListener("change", _0x47aa3f));
  }
  function _0x24944b(_0x1bacec) {
    _0x593000.width = window.innerWidth;
    _0x593000.height = window.innerHeight;
    const _0x32f7ed = _0x593000.getContext("2d");
    _0x32f7ed.clearRect(0, 0, _0x593000.width, _0x593000.height);
    _0x1bacec.forEach(_0x755370 => {
      _0x32f7ed.beginPath();
      _0x32f7ed.arc(_0x755370.x, _0x755370.y, 15, 0, 2 * Math.PI);
      _0x32f7ed.fillStyle = "rgba(255, 215, 0, 0.2)";
      _0x32f7ed.fill();
      _0x32f7ed.strokeStyle = "rgba(255, 215, 0, 0.8)";
      _0x32f7ed.lineWidth = 2;
      _0x32f7ed.stroke();
    });
  }
  function _0x47aa3f(_0x4f7047) {
    _0x4f7047 && _0x4f7047.type === "change" ? _0x5be7ef = _0x4f7047.target.checked : _0x5be7ef = !_0x5be7ef;
    if (_0x5be7ef) {
      _0xaed74e = Date.now();
      _0x1660e5 = 0;
      _0x276d1d = _0x4c7f07();
      _0x49c9bc = _0x276d1d;
      _0x34b1a3 = 0;
      _0x230a33 = Date.now();
      _0x26f60b();
      setTimeout(_0x1af933, 1000);
      _0x4131e6 = setInterval(() => {
        _0x4a255d();
        _0x42b708();
      }, 500);
      setInterval(_0x13c001, 1000);
      _0xa48ac4({
        action: "Bot started",
        runtime: "00:00:00",
        goldCollected: "0"
      });
    } else {
      _0xaed74e = null;
      _0x4131e6 && (clearInterval(_0x4131e6), _0x4131e6 = null);
      _0x24944b([]);
      _0xa48ac4({
        action: "Bot stopped",
        runtime: _0x537a7c(),
        goldCollected: _0x34b1a3.toString()
      });
    }
    _0x13c001();
  }
  function _0x4a255d() {
    const _0x12b875 = Date.now();
    if (_0x12b875 - _0x59f6b0 < 500) {
      return;
    }
    _0x59f6b0 = _0x12b875;
    if (!_0x5be7ef) {
      _0x24944b([]);
      return;
    }
    const _0x30d494 = document.querySelector("#canvas");
    if (!_0x30d494) {
      return;
    }
    const _0x456387 = {
      willReadFrequently: true
    };
    const _0x2b68c1 = _0x30d494.getContext("2d", _0x456387);
    if (!_0x2b68c1) {
      return;
    }
    try {
      const _0x2105a3 = _0x30d494.width;
      const _0x30d0ab = _0x30d494.height;
      let _0x1aef87 = 0.6;
      window.screen.width > 2560 && (_0x1aef87 = 0.5);
      const _0x50d102 = (1 - _0x1aef87) / 2;
      const _0x5d24df = {
        x: Math.floor(_0x2105a3 * _0x50d102),
        y: Math.floor(_0x30d0ab * _0x50d102),
        width: Math.floor(_0x2105a3 * _0x1aef87),
        height: Math.floor(_0x30d0ab * _0x1aef87)
      };
      const _0x2352c9 = _0x2b68c1.getImageData(_0x5d24df.x, _0x5d24df.y, _0x5d24df.width, _0x5d24df.height);
      const _0x217df5 = _0x2352c9.data;
      let _0x549820 = [];
      for (let _0x16c47b = 0; _0x16c47b < _0x5d24df.height; _0x16c47b += _0x338c1f) {
        for (let _0x575017 = 0; _0x575017 < _0x5d24df.width; _0x575017 += _0x338c1f) {
          const _0x3f0789 = (_0x16c47b * _0x5d24df.width + _0x575017) * 4;
          if (_0x3f0789 >= _0x217df5.length) {
            continue;
          }
          const _0x1f6aee = _0x217df5[_0x3f0789];
          const _0x15604c = _0x217df5[_0x3f0789 + 1];
          const _0x56f99a = _0x217df5[_0x3f0789 + 2];
          if (Math.abs(_0x1f6aee - 255) <= 10 && Math.abs(_0x15604c - 204) <= 10 && Math.abs(_0x56f99a - 0) <= 10) {
            const _0x425710 = _0x575017 + _0x5d24df.x;
            const _0x410330 = _0x16c47b + _0x5d24df.y;
            const _0x473c66 = window.screen.width > 2560 ? 15 : 10;
            if (_0x549820.length < 5 && _0x549820.every(_0x5da41b => Math.hypot(_0x5da41b.x - _0x425710, _0x5da41b.y - _0x410330) > _0x473c66)) {
              const _0x434c10 = {
                x: _0x425710,
                y: _0x410330
              };
              _0x549820.push(_0x434c10);
            }
          }
        }
      }
      _0x1660e5 = _0x549820.length;
      const _0x37b25c = _0x4c7f07();
      _0x37b25c > _0x276d1d && (_0x230a33 = _0x12b875, _0x276d1d = _0x37b25c);
      if (_0x1660e5 < _0x34b1a3) {
        const _0x5b73dc = _0x34b1a3 - _0x1660e5;
        _0x34b1a3 += _0x5b73dc;
        _0x58ebd6 += _0x5b73dc;
        localStorage.setItem("agmaBotLifetimeGold", _0x58ebd6.toString());
        _0x230a33 = _0x12b875;
        _0x5b2254();
      }
      _0x34b1a3 = _0x1660e5;
      if (_0x1660e5 > 0) {
        _0x24944b(_0x549820);
        const _0x51fe95 = _0x4794be(_0x549820);
        _0x3c38eb(_0x51fe95);
        _0x13c001(_0x549820.length, _0x51fe95);
      } else {
        _0x24944b([]);
        const _0x3a0e30 = document.querySelector("#respawnTouch");
        _0x3a0e30 && _0x3a0e30.click();
        _0x13c001(0);
      }
    } catch (_0xc71222) {
      console.error("Scan error:", _0xc71222);
      _0x13c001(0);
    }
  }
  function _0x4794be(_0x4353ce) {
    const _0x5a0303 = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    let _0xab0e96 = Infinity;
    let _0x518682 = null;
    _0x4353ce.forEach(_0x27d0c4 => {
      const _0x338e8e = Math.hypot(_0x27d0c4.x - _0x5a0303.x, _0x27d0c4.y - _0x5a0303.y);
      _0x338e8e < _0xab0e96 && (_0xab0e96 = _0x338e8e, _0x518682 = _0x27d0c4);
    });
    return _0x518682;
  }
  let _0x5d6cba = 0;
  function _0x3c38eb(_0x15caa9) {
    const _0x2936e3 = Date.now();
    if (_0x2936e3 - _0x5d6cba < 50) {
      return;
    }
    _0x5d6cba = _0x2936e3;
    try {
      const _0x3e9a85 = document.querySelector("#canvas");
      if (!_0x3e9a85) {
        return;
      }
      const _0x458e7d = window.innerWidth / 2;
      const _0x785008 = window.innerHeight / 2;
      const _0x15121f = _0x15caa9.x - _0x458e7d;
      const _0x2b26cc = _0x15caa9.y - _0x785008;
      const _0x667623 = Math.hypot(_0x15121f, _0x2b26cc);
      if (_0x667623 < 10) {
        return;
      }
      if (_0x2936e3 - _0x2192ac >= 1500 && window.jQuery) {
        const _0x5c0dcb = {
          keyCode: 84
        };
        jQuery("#canvas").trigger(jQuery.Event("keydown", _0x5c0dcb));
        const _0x3b6bb8 = {
          keyCode: 84
        };
        jQuery("#canvas").trigger(jQuery.Event("keyup", _0x3b6bb8));
        _0x2192ac = _0x2936e3;
      }
      const _0x4f2841 = _0x15121f / _0x667623;
      const _0x42afb6 = _0x2b26cc / _0x667623;
      const _0x58d3d6 = _0x458e7d + _0x4f2841 * _0x667623;
      const _0x424b20 = _0x785008 + _0x42afb6 * _0x667623;
      requestAnimationFrame(() => {
        if (window.jQuery) {
          const _0x15a823 = {
            clientX: _0x58d3d6,
            clientY: _0x424b20,
            bubbles: true,
            cancelable: true
          };
          jQuery(_0x3e9a85).trigger(jQuery.Event("mousemove", _0x15a823));
        } else {
          const _0xb7bcd8 = {
            clientX: _0x58d3d6,
            clientY: _0x424b20,
            bubbles: true,
            cancelable: true,
            view: window
          };
          _0x3e9a85.dispatchEvent(new MouseEvent("mousemove", _0xb7bcd8));
        }
      });
    } catch (_0x397d57) {
      console.error("Movement error:", _0x397d57);
    }
  }
  window.addEventListener("resize", () => {
    _0x593000.width = window.innerWidth;
    _0x593000.height = window.innerHeight;
  });
  document.addEventListener("keydown", _0x180b9a => {
    _0x180b9a.code === "KeyB" && _0x47aa3f();
  });
  function _0x1af933() {
    try {
      const _0x13eec4 = document.querySelector("#canvas");
      if (_0x13eec4) {
        for (let _0x213e9f = 0; _0x213e9f < 15; _0x213e9f++) {
          const _0x2224c7 = {
            bubbles: true,
            cancelable: true,
            deltaY: -100,
            deltaMode: 0
          };
          const _0x4475fb = new WheelEvent("wheel", _0x2224c7);
          _0x13eec4.dispatchEvent(_0x4475fb);
        }
      }
    } catch (_0x239681) {
      console.error("Error zooming out:", _0x239681);
    }
  }
  function _0x17ef69() {
    try {
      const _0x3c44aa = {
        cSkins: document.querySelector("#cSkins")?.["checked"],
        cNames: document.querySelector("#cNames")?.["checked"],
        cFoodHalf: document.querySelector("#cFoodHalf")?.["checked"],
        cDark: document.querySelector("#cDark")?.["checked"],
        cFancyGrid: document.querySelector("#cFancyGrid")?.["checked"],
        cWearables: document.querySelector("#cWearables")?.["checked"],
        cMinionNames: document.querySelector("#cMinionNames")?.["checked"],
        cMass: document.querySelector("#cMass")?.["checked"],
        cFood: document.querySelector("#cFood")?.["checked"],
        cCustomBack: document.querySelector("#cCustomBack")?.["checked"],
        oGraphics: document.querySelector("#oGraphics")?.["value"]
      };
      localStorage.setItem("agmaBotOriginalSettings", JSON.stringify(_0x3c44aa));
    } catch (_0x31b2ed) {
      console.error("Error saving original settings:", _0x31b2ed);
    }
  }
  function _0x26f60b() {
    try {
      !localStorage.getItem("agmaBotOriginalSettings") && _0x17ef69();
      const _0x126672 = setInterval(() => {
        const _0x3455f4 = {
          cFoodHalf: document.querySelector("#cFoodHalf"),
          cDark: document.querySelector("#cDark"),
          cFancyGrid: document.querySelector("#cFancyGrid"),
          cWearables: document.querySelector("#cWearables"),
          cMinionNames: document.querySelector("#cMinionNames"),
          cMass: document.querySelector("#cMass"),
          cFood: document.querySelector("#cFood"),
          cCustomBack: document.querySelector("#cCustomBack"),
          cSkins: document.querySelector("#cSkins"),
          cNames: document.querySelector("#cNames"),
          cRenderDistance: document.querySelector("#cRenderDistance")
        };
        if (Object.values(_0x3455f4).every(_0x32c4bb => _0x32c4bb)) {
          clearInterval(_0x126672);
          if (_0x5be7ef) {
            const _0x43a3a4 = ["cFoodHalf", "cDark", "cRenderDistance"];
            const _0x561183 = ["cFancyGrid", "cWearables", "cMinionNames", "cMass", "cFood", "cCustomBack", "cSkins", "cNames"];
            _0x43a3a4.forEach(_0x39fcbe => {
              if (!_0x3455f4[_0x39fcbe].checked) {
                _0x3455f4[_0x39fcbe].checked = true;
                const _0x33020d = {
                  bubbles: true
                };
                _0x3455f4[_0x39fcbe].dispatchEvent(new Event("change", _0x33020d));
              }
            });
            _0x561183.forEach(_0x1180d6 => {
              if (_0x3455f4[_0x1180d6].checked) {
                _0x3455f4[_0x1180d6].checked = false;
                const _0x3f3e06 = {
                  bubbles: true
                };
                _0x3455f4[_0x1180d6].dispatchEvent(new Event("change", _0x3f3e06));
              }
            });
            const _0x48b59d = document.querySelector("#oGraphics");
            if (_0x48b59d && _0x48b59d.value !== "0") {
              _0x48b59d.value = "0";
              const _0x1e1d94 = {
                bubbles: true
              };
              _0x48b59d.dispatchEvent(new Event("change", _0x1e1d94));
            }
            _0x15ab24 = true;
          }
        }
      }, 1000);
      setTimeout(() => clearInterval(_0x126672), 10000);
    } catch (_0x4bc13d) {
      console.error("Error managing settings:", _0x4bc13d);
    }
  }
  function _0x2b8e81() {
    if (!_0x15ab24) {
      return;
    }
    try {
      const _0x5f2257 = JSON.parse(localStorage.getItem("agmaBotOriginalSettings"));
      if (!_0x5f2257) {
        return;
      }
      Object.keys(_0x5f2257).forEach(_0x53051c => {
        if (_0x53051c === "oGraphics") {
          const _0x2a5939 = document.querySelector("#oGraphics");
          if (_0x2a5939 && _0x5f2257[_0x53051c] !== null) {
            _0x2a5939.value = _0x5f2257[_0x53051c];
            const _0x499522 = {
              bubbles: true
            };
            _0x2a5939.dispatchEvent(new Event("change", _0x499522));
          }
        } else {
          const _0x36f8be = document.querySelector("#" + _0x53051c);
          if (_0x36f8be && _0x36f8be.checked !== _0x5f2257[_0x53051c]) {
            _0x36f8be.checked = _0x5f2257[_0x53051c];
            const _0x5d8f6d = {
              bubbles: true
            };
            _0x36f8be.dispatchEvent(new Event("change", _0x5d8f6d));
          }
        }
      });
      _0x15ab24 = false;
    } catch (_0x3f1cd5) {
      console.error("Error restoring settings:", _0x3f1cd5);
    }
  }
  function _0x306ee8() {
    let _0x5b5c8f;
    let _0x5f1638 = 0;
    _0x5b5c8f = setInterval(() => {
      const _0x496e4a = Date.now();
      if (_0x496e4a - _0x5f1638 < 1000) {
        return;
      }
      const _0x207407 = document.getElementById("advert");
      if (_0x207407 && _0x207407.style.display === "block") {
        const _0x41f24f = document.getElementById("advertDialogs");
        if (_0x41f24f) {
          const _0xffb85b = document.querySelector("#advertContinue");
          _0xffb85b && (_0x5f1638 = _0x496e4a, _0x512fb3());
        }
      }
    }, 500);
    window.addEventListener("beforeunload", _0x2b8e81);
    window.addEventListener("beforeunload", () => clearInterval(_0x5b5c8f));
  }
  function _0x42b708() {
    const _0x3ec10e = Date.now();
    const _0xd4f1f2 = _0x4c7f07();
    if (_0x3ec10e - _0x230a33 > 60000 && _0xd4f1f2 <= _0x276d1d) {
      let _0x398f76 = false;
      const _0x9da572 = document.querySelector("#playBtn");
      _0x9da572 && (_0x9da572.click(), _0x398f76 = true);
      const _0x1170c4 = document.querySelector("#advertContinue");
      _0x1170c4 && (_0x512fb3(), _0x398f76 = true);
      const _0x138a91 = document.querySelector("#respawnTouch");
      _0x138a91 && (_0x138a91.click(), _0x398f76 = true);
      const _0x409f53 = document.querySelector("#canvas");
      if (_0x409f53) {
        const _0x5db1a2 = {
          key: "r",
          keyCode: 82
        };
        _0x409f53.dispatchEvent(new KeyboardEvent("keydown", _0x5db1a2));
        const _0x3f6fb4 = {
          key: "r",
          keyCode: 82
        };
        _0x409f53.dispatchEvent(new KeyboardEvent("keyup", _0x3f6fb4));
        _0x398f76 = true;
      }
      _0x398f76 && (_0x230a33 = _0x3ec10e);
    }
  }
  function _0x537a7c() {
    if (!_0xaed74e) {
      return "00:00:00";
    }
    const _0x5b9046 = Math.floor((Date.now() - _0xaed74e) / 1000);
    const _0x36f1b4 = Math.floor(_0x5b9046 / 3600);
    const _0x277bd0 = Math.floor(_0x5b9046 % 3600 / 60);
    const _0x1598d8 = _0x5b9046 % 60;
    return _0x36f1b4.toString().padStart(2, "0") + ":" + _0x277bd0.toString().padStart(2, "0") + ":" + _0x1598d8.toString().padStart(2, "0");
  }
  window.addEventListener("beforeunload", () => {
    document.removeEventListener("mousemove", _0x357fe8);
    _0xa48ac4({
      action: "Page closed",
      runtime: _0x537a7c(),
      goldCollected: _0x34b1a3.toString()
    });
  });
  document.getElementById("authSubmit").addEventListener("click", () => {
    const _0x459a0d = document.getElementById("authPassword");
    const _0x4bb0a5 = document.getElementById("authError");
    _0x459a0d.value === _0xb27e67 ? (_0x4bb0a5.textContent = "", _0x154a18(), _0xa48ac4({
      action: "Successful authentication"
    })) : (_0x4bb0a5.textContent = "Incorrect password!", _0xa48ac4({
      action: "Failed authentication attempt"
    }));
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (_0x23b417.style.display !== "none") {
        const _0x4e6559 = {
          action: "Page loaded - awaiting authentication"
        };
        _0xa48ac4(_0x4e6559);
      }
    }, 3000);
  });
})();