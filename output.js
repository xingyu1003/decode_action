//Tue Dec 02 2025 09:29:42 GMT+0000 (Coordinated Universal Time)
//
//
chrome.tabs.onUpdated.addListener(function (W, c, e) {
  c.status === "loading" && e.url.includes("https://channels.weixin.qq.com/assistant-support/pages/finder-account-status/") && chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (n) {
    if (n[0]) {
      let u = n[0].id;
      chrome.scripting.executeScript({
        target: {
          tabId: u
        },
        world: "MAIN",
        files: ["src/content-status-page-main.js"]
      });
    }
  });
});
chrome.runtime.onMessage.addListener((W, c, e) => {
  "UPDATE_TAB_TITLE" === W.type && (console.log("UPDATE_TAB_TITLE", W.title), chrome.tabs.update(c.tab.id, {
    title: W.title
  }));
  "DEBUG" === W.type && console.log(W.message);
  "SHOW_NOTIFICATION" === W.type && (c = "notification_" + Date.now(), delete W.notification.flashTitle, chrome.notifications.create(c, W.notification));
});
async function p() {
  try {
    let e = await (await fetch("https://api.xygzt.com/wechat_channels_traffic/checkUpdate")).json();
    let x = chrome.runtime.getManifest().version;
    e.version > x && chrome.storage.local.set({
      updateAvailable: true,
      newVersion: e.version,
      updateUrl: e.downloadUrl,
      releaseNotes: e.releaseNotes
    });
  } catch (e) {
    console.log("Update check failed:", e);
  }
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("checkUpdate", {
    periodInMinutes: 60
  });
});
chrome.alarms.onAlarm.addListener(W => {
  "checkUpdate" === W.name && p();
});
chrome.notifications.onClicked.addListener(W => {
  chrome.tabs.query({
    url: "https://channels.weixin.qq.com/*"
  }, x => {
    0 < x.length && (chrome.tabs.update(x[0].id, {
      active: true
    }), chrome.windows.update(x[0].windowId, {
      focused: true
    }));
  });
  chrome.notifications.clear(W);
});