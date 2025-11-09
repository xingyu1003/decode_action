//Sun Nov 09 2025 03:46:36 GMT+0000 (Coordinated Universal Time)
//
//
function generateSecurePayload(_0x4675d3, _0x3f0134, _0x3b5d08) {
  console.log("加密计算");
  var _0x1b3537 = {
    valid: false
  };
  var _0x3b5d08 = "GWDiugh398huiw0ioOYGd0934hew";
  if (_0x4675d3.length >= 2) {
    {
      var _0x40f4e3 = _0x4675d3[_0x4675d3.length - 1].t;
      var _0x467916 = 0;
      var _0x1d629a = [];
      var _0x2d25a1 = [];
      var _0x36df0b = [];
      for (var _0x3b4868 = 1; _0x3b4868 < _0x4675d3.length; _0x3b4868++) {
        {
          var _0x7c1e29 = _0x4675d3[_0x3b4868].x - _0x4675d3[_0x3b4868 - 1].x;
          var _0x102176 = _0x4675d3[_0x3b4868].y - _0x4675d3[_0x3b4868 - 1].y;
          var _0x5ca3a9 = _0x4675d3[_0x3b4868].t - _0x4675d3[_0x3b4868 - 1].t;
          if (_0x5ca3a9 > 0) {
            {
              var _0x28174c = Math.sqrt(_0x7c1e29 * _0x7c1e29 + _0x102176 * _0x102176);
              _0x467916 += _0x28174c;
              var _0x333254 = _0x28174c / _0x5ca3a9;
              _0x1d629a.push(_0x333254);
              if (_0x3b4868 > 1 && _0x1d629a.length > 1) {
                {
                  var _0x356ea0 = (_0x1d629a[_0x1d629a.length - 1] - _0x1d629a[_0x1d629a.length - 2]) / _0x5ca3a9;
                  _0x2d25a1.push(_0x356ea0);
                }
              }
              var _0x3baa7e = Math.atan2(_0x102176, _0x7c1e29);
              _0x36df0b.push(_0x3baa7e);
            }
          }
        }
      }
      var _0x3ccd22 = _0x1d629a.length > 0 ? _0x1d629a.reduce(function (_0x2dfc7c, _0xa97e5b) {
        {
          return _0x2dfc7c + _0xa97e5b;
        }
      }, 0) / _0x1d629a.length : 0;
      var _0xae7c2f = _0x1d629a.length > 0 ? Math.max.apply(null, _0x1d629a) : 0;
      var _0x36477d = _0x1d629a.length > 0 ? Math.min.apply(null, _0x1d629a) : 0;
      var _0x1beb27 = 0;
      if (_0x1d629a.length > 0) {
        {
          for (var _0x3b4868 = 0; _0x3b4868 < _0x1d629a.length; _0x3b4868++) {
            _0x1beb27 += Math.pow(_0x1d629a[_0x3b4868] - _0x3ccd22, 2);
          }
          _0x1beb27 /= _0x1d629a.length;
        }
      }
      var _0x268d1c = 0;
      for (var _0x3b4868 = 1; _0x3b4868 < _0x36df0b.length; _0x3b4868++) {
        {
          var _0x118446 = Math.abs(_0x36df0b[_0x3b4868] - _0x36df0b[_0x3b4868 - 1]);
          if (_0x118446 > Math.PI / 4) {
            {
              _0x268d1c++;
            }
          }
        }
      }
      _0x1b3537 = {
        valid: true,
        points: _0x4675d3.length,
        totalTime: _0x40f4e3,
        totalDist: _0x467916,
        avgSpeed: _0x3ccd22,
        maxSpeed: _0xae7c2f,
        minSpeed: _0x36477d,
        speedVar: _0x1beb27,
        dirChanges: _0x268d1c,
        finalX: _0x4675d3[_0x4675d3.length - 1].x - _0x4675d3[0].x
      };
    }
  }
  var _0x28ff8e = JSON.stringify(_0x1b3537);
  var _0x2d5004 = new Date().getTime();
  var _0x1c91a9 = _0x3f0134.toFixed(2);
  var _0x50ba31 = "";
  for (var _0x3b4868 = 0; _0x3b4868 < _0x28ff8e.length; _0x3b4868++) {
    {
      _0x50ba31 += String.fromCharCode(_0x28ff8e.charCodeAt(_0x3b4868) ^ _0x3b5d08.charCodeAt(_0x3b4868 % _0x3b5d08.length));
    }
  }
  var _0x30c71e;
  if (typeof btoa !== "undefined") {
    {
      _0x30c71e = btoa(unescape(encodeURIComponent(_0x50ba31)));
    }
  } else {
    var _0x20d331 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var _0x3ba7e5 = "";
    var _0x3b4868 = 0;
    while (_0x3b4868 < _0x50ba31.length) {
      {
        var _0x6fe5c5 = _0x50ba31.charCodeAt(_0x3b4868++);
        var _0x3328a9 = _0x3b4868 < _0x50ba31.length ? _0x50ba31.charCodeAt(_0x3b4868++) : 0;
        var _0x24d255 = _0x3b4868 < _0x50ba31.length ? _0x50ba31.charCodeAt(_0x3b4868++) : 0;
        var _0x2d5d8a = _0x6fe5c5 << 16 | _0x3328a9 << 8 | _0x24d255;
        _0x3ba7e5 += _0x20d331.charAt(_0x2d5d8a >> 18 & 63);
        _0x3ba7e5 += _0x20d331.charAt(_0x2d5d8a >> 12 & 63);
        _0x3ba7e5 += _0x3b4868 - 1 < _0x50ba31.length ? _0x20d331.charAt(_0x2d5d8a >> 6 & 63) : "=";
        _0x3ba7e5 += _0x3b4868 - 2 < _0x50ba31.length ? _0x20d331.charAt(_0x2d5d8a & 63) : "=";
      }
    }
    _0x30c71e = _0x3ba7e5;
  }
  var _0x9d8a6b = 2166136261;
  var _0x5cdfc0 = _0x28ff8e + _0x2d5004 + _0x1c91a9 + _0x3b5d08;
  var _0x56dc43 = _0x9d8a6b;
  for (var _0x3b4868 = 0; _0x3b4868 < _0x5cdfc0.length; _0x3b4868++) {
    _0x56dc43 ^= _0x5cdfc0.charCodeAt(_0x3b4868);
    _0x56dc43 += (_0x56dc43 << 1) + (_0x56dc43 << 4) + (_0x56dc43 << 7) + (_0x56dc43 << 8) + (_0x56dc43 << 24);
  }
  var _0x2f2895 = (_0x56dc43 >>> 0).toString(16);
  return "tn_r=" + _0x1c91a9 + "&track=" + encodeURIComponent(_0x30c71e) + "&ts=" + _0x2d5004 + "&sign=" + _0x2f2895;
}
var _0x35b1ad = _0x3365;
function _0xd35b() {
  var _0xd2d354 = ["length", "px, 0px)", "76951gmaggG", "createElement", "tncode_canvas_mark", "_tncode", "filter", "tncode.php?t=", "request", "_ok", "缃戠粶寮傚父锛岃閲嶈瘯(E999)", "鏄剧ず楠岃瘉鐮佹椂鍑洪敊:", "tncode_msg_error", "9WuJgrn", "appendChild", "tn_code", "妫€娴嬪埌楠岃瘉鎸夐挳鏈纭垵濮嬪寲锛屾墽琛岃ˉ鏁戠粦瀹�...", "clicaptcha-submit-info", "寮€濮嬬粦瀹氶獙璇佹寜閽�...", "toDataURL", "responseText", "getContext", "preventDefault", "cloneNode", "indexOf", "_cache", "status", "6665144zFapfx", "_draw_fullbg", "data", "attachEvent", "Microsoft.XMLHTTP", "touchend", "trim", "楠岃瘉鐮佺郴缁熷垵濮嬪寲瀹屾垚", "鏃犳硶鍒涘缓楠岃瘉鐮佸脊绐楀厓绱�", "pointer", "log", "alpha(opacity=", "_result", "map", "value", "stringify", "(\\s|$)", "event", "innerHTML", "tncode", "getElementsByClassName", "楠岃瘉澶辫触(", "_is_moving", "椤甸潰鏃犻獙璇佹寜閽紝鏃犻渶缁戝畾", "send", "image/webp", "_html", "responseXML", "楠岃瘉鎴愬姛", "top", "getElementsByTagName", "init", "src", "parentNode", "&nowebp=1", "animation", "slide_block_text", "readyState", "<div class=\"tncode_div_bg\" id=\"tncode_div_bg\"></div><div class=\"tncode_div\" id=\"tncode_div\"><div class=\"loading\">鍔犺浇涓�</div><canvas class=\"tncode_canvas_bg\"></canvas><canvas class=\"tncode_canvas_mark\"></canvas><div class=\"hgroup\"></div><div class=\"tncode_msg_error\"></div><div class=\"tncode_msg_ok\"></div><div class=\"slide\"><div class=\"slide_block\"></div><div class=\"slide_block_text\">鎸変綇宸﹁竟婊戝潡鍚庡畬鎴愭嫾鍥�</div></div><div class=\"tools\"><div class=\"tncode_close\"></div><div class=\"tncode_refresh\"></div></div></div>", "\n                position: absolute;\n                width: ", "_is_draw_bg", "hgroup", "none", "className", "clientX", "drawImage", "tncode_close", "failure", "px;\n                height: ", "_track_data", "_img", "opacity", "mouseup", "202204uskpPP", "_img_h", "浣嶇疆涓嶆纭�(E006)", "hide", "cssText", "onload", "function", "鏁版嵁瑙ｅ瘑澶辫触(E002)", "_getElement", "prototype", "tncode_canvas_bg", "onreadystatechange", "1720205VJtyfm", "createXhrObject", "script", "onclick", "_addButtonAnimation", "push", "transform: translate(", "_bindTncodeButtons", "_block_start_move", "clientY", "undefined", "tncode-ripple", "ajax created failure", "addEventListener", "getElementByClassName", "_img_loaded", "touchstart", "width", "绛惧悕楠岃瘉澶辫触(E004)", "getElementById", "鏈壘鍒颁换浣曢獙璇佹寜閽紙class=\"tncode\"锛�", "ontouchstart", "warn", "display", "tncode-pulse 2s ease-in-out", "tncode_div_bg", "_err_c", "click", "putImageData", "琛屼负寮傚父(E005)", "1426110KwhGCB", "_draw_mark", "height", "_addPulseAnimation", "touchmove", "楠岃瘉鐮佸凡杩囨湡锛岃妫€鏌ュ綋鍓嶆椂闂�(E003)", "tncode_msg_ok", "remove", "_mark_w", "touches", "_currentUrl", "cursor", "childNodes", "tncode_refresh", "_block_start_y", "162Pcbtil", "涓獙璇佹寜閽�", "split", "style", "nodeType", "(\\s|^)", "mousedown", "_showmsg", "Msxml2.XMLHTTP", "_img_w", "_doing", "span", "\n                        <span class=\"tncode-icon\">\n                            <span class=\"ripple-dot\"></span>\n                            <span class=\"ripple-circle\"></span>\n                            <span class=\"ripple-circle-2\"></span>\n                            <span class=\"ripple-circle-3\"></span>\n                        </span>\n                        <span class=\"tncode-text\">鐐瑰嚮杩涜瀹夊叏楠岃瘉</span>\n                    ", "refresh", "_draw_bg", "error", "POST", "transform: translate(0px, 0px)", "px;\n                pointer-events: none;\n                transform: scale(0);\n                animation: tncode-ripple-animation 0.6s ease-out;\n            ", "getBoundingClientRect", "slide_block", "_onsuccess", "_send_result_success", "_mark_offset", "open", "call", "_reset", "px;\n                top: ", "tncode_div", "婊戝潡鍏冪礌鏈壘鍒帮紝鏃犳硶缁戝畾鎷栧姩浜嬩欢", "鍙傛暟缂哄け(E001)", "1772012lUwSWA", "鏄剧ず楠岃瘉鐮佸脊绐�...", "_block_on_end", "_bind", "replace", "2452CUrdtq", "block", "max", "random", "getTime", "_block_start_x", "_track_start_time", "show"];
  _0xd35b = function () {
    return _0xd2d354;
  };
  return _0xd35b();
}
(function (_0x18e59e, _0x1d1b1f) {
  var _0x54ae73 = _0x3365;
  var _0x51018d = _0x18e59e();
  while (true) {
    try {
      var _0x24ed3f = parseInt(_0x54ae73(522)) / 1 + -parseInt(_0x54ae73(434)) / 2 + -parseInt(_0x54ae73(564)) / 3 + parseInt(_0x54ae73(429)) / 4 + -parseInt(_0x54ae73(534)) / 5 + -parseInt(_0x54ae73(579)) / 6 * (parseInt(_0x54ae73(444)) / 7) + -parseInt(_0x54ae73(469)) / 8 * (-parseInt(_0x54ae73(455)) / 9);
      if (_0x24ed3f === _0x1d1b1f) {
        break;
      } else {
        _0x51018d.push(_0x51018d.shift());
      }
    } catch (_0x4f8799) {
      _0x51018d.push(_0x51018d.shift());
    }
  }
})(_0xd35b, 360902);
if (!document[_0x35b1ad(548)]) {
  function hasClass(_0x1e7ef5, _0xff5b45) {
    var _0x5a5627 = _0x35b1ad;
    _0xff5b45 = _0xff5b45 || "";
    if (_0xff5b45.replace(/\s/g, "")[_0x5a5627(442)] == 0) {
      return false;
    }
    var _0x2278c5 = new RegExp(" " + _0xff5b45 + " ").test(" " + _0x1e7ef5[_0x5a5627(512)] + " ");
    return _0x2278c5;
  }
  document[_0x35b1ad(548)] = function (_0x340a60, _0x2cae54) {
    var _0x16c766 = _0x35b1ad;
    if (document[_0x16c766(489)]) {
      var _0x14dcc2 = document[_0x16c766(489)](_0x340a60);
      if (typeof _0x2cae54 === _0x16c766(544)) {
        _0x2cae54 = 0;
      }
      return _0x2cae54 === -1 ? Array.prototype.slice[_0x16c766(423)](_0x14dcc2) : _0x14dcc2[_0x2cae54];
    }
    var _0x17e0a8 = document[_0x16c766(499)]("*");
    var _0x42927b = [];
    for (var _0x298749 = 0; _0x298749 < _0x17e0a8[_0x16c766(442)]; _0x298749++) {
      if (hasClass(_0x17e0a8[_0x298749], _0x340a60)) {
        _0x42927b[_0x16c766(539)](_0x17e0a8[_0x298749]);
      }
    }
    if (typeof _0x2cae54 === _0x16c766(544)) {
      _0x2cae54 = 0;
    }
    return _0x2cae54 == -1 ? _0x42927b : _0x42927b[_0x2cae54];
  };
  function addClass(_0x112e18, _0x28ccc2) {
    !hasClass(_0x112e18, _0x28ccc2) && (_0x112e18.className += " " + _0x28ccc2);
  }
  function removeClass(_0x178f8c, _0x318294) {
    var _0x5e129d = _0x35b1ad;
    hasClass(_0x178f8c, _0x318294) && (_0x178f8c[_0x5e129d(512)] = _0x178f8c[_0x5e129d(512)][_0x5e129d(433)](new RegExp(_0x5e129d(584) + _0x318294 + _0x5e129d(485)), " "));
  }
}
function _0x3365(_0x9cadf6, _0x34eef7) {
  var _0xd35b4e = _0xd35b();
  _0x3365 = function (_0x3365e7, _0x2194ff) {
    _0x3365e7 = _0x3365e7 - 421;
    var _0x143b5b = _0xd35b4e[_0x3365e7];
    return _0x143b5b;
  };
  return _0x3365(_0x9cadf6, _0x34eef7);
}
function appendHTML(_0x443ac1, _0x4b9260) {
  var _0x38e915 = _0x35b1ad;
  var _0x44ab5e = document[_0x38e915(445)]("div");
  var _0x472602 = null;
  var _0x49f11f = document.createDocumentFragment();
  _0x44ab5e.innerHTML = _0x4b9260;
  _0x472602 = _0x44ab5e[_0x38e915(576)];
  for (var _0x91c89d = 0, _0x4fd2ea = _0x472602[_0x38e915(442)]; _0x91c89d < _0x4fd2ea; _0x91c89d += 1) {
    _0x49f11f[_0x38e915(456)](_0x472602[_0x91c89d][_0x38e915(465)](true));
  }
  _0x443ac1.appendChild(_0x49f11f);
  _0x472602 = null;
  _0x49f11f = null;
}
var _ajax = function () {};
_ajax[_0x35b1ad(531)] = {
  request: function (_0x15c832, _0x2dbc94, _0x269ae1, _0x12b08c) {
    var _0x469f69 = _0x35b1ad;
    var _0x26e50b = this[_0x469f69(535)]()();
    _0x26e50b[_0x469f69(533)] = function () {
      var _0x504db6 = _0x469f69;
      if (_0x26e50b[_0x504db6(506)] !== 4) {
        return;
      }
      _0x26e50b[_0x504db6(468)] === 200 ? _0x269ae1.success(_0x26e50b[_0x504db6(462)], _0x26e50b[_0x504db6(496)]) : _0x269ae1[_0x504db6(516)](_0x26e50b, status);
    };
    _0x15c832 !== _0x469f69(595) && _0x12b08c && (_0x2dbc94 += "?" + this.JSONStringify(_0x12b08c), _0x12b08c = null);
    _0x26e50b[_0x469f69(422)](_0x15c832, _0x2dbc94, true);
    _0x15c832 === _0x469f69(595) && _0x12b08c && _0x26e50b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    _0x26e50b[_0x469f69(493)](_0x12b08c);
  },
  createXhrObject: function () {
    var _0x1eb318 = _0x35b1ad;
    var _0xf87b9f = [function () {
      return new XMLHttpRequest();
    }, function () {
      var _0x2e96f1 = _0x3365;
      return new ActiveXObject(_0x2e96f1(587));
    }, function () {
      var _0x1a4ac6 = _0x3365;
      return new ActiveXObject(_0x1a4ac6(473));
    }];
    var _0x579512 = 0;
    var _0x58d4e6 = _0xf87b9f[_0x1eb318(442)];
    for (; _0x579512 < _0x58d4e6; _0x579512++) {
      try {
        _0xf87b9f[_0x579512];
      } catch (_0x8051e7) {
        continue;
      }
      this[_0x1eb318(535)] = _0xf87b9f[_0x579512];
      return _0xf87b9f[_0x579512];
    }
    throw new Error(_0x1eb318(546));
  },
  JSONStringify: function (_0x59639e) {
    var _0x361b97 = _0x35b1ad;
    return JSON[_0x361b97(484)](_0x59639e).replace(/"|{|}/g, "")[_0x361b97(433)](/b:b/g, "=").replace(/b,b/g, "&");
  }
};
var tncode = {
  _obj: null,
  _tncode: null,
  _img: null,
  _img_loaded: false,
  _is_draw_bg: false,
  _is_moving: false,
  _block_start_x: 0,
  _block_start_y: 0,
  _doing: false,
  _mark_w: 50,
  _mark_h: 50,
  _mark_offset: 0,
  _img_w: 240,
  _img_h: 150,
  _result: false,
  _err_c: 0,
  _onsuccess: null,
  _track_data: [],
  _track_start_time: 0,
  _hmac_secret: "",
  _cache: {
    slide_block: null,
    slide_block_text: null,
    canvas_bg: null,
    canvas_mark: null,
    tncode_div_bg: null,
    tncode_div: null,
    hgroup: null
  },
  _getElement: function (_0x14c06e, _0x3db4cc) {
    var _0x91d7cc = _0x35b1ad;
    if (_0x3db4cc !== false && this[_0x91d7cc(467)][_0x14c06e]) {
      if (this._cache[_0x14c06e][_0x91d7cc(502)]) {
        return this._cache[_0x14c06e];
      }
    }
    var _0x5f3e7b = null;
    _0x14c06e === _0x91d7cc(559) || _0x14c06e === "tncode_div" ? _0x5f3e7b = document[_0x91d7cc(553)](_0x14c06e) : _0x5f3e7b = document[_0x91d7cc(548)](_0x14c06e);
    _0x5f3e7b && _0x3db4cc !== false && (this[_0x91d7cc(467)][_0x14c06e] = _0x5f3e7b);
    return _0x5f3e7b;
  },
  _bind: function (_0x299fd0, _0x3ebe55, _0x132321) {
    var _0x4c88c3 = _0x35b1ad;
    if (!_0x299fd0) {
      console[_0x4c88c3(556)]("灏濊瘯缁戝畾浜嬩欢鍒扮┖鍏冪礌:", _0x3ebe55);
      return false;
    }
    if (_0x299fd0.addEventListener) {
      _0x299fd0[_0x4c88c3(547)](_0x3ebe55, _0x132321);
      return true;
    } else {
      if (_0x299fd0[_0x4c88c3(472)]) {
        var _0x4e221f = _0x299fd0[_0x4c88c3(472)](_0x3ebe55, _0x132321);
        return _0x4e221f;
      }
    }
    return false;
  },
  _block_start_move: function (_0x4a9990) {
    var _0x1f6b6f = _0x35b1ad;
    if (tncode[_0x1f6b6f(589)] || !tncode[_0x1f6b6f(549)]) {
      return;
    }
    _0x4a9990[_0x1f6b6f(464)]();
    var _0x11326c = window[_0x1f6b6f(486)] || _0x4a9990;
    _0x11326c[_0x1f6b6f(573)] && (_0x11326c = _0x11326c.touches[0]);
    console[_0x1f6b6f(479)](_0x1f6b6f(542));
    var _0x4e68aa = tncode._getElement(_0x1f6b6f(505));
    if (_0x4e68aa) {
      _0x4e68aa[_0x1f6b6f(582)][_0x1f6b6f(557)] = _0x1f6b6f(511);
    }
    tncode._draw_bg();
    tncode[_0x1f6b6f(439)] = _0x11326c[_0x1f6b6f(513)];
    tncode[_0x1f6b6f(578)] = _0x11326c[_0x1f6b6f(543)];
    tncode[_0x1f6b6f(589)] = true;
    tncode._is_moving = true;
    tncode[_0x1f6b6f(518)] = [];
    tncode[_0x1f6b6f(440)] = new Date()[_0x1f6b6f(438)]();
    tncode[_0x1f6b6f(518)].push({
      x: _0x11326c[_0x1f6b6f(513)],
      y: _0x11326c[_0x1f6b6f(543)],
      t: 0
    });
  },
  _block_on_move: function (_0x16f204) {
    var _0x35cb2c = _0x35b1ad;
    if (!tncode[_0x35cb2c(589)]) {
      return true;
    }
    if (!tncode[_0x35cb2c(491)]) {
      return true;
    }
    _0x16f204.preventDefault();
    var _0x102456 = window[_0x35cb2c(486)] || _0x16f204;
    _0x102456[_0x35cb2c(573)] && (_0x102456 = _0x102456[_0x35cb2c(573)][0]);
    tncode[_0x35cb2c(491)] = true;
    console[_0x35cb2c(479)]("_block_on_move");
    var _0x491215 = _0x102456[_0x35cb2c(513)] - tncode._block_start_x;
    _0x491215 < 0 && (_0x491215 = 0);
    var _0x45fdc2 = tncode[_0x35cb2c(588)] - tncode[_0x35cb2c(572)];
    _0x491215 > _0x45fdc2 && (_0x491215 = _0x45fdc2);
    var _0x1987f8 = tncode._getElement(_0x35cb2c(599));
    _0x1987f8 && (_0x1987f8[_0x35cb2c(582)][_0x35cb2c(526)] = _0x35cb2c(540) + _0x491215 + _0x35cb2c(443));
    tncode[_0x35cb2c(421)] = _0x491215 / _0x45fdc2 * (tncode[_0x35cb2c(588)] - tncode[_0x35cb2c(572)]);
    tncode[_0x35cb2c(593)]();
    tncode[_0x35cb2c(565)]();
    var _0x4a19ed = new Date()[_0x35cb2c(438)]();
    tncode._track_data.push({
      x: _0x102456.clientX,
      y: _0x102456.clientY,
      t: _0x4a19ed - tncode[_0x35cb2c(440)]
    });
  },
  _block_on_end: function (_0x1933ff) {
    var _0x288a8c = _0x35b1ad;
    if (!tncode[_0x288a8c(589)]) {
      return true;
    }
    _0x1933ff[_0x288a8c(464)]();
    var _0x52db4b = window[_0x288a8c(486)] || _0x1933ff;
    _0x52db4b[_0x288a8c(573)] && (_0x52db4b = _0x52db4b[_0x288a8c(573)][0]);
    console[_0x288a8c(479)]("_block_on_end");
    tncode[_0x288a8c(491)] = false;
    tncode._send_result();
  },
  _send_result: function () {
    var _0x966744 = _0x35b1ad;
    tncode[_0x966744(586)]("鎻愪氦楠岃瘉涓�...", 0);
    var _0x4be8a2 = {
      success: tncode[_0x966744(601)],
      failure: tncode._send_result_failure
    };
    tncode._result = false;
    var _0x8ab043 = new _ajax();
    var _0x7b44bb = generateSecurePayload(tncode[_0x966744(518)], tncode[_0x966744(421)]);
    _0x8ab043[_0x966744(450)](_0x966744(595), tncode[_0x966744(574)]() + "check.php", _0x4be8a2, _0x7b44bb);
  },
  _send_result_success: function (_0x2623c4, _0xe079c1) {
    var _0x5eaef4 = _0x35b1ad;
    tncode._doing = false;
    if (_0x2623c4[_0x5eaef4(466)](_0x5eaef4(451)) != -1) {
      document[_0x5eaef4(553)]("clicaptcha-submit-info")[_0x5eaef4(483)] = _0x2623c4;
      tncode[_0x5eaef4(447)][_0x5eaef4(487)] = _0x5eaef4(497);
      tncode._showmsg(_0x5eaef4(497), 1);
      tncode[_0x5eaef4(481)] = true;
      var _0x189f90 = tncode[_0x5eaef4(530)](_0x5eaef4(510));
      if (_0x189f90) {
        _0x189f90[_0x5eaef4(582)][_0x5eaef4(557)] = _0x5eaef4(435);
      }
      setTimeout(tncode[_0x5eaef4(525)], 1000);
      tncode[_0x5eaef4(600)] && tncode[_0x5eaef4(600)]();
    } else {
      var _0x35dc6e = "楠岃瘉澶辫触";
      var _0x586a0a = _0x2623c4[_0x5eaef4(475)]();
      var _0x448d1e = {
        error_missing_params: _0x5eaef4(428),
        error_decrypt_failed: _0x5eaef4(529),
        error_expired: _0x5eaef4(569),
        error_invalid_sign: _0x5eaef4(552),
        error_track: _0x5eaef4(563),
        error: _0x5eaef4(524)
      };
      if (_0x448d1e[_0x586a0a]) {
        _0x35dc6e = _0x448d1e[_0x586a0a];
      } else {
        _0x586a0a !== "" && (_0x35dc6e = _0x5eaef4(490) + _0x586a0a + ")");
      }
      document.getElementById(_0x5eaef4(459)).value = "";
      var _0x2a15d7 = document.getElementById("tncode_div");
      _0x2a15d7 && (addClass(_0x2a15d7, "dd"), setTimeout(function () {
        removeClass(_0x2a15d7, "dd");
      }, 200));
      tncode._result = false;
      tncode._tncode[_0x5eaef4(487)] = _0x35dc6e;
      tncode._showmsg(_0x35dc6e);
      tncode[_0x5eaef4(560)]++;
      tncode[_0x5eaef4(560)] > 5 && tncode[_0x5eaef4(592)]();
    }
  },
  _send_result_failure: function (_0x5133cf, _0x2081ca) {
    var _0x4fc5f6 = _0x35b1ad;
    tncode[_0x4fc5f6(589)] = false;
    tncode[_0x4fc5f6(481)] = false;
    var _0x38a836 = _0x4fc5f6(452);
    tncode[_0x4fc5f6(447)][_0x4fc5f6(487)] = _0x38a836;
    tncode[_0x4fc5f6(586)](_0x38a836);
    var _0x29c9f0 = document[_0x4fc5f6(553)](_0x4fc5f6(426));
    _0x29c9f0 && (addClass(_0x29c9f0, "dd"), setTimeout(function () {
      removeClass(_0x29c9f0, "dd");
    }, 200));
  },
  _draw_fullbg: function () {
    var _0x2e6dff = _0x35b1ad;
    var _0x538cb9 = tncode._getElement("tncode_canvas_bg");
    if (!_0x538cb9) {
      return;
    }
    var _0x33316b = _0x538cb9.getContext("2d");
    _0x33316b[_0x2e6dff(514)](tncode._img, 0, tncode[_0x2e6dff(523)] * 2, tncode._img_w, tncode._img_h, 0, 0, tncode._img_w, tncode[_0x2e6dff(523)]);
  },
  _draw_bg: function () {
    var _0x193718 = _0x35b1ad;
    if (tncode._is_draw_bg) {
      return;
    }
    tncode[_0x193718(509)] = true;
    var _0x52389d = tncode._getElement("tncode_canvas_bg");
    if (!_0x52389d) {
      return;
    }
    var _0x393cf7 = _0x52389d[_0x193718(463)]("2d");
    _0x393cf7.drawImage(tncode._img, 0, 0, tncode[_0x193718(588)], tncode[_0x193718(523)], 0, 0, tncode[_0x193718(588)], tncode[_0x193718(523)]);
  },
  _draw_mark: function () {
    var _0x5e6326 = _0x35b1ad;
    var _0x238727 = tncode[_0x5e6326(530)](_0x5e6326(446));
    if (!_0x238727) {
      return;
    }
    var _0x78dc30 = _0x238727.getContext("2d");
    _0x78dc30.clearRect(0, 0, _0x238727[_0x5e6326(551)], _0x238727.height);
    _0x78dc30.drawImage(tncode[_0x5e6326(519)], 0, tncode[_0x5e6326(523)], tncode[_0x5e6326(572)], tncode[_0x5e6326(523)], tncode._mark_offset, 0, tncode[_0x5e6326(572)], tncode[_0x5e6326(523)]);
    var _0x1343fa = _0x78dc30.getImageData(0, 0, tncode[_0x5e6326(588)], tncode[_0x5e6326(523)]);
    var _0x1b313f = _0x1343fa[_0x5e6326(471)];
    var _0x4e16ca = tncode[_0x5e6326(523)];
    var _0x3e928c = tncode[_0x5e6326(588)];
    for (var _0x3fbb94 = 0; _0x3fbb94 < _0x4e16ca; _0x3fbb94++) {
      var _0xf0c8c2 = 1;
      var _0x464af3 = -1;
      for (var _0x2a53d4 = 0; _0x2a53d4 < _0x3e928c && _0x2a53d4 >= 0 && _0x2a53d4 > _0x464af3;) {
        var _0x2a3694 = (_0x3fbb94 * _0x3e928c + _0x2a53d4) * 4;
        _0x2a53d4 += _0xf0c8c2;
        var _0x5f04a2 = _0x1b313f[_0x2a3694];
        var _0x3ecb50 = _0x1b313f[_0x2a3694 + 1];
        var _0x5d26c1 = _0x1b313f[_0x2a3694 + 2];
        if (_0x5f04a2 + _0x3ecb50 + _0x5d26c1 < 200) {
          _0x1b313f[_0x2a3694 + 3] = 0;
        } else {
          var _0xcf2264 = [1, -5];
          var _0x376a83 = [250, 0];
          for (var _0x2a3694 = 1; _0x2a3694 < _0xcf2264[0] - _0xcf2264[1]; _0x2a3694++) {
            var _0x26cb99 = _0xcf2264[0] - 1 * _0x2a3694;
            var _0x371ca6 = parseInt(_0x376a83[0] - (_0x376a83[0] - _0x376a83[1]) / (_0xcf2264[0] - _0xcf2264[1]) * _0x2a3694);
            var _0x4853c6 = (_0x3fbb94 * _0x3e928c + _0x2a53d4 + _0x26cb99 * _0xf0c8c2) * 4;
            _0x1b313f[_0x4853c6 + 3] = _0x371ca6;
          }
          if (_0xf0c8c2 == -1) {
            break;
          }
          _0x464af3 = _0x2a53d4;
          _0x2a53d4 = _0x3e928c - 1;
          _0xf0c8c2 = -1;
        }
      }
    }
    _0x78dc30[_0x5e6326(562)](_0x1343fa, 0, 0);
  },
  _reset: function () {
    var _0x280606 = _0x35b1ad;
    tncode[_0x280606(421)] = 0;
    tncode[_0x280606(593)]();
    tncode._draw_mark();
    var _0x13cde6 = tncode[_0x280606(530)]("slide_block");
    if (_0x13cde6) {
      _0x13cde6[_0x280606(582)][_0x280606(526)] = _0x280606(596);
    }
  },
  show: function () {
    var _0x23f0bb = _0x35b1ad;
    try {
      console[_0x23f0bb(479)](_0x23f0bb(430));
      var _0x3b7e56 = tncode[_0x23f0bb(530)](_0x23f0bb(510));
      _0x3b7e56 && (_0x3b7e56[_0x23f0bb(582)].display = _0x23f0bb(511));
      var _0xfb5eab = tncode[_0x23f0bb(530)]("tncode_div_bg", false);
      var _0xedc332 = tncode._getElement(_0x23f0bb(426), false);
      (!_0xfb5eab || !_0xedc332) && (console[_0x23f0bb(556)]("楠岃瘉鐮佸脊绐楀厓绱犳湭鎵惧埌锛岄噸鏂板垵濮嬪寲..."), tncode[_0x23f0bb(519)] = null, tncode[_0x23f0bb(467)] = {
        slide_block: null,
        slide_block_text: null,
        canvas_bg: null,
        canvas_mark: null,
        tncode_div_bg: null,
        tncode_div: null,
        hgroup: null
      }, tncode[_0x23f0bb(495)](), tncode[_0x23f0bb(500)](), _0xfb5eab = tncode[_0x23f0bb(530)](_0x23f0bb(559), false), _0xedc332 = tncode._getElement(_0x23f0bb(426), false));
      _0xfb5eab && _0xedc332 ? (tncode[_0x23f0bb(592)](), tncode[_0x23f0bb(447)] = this, _0xfb5eab[_0x23f0bb(582)][_0x23f0bb(557)] = _0x23f0bb(435), _0xedc332[_0x23f0bb(582)][_0x23f0bb(557)] = _0x23f0bb(435), console.log("楠岃瘉鐮佸脊绐楁樉绀烘垚鍔�")) : console[_0x23f0bb(594)](_0x23f0bb(477));
    } catch (_0x454389) {
      console.error(_0x23f0bb(453), _0x454389);
    }
  },
  hide: function () {
    var _0x2f3142 = _0x35b1ad;
    document[_0x2f3142(553)](_0x2f3142(559))[_0x2f3142(582)][_0x2f3142(557)] = _0x2f3142(511);
    document.getElementById(_0x2f3142(426))[_0x2f3142(582)][_0x2f3142(557)] = _0x2f3142(511);
  },
  _showmsg: function (_0x113fd7, _0x1576f2) {
    var _0x35a7ee = _0x35b1ad;
    if (!_0x1576f2) {
      _0x1576f2 = 0;
      var _0x9fa930 = document[_0x35a7ee(548)](_0x35a7ee(454));
    } else {
      var _0x9fa930 = document[_0x35a7ee(548)](_0x35a7ee(570));
    }
    _0x9fa930[_0x35a7ee(487)] = _0x113fd7;
    var _0x29e9a7 = function (_0x6bb2e0, _0x5e1fcc) {
      var _0x2332b5 = _0x35a7ee;
      _0x6bb2e0.style[_0x2332b5(520)] != undefined ? _0x6bb2e0.style[_0x2332b5(520)] = _0x5e1fcc / 100 : _0x6bb2e0[_0x2332b5(582)][_0x2332b5(448)] = _0x2332b5(480) + _0x5e1fcc + ")";
    };
    function _0x15ee66(_0x498555, _0x640f2b, _0x2ef375) {
      var _0x21c9ae = _0x35a7ee;
      if (_0x498555) {
        var _0x2b03f2 = _0x498555[_0x21c9ae(582)][_0x21c9ae(448)].replace(_0x21c9ae(480), "").replace(")", "") || _0x498555[_0x21c9ae(582)].opacity || 100;
        _0x2b03f2 < 1 && (_0x2b03f2 = _0x2b03f2 * 100);
        var _0x2152ca = _0x2ef375 / 1000;
        var _0x5a3e94 = (100 - _0x640f2b) / _0x2152ca;
        var _0x54c7ca = null;
        _0x54c7ca = setInterval(function () {
          var _0x34ead4 = _0x21c9ae;
          _0x2b03f2 - _0x5a3e94 > _0x640f2b ? (_0x2b03f2 -= _0x5a3e94, _0x29e9a7(_0x498555, _0x2b03f2)) : (_0x29e9a7(_0x498555, 0), _0x1576f2 == 0 && tncode[_0x34ead4(424)](), clearInterval(_0x54c7ca));
        }, 100);
      }
    }
    function _0x1f368a(_0x4268ba, _0x505118, _0x1c4488) {
      var _0x5a1f58 = _0x35a7ee;
      if (_0x4268ba) {
        var _0x21dba2 = _0x4268ba.style[_0x5a1f58(448)][_0x5a1f58(433)]("alpha(opacity=", "").replace(")", "") || _0x4268ba[_0x5a1f58(582)][_0x5a1f58(520)];
        _0x21dba2 < 1 && (_0x21dba2 = _0x21dba2 * 100);
        var _0x3fc488 = _0x1c4488 / 1000;
        var _0x3ddf7f = _0x3fc488 < 2 ? _0x505118 / _0x3fc488 : _0x505118 / _0x3fc488 - 1;
        var _0x2a2674 = null;
        _0x2a2674 = setInterval(function () {
          _0x21dba2 < _0x505118 ? (_0x21dba2 += _0x3ddf7f, _0x29e9a7(_0x4268ba, _0x21dba2)) : (clearInterval(_0x2a2674), setTimeout(function () {
            _0x15ee66(_0x9fa930, 0, 6000);
          }, 1000));
        }, 100);
      }
    }
    _0x1f368a(_0x9fa930, 80, 4000);
  },
  _html: function () {
    var _0x55976e = _0x35b1ad;
    var _0x505a0c = document[_0x55976e(553)]("tncode_div_bg");
    if (_0x505a0c) {
      return;
    }
    var _0x3c0103 = _0x55976e(507);
    var _0x4128de = document[_0x55976e(499)]("body");
    appendHTML(_0x4128de[0], _0x3c0103);
  },
  _currentUrl: function () {
    var _0x100642 = _0x35b1ad;
    var _0x5936d0 = document[_0x100642(499)](_0x100642(536));
    for (var _0x43a47c in _0x5936d0) {
      var _0x14907b = _0x5936d0[_0x43a47c];
      if (_0x14907b[_0x100642(501)][_0x100642(466)](_0x100642(457)) !== -1) {
        var _0xbe1e84 = _0x14907b[_0x100642(501)][_0x100642(581)](_0x100642(457));
        return _0xbe1e84[0];
      }
    }
  },
  refresh: function () {
    var _0x34f31f = _0x35b1ad;
    var _0x55a794 = !![][_0x34f31f(482)] && document.createElement("canvas")[_0x34f31f(461)](_0x34f31f(494))[_0x34f31f(466)]("data:image/webp") == 0;
    var _0x42f2c6 = this;
    tncode[_0x34f31f(560)] = 0;
    tncode[_0x34f31f(509)] = false;
    tncode[_0x34f31f(481)] = false;
    tncode._img_loaded = false;
    var _0x16e406 = tncode[_0x34f31f(530)]("tncode_canvas_bg");
    if (_0x16e406) {
      _0x16e406[_0x34f31f(582)].display = "none";
    }
    _0x16e406 = tncode[_0x34f31f(530)](_0x34f31f(446));
    if (_0x16e406) {
      _0x16e406[_0x34f31f(582)][_0x34f31f(557)] = "none";
    }
    tncode[_0x34f31f(519)] = new Image();
    var _0x3148d8 = tncode._currentUrl() + _0x34f31f(449) + Math[_0x34f31f(437)]();
    !_0x55a794 && (_0x3148d8 += _0x34f31f(503));
    tncode[_0x34f31f(519)][_0x34f31f(501)] = _0x3148d8;
    tncode[_0x34f31f(519)][_0x34f31f(527)] = function () {
      var _0x190138 = _0x34f31f;
      tncode[_0x190138(470)]();
      var _0x45c8da = tncode[_0x190138(530)](_0x190138(446));
      if (_0x45c8da) {
        var _0xb55735 = _0x45c8da[_0x190138(463)]("2d");
        _0xb55735.clearRect(0, 0, _0x45c8da[_0x190138(551)], _0x45c8da.height);
      }
      tncode[_0x190138(549)] = true;
      _0x16e406 = tncode[_0x190138(530)](_0x190138(532));
      if (_0x16e406) {
        _0x16e406[_0x190138(582)].display = "";
      }
      _0x16e406 = tncode[_0x190138(530)](_0x190138(446));
      if (_0x16e406) {
        _0x16e406[_0x190138(582)][_0x190138(557)] = "";
      }
    };
    _0x16e406 = tncode[_0x34f31f(530)]("slide_block");
    if (_0x16e406) {
      _0x16e406[_0x34f31f(582)][_0x34f31f(526)] = _0x34f31f(596);
    }
    _0x16e406 = tncode[_0x34f31f(530)](_0x34f31f(505));
    if (_0x16e406) {
      _0x16e406[_0x34f31f(582)][_0x34f31f(557)] = _0x34f31f(435);
    }
  },
  init: function () {
    var _0x1373d9 = _0x35b1ad;
    var _0x29c7ee = this;
    var _0x1081a0 = document[_0x1373d9(548)](_0x1373d9(488), -1);
    if (!_0x1081a0 || _0x1081a0[_0x1373d9(442)] === 0) {
      console[_0x1373d9(479)]("椤甸潰鏃犻獙璇佹寜閽紝璺宠繃楠岃瘉鐮佺郴缁熷垵濮嬪寲");
      return;
    }
    console.log("妫€娴嬪埌楠岃瘉鎸夐挳锛屽紑濮嬪垵濮嬪寲楠岃瘉鐮佺郴缁�...");
    if (!tncode[_0x1373d9(519)]) {
      tncode[_0x1373d9(495)]();
      var _0x27d869 = tncode[_0x1373d9(530)](_0x1373d9(599));
      _0x27d869 ? (tncode[_0x1373d9(432)](_0x27d869, _0x1373d9(585), _0x29c7ee[_0x1373d9(542)]), tncode[_0x1373d9(432)](document, "mousemove", _0x29c7ee._block_on_move), tncode[_0x1373d9(432)](document, _0x1373d9(521), _0x29c7ee[_0x1373d9(431)]), tncode[_0x1373d9(432)](_0x27d869, _0x1373d9(550), _0x29c7ee[_0x1373d9(542)]), tncode[_0x1373d9(432)](document, _0x1373d9(568), _0x29c7ee._block_on_move), tncode[_0x1373d9(432)](document, _0x1373d9(474), _0x29c7ee._block_on_end)) : console[_0x1373d9(594)](_0x1373d9(427));
      var _0x154db5 = tncode[_0x1373d9(530)](_0x1373d9(515));
      _0x154db5 && (tncode._bind(_0x154db5, _0x1373d9(550), _0x29c7ee[_0x1373d9(525)]), tncode[_0x1373d9(432)](_0x154db5, _0x1373d9(561), _0x29c7ee[_0x1373d9(525)]));
      var _0x5deb54 = tncode[_0x1373d9(530)](_0x1373d9(577));
      _0x5deb54 && (tncode[_0x1373d9(432)](_0x5deb54, _0x1373d9(550), _0x29c7ee[_0x1373d9(592)]), tncode[_0x1373d9(432)](_0x5deb54, _0x1373d9(561), _0x29c7ee.refresh));
    }
    tncode[_0x1373d9(541)]();
    console[_0x1373d9(479)](_0x1373d9(476));
  },
  _bindTncodeButtons: function () {
    var _0x44800e = _0x35b1ad;
    console[_0x44800e(479)](_0x44800e(460));
    var _0x1e1dad = this;
    var _0x4f9f9f = document[_0x44800e(548)]("tncode", -1);
    if (_0x4f9f9f && _0x4f9f9f.length > 0) {
      console.log("鎵惧埌", _0x4f9f9f[_0x44800e(442)], "涓獙璇佹寜閽�");
      var _0x233678 = 0;
      for (var _0x1b806b = 0; _0x1b806b < _0x4f9f9f.length; _0x1b806b++) {
        if (_0x4f9f9f[_0x1b806b] && _0x4f9f9f[_0x1b806b][_0x44800e(583)] === 1) {
          _0x4f9f9f[_0x1b806b].innerHTML = _0x44800e(591);
          _0x4f9f9f[_0x1b806b][_0x44800e(582)][_0x44800e(575)] = _0x44800e(478);
          _0x4f9f9f[_0x1b806b][_0x44800e(537)] = null;
          _0x4f9f9f[_0x1b806b][_0x44800e(555)] = null;
          var _0x149dbc = tncode[_0x44800e(432)](_0x4f9f9f[_0x1b806b], _0x44800e(561), _0x1e1dad[_0x44800e(441)]);
          tncode[_0x44800e(432)](_0x4f9f9f[_0x1b806b], "touchstart", _0x1e1dad[_0x44800e(441)]);
          tncode[_0x44800e(538)](_0x4f9f9f[_0x1b806b]);
          _0x149dbc !== false && _0x233678++;
        }
      }
      console[_0x44800e(479)]("鎴愬姛缁戝畾", _0x233678, _0x44800e(580));
    } else {
      console[_0x44800e(556)](_0x44800e(554));
    }
  },
  _addButtonAnimation: function (_0x30c211) {
    var _0x4963fd = _0x35b1ad;
    if (!_0x30c211) {
      return;
    }
    _0x30c211[_0x4963fd(547)]("click", function (_0x440132) {
      var _0x936a53 = _0x4963fd;
      var _0x374be5 = document[_0x936a53(445)](_0x936a53(590));
      _0x374be5[_0x936a53(512)] = _0x936a53(545);
      var _0x133226 = this[_0x936a53(598)]();
      var _0x49cc9b = Math[_0x936a53(436)](_0x133226.width, _0x133226[_0x936a53(566)]);
      var _0x4dd565 = _0x440132[_0x936a53(513)] - _0x133226.left - _0x49cc9b / 2;
      var _0x25b044 = _0x440132.clientY - _0x133226[_0x936a53(498)] - _0x49cc9b / 2;
      _0x374be5[_0x936a53(582)][_0x936a53(526)] = _0x936a53(508) + _0x49cc9b + _0x936a53(517) + _0x49cc9b + "px;\n                border-radius: 50%;\n                background: rgba(102, 126, 234, 0.2);\n                left: " + _0x4dd565 + _0x936a53(425) + _0x25b044 + _0x936a53(597);
      this[_0x936a53(456)](_0x374be5);
      setTimeout(function () {
        var _0x38a3f1 = _0x936a53;
        _0x374be5[_0x38a3f1(571)]();
      }, 600);
    });
    tncode[_0x4963fd(567)](_0x30c211);
  },
  _addPulseAnimation: function (_0x136abc) {
    if (!_0x136abc) {
      return;
    }
    var _0x4b2d24 = setInterval(function () {
      var _0x4895a5 = _0x3365;
      if (!_0x136abc[_0x4895a5(502)]) {
        clearInterval(_0x4b2d24);
        return;
      }
      _0x136abc[_0x4895a5(582)][_0x4895a5(504)] = _0x4895a5(558);
      setTimeout(function () {
        var _0x2505cf = _0x4895a5;
        if (_0x136abc) {
          _0x136abc[_0x2505cf(582)][_0x2505cf(504)] = "";
        }
      }, 2000);
    }, 5000);
  },
  result: function () {
    var _0x270866 = _0x35b1ad;
    return tncode[_0x270866(481)];
  },
  onsuccess: function (_0x5c3436) {
    var _0x345500 = _0x35b1ad;
    tncode[_0x345500(600)] = _0x5c3436;
  },
  rebind: function () {
    var _0x5b592c = _0x35b1ad;
    var _0x3c431b = document[_0x5b592c(548)](_0x5b592c(488), -1);
    if (!_0x3c431b || _0x3c431b[_0x5b592c(442)] === 0) {
      console[_0x5b592c(479)](_0x5b592c(492));
      return;
    }
    tncode[_0x5b592c(541)] && tncode[_0x5b592c(541)]();
  }
};
var TN = tncode;
var _old_onload = window.onload;
document[_0x35b1ad(547)]("DOMContentLoaded", function () {
  var _0x50303e = _0x35b1ad;
  typeof _old_onload == _0x50303e(528) && _old_onload();
  tncode[_0x50303e(500)]();
});
window[_0x35b1ad(547)]("load", function () {
  setTimeout(function () {
    var _0x3af5f2 = _0x3365;
    if (typeof tncode === _0x3af5f2(544)) {
      return;
    }
    var _0x3f48e7 = document.getElementByClassName("tncode", -1);
    if (!_0x3f48e7 || _0x3f48e7[_0x3af5f2(442)] === 0) {
      return;
    }
    var _0x1770e4 = false;
    for (var _0x6a09bf = 0; _0x6a09bf < _0x3f48e7[_0x3af5f2(442)]; _0x6a09bf++) {
      if (_0x3f48e7[_0x6a09bf] && _0x3f48e7[_0x6a09bf].nodeType === 1) {
        if (!_0x3f48e7[_0x6a09bf].style[_0x3af5f2(575)] || _0x3f48e7[_0x6a09bf][_0x3af5f2(582)][_0x3af5f2(575)] !== _0x3af5f2(478)) {
          _0x1770e4 = true;
          console.warn(_0x3af5f2(458));
          break;
        }
      }
    }
    _0x1770e4 && tncode[_0x3af5f2(541)] && tncode[_0x3af5f2(541)]();
  }, 200);
});