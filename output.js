//Wed Nov 19 2025 09:33:38 GMT+0000 (Coordinated Universal Time)
//
//
let capturedDescData = null;
let capturedPcDetailData = null;
let capturedJDDescData = null;
if (typeof window !== "undefined") {
  try {
    const callbackNames = [];
    for (let i = 1; i <= 20; i++) {
      callbackNames.push("mtopjsonp" + i);
    }
    callbackNames.push("mtopjsonppcdetail", "mtopjsonppcdetail1", "mtopjsonppcdetail2", "mtopjsonppcdetail3");
    callbackNames.forEach(_0x2dfdc1 => {
      Object.defineProperty(window, _0x2dfdc1, {
        configurable: true,
        enumerable: true,
        set: function (_0x37d654) {
          const _0x4b0dd7 = _0x37d654;
          const _0x594c7b = {
            value: _0x4b0dd7,
            writable: true,
            configurable: true
          };
          Object.defineProperty(window, "_original_" + _0x2dfdc1, _0x594c7b);
          Object.defineProperty(window, "_wrapped_" + _0x2dfdc1, {
            value: function (_0x2c6337) {
              try {
                _0x2c6337 && _0x2c6337.api && _0x2c6337.data && (_0x2c6337.api === "mtop.taobao.detail.getdesc" && (capturedDescData = _0x2c6337), _0x2c6337.api === "mtop.taobao.pcdetail.data.get" && (capturedPcDetailData = _0x2c6337));
              } catch (_0x52660f) {}
              if (typeof _0x4b0dd7 === "function") {
                return _0x4b0dd7.apply(this, arguments);
              }
            },
            writable: true,
            configurable: true
          });
          window["_actual_" + _0x2dfdc1] = window["_wrapped_" + _0x2dfdc1];
        },
        get: function () {
          return window["_wrapped_" + _0x2dfdc1] || window["_actual_" + _0x2dfdc1];
        }
      });
    });
  } catch (_0x3d4e81) {}
}
const originalFetch = window.fetch;
window.fetch = function (..._0x47ac08) {
  const _0x210231 = _0x47ac08[0];
  if (typeof _0x210231 === "string" && _0x210231.includes("mtop.taobao.detail.getdesc")) {
    return originalFetch.apply(this, _0x47ac08).then(_0x2a9855 => {
      const _0x8c7da3 = _0x2a9855.clone();
      _0x8c7da3.text().then(_0x5e23a0 => {
        try {
          const _0x17e9f2 = _0x5e23a0.match(/mtopjsonp\d+\(([\s\S]*)\)/);
          if (_0x17e9f2 && _0x17e9f2[1]) {
            const _0x4f0169 = JSON.parse(_0x17e9f2[1]);
            _0x4f0169 && _0x4f0169.data && (capturedDescData = _0x4f0169);
          }
        } catch (_0x5953c3) {}
      });
      return _0x2a9855;
    });
  }
  if (typeof _0x210231 === "string" && _0x210231.includes("description/channel")) {
    return originalFetch.apply(this, _0x47ac08).then(_0x478c2a => {
      const _0x4dd271 = _0x478c2a.clone();
      _0x4dd271.json().then(_0x2736f1 => {
        {
          try {
            _0x2736f1 && _0x2736f1.content && (capturedJDDescData = _0x2736f1);
          } catch (_0x2dffd6) {}
        }
      });
      return _0x478c2a;
    });
  }
  return originalFetch.apply(this, _0x47ac08);
};
const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.open = function (_0x33998d, _0x138617, ..._0xfbf0a4) {
  this._url = _0x138617;
  return originalOpen.apply(this, [_0x33998d, _0x138617, ..._0xfbf0a4]);
};
XMLHttpRequest.prototype.send = function (..._0x46ac88) {
  this._url && this._url.includes("mtop.taobao.detail.getdesc") && this.addEventListener("load", function () {
    try {
      const _0xbc7e36 = this.responseText;
      const _0x19e1be = _0xbc7e36.match(/mtopjsonp\d+\(([\s\S]*)\)/);
      if (_0x19e1be && _0x19e1be[1]) {
        {
          const _0x29aff6 = JSON.parse(_0x19e1be[1]);
          _0x29aff6 && _0x29aff6.data && (capturedDescData = _0x29aff6);
        }
      }
    } catch (_0x10ea59) {}
  });
  this._url && this._url.includes("description/channel") && this.addEventListener("load", function () {
    try {
      {
        const _0x1ca7c4 = JSON.parse(this.responseText);
        _0x1ca7c4 && _0x1ca7c4.content && (capturedJDDescData = _0x1ca7c4);
      }
    } catch (_0x16bed9) {}
  });
  return originalSend.apply(this, _0x46ac88);
};
const originalAppendChild = Node.prototype.appendChild;
Node.prototype.appendChild = function (_0x48944c) {
  return originalAppendChild.call(this, _0x48944c);
};
window.addEventListener("tykfhg#@41", async function (_0xaa2229) {
  try {
    const _0x5c40d6 = await collectData();
    if (_0x5c40d6) {
      const _0x58c7b1 = JSON.parse(JSON.stringify(_0x5c40d6));
      const _0x2f4250 = {
        source: "goldenCollector",
        data: _0x58c7b1
      };
      window.postMessage(_0x2f4250, "*");
    }
  } catch (_0x503730) {
    showToast("采集失败\n" + _0x503730.message, "error", "❌");
  }
});
function getUrlParameter(_0x315e7a) {
  const _0x52aa4d = new URL(window.location.href);
  return _0x52aa4d.searchParams.get(_0x315e7a);
}
function detectPlatform() {
  const _0x5ce5ec = window.location.hostname;
  const _0x40fd89 = window.location.href;
  if (_0x5ce5ec.includes("yangkeduo.com")) {
    return "pinduoduo";
  } else {
    if (_0x5ce5ec.includes("taobao.com") && _0x40fd89.includes("item.htm")) {
      return "taobao";
    } else {
      if ((_0x5ce5ec.includes("tmall.com") || _0x5ce5ec.includes("tmall.hk")) && (_0x40fd89.includes("detail.htm") || _0x40fd89.includes("item.htm"))) {
        return "tmall";
      } else {
        return (_0x5ce5ec.includes("jd.com") || _0x5ce5ec.includes("jd.hk")) && (_0x40fd89.includes("item.jd.com") || _0x40fd89.includes("npcitem.jd.hk")) ? "jingdong" : "unknown";
      }
    }
  }
}
async function collectPinduoduoData() {
  await new Promise(_0x362fcd => setTimeout(_0x362fcd, 1000));
  const _0x1e6cc6 = document.querySelector("#main");
  if (!_0x1e6cc6) {
    {
      throw new Error("无法找到主要内容元素");
    }
  }
  for (const _0x3bd954 of Object.getOwnPropertyNames(_0x1e6cc6)) {
    if (_0x3bd954.startsWith("__reactContainer")) {
      {
        const _0x40610b = _0x1e6cc6[_0x3bd954].child.memoizedProps.children.props.store;
        const _0x5b0c48 = {
          platform: "pinduoduo",
          store: _0x40610b
        };
        return _0x5b0c48;
      }
    }
  }
  throw new Error("无法找到拼多多商品数据");
}
function removeCircularReferences(_0x127725, _0x24f9a2 = new WeakSet()) {
  if (_0x127725 === null || typeof _0x127725 !== "object") {
    {
      return _0x127725;
    }
  }
  if (_0x24f9a2.has(_0x127725)) {
    return undefined;
  }
  _0x24f9a2.add(_0x127725);
  if (Array.isArray(_0x127725)) {
    return _0x127725.map(_0x475c7d => removeCircularReferences(_0x475c7d, _0x24f9a2));
  }
  const _0x1600c7 = {};
  for (const _0x280da0 in _0x127725) {
    if (_0x127725.hasOwnProperty(_0x280da0)) {
      try {
        _0x1600c7[_0x280da0] = removeCircularReferences(_0x127725[_0x280da0], _0x24f9a2);
      } catch (_0x533f4b) {}
    }
  }
  return _0x1600c7;
}
function readJDCookie(_0x205dc8) {
  const _0x419c8f = document.cookie.match(new RegExp("(^| )" + _0x205dc8 + "=([^;]*)(;|$)"));
  return _0x419c8f ? _0x419c8f[2] : null;
}
async function getJDPriceOfficial(_0x20ed7d) {
  const _0x22b647 = Array.isArray(_0x20ed7d) ? _0x20ed7d : [_0x20ed7d];
  const _0x299ad2 = readJDCookie("ipLoc-djd") || "1-72-2799-0";
  const _0x247bee = _0x299ad2.replace(/-/g, "_");
  const _0x1f7f1f = _0x22b647.map(_0x39e229 => "J_" + _0x39e229).join(",");
  const _0x6a0528 = {
    source: "jshop",
    origin: "1",
    finalPrice: 1,
    fSource: 2,
    area: _0x247bee,
    skuids: _0x1f7f1f,
    type: "mgets"
  };
  const _0x3f8f4f = JSON.stringify(_0x6a0528);
  const _0x5890cc = {
    functionId: "mGetsByColor",
    appid: "mall_jd_com",
    clientVersion: "1.0.0",
    client: "wh5",
    body: _0x3f8f4f,
    uuid: readJDCookie("__jdu") || ""
  };
  let _0x117534;
  try {
    if (typeof ParamsSign !== "undefined") {
      const _0x24983c = {
        appId: "1e816",
        debug: false
      };
      _0x117534 = new ParamsSign(_0x24983c);
    } else {
      if (window.PSign) {
        _0x117534 = window.PSign;
      } else {
        throw new Error("No PSign available");
      }
    }
  } catch (_0x536931) {
    throw _0x536931;
  }
  const _0x5c8d21 = {
    functionId: "mGetsByColor",
    appid: "mall_jd_com",
    clientVersion: "1.0.0",
    client: "wh5",
    body: SHA256(_0x3f8f4f).toString()
  };
  try {
    const _0x492e6c = await _0x117534.sign(_0x5c8d21);
    _0x5890cc.h5st = _0x492e6c.h5st;
  } catch (_0x16a38c) {
    console.error("❌ [京东] 签名生成失败:", _0x16a38c.message);
    throw _0x16a38c;
  }
  const _0xe5c76e = await new Promise(_0x479bbc => {
    {
      if (window.getJsToken) {
        window.getJsToken(_0x110272 => _0x479bbc(_0x110272?.["jsToken"] || ""), 600);
      } else {
        {
          _0x479bbc("");
        }
      }
    }
  });
  if (_0xe5c76e) {
    _0x5890cc["x-api-eid-token"] = _0xe5c76e;
  }
  const _0x19ec21 = "https://api.m.jd.com/client.action";
  const _0x17f841 = {
    withCredentials: true
  };
  const _0x18008f = {
    url: _0x19ec21,
    data: _0x5890cc,
    dataType: "json",
    xhrFields: _0x17f841
  };
  return await $.ajax(_0x18008f);
}
function extractJDParams() {
  const _0x45986b = {};
  const _0x1ede6c = document.querySelector(".goods-base");
  if (_0x1ede6c) {
    const _0x568d39 = _0x1ede6c.querySelectorAll(".item");
    _0x568d39.forEach(_0x27116f => {
      {
        try {
          {
            const _0x12d4a0 = _0x27116f.querySelector(".name");
            const _0x29cac9 = _0x27116f.querySelector(".text");
            if (_0x12d4a0 && _0x29cac9) {
              const _0x2faef3 = _0x12d4a0.textContent.trim();
              const _0x2edba5 = _0x29cac9.textContent.trim();
              _0x2faef3 && _0x2edba5 && (_0x45986b[_0x2faef3] = _0x2edba5);
            }
          }
        } catch (_0x2b8a31) {}
      }
    });
    return _0x45986b;
  }
  const _0x2a5535 = document.querySelector(".p-parameter");
  if (_0x2a5535) {
    {
      const _0x28f63c = _0x2a5535.querySelectorAll("li");
      _0x28f63c.forEach(_0x23bbd1 => {
        try {
          const _0x1b7d54 = _0x23bbd1.getAttribute("title");
          let _0x1f4f6f = _0x23bbd1.textContent.trim();
          _0x1f4f6f = _0x1f4f6f.replace(/\s+/g, " ");
          const _0x3b167d = _0x1f4f6f.match(/^([^：:]+)[：:]\s*(.+)$/);
          if (_0x3b167d) {
            {
              let _0xe68eab = _0x3b167d[1].trim();
              let _0x137630 = _0x3b167d[2].trim();
              _0x1b7d54 && _0x1b7d54 !== _0xe68eab && (_0x137630 = _0x1b7d54);
              _0xe68eab && _0x137630 && (_0x45986b[_0xe68eab] = _0x137630);
            }
          }
        } catch (_0x2e117b) {}
      });
      return _0x45986b;
    }
  }
  return _0x45986b;
}
function extractJDSpecImages() {
  const _0xbeb948 = {
    attrType: null,
    images: {}
  };
  const _0x3ca5d2 = document.querySelector("#choose-attr-1");
  if (!_0x3ca5d2) {
    return _0xbeb948;
  }
  _0xbeb948.attrType = _0x3ca5d2.getAttribute("data-type");
  const _0x35de92 = _0x3ca5d2.querySelectorAll(".item");
  _0x35de92.forEach(_0x157f60 => {
    try {
      const _0x27a625 = _0x157f60.getAttribute("data-value");
      const _0x2d8311 = _0x157f60.querySelector("img");
      if (_0x27a625 && _0x2d8311 && !_0xbeb948.images[_0x27a625]) {
        {
          let _0x3a20c4 = _0x2d8311.getAttribute("src");
          _0x3a20c4 && !_0x3a20c4.startsWith("http") && (_0x3a20c4 = "https:" + _0x3a20c4);
          if (_0x3a20c4) {
            {
              _0x3a20c4 = _0x3a20c4.replace("/n9/s28x28_", "/n5/s740x740_");
            }
          }
          _0xbeb948.images[_0x27a625] = _0x3a20c4;
        }
      }
    } catch (_0x4745af) {}
  });
  return _0xbeb948;
}
async function collectJDData() {
  showToast("正在解析京东商品...", "warning", "⏳");
  let _0x555bb2 = 0;
  const _0x451fb3 = 50;
  let _0x11adf3 = null;
  while (_0x555bb2 < _0x451fb3) {
    {
      if (window.pageConfig && window.pageConfig.product) {
        {
          _0x11adf3 = window.pageConfig;
          break;
        }
      }
      await new Promise(_0x1727c2 => setTimeout(_0x1727c2, 100));
      _0x555bb2++;
    }
  }
  if (!_0x11adf3) {
    {
      throw new Error("无法找到京东商品数据");
    }
  }
  const _0x56d6bd = _0x11adf3.product;
  let _0x5eee60 = _0x56d6bd.colorSize || [];
  if (!Array.isArray(_0x5eee60) || _0x5eee60.length === 0) {
    console.log("ℹ️ [京东] 商品没有规格SKU，使用主SKU");
    const _0x246694 = {
      skuId: _0x56d6bd.skuid
    };
    _0x5eee60 = [_0x246694];
  }
  const _0x20be03 = _0x5eee60.map(_0x4df486 => _0x4df486.skuId);
  const _0x4c5918 = extractJDParams();
  const _0x2f663a = extractJDSpecImages();
  _0x20be03.length > 0 && showToast("请等待...", "warning", "💰");
  const _0x438883 = 20;
  const _0x1e424f = 500;
  const _0x542077 = Math.ceil(_0x20be03.length / _0x438883);
  let _0x1df566 = {};
  for (let _0x5b4961 = 0; _0x5b4961 < _0x20be03.length; _0x5b4961 += _0x438883) {
    const _0xac89bf = _0x20be03.slice(_0x5b4961, _0x5b4961 + _0x438883);
    const _0x51c49d = Math.floor(_0x5b4961 / _0x438883) + 1;
    try {
      {
        const _0x2c83d0 = await getJDPriceOfficial(_0xac89bf);
        if (Array.isArray(_0x2c83d0)) {
          _0x2c83d0.forEach(_0x3f3511 => {
            {
              if (_0x3f3511.id) {
                const _0xe31515 = _0x3f3511.id.replace(/^J_/, "");
                _0x1df566[_0xe31515] = _0x3f3511;
              }
            }
          });
        } else {
          _0x2c83d0?.["data"] && Object.entries(_0x2c83d0.data).forEach(([_0x1ba412, _0x52be40]) => {
            const _0x4c989b = _0x1ba412.replace(/^J_/, "");
            _0x1df566[_0x4c989b] = _0x52be40;
          });
        }
      }
    } catch (_0xab2d3) {}
    _0x5b4961 + _0x438883 < _0x20be03.length && (await new Promise(_0x419c4e => setTimeout(_0x419c4e, _0x1e424f)));
  }
  if (!capturedJDDescData) {
    {
      showToast("正在获取商品详情...", "warning", "📝");
      try {
        const _0x58c046 = Array.from(document.querySelectorAll("li[data-tab=\"trigger\"]")).find(_0x169036 => _0x169036.textContent.includes("商品详情"));
        if (_0x58c046) {
          _0x58c046.click();
          await new Promise(_0x40e9e7 => setTimeout(_0x40e9e7, 300));
          const _0x5751e4 = {
            top: document.body.scrollHeight,
            behavior: "smooth"
          };
          window.scrollTo(_0x5751e4);
          await new Promise(_0x54afd2 => setTimeout(_0x54afd2, 500));
          let _0x29633a = 0;
          const _0x11a0cb = 50;
          while (!capturedJDDescData && _0x29633a < _0x11a0cb) {
            {
              await new Promise(_0x3c2022 => setTimeout(_0x3c2022, 100));
              _0x29633a++;
            }
          }
          !capturedJDDescData;
        }
      } catch (_0x109a21) {}
    }
  }
  if (!capturedJDDescData) {
    let _0x5bf8bd = 0;
    const _0x19a082 = 20;
    while (!capturedJDDescData && _0x5bf8bd < _0x19a082) {
      {
        await new Promise(_0x315728 => setTimeout(_0x315728, 100));
        _0x5bf8bd++;
      }
    }
  }
  let _0x4f241e = null;
  try {
    const _0x585c46 = _0x56d6bd.imageAndVideoJson;
    if (_0x585c46 && _0x585c46.mainVideoId) {
      const _0x530126 = _0x585c46.mainVideoId;
      const _0xda743 = Date.now();
      const _0x3a523f = "https://api.m.jd.com/tencent/video_v3?vid=" + _0x530126 + "&type=1&from=1&appid=item-v3&functionId=pc_tencent_video_v3&_=" + _0xda743;
      const _0x32e8af = await fetch(_0x3a523f, {
        credentials: "include"
      });
      const _0x4e9ac7 = await _0x32e8af.json();
      if (_0x4e9ac7 && _0x4e9ac7.playUrl) {
        {
          _0x4f241e = _0x4e9ac7.playUrl;
        }
      } else {
        !(_0x4e9ac7 && _0x4e9ac7.code === "601");
      }
    }
  } catch (_0x434b97) {}
  const _0x408614 = {
    platform: "jingdong",
    colorSize: _0x5eee60,
    product: {
      skuId: _0x56d6bd.skuid,
      mainSkuId: _0x56d6bd.mainSkuId,
      name: _0x56d6bd.name,
      href: _0x56d6bd.href,
      category: {
        ids: _0x56d6bd.cat,
        names: _0x56d6bd.catName
      },
      brand: {
        id: _0x56d6bd.brand,
        name: _0x56d6bd.brandName
      },
      shop: {
        shopId: _0x56d6bd.shopId,
        venderId: _0x56d6bd.venderId,
        isPop: _0x56d6bd.isPop,
        isSelf: _0x56d6bd.isSelf
      },
      status: {
        warestatus: _0x56d6bd.warestatus,
        isPresale: _0x56d6bd.skuMarkJson?.["presale"] || false,
        isGlobalPurchase: _0x56d6bd.skuMarkJson?.["isGlobalPurchase"] || false,
        isSds: _0x56d6bd.skuMarkJson?.["isSds"] || false
      },
      images: {
        main: _0x56d6bd.imageList?.["map"](_0x4a57a4 => _0x4a57a4.startsWith("http") ? _0x4a57a4 : "https://img10.360buyimg.com/n5/s720x720_" + _0x4a57a4) || [],
        mainSrc: _0x56d6bd.src ? _0x56d6bd.src.startsWith("http") ? _0x56d6bd.src : "https://img10.360buyimg.com/n5/s720x720_" + _0x56d6bd.src : null,
        video: _0x56d6bd.imageAndVideoJson || null,
        videoUrl: _0x4f241e || null
      },
      specs: _0x5eee60.map(_0xff581c => {
        const _0xe36f8e = _0x1df566[_0xff581c.skuId];
        let _0x5af164 = null;
        _0x2f663a.attrType && _0xff581c[_0x2f663a.attrType] && (_0x5af164 = _0x2f663a.images[_0xff581c[_0x2f663a.attrType]]);
        return {
          ..._0xff581c,
          price: _0xe36f8e ? {
            ..._0xe36f8e
          } : null,
          previewImage: _0x5af164 || null
        };
      }),
      params: _0x4c5918,
      extra: {
        pType: _0x56d6bd.pType,
        pTag: _0x56d6bd.pTag,
        specialAttrs: _0x56d6bd.specialAttrs || [],
        descUrl: _0x56d6bd.desc,
        modules: _0x56d6bd.modules || []
      }
    },
    description: capturedJDDescData || null,
    collectTime: new Date().toISOString()
  };
  return _0x408614;
}
async function collectTaobaoTmallData() {
  let _0x1bd1e4 = 0;
  const _0x253c58 = 50;
  let _0x29f619 = null;
  while (_0x1bd1e4 < _0x253c58) {
    if (window.__ICE_APP_CONTEXT__ && window.__ICE_APP_CONTEXT__.loaderData) {
      {
        _0x29f619 = window.__ICE_APP_CONTEXT__.loaderData;
        break;
      }
    }
    await new Promise(_0x16f53f => setTimeout(_0x16f53f, 100));
    _0x1bd1e4++;
  }
  if (!_0x29f619) {
    throw new Error("无法找到淘宝/天猫商品数据");
  }
  const _0x5b5d84 = detectPlatform();
  let _0x213b52 = 0;
  const _0x43457e = 30;
  while (!capturedDescData && _0x213b52 < _0x43457e) {
    {
      await new Promise(_0x2bcd4f => setTimeout(_0x2bcd4f, 100));
      _0x213b52++;
    }
  }
  const _0x24c23c = {
    platform: _0x5b5d84,
    home: window.__ICE_APP_CONTEXT__
  };
  capturedDescData && (_0x24c23c.descData = capturedDescData);
  if (capturedPcDetailData) {
    {
      _0x24c23c.pcDetailData = capturedPcDetailData;
    }
  }
  return _0x24c23c;
}
async function collectData() {
  const _0x4f21ec = detectPlatform();
  let _0x5f2dc2;
  let _0x3484fb;
  if (_0x4f21ec === "pinduoduo") {
    _0x5f2dc2 = await collectPinduoduoData();
    _0x3484fb = getUrlParameter("goods_id");
  } else {
    if (_0x4f21ec === "taobao" || _0x4f21ec === "tmall") {
      _0x5f2dc2 = await collectTaobaoTmallData();
      _0x3484fb = getUrlParameter("id");
    } else {
      if (_0x4f21ec === "jingdong") {
        _0x5f2dc2 = await collectJDData();
        const _0xb5d76e = window.location.pathname.match(/\/(\d+)\.html/);
        _0x3484fb = _0xb5d76e ? _0xb5d76e[1] : "unknown";
      } else {
        throw new Error("不支持的平台");
      }
    }
  }
  showToast("商品ID：" + _0x3484fb, "success", "🆔");
  const _0x39b42c = JSON.stringify(_0x5f2dc2);
  try {
    const _0x906230 = JSON.parse(_0x39b42c);
  } catch (_0x463406) {
    const _0x59a092 = {
      source: "debugLog",
      message: "数据包含不可序列化内容，仅显示字符串"
    };
    window.postMessage(_0x59a092, "*");
  }
  const _0x50f407 = await getExportMode();
  if (_0x50f407) {
    {
      try {
        showToast("正在导出文件...", "warning", "📄");
        await exportToFile(_0x39b42c, _0x3484fb);
        showToast("导出成功！", "success", "✅");
      } catch (_0x1d02dc) {
        {
          throw new Error("导出文件失败：" + _0x1d02dc.message);
        }
      }
    }
  } else {
    {
      try {
        showToast("正在连接...", "warning", "🔄");
        await sendDataViaWebSocket(_0x39b42c);
        showToast("采集成功！", "success", "✅");
      } catch (_0x5a15f0) {
        throw new Error("发送数据失败(请检查客户端)：" + _0x5a15f0.message);
      }
    }
  }
  return _0x5f2dc2;
}
const WS_TIMEOUT = 5000;
const DEFAULT_PORT = 12582;
async function getPortFromBackground() {
  return new Promise(_0xfe7fa7 => {
    const _0x1d6f28 = setTimeout(() => {
      _0xfe7fa7(null);
    }, 5000);
    const _0x1a981a = _0x595290 => {
      if (_0x595290.source !== window) {
        return;
      }
      _0x595290.data.source === "getPortResponse" && (clearTimeout(_0x1d6f28), window.removeEventListener("message", _0x1a981a), _0xfe7fa7(_0x595290.data.port));
    };
    window.addEventListener("message", _0x1a981a);
    const _0x575291 = {
      source: "getPortRequest"
    };
    window.postMessage(_0x575291, "*");
  });
}
async function fetchPortFromAPI() {
  try {
    showToast("获取端口中...", "warning", "🔍");
    const _0x4ec1e6 = await getPortFromBackground();
    if (!_0x4ec1e6) {
      {
        showToast("使用默认端口: " + DEFAULT_PORT, "warning", "⚠️");
        return DEFAULT_PORT;
      }
    }
    showToast("端口: " + _0x4ec1e6, "success", "✅");
    const _0x4283f9 = {
      source: "savePortRequest",
      port: _0x4ec1e6
    };
    window.postMessage(_0x4283f9, "*");
    return _0x4ec1e6;
  } catch (_0x1225c6) {
    {
      showToast("获取端口失败，使用默认: " + DEFAULT_PORT, "error", "❌");
      return DEFAULT_PORT;
    }
  }
}
async function getWebSocketURL() {
  try {
    const _0x63728 = await fetchPortFromAPI();
    return "ws://127.0.0.1:" + _0x63728;
  } catch (_0x4e30a0) {
    return "ws://127.0.0.1:" + DEFAULT_PORT;
  }
}
async function sendDataViaWebSocket(_0xc9209a) {
  showToast("正在获取端口...", "warning", "🔌");
  const _0x375cac = await getWebSocketURL();
  const _0x32d3f7 = _0x375cac.match(/:(\d+)/);
  _0x32d3f7 && showToast("使用端口: " + _0x32d3f7[1], "success", "🔌");
  return new Promise((_0x1e6ce3, _0x508675) => {
    const _0x2558e9 = new WebSocket(_0x375cac);
    let _0x5b5c63;
    _0x5b5c63 = setTimeout(() => {
      _0x2558e9.close();
      _0x508675(new Error("连接超时"));
    }, WS_TIMEOUT);
    _0x2558e9.onopen = function () {
      clearTimeout(_0x5b5c63);
      showToast("连接成功！", "success", "✅");
      try {
        showToast("发送中...", "warning", "📤");
        _0x2558e9.send(_0xc9209a);
      } catch (_0x10065b) {
        _0x508675(new Error("发送失败：" + _0x10065b.message));
      }
    };
    _0x2558e9.onmessage = function (_0xe09c35) {
      _0x2558e9.close();
      _0x1e6ce3(_0xe09c35.data);
    };
    _0x2558e9.onclose = function () {
      clearTimeout(_0x5b5c63);
    };
    _0x2558e9.onerror = function (_0xdbad79) {
      clearTimeout(_0x5b5c63);
      _0x508675(new Error("连接失败"));
      throw new Error(_0xdbad79.message);
    };
  });
}
let currentToast = null;
let toastTimeout = null;
async function getExportMode() {
  return new Promise(_0x4f0343 => {
    const _0x20a955 = {
      source: "getExportModeRequest"
    };
    window.postMessage(_0x20a955, "*");
    const _0x3da6af = setTimeout(() => {
      _0x4f0343(true);
    }, 1000);
    const _0x137d57 = _0x523b25 => {
      if (_0x523b25.source !== window) {
        return;
      }
      _0x523b25.data.source === "getExportModeResponse" && (clearTimeout(_0x3da6af), window.removeEventListener("message", _0x137d57), _0x4f0343(_0x523b25.data.exportMode || false));
    };
    window.addEventListener("message", _0x137d57);
  });
}
async function exportToFile(_0x55b9f0, _0x141b44) {
  try {
    const _0x14f687 = {
      type: "text/plain;charset=utf-8"
    };
    const _0xc798a0 = new Blob([_0x55b9f0], _0x14f687);
    const _0x468f1f = URL.createObjectURL(_0xc798a0);
    const _0xa59645 = document.createElement("a");
    _0xa59645.href = _0x468f1f;
    _0xa59645.download = _0x141b44 + ".txt";
    document.body.appendChild(_0xa59645);
    _0xa59645.click();
    setTimeout(() => {
      document.body.removeChild(_0xa59645);
      URL.revokeObjectURL(_0x468f1f);
    }, 100);
  } catch (_0x21187d) {
    throw _0x21187d;
  }
}
function showToast(_0x4fcae9, _0x358fb1 = "success", _0x2ef860 = "✅") {
  currentToast && (currentToast.parentNode && currentToast.parentNode.removeChild(currentToast), toastTimeout && clearTimeout(toastTimeout));
  const _0x2b49f1 = document.createElement("div");
  currentToast = _0x2b49f1;
  let _0x125f08;
  let _0x385ce7;
  let _0x58fb1e;
  switch (_0x358fb1) {
    case "success":
      _0x125f08 = "#ffffff";
      _0x385ce7 = "#10b981";
      _0x58fb1e = "#10b981";
      break;
    case "error":
      _0x125f08 = "#ffffff";
      _0x385ce7 = "#ef4444";
      _0x58fb1e = "#ef4444";
      break;
    case "warning":
      _0x125f08 = "#ffffff";
      _0x385ce7 = "#f59e0b";
      _0x58fb1e = "#f59e0b";
      break;
    default:
      _0x125f08 = "#ffffff";
      _0x385ce7 = "#10b981";
      _0x58fb1e = "#10b981";
  }
  _0x2b49f1.style.cssText = "\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    background: " + _0x125f08 + ";\n    color: #1f2937;\n    padding: 16px 24px;\n    border-radius: 12px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);\n    z-index: 999999;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    min-width: 200px;\n    max-width: 350px;\n    border-left: 3px solid " + _0x385ce7 + ";\n    animation: slideInRight 0.3s ease-out;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  ";
  const _0x3f7adf = document.createElement("span");
  _0x3f7adf.textContent = _0x2ef860;
  _0x3f7adf.style.cssText = "\n    font-size: 24px;\n    color: " + _0x58fb1e + ";\n    flex-shrink: 0;\n  ";
  const _0x8a1aa0 = document.createElement("span");
  _0x8a1aa0.textContent = _0x4fcae9;
  _0x8a1aa0.style.cssText = "\n    font-size: 14px;\n    line-height: 1.5;\n    white-space: pre-line;\n    flex: 1;\n    font-weight: 500;\n  ";
  _0x2b49f1.appendChild(_0x3f7adf);
  _0x2b49f1.appendChild(_0x8a1aa0);
  const _0x4f781c = document.createElement("style");
  _0x4f781c.textContent = "\n    @keyframes slideInRight {\n      from {\n        transform: translateX(400px);\n        opacity: 0;\n      }\n      to {\n        transform: translateX(0);\n        opacity: 1;\n      }\n    }\n    @keyframes slideOutRight {\n      from {\n        transform: translateX(0);\n        opacity: 1;\n      }\n      to {\n        transform: translateX(400px);\n        opacity: 0;\n      }\n    }\n  ";
  document.head.appendChild(_0x4f781c);
  document.body.appendChild(_0x2b49f1);
  toastTimeout = setTimeout(() => {
    _0x2b49f1.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      {
        _0x2b49f1.parentNode && _0x2b49f1.parentNode.removeChild(_0x2b49f1);
        currentToast = null;
      }
    }, 300);
  }, 3000);
}