//Tue Dec 09 2025 14:37:05 GMT+0000 (Coordinated Universal Time)
//
//
const _0xa4abe6 = {
  length: 10
};
const SXFormFill = {
  defaultData: {
    groups: Array.from(_0xa4abe6, () => ({
      name: "",
      idCard: "",
      phone: "",
      bankBranch: "",
      reservationAmount: "",
      note: ""
    }))
  },
  savedData: null,
  _checkAuth() {
    const _0x52810d = StorageCache.get("sx_kami_key", "");
    if (!_0x52810d) {
      throw new Error("AUTH_REQUIRED");
    }
    const _0x50f0c2 = StorageCache.get("sx_kami_cache_v2", null);
    if (!_0x50f0c2 || !_0x50f0c2.ok) {
      throw new Error("AUTH_INVALID");
    }
    const _0x3c9de3 = _0x50f0c2.expire_ts;
    if (_0x3c9de3 && _0x3c9de3 < Date.now()) {
      {
        throw new Error("AUTH_EXPIRED");
      }
    }
    return true;
  },
  async init() {
    this.savedData = StorageCache.get("autofillData", this.defaultData);
    (!this.savedData || !this.savedData.groups) && (this.savedData = this.defaultData);
  },
  isABCBank() {
    const _0x4fbfd1 = window.location.href.toLowerCase();
    const _0x1af068 = (document.title || "").toLowerCase();
    return _0x4fbfd1.includes("abchina.com") || _0x1af068.includes("农业银行") || _0x1af068.includes("中国农业银行");
  },
  isICBCBank() {
    const _0x12cb82 = window.location.href.toLowerCase();
    const _0x386914 = (document.title || "").toLowerCase();
    const _0x34158f = (document.body?.["innerText"] || "").slice(0, 500).toLowerCase();
    return _0x12cb82.includes("icbc.com") || _0x12cb82.includes("icbc") || _0x386914.includes("工商银行") || _0x386914.includes("中国工商银行") || _0x386914.includes("icbc") || _0x34158f.includes("中国工商银行") && _0x34158f.includes("预约");
  },
  isCCBBank() {
    const _0x41c13a = window.location.href.toLowerCase();
    const _0x58bdda = (document.title || "").toLowerCase();
    return _0x41c13a.includes("ccb.com") || _0x58bdda.includes("建设银行") || _0x58bdda.includes("中国建设银行");
  },
  isBOCBank() {
    const _0x16d9b7 = window.location.href.toLowerCase();
    const _0x431b68 = (document.title || "").toLowerCase();
    return _0x16d9b7.includes("boc.cn") || _0x16d9b7.includes("bankofchina") || _0x431b68.includes("中国银行");
  },
  isBOCOMBank() {
    const _0x47c095 = window.location.href.toLowerCase();
    const _0x502231 = (document.title || "").toLowerCase();
    return _0x47c095.includes("bankcomm.com") || _0x47c095.includes("95559") || _0x502231.includes("交通银行");
  },
  isPSBCBank() {
    const _0x2c9288 = window.location.href.toLowerCase();
    const _0x5442bd = (document.title || "").toLowerCase();
    return _0x2c9288.includes("psbc.com") || _0x5442bd.includes("邮储银行") || _0x5442bd.includes("邮政储蓄");
  },
  getBankType() {
    if (this.isABCBank()) {
      return "ABC";
    }
    if (this.isICBCBank()) {
      return "ICBC";
    }
    if (this.isCCBBank()) {
      return "CCB";
    }
    if (this.isBOCBank()) {
      return "BOC";
    }
    if (this.isBOCOMBank()) {
      return "BOCOM";
    }
    if (this.isPSBCBank()) {
      return "PSBC";
    }
    return "GENERIC";
  },
  setInputValueAndTrigger(_0x4fff19, _0xeccbe7) {
    if (!_0x4fff19) {
      return false;
    }
    try {
      _0x4fff19.focus();
      const _0x48e96a = {
        bubbles: true
      };
      _0x4fff19.dispatchEvent(new Event("focus", _0x48e96a));
      const _0x2f8e36 = _0x4fff19._valueTracker;
      _0x2f8e36 && _0x2f8e36.setValue("");
      const _0x56f0a6 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.["set"];
      const _0x33e474 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.["set"];
      if (_0x4fff19.tagName === "INPUT" && _0x56f0a6) {
        _0x56f0a6.call(_0x4fff19, _0xeccbe7);
      } else {
        _0x4fff19.tagName === "TEXTAREA" && _0x33e474 ? _0x33e474.call(_0x4fff19, _0xeccbe7) : _0x4fff19.value = _0xeccbe7;
      }
      _0x4fff19.value = _0xeccbe7;
      const _0x822ce6 = {
        bubbles: true,
        cancelable: true
      };
      _0x4fff19.dispatchEvent(new Event("input", _0x822ce6));
      const _0x1bf847 = {
        bubbles: true,
        cancelable: true
      };
      _0x4fff19.dispatchEvent(new Event("change", _0x1bf847));
      _0x4fff19.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: true,
        key: _0xeccbe7.slice(-1) || ""
      }));
      _0x4fff19.dispatchEvent(new KeyboardEvent("keyup", {
        bubbles: true,
        key: _0xeccbe7.slice(-1) || ""
      }));
      _0x4fff19.dispatchEvent(new KeyboardEvent("keypress", {
        bubbles: true,
        key: _0xeccbe7.slice(-1) || ""
      }));
      const _0x48f978 = {
        bubbles: true,
        cancelable: true
      };
      _0x4fff19.dispatchEvent(new Event("blur", _0x48f978));
    } catch (_0x50345a) {
      _0x4fff19.value = _0xeccbe7;
      const _0x31a6f0 = {
        bubbles: true
      };
      _0x4fff19.dispatchEvent(new Event("input", _0x31a6f0));
      const _0x2a7437 = {
        bubbles: true
      };
      _0x4fff19.dispatchEvent(new Event("change", _0x2a7437));
    }
    return true;
  },
  isLikelyVerifyInput(_0x1c5548) {
    if (!_0x1c5548) {
      return false;
    }
    const _0x4bdca4 = [_0x1c5548.id || "", _0x1c5548.name || "", _0x1c5548.placeholder || "", _0x1c5548.className || "", _0x1c5548.labels && _0x1c5548.labels[0] ? _0x1c5548.labels[0].textContent : "", _0x1c5548.getAttribute("data-validate") || ""].join(" ").toLowerCase();
    const _0x544c17 = /(verify|captcha|code|yzm|sms|msg|mobilecode|verify_code|ccode|图形验证码|验证码|短信|校验码)/.test(_0x4bdca4);
    const _0x51fd95 = Number(_0x1c5548.getAttribute("maxlength") || _0x1c5548.maxLength || 0);
    const _0x430b1b = _0x51fd95 > 0 && _0x51fd95 <= 6;
    return _0x544c17 || _0x430b1b;
  },
  isABCBankReservationPage() {
    return this.isABCBank();
  },
  identifyFieldType(_0x31a976) {
    if (!_0x31a976 || !this.isUsableInput(_0x31a976)) {
      return null;
    }
    const _0x523362 = _0x31a976.id || "";
    const _0x47c6d5 = _0x31a976.name || "";
    const _0x370ba7 = _0x31a976.placeholder || "";
    const _0x2f0866 = _0x31a976.value || "";
    const _0x25f944 = _0x31a976.closest(".el-form-item") || _0x31a976.closest("div") || _0x31a976.closest("li") || _0x31a976.parentElement;
    const _0x2aae38 = _0x25f944 ? _0x25f944.textContent || "" : "";
    const _0x1d5d38 = _0x25f944 ? _0x25f944.className || "" : "";
    const _0x2c418e = _0x31a976.readOnly || _0x31a976.disabled;
    const _0x17c37f = _0x1d5d38.includes("select") || _0x1d5d38.includes("dropdown") || _0x31a976.tagName.toLowerCase() === "select";
    const _0x22f4c4 = _0x523362.toLowerCase();
    const _0x9a32b0 = _0x47c6d5.toLowerCase();
    const _0x39c9a0 = _0x370ba7.toLowerCase();
    const _0x581bd9 = _0x2aae38.toLowerCase();
    const _0xdd3ba3 = _0x1d5d38.toLowerCase();
    const _0x3a5db7 = /证件类型|证件类别|id.*type|card.*type|zj.*lx/.test(_0x22f4c4 + _0x9a32b0 + _0x39c9a0 + _0x581bd9) || _0x39c9a0.includes("选择") && _0x39c9a0.includes("证件") || _0x17c37f && /证件/.test(_0x581bd9) || _0x2c418e && /身份证|护照|军官证/.test(_0x2f0866);
    const _0x50886c = /姓名|客户姓名|name|xm|usr_nm|custname/.test(_0x22f4c4 + _0x9a32b0 + _0x39c9a0 + _0x581bd9) && !_0x3a5db7;
    const _0x2e5042 = /身份证|身份证号|证件号|id.*no|card.*no|sfz.*hm|zjhm|crdt_no|certno/.test(_0x22f4c4 + _0x9a32b0 + _0x39c9a0 + _0x581bd9) && !_0x3a5db7 && !_0x17c37f;
    const _0x2ea270 = /手机|电话|手机号|联系电话|mobile|phone|tel|sjhm|lxdh|mblph_no/.test(_0x22f4c4 + _0x9a32b0 + _0x39c9a0 + _0x581bd9) && !_0x3a5db7;
    const _0x3ba8e4 = /数量|金额|amount|num|quantity|sl|je|booking_num|cardvalue/.test(_0x22f4c4 + _0x9a32b0 + _0x39c9a0 + _0x581bd9) && !_0x3a5db7;
    if (_0x50886c) {
      return "name";
    }
    if (_0x2e5042) {
      return "idCard";
    }
    if (_0x2ea270) {
      return "phone";
    }
    if (_0x3ba8e4) {
      return "amount";
    }
    return null;
  },
  isUsableInput(_0x476df3) {
    return _0x476df3 && _0x476df3.tagName && (_0x476df3.tagName.toLowerCase() === "input" || _0x476df3.tagName.toLowerCase() === "textarea");
  },
  fillABCAgriculturalBank(_0x312b1f) {
    if (!_0x312b1f) {
      return;
    }
    console.log("[填充] 检测到农业银行页面");
    const _0xa51c23 = {
      name: ["#name", "input[name=\"name\"]", "input[id=\"name\"]"],
      idCard: ["#identNo", "input[name=\"identNo\"]", "input[id=\"identNo\"]"],
      phone: ["#mobile", "input[name=\"mobile\"]", "input[id=\"mobile\"]"],
      amount: ["input[id^=\"cardvalue\"]", "input[name^=\"cardvalue\"]", ".ui-spinner-input"]
    };
    let _0x59721c = false;
    for (const [_0x2ed628, _0x3e7b9f] of Object.entries(_0xa51c23)) {
      for (const _0x22f9a3 of _0x3e7b9f) {
        try {
          const _0x3b9935 = document.querySelector(_0x22f9a3);
          if (_0x3b9935 && !_0x3b9935.readOnly) {
            const _0x5f5eb6 = this.identifyFieldType(_0x3b9935);
            if (_0x2ed628 === "idCard" && _0x5f5eb6 === "idCard" || _0x2ed628 === "name" && _0x5f5eb6 === "name" || _0x2ed628 === "phone" && _0x5f5eb6 === "phone" || _0x2ed628 === "amount" && _0x5f5eb6 === "amount" || !_0x5f5eb6) {
              const _0x2f9252 = _0x2ed628 === "name" ? _0x312b1f.name : _0x2ed628 === "idCard" ? _0x312b1f.idCard : _0x2ed628 === "phone" ? _0x312b1f.phone : _0x312b1f.reservationAmount;
              if (_0x2f9252) {
                if (_0x2ed628 === "idCard") {
                  const _0x1477e7 = _0x3b9935.closest(".el-form-item") || _0x3b9935.closest("div");
                  const _0x49017a = _0x1477e7 ? _0x1477e7.className || "" : "";
                  const _0x3c6627 = _0x49017a.includes("select") || _0x49017a.includes("dropdown");
                  !_0x3c6627 && (this.setInputValueAndTrigger(_0x3b9935, _0x2f9252), console.log("[农行填充] " + _0x2ed628 + ": " + _0x22f9a3 + " = " + _0x2f9252), _0x59721c = true);
                } else {
                  this.setInputValueAndTrigger(_0x3b9935, _0x2f9252);
                  console.log("[农行填充] " + _0x2ed628 + ": " + _0x22f9a3 + " = " + _0x2f9252);
                  _0x59721c = true;
                }
              }
            }
          }
        } catch (_0xa1765c) {
          console.error("[农行填充] 旧版表单字段" + _0x22f9a3 + "填充失败:", _0xa1765c);
        }
      }
    }
    if (_0x312b1f.bankBranch) {
      const _0x41fd12 = ["#orglevel1", "#orglevel2", "#orglevel3", "#orglevel4"];
      for (const _0x5c7ad3 of _0x41fd12) {
        const _0x84f2cf = document.querySelector(_0x5c7ad3);
        if (_0x84f2cf) {
          const _0x5e8731 = _0x84f2cf.querySelectorAll("option");
          for (const _0x16cb39 of _0x5e8731) {
            if (_0x16cb39.textContent.includes(_0x312b1f.bankBranch)) {
              _0x84f2cf.value = _0x16cb39.value;
              const _0x42a80b = {
                bubbles: true
              };
              _0x84f2cf.dispatchEvent(new Event("change", _0x42a80b));
              break;
            }
          }
        }
      }
    }
    if (_0x59721c) {
      return;
    }
    const _0x5d4ad7 = document.querySelectorAll(".information-input");
    if (!_0x5d4ad7.length) {
      this.fillGenericForm(_0x312b1f);
      return;
    }
    const _0x5335ca = new Set();
    const _0x1cd063 = _0x283446 => {
      const _0x1d17c2 = _0x283446.closest(".el-table__row");
      if (!_0x1d17c2) {
        return "";
      }
      const _0xa08d82 = Array.from(_0x1d17c2.querySelectorAll(".information-input"));
      const _0x120300 = Array.from(_0x1d17c2.querySelectorAll(".information-item"));
      const _0x297e81 = _0xa08d82.indexOf(_0x283446);
      const _0x1a8479 = _0x297e81 > -1 ? _0x120300[_0x297e81] : null;
      return _0x1a8479 ? (_0x1a8479.textContent || "").trim() : "";
    };
    const _0x28b9f3 = _0x109722 => {
      const _0x59d249 = document.querySelectorAll(".el-select-dropdown");
      for (const _0x29d905 of _0x59d249) {
        {
          if (_0x29d905.style.display === "none") {
            continue;
          }
          const _0x3379d2 = _0x29d905.querySelectorAll(".el-select-dropdown__item");
          for (const _0x4547f6 of _0x3379d2) {
            if ((_0x4547f6.textContent || "").trim().includes(_0x109722)) {
              _0x4547f6.click();
              return true;
            }
          }
        }
      }
      return false;
    };
    _0x5d4ad7.forEach(_0x181704 => {
      const _0x291757 = _0x1cd063(_0x181704);
      if (!_0x291757) {
        return;
      }
      if (!_0x5335ca.has("name") && _0x291757.includes("姓名") && _0x312b1f.name) {
        {
          const _0x8ed0c3 = _0x181704.querySelector("input");
          if (this.setInputValueAndTrigger(_0x8ed0c3, _0x312b1f.name)) {
            {
              _0x5335ca.add("name");
            }
          }
          return;
        }
      }
      if (!_0x5335ca.has("idCard") && _0x312b1f.idCard) {
        if (_0x291757.includes("证件号码")) {
          const _0x559862 = _0x181704.querySelector("input");
          const _0x2633b3 = _0x181704.querySelector(".el-select");
          _0x559862 && !_0x2633b3 && this.setInputValueAndTrigger(_0x559862, _0x312b1f.idCard) && _0x5335ca.add("idCard");
        } else {
          if (_0x291757.includes("证件") && !_0x291757.includes("类型")) {
            const _0x3abb37 = _0x181704.querySelector("input");
            const _0x1e4b27 = _0x181704.querySelector(".el-select");
            _0x3abb37 && !_0x1e4b27 && this.setInputValueAndTrigger(_0x3abb37, _0x312b1f.idCard) && _0x5335ca.add("idCard");
          }
        }
        return;
      }
      if (!_0x5335ca.has("phone") && _0x291757.includes("手机号码") && _0x312b1f.phone) {
        const _0x11128f = _0x181704.querySelector("input");
        this.setInputValueAndTrigger(_0x11128f, _0x312b1f.phone) && _0x5335ca.add("phone");
        return;
      }
      if (!_0x5335ca.has("branch") && _0x291757.includes("兑换网点") && _0x312b1f.bankBranch) {
        const _0x237008 = _0x181704.querySelector(".el-select");
        const _0xca26e = _0x181704.querySelector(".el-select .el-input__inner");
        if (_0x237008 && _0xca26e) {
          _0xca26e.removeAttribute("readonly");
          const _0x3553c4 = {
            bubbles: true
          };
          _0x237008.dispatchEvent(new Event("mousedown", _0x3553c4));
          _0x237008.click();
          setTimeout(() => {
            !_0x28b9f3(_0x312b1f.bankBranch) && this.setInputValueAndTrigger(_0xca26e, _0x312b1f.bankBranch);
          }, 0);
          _0x5335ca.add("branch");
        }
        return;
      }
      if (!_0x5335ca.has("amount") && _0x291757.includes("预约数量") && _0x312b1f.reservationAmount) {
        {
          const _0x508895 = _0x181704.querySelector(".el-input-number input") || _0x181704.querySelector("input");
          this.setInputValueAndTrigger(_0x508895, _0x312b1f.reservationAmount) && _0x5335ca.add("amount");
        }
      }
    });
  },
  fillICBCBank(_0x60ecfb) {
    if (!_0x60ecfb) {
      return;
    }
    console.log("[填充] 检测到工商银行页面");
    const _0x4100c2 = {
      name: ["input[name*=\"name\"]", "input[name*=\"custName\"]", "input[placeholder*=\"姓名\"]", ".el-input input[placeholder*=\"姓名\"]"],
      idCard: ["input[name*=\"idNo\"]", "input[name*=\"certNo\"]", "input[name*=\"idCard\"]", "input[placeholder*=\"身份证\"]", ".el-input input[placeholder*=\"证件\"]"],
      phone: ["input[name*=\"mobile\"]", "input[name*=\"phone\"]", "input[name*=\"tel\"]", "input[placeholder*=\"手机\"]", ".el-input input[placeholder*=\"手机\"]"],
      amount: ["input[name*=\"num\"]", "input[name*=\"amount\"]", "input[name*=\"quantity\"]", "input[placeholder*=\"数量\"]", ".el-input-number input"]
    };
    for (const [_0x35b425, _0x54bf02] of Object.entries(_0x4100c2)) {
      {
        for (const _0xa0db8f of _0x54bf02) {
          try {
            const _0x331695 = document.querySelectorAll(_0xa0db8f);
            _0x331695.forEach(_0x335ddf => {
              if (_0x335ddf) {
                const _0x3dc367 = _0x35b425 === "name" ? _0x60ecfb.name : _0x35b425 === "idCard" ? _0x60ecfb.idCard : _0x35b425 === "phone" ? _0x60ecfb.phone : _0x60ecfb.reservationAmount;
                if (_0x3dc367) {
                  this.setInputValueAndTrigger(_0x335ddf, _0x3dc367);
                }
              }
            });
          } catch (_0x4d6e31) {}
        }
      }
    }
    this.fillGenericForm(_0x60ecfb);
  },
  fillCCBBank(_0xc05a6c) {
    if (!_0xc05a6c) {
      return;
    }
    console.log("[填充] 检测到建设银行页面");
    const _0x1950b4 = {
      name: ["#USR_NM", "input[name=\"USR_NM\"]", "input[name*=\"custName\"]"],
      idCard: ["#CRDT_NO", "input[name=\"CRDT_NO\"]", "input[name*=\"certNo\"]"],
      phone: ["#MBLPH_NO", "input[name=\"MBLPH_NO\"]", "input[name*=\"mobileNo\"]"],
      amount: ["#BOOKING_NUM", "input[name=\"BOOKING_NUM\"]", "input[name*=\"bookNum\"]"]
    };
    for (const [_0x2af3ac, _0x3729de] of Object.entries(_0x1950b4)) {
      for (const _0x670f5 of _0x3729de) {
        try {
          const _0x5837b5 = document.querySelector(_0x670f5);
          if (_0x5837b5 && !_0x5837b5.readOnly) {
            const _0x4425b7 = _0x2af3ac === "name" ? _0xc05a6c.name : _0x2af3ac === "idCard" ? _0xc05a6c.idCard : _0x2af3ac === "phone" ? _0xc05a6c.phone : _0xc05a6c.reservationAmount;
            if (_0x4425b7) {
              {
                this.setInputValueAndTrigger(_0x5837b5, _0x4425b7);
                console.log("[建行填充] " + _0x2af3ac + ": " + _0x670f5 + " = " + _0x4425b7);
              }
            }
          }
        } catch (_0x564784) {}
      }
    }
    if (_0xc05a6c.bankBranch) {
      const _0x25f7bc = document.querySelector("#xzwd") || document.querySelector("input[placeholder*=\"网点\"]");
      _0x25f7bc && !_0x25f7bc.value && this.setInputValueAndTrigger(_0x25f7bc, _0xc05a6c.bankBranch);
    }
    this.fillGenericForm(_0xc05a6c);
  },
  fillBOCBank(_0x560d57) {
    if (!_0x560d57) {
      return;
    }
    console.log("[填充] 检测到中国银行页面");
    const _0x2b7019 = _0xf36e9f => {
      const _0xd235e = (_0xf36e9f.id || "").toLowerCase();
      const _0x28328c = (_0xf36e9f.name || "").toLowerCase();
      const _0x3566be = (_0xf36e9f.placeholder || "").toLowerCase();
      const _0x26cfb2 = _0xf36e9f.closest("td") || _0xf36e9f.closest("tr") || _0xf36e9f.closest("div") || _0xf36e9f.parentElement;
      const _0x2179f9 = (_0x26cfb2?.["textContent"] || "").toLowerCase();
      return /验证码|code|captcha|sms/.test(_0xd235e + _0x28328c + _0x3566be) || /手机验证码|短信验证码|图形验证码|验证码|获取验证/.test(_0x2179f9);
    };
    const _0x54dc61 = {
      name: ["input[name*=\"clientName\"]", "input[name*=\"custName\"]", "#clientName", "input[placeholder*=\"姓名\"]"],
      idCard: ["input[name*=\"idNo\"]", "input[name*=\"certNo\"]", "input[name*=\"idCard\"]", "#idNo", "input[placeholder*=\"证件\"]"],
      phone: ["input[name*=\"mobile\"]", "input[name*=\"tel\"]", "input[name*=\"phone\"]", "#mobile"],
      amount: ["input[name*=\"num\"]", "input[name*=\"quantity\"]", "input[name*=\"amount\"]", "#num", "input[placeholder*=\"数量\"]"]
    };
    for (const [_0x446bbf, _0x2636bc] of Object.entries(_0x54dc61)) {
      for (const _0x79360f of _0x2636bc) {
        try {
          {
            const _0x3e843d = document.querySelectorAll(_0x79360f);
            _0x3e843d.forEach(_0x21e082 => {
              if (_0x21e082 && !_0x21e082.readOnly) {
                {
                  if (_0x446bbf === "phone" && _0x2b7019(_0x21e082)) {
                    console.log("[中行填充] 跳过验证码字段:", _0x21e082);
                    return;
                  }
                  const _0x3e7ce2 = _0x446bbf === "name" ? _0x560d57.name : _0x446bbf === "idCard" ? _0x560d57.idCard : _0x446bbf === "phone" ? _0x560d57.phone : _0x560d57.reservationAmount;
                  _0x3e7ce2 && (this.setInputValueAndTrigger(_0x21e082, _0x3e7ce2), console.log("[中行填充] " + _0x446bbf + ": " + _0x79360f + " = " + _0x3e7ce2));
                }
              }
            });
          }
        } catch (_0x5140cc) {}
      }
    }
    this.fillGenericForm(_0x560d57);
  },
  fillBOCOMBank(_0x4054e8) {
    if (!_0x4054e8) {
      return;
    }
    console.log("[填充] 检测到交通银行页面");
    const _0x27c3ab = {
      name: ["input[name*=\"oppAcNme\"]", "input[name*=\"usr_nm\"]", "#oppAcNme", ".el-input input[placeholder*=\"姓名\"]"],
      idCard: ["input[name*=\"crdt_no\"]", "input[name*=\"credNumTemp\"]", "#crdt_no", "#credNumTemp", ".el-input input[placeholder*=\"证件\"]"],
      phone: ["input[name*=\"mblph_no\"]", "input[name*=\"phone\"]", "#mblph_no", ".secure-input-plain-phone", ".safe-input", ".el-input input[placeholder*=\"手机\"]"],
      amount: ["input[name*=\"booking_num\"]", "#booking_num", ".el-input-number input"]
    };
    for (const [_0xa65a5c, _0x1d8e99] of Object.entries(_0x27c3ab)) {
      for (const _0x1db65f of _0x1d8e99) {
        try {
          const _0x48f5f4 = document.querySelectorAll(_0x1db65f);
          _0x48f5f4.forEach(_0x26081f => {
            if (_0x26081f && !_0x26081f.readOnly) {
              const _0xd5e146 = _0xa65a5c === "name" ? _0x4054e8.name : _0xa65a5c === "idCard" ? _0x4054e8.idCard : _0xa65a5c === "phone" ? _0x4054e8.phone : _0x4054e8.reservationAmount;
              _0xd5e146 && (this.setInputValueAndTrigger(_0x26081f, _0xd5e146), console.log("[交行填充] " + _0xa65a5c + ": " + _0x1db65f + " = " + _0xd5e146));
            }
          });
        } catch (_0x1b013f) {}
      }
    }
    this.handleElementUISelect(_0x4054e8.bankBranch);
    this.fillGenericForm(_0x4054e8);
  },
  fillPSBCBank(_0x31193f) {
    if (!_0x31193f) {
      return;
    }
    console.log("[填充] 检测到邮储银行页面");
    const _0x2c943b = {
      name: ["input[name*=\"custName\"]", "input[name*=\"name\"]", "input[placeholder*=\"姓名\"]"],
      idCard: ["input[name*=\"idNo\"]", "input[name*=\"certNo\"]", "input[placeholder*=\"证件\"]"],
      phone: ["input[name*=\"mobile\"]", "input[name*=\"phone\"]", "input[placeholder*=\"手机\"]"],
      amount: ["input[name*=\"num\"]", "input[name*=\"amount\"]", "input[placeholder*=\"数量\"]"]
    };
    for (const [_0x311ea1, _0x1ef2f1] of Object.entries(_0x2c943b)) {
      for (const _0x3aa4a3 of _0x1ef2f1) {
        try {
          {
            const _0xf522c4 = document.querySelectorAll(_0x3aa4a3);
            _0xf522c4.forEach(_0x9751a8 => {
              if (_0x9751a8 && !_0x9751a8.readOnly) {
                const _0x55dea8 = _0x311ea1 === "name" ? _0x31193f.name : _0x311ea1 === "idCard" ? _0x31193f.idCard : _0x311ea1 === "phone" ? _0x31193f.phone : _0x31193f.reservationAmount;
                if (_0x55dea8) {
                  this.setInputValueAndTrigger(_0x9751a8, _0x55dea8);
                }
              }
            });
          }
        } catch (_0x3031ac) {}
      }
    }
    this.fillGenericForm(_0x31193f);
  },
  fillGenericForm(_0x43b04a) {
    if (!_0x43b04a) {
      return;
    }
    this.fillNameFields(_0x43b04a.name);
    this.fillIdCardFields(_0x43b04a.idCard);
    this.fillPhoneFields(_0x43b04a.phone);
    this.fillBranchFields(_0x43b04a.bankBranch);
    this.fillAmountFields(_0x43b04a.reservationAmount);
  },
  fillNameFields(_0x528c9) {
    if (!_0x528c9) {
      return;
    }
    const _0x1b4367 = document.querySelectorAll("input[type=\"text\"]:not(.autofill-settings input):not(.sx-inp):not([readonly])");
    _0x1b4367.forEach(_0x1987f4 => {
      const _0x35e241 = _0x1987f4.id || "";
      const _0x2bff97 = _0x1987f4.name || "";
      const _0x4e2dfc = _0x1987f4.placeholder || "";
      const _0x1174b7 = _0x1987f4.labels && _0x1987f4.labels[0] ? _0x1987f4.labels[0].textContent : "";
      const _0x38dab3 = _0x35e241.toLowerCase();
      const _0x428406 = _0x2bff97.toLowerCase();
      const _0x12b4fb = _0x4e2dfc.toLowerCase();
      const _0x2c1002 = _0x1174b7.toLowerCase();
      const _0x283bd6 = ((_0x1987f4.closest(".el-form-item") || _0x1987f4.closest(".form-group") || _0x1987f4.closest("tr") || _0x1987f4.parentElement || {}).textContent || "").toLowerCase();
      const _0x2c7a0b = /客户姓名|姓名|真实姓名|预约人/.test(_0x283bd6);
      if (_0x38dab3.includes("dept") || _0x428406.includes("dept") || _0x38dab3.includes("department") || _0x428406.includes("department") || _0x12b4fb.includes("网点") || _0x12b4fb.includes("部门") || _0x2c1002.includes("网点") || _0x2c1002.includes("部门") || _0x38dab3.includes("branch") || _0x428406.includes("branch")) {
        return;
      }
      if (_0x38dab3.includes("code") || _0x428406.includes("code") || _0x38dab3.includes("captcha") || _0x428406.includes("captcha") || _0x38dab3.includes("verify") || _0x428406.includes("verify") || _0x12b4fb.includes("验证") || _0x12b4fb.includes("附加") || _0x283bd6.includes("验证码") || _0x283bd6.includes("附加码")) {
        {
          return;
        }
      }
      (_0x38dab3.includes("name") || _0x428406.includes("name") || _0x38dab3.includes("oppacnme") || _0x428406.includes("oppacnme") || _0x38dab3.includes("usr_nm") || _0x428406.includes("usr_nm") || _0x12b4fb.includes("姓名") || _0x12b4fb.includes("name") || _0x38dab3.includes("客户") || _0x428406.includes("客户") || _0x12b4fb.includes("客户") || _0x2c1002.includes("姓名") || _0x2c1002.includes("客户") || _0x38dab3.includes("username") || _0x428406.includes("username") || _0x38dab3.includes("fullname") || _0x428406.includes("fullname") || _0x38dab3.includes("realname") || _0x428406.includes("realname") || _0x12b4fb.includes("真实姓名") || _0x2c1002.includes("真实姓名") || _0x38dab3.includes("客户姓名") || _0x428406.includes("客户姓名") || _0x12b4fb.includes("客户姓名") || _0x2c1002.includes("客户姓名") || _0x12b4fb.includes("预约人") || _0x2c1002.includes("预约人") || _0x2c7a0b) && this.setInputValueAndTrigger(_0x1987f4, _0x528c9);
    });
  },
  fillIdCardFields(_0x129cb4) {
    if (!_0x129cb4) {
      return;
    }
    const _0x11b26b = document.querySelectorAll("input:not(.autofill-settings input):not(.sx-inp)");
    _0x11b26b.forEach(_0x24852f => {
      const _0x3b1ada = _0x24852f.id || "";
      const _0x3eacba = _0x24852f.name || "";
      const _0x1a5c33 = _0x24852f.placeholder || "";
      const _0x21658e = _0x24852f.labels && _0x24852f.labels[0] ? _0x24852f.labels[0].textContent : "";
      const _0x560473 = _0x3b1ada.toLowerCase();
      const _0x2a78aa = _0x3eacba.toLowerCase();
      const _0x9c38ac = _0x1a5c33.toLowerCase();
      const _0x1c48c6 = _0x21658e.toLowerCase();
      const _0x4d0c84 = (_0x24852f.className || "").toLowerCase();
      const _0x1a4f8b = _0x24852f.closest(".el-form-item") || _0x24852f.closest(".form-group") || _0x24852f.closest("tr") || _0x24852f.closest("td") || _0x24852f.parentElement;
      const _0x29497a = ((_0x1a4f8b || {}).textContent || "").slice(0, 100).toLowerCase();
      if (_0x24852f.closest(".el-select")) {
        return;
      }
      if (_0x29497a.includes("证件类型") && !_0x29497a.includes("证件号")) {
        return;
      }
      if (_0x9c38ac.includes("请选择")) {
        return;
      }
      if (_0x24852f.readOnly && !_0x560473.includes("cert") && !_0x560473.includes("id")) {
        return;
      }
      if (_0x560473.includes("phone") || _0x2a78aa.includes("phone") || _0x560473.includes("mobile") || _0x2a78aa.includes("mobile") || _0x560473.includes("tel")) {
        return;
      }
      if (/验证码|captcha|code/.test(_0x560473 + _0x2a78aa + _0x9c38ac)) {
        return;
      }
      const _0x5c8aa8 = /证件号|证件号码|身份证号|身份证/.test(_0x29497a) && !_0x29497a.includes("类型");
      (_0x560473.includes("crednumtemp") || _0x2a78aa.includes("crednumtemp") || _0x560473.includes("crdt_no") || _0x2a78aa.includes("crdt_no") || _0x560473.includes("certno") || _0x2a78aa.includes("certno") || _0x560473.includes("idno") || _0x2a78aa.includes("idno") || _0x560473.includes("idcard") || _0x2a78aa.includes("idcard") || _0x560473.includes("idnumber") || _0x2a78aa.includes("idnumber") || _0x560473.includes("identno") || _0x2a78aa.includes("identno") || _0x560473.includes("zjhm") || _0x2a78aa.includes("zjhm") || _0x9c38ac.includes("身份证") || _0x9c38ac.includes("证件号") || _0x9c38ac.includes("请输入") && _0x5c8aa8 || _0x1c48c6.includes("证件号") || _0x1c48c6.includes("身份证") || _0x5c8aa8) && this.setInputValueAndTrigger(_0x24852f, _0x129cb4);
    });
  },
  fillPhoneFields(_0x5d5ad4) {
    if (!_0x5d5ad4) {
      return;
    }
    const _0x3c061f = document.querySelectorAll("input[type=\"tel\"]:not(.autofill-settings input):not(.sx-inp), input[type=\"text\"]:not(.autofill-settings input):not(.sx-inp), input[type=\"number\"]:not(.autofill-settings input):not(.sx-inp)");
    _0x3c061f.forEach(_0x3a0bd2 => {
      if (_0x3a0bd2.readOnly) {
        return;
      }
      const _0x17d6c5 = _0x3a0bd2.id || "";
      const _0x29df6c = _0x3a0bd2.name || "";
      const _0x402554 = _0x3a0bd2.placeholder || "";
      const _0x1c354e = _0x3a0bd2.labels && _0x3a0bd2.labels[0] ? _0x3a0bd2.labels[0].textContent : "";
      const _0x4847b3 = _0x17d6c5.toLowerCase();
      const _0x54dd79 = _0x29df6c.toLowerCase();
      const _0x2913b4 = _0x402554.toLowerCase();
      const _0x3a2786 = _0x1c354e.toLowerCase();
      const _0x15849f = _0x4847b3 + _0x54dd79 + _0x2913b4 + _0x3a2786;
      const _0x2f93d0 = _0x3a0bd2.closest("td") || _0x3a0bd2.closest(".el-form-item") || _0x3a0bd2.closest(".form-group") || _0x3a0bd2.closest("tr") || _0x3a0bd2.closest("div") || _0x3a0bd2.parentElement;
      const _0xa2290a = (_0x2f93d0?.["textContent"] || "").slice(0, 100).toLowerCase();
      const _0x2afcfe = _0x3a0bd2.previousElementSibling || _0x2f93d0?.["previousElementSibling"];
      const _0x5ae301 = (_0x2afcfe?.["textContent"] || "").toLowerCase();
      const _0x4f8366 = _0xa2290a + " " + _0x5ae301;
      const _0xc22c3a = /验证码|captcha|sms码|短信码/.test(_0x15849f) || _0x4f8366.includes("验证码") && !_0x4f8366.includes("手机号");
      if (_0xc22c3a) {
        return;
      }
      if (/附加码|附加|fjm/.test(_0x15849f) || /附加码/.test(_0x4f8366)) {
        return;
      }
      if (/身份证|证件号|idcard|certno|idno/.test(_0x15849f)) {
        return;
      }
      const _0x176b1f = /手机号码|手机号|联系电话|移动电话|电话号码|手机/.test(_0x4f8366) && !/验证码|附加码/.test(_0x4f8366);
      (_0x4847b3.includes("phone") || _0x4847b3.includes("mobile") || _0x54dd79.includes("phone") || _0x54dd79.includes("mobile") || _0x4847b3.includes("secure-input-plain-phone") || _0x54dd79.includes("secure-input-plain-phone") || _0x4847b3.includes("safe-input") || _0x54dd79.includes("safe-input") || _0x4847b3.includes("mblph_no") || _0x54dd79.includes("mblph_no") || _0x4847b3.includes("tel") || _0x54dd79.includes("tel") || _0x2913b4.includes("手机") || _0x2913b4.includes("电话") || _0x3a2786.includes("手机") || _0x3a2786.includes("电话") || _0x4847b3.includes("cellphone") || _0x54dd79.includes("cellphone") || _0x4847b3.includes("telephone") || _0x54dd79.includes("telephone") || _0x176b1f) && this.setInputValueAndTrigger(_0x3a0bd2, _0x5d5ad4);
    });
  },
  fillBranchFields(_0x428473) {
    if (!_0x428473) {
      return;
    }
    const _0x152ced = this.getBankType();
    console.log("[网点填充] 银行类型:", _0x152ced, "网点关键词:", _0x428473);
    switch (_0x152ced) {
      case "CCB":
        this.fillCCBBranch(_0x428473);
        break;
      case "ABC":
        this.fillABCBranch(_0x428473);
        break;
      case "ICBC":
        this.fillICBCBranch(_0x428473);
        break;
      case "BOC":
        this.fillBOCBranch(_0x428473);
        break;
      case "PSBC":
        this.fillPSBCBranch(_0x428473);
        break;
      default:
        this.fillGenericBranch(_0x428473);
    }
  },
  extractLocationFromBranch(_0x11c878) {
    const _0x35d1f2 = ["北京", "天津", "上海", "重庆", "拉萨", "乌鲁木齐", "呼和浩特", "南宁", "银川", "西宁", "兰州", "西安", "太原", "石家庄", "济南", "郑州", "武汉", "长沙", "南昌", "福州", "杭州", "南京", "合肥", "成都", "贵阳", "昆明", "海口", "广州", "深圳", "哈尔滨", "长春", "沈阳", "大连", "青岛", "厦门", "宁波", "苏州", "无锡", "佛山", "东莞"];
    const _0x3dbd0b = /(.+?)(区|县|市|旗)(?=.*(支行|分行|营业|储蓄))/;
    let _0x55488c = null;
    let _0x2d9ce2 = null;
    for (const _0x56b35d of _0x35d1f2) {
      if (_0x11c878.includes(_0x56b35d)) {
        _0x55488c = _0x56b35d;
        break;
      }
    }
    const _0x39114b = _0x11c878.match(_0x3dbd0b);
    _0x39114b && (_0x2d9ce2 = _0x39114b[1] + _0x39114b[2]);
    const _0x4f0acd = {
      city: _0x55488c,
      district: _0x2d9ce2
    };
    return _0x4f0acd;
  },
  smartFillKeywords(_0xbf4121, _0x48d42e) {
    if (_0xbf4121.length >= 4) {
      return _0xbf4121;
    }
    const _0x523e00 = this.extractLocationFromBranch(_0x48d42e);
    console.log("[智能补全] 从网点名称提取:", _0x523e00);
    let _0x26fb3f = [..._0xbf4121];
    const _0x11a3f7 = ["北京", "天津", "上海", "重庆"];
    const _0x4b59c9 = _0x11a3f7.some(_0x17c674 => _0xbf4121[0]?.["includes"](_0x17c674));
    if (_0x4b59c9) {
      {
        if (_0x26fb3f.length === 1) {
          _0x26fb3f = [_0x26fb3f[0], _0x26fb3f[0]];
          if (_0x523e00.district) {
            _0x26fb3f.push(_0x523e00.district);
          }
          _0x26fb3f.push(_0x48d42e);
        } else {
          if (_0x26fb3f.length === 2) {
            _0x26fb3f = [_0x26fb3f[0], _0x26fb3f[0]];
            if (_0x523e00.district) {
              _0x26fb3f.push(_0x523e00.district);
            }
            _0x26fb3f.push(_0xbf4121[1]);
          } else {
            _0x26fb3f.length === 3 && (_0x26fb3f = [_0x26fb3f[0], _0x26fb3f[0], _0x26fb3f[1], _0x26fb3f[2]]);
          }
        }
      }
    } else {
      if (_0x26fb3f.length === 2) {
        if (_0x523e00.city) {
          _0x26fb3f.splice(1, 0, _0x523e00.city);
        }
        if (_0x523e00.district) {
          _0x26fb3f.splice(2, 0, _0x523e00.district);
        }
      } else {
        if (_0x26fb3f.length === 3) {
          const _0x1959be = /区|县|旗/.test(_0x26fb3f[1]);
          !_0x1959be && _0x523e00.district && _0x26fb3f.splice(2, 0, _0x523e00.district);
        }
      }
    }
    console.log("[智能补全] 补全后关键词:", _0x26fb3f);
    return _0x26fb3f;
  },
  fillCCBBranch(_0x213a39) {
    let _0x1e66d2 = _0x213a39.split(/[\s\/\-\>]+/).filter(_0x166ef9 => _0x166ef9.trim());
    console.log("[建行网点] 原始关键词:", _0x1e66d2);
    const _0x4ab67d = _0x1e66d2[_0x1e66d2.length - 1] || _0x213a39;
    _0x1e66d2 = this.smartFillKeywords(_0x1e66d2, _0x4ab67d);
    const _0x57685a = ["北京", "天津", "上海", "重庆"];
    const _0x52743b = _0x57685a.some(_0x55a27f => _0x1e66d2[0]?.["includes"](_0x55a27f));
    let _0xbb73b1 = [..._0x1e66d2];
    _0x52743b && _0x1e66d2.length >= 2 && _0x1e66d2[0] !== _0x1e66d2[1] && (_0xbb73b1 = [_0x1e66d2[0], _0x1e66d2[0], ..._0x1e66d2.slice(1)], console.log("[建行网点] 检测到直辖市，调整关键词:", _0xbb73b1));
    const _0x2b1325 = Array.from(document.querySelectorAll(".el-select"));
    const _0x417ad5 = [];
    for (const _0x12dfe2 of _0x2b1325) {
      const _0x29dd66 = _0x12dfe2.closest(".el-form-item") || _0x12dfe2.closest("tr") || _0x12dfe2.closest("td");
      const _0x24a8b2 = _0x29dd66?.["querySelector"]("label")?.["textContent"] || "";
      const _0x48d01b = (_0x29dd66?.["textContent"] || "").slice(0, 100);
      if (_0x24a8b2.includes("纪念") || _0x24a8b2.includes("钞") || _0x48d01b.includes("纪念币")) {
        continue;
      }
      if (_0x24a8b2.includes("证件类型") || _0x48d01b.includes("证件类型")) {
        continue;
      }
      if (_0x24a8b2.includes("OCR") || _0x48d01b.includes("OCR")) {
        continue;
      }
      if (_0x12dfe2.closest("header") || _0x12dfe2.closest("nav") || _0x12dfe2.closest(".header")) {
        continue;
      }
      (_0x48d01b.includes("选择网点") || _0x24a8b2.includes("选择网点") || _0x24a8b2.includes("网点")) && _0x417ad5.push(_0x12dfe2);
    }
    if (_0x417ad5.length < 3) {
      _0x417ad5.length = 0;
      for (const _0x361e11 of _0x2b1325) {
        const _0x3309df = _0x361e11.querySelector(".el-input__inner");
        const _0x8528dc = _0x3309df?.["placeholder"] || "";
        const _0x3cf19c = _0x361e11.closest(".el-form-item") || _0x361e11.closest("tr");
        const _0x3a2422 = _0x3cf19c?.["querySelector"]("label")?.["textContent"] || "";
        if (_0x3a2422.includes("纪念") || _0x3a2422.includes("证件类型")) {
          continue;
        }
        if (_0x361e11.closest("header") || _0x361e11.closest("nav")) {
          continue;
        }
        if (_0x8528dc.includes("省") || _0x8528dc.includes("直辖")) {
          _0x417ad5[0] = _0x361e11;
        } else {
          if (_0x8528dc.includes("市") && !_0x8528dc.includes("省")) {
            _0x417ad5[1] = _0x361e11;
          } else {
            if (_0x8528dc.includes("区") || _0x8528dc.includes("县")) {
              _0x417ad5[2] = _0x361e11;
            } else {
              (_0x8528dc.includes("网点") || _0x8528dc.includes("支行")) && (_0x417ad5[3] = _0x361e11);
            }
          }
        }
      }
    }
    const _0xf9a8c2 = _0x417ad5.filter(_0x510f36 => _0x510f36);
    console.log("[建行网点] 找到", _0xf9a8c2.length, "个网点下拉框");
    if (_0xf9a8c2.length >= 3) {
      this.fillElementUISelectSequence(_0xf9a8c2.slice(0, 3), _0xbb73b1);
      const _0x2e2db2 = _0x52743b ? 3000 : 2000;
      setTimeout(() => {
        this.fillCCBBranchSelect(_0xbb73b1, _0x213a39);
      }, _0x2e2db2);
      return;
    }
    const _0x529947 = document.querySelector("#Prov_Cd");
    const _0x540b09 = document.querySelector("#City_Cd");
    const _0x3145b3 = document.querySelector("#CntyAndDstc_Cd");
    if (_0x529947 && _0x540b09) {
      console.log("[建行网点-旧版] 找到原生select");
      this.fillCCBLegacySelects(_0x529947, _0x540b09, _0x3145b3, _0xbb73b1);
      setTimeout(() => {
        const _0x1488bd = document.querySelector("#xzwd");
        if (_0x1488bd) {
          const _0x219cef = _0xbb73b1[_0xbb73b1.length - 1] || _0x213a39;
          this.setInputValueAndTrigger(_0x1488bd, _0x219cef);
          console.log("[建行网点-旧版] 填入搜索框:", _0x219cef);
        }
      }, 1500);
      return;
    }
    const _0x14b07e = document.querySelector("input[placeholder*=\"网点\"]") || document.querySelector("input[placeholder*=\"搜索\"]") || document.querySelector("#xzwd");
    _0x14b07e && (this.setInputValueAndTrigger(_0x14b07e, _0x213a39), console.log("[建行网点] 已填入搜索框:", _0x213a39));
  },
  fillCCBBranchSelect(_0x16cd7d, _0x11be78, _0x2d93ce = 0) {
    const _0x556131 = Array.from(document.querySelectorAll(".el-select"));
    const _0x4a064d = _0x16cd7d[_0x16cd7d.length - 1] || _0x11be78;
    console.log("[建行网点] 开始填充第4级网点，关键词:", _0x4a064d);
    let _0x58c520 = null;
    let _0x459e10 = null;
    for (const _0x4ae931 of _0x556131) {
      const _0x6ed84e = _0x4ae931.querySelector(".el-input__inner");
      const _0x197443 = _0x6ed84e?.["placeholder"] || "";
      const _0x127d40 = _0x4ae931.closest(".el-form-item");
      const _0x421722 = _0x127d40?.["querySelector"]("label")?.["textContent"] || "";
      const _0xe7fa1 = (_0x127d40?.["textContent"] || "").slice(0, 100);
      if (_0xe7fa1.includes("网点") || _0x421722.includes("网点") || _0x197443.includes("网点") || _0x197443.includes("支行") || _0x197443.includes("下拉选择") || _0x197443.includes("关键字搜索")) {
        if (_0x6ed84e.value && (_0x6ed84e.value.includes("自治区") || _0x6ed84e.value.includes("省") || _0x6ed84e.value.includes("市") || /[区县]$/.test(_0x6ed84e.value))) {
          continue;
        }
        _0x58c520 = _0x4ae931;
        _0x459e10 = _0x6ed84e;
        break;
      }
    }
    if (!_0x58c520 || !_0x459e10) {
      _0x2d93ce++;
      _0x2d93ce < 5 ? (console.log("[建行网点] 等待网点下拉框出现... (", _0x2d93ce, "/5)"), setTimeout(() => this.fillCCBBranchSelect(_0x16cd7d, _0x11be78, _0x2d93ce), 500)) : console.log("[建行网点] ✗ 未找到网点下拉框");
      return;
    }
    console.log("[建行网点] 找到网点下拉框，使用模拟点击打开");
    this.simulateRealMouseClick(_0x459e10, () => {
      const _0x56d3f7 = (_0x482e3f = 0) => {
        const _0x51fde7 = document.querySelectorAll(".el-select-dropdown");
        let _0x49fa5a = false;
        for (const _0x905584 of _0x51fde7) {
          const _0x10a64f = _0x905584.getBoundingClientRect();
          if (_0x10a64f.height <= 0) {
            continue;
          }
          const _0x50dfb2 = _0x905584.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
          if (_0x50dfb2.length === 0) {
            continue;
          }
          console.log("[建行网点] 找到", _0x50dfb2.length, "个网点选项");
          for (const _0x2291f1 of _0x50dfb2) {
            const _0xc69fad = (_0x2291f1.textContent || "").trim();
            const _0x3dde02 = _0x4a064d.replace(/支行|分行|营业所|储蓄所/g, "");
            const _0xfea555 = _0xc69fad.replace(/支行|分行|营业所|储蓄所/g, "");
            if (_0xc69fad.includes(_0x4a064d) || _0x4a064d.includes(_0xc69fad.slice(0, 4)) || _0xfea555.includes(_0x3dde02) || _0x3dde02.includes(_0xfea555.slice(0, 4))) {
              {
                console.log("[建行网点] ✓ 选择网点:", _0xc69fad);
                this.simulateRealMouseClick(_0x2291f1);
                _0x49fa5a = true;
                return;
              }
            }
          }
          if (!_0x49fa5a) {
            for (const _0x17cc2d of _0x50dfb2) {
              const _0x16c605 = (_0x17cc2d.textContent || "").trim();
              if (_0x16c605.length > 0) {
                console.log("[建行网点] ✓ 选择第一个网点:", _0x16c605);
                this.simulateRealMouseClick(_0x17cc2d);
                return;
              }
            }
          }
        }
        _0x482e3f++;
        if (_0x482e3f < 15) {
          {
            console.log("[建行网点] 等待网点选项加载... (", _0x482e3f, "/15)");
            setTimeout(() => _0x56d3f7(_0x482e3f), 200);
          }
        } else {
          console.log("[建行网点] ✗ 网点选项加载超时");
        }
      };
      setTimeout(_0x56d3f7, 200);
    });
  },
  fillCCBLegacySelects(_0x3e8d2a, _0x247a4a, _0x26d409, _0x41212b) {
    const _0x384149 = this;
    if (_0x41212b[0]) {
      const _0x6f37ba = _0x3e8d2a.querySelectorAll("option");
      for (const _0x53463c of _0x6f37ba) {
        if (_0x53463c.textContent.includes(_0x41212b[0]) || _0x41212b[0].includes(_0x53463c.textContent.replace(/省|市|自治区/g, ""))) {
          _0x3e8d2a.value = _0x53463c.value;
          const _0x203d62 = {
            bubbles: true
          };
          _0x3e8d2a.dispatchEvent(new Event("change", _0x203d62));
          const _0x585813 = _0x3e8d2a.closest(".pbd_selectCtrl")?.["querySelector"](".cur_select");
          if (_0x585813) {
            _0x585813.textContent = _0x53463c.textContent;
          }
          console.log("[建行网点-旧版] 选择省份:", _0x53463c.textContent);
          break;
        }
      }
    }
    setTimeout(() => {
      if (_0x41212b[1] && _0x247a4a) {
        {
          const _0x4bebd2 = _0x247a4a.querySelectorAll("option");
          for (const _0x451e9b of _0x4bebd2) {
            if (_0x451e9b.textContent.includes(_0x41212b[1]) || _0x41212b[1].includes(_0x451e9b.textContent.replace(/市/g, ""))) {
              _0x247a4a.value = _0x451e9b.value;
              const _0x11cabe = {
                bubbles: true
              };
              _0x247a4a.dispatchEvent(new Event("change", _0x11cabe));
              const _0x3831ec = _0x247a4a.closest(".pbd_selectCtrl")?.["querySelector"](".cur_select");
              if (_0x3831ec) {
                _0x3831ec.textContent = _0x451e9b.textContent;
              }
              console.log("[建行网点-旧版] 选择城市:", _0x451e9b.textContent);
              break;
            }
          }
        }
      }
      setTimeout(() => {
        if (_0x41212b[2] && _0x26d409) {
          const _0x106c45 = _0x26d409.querySelectorAll("option");
          for (const _0x157d76 of _0x106c45) {
            if (_0x157d76.textContent.includes(_0x41212b[2]) || _0x41212b[2].includes(_0x157d76.textContent.replace(/区|县/g, ""))) {
              _0x26d409.value = _0x157d76.value;
              const _0x155112 = {
                bubbles: true
              };
              _0x26d409.dispatchEvent(new Event("change", _0x155112));
              const _0x4ca24f = _0x26d409.closest(".pbd_selectCtrl")?.["querySelector"](".cur_select");
              if (_0x4ca24f) {
                _0x4ca24f.textContent = _0x157d76.textContent;
              }
              console.log("[建行网点-旧版] 选择区县:", _0x157d76.textContent);
              break;
            }
          }
        }
      }, 500);
    }, 500);
  },
  simulateRealMouseClick(_0x463e4e, _0x5142ad) {
    if (!_0x463e4e) {
      {
        if (_0x5142ad) {
          _0x5142ad();
        }
        return;
      }
    }
    const _0x923b9a = _0x463e4e.getBoundingClientRect();
    const _0x42a504 = _0x923b9a.left + _0x923b9a.width / 2;
    const _0x1a04e6 = _0x923b9a.top + _0x923b9a.height / 2;
    const _0x529bf2 = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: _0x42a504,
      clientY: _0x1a04e6,
      screenX: _0x42a504,
      screenY: _0x1a04e6,
      button: 0,
      buttons: 1
    };
    const _0x503115 = {
      behavior: "smooth",
      block: "center"
    };
    _0x463e4e.scrollIntoView(_0x503115);
    _0x463e4e.dispatchEvent(new MouseEvent("mouseenter", _0x529bf2));
    _0x463e4e.dispatchEvent(new MouseEvent("mouseover", _0x529bf2));
    if (_0x463e4e.focus) {
      _0x463e4e.focus();
    }
    _0x463e4e.dispatchEvent(new MouseEvent("mousedown", _0x529bf2));
    setTimeout(() => {
      _0x463e4e.dispatchEvent(new MouseEvent("mouseup", _0x529bf2));
      _0x463e4e.dispatchEvent(new MouseEvent("click", _0x529bf2));
      console.log("[农行网点] 已点击:", (_0x463e4e.textContent || "").substring(0, 15));
      if (_0x5142ad) {
        setTimeout(_0x5142ad, 50);
      }
    }, 30);
  },
  fillABCBranch(_0x4509a8) {
    let _0x5f82bc = _0x4509a8.split(/[\s\/\-\>]+/).filter(_0x5d443c => _0x5d443c.trim());
    console.log("[农行网点] ========== 开始选择网点 ==========");
    console.log("[农行网点] 原始关键词:", _0x5f82bc);
    const _0x23d742 = _0x5f82bc[_0x5f82bc.length - 1] || _0x4509a8;
    _0x5f82bc = this.smartFillKeywords(_0x5f82bc, _0x23d742);
    const _0x29288b = ["北京", "天津", "上海", "重庆"];
    const _0x16019a = _0x29288b.some(_0x537d50 => _0x5f82bc[0]?.["includes"](_0x537d50));
    let _0x13947f = [..._0x5f82bc];
    _0x16019a && _0x5f82bc.length >= 2 && _0x5f82bc[0] !== _0x5f82bc[1] && (_0x13947f = [_0x5f82bc[0], _0x5f82bc[0], ..._0x5f82bc.slice(1)], console.log("[农行网点] 检测到直辖市，调整关键词:", _0x13947f));
    const _0x3e32e4 = document.querySelector(".el-cascader");
    if (_0x3e32e4) {
      const _0x922518 = _0x3e32e4.querySelector(".el-input__inner");
      if (_0x922518) {
        console.log("[农行网点] 步骤1: 点击打开下拉框...");
        this.simulateRealMouseClick(_0x922518, () => {
          console.log("[农行网点] 下拉框已触发，等待面板加载...");
          setTimeout(() => {
            this.searchInCascaderPanel(_0x13947f, 0);
          }, 250);
        });
        return;
      }
    }
    const _0x5a6586 = document.querySelector("#orglevel1");
    const _0x40b1d4 = document.querySelector("#orglevel2");
    const _0x483e9d = document.querySelector("#orglevel3");
    const _0x5e260b = document.querySelector("#orglevel4");
    if (_0x5a6586) {
      console.log("[农行网点-旧版] 找到原生select");
      this.fillABCLegacySelects([_0x5a6586, _0x40b1d4, _0x483e9d, _0x5e260b], _0x13947f);
      return;
    }
    this.handleElementUISelect(_0x4509a8);
  },
  fillABCLegacySelects(_0x40b9ee, _0x114f36) {
    let _0x89be24 = 0;
    const _0x27ab3b = () => {
      if (_0x89be24 >= _0x40b9ee.length || _0x89be24 >= _0x114f36.length) {
        console.log("[农行网点-旧版] 选择完成");
        return;
      }
      const _0x414a16 = _0x40b9ee[_0x89be24];
      if (!_0x414a16) {
        _0x89be24++;
        setTimeout(_0x27ab3b, 300);
        return;
      }
      const _0x1f0315 = _0x114f36[_0x89be24];
      const _0x2f657f = _0x414a16.querySelectorAll("option");
      for (const _0x4f9c93 of _0x2f657f) {
        const _0x4633b6 = _0x4f9c93.textContent || "";
        const _0x154537 = _0x1f0315.replace(/省|市|分行|支行|自治区|区|县/g, "");
        const _0x53bd89 = _0x4633b6.replace(/省|市|分行|支行|自治区|区|县/g, "");
        if (_0x4633b6.includes(_0x1f0315) || _0x1f0315.includes(_0x53bd89) || _0x53bd89.includes(_0x154537) || _0x154537.includes(_0x53bd89)) {
          _0x414a16.value = _0x4f9c93.value;
          const _0x34facf = {
            bubbles: true
          };
          _0x414a16.dispatchEvent(new Event("change", _0x34facf));
          console.log("[农行网点-旧版] 第", _0x89be24 + 1, "级选择:", _0x4633b6);
          break;
        }
      }
      _0x89be24++;
      setTimeout(_0x27ab3b, 500);
    };
    _0x27ab3b();
  },
  searchInCascaderPanel(_0xb9517c, _0x4a108c, _0x1bb758 = 0) {
    const _0x38eeb6 = _0x581d48 => /支行|营业部|营业厅|储蓄所|分理处/.test(_0x581d48);
    if (_0x4a108c >= _0xb9517c.length) {
      console.log("[级联选择] ✓✓✓ 全部选择完成！");
      setTimeout(() => {
        document.body.click();
        console.log("[级联选择] 已关闭下拉框");
      }, 500);
      return;
    }
    const _0x12c900 = document.querySelectorAll(".el-cascader-panel .el-cascader-menu");
    console.log("[级联选择] ===== 步骤", _0x4a108c + 2, ": 选择第", _0x4a108c + 1, "级 =====");
    console.log("[级联选择] 当前面板数:", _0x12c900.length);
    if (_0x4a108c >= _0x12c900.length) {
      _0x1bb758++;
      if (_0x1bb758 < 15) {
        {
          console.log("[级联选择] 等待第", _0x4a108c + 1, "级面板... (", _0x1bb758, "/15)");
          setTimeout(() => this.searchInCascaderPanel(_0xb9517c, _0x4a108c, _0x1bb758), 150);
        }
      } else {
        console.log("[级联选择] ✗ 面板加载超时");
      }
      return;
    }
    const _0x2517e7 = _0x12c900[_0x4a108c];
    const _0x498e94 = _0x2517e7.querySelectorAll(".el-cascader-node");
    const _0x1b868d = _0xb9517c[_0x4a108c];
    const _0x44a009 = _0xb9517c[_0xb9517c.length - 1];
    console.log("[级联选择] 目标关键词:", _0x1b868d, "| 网点名称:", _0x44a009);
    console.log("[级联选择] 可选项数量:", _0x498e94.length);
    const _0x12fc27 = Array.from(_0x498e94).slice(0, 5).map(_0x24a453 => _0x24a453.textContent?.["trim"]());
    console.log("[级联选择] 前5个选项:", _0x12fc27.join(" | "));
    const _0x1fa759 = _0x498e94[0]?.["textContent"]?.["trim"]() || "";
    const _0x258639 = _0x38eeb6(_0x1fa759);
    console.log("[级联选择] 当前级别是否为网点:", _0x258639);
    let _0x266e2c = null;
    let _0x1e8db3 = "";
    const _0x280e5e = _0x258639 ? _0x44a009 : _0x1b868d;
    const _0x3e02f0 = _0x280e5e.replace(/省|市|分行|支行|自治区|区|县|营业部|营业厅|储蓄所/g, "");
    for (const _0xd875f6 of _0x498e94) {
      {
        const _0x3c06f8 = (_0xd875f6.textContent || "").trim();
        const _0x5693ae = _0x3c06f8.replace(/省|市|分行|支行|自治区|区|县|营业部|营业厅|储蓄所/g, "");
        if (_0x3c06f8 === _0x280e5e || _0x3c06f8.includes(_0x280e5e) || _0x280e5e.includes(_0x5693ae) || _0x5693ae.includes(_0x3e02f0) || _0x3e02f0.includes(_0x5693ae)) {
          _0x266e2c = _0xd875f6;
          _0x1e8db3 = _0x3c06f8;
          break;
        }
      }
    }
    if (!_0x266e2c && _0x258639) {
      const _0x522a45 = _0x1b868d.replace(/省|市|分行|支行|自治区|区|县/g, "");
      for (const _0x5418e8 of _0x498e94) {
        const _0x5211c7 = (_0x5418e8.textContent || "").trim();
        const _0xe50008 = _0x5211c7.replace(/省|市|分行|支行|自治区|区|县/g, "");
        if (_0x5211c7.includes(_0x1b868d) || _0xe50008.includes(_0x522a45)) {
          _0x266e2c = _0x5418e8;
          _0x1e8db3 = _0x5211c7;
          break;
        }
      }
    }
    if (_0x266e2c) {
      console.log("[级联选择] ✓ 找到匹配:", _0x1e8db3);
      console.log("[级联选择] 正在模拟点击...");
      const _0x218896 = _0x266e2c.querySelector(".el-icon-arrow-right, .el-cascader-node__postfix i");
      const _0x5be643 = !_0x218896 || _0x218896.style.display === "none";
      console.log("[级联选择] 有展开箭头:", !!_0x218896, "| 是叶子节点:", _0x5be643);
      this.simulateRealMouseClick(_0x266e2c, () => {
        console.log("[级联选择] 点击完成");
        _0x5be643 && _0x38eeb6(_0x1e8db3) ? (console.log("[级联选择] ✓✓✓ 已选择网点（叶子节点），完成！"), setTimeout(() => {
          {
            document.body.click();
          }
        }, 300)) : setTimeout(() => this.searchInCascaderPanel(_0xb9517c, _0x4a108c + 1, 0), 280);
      });
    } else {
      console.log("[级联选择] ✗ 未找到匹配:", _0x280e5e);
      setTimeout(() => this.searchInCascaderPanel(_0xb9517c, _0x4a108c + 1, 0), 300);
    }
  },
  fillICBCBranch(_0x43029e) {
    let _0x50b51f = _0x43029e.split(/[\s\/\-\>]+/).filter(_0x16232f => _0x16232f.trim());
    console.log("[工行网点] 原始关键词:", _0x50b51f);
    const _0x4f2e5a = _0x50b51f[_0x50b51f.length - 1] || _0x43029e;
    _0x50b51f = this.smartFillKeywords(_0x50b51f, _0x4f2e5a);
    const _0x2768d2 = ["北京", "天津", "上海", "重庆"];
    const _0xc2a5ac = _0x2768d2.some(_0x5e37f1 => _0x50b51f[0]?.["includes"](_0x5e37f1));
    let _0x4e2fd7 = [..._0x50b51f];
    _0xc2a5ac && _0x50b51f.length >= 2 && _0x50b51f[0] !== _0x50b51f[1] && (_0x4e2fd7 = [_0x50b51f[0], _0x50b51f[0], ..._0x50b51f.slice(1)], console.log("[工行网点] 检测到直辖市，调整关键词:", _0x4e2fd7));
    const _0x2e556f = Array.from(document.querySelectorAll(".el-select"));
    console.log("[工行网点] 页面共有", _0x2e556f.length, "个el-select");
    let _0x2b3d3d = null;
    let _0x3bfa21 = null;
    let _0x3b5fd7 = null;
    let _0x379f4f = null;
    for (const _0x33a205 of _0x2e556f) {
      const _0x58e734 = _0x33a205.querySelector(".el-input__inner");
      const _0x12fd30 = _0x58e734?.["placeholder"] || "";
      if (_0x12fd30.includes("省份") || _0x12fd30.includes("省") && !_0x12fd30.includes("城市")) {
        _0x2b3d3d = _0x33a205;
        console.log("[工行网点] √ 找到省份下拉框");
      } else {
        if (_0x12fd30.includes("城市")) {
          _0x3bfa21 = _0x33a205;
          console.log("[工行网点] √ 找到城市下拉框");
        } else {
          if (_0x12fd30.includes("区县") || _0x12fd30.includes("区") && !_0x12fd30.includes("城市")) {
            _0x3b5fd7 = _0x33a205;
            console.log("[工行网点] √ 找到区县下拉框");
          } else {
            (_0x12fd30.includes("网点") || _0x12fd30.includes("支行") || _0x12fd30.includes("营业")) && (_0x379f4f = _0x33a205, console.log("[工行网点] √ 找到网点下拉框"));
          }
        }
      }
    }
    const _0xd9647e = [_0x2b3d3d, _0x3bfa21, _0x3b5fd7, _0x379f4f].filter(_0x4d1873 => _0x4d1873);
    console.log("[工行网点] 最终找到", _0xd9647e.length, "个下拉框");
    if (_0xd9647e.length >= 3) {
      this.fillICBCSelectSequence(_0xd9647e, _0x4e2fd7, 0);
      return;
    }
    console.log("[工行网点] 使用通用方式填充");
    this.fillElementUISelectSequence(_0x2e556f.slice(0, 4), _0x4e2fd7);
  },
  fillICBCSelectSequence(_0x3e50d6, _0x80bd3, _0x3afc44, _0x27993e = 0) {
    if (_0x3afc44 >= _0x3e50d6.length || _0x3afc44 >= _0x80bd3.length) {
      console.log("[工行网点] ✓✓✓ 选择完成，共", _0x3afc44, "级");
      return;
    }
    const _0x20f7d5 = _0x3e50d6[_0x3afc44];
    const _0x5c9115 = _0x20f7d5.querySelector(".el-input__inner");
    if (!_0x5c9115) {
      this.fillICBCSelectSequence(_0x3e50d6, _0x80bd3, _0x3afc44 + 1, 0);
      return;
    }
    const _0x2cfe37 = _0x80bd3[_0x3afc44];
    console.log("[工行网点] ===== 第", _0x3afc44 + 1, "级 ===== 关键词:", _0x2cfe37);
    document.body.click();
    setTimeout(() => {
      this.simulateRealMouseClick(_0x5c9115, () => {
        const _0x13e1ef = (_0x1baba8 = 0) => {
          let _0x3a7cc9 = null;
          const _0x49760f = document.querySelectorAll(".el-select-dropdown");
          for (const _0x487321 of _0x49760f) {
            const _0x1e5c50 = _0x487321.getBoundingClientRect();
            if (_0x1e5c50.height > 0 && _0x1e5c50.width > 0) {
              const _0x3140bf = _0x487321.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
              if (_0x3140bf.length > 0) {
                _0x3a7cc9 = _0x487321;
                break;
              }
            }
          }
          if (!_0x3a7cc9) {
            _0x1baba8++;
            _0x1baba8 < 10 ? setTimeout(() => _0x13e1ef(_0x1baba8), 100) : (console.log("[工行网点] ✗ 下拉框无数据，跳过"), this.fillICBCSelectSequence(_0x3e50d6, _0x80bd3, _0x3afc44 + 1, 0));
            return;
          }
          const _0x65f33a = _0x3a7cc9.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
          console.log("[工行网点] 找到", _0x65f33a.length, "个选项");
          let _0xec6189 = null;
          let _0x47e755 = "";
          const _0x4b99e3 = _0x2cfe37.replace(/市|省|区|县|自治区|分行|支行/g, "");
          for (const _0x48eb9a of _0x65f33a) {
            const _0x322277 = (_0x48eb9a.textContent || "").trim();
            const _0xf9b54b = _0x322277.replace(/市|省|区|县|自治区|分行|支行/g, "");
            if (_0x322277 === _0x2cfe37 || _0x322277.includes(_0x2cfe37) || _0x2cfe37.includes(_0xf9b54b) || _0xf9b54b.includes(_0x4b99e3) || _0x4b99e3.includes(_0xf9b54b)) {
              _0xec6189 = _0x48eb9a;
              _0x47e755 = _0x322277;
              break;
            }
          }
          _0xec6189 ? (console.log("[工行网点] ✓ 选择:", _0x47e755), this.simulateRealMouseClick(_0xec6189, () => {
            setTimeout(() => this.fillICBCSelectSequence(_0x3e50d6, _0x80bd3, _0x3afc44 + 1, 0), 400);
          })) : (console.log("[工行网点] ✗ 未找到匹配:", _0x2cfe37), this.fillICBCSelectSequence(_0x3e50d6, _0x80bd3, _0x3afc44 + 1, 0));
        };
        setTimeout(_0x13e1ef, 100);
      });
    }, 50);
  },
  fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 = 0, _0x5c6c1f = 0, _0x1d7bbb = 0) {
    if (_0x2b7458 >= _0x3e57a5.length || _0x5c6c1f >= _0x5cffd0.length) {
      console.log("[级联Select] ✓✓✓ 完成，共选择", _0x2b7458, "级");
      return;
    }
    const _0x4691d1 = _0x3e57a5[_0x2b7458];
    const _0x14beb4 = _0x4691d1.querySelector(".el-input__inner");
    const _0x21ba77 = _0x5cffd0[_0x5c6c1f];
    if (!_0x14beb4) {
      this.fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 + 1, _0x5c6c1f, 0);
      return;
    }
    console.log("[级联Select] ===== 第", _0x2b7458 + 1, "级 ===== 关键词:", _0x21ba77);
    const _0x5665e9 = /支行|分行|营业所|营业厅|储蓄所/.test(_0x21ba77);
    const _0x29510a = _0x14beb4.placeholder || "";
    const _0x2a362a = _0x29510a.includes("区") || _0x29510a.includes("县");
    if (_0x2a362a && _0x5665e9) {
      console.log("[级联Select] 跳过区县级别");
      this.fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 + 1, _0x5c6c1f, 0);
      return;
    }
    document.body.click();
    setTimeout(() => {
      this.simulateRealMouseClick(_0x14beb4, () => {
        const _0x431361 = (_0xcf80da = 0) => {
          const _0x35c4be = document.querySelectorAll(".el-select-dropdown");
          let _0x303624 = null;
          for (const _0x695a39 of _0x35c4be) {
            {
              const _0x10acb4 = _0x695a39.getBoundingClientRect();
              if (_0x10acb4.height > 0) {
                const _0x4d6fd7 = _0x695a39.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
                if (_0x4d6fd7.length > 0) {
                  _0x303624 = _0x695a39;
                  break;
                }
              }
            }
          }
          if (!_0x303624) {
            _0xcf80da++;
            if (_0xcf80da < 10) {
              setTimeout(() => _0x431361(_0xcf80da), 100);
            } else {
              {
                console.log("[级联Select] ✗ 下拉框无数据，跳过");
                this.fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 + 1, _0x5c6c1f + 1, 0);
              }
            }
            return;
          }
          const _0x5d8ab7 = _0x303624.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
          console.log("[级联Select] 找到", _0x5d8ab7.length, "个选项");
          let _0x22964b = null;
          let _0x152295 = "";
          const _0x8ed894 = _0x21ba77.replace(/省|市|区|县|自治区|分行|支行/g, "");
          for (const _0xc69257 of _0x5d8ab7) {
            const _0x55ddfa = (_0xc69257.textContent || "").trim();
            const _0x305249 = _0x55ddfa.replace(/省|市|区|县|自治区|分行|支行/g, "");
            if (_0x2a362a && /支行|分行|营业所|营业厅|储蓄所/.test(_0x55ddfa)) {
              continue;
            }
            if (_0x55ddfa === _0x21ba77 || _0x55ddfa.includes(_0x21ba77) || _0x21ba77.includes(_0x305249) || _0x305249.includes(_0x8ed894) || _0x8ed894.includes(_0x305249)) {
              {
                _0x22964b = _0xc69257;
                _0x152295 = _0x55ddfa;
                break;
              }
            }
          }
          _0x22964b ? (console.log("[级联Select] ✓ 选择:", _0x152295), this.simulateRealMouseClick(_0x22964b, () => {
            setTimeout(() => {
              this.fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 + 1, _0x5c6c1f + 1, 0);
            }, 400);
          })) : (console.log("[级联Select] ✗ 未找到匹配:", _0x21ba77), this.fillElementUISelectSequence(_0x3e57a5, _0x5cffd0, _0x2b7458 + 1, _0x5c6c1f + 1, 0));
        };
        setTimeout(_0x431361, 100);
      });
    }, 50);
  },
  fillCascadeSelectSequence(_0xc32388, _0x220a4d, _0x4cf8a4 = 0) {
    if (_0x4cf8a4 >= _0xc32388.length) {
      console.log("[级联Select] ✓✓✓ 原生select完成");
      return;
    }
    const _0x4fdf78 = _0xc32388[_0x4cf8a4];
    const _0x252d30 = Array.from(_0x4fdf78.querySelectorAll("option"));
    console.log("[级联Select] ===== 原生select第", _0x4cf8a4 + 1, "级 =====");
    this.simulateRealMouseClick(_0x4fdf78, () => {
      for (const _0x5c1cbf of _0x220a4d) {
        const _0x57ad9a = _0x252d30.find(_0xe8e1db => _0xe8e1db.textContent.includes(_0x5c1cbf));
        if (_0x57ad9a) {
          {
            _0x4fdf78.value = _0x57ad9a.value;
            const _0x30ae8a = {
              bubbles: true
            };
            _0x4fdf78.dispatchEvent(new Event("change", _0x30ae8a));
            console.log("[级联Select] ✓ 选择:", _0x57ad9a.textContent?.["trim"]());
            break;
          }
        }
      }
      setTimeout(() => this.fillCascadeSelectSequence(_0xc32388, _0x220a4d, _0x4cf8a4 + 1), 200);
    });
  },
  fillBOCBranch(_0x58a16c) {
    this.fillGenericBranch(_0x58a16c);
  },
  fillPSBCBranch(_0x29ccfa) {
    let _0x4b00b4 = _0x29ccfa.split(/[\s\/\-\>]+/).filter(_0xb43d03 => _0xb43d03.trim());
    console.log("[邮储网点] ========== 开始选择网点 ==========");
    console.log("[邮储网点] 原始关键词:", _0x4b00b4);
    const _0x21d322 = _0x4b00b4[_0x4b00b4.length - 1] || _0x29ccfa;
    _0x4b00b4 = this.smartFillKeywords(_0x4b00b4, _0x21d322);
    const _0x431e4f = ["北京", "天津", "上海", "重庆"];
    const _0x42c0cd = _0x431e4f.some(_0x2829e0 => _0x4b00b4[0]?.["includes"](_0x2829e0));
    let _0x636acd = [..._0x4b00b4];
    _0x42c0cd && _0x4b00b4.length >= 2 && _0x4b00b4[0] !== _0x4b00b4[1] && (_0x636acd = [_0x4b00b4[0], _0x4b00b4[0], ..._0x4b00b4.slice(1)], console.log("[邮储网点] 检测到直辖市，调整关键词:", _0x636acd));
    const _0x4b8cd3 = document.querySelector(".el-cascader");
    if (_0x4b8cd3) {
      console.log("[邮储网点] 找到级联选择器");
      const _0x1e600b = _0x4b8cd3.querySelector(".el-input__inner");
      _0x1e600b && this.simulateRealMouseClick(_0x1e600b, () => {
        setTimeout(() => this.searchInCascaderPanel(_0x636acd, 0), 250);
      });
      setTimeout(() => {
        if (!this._psbcBranchFilling) {
          {
            this._psbcBranchFilling = true;
            console.log("[邮储网点] 开始填充网点下拉框");
            this.fillPSBCBranchSelect(_0x636acd);
            setTimeout(() => {
              this._psbcBranchFilling = false;
            }, 2000);
          }
        }
      }, 1500);
      return;
    }
    const _0x25d923 = document.querySelector(".e-select-province");
    const _0x41aec7 = document.querySelector(".e-select-city");
    const _0x13c700 = document.querySelector(".e-select-country");
    const _0x1e5dea = document.querySelector(".e-select-branch");
    if (_0x25d923 && _0x41aec7) {
      console.log("[邮储网点-旧版] 找到自定义下拉框");
      this.fillPSBCLegacySelects(_0x25d923, _0x41aec7, _0x13c700, _0x1e5dea, _0x636acd);
      return;
    }
    const _0x1d8bb1 = document.querySelectorAll("select");
    const _0x432cb2 = Array.from(_0x1d8bb1).filter(_0x993e51 => {
      const _0x5bea34 = _0x993e51.closest("tr") || _0x993e51.closest("div");
      const _0x3b0971 = (_0x5bea34?.["textContent"] || "").toLowerCase();
      return /网点|省|市|区|县/.test(_0x3b0971);
    });
    if (_0x432cb2.length > 0) {
      {
        this.fillCascadeSelectSequence(_0x432cb2, _0x636acd);
      }
    }
  },
  fillPSBCLegacySelects(_0x39e009, _0x100d52, _0x4d9af0, _0x4e7690, _0x20d634) {
    const _0x54e22b = this;
    const _0x1a92af = (_0x13b62f, _0x276238, _0x4dab44) => {
      if (!_0x13b62f || !_0x276238) {
        if (_0x4dab44) {
          setTimeout(_0x4dab44, 300);
        }
        return;
      }
      _0x13b62f.click();
      setTimeout(() => {
        {
          const _0x44ce39 = document.querySelector(".e-select-list:not([style*=\"display: none\"])") || document.querySelector(".area-select-list:not([style*=\"display: none\"])");
          if (_0x44ce39) {
            const _0xa1f7c2 = _0x44ce39.querySelectorAll(".e-select-list-item");
            for (const _0x313cef of _0xa1f7c2) {
              const _0xb40b35 = _0x313cef.textContent || "";
              const _0x21e398 = _0x276238.replace(/省|市|区|县|自治区/g, "");
              const _0xeac4a1 = _0xb40b35.replace(/省|市|区|县|自治区/g, "");
              if (_0xb40b35.includes(_0x276238) || _0x276238.includes(_0xeac4a1) || _0xeac4a1.includes(_0x21e398) || _0x21e398.includes(_0xeac4a1)) {
                console.log("[邮储网点-旧版] 选择:", _0xb40b35);
                _0x313cef.click();
                break;
              }
            }
          }
          if (_0x4dab44) {
            setTimeout(_0x4dab44, 500);
          }
        }
      }, 300);
    };
    _0x1a92af(_0x39e009, _0x20d634[0], () => {
      _0x1a92af(_0x100d52, _0x20d634[1], () => {
        {
          _0x1a92af(_0x4d9af0, _0x20d634[2], () => {
            _0x4e7690 && _0x20d634[3] && (_0x4e7690.click(), setTimeout(() => {
              const _0x4fe37e = document.querySelector(".branch-select-list:not([style*=\"display: none\"])");
              if (_0x4fe37e) {
                {
                  const _0x45bfa8 = _0x4fe37e.querySelectorAll(".e-select-list-item");
                  const _0x4c19aa = _0x20d634[_0x20d634.length - 1];
                  for (const _0x481827 of _0x45bfa8) {
                    {
                      if (_0x481827.textContent.includes(_0x4c19aa) || _0x4c19aa.includes(_0x481827.textContent.slice(0, 6))) {
                        {
                          console.log("[邮储网点-旧版] 选择网点:", _0x481827.textContent);
                          _0x481827.click();
                          break;
                        }
                      }
                    }
                  }
                }
              }
            }, 300));
          });
        }
      });
    });
  },
  fillPSBCBranchSelect(_0x2446ff) {
    const _0x22b797 = Array.from(document.querySelectorAll(".el-select"));
    const _0x5c19ea = _0x22b797.find(_0x1ae0e1 => {
      const _0x1770b1 = _0x1ae0e1.querySelector(".el-input__inner");
      const _0x478acf = _0x1770b1?.["placeholder"] || "";
      const _0x4c4968 = _0x1ae0e1.closest(".el-form-item") || _0x1ae0e1.closest("div");
      const _0x39f732 = (_0x4c4968?.["textContent"] || "").slice(0, 50);
      return _0x478acf.includes("网点") || _0x39f732.includes("预约网点") || _0x39f732.includes("选择网点");
    });
    if (!_0x5c19ea) {
      return;
    }
    const _0x1e4ec9 = _0x5c19ea.querySelector(".el-input__inner");
    console.log("[邮储网点] 找到网点下拉框，使用模拟点击");
    this.simulateRealMouseClick(_0x1e4ec9, () => {
      setTimeout(() => {
        const _0x3098ad = document.querySelectorAll(".el-select-dropdown");
        const _0x3d2d72 = _0x2446ff[_0x2446ff.length - 1] || _0x2446ff[3] || _0x2446ff[2];
        console.log("[邮储网点] 查找选项，关键词:", _0x3d2d72);
        for (const _0x4e34a2 of _0x3098ad) {
          const _0x696869 = _0x4e34a2.getBoundingClientRect();
          if (_0x696869.height > 0 && _0x696869.width > 0) {
            const _0x5d0d03 = _0x4e34a2.querySelectorAll(".el-select-dropdown__item:not(.is-disabled)");
            console.log("[邮储网点] 找到", _0x5d0d03.length, "个选项");
            for (const _0x2f93a7 of _0x5d0d03) {
              const _0x10ba08 = (_0x2f93a7.textContent || "").trim();
              if (_0x10ba08.includes(_0x3d2d72) || _0x3d2d72.includes(_0x10ba08.slice(0, 4))) {
                console.log("[邮储网点] ✓ 选择:", _0x10ba08);
                this.simulateRealMouseClick(_0x2f93a7);
                return;
              }
            }
          }
        }
        console.log("[邮储网点] ✗ 未找到匹配");
      }, 120);
    });
  },
  fillGenericBranch(_0x1ac1f7) {
    let _0x12cdbc = _0x1ac1f7.split(/[\s\/\-\>]+/).filter(_0x1510b1 => _0x1510b1.trim());
    console.log("[通用网点] ========== 开始选择网点 ==========");
    console.log("[通用网点] 原始关键词:", _0x12cdbc);
    const _0x55d3bd = _0x12cdbc[_0x12cdbc.length - 1] || _0x1ac1f7;
    _0x12cdbc = this.smartFillKeywords(_0x12cdbc, _0x55d3bd);
    const _0x3ec1fd = ["北京", "天津", "上海", "重庆"];
    const _0x62d51c = _0x3ec1fd.some(_0x333629 => _0x12cdbc[0]?.["includes"](_0x333629));
    let _0x590cbb = [..._0x12cdbc];
    _0x62d51c && _0x12cdbc.length >= 2 && _0x12cdbc[0] !== _0x12cdbc[1] && (_0x590cbb = [_0x12cdbc[0], _0x12cdbc[0], ..._0x12cdbc.slice(1)]);
    const _0x504e9f = document.querySelectorAll("input[type=\"text\"]");
    for (const _0x660108 of _0x504e9f) {
      const _0x67a33c = (_0x660108.placeholder || "").toLowerCase();
      const _0x133052 = _0x660108.closest(".el-form-item") || _0x660108.closest("tr") || _0x660108.closest("div");
      const _0x4c1178 = (_0x133052?.["textContent"] || "").toLowerCase();
      if (_0x67a33c.includes("网点") || _0x67a33c.includes("搜索") || _0x4c1178.includes("网点") && _0x67a33c.includes("关键")) {
        const _0x477acd = _0x590cbb[_0x590cbb.length - 1] || _0x1ac1f7;
        this.setInputValueAndTrigger(_0x660108, _0x477acd);
        console.log("[通用网点] ✓ 填入搜索框:", _0x477acd);
        return;
      }
    }
    const _0x3e1215 = document.querySelector(".el-cascader");
    if (_0x3e1215) {
      const _0x2091f6 = _0x3e1215.querySelector(".el-input__inner");
      if (_0x2091f6) {
        console.log("[通用网点] 找到级联选择器，使用模拟点击");
        this.simulateRealMouseClick(_0x2091f6, () => {
          setTimeout(() => this.searchInCascaderPanel(_0x590cbb, 0), 250);
        });
        return;
      }
    }
    const _0x62d1b5 = Array.from(document.querySelectorAll(".el-select"));
    const _0x17de1e = _0x62d1b5.filter(_0x4fa9df => {
      const _0x2536cb = _0x4fa9df.querySelector(".el-input__inner");
      const _0x32e359 = _0x2536cb?.["placeholder"] || "";
      return /省|市|区|县|网点/.test(_0x32e359);
    });
    if (_0x17de1e.length >= 3) {
      console.log("[通用网点] 找到", _0x17de1e.length, "个下拉框");
      this.fillElementUISelectSequence(_0x17de1e, _0x590cbb);
      return;
    }
    const _0x590c3 = Array.from(document.querySelectorAll("select"));
    const _0x366af7 = _0x590c3.filter(_0x5e0fa8 => {
      const _0x1c5c60 = _0x5e0fa8.closest(".el-form-item") || _0x5e0fa8.closest("tr") || _0x5e0fa8.closest("div");
      const _0x30bb8e = (_0x1c5c60?.["textContent"] || "").toLowerCase();
      return /网点|分行|支行|领取/.test(_0x30bb8e);
    });
    if (_0x366af7.length > 0) {
      console.log("[通用网点] 找到", _0x366af7.length, "个原生select");
      this.fillCascadeSelectSequence(_0x366af7, _0x590cbb);
      return;
    }
    this.handleElementUISelect(_0x590cbb[_0x590cbb.length - 1] || _0x1ac1f7);
  },
  fillCascadeSelect(_0x4bea98, _0xba8641) {
    const _0x11ef22 = _0x4bea98.split(/[\s\/\-\>]+/).filter(_0x385882 => _0x385882.trim());
    const _0x5cdd85 = document.querySelectorAll("select");
    let _0x41d57d = 0;
    _0x5cdd85.forEach(_0x3b8766 => {
      if (_0x41d57d >= _0xba8641.length) {
        return;
      }
      const _0x2b9328 = _0x3b8766.closest("tr") || _0x3b8766.closest("div");
      const _0x21c0e1 = (_0x2b9328?.["textContent"] || "").toLowerCase();
      if (_0x21c0e1.includes(_0xba8641[_0x41d57d])) {
        const _0x4c1324 = Array.from(_0x3b8766.querySelectorAll("option"));
        for (const _0x363567 of _0x11ef22) {
          const _0x2f00dd = _0x4c1324.find(_0x2ec321 => _0x2ec321.textContent.includes(_0x363567));
          if (_0x2f00dd) {
            _0x3b8766.value = _0x2f00dd.value;
            const _0x182aee = {
              bubbles: true
            };
            _0x3b8766.dispatchEvent(new Event("change", _0x182aee));
            _0x41d57d++;
            break;
          }
        }
      }
    });
  },
  fillAmountFields(_0x291932) {
    if (!_0x291932) {
      return;
    }
    const _0x314424 = document.querySelectorAll("input[type=\"number\"], input[type=\"text\"]");
    _0x314424.forEach(_0x2fd23d => {
      const _0x3cd528 = _0x2fd23d.value.trim();
      if (_0x3cd528 && _0x3cd528 !== "1" && _0x3cd528 !== "0" && !isNaN(_0x3cd528)) {
        return;
      }
      const _0x33ae47 = _0x2fd23d.id || "";
      const _0x3fe5a1 = _0x2fd23d.name || "";
      const _0x6a8664 = _0x2fd23d.placeholder || "";
      const _0x445323 = _0x2fd23d.labels && _0x2fd23d.labels[0] ? _0x2fd23d.labels[0].textContent : "";
      const _0x1bdefe = _0x33ae47.toLowerCase();
      const _0x20e4bf = _0x3fe5a1.toLowerCase();
      const _0xda2b18 = _0x6a8664.toLowerCase();
      const _0x4359de = _0x445323.toLowerCase();
      const _0x323e98 = (_0x2fd23d.className || "").toLowerCase();
      const _0xa2bb2b = _0x2fd23d.closest(".item-con") || _0x2fd23d.closest(".el-form-item") || _0x2fd23d.closest("tr") || _0x2fd23d.closest("td") || _0x2fd23d.parentElement;
      const _0x5fc5c4 = ((_0xa2bb2b || {}).textContent || "").slice(0, 100).toLowerCase();
      const _0xbea4a1 = _0x1bdefe + _0x20e4bf + _0xda2b18 + _0x4359de + _0x323e98;
      const _0x47b905 = /phone|mobile|tel|cell|手机/.test(_0xbea4a1);
      const looksLikeDateField = /date|日期|时间|time|calendar/.test(_0xbea4a1);
      const _0x4aede9 = /网点|分行|支行|branch|省|市|区/.test(_0xbea4a1);
      const _0x4438b1 = /code|验证|captcha/.test(_0xbea4a1);
      const _0x53365d = /身份证|证件|idcard|certno|idno|zjhm|crdt/.test(_0xbea4a1);
      const _0x4cba45 = /name|姓名|客户/.test(_0xbea4a1);
      if (_0x47b905 || looksLikeDateField || _0x4aede9 || _0x4438b1 || _0x53365d || _0x4cba45) {
        return;
      }
      if (/日期|时间|网点|兑换日|预约日|证件|身份证|姓名/.test(_0x5fc5c4) && !/数量/.test(_0x5fc5c4)) {
        return;
      }
      const _0x1c5829 = /预约数量|兑换数量|购买数量|数量/.test(_0x5fc5c4) && !/日期|时间|网点/.test(_0x5fc5c4);
      const _0x37d681 = _0x1bdefe.includes("amount") || _0x1bdefe.includes("num") || _0x1bdefe.includes("booking_num") || _0x1bdefe.includes("cardvalue") || _0x1bdefe.includes("qty") || _0x1bdefe.includes("quantity");
      const _0x86000e = _0x20e4bf.includes("amount") || _0x20e4bf.includes("num") || _0x20e4bf.includes("booking_num") || _0x20e4bf.includes("cardvalue") || _0x20e4bf.includes("qty") || _0x20e4bf.includes("quantity");
      const _0x326044 = _0x4359de.includes("数量") && !_0x4359de.includes("日期");
      const _0x1fc711 = _0xda2b18.includes("数量");
      (_0x37d681 || _0x86000e || _0x326044 || _0x1fc711 || _0x1c5829) && this.setInputValueAndTrigger(_0x2fd23d, _0x291932);
    });
    const elInputNumbers = document.querySelectorAll(".el-input-number input");
    elInputNumbers.forEach(_0xfdc115 => {
      const _0x527085 = _0xfdc115.value.trim();
      if (_0x527085 && _0x527085 !== "1" && _0x527085 !== "0") {
        return;
      }
      const _0x4d55ac = _0xfdc115.closest(".el-input-number");
      const _0xd67eaa = ((_0x4d55ac?.["closest"](".el-form-item") || _0x4d55ac?.["parentElement"])?.["textContent"] || "").toLowerCase();
      const _0x13e6aa = /预约数量|兑换数量|数量/.test(_0xd67eaa) && !/日期|时间|网点/.test(_0xd67eaa);
      _0x13e6aa && this.setInputValueAndTrigger(_0xfdc115, _0x291932);
    });
  },
  handleElementUISelect(_0x34fcac) {
    if (!_0x34fcac) {
      return;
    }
    const _0x49cfa8 = Array.from(document.querySelectorAll(".el-select"));
    const _0x32249c = _0x49cfa8.find(_0x56e1c2 => {
      const _0x4b3ac8 = ((_0x56e1c2.closest(".el-form-item") || _0x56e1c2.closest("tr") || _0x56e1c2.parentElement)?.["textContent"] || "").toLowerCase();
      if (!/网点|分行|支行|领取/.test(_0x4b3ac8)) {
        return false;
      }
      const _0x49911b = _0x56e1c2.querySelector(".el-input__inner");
      return _0x49911b && !_0x49911b.value;
    });
    if (!_0x32249c) {
      return;
    }
    const _0x1010bf = _0x32249c.querySelector(".el-input__inner");
    console.log("[ElementUI Select] 查找:", _0x34fcac);
    this.simulateRealMouseClick(_0x1010bf, () => {
      setTimeout(() => {
        const _0x44739e = document.querySelectorAll(".el-select-dropdown");
        for (const _0x2d7ebb of _0x44739e) {
          const _0x2e2978 = _0x2d7ebb.getBoundingClientRect();
          if (_0x2e2978.height <= 0) {
            continue;
          }
          const _0x1ad1f7 = _0x2d7ebb.querySelectorAll(".el-select-dropdown__item");
          for (const _0x4b1acd of _0x1ad1f7) {
            if ((_0x4b1acd.textContent || "").includes(_0x34fcac)) {
              console.log("[ElementUI Select] ✓ 选择:", _0x4b1acd.textContent?.["trim"]());
              this.simulateRealMouseClick(_0x4b1acd);
              return;
            }
          }
        }
        console.log("[ElementUI Select] ✗ 未找到匹配");
      }, 120);
    });
  },
  autoFillForm(_0x394610) {
    try {
      this._checkAuth();
    } catch (_0x40c963) {
      console.error("[表单填充] 授权验证失败:", _0x40c963.message);
      alert("❌ 授权验证失败，无法使用填充功能\n\n" + _0x40c963.message);
      return;
    }
    const _0x448eeb = this.savedData.groups[_0x394610];
    const _0x9b1a8c = this.getBankType();
    console.log("[填充] 当前银行类型:", _0x9b1a8c, "数据:", _0x448eeb);
    switch (_0x9b1a8c) {
      case "ABC":
        this.fillABCAgriculturalBank(_0x448eeb);
        break;
      case "ICBC":
        this.fillICBCBank(_0x448eeb);
        break;
      case "CCB":
        this.fillCCBBank(_0x448eeb);
        break;
      case "BOC":
        this.fillBOCBank(_0x448eeb);
        break;
      case "BOCOM":
        this.fillBOCOMBank(_0x448eeb);
        break;
      case "PSBC":
        this.fillPSBCBank(_0x448eeb);
        break;
      default:
        this.fillGenericForm(_0x448eeb);
    }
    console.log("[填充] 填充完成");
  },
  saveData() {
    StorageCache.set("autofillData", this.savedData);
  },
  autoFillFormWithRetry(_0x18ab8d, _0x33552a = 3, _0x507747 = 500) {
    this.autoFillForm(_0x18ab8d);
    _0x33552a > 0 && setTimeout(() => {
      {
        this.autoFillForm(_0x18ab8d);
        _0x33552a > 1 && setTimeout(() => this.autoFillForm(_0x18ab8d), _0x507747);
      }
    }, _0x507747);
  },
  triggerFrameworkUpdate(_0x24107b) {
    if (_0x24107b._vModifiers || _0x24107b.__vue__) {
      const _0x286b31 = {
        bubbles: true
      };
      const _0x2c6063 = new Event("input", _0x286b31);
      const _0x3ec709 = {
        value: _0x24107b,
        enumerable: true
      };
      Object.defineProperty(_0x2c6063, "target", _0x3ec709);
      _0x24107b.dispatchEvent(_0x2c6063);
    }
    const _0x2d3a01 = _0x24107b._valueTracker;
    _0x2d3a01 && _0x2d3a01.setValue("");
    _0x24107b.focus();
    const _0x2a46b7 = {
      bubbles: true
    };
    _0x24107b.dispatchEvent(new Event("focus", _0x2a46b7));
  }
};
window.SXFormFill = SXFormFill;