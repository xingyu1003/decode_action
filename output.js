//Fri Nov 28 2025 13:38:52 GMT+0000 (Coordinated Universal Time)
//
//
var Dress = function (_0x2944a5) {
  function _0x1a0e9a() {
    {
      var _0xc1e7a2 = _0x2944a5.call(this) || this;
      _0xc1e7a2.timeInfo = {};
      _0xc1e7a2.posInfo = [];
      _0xc1e7a2.careerDic = {};
      _0xc1e7a2.itemIdDic = {};
      _0xc1e7a2.hunHuanData = {};
      _0xc1e7a2.otherShenQiData = {};
      _0xc1e7a2.actorArr = [];
      _0xc1e7a2.infoguiminjiangedata = [];
      _0xc1e7a2.minHID = 759;
      _0xc1e7a2.maxHID = 776;
      _0xc1e7a2.sysId = PackageID.Dress;
      _0xc1e7a2.regNetMsg(1, _0xc1e7a2.doDressInfo);
      _0xc1e7a2.regNetMsg(2, _0xc1e7a2.doDressActivationRes);
      _0xc1e7a2.regNetMsg(3, _0xc1e7a2.doDressUserRes);
      _0xc1e7a2.regNetMsg(4, _0xc1e7a2.doUnDressUserRes);
      _0xc1e7a2.regNetMsg(5, _0xc1e7a2.doDressTimeEnd);
      _0xc1e7a2.regNetMsg(6, _0xc1e7a2.postLevelUp);
      _0xc1e7a2.regNetMsg(7, _0xc1e7a2.postAddTime);
      _0xc1e7a2.regNetMsg(8, _0xc1e7a2.otherParser);
      _0xc1e7a2.regNetMsg(9, _0xc1e7a2.postlfquanju);
      return _0xc1e7a2;
    }
  }
  __extends(_0x1a0e9a, _0x2944a5);
  _0x1a0e9a.ins = function () {
    return _0x2944a5.ins.call(this);
  };
  _0x1a0e9a.prototype.getOtherZhuangBanData = function (_0x4e773a, _0x373f85) {
    {
      if (this.otherShenQiData[_0x4e773a]) {
        return _0x373f85(this.otherShenQiData[_0x4e773a]);
      }
      this.otherShenQiData[_0x4e773a] = {};
      this.actorArr.push({
        "call": _0x373f85,
        "actorId": _0x4e773a
      });
      this.sendDressOtherInfoReq(_0x4e773a);
    }
  };
  _0x1a0e9a.prototype.sendDressOtherInfoReq = function (_0x11823e) {
    var _0x33fb31 = this.getBytes(8);
    _0x33fb31.writeInt(_0x11823e);
    this.sendToServer(_0x33fb31);
  };
  _0x1a0e9a.prototype.otherParser = function (_0x24d688) {
    let _0x4621a0 = this.actorArr[0];
    var _0x247083 = _0x24d688.readInt();
    for (var _0xe4232a = 0; _0x247083 > _0xe4232a; _0xe4232a++) {
      {
        let _0x113a64 = _0x24d688.readInt(),
          _0x5d0ba4 = _0x24d688.readInt();
        _0x113a64 >= this.minHID && _0x113a64 <= this.maxHID && (this.otherShenQiData[_0x4621a0.actorId][_0x113a64] = _0x5d0ba4);
      }
    }
    this.actorArr.shift();
    return _0x4621a0.call(this.otherShenQiData[_0x4621a0.actorId]);
  };
  _0x1a0e9a.prototype.sendDressInfoReq = function () {
    this.sendBaseProto(1);
  };
  _0x1a0e9a.prototype.doDressInfo = function (_0x11dea3) {
    this.parser(_0x11dea3);
    _0x1a0e9a.prototype.sendDressInfoReq = function () {
      this.sendBaseProto(1);
    };
    _0x1a0e9a.prototype.postlfquanju = function (_0x5919a7) {
      this.parserlfqj(_0x5919a7);
      _0x1a0e9a.ins().postDresslfqjInfo();
    };
    _0x1a0e9a.prototype.parserlfqj = function (_0x427360) {
      var _0x18147d = _0x427360.readInt();
      console.log(_0x18147d);
      this.lfInfo = {};
      for (var _0x1c0270 = 1; _0x1c0270 <= _0x18147d; _0x1c0270++) {
        var _0x1d7c9e = _0x427360.readInt();
        this.lfInfo[_0x1d7c9e] = {};
        for (x = 1; x < 4; x++) {
          var _0x2f3037 = new DressTimeInfo();
          _0x2f3037.id = x;
          _0x2f3037.lv = _0x427360.readInt();
          this.lfInfo[_0x1d7c9e][x] = _0x2f3037;
        }
      }
    };
    _0x1a0e9a.prototype.postDresslfqjInfo = function () {};
    _0x1a0e9a.ins().postDressInfo();
  };
  _0x1a0e9a.prototype.postLineChange = function () {};
  _0x1a0e9a.prototype.sendDressActivationReq = function (_0x57e9ad) {
    var _0x31d1ac = this.getBytes(2);
    _0x31d1ac.writeInt(_0x57e9ad);
    _0x31d1ac.writeInt(1);
    this.sendToServer(_0x31d1ac);
  };
  _0x1a0e9a.prototype.MozhuangLevelUp = function (_0x228020) {
    var _0x390fde = this.getBytes(6);
    _0x390fde.writeInt(_0x228020);
    this.sendToServer(_0x390fde);
  };
  _0x1a0e9a.prototype.MozhuangUserReq = function (_0x23fd20, _0x1cdac4) {
    var _0x1009c7 = this.getBytes(2);
    _0x1009c7.writeInt(_0x23fd20);
    _0x1009c7.writeInt(_0x1cdac4);
    this.sendToServer(_0x1009c7);
  };
  _0x1a0e9a.prototype.JiezhikongjianLevelUp = function (_0x69fb7a) {
    {
      var _0x3a2d3b = this.getBytes(6);
      _0x3a2d3b.writeInt(_0x69fb7a);
      this.sendToServer(_0x3a2d3b);
    }
  };
  _0x1a0e9a.prototype.JiezhikongjianUserReq = function (_0x42a331, _0x5dca08) {
    var _0x197dd9 = this.getBytes(2);
    _0x197dd9.writeInt(_0x42a331);
    _0x197dd9.writeInt(_0x5dca08);
    this.sendToServer(_0x197dd9);
  };
  _0x1a0e9a.prototype.ShenzhuhunLevelUp = function (_0x53c718) {
    var _0x405e1c = this.getBytes(6);
    _0x405e1c.writeInt(_0x53c718);
    this.sendToServer(_0x405e1c);
  };
  _0x1a0e9a.prototype.ShenzhuhunUserReq = function (_0x6c5b18, _0x2955ca) {
    var _0x14e414 = this.getBytes(2);
    _0x14e414.writeInt(_0x6c5b18);
    _0x14e414.writeInt(_0x2955ca);
    this.sendToServer(_0x14e414);
  };
  _0x1a0e9a.prototype.longfengDressInfoReq = function (_0x551482) {
    var _0x505e05 = this.getBytes(7);
    _0x505e05.writeInt(_0x551482);
    this.sendToServer(_0x505e05);
  };
  _0x1a0e9a.prototype.longfengbsDressInfoReq = function (_0x34f31c) {
    var _0x573688 = this.getBytes(8);
    _0x573688.writeInt(_0x34f31c);
    this.sendToServer(_0x573688);
  };
  _0x1a0e9a.prototype.longfengfhDressInfoReq = function (_0x56a0d1) {
    {
      var _0x47d096 = this.getBytes(9);
      _0x47d096.writeInt(_0x56a0d1);
      this.sendToServer(_0x47d096);
    }
  };
  _0x1a0e9a.prototype.LonghunitemLevelUp = function (_0x51c8b0) {
    var _0x2c8048 = this.getBytes(6);
    _0x2c8048.writeInt(_0x51c8b0);
    this.sendToServer(_0x2c8048);
  };
  _0x1a0e9a.prototype.LonghunitemUserReq = function (_0x2bd934, _0xe13db9) {
    var _0x357abf = this.getBytes(2);
    _0x357abf.writeInt(_0x2bd934);
    _0x357abf.writeInt(_0xe13db9);
    this.sendToServer(_0x357abf);
  };
  _0x1a0e9a.prototype.TutengLevelUp = function (_0x5a20fa) {
    {
      var _0x3585bd = this.getBytes(6);
      _0x3585bd.writeInt(_0x5a20fa);
      this.sendToServer(_0x3585bd);
    }
  };
  _0x1a0e9a.prototype.TutengReq = function (_0x2ddac4, _0x681048) {
    var _0xb41d1a = this.getBytes(2);
    _0xb41d1a.writeInt(_0x2ddac4);
    _0xb41d1a.writeInt(_0x681048);
    this.sendToServer(_0xb41d1a);
  };
  _0x1a0e9a.prototype.ChangqiongLevelUp = function (_0x39cf97) {
    var _0x53b65e = this.getBytes(6);
    _0x53b65e.writeInt(_0x39cf97);
    this.sendToServer(_0x53b65e);
  };
  _0x1a0e9a.prototype.ChangqiongUserReq = function (_0x42b6ae, _0x5cef66) {
    {
      var _0x503c9e = this.getBytes(2);
      _0x503c9e.writeInt(_0x42b6ae);
      _0x503c9e.writeInt(_0x5cef66);
      this.sendToServer(_0x503c9e);
    }
  };
  _0x1a0e9a.prototype.MojiestLevelUp = function (_0x41301b) {
    var _0x2f710d = this.getBytes(6);
    _0x2f710d.writeInt(_0x41301b);
    this.sendToServer(_0x2f710d);
  };
  _0x1a0e9a.prototype.MojiestUserReq = function (_0x44d123, _0xff2224) {
    var _0x2d0572 = this.getBytes(2);
    _0x2d0572.writeInt(_0x44d123);
    _0x2d0572.writeInt(_0xff2224);
    this.sendToServer(_0x2d0572);
  };
  _0x1a0e9a.prototype.MirshimoshenLevelUp = function (_0xc94b5) {
    {
      var _0x528bd2 = this.getBytes(6);
      _0x528bd2.writeInt(_0xc94b5);
      this.sendToServer(_0x528bd2);
    }
  };
  _0x1a0e9a.prototype.MirshimoshenUserReq = function (_0x5db364, _0x10510e) {
    var _0x3a1542 = this.getBytes(2);
    _0x3a1542.writeInt(_0x5db364);
    _0x3a1542.writeInt(_0x10510e);
    this.sendToServer(_0x3a1542);
  };
  _0x1a0e9a.prototype.ZodiacLevelUp = function (_0x4531a8) {
    var _0x40694a = this.getBytes(6);
    _0x40694a.writeInt(_0x4531a8);
    this.sendToServer(_0x40694a);
  };
  _0x1a0e9a.prototype.ZodiacUserReq = function (_0x59ff81, _0x514a40) {
    var _0x23b694 = this.getBytes(2);
    _0x23b694.writeInt(_0x59ff81);
    _0x23b694.writeInt(_0x514a40);
    this.sendToServer(_0x23b694);
  };
  _0x1a0e9a.prototype.SwallowLevelUp = function (_0x38aa50) {
    var _0x475e71 = this.getBytes(6);
    _0x475e71.writeInt(_0x38aa50);
    this.sendToServer(_0x475e71);
  };
  _0x1a0e9a.prototype.SwallowUserReq = function (_0x358191, _0x47b6c6) {
    {
      var _0x545ce8 = this.getBytes(2);
      _0x545ce8.writeInt(_0x358191);
      _0x545ce8.writeInt(_0x47b6c6);
      this.sendToServer(_0x545ce8);
    }
  };
  _0x1a0e9a.prototype.doDressActivationRes = function (_0x2fcbb2) {
    this.parserAct(_0x2fcbb2);
    _0x1a0e9a.ins().postJiHuo();
  };
  _0x1a0e9a.prototype.sendDressUserReq = function (_0x52c880, _0x13c87b) {
    var _0x292427 = this.getBytes(3);
    _0x292427.writeByte(_0x52c880);
    _0x292427.writeInt(_0x13c87b);
    this.sendToServer(_0x292427);
  };
  _0x1a0e9a.prototype.doDressUserRes = function (_0x129aa1) {
    this.parserDress(_0x129aa1);
    _0x1a0e9a.ins().postDressInfo();
    UserTips.ins().showTips("|C:0xffffff&T:幻化形象成功|");
  };
  _0x1a0e9a.prototype.sendUnDressUserReq = function (_0x5aac57, _0x463695) {
    {
      var _0xfa1fa5 = this.getBytes(4);
      _0xfa1fa5.writeByte(_0x5aac57);
      _0xfa1fa5.writeInt(_0x463695);
      this.sendToServer(_0xfa1fa5);
    }
  };
  _0x1a0e9a.prototype.doUnDressUserRes = function (_0x594e85) {
    this.parserDress(_0x594e85);
    _0x1a0e9a.ins().postDressInfo();
    UserTips.ins().showTips("|C:0xffffff&T:取消幻化形象成功|");
  };
  _0x1a0e9a.prototype.doDressTimeEnd = function (_0x321725) {
    this.parserDel(_0x321725);
    _0x1a0e9a.ins().postDressInfo();
  };
  _0x1a0e9a.prototype.parser = function (_0x6591c8) {
    {
      var _0x1eddf6 = _0x6591c8.readInt();
      this.timeInfo = {};
      for (var _0x4193e3 = 0; _0x1eddf6 > _0x4193e3; _0x4193e3++) {
        var _0xb55c5d = new DressTimeInfo();
        _0xb55c5d.dressId = _0x6591c8.readInt();
        _0xb55c5d.invalidtime = _0x6591c8.readInt();
        _0xb55c5d.lv = _0x6591c8.readInt();
        this.timeInfo[_0xb55c5d.dressId] = _0xb55c5d;
        _0xb55c5d.dressId >= this.minHID && _0xb55c5d.dressId <= this.maxHID && (this.hunHuanData[_0xb55c5d.dressId] = _0xb55c5d.lv);
      }
      _0x1eddf6 = _0x6591c8.readByte();
      this.posInfo = [];
      for (var _0x4193e3 = 0; _0x1eddf6 > _0x4193e3; _0x4193e3++) {
        {
          for (var _0x4342f5 = new DressPosInfo(), _0x273a1a = 0; 3 > _0x273a1a; _0x273a1a++) {
            _0x4342f5.posAry[_0x273a1a] = _0x6591c8.readInt();
          }
          this.posInfo.push(_0x4342f5);
        }
      }
    }
  };
  _0x1a0e9a.prototype.dotaigushenInfo = function (t) {
    this.parsertaigushen(t);
    e.ins().posttaigushenInfo();
  };
  _0x1a0e9a.prototype.parsertaigushen = function (t) {
    this.infotaigushendata = [];
    var e = t.readInt();
    for (x = 1; x < 4; x++) {
      var job = t.readInt();
      this.infotaigushendata[job] = [];
      for (a = 1; a <= e; a++) {
        var s = {};
        s.id = t.readInt();
        var p = t.readInt();
        var k = [];
        for (b = 1; b <= p; b++) {
          var m = {};
          m.id = t.readInt();
          m.lv = t.readInt();
          m.star = t.readInt();
          k[b] = m;
        }
        s.star = k;
        this.infotaigushendata[job][s.id] = s;
      }
    }
  };
  _0x1a0e9a.prototype.posttaigushenInfo = function () {};
  _0x1a0e9a.prototype.sendtaigushenReq = function (t, s, n) {
    var e = this.getBytes(87);
    e.writeInt(t);
    e.writeInt(s);
    e.writeInt(n);
    this.sendToServer(e);
  };
  _0x1a0e9a.prototype.jslastitem = function (m, n, s, o, tt) {
    var g = 0,
      a = 0,
      b = 0,
      ismax = 0,
      itemid = 0;
    var p = parseInt(n * 10) + parseInt(s.star);
    var max = parseInt(o.maxlv * 10) + 9;
    if (p >= max) {
      g = 0;
      ismax = 1;
    } else if (s.star >= 9) {
      a = n < 1 ? m.tpcost : parseInt(m.tpcost) + parseInt(m.tpnxcost * n);
      b = UserBag.ins().getBagGoodsCountById(0, m.tpitem);
      g = b < a ? 0 : 1;
      ismax = 0;
      itemid = m.tpitem;
    } else {
      a = p < 1 ? m.cost : parseInt(m.cost) + parseInt(m.nxcost * p);
      b = UserBag.ins().getBagGoodsCountById(0, m.itemid);
      g = b < a ? 0 : 1;
      ismax = 0;
      itemid = m.itemid;
    }
    var q = [],
      w = [];
    if (tt) {
      for (x = 0; x < m.type.length; x++) {
        var r = {},
          y = {};
        r.type = y.type = m.type[x];
        r.value = p < 1 ? 0 : parseInt(m.attr[x]) + parseInt(m.nxattr[x] * (parseInt(p) - 1));
        y.value = p < 1 ? m.attr[x] : parseInt(m.attr[x]) + parseInt(m.nxattr[x] * p);
        q[x] = r;
        w[x] = y;
      }
    }
    var f = {};
    f.cost = a;
    f.bagcost = b;
    f.max = ismax;
    f.show = g;
    f.maxlv = max;
    f.lv = p;
    f.itemid = itemid;
    f.attr = q;
    f.exattr = w;
    return f;
  };
  _0x1a0e9a.prototype.doguiminjiangeInfo = function (t) {
    this.parserguiminjiange(t);
    e.ins().postguiminjiangeInfo();
  };
  _0x1a0e9a.prototype.parserguiminjiange = function (t) {
    this.infoguiminjiangedata = [];
    var e = t.readInt();
    for (x = 1; x < 4; x++) {
      var job = t.readInt();
      this.infoguiminjiangedata[job] = [];
      for (a = 1; a <= e; a++) {
        var s = {};
        s.id = t.readInt();
        s.lv = t.readInt();
        this.infoguiminjiangedata[job][s.id] = s;
      }
    }
  };
  _0x1a0e9a.prototype.parserAct = function (_0x5a1636) {
    var _0x5dfcee = new DressTimeInfo();
    _0x5dfcee.dressId = _0x5a1636.readInt();
    _0x5dfcee.invalidtime = _0x5a1636.readInt();
    _0x5dfcee.lv = _0x5a1636.readInt();
    this.timeInfo[_0x5dfcee.dressId] = _0x5dfcee;
    _0x5dfcee.dressId >= this.minHID && _0x5dfcee.dressId <= this.maxHID && (this.hunHuanData[_0x5dfcee.dressId] = _0x5dfcee.lv);
  };
  _0x1a0e9a.prototype.parserDress = function (_0x5da672) {
    var _0x4bb9f0 = _0x5da672.readByte(),
      _0x51cfad = this.posInfo[_0x4bb9f0],
      _0x4762a2 = _0x5da672.readByte(),
      _0x3b8a74 = _0x5da672.readInt();
    _0x51cfad && (_0x51cfad.posAry[_0x4762a2 - 1] = _0x3b8a74);
    var _0x48b7dc = SubRoles.ins().getSubRoleByIndex(_0x4bb9f0);
    _0x48b7dc.zhuangbei[_0x4762a2 - 1] = _0x3b8a74;
    1 == _0x4762a2 || 2 == _0x4762a2 ? UserEquip.ins().postEquipChange() : _0x1a0e9a.ins().postChangeWing();
    var _0x58cd9b = EntityManager.ins().getEntityByHandle(_0x48b7dc.handle);
    _0x58cd9b && _0x58cd9b.updateModel();
  };
  _0x1a0e9a.prototype.parserDel = function (_0x3daed2) {
    var _0x75e421 = _0x3daed2.readInt();
    delete this.timeInfo[_0x75e421];
    for (var _0xf297c = 0; _0xf297c < this.posInfo.length; _0xf297c++) {
      for (var _0x5b31f6 = this.posInfo[_0xf297c], _0xc56de3 = 0; 3 > _0xc56de3; _0xc56de3++) {
        if (_0x5b31f6.posAry[_0xc56de3] == _0x75e421) {
          _0x5b31f6.posAry[_0xc56de3] = 0;
          var _0x4fd286 = SubRoles.ins().getSubRoleByIndex(_0xf297c);
          _0x4fd286.zhuangbei[_0xc56de3] = 0;
          0 == _0xc56de3 || 1 == _0xc56de3 ? UserEquip.ins().postEquipChange() : _0x1a0e9a.ins().postChangeWing();
          var _0x49bae6 = EntityManager.ins().getEntityByHandle(_0x4fd286.handle);
          _0x49bae6 && _0x49bae6.updateModel();
          break;
        }
      }
    }
  };
  _0x1a0e9a.prototype.getModelPosId = function (_0x11f60e) {
    return this.posInfo[_0x11f60e];
  };
  _0x1a0e9a.prototype.redPoint = function () {
    return this.careerRedPoint();
  };
  _0x1a0e9a.prototype.careerRedPoint = function () {
    for (var _0x1f7f10 = 0; _0x1f7f10 < SubRoles.ins().subRolesLen; _0x1f7f10++) {
      var _0xfce4c9 = SubRoles.ins().getSubRoleByIndex(_0x1f7f10).job,
        _0xcfa6c9 = this.getIdByCareer(_0xfce4c9);
      for (var _0x3ce4ee in _0xcfa6c9) for (var _0x358fa3 = _0xcfa6c9[_0x3ce4ee], _0x1f633c = 0; _0x1f633c < _0x358fa3.length; _0x1f633c++) {
        var _0x3fae59 = _0x358fa3[_0x1f633c];
        if (this.redPointDress(_0x3fae59.id)) return true;
      }
    }
    return false;
  };
  _0x1a0e9a.prototype.curRoleRedPoint = function (_0x14f7c0) {
    return this.roleRedPoint()[_0x14f7c0];
  };
  _0x1a0e9a.prototype.roleRedPoint = function () {
    for (var _0x2ac5e1 = [false, false, false], _0x3cf922 = SubRoles.ins().subRolesLen, _0x2391f9 = 0; _0x3cf922 > _0x2391f9; _0x2391f9++) {
      {
        var _0x21f6f0 = SubRoles.ins().getSubRoleByIndex(_0x2391f9).job,
          _0x25fcec = this.getIdByCareer(_0x21f6f0);
        for (var _0x149931 in _0x25fcec) {
          {
            for (var _0x4a6772 = _0x25fcec[_0x149931], _0x37f2de = 0; _0x37f2de < _0x4a6772.length; _0x37f2de++) {
              {
                var _0x4360b1 = _0x4a6772[_0x37f2de];
                if (this.redPointDress(_0x4360b1.id)) {
                  {
                    _0x2ac5e1[_0x2391f9] = true;
                    break;
                  }
                }
              }
            }
            if (_0x2ac5e1[_0x2391f9]) break;
          }
        }
      }
    }
    return _0x2ac5e1;
  };
  _0x1a0e9a.prototype.canDress = function (_0x4480d1, _0x4db67e) {
    if (_0x4db67e == DressType.WING && Actor.level <= 16) return false;
    var _0x1b36cf = this.getIdByCareer(_0x4480d1)[_0x4db67e];
    for (var _0x9e676b in _0x1b36cf) if (this.redPointDress(_0x1b36cf[_0x9e676b].id)) return true;
    return false;
  };
  _0x1a0e9a.prototype.posRedPoint = function () {
    {
      for (var _0x571839 = [false, false, false], _0x2d7e80 = SubRoles.ins().subRolesLen, _0x2dac4b = 0; _0x2d7e80 > _0x2dac4b; _0x2dac4b++) {
        for (var _0x5651aa = SubRoles.ins().getSubRoleByIndex(_0x2dac4b).job, _0x375c01 = this.getIdByCareer(_0x5651aa), _0x451988 = 0; 3 > _0x451988; _0x451988++) {
          if (!_0x571839[_0x451988]) for (var _0x20896f = _0x375c01[_0x451988 + 1], _0x926399 = 0; _0x926399 < _0x20896f.length; _0x926399++) {
            {
              var _0x4099ab = _0x20896f[_0x926399];
              if (this.redPointDress(_0x4099ab.id)) {
                {
                  _0x571839[_0x451988] = true;
                  break;
                }
              }
            }
          }
        }
      }
      return _0x571839;
    }
  };
  _0x1a0e9a.prototype.getIdByCareer = function (_0x531d7c) {
    return this.careerDic[_0x531d7c] ? this.careerDic[_0x531d7c] : (this.initConfig(), this.careerDic[_0x531d7c]);
  };
  _0x1a0e9a.prototype.getIdByItemId = function (_0x178694) {
    return this.itemIdDic[_0x178694] ? this.itemIdDic[_0x178694] : (this.initConfig(), this.itemIdDic[_0x178694]);
  };
  _0x1a0e9a.prototype.initConfig = function () {
    if (!Object.keys(this.itemIdDic).length) {
      {
        var _0x4d0bd9 = ConfgMgr.ZhuangBanId;
        for (var _0x500c38 in _0x4d0bd9) {
          var _0x2f1999 = _0x4d0bd9[_0x500c38],
            _0x29d222 = _0x2f1999.roletype,
            _0x22781e = _0x2f1999.pos;
          if (this.careerDic[_0x29d222] = this.careerDic[_0x29d222] || {}, this.careerDic[_0x29d222][_0x22781e] = this.careerDic[_0x29d222][_0x22781e] || [], this.careerDic[_0x29d222][_0x22781e].push(_0x2f1999), _0x2f1999.cost) {
            {
              var _0x5b13af = _0x2f1999.cost.itemId;
              this.itemIdDic[_0x5b13af] = this.itemIdDic[_0x5b13af] || [];
              this.itemIdDic[_0x5b13af].push(_0x2f1999);
            }
          }
        }
      }
    }
  };
  _0x1a0e9a.prototype.redPointDress = function (_0x1b277e) {
    var _0x28962c = ConfgMgr.ZhuangBanId[_0x1b277e];
    if (_0x28962c.pos == DressType.WING && Actor.level <= 16) {
      return false;
    }
    var _0x5f3b9d = _0x28962c.cost.itemId,
      _0x47411d = UserBag.ins().getBagGoodsCountById(0, _0x5f3b9d);
    if (0 == _0x47411d) return false;
    if (this.timeInfo[_0x1b277e]) {
      for (var _0x268574 = this.getIdByItemId(_0x5f3b9d), _0x5445e8 = 0; _0x5445e8 < _0x268574.length; _0x5445e8++) {
        var _0x4aceb7 = _0x268574[_0x5445e8];
        if (_0x4aceb7.id != _0x1b277e && !this.timeInfo[_0x4aceb7.id]) {
          return false;
        }
      }
      var _0x2c24ad = this.timeInfo[_0x1b277e].lv + 1,
        _0x87933d = ConfgMgr.ZhuangBanLevelUp[_0x1b277e];
      if (_0x87933d && _0x87933d[_0x2c24ad] && _0x87933d[_0x2c24ad].cost.num <= _0x47411d) {
        return true;
      }
    } else {
      if (_0x47411d >= _0x28962c.cost.num) {
        return true;
      }
    }
    return false;
  };
  _0x1a0e9a.prototype.getIdZhuangBanId = function (_0x2aebf7) {
    var _0x1697c7 = ConfgMgr.ZhuangBanId;
    for (var _0x108f0c in _0x1697c7) {
      var _0x2b63f0 = _0x1697c7[_0x108f0c];
      if (_0x2b63f0.cost.itemId == _0x2aebf7) return _0x2aebf7;
    }
    return 0;
  };
  _0x1a0e9a.prototype.sendLevelUp = function (_0x18835d) {
    var _0xe0cd29 = this.getBytes(6);
    _0xe0cd29.writeInt(_0x18835d);
    this.sendToServer(_0xe0cd29);
  };
  _0x1a0e9a.prototype.postLevelUp = function (_0x474abd) {
    var _0x2dc686 = _0x474abd.readInt(),
      _0x3cd35a = _0x474abd.readInt(),
      _0x24f1d4 = _0x474abd.readInt(),
      _0x5107c6 = this.timeInfo[_0x2dc686];
    _0x5107c6.invalidtime = _0x3cd35a;
    _0x5107c6.lv = _0x24f1d4;
    this.postDressInfo();
    _0x5107c6.dressId >= this.minHID && _0x5107c6.dressId <= this.maxHID && (this.hunHuanData[_0x5107c6.dressId] = _0x5107c6.lv);
  };
  _0x1a0e9a.prototype.sendAddTime = function (_0x6c6a05) {
    {
      var _0x2551be = this.getBytes(7);
      _0x2551be.writeInt(_0x6c6a05);
      this.sendToServer(_0x2551be);
    }
  };
  _0x1a0e9a.prototype.postAddTime = function (_0xd54752) {
    {
      var _0x232e00 = _0xd54752.readInt(),
        _0x50783d = _0xd54752.readInt(),
        _0x32a7c3 = _0xd54752.readInt(),
        _0xfb768b = this.timeInfo[_0x232e00] || new DressTimeInfo();
      _0xfb768b.invalidtime = _0x50783d;
      _0xfb768b.lv = _0x32a7c3;
      _0xfb768b.dressId = _0x232e00;
      this.timeInfo[_0x232e00] = _0xfb768b;
    }
  };
  _0x1a0e9a.prototype.postDressInfo = function () {};
  _0x1a0e9a.prototype.postJiHuo = function () {};
  _0x1a0e9a.prototype.postChangeWing = function () {};
  return _0x1a0e9a;
}(BaseSystem);
__reflect(Dress.prototype, "Dress");
var GameSystem;
!function (_0x21fad9) {
  _0x21fad9.dress = Dress.ins.bind(Dress);
}(GameSystem || (GameSystem = {}));