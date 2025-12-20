//Sat Dec 20 2025 10:00:44 GMT+0000 (Coordinated Universal Time)
//
//
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  cheerio_1 = require("cheerio"),
  CryptoJs = require("crypto-js"),
  he = require("he"),
  pageSize = 20;
function formatMusicItem(_0x5287cc) {
  var _0x239bf2, _0x52ba67, _0x4d45c2, _0xeb54ef, _0x2dcb74, _0x1cb127, _0x223303, _0x23006a, _0x278da4;
  return {
    "id": (_0xeb54ef = _0x5287cc.FileHash) !== null && _0xeb54ef !== undefined ? _0xeb54ef : _0x5287cc.Grp[0].FileHash,
    "title": (_0x239bf2 = _0x5287cc.SongName) !== null && _0x239bf2 !== undefined ? _0x239bf2 : _0x5287cc.OriSongName,
    "artist": (_0x52ba67 = _0x5287cc.SingerName) !== null && _0x52ba67 !== undefined ? _0x52ba67 : _0x5287cc.Singers[0].name,
    "album": (_0x4d45c2 = _0x5287cc.AlbumName) !== null && _0x4d45c2 !== undefined ? _0x4d45c2 : _0x5287cc.Grp[0].AlbumName,
    "album_id": (_0x2dcb74 = _0x5287cc.AlbumID) !== null && _0x2dcb74 !== undefined ? _0x2dcb74 : _0x5287cc.Grp[0].AlbumID,
    "album_audio_id": 0,
    "duration": _0x5287cc.Duration,
    "artwork": ((_0x1cb127 = _0x5287cc.Image) !== null && _0x1cb127 !== undefined ? _0x1cb127 : _0x5287cc.Grp[0].Image).replace("{size}", "1080"),
    "320hash": (_0x278da4 = _0x5287cc.HQFileHash) !== null && _0x278da4 !== undefined ? _0x278da4 : undefined,
    "sqhash": (_0x223303 = _0x5287cc.SQFileHash) !== null && _0x223303 !== undefined ? _0x223303 : undefined,
    "ResFileHash": (_0x23006a = _0x5287cc.ResFileHash) !== null && _0x23006a !== undefined ? _0x23006a : undefined
  };
}
function formatMusicItem2(_0x12f92e) {
  var _0x4c176d, _0x15a450, _0x42d910, _0xc4620, _0x752614, _0x4c4117, _0x19985f;
  return {
    "id": _0x12f92e.hash,
    "title": _0x12f92e.songname,
    "artist": (_0x4c176d = _0x12f92e.singername) !== null && _0x4c176d !== undefined ? _0x4c176d : ((_0x42d910 = (_0x15a450 = _0x12f92e.authors) === null || _0x15a450 === undefined ? undefined : _0x15a450.map(_0x18ed70 => {
      var _0x3c5082;
      return (_0x3c5082 = _0x18ed70 === null || _0x18ed70 === undefined ? undefined : _0x18ed70.author_name) !== null && _0x3c5082 !== undefined ? _0x3c5082 : "";
    })) === null || _0x42d910 === undefined ? undefined : _0x42d910.join(", ")) || ((_0x4c4117 = (_0x752614 = (_0xc4620 = _0x12f92e.filename) === null || _0xc4620 === undefined ? undefined : _0xc4620.split("-")) === null || _0x752614 === undefined ? undefined : _0x752614[0]) === null || _0x4c4117 === undefined ? undefined : _0x4c4117.trim()),
    "album": (_0x19985f = _0x12f92e.album_name) !== null && _0x19985f !== undefined ? _0x19985f : _0x12f92e.remark,
    "album_id": _0x12f92e.album_id,
    "album_audio_id": _0x12f92e.album_audio_id,
    "artwork": _0x12f92e.album_sizable_cover ? _0x12f92e.album_sizable_cover.replace("{size}", "400") : undefined,
    "duration": _0x12f92e.duration,
    "320hash": _0x12f92e["320hash"],
    "sqhash": _0x12f92e.sqhash,
    "origin_hash": _0x12f92e.origin_hash
  };
}
function formatImportMusicItem(_0x166f25) {
  var _0x2127b1, _0x2e9068, _0x6fa829, _0x4ca6b6, _0x1a57f4, _0x35288f, _0x2613f7;
  let _0x36368a = _0x166f25.name;
  const _0x4da1b3 = _0x166f25.singername;
  if (_0x4da1b3 && _0x36368a) {
    const _0x46e415 = _0x36368a.indexOf(_0x4da1b3);
    _0x46e415 !== -1 && (_0x36368a = (_0x2127b1 = _0x36368a.substring(_0x46e415 + _0x4da1b3.length + 2)) === null || _0x2127b1 === undefined ? undefined : _0x2127b1.trim());
    if (!_0x36368a) {
      _0x36368a = _0x4da1b3;
    }
  }
  const _0x2cbdee = _0x166f25.relate_goods;
  return {
    "id": _0x166f25.hash,
    "title": _0x36368a,
    "artist": _0x4da1b3,
    "album": (_0x2e9068 = _0x166f25.albumname) !== null && _0x2e9068 !== undefined ? _0x2e9068 : "",
    "album_id": _0x166f25.album_id,
    "album_audio_id": _0x166f25.album_audio_id,
    "artwork": (_0x4ca6b6 = (_0x6fa829 = _0x166f25 === null || _0x166f25 === undefined ? undefined : _0x166f25.info) === null || _0x6fa829 === undefined ? undefined : _0x6fa829.image) === null || _0x4ca6b6 === undefined ? undefined : _0x4ca6b6.replace("{size}", "400"),
    "320hash": (_0x1a57f4 = _0x2cbdee === null || _0x2cbdee === undefined ? undefined : _0x2cbdee[1]) === null || _0x1a57f4 === undefined ? undefined : _0x1a57f4.hash,
    "sqhash": (_0x35288f = _0x2cbdee === null || _0x2cbdee === undefined ? undefined : _0x2cbdee[2]) === null || _0x35288f === undefined ? undefined : _0x35288f.hash,
    "origin_hash": (_0x2613f7 = _0x2cbdee === null || _0x2cbdee === undefined ? undefined : _0x2cbdee[3]) === null || _0x2613f7 === undefined ? undefined : _0x2613f7.hash
  };
}
const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "zh-CN,zh;q=0.9"
};
async function searchMusic(_0x191af1, _0x4c39f2) {
  const _0x90f0bf = (await axios_1.default.get("https://songsearch.kugou.com/song_search_v2", {
      "headers": headers,
      "params": {
        "keyword": _0x191af1,
        "page": _0x4c39f2,
        "pagesize": pageSize,
        "userid": 0,
        "clientver": "",
        "platform": "WebFilter",
        "filter": 2,
        "iscorrection": 1,
        "privilege_filter": 0,
        "area_code": 1
      }
    })).data,
    _0x3facd7 = _0x90f0bf.data.lists.map(formatMusicItem);
  return {
    "isEnd": _0x4c39f2 * pageSize >= _0x90f0bf.data.total,
    "data": _0x3facd7
  };
}
async function searchAlbum(_0x1ae565, _0x19c941) {
  const _0x16b315 = (await axios_1.default.get("http://msearch.kugou.com/api/v3/search/album", {
      "headers": headers,
      "params": {
        "version": 9108,
        "iscorrection": 1,
        "highlight": "em",
        "plat": 0,
        "keyword": _0x1ae565,
        "pagesize": 20,
        "page": _0x19c941,
        "sver": 2,
        "with_res_tag": 0
      }
    })).data,
    _0x16b43a = _0x16b315.data.info.map(_0x2eba52 => {
      {
        var _0x43023c, _0x53b9b5;
        return {
          "id": _0x2eba52.albumid,
          "artwork": (_0x43023c = _0x2eba52.imgurl) === null || _0x43023c === undefined ? undefined : _0x43023c.replace("{size}", "400"),
          "artist": _0x2eba52.singername,
          "title": (0, cheerio_1.load)(_0x2eba52.albumname).text(),
          "description": _0x2eba52.intro,
          "date": (_0x53b9b5 = _0x2eba52.publishtime) === null || _0x53b9b5 === undefined ? undefined : _0x53b9b5.slice(0, 10)
        };
      }
    });
  return {
    "isEnd": _0x19c941 * 20 >= _0x16b315.data.total,
    "data": _0x16b43a
  };
}
async function searchMusicSheet(_0x215c87, _0x317da9) {
  const _0x4b8530 = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/search/special", {
      "headers": headers,
      "params": {
        "format": "json",
        "keyword": _0x215c87,
        "page": _0x317da9,
        "pagesize": pageSize,
        "showtype": 1
      }
    })).data,
    _0x2ab11e = _0x4b8530.data.info.map(_0x166c2 => ({
      "title": _0x166c2.specialname,
      "createAt": _0x166c2.publishtime,
      "description": _0x166c2.intro,
      "artist": _0x166c2.nickname,
      "coverImg": _0x166c2.imgurl,
      "gid": _0x166c2.gid,
      "playCount": _0x166c2.playcount,
      "id": _0x166c2.specialid,
      "worksNum": _0x166c2.songcount
    }));
  return {
    "isEnd": _0x317da9 * pageSize >= _0x4b8530.data.total,
    "data": _0x2ab11e
  };
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "hires"
};
async function getMediaSource(_0x5cac41, _0x361ddf) {
  const _0x562103 = (await axios_1.default.get("https://music-api2.cenguigui.cn/?kg&id=" + _0x5cac41.id + "&type=song&level=" + qualityLevels[_0x361ddf])).data;
  return {
    "url": _0x562103.data.url
  };
}
async function getTopLists() {
  const _0x2ad9cd = (await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=0&with_res_tag=0", {
      "headers": headers
    })).data.data.info,
    _0x1bb47c = [{
      "title": "热门榜单",
      "data": []
    }, {
      "title": "特色音乐榜",
      "data": []
    }, {
      "title": "全球榜",
      "data": []
    }],
    _0x212af4 = {
      "title": "其他",
      "data": []
    };
  _0x2ad9cd.forEach(_0x13792f => {
    {
      var _0x49e2ca, _0x1d24ac, _0x18d57c, _0x569f39;
      if (_0x13792f.classify === 1 || _0x13792f.classify === 2) _0x1bb47c[0].data.push({
        "id": _0x13792f.rankid,
        "description": _0x13792f.intro,
        "coverImg": (_0x49e2ca = _0x13792f.imgurl) === null || _0x49e2ca === undefined ? undefined : _0x49e2ca.replace("{size}", "400"),
        "title": _0x13792f.rankname
      });else {
        if (_0x13792f.classify === 3 || _0x13792f.classify === 5) _0x1bb47c[1].data.push({
          "id": _0x13792f.rankid,
          "description": _0x13792f.intro,
          "coverImg": (_0x1d24ac = _0x13792f.imgurl) === null || _0x1d24ac === undefined ? undefined : _0x1d24ac.replace("{size}", "400"),
          "title": _0x13792f.rankname
        });else _0x13792f.classify === 4 ? _0x1bb47c[2].data.push({
          "id": _0x13792f.rankid,
          "description": _0x13792f.intro,
          "coverImg": (_0x18d57c = _0x13792f.imgurl) === null || _0x18d57c === undefined ? undefined : _0x18d57c.replace("{size}", "400"),
          "title": _0x13792f.rankname
        }) : _0x212af4.data.push({
          "id": _0x13792f.rankid,
          "description": _0x13792f.intro,
          "coverImg": (_0x569f39 = _0x13792f.imgurl) === null || _0x569f39 === undefined ? undefined : _0x569f39.replace("{size}", "400"),
          "title": _0x13792f.rankname
        });
      }
    }
  });
  _0x212af4.data.length !== 0 && _0x1bb47c.push(_0x212af4);
  return _0x1bb47c;
}
async function getTopListDetail(_0x5efd75) {
  const _0x2eb478 = await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=0&plat=0&pagesize=100&area_code=1&page=1&volid=35050&rankid=" + _0x5efd75.id + "&with_res_tag=0", {
    "headers": headers
  });
  return Object.assign(Object.assign({}, _0x5efd75), {
    "musicList": _0x2eb478.data.data.info.map(formatMusicItem2)
  });
}
async function getLyricDownload(_0x4ad214) {
  const _0x389a61 = (await (0, axios_1.default)({
    "url": "http://lyrics.kugou.com/download?ver=1&client=pc&id=" + _0x4ad214.id + "&accesskey=" + _0x4ad214.accessKey + "&fmt=lrc&charset=utf8",
    "headers": {
      "KG-RC": 1,
      "KG-THash": "expand_search_manager.cpp:852736169:451",
      "User-Agent": "KuGou2012-9020-ExpandSearchManager"
    },
    "method": "get",
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return {
    "rawLrc": he.decode(CryptoJs.enc.Base64.parse(_0x389a61.content).toString(CryptoJs.enc.Utf8))
  };
}
async function getLyric(_0x5421f6) {
  const _0x34d34f = (await (0, axios_1.default)({
      "url": "http://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=" + _0x5421f6.title + "&hash=" + _0x5421f6.id + "&timelength=" + _0x5421f6.duration,
      "headers": {
        "KG-RC": 1,
        "KG-THash": "expand_search_manager.cpp:852736169:451",
        "User-Agent": "KuGou2012-9020-ExpandSearchManager"
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x35845d = _0x34d34f.candidates[0];
  return await getLyricDownload({
    "id": _0x35845d.id,
    "accessKey": _0x35845d.accesskey
  });
}
async function getAlbumInfo(_0xe915d8, _0x48ac21 = 1) {
  const _0x42439f = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/album/song", {
    "params": {
      "version": 9108,
      "albumid": _0xe915d8.id,
      "plat": 0,
      "pagesize": 100,
      "area_code": 1,
      "page": _0x48ac21,
      "with_res_tag": 0
    }
  })).data;
  return {
    "isEnd": _0x48ac21 * 100 >= _0x42439f.data.total,
    "albumItem": {
      "worksNum": _0x42439f.data.total
    },
    "musicList": _0x42439f.data.info.map(_0x2e12d6 => {
      var _0x69fdab;
      const [_0x127dc9, _0x5aa6f3] = _0x2e12d6.filename.split("-");
      return {
        "id": _0x2e12d6.hash,
        "title": _0x5aa6f3.trim(),
        "artist": _0x127dc9.trim(),
        "album": (_0x69fdab = _0x2e12d6.album_name) !== null && _0x69fdab !== undefined ? _0x69fdab : _0x2e12d6.remark,
        "album_id": _0x2e12d6.album_id,
        "album_audio_id": _0x2e12d6.album_audio_id,
        "artwork": _0xe915d8.artwork,
        "320hash": _0x2e12d6.HQFileHash,
        "sqhash": _0x2e12d6.SQFileHash,
        "origin_hash": _0x2e12d6.id
      };
    })
  };
}
async function importMusicSheet(_0x5dfc5b) {
  var _0x410c83;
  let _0x569493 = (_0x410c83 = _0x5dfc5b.match(/^(?:.*?)(\d+)(?:.*?)$/)) === null || _0x410c83 === undefined ? undefined : _0x410c83[1],
    _0x519d6f = [];
  if (!_0x569493) return;
  let _0x3a0b60 = await axios_1.default.post("http://t.kugou.com/command/", {
    "appid": 1001,
    "clientver": 9020,
    "mid": "21511157a05844bd085308bc76ef3343",
    "clienttime": 640612895,
    "key": "36164c4015e704673c588ee202b9ecb8",
    "data": _0x569493
  });
  if (_0x3a0b60.status === 200 && _0x3a0b60.data.status === 1) {
    {
      let _0x429696 = _0x3a0b60.data.data,
        _0x2b66ae = await axios_1.default.post("http://www2.kugou.kugou.com/apps/kucodeAndShare/app/", {
          "appid": 1001,
          "clientver": 10112,
          "mid": "70a02aad1ce4648e7dca77f2afa7b182",
          "clienttime": 722219501,
          "key": "381d7062030e8a5a94cfbe50bfe65433",
          "data": {
            "id": _0x429696.info.id,
            "type": 3,
            "userid": _0x429696.info.userid,
            "collect_type": _0x429696.info.collect_type,
            "page": 1,
            "pagesize": _0x429696.info.count
          }
        });
      if (_0x2b66ae.status === 200 && _0x2b66ae.data.status === 1) {
        {
          let _0x54258e = [];
          _0x2b66ae.data.data.forEach(_0x305575 => {
            _0x54258e.push({
              "album_audio_id": 0,
              "album_id": "0",
              "hash": _0x305575.hash,
              "id": 0,
              "name": _0x305575.filename.replace(".mp3", ""),
              "page_id": 0,
              "type": "audio"
            });
          });
          let _0x1e296e = {
            "appid": 1001,
            "area_code": "1",
            "behavior": "play",
            "clientver": "10112",
            "dfid": "2O3jKa20Gdks0LWojP3ly7ck",
            "mid": "70a02aad1ce4648e7dca77f2afa7b182",
            "need_hash_offset": 1,
            "relate": 1,
            "resource": _0x54258e,
            "token": "",
            "userid": "0",
            "vip": 0
          };
          var _0x3fd232 = await axios_1.default.post("https://gateway.kugou.com/v2/get_res_privilege/lite?appid=1001&clienttime=1668883879&clientver=10112&dfid=2O3jKa20Gdks0LWojP3ly7ck&mid=70a02aad1ce4648e7dca77f2afa7b182&userid=390523108&uuid=92691C6246F86F28B149BAA1FD370DF1", _0x1e296e, {
            "headers": {
              "x-router": "media.store.kugou.com"
            }
          });
          _0x2b66ae.status === 200 && _0x2b66ae.data.status === 1 && (_0x519d6f = _0x3fd232.data.data.map(formatImportMusicItem));
        }
      }
    }
  }
  return _0x519d6f;
}
module.exports = {
  "platform": "酷狗",
  "version": "0.1.0",
  "author": "长安",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "https://codeberg.org/Changan520/Musicfree-CA/raw/branch/main/酷狗音乐.js",
  "cacheControl": "no-cache",
  "description": "",
  "primaryKey": ["id", "album_id", "album_audio_id"],
  "hints": {
    "importMusicSheet": ["仅支持酷狗APP通过酷狗码导入，输入纯数字酷狗码即可。", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music", "album", "sheet"],
  async "search"(_0x3614b8, _0x5c14c7, _0x84ac35) {
    if (_0x84ac35 === "music") {
      return await searchMusic(_0x3614b8, _0x5c14c7);
    } else {
      if (_0x84ac35 === "album") {
        return await searchAlbum(_0x3614b8, _0x5c14c7);
      } else {
        if (_0x84ac35 === "sheet") {
          return await searchMusicSheet(_0x3614b8, _0x5c14c7);
        }
      }
    }
  },
  "getMediaSource": getMediaSource,
  "getTopLists": getTopLists,
  "getLyric": getLyric,
  "getTopListDetail": getTopListDetail,
  "getAlbumInfo": getAlbumInfo,
  "importMusicSheet": importMusicSheet
};