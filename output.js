//Thu Dec 18 2025 12:05:03 GMT+0000 (Coordinated Universal Time)
//
//
!function () {
  "use strict";
  "undefined" != typeof window && "localhost" !== window.location.hostname && "127.0.0.1" !== window.location.hostname && setTimeout(() => {}, 1000);
}();
(() => {
  console.log = function () {};
  console.warn = function () {};
  console.debug = function () {};
  console.info = function () {};
  const _0x26a4fe = "JP_GET_CONFIG";
  const _0x2dfb33 = "JP_SET_CONFIG";
  async function _0x460061() {
    return await new Promise(_0x58d533 => {
      chrome.runtime.sendMessage({
        type: _0x26a4fe
      }, _0x58d533);
    });
  }
  async function _0x15348f(_0x25d767) {
    return await new Promise(_0x1b3aeb => {
      chrome.runtime.sendMessage({
        type: _0x2dfb33,
        payload: _0x25d767
      }, _0x1b3aeb);
    });
  }
  function _0x37ba9f(_0x1fb59b, _0x570963 = {}, _0x506ad6 = []) {
    const _0x49bc4a = document.createElement(_0x1fb59b);
    Object.entries(_0x570963).forEach(([_0x129caa, _0x352dd6]) => {
      "class" === _0x129caa ? _0x49bc4a.className = _0x352dd6 : "text" === _0x129caa ? _0x49bc4a.textContent = _0x352dd6 : _0x49bc4a.setAttribute(_0x129caa, _0x352dd6);
    });
    _0x506ad6.forEach(_0x2c8c65 => _0x49bc4a.appendChild(_0x2c8c65));
    return _0x49bc4a;
  }
  function _0x5f4ba3(_0x446be3, _0x53a1fc, _0x2534bd, _0x5cc029 = "text", _0x3f905b = {}) {
    const _0xad655a = _0x37ba9f("input", {
      value: _0x53a1fc ?? "",
      type: _0x5cc029,
      class: _0x3f905b.inputClass || ""
    });
    let _0x523213 = null;
    const _0x20e509 = _0x37ba9f("div", {
      class: "validation-error",
      style: "display: none; color: #ef4444; font-size: 12px; margin-top: 4px;"
    });
    if (null != _0x53a1fc) {
      if ("date" === _0x5cc029 && _0x53a1fc) {
        {
          const _0xcaea61 = String(_0x53a1fc);
          if (_0xcaea61.includes("T") || _0xcaea61.includes(" ")) {
            {
              const _0x170d82 = _0xcaea61.split(/[T\s]/)[0];
              _0xad655a.value = _0x170d82;
            }
          } else {
            _0xad655a.value = _0xcaea61;
          }
        }
      } else {
        _0xad655a.value = _0x53a1fc;
      }
    }
    const _0x35918a = () => {
      let _0x2e7691 = _0xad655a.value;
      if (_0x3f905b.validateIdNumber) {
        {
          const _0x522f36 = function (_0x29f2c0) {
            if (!_0x29f2c0 || "" === _0x29f2c0.trim()) {
              return {
                valid: true,
                message: ""
              };
            }
            const _0x2194d3 = _0x29f2c0.trim();
            return /^(\d{15}|\d{18}|(\d{17}[xX]))$/.test(_0x2194d3) ? {
              valid: true,
              message: ""
            } : {
              valid: false,
              message: "请输入正确的身份证号（15位或18位数字，18位最后一位可以是X）"
            };
          }(_0x2e7691);
          _0x523213 = _0x522f36.valid ? null : _0x522f36.message;
        }
      } else {
        if (_0x3f905b.validateMobile) {
          {
            const _0x2cad39 = function (_0x1fb9ee) {
              if (!_0x1fb9ee || "" === _0x1fb9ee.trim()) {
                return {
                  valid: true,
                  message: ""
                };
              }
              const _0x1b6438 = _0x1fb9ee.trim();
              return /^1[3-9]\d{9}$/.test(_0x1b6438) ? {
                valid: true,
                message: ""
              } : {
                valid: false,
                message: "请输入正确的手机号（11位数字，以1开头）"
              };
            }(_0x2e7691);
            _0x523213 = _0x2cad39.valid ? null : _0x2cad39.message;
          }
        }
      }
      _0x523213 ? (_0x20e509.textContent = _0x523213, _0x20e509.style.display = "block", _0xad655a.style.borderColor = "#ef4444", _0xad655a.style.backgroundColor = "#fef2f2") : (_0x20e509.style.display = "none", _0xad655a.style.borderColor = "", _0xad655a.style.backgroundColor = "");
      return !_0x523213;
    };
    _0xad655a.oninput = () => {
      let _0x48221c = _0xad655a.value;
      "date" === _0x5cc029 && _0x48221c && (_0x48221c.includes("T") || _0x48221c.includes(" ")) && (_0x48221c = _0x48221c.split(/[T\s]/)[0], _0xad655a.value = _0x48221c);
      _0x35918a();
      _0x2534bd(_0x48221c);
    };
    _0xad655a.onblur = () => {
      _0x35918a();
    };
    (_0x3f905b.validateIdNumber || _0x3f905b.validateMobile) && _0x35918a();
    const _0x46c812 = function (_0x40de55, _0x6e214e) {
      const _0x17e51d = _0x37ba9f("div");
      _0x17e51d.appendChild(_0x37ba9f("label", {
        text: _0x40de55
      }));
      _0x17e51d.appendChild(_0x6e214e);
      return _0x17e51d;
    }(_0x446be3, _0xad655a);
    (_0x3f905b.validateIdNumber || _0x3f905b.validateMobile) && _0x46c812.appendChild(_0x20e509);
    return _0x46c812;
  }
  function _0x66e073(_0xfa1d1, _0xf9dd08) {
    const _0xf6f8be = _0x37ba9f("button", {
      class: "btn",
      text: _0xfa1d1
    });
    _0xf6f8be.onclick = _0xf9dd08;
    return _0xf6f8be;
  }
  function _0x346d2e(_0x49b198) {
    window.__cfg = _0x49b198;
    (function (_0x661d50) {
      const _0x561f1c = document.getElementById("profiles");
      _0x561f1c.innerHTML = "";
      const _0x137e9d = 20;
      let _0xed54c4 = Array.isArray(_0x661d50.profiles) ? _0x661d50.profiles.slice() : [];
      console.log("[Options] 渲染前 profiles 数量:", _0xed54c4.length);
      console.log("[Options] 渲染前 profiles 数据:", _0xed54c4.map(_0x3cba88 => ({
        id: _0x3cba88.id,
        alias: _0x3cba88.alias,
        fullName: _0x3cba88.fullName,
        hasData: !!(_0x3cba88.fullName || _0x3cba88.idNumber || _0x3cba88.mobile)
      })));
      _0xed54c4.length > _0x137e9d && (_0xed54c4 = _0xed54c4.slice(0, _0x137e9d));
      _0x661d50.profiles = _0xed54c4;
      console.log("[Options] 渲染后 profiles 数量:", _0xed54c4.length);
      const _0xccc8a8 = document.getElementById("profileCount");
      _0xccc8a8 && (_0xed54c4.filter(_0x1e40fd => _0x1e40fd.fullName || _0x1e40fd.idNumber || _0x1e40fd.mobile).length, _0xccc8a8.textContent = _0xed54c4.length + "/20 人");
      const _0x39390d = document.getElementById("addProfile");
      _0x39390d && (_0x39390d.style.display = "flex", _0xed54c4.length >= _0x137e9d ? (_0x39390d.disabled = true, _0x39390d.title = "最多只能添加 20 个人员", _0x39390d.style.opacity = "0.5", _0x39390d.style.cursor = "not-allowed") : (_0x39390d.disabled = false, _0x39390d.title = "添加抢单人员", _0x39390d.style.opacity = "1", _0x39390d.style.cursor = "pointer"), _0x39390d.onclick = () => {
        if (_0x661d50.profiles.length >= _0x137e9d) {
          return void alert("最多只能添加 20 个人员");
        }
        const _0x5d1d68 = "p_" + Math.random().toString(36).slice(2, 8);
        _0x661d50.profiles.push({
          id: _0x5d1d68,
          fullName: ""
        });
        _0x346d2e(_0x661d50);
      });
      _0xed54c4.forEach((_0x20df0f, _0x4e7c8a) => {
        const _0x367865 = _0x37ba9f("div", {
          class: "card profile-card"
        });
        const _0x56cb64 = _0x37ba9f("div", {
          class: "profile-name",
          style: "cursor: pointer;"
        });
        const _0x8ad311 = _0x20df0f.alias || _0x20df0f.fullName || _0x20df0f.id || "人员 " + (_0x4e7c8a + 1);
        _0x56cb64.textContent = _0x8ad311;
        _0x56cb64.title = "点击填充 \"" + _0x8ad311 + "\" 的信息到当前页面表单";
        const _0x1cc55b = async () => {
          try {
            const _0x28a57c = _0x56cb64.textContent;
            _0x56cb64.textContent = "填充中...";
            _0x56cb64.style.color = "#3b82f6";
            const [_0x37ab4f] = await chrome.tabs.query({
              active: true,
              currentWindow: true
            });
            if (!_0x37ab4f || !_0x37ab4f.id) {
              _0x56cb64.textContent = _0x28a57c;
              _0x56cb64.style.color = "";
              return void alert("无法获取当前页面，请确保页面已加载完成。");
            }
            if (!["icbc", "ccb", "boc", "abchina", "bankcomm", "bocom", "psbc", "hxb"].some(_0x552a86 => _0x37ab4f.url && (_0x37ab4f.url.includes(_0x552a86) || _0x37ab4f.url.includes("银行"))) && !_0x37ab4f.url.startsWith("http")) {
              _0x56cb64.textContent = _0x28a57c;
              _0x56cb64.style.color = "";
              return void alert("当前页面不是银行预约页面，请先打开银行预约页面后再点击填充。");
            }
            chrome.tabs.sendMessage(_0x37ab4f.id, {
              type: "JP_FILL",
              payload: {
                profile: _0x20df0f.id,
                bank: null,
                region: "",
                submit: false
              }
            }, _0x2c89eb => {
              if (chrome.runtime.lastError) {
                console.error("填充失败:", chrome.runtime.lastError);
                _0x56cb64.textContent = "✗ 失败";
                _0x56cb64.style.color = "#ef4444";
                setTimeout(() => {
                  _0x56cb64.textContent = _0x28a57c;
                  _0x56cb64.style.color = "";
                }, 2000);
                const _0x2c2af1 = chrome.runtime.lastError.message;
                return void (_0x2c2af1.includes("Could not establish connection") ? alert("无法连接到页面，请确保：\n1. 页面已完全加载\n2. 刷新页面后重试\n3. 当前页面支持自动填充") : alert("填充失败：" + _0x2c2af1));
              }
              if (_0x2c89eb && _0x2c89eb.ok) {
                _0x56cb64.textContent = "✓ 已填充";
                _0x56cb64.style.color = "#10b981";
                setTimeout(() => {
                  {
                    _0x56cb64.textContent = _0x28a57c;
                    _0x56cb64.style.color = "";
                  }
                }, 2000);
              } else {
                const _0x4feb64 = _0x2c89eb?.["error"] || "填充失败，请检查页面表单";
                _0x56cb64.textContent = "✗ 失败";
                _0x56cb64.style.color = "#ef4444";
                setTimeout(() => {
                  _0x56cb64.textContent = _0x28a57c;
                  _0x56cb64.style.color = "";
                }, 2000);
                alert("填充失败：" + _0x4feb64);
              }
            });
          } catch (_0x374d8b) {
            console.error("填充错误:", _0x374d8b);
            const _0x5bb79e = _0x56cb64.textContent;
            _0x56cb64.textContent = "✗ 错误";
            _0x56cb64.style.color = "#ef4444";
            setTimeout(() => {
              _0x56cb64.textContent = _0x5bb79e;
              _0x56cb64.style.color = "";
            }, 2000);
            alert("填充失败：" + _0x374d8b.message);
          }
        };
        _0x20df0f.fullName || _0x20df0f.idNumber || _0x20df0f.mobile ? _0x56cb64.onclick = _0x1cc55b : (_0x56cb64.textContent = "人员 " + (_0x4e7c8a + 1), _0x56cb64.style.opacity = "0.6", _0x56cb64.style.cursor = "default", _0x56cb64.title = "请先填写人员信息", _0x56cb64.onclick = null);
        _0x367865.appendChild(_0x56cb64);
        const _0x2ce37d = _0x37ba9f("div", {
          class: "profile-details"
        });
        _0x2ce37d.appendChild(_0x37ba9f("div", {
          class: "profile-form-grid"
        }, [_0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("别名/备注", _0x20df0f.alias || "", _0x17d590 => {
          _0x20df0f.alias = _0x17d590;
          const _0x1c7660 = _0x17d590 || _0x20df0f.fullName || "人员 " + (_0x4e7c8a + 1);
          _0x56cb64.textContent = _0x1c7660;
          const _0x3d4115 = _0x17d590 || _0x20df0f.fullName || _0x20df0f.idNumber || _0x20df0f.mobile;
          _0x56cb64.style.opacity = _0x3d4115 ? "1" : "0.6";
          _0x56cb64.style.cursor = _0x3d4115 ? "pointer" : "default";
          _0x56cb64.title = _0x3d4115 ? "点击填充 \"" + _0x1c7660 + "\" 的信息到当前页面表单" : "请先填写人员信息";
          _0x56cb64.onclick = _0x3d4115 ? _0x1cc55b : null;
          const _0x3b5b72 = document.getElementById("profileCount");
          if (_0x3b5b72) {
            const _0x4a86f2 = _0x661d50.profiles.filter(_0x3e279b => _0x3e279b.fullName || _0x3e279b.idNumber || _0x3e279b.mobile).length;
            _0x3b5b72.textContent = _0x4a86f2 + "/20 人";
          }
        })]), _0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("姓名", _0x20df0f.fullName || "", _0x47da80 => {
          if (_0x20df0f.fullName = _0x47da80, !_0x20df0f.alias) {
            _0x56cb64.textContent = _0x47da80 || "人员 " + (_0x4e7c8a + 1);
            const _0x43034a = _0x47da80 || _0x20df0f.idNumber || _0x20df0f.mobile;
            _0x56cb64.style.opacity = _0x43034a ? "1" : "0.6";
            _0x56cb64.style.cursor = _0x43034a ? "pointer" : "default";
            _0x56cb64.title = _0x43034a ? "点击填充 \"" + (_0x47da80 || "人员 " + (_0x4e7c8a + 1)) + "\" 的信息到当前页面表单" : "请先填写人员信息";
            _0x56cb64.onclick = _0x43034a ? _0x1cc55b : null;
          }
          const _0x171d06 = document.getElementById("profileCount");
          if (_0x171d06) {
            const _0x7bf5bc = _0x661d50.profiles.filter(_0x35c567 => _0x35c567.fullName || _0x35c567.idNumber || _0x35c567.mobile).length;
            _0x171d06.textContent = _0x7bf5bc + "/20 人";
          }
        })]), _0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("证件号", _0x20df0f.idNumber || "", _0x5a5613 => {
          {
            _0x20df0f.idNumber = _0x5a5613;
            const _0xb6dfe6 = _0x20df0f.fullName || _0x5a5613 || _0x20df0f.mobile;
            _0x56cb64.style.opacity = _0xb6dfe6 ? "1" : "0.6";
            _0x56cb64.style.cursor = _0xb6dfe6 ? "pointer" : "default";
            _0x56cb64.onclick = _0xb6dfe6 ? _0x1cc55b : null;
            const _0x567fe8 = document.getElementById("profileCount");
            if (_0x567fe8) {
              const _0x401959 = _0x661d50.profiles.filter(_0x4b67a4 => _0x4b67a4.fullName || _0x4b67a4.idNumber || _0x4b67a4.mobile).length;
              _0x567fe8.textContent = _0x401959 + "/20 人";
            }
          }
        }, "text", {
          validateIdNumber: true
        })]), _0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("手机号", _0x20df0f.mobile || "", _0x595ce8 => {
          _0x20df0f.mobile = _0x595ce8;
          const _0x380873 = _0x20df0f.fullName || _0x20df0f.idNumber || _0x595ce8;
          _0x56cb64.style.opacity = _0x380873 ? "1" : "0.6";
          _0x56cb64.style.cursor = _0x380873 ? "pointer" : "default";
          _0x56cb64.onclick = _0x380873 ? _0x1cc55b : null;
          const _0x7c497 = document.getElementById("profileCount");
          if (_0x7c497) {
            const _0x3165f2 = _0x661d50.profiles.filter(_0x5b94cc => _0x5b94cc.fullName || _0x5b94cc.idNumber || _0x5b94cc.mobile).length;
            _0x7c497.textContent = _0x3165f2 + "/20 人";
          }
        }, "text", {
          validateMobile: true
        })]), _0x37ba9f("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0x37ba9f("div", {
          class: "section-title",
          text: "兑换地区"
        })]), _0x37ba9f("div", {
          class: "form-row form-row-3"
        }, [_0x5f4ba3("省", _0x20df0f.province || "", _0x4bb09c => _0x20df0f.province = _0x4bb09c)]), _0x37ba9f("div", {
          class: "form-row form-row-3"
        }, [_0x5f4ba3("市", _0x20df0f.city || "", _0x41eb98 => _0x20df0f.city = _0x41eb98)]), _0x37ba9f("div", {
          class: "form-row form-row-3"
        }, [_0x5f4ba3("区/县", _0x20df0f.district || "", _0x5061e1 => _0x20df0f.district = _0x5061e1)]), _0x37ba9f("div", {
          class: "form-row form-row-full"
        }, [_0x5f4ba3("详细地址", _0x20df0f.address || "", _0x59221b => _0x20df0f.address = _0x59221b)]), _0x37ba9f("div", {
          class: "form-row form-row-full form-section-title"
        }, [_0x37ba9f("div", {
          class: "section-title",
          text: "兑换信息"
        })]), _0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("兑换日期", _0x20df0f.exchangeDate || "", _0x1d47e0 => _0x20df0f.exchangeDate = _0x1d47e0, "date")]), _0x37ba9f("div", {
          class: "form-row form-row-2"
        }, [_0x5f4ba3("兑换数量", _0x20df0f.exchangeQuantity || "", _0x5918d6 => _0x20df0f.exchangeQuantity = _0x5918d6, "number")])]));
        _0x367865.appendChild(_0x2ce37d);
        const _0x1e8ea9 = _0x37ba9f("div", {
          class: "profile-actions"
        }, [_0x66e073("清空", () => {
          Object.assign(_0x20df0f, {
            id: _0x20df0f.id,
            fullName: "",
            alias: "",
            idNumber: "",
            mobile: "",
            province: "",
            city: "",
            district: "",
            address: "",
            exchangeDate: "",
            exchangeQuantity: ""
          });
          _0x346d2e(_0x661d50);
        }), _0x66e073("删除", () => {
          _0x661d50.profiles.splice(_0x4e7c8a, 1);
          _0x346d2e(_0x661d50);
        })]);
        _0x367865.appendChild(_0x1e8ea9);
        _0x561f1c.appendChild(_0x367865);
      });
    })(_0x49b198);
  }
  !async function () {
    const _0x4c9302 = await _0x460061();
    console.log("[Options] 初始化，加载配置:", _0x4c9302);
    _0x4c9302.profiles || (_0x4c9302.profiles = []);
    Array.isArray(_0x4c9302.profiles) || (console.warn("[Options] profiles 不是数组，重置为空数组"), _0x4c9302.profiles = []);
    console.log("[Options] 初始化后 profiles 数量:", _0x4c9302.profiles.length);
    _0x346d2e(_0x4c9302);
    document.getElementById("save").onclick = async () => {
      const _0x386391 = window.__cfg;
      console.log("[Options] 保存前 profiles:", _0x386391.profiles);
      const _0xd1d8 = new Set();
      const _0x220ca9 = [];
      const _0xed6a89 = _0x105abe => (_0x105abe || "").toString().replace(/\s+/g, "").toLowerCase();
      (_0x386391.profiles || []).forEach(_0x1c958c => {
        if (_0x1c958c.fullName || _0x1c958c.idNumber || _0x1c958c.mobile || _0x1c958c.alias || _0x1c958c.address || _0x1c958c.province || _0x1c958c.city || _0x1c958c.district || _0x1c958c.exchangeDate || _0x1c958c.exchangeQuantity) {
          const _0x142440 = _0xed6a89(_0x1c958c.fullName) + "|" + _0xed6a89(_0x1c958c.idNumber);
          _0xd1d8.has(_0x142440) && "|" !== _0x142440 || (_0xd1d8.add(_0x142440), _0x220ca9.push(_0x1c958c));
        } else {
          const _0x4abe57 = "empty_" + _0x1c958c.id;
          _0xd1d8.has(_0x4abe57) || (_0xd1d8.add(_0x4abe57), _0x220ca9.push(_0x1c958c));
        }
      });
      _0x220ca9.length > 20 ? _0x386391.profiles = _0x220ca9.slice(0, 20) : _0x386391.profiles = _0x220ca9;
      console.log("[Options] 保存后 profiles:", _0x386391.profiles);
      await _0x15348f(_0x386391);
      alert("已保存");
      const _0x17f2a2 = await _0x460061();
      console.log("[Options] 重新加载后 profiles:", _0x17f2a2.profiles);
      _0x346d2e(_0x17f2a2);
    };
    document.getElementById("export").onclick = () => {
      const _0x30e61a = JSON.parse(JSON.stringify(window.__cfg));
      const _0x8796cc = new Blob([JSON.stringify(_0x30e61a, null, 2)], {
        type: "application/json"
      });
      const _0x44807e = URL.createObjectURL(_0x8796cc);
      const _0x5582e1 = document.createElement("a");
      _0x5582e1.href = _0x44807e;
      _0x5582e1.download = "jinpeng-config.json";
      _0x5582e1.click();
      URL.revokeObjectURL(_0x44807e);
    };
    document.getElementById("import").onclick = async () => {
      const _0xadfc11 = document.createElement("input");
      _0xadfc11.type = "file";
      _0xadfc11.accept = "application/json";
      _0xadfc11.onchange = async () => {
        const _0x17acf6 = _0xadfc11.files?.[0];
        if (!_0x17acf6) {
          return;
        }
        const _0x4c67f9 = await _0x17acf6.text();
        try {
          const _0x1c794f = JSON.parse(_0x4c67f9);
          const _0x517131 = 20;
          _0x1c794f.profiles && _0x1c794f.profiles.length > _0x517131 && (_0x1c794f.profiles = _0x1c794f.profiles.slice(0, _0x517131), alert("导入成功，但只保留了前 " + _0x517131 + " 个人员（最多支持 " + _0x517131 + " 人）"));
          await _0x15348f(_0x1c794f);
          _0x346d2e(await _0x460061());
          (!_0x1c794f.profiles || _0x1c794f.profiles.length <= _0x517131) && alert("导入成功");
        } catch (_0x2198a3) {
          alert("导入失败：" + _0x2198a3.message);
        }
      };
      _0xadfc11.click();
    };
    const _0x33d228 = document.getElementById("versionBadge");
    if (_0x33d228) {
      try {
        {
          const _0x132504 = chrome.runtime.getManifest().version || "0.1.0";
          _0x33d228.textContent = "v" + _0x132504;
        }
      } catch (_0x1122f7) {
        console.error("获取版本号失败:", _0x1122f7);
        _0x33d228.textContent = "v0.1.0";
      }
    }
  }();
})();