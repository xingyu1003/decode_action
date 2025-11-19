//Wed Nov 19 2025 10:05:41 GMT+0000 (Coordinated Universal Time)
//
//
window.addEventListener("message", async function (_0x4dd5ed) {
  _0x4dd5ed.data && _0x4dd5ed.data.source === "goldenCollector" && chrome.runtime.sendMessage({
    type: "collectionData",
    data: _0x4dd5ed.data.data
  });
  if (_0x4dd5ed.data && _0x4dd5ed.data.source === "getPortRequest") {
    try {
      const _0x17bdf9 = await chrome.runtime.sendMessage({
        type: "getPort"
      });
      window.postMessage({
        source: "getPortResponse",
        port: _0x17bdf9.port
      }, "*");
    } catch (_0x2cd6b8) {
      window.postMessage({
        source: "getPortResponse",
        port: null
      }, "*");
    }
  }
  if (_0x4dd5ed.data && _0x4dd5ed.data.source === "savePortRequest") {
    try {
      const _0x332121 = _0x4dd5ed.data.port;
      await chrome.storage.local.set({
        wsPort: _0x332121
      });
    } catch (_0x3be930) {}
  }
  _0x4dd5ed.data && _0x4dd5ed.data.source === "debugLog";
  if (_0x4dd5ed.data && _0x4dd5ed.data.source === "getExportModeRequest") {
    try {
      chrome.storage.local.get(["exportMode"], function (_0x2bf2c9) {
        window.postMessage({
          source: "getExportModeResponse",
          exportMode: _0x2bf2c9.exportMode !== undefined ? _0x2bf2c9.exportMode : true
        }, "*");
      });
    } catch (_0x2dfa30) {
      window.postMessage({
        source: "getExportModeResponse",
        exportMode: true
      }, "*");
    }
  }
});