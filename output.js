//Tue Dec 02 2025 09:32:23 GMT+0000 (Coordinated Universal Time)
//
//
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) {
    return;
  }
  for (const x of document.querySelectorAll("link[rel=\"modulepreload\"]")) o(x);
  new MutationObserver(x => {
    for (const W of x) if (W.type === "childList") {
      for (const r of W.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(x) {
    const W = {};
    x.integrity && (W.integrity = x.integrity);
    x.referrerPolicy && (W.referrerPolicy = x.referrerPolicy);
    x.crossOrigin === "use-credentials" ? W.credentials = "include" : x.crossOrigin === "anonymous" ? W.credentials = "omit" : W.credentials = "same-origin";
    return W;
  }
  function o(x) {
    if (x.ep) {
      return;
    }
    x.ep = true;
    const W = t(x);
    fetch(x.href, W);
  }
})();
function R() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (t) {
    var x = t[0].url.includes("channels.weixin.qq.com/platform/post/list");
    var W = document.querySelector("#urlStatus span");
    x ? (W.textContent = "已在视频管理页面", W.style.color = "#07c160") : (W.textContent = "未在视频管理页面", W.style.color = "#ED3554");
  });
}
function g() {
  chrome.storage.sync.get(["flowRate"], function (t) {
    document.getElementById("flowRate").checked = t.flowRate || false;
  });
}
function y() {
  chrome.storage.local.get(["updateAvailable", "newVersion", "updateUrl", "releaseNotes"], t => {
    if (t.updateAvailable) {
      let x = document.getElementById("updateNotice");
      let W = document.getElementById("updateLink");
      let r = document.getElementById("releaseNotes");
      x.style.display = "block";
      W.href = t.updateUrl;
      r.textContent = t.releaseNotes;
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup loaded");
  R();
  g();
  y();
  let t = document.getElementById("flowRate");
  chrome.storage.sync.get(["monitoringEnabled"], function (i) {
    t.checked = i.monitoringEnabled || false;
  });
  t.addEventListener("change", i => {
    let s = i.target.checked;
    chrome.storage.sync.set({
      monitoringEnabled: s
    });
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (l) {
      chrome.tabs.sendMessage(l[0].id, {
        type: "TOGGLE_FLOW_RATE",
        enabled: s
      });
    });
  });
  let o = document.getElementById("hideShortVideo");
  chrome.storage.sync.get(["hideShortVideo"], function (i) {
    o.checked = i.hideShortVideo || false;
  });
  o.addEventListener("change", i => {
    let s = i.target.checked;
    chrome.storage.sync.set({
      hideShortVideo: s
    });
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (l) {
      chrome.tabs.sendMessage(l[0].id, {
        type: "TOGGLE_HIDE_SHORT_VIDEO",
        enabled: s
      });
    });
  });
  let x = document.getElementById("alertSound");
  chrome.storage.sync.get(["alertSoundEnabled"], function (i) {
    x.checked = i.alertSoundEnabled || false;
  });
  x.addEventListener("change", i => {
    let s = i.target.checked;
    chrome.storage.sync.set({
      alertSoundEnabled: s
    });
  });
  const W = document.getElementById("setCookieBtn");
  W && W.addEventListener("click", async () => {
    const n = await b();
    await chrome.scripting.executeScript({
      target: {
        tabId: n.id,
        allFrames: false
      },
      func: () => {
        function s(d) {
          const k = `; ${document.cookie}`.split(`; ${d}=`);
          return k.length === 2 ? k.pop().split(";").shift() : null;
        }
        const l = prompt("注意：请粘贴正确的Cookie，比如以BgAA开头。");
        if (l && l.length > 50) {
          const d = s("sessionid");
          document.cookie = `sessionid_bk=${d}; path=/`;
          document.cookie = `sessionid=${l}; path=/`;
          location.href.startsWith("https://channels.weixin.qq.com/login.html") && location.replace("https://channels.weixin.qq.com");
        }
        document.cookie = "_finder_auth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.channels.weixin.qq.com; path=/";
      }
    });
  });
  const r = document.getElementById("getCookieBtn");
  r && r.addEventListener("click", q);
  const m = document.getElementById("checkAccountStatusBtn");
  m && m.addEventListener("click", async () => {
    const i = await b();
    await chrome.scripting.executeScript({
      target: {
        tabId: i.id,
        allFrames: false
      },
      func: () => {
        function n(l) {
          const u = `; ${document.cookie}`.split(`; ${l}=`);
          return u.length === 2 ? u.pop().split(";").shift() : null;
        }
        const s = n("sessionid");
        document.cookie = `_finder_auth=${s}; domain=.channels.weixin.qq.com; path=/`;
        window.open("https://channels.weixin.qq.com/assistant-support/pages/finder-account-status/finder/index", "_blank");
      }
    });
  });
  const C = document.getElementById("openAppealPageBtn");
  C && C.addEventListener("click", async () => {
    const i = await b();
    await chrome.scripting.executeScript({
      target: {
        tabId: i.id,
        allFrames: false
      },
      func: () => {
        function n(l) {
          const u = `; ${document.cookie}`.split(`; ${l}=`);
          return u.length === 2 ? u.pop().split(";").shift() : null;
        }
        const s = n("sessionid");
        document.cookie = `_finder_auth=${s}; domain=.channels.weixin.qq.com; path=/`;
        window.open("https://channels.weixin.qq.com/pandora/pages/appeal/index#account-detail", "_blank");
      }
    });
  });
});
async function b() {
  return new Promise((t, o) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, W => {
      if (chrome.runtime.lastError) {
        return o(chrome.runtime.lastError);
      }
      if (!W || !W.length) {
        return o(new Error("未找到活动标签页"));
      }
      t(W[0]);
    });
  });
}
function O(e, c) {
  const x = c + "=";
  const W = e.split(";").map(m => m.trim());
  const r = W.find(m => m.startsWith(x));
  return r ? r.slice(x.length) : null;
}
async function q() {
  document.getElementById("cookieStatus");
  try {
    const t = await b();
    const [{
      result: o
    } = {}] = await chrome.scripting.executeScript({
      target: {
        tabId: t.id,
        allFrames: false
      },
      func: () => document.cookie
    });
    if (typeof o !== "string") {
      alert("读取失败：无法获取cookie");
      return;
    }
    const x = O(o, "sessionid");
    x ? (await navigator.clipboard.writeText(x), alert("Cookie已复制到粘贴板。\n注意：分享Cookie给其他人可能导致您账号登录掉线，数据丢失！！！\n\n" + x)) : alert("未找到 sessionid（可能是 HttpOnly 或不同域/子域）");
  } catch (t) {
    alert("读取失败：" + (t.message || t));
  }
}