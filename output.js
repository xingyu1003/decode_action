//Sat Dec 06 2025 14:39:24 GMT+0000 (Coordinated Universal Time)
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
  importScripts("libs/logger.js", "libs/notifier.js", "libs/scheduler.js");
  const _0x5d76dd = "JP_FILL";
  const _0x47a323 = "JP_GET_CONFIG";
  const _0x3c120e = "JP_SET_CONFIG";
  const _0x35231e = "JP_RUN_AT";
  const _0x4cfbf3 = "JP_OPEN_OPTIONS";
  const _0x2a311f = "JP_OCR_RECOGNIZE";
  const _0x987ed2 = "JP_AUTH_VERIFY";
  const _0x4040ad = "JP_AUTH_CHECK";
  const _0x1bb910 = "JP_AUTH_GET";
  const _0x228561 = "JP_AUTH_CLEAR";
  const _0x2c7248 = "http://49.232.220.17:8080";
  const _0x17da65 = 300000;
  const _0x4bc7b2 = 1800000;
  const _0xacf28c = 3;
  let _0x3b9ac8 = {
    lastCheckTime: 0,
    lastCheckResult: null,
    offlineRetries: 0,
    expireWarningSent: false
  };
  const _0x32ce34 = {
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
  async function _0x248115() {
    const {
      jpConfig: _0x57560e
    } = await chrome.storage.local.get(["jpConfig"]);
    return {
      ..._0x32ce34,
      ...(_0x57560e || {})
    };
  }
  async function _0x33e2cd() {
    const {
      jpMachineCode: _0x50b4b4
    } = await chrome.storage.local.get(["jpMachineCode"]);
    if (_0x50b4b4) {
      return _0x50b4b4;
    }
    const _0x3acf67 = new Uint8Array(16);
    crypto.getRandomValues(_0x3acf67);
    const _0x6dc7f9 = Array.from(_0x3acf67, _0x38e208 => _0x38e208.toString(16).padStart(2, "0")).join("").toUpperCase();
    await chrome.storage.local.set({
      jpMachineCode: _0x6dc7f9
    });
    return _0x6dc7f9;
  }
  async function _0x149ace() {
    const {
      jpAuth: _0x139162
    } = await chrome.storage.local.get(["jpAuth"]);
    return _0x139162 || null;
  }
  async function _0x33578a(_0xc512a8) {
    await chrome.storage.local.set({
      jpAuth: _0xc512a8
    });
  }
  async function _0x4c35ab() {
    await chrome.storage.local.remove(["jpAuth"]);
  }
  async function _0x3a1510(_0x1ebe7d, _0x3a9c4b = false) {
    {
      const _0x4b255a = Date.now();
      if (!_0x3a9c4b && _0x3b9ac8.lastCheckTime > 0 && _0x4b255a - _0x3b9ac8.lastCheckTime < _0x17da65 && _0x3b9ac8.lastCheckResult) {
        console.log("[JP Background] 使用认证缓存，距上次检查:", (_0x4b255a - _0x3b9ac8.lastCheckTime) / 1000, "秒");
        return _0x3b9ac8.lastCheckResult;
      }
      const _0x288748 = await _0x33e2cd();
      try {
        const _0x46e7cf = await fetch(_0x2c7248 + "/api/v1/cards/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            cardCode: _0x1ebe7d,
            machineCode: _0x288748
          }),
          timeout: 5000
        });
        if (!_0x46e7cf.ok) {
          throw new Error("服务器响应错误: " + _0x46e7cf.status);
        }
        const _0x275bab = await _0x46e7cf.json();
        if (console.log("[JP Background] 检查绑定响应:", _0x275bab), 200 !== _0x275bab.code) {
          _0x3b9ac8.lastCheckTime = _0x4b255a;
          _0x3b9ac8.lastCheckResult = null;
          _0x3b9ac8.offlineRetries = 0;
          return null;
        }
        if (_0x3b9ac8.lastCheckTime = _0x4b255a, _0x3b9ac8.lastCheckResult = _0x275bab.data, _0x3b9ac8.offlineRetries = 0, _0x275bab.data && _0x275bab.data.expireDate) {
          {
            const _0x48c873 = (new Date(_0x275bab.data.expireDate).getTime() - _0x4b255a) / 86400000;
            _0x48c873 <= 7 && _0x48c873 > 0 && !_0x3b9ac8.expireWarningSent && (chrome.notifications.create({
              type: "basic",
              iconUrl: "public/eagle.svg",
              title: "金鹏鸟助手 - 卡密即将过期",
              message: "您的卡密将在 " + Math.ceil(_0x48c873) + " 天后过期，请及时续费。",
              priority: 2
            }), _0x3b9ac8.expireWarningSent = true);
          }
        }
        return _0x275bab.data;
      } catch (_0x143aac) {
        if (console.error("[JP Background] 检查绑定失败:", _0x143aac), _0x3b9ac8.offlineRetries++, _0x3b9ac8.offlineRetries >= _0xacf28c) {
          throw console.warn("[JP Background] 离线重试次数超限，清除认证缓存"), _0x3b9ac8.lastCheckResult = null, new Error("网络连接失败次数过多，请检查网络后重新认证");
        }
        if (_0x3b9ac8.lastCheckResult && _0x3b9ac8.lastCheckTime > 0 && _0x4b255a - _0x3b9ac8.lastCheckTime < _0x4bc7b2) {
          console.log("[JP Background] 网络错误，使用宽限期内的认证缓存");
          return _0x3b9ac8.lastCheckResult;
        }
        throw _0x143aac;
      }
    }
  }
  async function _0xb72575(_0x3c50a6) {
    const [_0x877e45] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });
    _0x877e45 && _0x877e45.id && (await chrome.tabs.sendMessage(_0x877e45.id, _0x3c50a6).catch(() => {}));
  }
  chrome.runtime.onMessage.addListener((_0x29b05f, _0x24542f, _0x541ed8) => ((async () => {
    switch (_0x29b05f?.["type"]) {
      case _0x47a323:
        _0x541ed8(await _0x248115());
        break;
      case _0x3c120e:
        {
          {
            const _0x400a9a = await async function (_0x23ab65) {
              const _0xf4b464 = {
                ...(await _0x248115()),
                ..._0x23ab65
              };
              await chrome.storage.local.set({
                jpConfig: _0xf4b464
              });
              return _0xf4b464;
            }(_0x29b05f.payload || {});
            _0x541ed8(_0x400a9a);
            break;
          }
        }
      case _0x5d76dd:
        try {
          const _0x4a0264 = await _0x149ace();
          if (!_0x4a0264 || !_0x4a0264.cardCode) {
            _0x541ed8({
              ok: false,
              error: "未认证，请先绑定卡密"
            });
            break;
          }
          const _0x179420 = await _0x3a1510(_0x4a0264.cardCode, true);
          if (!_0x179420 || !_0x179420.valid) {
            {
              await _0x4c35ab();
              _0x541ed8({
                ok: false,
                error: "认证已失效，请重新验证卡密"
              });
              break;
            }
          }
          if (_0x179420.expireDate && new Date(_0x179420.expireDate).getTime() < Date.now()) {
            {
              await _0x4c35ab();
              _0x541ed8({
                ok: false,
                error: "卡密已过期，请重新购买"
              });
              break;
            }
          }
        } catch (_0x73e2af) {
          if (!(_0x3b9ac8.lastCheckResult && _0x3b9ac8.lastCheckTime > 0)) {
            _0x541ed8({
              ok: false,
              error: "认证验证失败：" + _0x73e2af.message
            });
            break;
          }
          {
            {
              const _0xa8ace = Date.now() - _0x3b9ac8.lastCheckTime;
              if (_0xa8ace >= _0x4bc7b2) {
                _0x541ed8({
                  ok: false,
                  error: "无法验证认证状态，请检查网络连接"
                });
                break;
              }
              console.warn("[JP Background] 离线模式执行填表操作，缓存年龄:", _0xa8ace / 1000, "秒");
            }
          }
        }
        await _0xb72575({
          type: _0x5d76dd,
          payload: _0x29b05f.payload
        });
        _0x541ed8({
          ok: true
        });
        break;
      case _0x35231e:
        {
          const {
            when: _0xa30f48,
            payload: _0x378d4d
          } = _0x29b05f.payload || {};
          if (!_0xa30f48) {
            _0x541ed8({
              ok: false,
              error: "missing when"
            });
            break;
          }
          const _0x5e8e35 = new Date(_0xa30f48).getTime();
          const _0x4e63df = Date.now();
          const _0x474917 = Math.max(0, _0x5e8e35 - _0x4e63df);
          Scheduler.setTimeout(async () => {
            await _0xb72575({
              type: _0x5d76dd,
              payload: _0x378d4d
            });
          }, _0x474917);
          _0x541ed8({
            ok: true,
            delayMs: _0x474917
          });
          break;
        }
      case _0x4cfbf3:
        chrome.runtime.openOptionsPage();
        _0x541ed8({
          ok: true
        });
        break;
      case _0x2a311f:
        try {
          const {
            imageBase64: _0x449533
          } = _0x29b05f.payload || {};
          if (!_0x449533) {
            _0x541ed8({
              ok: false,
              error: "missing imageBase64"
            });
            break;
          }
          const _0x3dcd65 = await async function (_0x5eb8d3) {
            try {
              console.log("[JP Background] 开始调用图图识图 OCR API...");
              const _0x16b2fc = {
                username: "168311161",
                password: "Xpf168311161",
                typeid: "3",
                image: _0x5eb8d3
              };
              const _0x4cec19 = await fetch("http://api.ttshitu.com/predict", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(_0x16b2fc)
              });
              if (!_0x4cec19.ok) {
                throw new Error("图图识图 OCR API响应错误: " + _0x4cec19.status + " " + _0x4cec19.statusText);
              }
              const _0x5e87bb = await _0x4cec19.json();
              if (console.log("[JP Background] 图图识图 OCR API响应:", _0x5e87bb), !_0x5e87bb.success) {
                const _0x382b58 = _0x5e87bb.message || "图图识图 OCR API返回失败";
                throw new Error(_0x382b58);
              }
              let _0x38bb16 = null;
              if (!_0x5e87bb.data || !_0x5e87bb.data.result) {
                throw new Error("图图识图 OCR API返回格式异常: data字段格式不正确 - " + JSON.stringify(_0x5e87bb.data));
              }
              if (_0x38bb16 = _0x5e87bb.data.result, !_0x38bb16) {
                throw new Error("图图识图 OCR API未返回识别结果");
              }
              console.log("[JP Background] 识别到的文字:", _0x38bb16);
              return _0x38bb16;
            } catch (_0x2b0a9a) {
              throw console.error("[JP Background] 调用图图识图 OCR API失败:", _0x2b0a9a), _0x2b0a9a;
            }
          }(_0x449533);
          _0x541ed8({
            ok: true,
            text: _0x3dcd65
          });
        } catch (_0x39e185) {
          _0x541ed8({
            ok: false,
            error: _0x39e185.message || "OCR识别失败"
          });
        }
        break;
      case _0x987ed2:
        try {
          const {
            cardCode: _0x1096a5
          } = _0x29b05f.payload || {};
          if (!_0x1096a5) {
            {
              _0x541ed8({
                ok: false,
                error: "请输入卡密"
              });
              break;
            }
          }
          const _0x23b419 = await async function (_0x8d02ea) {
            const _0x441914 = await _0x33e2cd();
            const _0x1bc8be = await fetch(_0x2c7248 + "/api/v1/cards/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                cardCode: _0x8d02ea,
                machineCode: _0x441914
              })
            });
            if (!_0x1bc8be.ok) {
              throw new Error("服务器响应错误: " + _0x1bc8be.status);
            }
            const _0x36dc0f = await _0x1bc8be.json();
            if (console.log("[JP Background] 卡密验证响应:", _0x36dc0f), 200 !== _0x36dc0f.code) {
              throw new Error(_0x36dc0f.msg || "验证失败");
            }
            return _0x36dc0f.data;
          }(_0x1096a5);
          if (_0x23b419.valid) {
            const _0x3af85e = {
              cardCode: _0x1096a5,
              expireDate: _0x23b419.expireDate,
              verifyTime: new Date().toISOString()
            };
            await _0x33578a(_0x3af85e);
            _0x541ed8({
              ok: true,
              data: _0x3af85e
            });
          } else {
            _0x541ed8({
              ok: false,
              error: _0x23b419.message || "验证失败"
            });
          }
        } catch (_0x4e1bab) {
          _0x541ed8({
            ok: false,
            error: _0x4e1bab.message || "验证失败"
          });
        }
        break;
      case _0x4040ad:
        try {
          const _0x57b2a7 = await _0x149ace();
          if (!_0x57b2a7 || !_0x57b2a7.cardCode) {
            _0x541ed8({
              ok: false,
              error: "未认证"
            });
            break;
          }
          const _0x2230fc = _0x29b05f.payload?.["forceCheck"] || false;
          const _0x52a7da = await _0x3a1510(_0x57b2a7.cardCode, _0x2230fc);
          if (_0x52a7da && _0x52a7da.valid) {
            if (_0x52a7da.expireDate && new Date(_0x52a7da.expireDate).getTime() < Date.now()) {
              await _0x4c35ab();
              _0x3b9ac8 = {
                lastCheckTime: 0,
                lastCheckResult: null,
                offlineRetries: 0,
                expireWarningSent: false
              };
              _0x541ed8({
                ok: false,
                error: "卡密已过期，请重新购买"
              });
              break;
            }
            _0x57b2a7.lastVerifyTime = new Date().toISOString();
            await _0x33578a(_0x57b2a7);
            _0x541ed8({
              ok: true,
              data: _0x57b2a7,
              fromCache: !_0x2230fc && null !== _0x3b9ac8.lastCheckResult,
              cacheAge: _0x2230fc ? 0 : (Date.now() - _0x3b9ac8.lastCheckTime) / 1000
            });
          } else {
            await _0x4c35ab();
            _0x3b9ac8 = {
              lastCheckTime: 0,
              lastCheckResult: null,
              offlineRetries: 0,
              expireWarningSent: false
            };
            _0x541ed8({
              ok: false,
              error: "认证已失效，请重新验证"
            });
          }
        } catch (_0x2eace6) {
          const _0x407367 = await _0x149ace();
          if (_0x407367 && _0x407367.cardCode && _0x3b9ac8.lastCheckResult) {
            const _0x8ea17c = Date.now() - _0x3b9ac8.lastCheckTime;
            if (_0x8ea17c < _0x4bc7b2) {
              _0x541ed8({
                ok: true,
                data: _0x407367,
                offline: true,
                offlineRetries: _0x3b9ac8.offlineRetries,
                maxRetries: _0xacf28c,
                cacheAge: _0x8ea17c / 1000
              });
              break;
            }
          }
          _0x541ed8({
            ok: false,
            error: _0x2eace6.message || "检查认证失败"
          });
        }
        break;
      case _0x1bb910:
        {
          const _0xb188a8 = await _0x149ace();
          _0x541ed8({
            ok: !!_0xb188a8,
            data: _0xb188a8
          });
          break;
        }
      case _0x228561:
        await _0x4c35ab();
        _0x541ed8({
          ok: true
        });
    }
  })(), true));
  chrome.runtime.onInstalled.addListener(async () => {
    const _0x4ff7c3 = await _0x248115();
    Logger.info("金鹏鸟助手已安装/更新", _0x4ff7c3);
    chrome.alarms.create("periodicAuthCheck", {
      periodInMinutes: _0x17da65 / 60000
    });
  });
  chrome.alarms.onAlarm.addListener(async _0x33bbdc => {
    if ("periodicAuthCheck" === _0x33bbdc.name) {
      console.log("[JP Background] 执行定期认证检查...");
      const _0x255c57 = await _0x149ace();
      if (!_0x255c57 || !_0x255c57.cardCode) {
        return void console.log("[JP Background] 未绑定卡密，跳过定期检查");
      }
      try {
        const _0x12b3bd = await _0x3a1510(_0x255c57.cardCode, true);
        _0x12b3bd && _0x12b3bd.valid ? _0x12b3bd.expireDate && (new Date(_0x12b3bd.expireDate).getTime() < Date.now() ? (await _0x4c35ab(), _0x3b9ac8 = {
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
        }), console.warn("[JP Background] 定期检查：卡密已过期")) : console.log("[JP Background] 定期检查：认证有效")) : (await _0x4c35ab(), _0x3b9ac8 = {
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
      } catch (_0x3234f9) {
        console.error("[JP Background] 定期认证检查失败:", _0x3234f9);
      }
    }
  });
})();