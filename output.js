//Wed Nov 19 2025 08:40:01 GMT+0000 (Coordinated Universal Time)
//
//
let isLoggedIn = false;
let userToken = null;
chrome.runtime.onStartup.addListener(() => {
  checkLoginStatus();
});
chrome.runtime.onInstalled.addListener(() => {
  checkLoginStatus();
  createContextMenu();
});
async function checkLoginStatus() {
  try {
    {
      const _0x49cf71 = await chrome.storage.local.get(["userToken", "userName"]);
      if (_0x49cf71.userToken) {
        {
          isLoggedIn = true;
          userToken = _0x49cf71.userToken;
        }
      } else {
        isLoggedIn = false;
        userToken = null;
      }
      updateContextMenu();
    }
  } catch (_0x55e31d) {
    isLoggedIn = false;
    updateContextMenu();
  }
}
function createContextMenu() {
  const _0x50354d = {
    id: "collect",
    title: "解析商品",
    contexts: ["all"],
    documentUrlPatterns: ["*://*.yangkeduo.com/*", "*://item.taobao.com/*", "*://detail.tmall.com/*", "*://chaoshi.detail.tmall.com/*", "*://detail.tmall.hk/*", "*://item.jd.com/*", "*://npcitem.jd.hk/*"]
  };
  chrome.contextMenus.create(_0x50354d);
}
function updateContextMenu() {
  if (isLoggedIn) {
    const _0x24c075 = {
      enabled: true,
      title: "解析商品"
    };
    chrome.contextMenus.update("collect", _0x24c075);
  } else {
    chrome.contextMenus.update("collect", {
      enabled: true,
      title: "采集 (点击登录)"
    });
  }
}
chrome.contextMenus.onClicked.addListener(async (_0x2c8b84, _0x5bae25) => {
  if (_0x2c8b84.menuItemId === "collect") {
    await checkLoginStatus();
    if (!isLoggedIn) {
      {
        chrome.action.openPopup();
        return;
      }
    }
    const _0x5ab524 = {
      tabId: _0x5bae25.id
    };
    const _0x15ed67 = {
      target: _0x5ab524,
      files: ["inject-trigger.js"]
    };
    chrome.scripting.executeScript(_0x15ed67);
  }
});
async function handleCollectedData(_0x41f540) {
  try {} catch (_0x18cd5a) {}
}
chrome.commands.onCommand.addListener(async _0x5cc4da => {
  if (_0x5cc4da === "quick-collect") {
    {
      const _0x41e943 = {
        active: true,
        currentWindow: true
      };
      const [_0x584c1a] = await chrome.tabs.query(_0x41e943);
      if (!_0x584c1a) {
        return;
      }
      const _0x3724ab = _0x584c1a.url && _0x584c1a.url.includes("yangkeduo.com/goods");
      const _0x4ff792 = _0x584c1a.url && _0x584c1a.url.includes("item.taobao.com/item.htm");
      const _0x15a99c = _0x584c1a.url && (_0x584c1a.url.includes("detail.tmall.com") || _0x584c1a.url.includes("detail.tmall.hk")) && _0x584c1a.url.includes(".htm");
      const _0x516b80 = _0x584c1a.url && (_0x584c1a.url.includes("item.jd.com") || _0x584c1a.url.includes("npcitem.jd.hk")) && _0x584c1a.url.includes(".html");
      if (!_0x3724ab && !_0x4ff792 && !_0x15a99c && !_0x516b80) {
        {
          const _0x651f80 = {
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "京大师",
            message: "请在拼多多/淘宝/天猫/京东 商品页面使用快捷采集功能"
          };
          chrome.notifications.create(_0x651f80);
          return;
        }
      }
      await checkLoginStatus();
      if (!isLoggedIn) {
        chrome.action.openPopup();
        return;
      }
      const _0x46c887 = {
        tabId: _0x584c1a.id
      };
      const _0x4465da = {
        target: _0x46c887,
        files: ["inject-trigger.js"]
      };
      chrome.scripting.executeScript(_0x4465da);
    }
  }
});
chrome.runtime.onMessage.addListener((_0x519673, _0x19c0b6, _0x3d407f) => {
  switch (_0x519673.type) {
    case "updateLoginStatus":
      checkLoginStatus().then(() => {
        const _0x5823e3 = {
          success: true
        };
        _0x3d407f(_0x5823e3);
      });
      return true;
    case "collectionData":
      handleCollectedData(_0x519673.data);
      break;
    case "checkLoginStatus":
      const _0x322fe4 = {
        isLoggedIn: isLoggedIn,
        token: userToken
      };
      _0x3d407f(_0x322fe4);
      break;
    case "getUserName":
      chrome.storage.local.get(["userName"]).then(_0x3ba5e1 => {
        {
          const _0x22a3ea = {
            userName: _0x3ba5e1.userName
          };
          _0x3d407f(_0x22a3ea);
        }
      }).catch(_0x2657b4 => {
        const _0x41d7cc = {
          userName: null
        };
        _0x3d407f(_0x41d7cc);
      });
      return true;
    case "getPort":
      (async () => {
        try {
          {
            const _0x319c70 = await chrome.storage.local.get(["userToken"]);
            const _0x5b4ce1 = _0x319c70.userToken;
            if (!_0x5b4ce1) {
              const _0x73c484 = {
                port: 12582
              };
              _0x3d407f(_0x73c484);
              return;
            }
            const _0x1f6a8b = await fetch("http://Apisx.tbsmartsoft.com/Base_Manage/Home/GetPort", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + _0x5b4ce1
              }
            });
            const _0x44aca5 = await _0x1f6a8b.json();
            if (_0x44aca5.Success && _0x44aca5.Data) {
              const _0x17cd12 = _0x44aca5.Data;
              const _0x2de0f4 = {
                wsPort: _0x17cd12
              };
              await chrome.storage.local.set(_0x2de0f4);
              const _0x3328c4 = {
                port: _0x17cd12
              };
              _0x3d407f(_0x3328c4);
            } else {
              {
                const _0x24c16c = {
                  port: 12582
                };
                _0x3d407f(_0x24c16c);
              }
            }
          }
        } catch (_0x3bb457) {
          {
            const _0x48390c = {
              port: 12582
            };
            _0x3d407f(_0x48390c);
          }
        }
      })();
      return true;
    default:
      break;
  }
  return true;
});