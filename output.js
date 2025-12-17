//Wed Dec 17 2025 15:45:37 GMT+0000 (Coordinated Universal Time)
//
//
!function () {
  "use strict";
  "undefined" != typeof window && "localhost" !== window.location.hostname && "49.232.220.17" !== window.location.hostname && setTimeout(() => {}, 1000);
}();
(() => {
  console.log = function () {};
  console.warn = function () {};
  console.debug = function () {};
  console.info = function () {};
  importScripts("libs/logger.js", "libs/notifier.js", "libs/scheduler.js");
  const _0x3cb1ef = "JP_FILL";
  const _0x46fd6e = "JP_GET_CONFIG";
  const _0x45fa65 = "JP_SET_CONFIG";
  const _0x489bf2 = "JP_RUN_AT";
  const _0x891bcd = "JP_OPEN_OPTIONS";
  const _0x541a51 = "JP_OCR_RECOGNIZE";
  const _0x50c294 = "JP_AUTH_VERIFY";
  const _0x4a792f = "JP_AUTH_CHECK";
  const _0x5ea64d = "JP_AUTH_GET";
  const _0x4342c2 = "JP_AUTH_CLEAR";
  const _0x54c6b3 = "JP_CARD_EXPIRE_DATE";
  const _0x30f96f = "JP_MULTI_OPEN_CREATE_WINDOW";
  const _0x13739 = "JP_MULTI_OPEN_CLOSE_WINDOW";
  const _0x424195 = "JP_MULTI_OPEN_QUERY_TABS";
  const _0x205912 = "JP_MULTI_OPEN_SEND_MESSAGE";
  const _0x19edb5 = "http://49.232.220.17:8080";
  const _0x40f64e = 300000;
  const _0x56bad9 = 1800000;
  const _0x5d53b5 = 3;
  let _0x131cf0 = {
    lastCheckTime: 0,
    lastCheckResult: null,
    offlineRetries: 0,
    expireWarningSent: false
  };
  const _0x3fd203 = {
    profiles: [],
    defaultProfileId: null,
    profileSelection: {
      mode: "manual",
      rules: []
    },
    bankFieldMap: {},
    schedule: {
      startAt: null,
      ntpOffsetMs: 0,
      prewarmSeconds: 10
    },
    features: {
      autoFill: true,
      autoSubmit: false,
      retryOnFail: true,
      maxRetries: 2
    },
    notifications: {
      sound: true,
      desktop: true
    }
  };
  async function _0x21d9f0() {
    const {
      jpConfig: _0x2895b3
    } = await chrome.storage.local.get(["jpConfig"]);
    return {
      ..._0x3fd203,
      ...(_0x2895b3 || {})
    };
  }
  async function _0x3e1470() {
    const {
      jpMachineCode: _0x5b070f
    } = await chrome.storage.local.get(["jpMachineCode"]);
    if (_0x5b070f) {
      return _0x5b070f;
    }
    const _0x515c58 = new Uint8Array(16);
    crypto.getRandomValues(_0x515c58);
    const _0x51b770 = Array.from(_0x515c58, _0x17a314 => _0x17a314.toString(16).padStart(2, "0")).join("").toUpperCase();
    await chrome.storage.local.set({
      jpMachineCode: _0x51b770
    });
    return _0x51b770;
  }
  async function _0x57d8a6() {
    const {
      jpAuth: _0xcde71a
    } = await chrome.storage.local.get(["jpAuth"]);
    return _0xcde71a || null;
  }
  async function _0x528213(_0x16a9ab) {
    await chrome.storage.local.set({
      jpAuth: _0x16a9ab
    });
  }
  async function _0x43dd0d() {
    await chrome.storage.local.remove(["jpAuth"]);
  }
  async function _0x1361f5(_0x1dfbf1, _0x158e7a = false) {
    const _0x2651be = Date.now();
    if (!_0x158e7a && _0x131cf0.lastCheckTime > 0 && _0x2651be - _0x131cf0.lastCheckTime < _0x40f64e && _0x131cf0.lastCheckResult) {
      console.log("[JP Background] 使用认证缓存，距上次检查:", (_0x2651be - _0x131cf0.lastCheckTime) / 1000, "秒");
      return _0x131cf0.lastCheckResult;
    }
    const _0x2dd88a = await _0x3e1470();
    try {
      const _0x3b9b42 = await fetch(_0x19edb5 + "/api/v1/cards/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cardCode: _0x1dfbf1,
          machineCode: _0x2dd88a
        }),
        timeout: 5000
      });
      if (!_0x3b9b42.ok) {
        throw new Error("服务器响应错误: " + _0x3b9b42.status);
      }
      const _0x4fd140 = await _0x3b9b42.json();
      if (console.log("[JP Background] 检查绑定响应:", _0x4fd140), 200 !== _0x4fd140.code) {
        _0x131cf0.lastCheckTime = _0x2651be;
        _0x131cf0.lastCheckResult = null;
        _0x131cf0.offlineRetries = 0;
        return null;
      }
      if (_0x131cf0.lastCheckTime = _0x2651be, _0x131cf0.lastCheckResult = _0x4fd140.data, _0x131cf0.offlineRetries = 0, _0x4fd140.data && _0x4fd140.data.expireDate) {
        {
          const _0x1c8ce3 = (new Date(_0x4fd140.data.expireDate).getTime() - _0x2651be) / 86400000;
          _0x1c8ce3 <= 7 && _0x1c8ce3 > 0 && !_0x131cf0.expireWarningSent && (chrome.notifications.create({
            type: "basic",
            iconUrl: "public/eagle.svg",
            title: "金鹏鸟助手 - 卡密即将过期",
            message: "您的卡密将在 " + Math.ceil(_0x1c8ce3) + " 天后过期，请及时续费。",
            priority: 2
          }), _0x131cf0.expireWarningSent = true);
        }
      }
      return _0x4fd140.data;
    } catch (_0x3d0e3c) {
      if (console.error("[JP Background] 检查绑定失败:", _0x3d0e3c), _0x131cf0.offlineRetries++, _0x131cf0.offlineRetries >= _0x5d53b5) {
        throw console.warn("[JP Background] 离线重试次数超限，清除认证缓存"), _0x131cf0.lastCheckResult = null, new Error("网络连接失败次数过多，请检查网络后重新认证");
      }
      if (_0x131cf0.lastCheckResult && _0x131cf0.lastCheckTime > 0 && _0x2651be - _0x131cf0.lastCheckTime < _0x56bad9) {
        console.log("[JP Background] 网络错误，使用宽限期内的认证缓存");
        return _0x131cf0.lastCheckResult;
      }
      throw _0x3d0e3c;
    }
  }
  async function _0x329fbd(_0x31abc4) {
    const [_0x1b2cc1] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    _0x1b2cc1 && _0x1b2cc1.id && (await chrome.tabs.sendMessage(_0x1b2cc1.id, _0x31abc4).catch(() => {}));
  }
  chrome.runtime.onMessage.addListener((_0x2aafd1, _0x12ed99, _0x52cbc2) => ((async () => {
    switch (_0x2aafd1?.["type"]) {
      case _0x46fd6e:
        _0x52cbc2(await _0x21d9f0());
        break;
      case _0x45fa65:
        {
          const _0x362e8b = await async function (_0x33b34a) {
            const _0x1017fd = {
              ...(await _0x21d9f0()),
              ..._0x33b34a
            };
            await chrome.storage.local.set({
              jpConfig: _0x1017fd
            });
            return _0x1017fd;
          }(_0x2aafd1.payload || {});
          _0x52cbc2(_0x362e8b);
          break;
        }
      case _0x3cb1ef:
        try {
          const _0x220b4f = await _0x57d8a6();
          if (!_0x220b4f || !_0x220b4f.cardCode) {
            {
              _0x52cbc2({
                ok: false,
                error: "未认证，请先绑定卡密"
              });
              break;
            }
          }
          const _0xe5c6dd = await _0x1361f5(_0x220b4f.cardCode, true);
          if (!_0xe5c6dd || !_0xe5c6dd.valid) {
            await _0x43dd0d();
            _0x52cbc2({
              ok: false,
              error: "认证已失效，请重新验证卡密"
            });
            break;
          }
          if (_0xe5c6dd.expireDate && new Date(_0xe5c6dd.expireDate).getTime() < Date.now()) {
            await _0x43dd0d();
            _0x52cbc2({
              ok: false,
              error: "卡密已过期，请重新购买"
            });
            break;
          }
        } catch (_0x7a5605) {
          {
            if (!(_0x131cf0.lastCheckResult && _0x131cf0.lastCheckTime > 0)) {
              _0x52cbc2({
                ok: false,
                error: "认证验证失败：" + _0x7a5605.message
              });
              break;
            }
            {
              const _0xe6856 = Date.now() - _0x131cf0.lastCheckTime;
              if (_0xe6856 >= _0x56bad9) {
                _0x52cbc2({
                  ok: false,
                  error: "无法验证认证状态，请检查网络连接"
                });
                break;
              }
              console.warn("[JP Background] 离线模式执行填表操作，缓存年龄:", _0xe6856 / 1000, "秒");
            }
          }
        }
        await _0x329fbd({
          type: _0x3cb1ef,
          payload: _0x2aafd1.payload
        });
        _0x52cbc2({
          ok: true
        });
        break;
      case _0x489bf2:
        {
          const {
            when: _0x968ecb,
            payload: _0x1b4dad
          } = _0x2aafd1.payload || {};
          if (!_0x968ecb) {
            _0x52cbc2({
              ok: false,
              error: "missing when"
            });
            break;
          }
          const _0x226d13 = new Date(_0x968ecb).getTime();
          const _0x36e9c9 = Date.now();
          const _0x327517 = Math.max(0, _0x226d13 - _0x36e9c9);
          Scheduler.setTimeout(async () => {
            await _0x329fbd({
              type: _0x3cb1ef,
              payload: _0x1b4dad
            });
          }, _0x327517);
          _0x52cbc2({
            ok: true,
            delayMs: _0x327517
          });
          break;
        }
      case _0x891bcd:
        chrome.runtime.openOptionsPage();
        _0x52cbc2({
          ok: true
        });
        break;
      case _0x541a51:
        try {
          const {
            imageBase64: _0x17243f
          } = _0x2aafd1.payload || {};
          if (!_0x17243f) {
            {
              _0x52cbc2({
                ok: false,
                error: "missing imageBase64"
              });
              break;
            }
          }
          const _0x5e605c = await async function (_0x127d9f) {
            {
              try {
                console.log("[JP Background] 开始调用后端OCR识别接口...");
                const _0x26c27e = await _0x57d8a6();
                if (!_0x26c27e || !_0x26c27e.cardCode) {
                  throw new Error("未认证，请先绑定卡密");
                }
                const _0x396fdc = await _0x3e1470();
                const _0x53f093 = {
                  base64Image: _0x127d9f,
                  cardCode: _0x26c27e.cardCode,
                  machineCode: _0x396fdc
                };
                console.log("[JP Background] 发送OCR识别请求:", {
                  cardCode: _0x26c27e.cardCode,
                  machineCode: _0x396fdc,
                  imageSize: _0x127d9f ? _0x127d9f.length : 0
                });
                const _0x2119ea = await fetch(_0x19edb5 + "/api/v1/captcha/recognize", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(_0x53f093)
                });
                if (!_0x2119ea.ok) {
                  let _0x452e36 = "后端OCR API响应错误: " + _0x2119ea.status + " " + _0x2119ea.statusText;
                  try {
                    {
                      const _0x16d5ce = await _0x2119ea.json();
                      _0x16d5ce.message ? _0x452e36 = _0x16d5ce.message : _0x16d5ce.msg && (_0x452e36 = _0x16d5ce.msg);
                    }
                  } catch (_0x4ab7d0) {
                    const _0x54df06 = await _0x2119ea.text();
                    if (_0x54df06) {
                      try {
                        const _0x34c6cb = JSON.parse(_0x54df06);
                        _0x34c6cb.message ? _0x452e36 = _0x34c6cb.message : _0x34c6cb.msg && (_0x452e36 = _0x34c6cb.msg);
                      } catch (_0x592c3e) {
                        {
                          _0x452e36 = _0x54df06 || _0x452e36;
                        }
                      }
                    }
                  }
                  throw new Error(_0x452e36);
                }
                const _0x5f3437 = await _0x2119ea.json();
                if (console.log("[JP Background] 后端OCR API响应:", _0x5f3437), 200 !== _0x5f3437.code) {
                  const _0xb4d51d = _0x5f3437.message || _0x5f3437.msg || "OCR识别失败";
                  throw new Error(_0xb4d51d);
                }
                const _0x31435b = _0x5f3437.data;
                if (!_0x31435b) {
                  throw new Error("后端OCR API返回格式异常: data字段为空");
                }
                if (!_0x31435b.success) {
                  const _0x1b2ddb = _0x31435b.message || "OCR识别失败";
                  throw new Error(_0x1b2ddb);
                }
                const _0x5855f2 = _0x31435b.result;
                if (!_0x5855f2) {
                  throw new Error("后端OCR API未返回识别结果");
                }
                console.log("[JP Background] 识别到的文字:", _0x5855f2);
                console.log("[JP Background] 剩余使用次数:", _0x31435b.remainingUsage);
                return {
                  text: _0x5855f2,
                  remainingUsage: _0x31435b.remainingUsage
                };
              } catch (_0x536134) {
                throw console.error("[JP Background] 调用后端OCR API失败:", _0x536134), _0x536134;
              }
            }
          }(_0x17243f);
          _0x52cbc2("string" == typeof _0x5e605c ? {
            ok: true,
            text: _0x5e605c
          } : {
            ok: true,
            text: _0x5e605c.text,
            remainingUsage: _0x5e605c.remainingUsage
          });
        } catch (_0x36c59e) {
          _0x52cbc2({
            ok: false,
            error: _0x36c59e.message
          });
        }
        break;
      case _0x50c294:
        try {
          const {
            cardCode: _0x260308
          } = _0x2aafd1.payload || {};
          if (!_0x260308) {
            _0x52cbc2({
              ok: false,
              error: "请输入卡密"
            });
            break;
          }
          const _0x1cac54 = await async function (_0x22260b) {
            const _0x4a2ceb = await _0x3e1470();
            const _0x133e3c = await fetch(_0x19edb5 + "/api/v1/cards/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                cardCode: _0x22260b,
                machineCode: _0x4a2ceb
              })
            });
            if (!_0x133e3c.ok) {
              throw new Error("服务器响应错误: " + _0x133e3c.status);
            }
            const _0x152a7b = await _0x133e3c.json();
            if (console.log("[JP Background] 卡密验证响应:", _0x152a7b), 200 !== _0x152a7b.code) {
              throw new Error(_0x152a7b.msg || "验证失败");
            }
            return _0x152a7b.data;
          }(_0x260308);
          if (_0x1cac54.valid) {
            const _0x605d71 = {
              cardCode: _0x260308,
              expireDate: _0x1cac54.expireDate,
              verifyTime: new Date().toISOString()
            };
            await _0x528213(_0x605d71);
            _0x52cbc2({
              ok: true,
              data: _0x605d71
            });
          } else {
            _0x52cbc2({
              ok: false,
              error: _0x1cac54.message || "验证失败"
            });
          }
        } catch (_0x3f909c) {
          {
            _0x52cbc2({
              ok: false,
              error: _0x3f909c.message || "验证失败"
            });
          }
        }
        break;
      case _0x4a792f:
        try {
          const _0x51864e = await _0x57d8a6();
          if (!_0x51864e || !_0x51864e.cardCode) {
            _0x52cbc2({
              ok: false,
              error: "未认证"
            });
            break;
          }
          const _0x33a95c = _0x2aafd1.payload?.["forceCheck"] || false;
          const _0x15a4d4 = await _0x1361f5(_0x51864e.cardCode, _0x33a95c);
          if (_0x15a4d4 && _0x15a4d4.valid) {
            if (_0x15a4d4.expireDate && new Date(_0x15a4d4.expireDate).getTime() < Date.now()) {
              await _0x43dd0d();
              _0x131cf0 = {
                lastCheckTime: 0,
                lastCheckResult: null,
                offlineRetries: 0,
                expireWarningSent: false
              };
              _0x52cbc2({
                ok: false,
                error: "卡密已过期，请重新购买"
              });
              break;
            }
            _0x51864e.lastVerifyTime = new Date().toISOString();
            await _0x528213(_0x51864e);
            _0x52cbc2({
              ok: true,
              data: _0x51864e,
              fromCache: !_0x33a95c && null !== _0x131cf0.lastCheckResult,
              cacheAge: _0x33a95c ? 0 : (Date.now() - _0x131cf0.lastCheckTime) / 1000
            });
          } else {
            await _0x43dd0d();
            _0x131cf0 = {
              lastCheckTime: 0,
              lastCheckResult: null,
              offlineRetries: 0,
              expireWarningSent: false
            };
            _0x52cbc2({
              ok: false,
              error: "认证已失效，请重新验证"
            });
          }
        } catch (_0x2d4986) {
          const _0x38f82f = await _0x57d8a6();
          if (_0x38f82f && _0x38f82f.cardCode && _0x131cf0.lastCheckResult) {
            const _0xfb4de6 = Date.now() - _0x131cf0.lastCheckTime;
            if (_0xfb4de6 < _0x56bad9) {
              _0x52cbc2({
                ok: true,
                data: _0x38f82f,
                offline: true,
                offlineRetries: _0x131cf0.offlineRetries,
                maxRetries: _0x5d53b5,
                cacheAge: _0xfb4de6 / 1000
              });
              break;
            }
          }
          _0x52cbc2({
            ok: false,
            error: _0x2d4986.message || "检查认证失败"
          });
        }
        break;
      case _0x5ea64d:
        {
          const _0x4b6dad = await _0x57d8a6();
          _0x52cbc2({
            ok: !!_0x4b6dad,
            data: _0x4b6dad
          });
          break;
        }
      case _0x54c6b3:
        try {
          const {
            cardCode: _0x5a0ecd
          } = _0x2aafd1.payload || {};
          if (!_0x5a0ecd) {
            _0x52cbc2({
              ok: false,
              error: "缺少卡密参数"
            });
            break;
          }
          const _0x2f4eb5 = await async function (_0x4cfddf) {
            const _0xcde6f7 = await fetch(_0x19edb5 + "/api/v1/cards/" + encodeURIComponent(_0x4cfddf) + "/expire-date", {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });
            if (!_0xcde6f7.ok) {
              throw new Error("服务器响应错误: " + _0xcde6f7.status);
            }
            const _0x5d475d = await _0xcde6f7.json();
            if (console.log("[JP Background] 卡密有效期响应:", _0x5d475d), 200 !== _0x5d475d.code) {
              throw new Error(_0x5d475d.msg || "查询失败");
            }
            return _0x5d475d.data;
          }(_0x5a0ecd);
          _0x52cbc2({
            ok: true,
            data: _0x2f4eb5
          });
        } catch (_0x1c7226) {
          _0x52cbc2({
            ok: false,
            error: _0x1c7226.message || "查询有效期失败"
          });
        }
        break;
      case _0x4342c2:
        await _0x43dd0d();
        _0x52cbc2({
          ok: true
        });
        break;
      case _0x30f96f:
        {
          const {
            url: _0x2916f1,
            width: _0x51542c,
            height: _0x8f2bbf,
            left: _0x553e01,
            top: _0x490fe1,
            focused: _0x1236a2
          } = _0x2aafd1.payload || {};
          if (!_0x2916f1) {
            _0x52cbc2({
              ok: false,
              error: "缺少URL参数"
            });
            break;
          }
          try {
            const _0x4b3278 = {
              url: _0x2916f1,
              type: "normal",
              width: _0x51542c || 800,
              height: _0x8f2bbf || 600,
              focused: undefined !== _0x1236a2 && _0x1236a2
            };
            undefined !== _0x553e01 && undefined !== _0x490fe1 && (_0x4b3278.left = _0x553e01, _0x4b3278.top = _0x490fe1);
            chrome.windows.create(_0x4b3278, _0x2240a0 => {
              chrome.runtime.lastError ? (console.error("[JP Background] 创建窗口失败:", chrome.runtime.lastError, "URL:", _0x2916f1, "Options:", _0x4b3278), _0x52cbc2({
                ok: false,
                error: chrome.runtime.lastError.message
              })) : _0x2240a0 && _0x2240a0.id ? (console.log("[JP Background] 窗口创建成功:", _0x2240a0.id, "URL:", _0x2916f1.substring(0, 100), "Position:", {
                left: _0x553e01,
                top: _0x490fe1
              }), _0x52cbc2({
                ok: true,
                window: _0x2240a0
              })) : (console.error("[JP Background] 窗口创建返回无效对象:", _0x2240a0, "URL:", _0x2916f1), _0x52cbc2({
                ok: false,
                error: "窗口创建返回无效对象"
              }));
            });
            return true;
          } catch (_0x54065e) {
            console.error("[JP Background] 创建窗口异常:", _0x54065e, "URL:", _0x2916f1);
            _0x52cbc2({
              ok: false,
              error: _0x54065e.message
            });
          }
          break;
        }
      case _0x13739:
        try {
          {
            const {
              windowId: _0x5e5958
            } = _0x2aafd1.payload || {};
            return _0x5e5958 ? (chrome.windows.remove(_0x5e5958, () => {
              chrome.runtime.lastError ? _0x52cbc2({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x52cbc2({
                ok: true
              });
            }), true) : void _0x52cbc2({
              ok: false,
              error: "缺少窗口ID"
            });
          }
        } catch (_0x39f293) {
          _0x52cbc2({
            ok: false,
            error: _0x39f293.message
          });
        }
        break;
      case _0x424195:
        try {
          const {
            windowId: _0x53e840
          } = _0x2aafd1.payload || {};
          return undefined === _0x53e840 ? void _0x52cbc2({
            ok: false,
            error: "缺少窗口ID"
          }) : (chrome.tabs.query({
            windowId: _0x53e840
          }, _0xaf8137 => {
            chrome.runtime.lastError ? _0x52cbc2({
              ok: false,
              error: chrome.runtime.lastError.message
            }) : _0x52cbc2({
              ok: true,
              tabs: _0xaf8137
            });
          }), true);
        } catch (_0xb9769f) {
          _0x52cbc2({
            ok: false,
            error: _0xb9769f.message
          });
        }
        break;
      case _0x205912:
        try {
          {
            const {
              tabId: _0x359de4,
              message: _0x2b08c2
            } = _0x2aafd1.payload || {};
            return undefined !== _0x359de4 && _0x2b08c2 ? (chrome.tabs.sendMessage(_0x359de4, _0x2b08c2, _0x34a8d6 => {
              chrome.runtime.lastError ? _0x52cbc2({
                ok: false,
                error: chrome.runtime.lastError.message
              }) : _0x52cbc2({
                ok: true,
                response: _0x34a8d6
              });
            }), true) : void _0x52cbc2({
              ok: false,
              error: "缺少标签页ID或消息"
            });
          }
        } catch (_0x3695cb) {
          _0x52cbc2({
            ok: false,
            error: _0x3695cb.message
          });
        }
    }
  })(), true));
  chrome.runtime.onInstalled.addListener(async () => {
    {
      const _0x57c52b = await _0x21d9f0();
      Logger.info("金鹏鸟助手已安装/更新", _0x57c52b);
      chrome.alarms.create("periodicAuthCheck", {
        periodInMinutes: _0x40f64e / 60000
      });
    }
  });
  chrome.alarms.onAlarm.addListener(async _0x4aca99 => {
    {
      if ("periodicAuthCheck" === _0x4aca99.name) {
        {
          console.log("[JP Background] 执行定期认证检查...");
          const _0x3f90d8 = await _0x57d8a6();
          if (!_0x3f90d8 || !_0x3f90d8.cardCode) {
            return void console.log("[JP Background] 未绑定卡密，跳过定期检查");
          }
          try {
            const _0x2dc0a5 = await _0x1361f5(_0x3f90d8.cardCode, true);
            _0x2dc0a5 && _0x2dc0a5.valid ? _0x2dc0a5.expireDate && (new Date(_0x2dc0a5.expireDate).getTime() < Date.now() ? (await _0x43dd0d(), _0x131cf0 = {
              lastCheckTime: 0,
              lastCheckResult: null,
              offlineRetries: 0,
              expireWarningSent: false
            }, chrome.notifications.create({
              type: "basic",
              iconUrl: "public/eagle.svg",
              title: "金鹏鸟助手 - 卡密已过期",
              message: "您的卡密已过期，请重新购买。",
              priority: 2
            }), console.warn("[JP Background] 定期检查：卡密已过期")) : console.log("[JP Background] 定期检查：认证有效")) : (await _0x43dd0d(), _0x131cf0 = {
              lastCheckTime: 0,
              lastCheckResult: null,
              offlineRetries: 0,
              expireWarningSent: false
            }, chrome.notifications.create({
              type: "basic",
              iconUrl: "public/eagle.svg",
              title: "金鹏鸟助手 - 认证失效",
              message: "您的卡密认证已失效，请重新验证。",
              priority: 2
            }), console.warn("[JP Background] 定期检查：认证已失效"));
          } catch (_0x316f2d) {
            console.error("[JP Background] 定期认证检查失败:", _0x316f2d);
          }
        }
      }
    }
  });
})();