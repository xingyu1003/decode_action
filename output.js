//Sun Nov 23 2025 03:53:50 GMT+0000 (Coordinated Universal Time)
//
//
var encode_version = "jsjiami.com.v5";
var RoleInfoPanel = function (_0x7a2d26) {
  function _0x52d877() {
    {
      var _0x3c5438 = _0x7a2d26.call(this) || this;
      _0x3c5438.beforeIndex = -1;
      _0x3c5438.name = "角色";
      return _0x3c5438;
    }
  }
  __extends(_0x52d877, _0x7a2d26);
  _0x52d877.prototype.childrenCreated = function () {
    {
      this.init();
    }
  };
  _0x52d877.prototype.init = function () {
    {
      this.longfeEff || (this.longfeEff = new MovieClip());
      this.fongfeEff || (this.fongfeEff = new MovieClip());
      this.touchEnabled = false;
      this.touchChildren = true;
      this.groupRole.touchEnabled = false;
      this.groupRoleNext.touchEnabled = false;
      this.groupRole.touchChildren = false;
      this.groupRoleNext.touchChildren = false;
      this.equips = [];
      for (var _0x5d9de9 = 0; _0x5d9de9 < EquipPos.MAX; _0x5d9de9++) {
        {
          this.equips[_0x5d9de9] = this["item" + _0x5d9de9];
          this.equips[_0x5d9de9].touchEnabled = true;
          this.equips[_0x5d9de9].isShowJob(false);
          this.equips[_0x5d9de9].isShowTips(false);
          this["redPoint" + _0x5d9de9].touchEnabled = false;
        }
      }
      this.eff = new MovieClip();
      this.eff.x = this.oneKeyChange.width / 2;
      this.eff.y = this.oneKeyChange.height / 2;
      this.eff.scaleX = 0.85;
      this.eff.scaleY = 0.85;
      this.eff.touchEnabled = false;
      this.suitEff = new MovieClip();
      this.suitEff.x = this.suitImg.x;
      this.suitEff.y = this.suitImg.y;
      this.suitEff3 = new MovieClip();
      this.suitEff3.x = this.suitImg1.x;
      this.suitEff3.y = this.suitImg1.y;
      this.suitEff2 = new MovieClip();
      this.suitEff4 = new MovieClip();
      this.suitEff5 = new MovieClip();
      this.suitEff6 = new MovieClip();
      this.suitEff7 = new MovieClip();
      this.suitEff8 = new MovieClip();
      this.suitEff9 = new MovieClip();
      this.suitEff10 = new MovieClip();
    }
  };
  _0x52d877.prototype.clear = function () {
    {
      this.beforeIndex = -1;
    }
  };
  _0x52d877.prototype.open = function () {
    for (var _0x24bf0a = 0; _0x24bf0a < arguments.length; _0x24bf0a++) {}
    this.addTouchEvent(this.shuzhuang, this.onClick);
    this.addTouchEvent(this.bless0, this.onClick);
    this.addTouchEvent(this.bless1, this.onClick);
    this.addTouchEvent(this.moitem, this.onClick);
    this.addTouchEvent(this.item88, this.onClick);
    this.addTouchEvent(this.longzhuang, this.onClick);
    this.addTouchEvent(this.oneKeyChange, this.onClick);
    this.addTouchEvent(this.roleInfoItem0, this.onClick);
    this.addTouchEvent(this.roleInfoItem1, this.onClick);
    this.addTouchEvent(this.shenlu, this.onClick);
    this.addTouchEvent(this.orange, this.onClick);
    this.addTouchEvent(this.heirloom, this.onClick);
    this.addTouchEvent(this.rune, this.onClick);
    this.addTouchEvent(this.juesexiangxi, this.onClick);
    this.observe(UserEquip.ins().postEquipChange, this.updataEquip);
    this.observe(UserEquip.ins().postAddSpirit, this.updataEquip);
    this.observe(UserEquip.ins().postAddSoul, this.updataEquip);
    this.observe(SpecialRing.ins().postRingUpdate, this.updateRing);
    this.observe(UserForge.ins().postForgeTips, this.delayRedPoint);
    this.observe(GameLogic.ins().postRuneExchange, this.delayRedPoint);
    this.observe(GameLogic.ins().postRuneShatter, this.delayRedPoint);
    this.observe(Rune.ins().postInlayResult, this.delayRedPoint);
    this.observe(UserBag.ins().postHuntStore, this.delayRedPoint);
    this.observe(Dress.ins().postChangeWing, this.setWing);
    this.observe(LongHun.ins().postDateUpdate, this.updateLoongSoul);
    this.observe(LongHun.ins().postStageActive, this.updateLoongSoul);
    this.observe(ShenshouRedpoint.ins().postRedPoint, this.updateLoongSoul);
    this.observe(Dress.ins().postDressInfo, this.setFashionRetPoint);
    this.observe(SpecialRing.ins().postActiveRing, this.delayRedPoint);
    this.observe(UserFb.ins().postFbRingInfo, this.delayRedPoint);
    this.observe(Heirloom.ins().postHeirloomInfo, this.setRoleEff);
    this.observe(Weapons.ins().postWeaponsUse, this.setRoleEff);
    this.observe(UserBag.ins().postItemAdd, this.delayRedPoint);
    this.observe(UserBag.ins().postItemDel, this.delayRedPoint);
    this.observe(UserBag.ins().postItemChange, this.delayRedPoint);
    this.observe(UserBag.ins().postItemCountChange, this.delayRedPoint);
    this.observe(UserFb.ins().postFbRingInfo, this.delayRedPoint);
    this.observe(Actor.ins().postLevelChange, this.delayRedPoint);
    this.observe(JadeNew.ins().postJadeData, this.delayRedPoint);
    this.observe(LyMark.ins().postMarkData, this.delayRedPoint);
    this.updateRing();
    this.updateLoongSoul();
    this.setRetPoint();
    this.updataEquip(false);
    this.setFashionRetPoint();
    this.Uplongfeng();
    this.clearChangeEff();
    -1 != this.beforeIndex ? this.roleChange(this.beforeIndex, this.curRole) : (this.setRole(this.curRole, this.bodyImg, this.weaponImg), this.setSuit(this.curRole, this.suitImg, this.suitEff), this.setMatrixEff(this.curRole), this.setWeaponsSuit(this.curRole, "sef", this.soulEff, this.suitEff2), this.setWeaponEffect(this.curRole, "wsef", this.soulEff, this.suitEff5), this.setWeaponEffect(this.curRole, "bodyEffect", this.bodyEff, this.suitEff7, 2), this.setWing(this.curRole, this.wingImg, this.wingEffect, this.wingEff));
    this.beforeIndex = this.curRole;
    this.setSuitEquips();
  };
  _0x52d877.prototype.close = function () {
    {
      DisplayUtils.removeFromParent(this.eff);
      DisplayUtils.removeFromParent(this.suitEff);
      DisplayUtils.removeFromParent(this.suitEff2);
      DisplayUtils.removeFromParent(this.suitEff3);
      DisplayUtils.removeFromParent(this.suitEff4);
      DisplayUtils.removeFromParent(this.suitEff5);
      DisplayUtils.removeFromParent(this.suitEff6);
      DisplayUtils.removeFromParent(this.suitEff7);
      DisplayUtils.removeFromParent(this.suitEff8);
      DisplayUtils.removeFromParent(this.suitEff9);
      DisplayUtils.removeFromParent(this.suitEff10);
      this.roleInfoItem0.destory();
      this.roleInfoItem1.destory();
    }
  };
  _0x52d877.prototype.clearChangeEff = function () {
    {
      egret.Tween.removeTweens(this.groupRole);
      egret.Tween.removeTweens(this.groupRoleNext);
      this.groupRole.x = 0;
      this.groupRoleNext.x = 580;
      this.groupRole.alpha = 1;
      this.groupRoleNext.alpha = 0;
      this.groupRoleNext.visible = false;
      this.setRole(this.curRole, this.bodyImg, this.weaponImg);
      this.setWing(this.curRole, this.wingImg, this.wingEffect, this.wingEff);
      this.setSuit(this.curRole, this.suitImg, this.suitEff);
      this.setWeaponsSuit(this.curRole, "sef", this.soulEff, this.suitEff2);
      this.setMatrixEff(this.curRole);
      this.setWeaponEffect(this.curRole, "wsef", this.soulEff, this.suitEff5);
      this.setWeaponEffect(this.curRole, "bodyEffect", this.bodyEff, this.suitEff7, 2);
    }
  };
  _0x52d877.prototype.Listdatelf = function () {
    var _0x54ac66 = Dress.ins();
    this.listInfo = [];
    for (var _0x1c82d7 in GlobalConfig.longfengconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == GlobalConfig.longfengconfig[_0x1c82d7].roletype) {
      var _0x48b65a = new DressItemInfo();
      var _0x403160 = GlobalConfig.longfengconfig[_0x1c82d7];
      var _0x53f4c3 = _0x403160.id;
      _0x48b65a.lv = _0x54ac66.timeInfo[_0x53f4c3] ? _0x54ac66.timeInfo[_0x53f4c3].lv : 0;
      _0x48b65a.id = _0x53f4c3;
      _0x48b65a.job = _0x403160.roletype;
      this.listInfo.push(_0x48b65a);
    }
    return this.listInfo;
  };
  _0x52d877.prototype.Uplongfeng = function () {
    var _0x545e79 = this.Listdatelf()[0].lv;
    this.item88.itemIcon.imgBg.source = "quality5";
    this.item88.nameTxt.text = "龍魂鳯舞";
    this.item88.itemIcon.imgJob.visible = this.item88.count.visible = 0;
    0 < _0x545e79 ? (this.lfopeneff(), this.item88.nameTxt.textColor = "0xed7908") : (this.clremoveMc(), this.item88.itemIcon.imgIcon.source = "2610787_png", this.item88.nameTxt.textColor = "0xDFD1B5");
  };
  _0x52d877.prototype.lfopeneff = function () {
    this.item88.itemIcon.imgJob.source = "";
    this.item88.itemIcon.imgIcon.source = "";
    this.fongfeEff.scaleX = this.fongfeEff.scaleY = 0.85;
    this.fongfeEff.x = 38;
    this.fongfeEff.y = 37;
    this.item88.itemIcon.imgJob.parent && this.item88.itemIcon.imgJob.parent.addChild(this.fongfeEff);
    this.fongfeEff.playFile(RES_DIR_EFF + "6004", -1);
    this.longfeEff.scaleX = this.longfeEff.scaleY = 0.3;
    this.longfeEff.x = -25;
    this.longfeEff.y = -15;
    this.item88.itemIcon.imgIcon.parent && this.item88.itemIcon.imgIcon.parent.addChild(this.longfeEff);
    this.longfeEff.playFile(RES_DIR_EFF + "hunhuan_eff", -1);
  };
  _0x52d877.prototype.clremoveMc = function (_0x12b776) {
    this.removeMc(this.longfeEff);
    this.removeMc(this.fongfeEff);
  };
  _0x52d877.prototype.removeMc = function (_0x46a194) {
    _0x46a194 && (_0x46a194.dispose(), DisplayUtils.removeFromParent(_0x46a194));
  };
  _0x52d877.prototype.roleChange = function (_0x207949, _0xf631ad) {
    if (_0x207949 == _0xf631ad) {
      return void this.clearChangeEff();
    }
    this.groupRoleNext.visible = true;
    this.setWing(_0x207949, this.wingImg, this.wingEffect, this.wingEff);
    this.setWing(_0xf631ad, this.nextWingImg, this.nextwingEffect, this.nextwingEff);
    this.setRole(_0x207949, this.bodyImg, this.weaponImg);
    this.setRole(_0xf631ad, this.nextBodyImg, this.nextWeaponImg);
    this.setSuit(_0x207949, this.suitImg, this.suitEff);
    this.setSuit(_0xf631ad, this.suitImg1, this.suitEff3);
    this.setMatrixEff(_0xf631ad);
    this.setWeaponsSuit(_0x207949, "sef", this.soulEff, this.suitEff2);
    this.setWeaponsSuit(_0xf631ad, "nsef", this.nsoulEff, this.suitEff4);
    this.setWeaponEffect(_0x207949, "wsef", this.soulEff, this.suitEff5);
    this.setWeaponEffect(_0xf631ad, "nwsef", this.nsoulEff, this.suitEff6);
    this.setWeaponEffect(_0x207949, "bodyEffect", this.bodyEff, this.suitEff7, 2);
    this.setWeaponEffect(_0xf631ad, "nbodyEffect", this.nbodyEff, this.suitEff8, 2);
    var _0xb15e01 = egret.Tween.get(this.groupRole);
    var _0x3d1585 = egret.Tween.get(this.groupRoleNext);
    _0xf631ad > _0x207949 ? (this.groupRoleNext.x = 580, _0xb15e01.to({
      x: -580,
      alpha: 0
    }, 600), _0x3d1585.to({
      x: 0,
      alpha: 1
    }, 600).call(this.clearChangeEff, this)) : (this.groupRoleNext.x = -580, _0xb15e01.to({
      x: 580,
      alpha: 0
    }, 600), _0x3d1585.to({
      x: 0,
      alpha: 1
    }, 600).call(this.clearChangeEff, this));
  };
  _0x52d877.prototype.updateLoongSoul = function () {
    this.redPointShenlu.visible = LongHun.ins().canShowRedPointInAll() || JadeNew.ins().checkRed() || ShenshouRedpoint.ins().redpoint;
  };
  _0x52d877.prototype.updateRing = function () {
    var _0x511616 = SubRoles.ins().getSubRoleByIndex(this.curRole).exRingsData;
    0 < _0x511616[0] ? (this.roleInfoItem0.setImgSource(0, 1), this.roleInfoItem0.setLv(0), this.roleInfoItem0.setNameTxt("麻痹戒指"), this.roleInfoItem0.setBgValue("quality4"), this.roleInfoItem0.setRedPointVisibel(false)) : (this.roleInfoItem0.setImgSource(0, 0), this.roleInfoItem0.setLv(0), this.roleInfoItem0.setNameTxt("麻痹戒指"), this.roleInfoItem0.setBgValue("quality0"));
    0 < _0x511616[1] ? (this.roleInfoItem1.setImgSource(1, 1), this.roleInfoItem1.setLv(0), this.roleInfoItem1.setNameTxt("护身戒指"), this.roleInfoItem1.setBgValue("quality4"), this.roleInfoItem1.setRedPointVisibel(false)) : (this.roleInfoItem1.setImgSource(1, 0), this.roleInfoItem1.setLv(0), this.roleInfoItem1.setNameTxt("护身戒指"), this.roleInfoItem1.setBgValue("quality0"));
  };
  _0x52d877.prototype.updataEquip = function (_0x93c3bb) {
    {
      undefined === _0x93c3bb && (_0x93c3bb = true);
      var _0x3590cc = SubRoles.ins().getSubRoleByIndex(this.curRole);
      this.setEquip(_0x3590cc);
      _0x93c3bb ? TimerManager.ins().doTimer(300, 1, this.onDelayReflash, this) : this.onDelayReflash();
      this.setSuitEquips();
    }
  };
  _0x52d877.prototype.onDelayReflash = function () {
    UserRole.ins().setCanChange();
  };
  _0x52d877.prototype.setEquip = function (_0x136dfd) {
    if (_0x136dfd) {
      var _0x2675da = _0x136dfd.getEquipLen();
      this.weaponImg.source = "";
      for (var _0x38b6d8 = 0; _0x2675da > _0x38b6d8; _0x38b6d8++) {
        var _0x4f848c = _0x136dfd.getEquipByIndex(_0x38b6d8);
        this.equips[_0x38b6d8].setModel(_0x136dfd);
        this.equips[_0x38b6d8].setCurRole(this.curRole);
        this.equips[_0x38b6d8].setIndex(_0x38b6d8);
        this.equips[_0x38b6d8].data = _0x4f848c.item;
        0 == _0x4f848c.item.configID ? (this.equips[_0x38b6d8].setItemImg(_0x38b6d8 > EquipPos.MAX ? "" : "xb_1" + ForgeConst.EQUIP_POS_TO_SUB[_0x38b6d8]), this.equips[_0x38b6d8].isShowTips(false), this.addTouchEvent(this.equips[_0x38b6d8], this.onClick)) : (this.equips[_0x38b6d8].isShowTips(true), this.removeTouchEvent(this.equips[_0x38b6d8], this.onClick));
      }
      1000 >= _0x136dfd.power ? this.powerPanel.setPower(_0x136dfd.power) : (_0x38b6d8 = Math.floor(_0x136dfd.power / 1000), this.powerPanel.setPower(_0x38b6d8 + "亿"));
      this.setRole(this.curRole, this.bodyImg, this.weaponImg);
      this.setWing(this.curRole, this.wingImg, this.wingEffect, this.wingEff);
      this.setSuit(this.curRole, this.suitImg, this.suitEff);
      this.setWeaponsSuit(this.curRole, "sef", this.soulEff, this.suitEff2);
      this.setWeaponEffect(this.curRole, "wsef", this.soulEff, this.suitEff5);
      this.setWeaponEffect(this.curRole, "bodyEffect", this.bodyEff, this.suitEff7, 2);
    }
  };
  _0x52d877.prototype.setRole = function (_0x1d364b, _0x5d1cae, _0x3a0e09) {
    {
      _0x5d1cae.source = null;
      _0x3a0e09.source = null;
      var _0x5d5d99;
      _0x1d364b = SubRoles.ins().getSubRoleByIndex(_0x1d364b);
      var _0x16bc1a = _0x1d364b.getEquipByIndex(0).item.configID;
      var _0x27fe7d = _0x1d364b.zhuangbei;
      var _0x1f2b52 = _0x27fe7d[0];
      var _0x27fe7d = _0x27fe7d[1];
      var _0x1ac73d = _0x1d364b.getEquipByIndex(0).item.configID;
      var _0x29166c = _0x1d364b.getEquipByIndex(2).item.configID;
      0 < _0x1ac73d && ((_0x1ac73d = GlobalConfig.EquipConfig[_0x1ac73d].appearance) && -1 < _0x1ac73d.indexOf("[job]") && (_0x1ac73d = _0x1ac73d.replace("[job]", _0x1d364b.job + "")), _0x3a0e09.source = GlobalConfig.EquipWithEffConfig[_0x16bc1a + "_" + _0x1d364b.sex] ? null : _0x1ac73d + "_" + _0x1d364b.sex + "_c_png");
      0 < _0x29166c && ((_0x1ac73d = GlobalConfig.EquipConfig[_0x29166c].appearance) && -1 < _0x1ac73d.indexOf("[job]") && (_0x1ac73d = _0x1ac73d.replace("[job]", _0x1d364b.job + "")), _0x5d1cae.source = _0x1ac73d + "_" + _0x1d364b.sex + "_c_png", _0x5d5d99 = true);
      _0x5d5d99 || (_0x5d1cae.source = "body000_" + _0x1d364b.sex + "_c_png");
      0 < _0x27fe7d && (_0x3a0e09.source = this.getZhuangbanById(_0x27fe7d).res + "_" + _0x1d364b.sex + "_c_png");
      0 < _0x1f2b52 && (_0x5d1cae.source = this.getZhuangbanById(_0x1f2b52).res + "_" + _0x1d364b.sex + "_c_png");
    }
  };
  _0x52d877.prototype.setRoleEff = function () {
    this.setSuit(this.curRole, this.suitImg, this.suitEff);
    this.setWing(this.curRole, this.wingImg, this.wingEffect, this.wingEff);
    this.setWeaponsSuit(this.curRole, "sef", this.soulEff, this.suitEff2);
    this.setWeaponEffect(this.curRole, "wsef", this.soulEff, this.suitEff5);
    this.setWeaponEffect(this.curRole, "bodyEffect", this.bodyEff, this.suitEff7, 2);
  };
  _0x52d877.prototype.setSuit = function (_0x133af0, _0x23d396, _0x1d5e91) {
    {
      DisplayUtils.removeFromParent(_0x1d5e91);
      _0x133af0 = SubRoles.ins().getSubRoleByIndex(_0x133af0);
      _0x133af0 = _0x133af0.heirloom.getSuitConfig(_0x133af0);
      if (_0x133af0) {
        {
          _0x1d5e91.parent || _0x23d396.parent.addChildAt(_0x1d5e91, _0x23d396.parent.getChildIndex(_0x23d396));
          _0x1d5e91.playFile(RES_DIR_EFF + GlobalConfig.HeirloomEquipSetConfig[_0x133af0.lv].neff, -1);
        }
      }
    }
  };
  _0x52d877.prototype.setMatrixEff = function (_0x3c9788) {
    this.suitEff11 || (this.suitEff11 = new MovieClip());
    this.suitEff11.parent || this.bodyFzEff.addChild(this.suitEff11);
    _0x3c9788 = MatrixInfoModel.ins().getHuanHuaIndex(_0x3c9788);
    0 == _0x3c9788 ? DisplayUtils.removeFromParent(this.suitEff11) : this.suitEff11.playFile("" + RES_DIR_EFF + GlobalConfig.DemonCirBaseConfig[_0x3c9788].show, -1);
  };
  _0x52d877.prototype.setWeaponsSuit = function (_0x322611, _0x3d44c9, _0x4f6668, _0x5ce930) {
    _0x322611 = SubRoles.ins().getSubRoleByIndex(_0x322611);
    _0x5ce930.x = this[_0x3d44c9 + _0x322611.job].x;
    _0x5ce930.y = this[_0x3d44c9 + _0x322611.job].y;
    _0x5ce930.rotation = this[_0x3d44c9 + _0x322611.job].rotation;
    DisplayUtils.removeFromParent(_0x5ce930);
    _0x3d44c9 = _0x322611.weapons.weaponsId;
    !_0x322611.hideWeapons() && _0x3d44c9 && (_0x5ce930.parent || _0x4f6668.addChild(_0x5ce930), _0x5ce930.playFile(RES_DIR_EFF + GlobalConfig.WeaponSoulConfig[_0x3d44c9].inside[_0x322611.job - 1], -1));
  };
  _0x52d877.prototype.setWeaponEffect = function (_0x32840b, _0x528674, _0x247274, _0xf1a212, _0x1c37ca) {
    undefined === _0x1c37ca && (_0x1c37ca = 0);
    _0x32840b = SubRoles.ins().getSubRoleByIndex(_0x32840b);
    var _0x5be7be = _0x32840b.getEquipByIndex(_0x1c37ca).item.configID;
    var _0x579c95 = Dress.ins().PosToZbPos(_0x1c37ca);
    var _0x2e0221 = _0x32840b.zhuangbei;
    _0x2e0221[_0x579c95 - 1] && (_0x5be7be = Dress.ins().getZhuangBanEffId(_0x1c37ca, _0x32840b.sex, _0x2e0221));
    _0x5be7be = GlobalConfig.EquipWithEffConfig[_0x5be7be + "_" + _0x32840b.sex];
    DisplayUtils.removeFromParent(_0xf1a212);
    2 == _0x1c37ca && (this.nextBodyImg.visible = this.bodyImg.visible = true);
    0 == _0x1c37ca && (this.nextWeaponImg.visible = this.weaponImg.visible = true);
    _0xf1a212 == this.suitEff5 ? (0 == _0x32840b.sex ? DisplayUtils.removeFromParent(this.suitEff9) : _0xf1a212 = this.suitEff9, _0x5be7be && (this.weaponImg.visible = false)) : _0xf1a212 == this.suitEff6 ? (0 == _0x32840b.sex ? DisplayUtils.removeFromParent(this.suitEff10) : _0xf1a212 = this.suitEff10, _0x5be7be && (this.nextWeaponImg.visible = false)) : _0xf1a212 == this.suitEff7 ? _0x5be7be && (this.bodyImg.visible = false) : _0xf1a212 == this.suitEff8 && _0x5be7be && (this.nextBodyImg.visible = false);
    !_0x5be7be || 0 != _0x1c37ca && 2 != _0x1c37ca ? DisplayUtils.removeFromParent(_0xf1a212) : (_0xf1a212.x = this[_0x528674 + _0x32840b.sex].x + _0x5be7be.offX, _0xf1a212.y = this[_0x528674 + _0x32840b.sex].y + _0x5be7be.offY, _0xf1a212.rotation = this[_0x528674 + _0x32840b.sex].rotation, _0xf1a212.scaleX = _0xf1a212.scaleY = _0x5be7be.scaling, _0xf1a212.playFile(RES_DIR_EFF + _0x5be7be.inShowEff, -1), _0x247274.addChild(_0xf1a212));
  };
  _0x52d877.prototype.getZhuangbanById = function (_0x54df74) {
    {
      for (var _0xd1d895 in GlobalConfig.ZhuangBanId) if (GlobalConfig.ZhuangBanId[_0xd1d895].id == _0x54df74) {
        return GlobalConfig.ZhuangBanId[_0xd1d895];
      }
      return null;
    }
  };
  _0x52d877.prototype.setFashionRetPoint = function () {
    {
      this.fashionPoint && (this.fashionPoint.visible = Dress.ins().redPoint());
    }
  };
  _0x52d877.prototype.onClick = function (_0x10dcb9) {
    switch (_0x10dcb9.currentTarget) {
      case this.juesexiangxi:
        ViewManager.ins().open(RoleAttrWin, this.curRole);
        break;
      case this.oneKeyChange:
        UserRole.ins().checkHaveCan(true, this.curRole);
        this.setCanChange();
        SoundUtil.ins().playEffect(SoundUtil.EQUIP);
        SoundUtil.ins().playEffect(SoundUtil.EQUIP);
        break;
      case this.roleInfoItem0:
        ViewManager.ins().open(SpecialRingWin, 0, this.curRole);
        break;
      case this.roleInfoItem1:
        ViewManager.ins().open(SpecialRingWin, 1, this.curRole);
        break;
      case this.shuzhuang:
        ViewManager.ins().open(DressWin, this.curRole);
        break;
      case this.shenlu:
        ViewManager.ins().open(TreasureWin, 0, this.curRole);
        break;
      case this.orange:
        ViewManager.ins().open(AdvanEquipWin, 0, 0);
        this.setRetPoint();
        break;
      case this.heirloom:
        ViewManager.ins().open(HeirloomView, this.curRole);
        break;
      case this.item88:
        ViewManager.ins().open(longfengEquipDetailedWin, this.curRole);
        break;
      case this.rune:
        ViewManager.ins().open(kuozhanpal, this.curRole);
        break;
      case this.bless0:
        SpecialRing.ins().isFireRingFuse() ? ViewManager.ins().open(FireRingWin) : SpecialRing.ins().checkRingOpen() ? ViewManager.ins().open(RingInfoView) : UserTips.ins().showTips(LanguageUtils.language_Role_Desc_94);
        break;
      case this.bless1:
        break;
      case this.longzhuang:
        break;
      case this.moitem:
        ViewManager.ins().open(MORoleWin);
        break;
      default:
        _0x10dcb9 = this.equips.indexOf(_0x10dcb9.currentTarget);
        0 <= _0x10dcb9 && (8 < _0x10dcb9 || ViewManager.ins().open(RoleChooseEquipWin, this.curRole, _0x10dcb9));
    }
  };
  _0x52d877.prototype.setWing = function (_0x36395d, _0x392026) {
    undefined === _0x36395d && (_0x36395d = this.curRole);
    undefined === _0x392026 && (_0x392026 = this.wingImg);
    _0x392026.source = null;
    var _0x2bfdf1 = SubRoles.ins().getSubRoleByIndex(_0x36395d).wingsData;
    _0x36395d = SubRoles.ins().getSubRoleByIndex(_0x36395d).zhuangbei[2];
    if (_0x392026.visible = true, this.wingMc && this.wingMc.parent && (this.wingMc.parent.removeChild(this.wingMc), this.wingMc = null), 0 < _0x36395d) {
      {
        if (_0x2bfdf1 = this.getZhuangbanById(_0x36395d).cost.itemId, _0x2bfdf1 = GlobalConfig.EquipWithEffConfig[_0x2bfdf1 + "_0"], 0 < GlobalConfig.ZhuangBanId[_0x36395d] || _0x2bfdf1) {
          {
            if (_0x392026.visible = false, this.wingMc || (this.wingMc = new MovieClip()), this.wingMc.x = 280, this.wingMc.y = 300, this.wingMc.playFile(RES_DIR_EFF + _0x2bfdf1.inShowEff, -1), _0x392026.parent && _0x392026.parent.addChildAt(this.wingMc, _0x392026.parent.getChildIndex(_0x392026)), this.bodyImg.visible) {
              {
                _0x2bfdf1 = this.bodyImg.parent.getChildIndex(this.bodyImg);
                this.wingMc.parent.setChildIndex(this.wingMc, _0x2bfdf1 - 1);
              }
            }
            this.standBodyMc && (_0x2bfdf1 = this.standBodyMc.parent.getChildIndex(this.standBodyMc), this.wingMc.parent.setChildIndex(this.wingMc, _0x2bfdf1 - 1));
          }
        } else {
          _0x392026.visible = true;
          _0x392026.source = GlobalConfig.ZhuangBanId[_0x36395d].res + "_png";
        }
      }
    } else {
      {
        _0x2bfdf1.openStatus ? (_0x392026.visible = true, _0x392026.source = GlobalConfig.WingLevelConfig[_0x2bfdf1.lv].appearance + "_png") : _0x392026.source = "";
      }
    }
  };
  _0x52d877.prototype.delayRedPoint = function () {
    TimerManager.ins().isExists(this.setRetPoint, this) || TimerManager.ins().doTimer(60, 1, this.setRetPoint, this);
  };
  _0x52d877.prototype.setRetPoint = function () {
    for (var _0x25d94e = 0; 2 > _0x25d94e; _0x25d94e++) {
      var _0x11c25d = SubRoles.ins().getSubRoleByIndex(this.curRole);
      var _0x11c25d = UserRole.ins().roleHintCheck(_0x11c25d, _0x25d94e);
      this["roleInfoItem" + _0x25d94e].setRedPointVisibel(_0x11c25d);
    }
    for (var _0x11c25d = false, _0x46dfd4 = SubRoles.ins().subRolesLen, _0x2738c1 = 0; _0x46dfd4 > _0x2738c1; _0x2738c1++) {
      for (var _0x231f08 = SubRoles.ins().getSubRoleByIndex(_0x2738c1), _0x25d94e = 0; 8 > _0x25d94e; _0x25d94e++) {
        if (_0x11c25d = UserEquip.ins().setOrangeEquipItemState(_0x25d94e, _0x231f08), !_0x11c25d && 2 > _0x25d94e && (_0x11c25d = UserEquip.ins().setLegendEquipItemState(0 < _0x25d94e ? 2 : 0, _0x231f08)), _0x11c25d) {
          var _0xfb7b28 = UserBag.ins().checkEqRedPoint(_0x25d94e, _0x231f08);
          var _0x11c25d = null != _0xfb7b28 ? _0xfb7b28 : _0x11c25d;
        }
        if (_0x11c25d) {
          {
            break;
          }
        }
      }
      if (_0x11c25d) {
        break;
      }
    }
    (_0x11c25d || (_0x11c25d = UserEquip.ins().checkRedPointEx(5, this.curRole)), _0x11c25d || (_0x11c25d = UserBag.ins().getLegendHasResolve()), _0x11c25d) || (_0x11c25d = 0 < UserBag.ins().getLegendOutEquips().length);
    _0x11c25d || (_0x11c25d = !!UserBag.ins().getHuntGoods(0).length);
    _0x11c25d || (_0x11c25d = ExtremeEquipModel.ins().getRedPoint());
    this.orangeRedPoint.visible = _0x11c25d;
    this.heirloomRedPoint.visible = Heirloom.ins().checkRedPoint();
    this.updateLoongSoul();
    this.ringRedPoint.visible = OpenSystem.ins().checkSysOpen(SystemType.RING) && (SpecialRing.ins().checkHaveUpRing() || SpecialRing.ins().isCanStudySkill() || SpecialRing.ins().isCanUpgradeSkill() || SpecialRing.ins().fireRingRedPoint() || LyMark.ins().checkRed());
    this.zwRedPoint.visible = RuneRedPointMgr.ins().checkAllSituation(false);
    this.setCanChange();
  };
  _0x52d877.prototype.setSamsaraRedPoint = function () {
    if (SamsaraModel.ins().isOpen()) {
      {
        for (var _0x57b440 = EquipPos.HAT; _0x57b440 < EquipPos.MAX; _0x57b440++) {
          var _0x58f80d = this["redPoint" + _0x57b440];
          var _0x2a007a = SubRoles.ins().getSubRoleByIndex(this.curRole);
          0 < _0x2a007a.getEquipByIndex(_0x57b440).soulLv ? this["item" + _0x57b440].setSoul(true) : this["item" + _0x57b440].setSoul(false);
          _0x58f80d.visible || (_0x58f80d.visible = SamsaraModel.ins().checkEquipPosCanAddSpirit(_0x2a007a, _0x57b440) || SamsaraModel.ins().checkUpgradeSoul(_0x2a007a, _0x57b440));
        }
      }
    }
    for (_0x453ef5 = 9; 13 > _0x453ef5; _0x453ef5++) {
      {
        this["item" + _0x453ef5].visible = SamsaraModel.ins().isOpen();
      }
    }
  };
  _0x52d877.prototype.setCanChange = function (_0x261339) {
    {
      _0x261339 = _0x261339 ? _0x261339[this.curRole] ? _0x261339[this.curRole] : [] : UserRole.ins().canChangeEquips[this.curRole];
      var _0x55d2cd = false;
      var _0x17564e = this.equips.length;
      DisplayUtils.removeFromParent(this.eff);
      for (var _0x1a88fd = 0; _0x17564e > _0x1a88fd; _0x1a88fd++) {
        this["redPoint" + _0x1a88fd].visible = _0x261339[_0x1a88fd] ? _0x261339[_0x1a88fd] : false;
        _0x55d2cd || (_0x55d2cd = _0x261339[_0x1a88fd] ? _0x261339[_0x1a88fd] : false);
      }
      this.updateOneKey(_0x55d2cd);
      this.setSamsaraRedPoint();
    }
  };
  _0x52d877.prototype.updateOneKey = function (_0x7b9c62) {
    return OpenSystem.ins().checkSysOpen(SystemType.ONEKEY) ? (this.oneKeyChange.visible = _0x7b9c62, void (this.oneKeyChange.visible ? (this.eff.playFile(RES_DIR_EFF + "chargeff1", -1), this.eff.parent || this.effGroup.addChild(this.eff)) : DisplayUtils.removeFromParent(this.eff))) : void (this.oneKeyChange.visible = false);
  };
  _0x52d877.prototype.getEquipItem = function (_0x490fe9) {
    return this.equips[_0x490fe9];
  };
  _0x52d877.prototype.setSuitEquips = function () {
    {
      for (var _0x4a42d2 = SubRoles.ins().getSubRoleByIndex(this.curRole), _0x10098e = 0; _0x10098e < UserEquip.FOEGE_MAX; _0x10098e++) {
        {
          var _0x3b065e = this.equips[_0x10098e];
          var _0x23f041 = _0x4a42d2.heirloom.getInfoBySolt(_0x10098e);
          _0x3b065e && 0 < _0x23f041.lv ? _0x3b065e.setItemHeirloomBgImg(true, _0x23f041.image) : _0x3b065e.setItemHeirloomBgImg(false);
        }
      }
    }
  };
  return _0x52d877;
}(BaseView);
__decorate([callLater], RoleInfoPanel.prototype, "updataEquip", null);
__reflect(RoleInfoPanel.prototype, "RoleInfoPanel");
var Dress = function (_0x4972bc) {
  function _0x52fa6d() {
    var _0x1bc1c2 = _0x4972bc.call(this) || this;
    _0x1bc1c2.timeInfo = {};
    _0x1bc1c2.posInfo = [];
    _0x1bc1c2.careerDic = {};
    _0x1bc1c2.itemIdDic = {};
    _0x1bc1c2.sysId = PackageID.Dress;
    _0x1bc1c2.regNetMsg(1, _0x1bc1c2.doDressInfo);
    _0x1bc1c2.regNetMsg(2, _0x1bc1c2.doDressActivationRes);
    _0x1bc1c2.regNetMsg(3, _0x1bc1c2.doDressUserRes);
    _0x1bc1c2.regNetMsg(4, _0x1bc1c2.doUnDressUserRes);
    _0x1bc1c2.regNetMsg(5, _0x1bc1c2.doDressTimeEnd);
    _0x1bc1c2.regNetMsg(6, _0x1bc1c2.postLevelUp);
    _0x1bc1c2.regNetMsg(7, _0x1bc1c2.postAddTime);
    _0x1bc1c2.regNetMsg(8, _0x1bc1c2.postlfquanju);
    return _0x1bc1c2;
  }
  __extends(_0x52fa6d, _0x4972bc);
  _0x52fa6d.ins = function () {
    return _0x4972bc.ins.call(this);
  };
  _0x52fa6d.prototype.sendDressInfoReq = function () {
    this.sendBaseProto(1);
  };
  _0x52fa6d.prototype.postlfquanju = function (_0x4be14f) {
    {
      this.parserlfqj(_0x4be14f);
      _0x52fa6d.ins().postDresslfqjInfo();
    }
  };
  _0x52fa6d.prototype.parserlfqj = function (_0x1adcf1) {
    var _0x594f8c = _0x1adcf1.readInt();
    console.log(_0x594f8c);
    this.lfInfo = {};
    for (var _0x4972bc = 1; _0x4972bc <= _0x594f8c; _0x4972bc++) {
      var _0x29fb24 = _0x1adcf1.readInt();
      this.lfInfo[_0x29fb24] = {};
      for (x = 1; 4 > x; x++) {
        var _0x5e4fee = new DressTimeInfo();
        _0x5e4fee.id = x;
        _0x5e4fee.lv = _0x1adcf1.readInt();
        this.lfInfo[_0x29fb24][x] = _0x5e4fee;
      }
    }
  };
  _0x52fa6d.prototype.postDresslfqjInfo = function () {};
  _0x52fa6d.prototype.doDressInfo = function (_0x43968e) {
    this.parser(_0x43968e);
    _0x52fa6d.ins().postDressInfo();
  };
  _0x52fa6d.prototype.sendDressActivationReq = function (_0x69e9c) {
    var _0x5e466d = this.getBytes(2);
    _0x5e466d.writeInt(_0x69e9c);
    this.sendToServer(_0x5e466d);
  };
  _0x52fa6d.prototype.MozhuangLevelUp = function (_0x191196) {
    var _0x411ec8 = this.getBytes(6);
    _0x411ec8.writeInt(_0x191196);
    this.sendToServer(_0x411ec8);
  };
  _0x52fa6d.prototype.postLineChange = function () {};
  _0x52fa6d.prototype.sendDressActivationReq = function (_0x1fb412) {
    {
      var _0x1c81e0 = this.getBytes(2);
      _0x1c81e0.writeInt(_0x1fb412);
      _0x1c81e0.writeInt(1);
      this.sendToServer(_0x1c81e0);
    }
  };
  _0x52fa6d.prototype.MozhuangUserReq = function (_0x58c4d7, _0x3e3056) {
    var _0xe7b825 = this.getBytes(2);
    _0xe7b825.writeInt(_0x58c4d7);
    _0xe7b825.writeInt(_0x3e3056);
    this.sendToServer(_0xe7b825);
  };
  _0x52fa6d.prototype.JiezhikongjianLevelUp = function (_0xde9308) {
    {
      var _0x4e4848 = this.getBytes(6);
      _0x4e4848.writeInt(_0xde9308);
      this.sendToServer(_0x4e4848);
    }
  };
  _0x52fa6d.prototype.JiezhikongjianUserReq = function (_0x1be84d, _0x4dac1f) {
    var _0x2680d0 = this.getBytes(2);
    _0x2680d0.writeInt(_0x1be84d);
    _0x2680d0.writeInt(_0x4dac1f);
    this.sendToServer(_0x2680d0);
  };
  _0x52fa6d.prototype.ShenzhuhunLevelUp = function (_0x28a7f6) {
    {
      var _0x215a58 = this.getBytes(6);
      _0x215a58.writeInt(_0x28a7f6);
      this.sendToServer(_0x215a58);
    }
  };
  _0x52fa6d.prototype.ShenzhuhunUserReq = function (_0x1d57a5, _0x11b723) {
    var _0xb414cb = this.getBytes(2);
    _0xb414cb.writeInt(_0x1d57a5);
    _0xb414cb.writeInt(_0x11b723);
    this.sendToServer(_0xb414cb);
  };
  _0x52fa6d.prototype.longfengDressInfoReq = function (_0x75bc06) {
    {
      var _0x1fbb4c = this.getBytes(7);
      _0x1fbb4c.writeInt(_0x75bc06);
      this.sendToServer(_0x1fbb4c);
    }
  };
  _0x52fa6d.prototype.longfengbsDressInfoReq = function (_0x3aeeee) {
    var _0x9bf209 = this.getBytes(8);
    _0x9bf209.writeInt(_0x3aeeee);
    this.sendToServer(_0x9bf209);
  };
  _0x52fa6d.prototype.longfengfhDressInfoReq = function (_0x16ce75) {
    {
      var _0xd15ba1 = this.getBytes(9);
      _0xd15ba1.writeInt(_0x16ce75);
      this.sendToServer(_0xd15ba1);
    }
  };
  _0x52fa6d.prototype.LonghunitemLevelUp = function (_0x5df405) {
    var _0x2d0fa6 = this.getBytes(6);
    _0x2d0fa6.writeInt(_0x5df405);
    this.sendToServer(_0x2d0fa6);
  };
  _0x52fa6d.prototype.LonghunitemUserReq = function (_0x124641, _0x1a02d0) {
    {
      var _0xd39e9e = this.getBytes(2);
      _0xd39e9e.writeInt(_0x124641);
      _0xd39e9e.writeInt(_0x1a02d0);
      this.sendToServer(_0xd39e9e);
    }
  };
  _0x52fa6d.prototype.TutengLevelUp = function (_0x2b37aa) {
    var _0x1dc250 = this.getBytes(6);
    _0x1dc250.writeInt(_0x2b37aa);
    this.sendToServer(_0x1dc250);
  };
  _0x52fa6d.prototype.TutengReq = function (_0x555099, _0x11cbcc) {
    {
      var _0x7c4aed = this.getBytes(2);
      _0x7c4aed.writeInt(_0x555099);
      _0x7c4aed.writeInt(_0x11cbcc);
      this.sendToServer(_0x7c4aed);
    }
  };
  _0x52fa6d.prototype.ChangqiongLevelUp = function (_0x1ba1d3) {
    var _0x447af9 = this.getBytes(6);
    _0x447af9.writeInt(_0x1ba1d3);
    this.sendToServer(_0x447af9);
  };
  _0x52fa6d.prototype.ChangqiongUserReq = function (_0x51ea5d, _0x5c11a1) {
    var _0x397c61 = this.getBytes(2);
    _0x397c61.writeInt(_0x51ea5d);
    _0x397c61.writeInt(_0x5c11a1);
    this.sendToServer(_0x397c61);
  };
  _0x52fa6d.prototype.MojiestLevelUp = function (_0x2ba104) {
    {
      var _0x4adc48 = this.getBytes(6);
      _0x4adc48.writeInt(_0x2ba104);
      this.sendToServer(_0x4adc48);
    }
  };
  _0x52fa6d.prototype.MojiestUserReq = function (_0x3594a8, _0x151b95) {
    var _0x373063 = this.getBytes(2);
    _0x373063.writeInt(_0x3594a8);
    _0x373063.writeInt(_0x151b95);
    this.sendToServer(_0x373063);
  };
  _0x52fa6d.prototype.MirshimoshenLevelUp = function (_0x1938e1) {
    var _0x1dc562 = this.getBytes(6);
    _0x1dc562.writeInt(_0x1938e1);
    this.sendToServer(_0x1dc562);
  };
  _0x52fa6d.prototype.MirshimoshenUserReq = function (_0x43ee6a, _0x53ece7) {
    var _0x55db5a = this.getBytes(2);
    _0x55db5a.writeInt(_0x43ee6a);
    _0x55db5a.writeInt(_0x53ece7);
    this.sendToServer(_0x55db5a);
  };
  _0x52fa6d.prototype.ZodiacLevelUp = function (_0x18e6a7) {
    {
      var _0x5efae3 = this.getBytes(6);
      _0x5efae3.writeInt(_0x18e6a7);
      this.sendToServer(_0x5efae3);
    }
  };
  _0x52fa6d.prototype.ZodiacUserReq = function (_0x43f849, _0x26d4d8) {
    var _0x27ea83 = this.getBytes(2);
    _0x27ea83.writeInt(_0x43f849);
    _0x27ea83.writeInt(_0x26d4d8);
    this.sendToServer(_0x27ea83);
  };
  _0x52fa6d.prototype.SwallowLevelUp = function (_0x4424b8) {
    var _0x522cbf = this.getBytes(6);
    _0x522cbf.writeInt(_0x4424b8);
    this.sendToServer(_0x522cbf);
  };
  _0x52fa6d.prototype.SwallowUserReq = function (_0x13d151, _0x7ee0d3) {
    {
      var _0x5dbd08 = this.getBytes(2);
      _0x5dbd08.writeInt(_0x13d151);
      _0x5dbd08.writeInt(_0x7ee0d3);
      this.sendToServer(_0x5dbd08);
    }
  };
  _0x52fa6d.prototype.doDressActivationRes = function (_0x481ca6) {
    this.parserAct(_0x481ca6);
    _0x52fa6d.ins().postJiHuo();
    UserTips.ins().showTips("|C:0xffffff&T:|");
  };
  _0x52fa6d.prototype.sendDressUserReq = function (_0x18e16d, _0x4b8384) {
    var _0x4b847e = this.getBytes(3);
    _0x4b847e.writeByte(_0x18e16d);
    _0x4b847e.writeInt(_0x4b8384);
    this.sendToServer(_0x4b847e);
  };
  _0x52fa6d.prototype.doDressUserRes = function (_0x2e7f0c) {
    this.parserDress(_0x2e7f0c);
    _0x52fa6d.ins().postDressInfo();
    UserTips.ins().showTips("|C:0xffffff&T:幻化形象成功|");
  };
  _0x52fa6d.prototype.sendUnDressUserReq = function (_0x1798b7, _0x3c4be6) {
    var _0x590cbf = this.getBytes(4);
    _0x590cbf.writeByte(_0x1798b7);
    _0x590cbf.writeInt(_0x3c4be6);
    this.sendToServer(_0x590cbf);
  };
  _0x52fa6d.prototype.doUnDressUserRes = function (_0x183623) {
    {
      this.parserDress(_0x183623);
      _0x52fa6d.ins().postDressInfo();
      UserTips.ins().showTips("|C:0xffffff&T:取消幻化形象成功|");
    }
  };
  _0x52fa6d.prototype.doDressTimeEnd = function (_0x2e8230) {
    {
      this.parserDel(_0x2e8230);
      _0x52fa6d.ins().postDressInfo();
    }
  };
  _0x52fa6d.prototype.parser = function (_0x24efcb) {
    {
      var _0x225fb8 = _0x24efcb.readInt();
      this.timeInfo = {};
      for (var _0x4972bc = 0; _0x225fb8 > _0x4972bc; _0x4972bc++) {
        var _0x158dac = new DressTimeInfo();
        _0x158dac.dressId = _0x24efcb.readInt();
        _0x158dac.invalidtime = _0x24efcb.readInt();
        _0x158dac.lv = _0x24efcb.readInt();
        this.timeInfo[_0x158dac.dressId] = _0x158dac;
      }
      _0x225fb8 = _0x24efcb.readByte();
      this.posInfo = [];
      for (_0x4972bc = 0; _0x225fb8 > _0x4972bc; _0x4972bc++) {
        for (var _0x158dac = new DressPosInfo(), _0x14d647 = 0; 3 > _0x14d647; _0x14d647++) {
          _0x158dac.posAry[_0x14d647] = _0x24efcb.readInt();
        }
        this.posInfo.push(_0x158dac);
      }
    }
  };
  _0x52fa6d.prototype.parserAct = function (_0xdbb8ec) {
    {
      var _0x1696e1 = new DressTimeInfo();
      _0x1696e1.dressId = _0xdbb8ec.readInt();
      _0x1696e1.invalidtime = _0xdbb8ec.readInt();
      _0x1696e1.lv = _0xdbb8ec.readInt();
      this.timeInfo[_0x1696e1.dressId] = _0x1696e1;
    }
  };
  _0x52fa6d.prototype.parserDress = function (_0x52454b) {
    {
      var _0x2c2fd8 = _0x52454b.readByte();
      var _0x4972bc = this.posInfo[_0x2c2fd8];
      var _0x345103 = _0x52454b.readByte();
      _0x52454b = _0x52454b.readInt();
      _0x4972bc && (_0x4972bc.posAry[_0x345103 - 1] = _0x52454b);
      _0x2c2fd8 = SubRoles.ins().getSubRoleByIndex(_0x2c2fd8);
      _0x2c2fd8.zhuangbei[_0x345103 - 1] = _0x52454b;
      1 == _0x345103 || 2 == _0x345103 ? UserEquip.ins().postEquipChange() : _0x52fa6d.ins().postChangeWing();
      (_0x345103 = EntityManager.ins().getEntityByHandle(_0x2c2fd8.handle)) && _0x345103.updateModel();
    }
  };
  _0x52fa6d.prototype.parserDel = function (_0x49dc6d) {
    {
      _0x49dc6d = _0x49dc6d.readInt();
      delete this.timeInfo[_0x49dc6d];
      for (var _0x23ea0b = 0; _0x23ea0b < this.posInfo.length; _0x23ea0b++) {
        for (var _0x4972bc = this.posInfo[_0x23ea0b], _0x50728a = 0; 3 > _0x50728a; _0x50728a++) {
          if (_0x4972bc.posAry[_0x50728a] == _0x49dc6d) {
            _0x4972bc.posAry[_0x50728a] = 0;
            _0x4972bc = SubRoles.ins().getSubRoleByIndex(_0x23ea0b);
            _0x4972bc.zhuangbei[_0x50728a] = 0;
            0 == _0x50728a || 1 == _0x50728a ? UserEquip.ins().postEquipChange() : _0x52fa6d.ins().postChangeWing();
            (_0x50728a = EntityManager.ins().getEntityByHandle(_0x4972bc.handle)) && _0x50728a.updateModel();
            break;
          }
        }
      }
    }
  };
  _0x52fa6d.prototype.getModelPosId = function (_0x145a42) {
    {
      return this.posInfo[_0x145a42];
    }
  };
  _0x52fa6d.prototype.redPoint = function () {
    return this.careerRedPoint();
  };
  _0x52fa6d.prototype.careerRedPoint = function () {
    for (var _0x3c28fa = 0; _0x3c28fa < SubRoles.ins().subRolesLen; _0x3c28fa++) {
      var _0x5b2559 = SubRoles.ins().getSubRoleByIndex(_0x3c28fa).job;
      var _0x5b2559 = this.getIdByCareer(_0x5b2559);
      var _0x4972bc;
      for (_0x4972bc in _0x5b2559) for (var _0x59d98a = 0, _0x286c67 = _0x5b2559[_0x4972bc]; _0x59d98a < _0x286c67.length; _0x59d98a++) {
        if (this.redPointDress(_0x286c67[_0x59d98a].id)) {
          return true;
        }
      }
    }
    return false;
  };
  _0x52fa6d.prototype.curRoleRedPoint = function (_0xecd03) {
    return this.roleRedPoint()[_0xecd03];
  };
  _0x52fa6d.prototype.roleRedPoint = function () {
    {
      for (var _0x1615bd = [false, false, false], _0x5e0214 = SubRoles.ins().subRolesLen, _0x4972bc = 0; _0x5e0214 > _0x4972bc; _0x4972bc++) {
        var _0x39171f = SubRoles.ins().getSubRoleByIndex(_0x4972bc).job;
        var _0x39171f = this.getIdByCareer(_0x39171f);
        var _0x4501da;
        for (_0x4501da in _0x39171f) {
          for (var _0x488acb = 0, _0x43d5e2 = _0x39171f[_0x4501da]; _0x488acb < _0x43d5e2.length; _0x488acb++) {
            if (this.redPointDress(_0x43d5e2[_0x488acb].id)) {
              _0x1615bd[_0x4972bc] = true;
              break;
            }
          }
          if (_0x1615bd[_0x4972bc]) {
            break;
          }
        }
      }
      return _0x1615bd;
    }
  };
  _0x52fa6d.prototype.canDress = function (_0x19adb6, _0x482e90) {
    if (_0x482e90 == DressType.WING && 16 >= Actor.level) {
      return false;
    }
    _0x19adb6 = this.getIdByCareer(_0x19adb6)[_0x482e90];
    for (var _0x367d3c in _0x19adb6) if (this.redPointDress(_0x19adb6[_0x367d3c].id)) {
      return true;
    }
    return false;
  };
  _0x52fa6d.prototype.posRedPoint = function () {
    {
      for (var _0x499a59 = [false, false, false], _0x502f0a = SubRoles.ins().subRolesLen, _0x4972bc = 0; _0x502f0a > _0x4972bc; _0x4972bc++) {
        for (var _0x5ef515 = SubRoles.ins().getSubRoleByIndex(_0x4972bc).job, _0x5ef515 = this.getIdByCareer(_0x5ef515), _0xfcd9d4 = 0; 3 > _0xfcd9d4; _0xfcd9d4++) {
          if (!_0x499a59[_0xfcd9d4]) {
            for (var _0x318ad1 = 0, _0xf649ad = _0x5ef515[_0xfcd9d4 + 1]; _0x318ad1 < _0xf649ad.length; _0x318ad1++) {
              if (this.redPointDress(_0xf649ad[_0x318ad1].id)) {
                {
                  _0x499a59[_0xfcd9d4] = true;
                  break;
                }
              }
            }
          }
        }
      }
      return _0x499a59;
    }
  };
  _0x52fa6d.prototype.getIdByCareer = function (_0x4aafc1) {
    {
      return this.careerDic[_0x4aafc1] ? this.careerDic[_0x4aafc1] : (this.initConfig(), this.careerDic[_0x4aafc1]);
    }
  };
  _0x52fa6d.prototype.getIdByItemId = function (_0x1836b4) {
    return this.itemIdDic[_0x1836b4] ? this.itemIdDic[_0x1836b4] : (this.initConfig(), this.itemIdDic[_0x1836b4]);
  };
  _0x52fa6d.prototype.initConfig = function () {
    if (!Object.keys(this.itemIdDic).length) {
      {
        var _0x398963 = GlobalConfig.ZhuangBanId;
        var _0x156851;
        for (_0x156851 in _0x398963) {
          var _0x4972bc = _0x398963[_0x156851];
          var _0x3dc253 = _0x4972bc.roletype;
          var _0x4eb3e6 = _0x4972bc.pos;
          this.careerDic[_0x3dc253] = this.careerDic[_0x3dc253] || {};
          this.careerDic[_0x3dc253][_0x4eb3e6] = this.careerDic[_0x3dc253][_0x4eb3e6] || [];
          this.careerDic[_0x3dc253][_0x4eb3e6].push(_0x4972bc);
          _0x3dc253 = _0x4972bc.cost.itemId;
          this.itemIdDic[_0x3dc253] = this.itemIdDic[_0x3dc253] || [];
          this.itemIdDic[_0x3dc253].push(_0x4972bc);
        }
      }
    }
  };
  _0x52fa6d.prototype.redPointDress = function (_0x1b4662) {
    {
      var _0x566c48 = GlobalConfig.ZhuangBanId[_0x1b4662];
      if (_0x566c48.pos == DressType.WING && 16 >= Actor.level) {
        return false;
      }
      var _0x4972bc = _0x566c48.cost.itemId;
      var _0x561705 = UserBag.ins().getBagGoodsCountById(0, _0x4972bc);
      if (0 == _0x561705) {
        return false;
      }
      if (this.timeInfo[_0x1b4662]) {
        _0x566c48 = 0;
        for (_0x4972bc = this.getIdByItemId(_0x4972bc); _0x566c48 < _0x4972bc.length; _0x566c48++) {
          {
            var _0x4bd58e = _0x4972bc[_0x566c48];
            if (_0x4bd58e.id != _0x1b4662 && !this.timeInfo[_0x4bd58e.id]) {
              return false;
            }
          }
        }
        _0x566c48 = this.timeInfo[_0x1b4662].lv + 1;
        if ((_0x1b4662 = GlobalConfig.ZhuangBanLevelUp[_0x1b4662]) && _0x1b4662[_0x566c48] && _0x1b4662[_0x566c48].cost.num <= _0x561705) {
          return true;
        }
      } else {
        if (_0x561705 >= _0x566c48.cost.num) {
          return true;
        }
      }
      return false;
    }
  };
  _0x52fa6d.prototype.getIdZhuangBanId = function (_0x3bfd23) {
    {
      var _0x545fcb = GlobalConfig.ZhuangBanId;
      var _0x4972bc;
      for (_0x4972bc in _0x545fcb) if (_0x545fcb[_0x4972bc].cost.itemId == _0x3bfd23) {
        return _0x3bfd23;
      }
      return 0;
    }
  };
  _0x52fa6d.prototype.getZhuangBanEffId = function (_0x5c15eb, _0x1d547c, _0x1fa845) {
    var _0x2df421 = 0;
    var _0x1e877e = -1;
    switch (_0x5c15eb) {
      case 0:
        _0x1e877e = 1;
        break;
      case 2:
        _0x1e877e = 0;
    }
    _0x5c15eb = _0x1fa845[_0x1e877e];
    if (_0x5c15eb) {
      _0x5c15eb = GlobalConfig.ZhuangBanId[_0x5c15eb].cost.itemId;
      _0x2df421 = GlobalConfig.EquipWithEffConfig[_0x5c15eb + "_" + _0x1d547c] ? _0x5c15eb : _0x2df421;
    }
    return _0x2df421;
  };
  _0x52fa6d.prototype.PosToZbPos = function (_0x18ea5d) {
    {
      switch (_0x18ea5d) {
        case 0:
          _0x18ea5d = 2;
          break;
        case 2:
          _0x18ea5d = 1;
          break;
        default:
          _0x18ea5d = -1;
      }
      return _0x18ea5d;
    }
  };
  _0x52fa6d.prototype.sendLevelUp = function (_0x37fe75) {
    {
      var _0x30aa46 = this.getBytes(6);
      _0x30aa46.writeInt(_0x37fe75);
      this.sendToServer(_0x30aa46);
    }
  };
  _0x52fa6d.prototype.postLevelUp = function (_0x10287e) {
    {
      var _0x30c27b = _0x10287e.readInt();
      var _0x7046d1 = _0x10287e.readInt();
      _0x10287e = _0x10287e.readInt();
      _0x30c27b = this.timeInfo[_0x30c27b];
      _0x30c27b.invalidtime = _0x7046d1;
      _0x30c27b.lv = _0x10287e;
      this.postDressInfo();
    }
  };
  _0x52fa6d.prototype.sendAddTime = function (_0x2618c1) {
    var _0x132300 = this.getBytes(7);
    _0x132300.writeInt(_0x2618c1);
    this.sendToServer(_0x132300);
  };
  _0x52fa6d.prototype.postAddTime = function (_0x584a60) {
    var _0x31c717 = _0x584a60.readInt();
    var _0x4972bc = _0x584a60.readInt();
    _0x584a60 = _0x584a60.readInt();
    var _0x5021c8 = this.timeInfo[_0x31c717] || new DressTimeInfo();
    _0x5021c8.invalidtime = _0x4972bc;
    _0x5021c8.lv = _0x584a60;
    _0x5021c8.dressId = _0x31c717;
    this.timeInfo[_0x31c717] = _0x5021c8;
  };
  _0x52fa6d.prototype.postDressInfo = function () {};
  _0x52fa6d.prototype.postJiHuo = function () {};
  _0x52fa6d.prototype.postChangeWing = function () {};
  return _0x52fa6d;
}(BaseSystem);
__reflect(Dress.prototype, "Dress");
!function (_0x1bf530) {
  _0x1bf530.dress = Dress.ins.bind(Dress);
}(GameSystem || (GameSystem = {}));
var qinglongpal2223 = function (_0x4ac4be) {
  function _0x9d3458() {
    var _0x46823f = _0x4ac4be.call(this) || this;
    _0x46823f._cost = 0;
    _0x46823f.isTopLevel = true;
    _0x46823f.skinName = "qinglongskins223";
    _0x46823f._indexid = 0;
    return _0x46823f;
  }
  __extends(_0x9d3458, _0x4ac4be);
  _0x9d3458.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.closeMenus);
    SoundManager.ins().hao("");
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(Dress.ins().postDressInfo, this.Demomc);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.addTouchEvent(this.item0, this.closeMenu);
    this.addTouchEvent(this.item1, this.closeMenu);
    this.addTouchEvent(this.item2, this.closeMenu);
    this.addTouchEvent(this.item3, this.closeMenu);
    this.addTouchEvent(this.item4, this.closeMenu);
    this.addTouchEvent(this.item5, this.closeMenu);
    this.addTouchEvent(this.item6, this.closeMenu);
    this.addTouchEvent(this.item7, this.closeMenu);
    this.addTouchEvent(this.item8, this.closeMenu);
    this.addTouchEvent(this.item9, this.closeMenu);
    this.addTouchEvent(this.item10, this.closeMenu);
    this.addTouchEvent(this.item11, this.closeMenu);
    this.addTouchEvent(this.item12, this.closeMenu);
    this.addTouchEvent(this.item13, this.closeMenu);
    this.addTouchEvent(this.heopen, this.closeMenu);
    this.addTouchEvent(this.Upbntss, this.closeMenu);
    this.ringEff = null;
    this.ringEff1 = null;
    this._pY = -55533;
    this._curRole = 0;
    this.item0.Selecte.visible = 1;
    this.edata();
    this.Demomc();
  };
  _0x9d3458.prototype.sonChange = function (_0x23ad7a) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
      this.Demomc();
    }
  };
  _0x9d3458.prototype.getDressInfo = function () {
    {
      Dress.ins().sendDressInfoReq();
    }
  };
  _0x9d3458.prototype.Demomc = function () {
    this._pY = -55533;
    this.mcefat();
    var _0x510748 = this.Viewdata();
    if (_0x510748 < 1) {
      this._Hover = [FilterUtil.grayFilter];
    } else {
      {
        this._Hover = null;
      }
    }
    this.JIhuoeff();
  };
  _0x9d3458.prototype.JIhuoeff = function () {
    {
      this._pY = 450;
      this.ringEff || (this.ringEff = new MovieClip());
      this.ringEff.scaleX = 0.3;
      this.ringEff.scaleY = 0.3;
      this.ringEff.x = 290;
      this.ringEff.y = 350;
      this.shenshoueff.parent.addChild(this.ringEff);
      this.ringEff.playFile(RES_DIR_MONSTER + "csqm16w", -1);
      this.ringEff.filters = this._Hover;
      egret.Tween.removeTweens(this.ringEff);
      egret.Tween.get(this.ringEff, {
        loop: false
      }).to({
        scaleX: 0.5,
        scaleY: 0.5
      }, 1000).to({
        scaleX: 0.8,
        scaleY: 0.8
      }, 1000).to({
        scaleX: 1,
        scaleY: 1
      }, 1000).to({
        scaleX: 1.3,
        scaleY: 1.3
      }, 1000).to({
        visible: 0
      }, 1000);
      egret.setTimeout(this.mcefat, this, 5300);
    }
  };
  _0x9d3458.prototype.mcefat = function () {
    {
      this.ringEff1 || (this.ringEff1 = new MovieClip());
      this.ringEff1.scaleX = -1;
      this.ringEff1.scaleY = 1;
      this.ringEff1.x = 150;
      this.ringEff1.y = 200;
      this.shenshoueff1.parent.addChild(this.ringEff1);
      this.ringEff1.playFile(RES_DIR_MONSTER + "weapon984_1_eff", -1);
      this.ringEff1.filters = this._Hover;
    }
  };
  _0x9d3458.prototype.posattrset = function (_0x2066d0, _0x29c4f4) {
    {
      var _0x2d3d51 = {
        attr: [],
        exattr: []
      };
      if (_0x2066d0) {
        var _0x3bd6c6 = [];
        var _0x2dd336 = [];
        for (x = 0; x < _0x2066d0.type.length; x++) {
          {
            var _0x212e12 = {
              type: _0x817fbf.type = _0x2066d0.type[x],
              value: _0x29c4f4 < 1 ? 0 : parseInt(_0x2066d0.val[x]) + parseInt(_0x2066d0.exval[x] * (parseInt(_0x29c4f4) - 1))
            };
            var _0x817fbf = {};
            _0x817fbf.value = _0x29c4f4 < 1 ? _0x2066d0.val[x] : parseInt(_0x2066d0.val[x]) + parseInt(_0x2066d0.exval[x] * _0x29c4f4);
            _0x3bd6c6[x] = _0x212e12;
            _0x2dd336[x] = _0x817fbf;
          }
        }
        _0x2d3d51.attr = _0x3bd6c6;
        _0x2d3d51.exattr = _0x2dd336;
      }
      return _0x2d3d51;
    }
  };
  _0x9d3458.prototype.edata = function (_0x3f8746) {
    {
      var _0x584685 = GlobalConfig.qinglong22config;
      var _0x24beb3 = this.Listdate();
      var _0x4f53e1 = GlobalConfig.qinglongbase22config;
      var _0x2d38bf = 0;
      this._maxlv = _0x4f53e1.maxlv;
      this._openzs = _0x4f53e1.zslv;
      this._openday = _0x4f53e1.openday;
      for (var _0x2191ac = 0; _0x2191ac < _0x24beb3.length; _0x2191ac++) {
        var _0x16760d = _0x24beb3[_0x2191ac].lv;
        this["item" + _0x2191ac].Icon.source = _0x4f53e1.itemicon[_0x2191ac] + "_png";
        this["item" + _0x2191ac].lvNum.text = _0x16760d;
        this["BedEff" + _0x2191ac] || (this["BedEff" + _0x2191ac] = new MovieClip());
        this["BedEff" + _0x2191ac].scaleX = this["BedEff" + _0x2191ac].scaleY = 0.9;
        var _0x30e8d8 = _0x24beb3[_0x2191ac].id;
        var _0x1a1c30 = _0x584685[_0x30e8d8];
        var _0x234a5f = this.posattrset(_0x1a1c30, _0x16760d);
        if (_0x16760d < 1) {
          {
            this["BedEff" + _0x2191ac].x = -33335;
            this["BedEff" + _0x2191ac].y = -33336;
            this["item" + _0x2191ac].Icon.filters = [FilterUtil.grayFilter];
          }
        } else {
          {
            this["BedEff" + _0x2191ac].x = 35;
            this["BedEff" + _0x2191ac].y = 36;
            this["item" + _0x2191ac].Icon.filters = null;
            var _0x2d38bf = parseInt(_0x2d38bf) + UserBag.getAttrPower(AttributeData.transformAttr(_0x234a5f.attr));
          }
        }
        this["item" + _0x2191ac].klmaceff.parent.addChild(this["BedEff" + _0x2191ac]);
        this["BedEff" + _0x2191ac].playFile(RES_DIR_MANGHUANG + "longniankuaile", -1);
        if (_0x2191ac == this._indexid) {
          this._lv = _0x24beb3[_0x2191ac].lv;
          this._id = _0x24beb3[_0x2191ac].id;
          this._item = _0x1a1c30.itemid;
          this._count = _0x1a1c30.cost;
          this._uid = 105;
          this._usjid = 1000000;
          this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
          if (this._lv > 0) {
            this._count = parseInt(_0x1a1c30.cost) + parseInt(_0x1a1c30.excost * this._usjid);
          }
          this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x234a5f.attr), 0, 1, ": ");
          this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x234a5f.exattr), 0, 1, ": ");
          this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
          this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
          this.maxbox1.visible = 1;
          this.maxbox2.visible = 0;
        }
      }
      this.powerPanel.setPower(_0x2d38bf);
    }
  };
  _0x9d3458.prototype.Viewdata = function (_0x1055c5) {
    var _0x21c471 = this.Listdate();
    for (x = 0; x < _0x21c471.length; x++) {
      {
        if (_0x21c471[x].lv < 1) {
          {
            return 0;
            break;
          }
        }
      }
    }
    return 1;
  };
  _0x9d3458.prototype.Listdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0x5c8941 = GlobalConfig.qinglong22config;
    var _0x4ac4be = Dress.ins();
    this.listInfo = [];
    for (var _0x1dd239 in _0x5c8941) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x5c8941[_0x1dd239].roletype) {
      var _0x5971f9 = new DressItemInfo();
      var _0x64f7a6 = _0x5c8941[_0x1dd239];
      var _0x9c2290 = _0x64f7a6.id;
      _0x5971f9.lv = 0;
      _0x5971f9.id = _0x9c2290;
      _0x5971f9.job = _0x64f7a6.roletype;
      _0x4ac4be.timeInfo[_0x9c2290] && (_0x5971f9.timer = _0x4ac4be.timeInfo[_0x9c2290].invalidtime, _0x5971f9.lv = _0x4ac4be.timeInfo[_0x9c2290].lv);
      this.listInfo.push(_0x5971f9);
    }
    return this.listInfo;
  };
  _0x9d3458.prototype.closeMenu = function (_0x578d28) {
    {
      switch (_0x578d28.currentTarget) {
        case this.item0:
          this.ViewSelect(0);
          break;
        case this.item1:
          this.ViewSelect(1);
          break;
        case this.item2:
          this.ViewSelect(2);
          break;
        case this.item3:
          this.ViewSelect(3);
          break;
        case this.item4:
          this.ViewSelect(4);
          break;
        case this.item5:
          this.ViewSelect(5);
          break;
        case this.item6:
          this.ViewSelect(6);
          break;
        case this.item7:
          this.ViewSelect(7);
          break;
        case this.item8:
          this.ViewSelect(8);
          break;
        case this.item9:
          this.ViewSelect(9);
          break;
        case this.item10:
          this.ViewSelect(10);
          break;
        case this.item11:
          this.ViewSelect(11);
          break;
        case this.item12:
          this.ViewSelect(12);
          break;
        case this.item13:
          this.ViewSelect(13);
          break;
        case this.heopen:
          ViewManager.ins().open(DemphechengPanel, this._item);
          break;
        case this.Upbntss:
          if (UserZs.ins().lv < this._openzs) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
          }
          if (GameServer.serverOpenDay + 1 < this._openday) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
          }
          if (this._num < this._count) {
            void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
            return SoundManager.ins().playEffect("wupindaojubuzubgm");
          }
          if (this._lv >= this._maxlv) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
          }
          if (this._lv < 1) {
            {
              Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
            }
          } else {
            {
              Dress.ins().JiezhikongjianLevelUp(this._id);
            }
          }
      }
    }
  };
  _0x9d3458.prototype.ViewSelect = function (_0x25dec2) {
    for (x = 0; x < 14; x++) {
      if (_0x25dec2 == x) {
        {
          this["item" + x].Selecte.visible = 1;
        }
      } else {
        this["item" + x].Selecte.visible = 0;
      }
    }
    this._indexid = _0x25dec2;
    this.edata();
  };
  _0x9d3458.prototype.closeMenus = function (_0x17a9b4) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x9d3458;
}(BaseEuiView);
__reflect(qinglongpal2223.prototype, "qinglongpal2223");
ViewManager.ins().reg(qinglongpal2223, LayerManager.UI_Main);
var qinglongpal2224 = function (_0x4e995e) {
  function _0x35ff16() {
    var _0x5847ac = _0x4e995e.call(this) || this;
    _0x5847ac._cost = 0;
    _0x5847ac.isTopLevel = true;
    _0x5847ac.skinName = "qinglongskins223";
    _0x5847ac._indexid = 0;
    return _0x5847ac;
  }
  __extends(_0x35ff16, _0x4e995e);
  _0x35ff16.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.closeMenus);
    SoundManager.ins().hao("");
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(Dress.ins().postDressInfo, this.Demomc);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.addTouchEvent(this.item0, this.closeMenu);
    this.addTouchEvent(this.item1, this.closeMenu);
    this.addTouchEvent(this.item2, this.closeMenu);
    this.addTouchEvent(this.item3, this.closeMenu);
    this.addTouchEvent(this.item4, this.closeMenu);
    this.addTouchEvent(this.item5, this.closeMenu);
    this.addTouchEvent(this.item6, this.closeMenu);
    this.addTouchEvent(this.item7, this.closeMenu);
    this.addTouchEvent(this.item8, this.closeMenu);
    this.addTouchEvent(this.item9, this.closeMenu);
    this.addTouchEvent(this.item10, this.closeMenu);
    this.addTouchEvent(this.item11, this.closeMenu);
    this.addTouchEvent(this.item12, this.closeMenu);
    this.addTouchEvent(this.item13, this.closeMenu);
    this.addTouchEvent(this.heopen, this.closeMenu);
    this.addTouchEvent(this.Upbntss, this.closeMenu);
    this.ringEff = null;
    this.ringEff1 = null;
    this._pY = -55533;
    this._curRole = 0;
    this.item0.Selecte.visible = 1;
    this.edata();
    this.Demomc();
  };
  _0x35ff16.prototype.sonChange = function (_0x3a81a2) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
      this.Demomc();
    }
  };
  _0x35ff16.prototype.getDressInfo = function () {
    {
      Dress.ins().sendDressInfoReq();
    }
  };
  _0x35ff16.prototype.Demomc = function () {
    this._pY = -55533;
    this.mcefat();
    var _0xd0096e = this.Viewdata();
    if (_0xd0096e < 1) {
      this._Hover = [FilterUtil.grayFilter];
    } else {
      this._Hover = null;
    }
    this.JIhuoeff();
  };
  _0x35ff16.prototype.JIhuoeff = function () {
    {
      this._pY = 450;
      this.ringEff || (this.ringEff = new MovieClip());
      this.ringEff.scaleX = 0.3;
      this.ringEff.scaleY = 0.3;
      this.ringEff.x = 290;
      this.ringEff.y = 350;
      this.shenshoueff.parent.addChild(this.ringEff);
      this.ringEff.playFile(RES_DIR_MONSTER + "", -1);
      this.ringEff.filters = this._Hover;
      egret.Tween.removeTweens(this.ringEff);
      egret.Tween.get(this.ringEff, {
        loop: false
      }).to({
        scaleX: 0.5,
        scaleY: 0.5
      }, 1000).to({
        scaleX: 0.8,
        scaleY: 0.8
      }, 1000).to({
        scaleX: 1,
        scaleY: 1
      }, 1000).to({
        scaleX: 1.3,
        scaleY: 1.3
      }, 1000).to({
        visible: 0
      }, 1000);
      egret.setTimeout(this.mcefat, this, 5300);
    }
  };
  _0x35ff16.prototype.mcefat = function () {
    {
      this.ringEff1 || (this.ringEff1 = new MovieClip());
      this.ringEff1.scaleX = -1;
      this.ringEff1.scaleY = 1;
      this.ringEff1.x = 350;
      this.ringEff1.y = 400;
      this.shenshoueff1.parent.addChild(this.ringEff1);
      this.ringEff1.playFile(RES_DIR_MONSTER + "zhanling2021_4s", -1);
      this.ringEff1.filters = this._Hover;
    }
  };
  _0x35ff16.prototype.posattrset = function (_0x2457bd, _0x232d13) {
    var _0x551f71 = {
      attr: [],
      exattr: []
    };
    if (_0x2457bd) {
      var _0x52e72e = [];
      var _0x494331 = [];
      for (x = 0; x < _0x2457bd.type.length; x++) {
        {
          var _0xc408e2 = {
            type: _0x333026.type = _0x2457bd.type[x],
            value: _0x232d13 < 1 ? 0 : parseInt(_0x2457bd.val[x]) + parseInt(_0x2457bd.exval[x] * (parseInt(_0x232d13) - 1))
          };
          var _0x333026 = {};
          _0x333026.value = _0x232d13 < 1 ? _0x2457bd.val[x] : parseInt(_0x2457bd.val[x]) + parseInt(_0x2457bd.exval[x] * _0x232d13);
          _0x52e72e[x] = _0xc408e2;
          _0x494331[x] = _0x333026;
        }
      }
      _0x551f71.attr = _0x52e72e;
      _0x551f71.exattr = _0x494331;
    }
    return _0x551f71;
  };
  _0x35ff16.prototype.edata = function (_0x5f4658) {
    {
      var _0x1df74e = GlobalConfig.qinglong23config;
      var _0x4e2d20 = this.Listdate();
      var _0x545f78 = GlobalConfig.qinglongbase23config;
      var _0x2995ad = 0;
      this._maxlv = _0x545f78.maxlv;
      this._openzs = _0x545f78.zslv;
      this._openday = _0x545f78.openday;
      for (var _0x24bac3 = 0; _0x24bac3 < _0x4e2d20.length; _0x24bac3++) {
        var _0x4590aa = _0x4e2d20[_0x24bac3].lv;
        this["item" + _0x24bac3].Icon.source = _0x545f78.itemicon[_0x24bac3] + "_png";
        this["item" + _0x24bac3].lvNum.text = _0x4590aa;
        this["BedEff" + _0x24bac3] || (this["BedEff" + _0x24bac3] = new MovieClip());
        this["BedEff" + _0x24bac3].scaleX = this["BedEff" + _0x24bac3].scaleY = 0.9;
        var _0xf8ae11 = _0x4e2d20[_0x24bac3].id;
        var _0x116708 = _0x1df74e[_0xf8ae11];
        var _0x528ca7 = this.posattrset(_0x116708, _0x4590aa);
        if (_0x4590aa < 1) {
          this["BedEff" + _0x24bac3].x = -33335;
          this["BedEff" + _0x24bac3].y = -33336;
          this["item" + _0x24bac3].Icon.filters = [FilterUtil.grayFilter];
        } else {
          {
            this["BedEff" + _0x24bac3].x = 35;
            this["BedEff" + _0x24bac3].y = 36;
            this["item" + _0x24bac3].Icon.filters = null;
            var _0x2995ad = parseInt(_0x2995ad) + UserBag.getAttrPower(AttributeData.transformAttr(_0x528ca7.attr));
          }
        }
        this["item" + _0x24bac3].klmaceff.parent.addChild(this["BedEff" + _0x24bac3]);
        this["BedEff" + _0x24bac3].playFile(RES_DIR_MANGHUANG + "longniankuaile", -1);
        if (_0x24bac3 == this._indexid) {
          this._lv = _0x4e2d20[_0x24bac3].lv;
          this._id = _0x4e2d20[_0x24bac3].id;
          this._item = _0x116708.itemid;
          this._count = _0x116708.cost;
          this._uid = 105;
          this._usjid = 1000000;
          this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
          if (this._lv > 0) {
            {
              this._count = parseInt(_0x116708.cost) + parseInt(_0x116708.excost * this._usjid);
            }
          }
          this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x528ca7.attr), 0, 1, ": ");
          this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x528ca7.exattr), 0, 1, ": ");
          this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
          this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
          this.maxbox1.visible = 1;
          this.maxbox2.visible = 0;
        }
      }
      this.powerPanel.setPower(_0x2995ad);
    }
  };
  _0x35ff16.prototype.Viewdata = function (_0x4ec008) {
    var _0x120713 = this.Listdate();
    for (x = 0; x < _0x120713.length; x++) {
      if (_0x120713[x].lv < 1) {
        return 0;
        break;
      }
    }
    return 1;
  };
  _0x35ff16.prototype.Listdate = function () {
    {
      this.curRole = this.roleSelect.getCurRole();
      var _0x55af4d = GlobalConfig.qinglong23config;
      var _0x4e995e = Dress.ins();
      this.listInfo = [];
      for (var _0x56e3fc in _0x55af4d) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x55af4d[_0x56e3fc].roletype) {
        {
          var _0x9b82d3 = new DressItemInfo();
          var _0x51e2e1 = _0x55af4d[_0x56e3fc];
          var _0x4dd624 = _0x51e2e1.id;
          _0x9b82d3.lv = 0;
          _0x9b82d3.id = _0x4dd624;
          _0x9b82d3.job = _0x51e2e1.roletype;
          _0x4e995e.timeInfo[_0x4dd624] && (_0x9b82d3.timer = _0x4e995e.timeInfo[_0x4dd624].invalidtime, _0x9b82d3.lv = _0x4e995e.timeInfo[_0x4dd624].lv);
          this.listInfo.push(_0x9b82d3);
        }
      }
      return this.listInfo;
    }
  };
  _0x35ff16.prototype.closeMenu = function (_0x2aaaba) {
    {
      switch (_0x2aaaba.currentTarget) {
        case this.item0:
          this.ViewSelect(0);
          break;
        case this.item1:
          this.ViewSelect(1);
          break;
        case this.item2:
          this.ViewSelect(2);
          break;
        case this.item3:
          this.ViewSelect(3);
          break;
        case this.item4:
          this.ViewSelect(4);
          break;
        case this.item5:
          this.ViewSelect(5);
          break;
        case this.item6:
          this.ViewSelect(6);
          break;
        case this.item7:
          this.ViewSelect(7);
          break;
        case this.item8:
          this.ViewSelect(8);
          break;
        case this.item9:
          this.ViewSelect(9);
          break;
        case this.item10:
          this.ViewSelect(10);
          break;
        case this.item11:
          this.ViewSelect(11);
          break;
        case this.item12:
          this.ViewSelect(12);
          break;
        case this.item13:
          this.ViewSelect(13);
          break;
        case this.heopen:
          ViewManager.ins().open(DemphechengPanel, this._item);
          break;
        case this.Upbntss:
          if (UserZs.ins().lv < this._openzs) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
          }
          if (GameServer.serverOpenDay + 1 < this._openday) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
          }
          if (this._num < this._count) {
            void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
            return SoundManager.ins().playEffect("wupindaojubuzubgm");
          }
          if (this._lv >= this._maxlv) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
          }
          if (this._lv < 1) {
            Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
          } else {
            Dress.ins().JiezhikongjianLevelUp(this._id);
          }
      }
    }
  };
  _0x35ff16.prototype.ViewSelect = function (_0x283e84) {
    for (x = 0; x < 14; x++) {
      {
        if (_0x283e84 == x) {
          {
            this["item" + x].Selecte.visible = 1;
          }
        } else {
          {
            this["item" + x].Selecte.visible = 0;
          }
        }
      }
    }
    this._indexid = _0x283e84;
    this.edata();
  };
  _0x35ff16.prototype.closeMenus = function (_0x109901) {
    {
      ViewManager.ins().close(this);
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
    }
  };
  return _0x35ff16;
}(BaseEuiView);
__reflect(qinglongpal2224.prototype, "qinglongpal2224");
ViewManager.ins().reg(qinglongpal2224, LayerManager.UI_Main);
var qinglongpal2225 = function (_0x5b5268) {
  function _0x23dfac() {
    {
      var _0x51b708 = _0x5b5268.call(this) || this;
      _0x51b708._cost = 0;
      _0x51b708.isTopLevel = true;
      _0x51b708.skinName = "qinglongskins225";
      _0x51b708._indexid = 0;
      return _0x51b708;
    }
  }
  __extends(_0x23dfac, _0x5b5268);
  _0x23dfac.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.closeMenus);
    SoundManager.ins().hao("");
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(Dress.ins().postDressInfo, this.Demomc);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.addTouchEvent(this.item0, this.closeMenu);
    this.addTouchEvent(this.item1, this.closeMenu);
    this.addTouchEvent(this.item2, this.closeMenu);
    this.addTouchEvent(this.item3, this.closeMenu);
    this.addTouchEvent(this.item4, this.closeMenu);
    this.addTouchEvent(this.item5, this.closeMenu);
    this.addTouchEvent(this.item6, this.closeMenu);
    this.addTouchEvent(this.item7, this.closeMenu);
    this.addTouchEvent(this.item8, this.closeMenu);
    this.addTouchEvent(this.item9, this.closeMenu);
    this.addTouchEvent(this.item10, this.closeMenu);
    this.addTouchEvent(this.item11, this.closeMenu);
    this.addTouchEvent(this.item12, this.closeMenu);
    this.addTouchEvent(this.item13, this.closeMenu);
    this.addTouchEvent(this.heopen, this.closeMenu);
    this.addTouchEvent(this.Upbntss, this.closeMenu);
    this.ringEff = null;
    this.ringEff1 = null;
    this._pY = -55533;
    this._curRole = 0;
    this.item0.Selecte.visible = 1;
    this.edata();
    this.Demomc();
  };
  _0x23dfac.prototype.sonChange = function (_0x1a9e5f) {
    this._curRole = this.roleSelect.getCurRole();
    this.edata();
    this.Demomc();
  };
  _0x23dfac.prototype.getDressInfo = function () {
    {
      Dress.ins().sendDressInfoReq();
    }
  };
  _0x23dfac.prototype.Demomc = function () {
    this._pY = -55533;
    this.mcefat();
    var _0x1fd9a5 = this.Viewdata();
    if (_0x1fd9a5 < 1) {
      this._Hover = [FilterUtil.grayFilter];
    } else {
      this._Hover = null;
    }
    this.JIhuoeff();
  };
  _0x23dfac.prototype.JIhuoeff = function () {
    this._pY = 450;
    this.ringEff || (this.ringEff = new MovieClip());
    this.ringEff.scaleX = 0.3;
    this.ringEff.scaleY = 0.3;
    this.ringEff.x = 290;
    this.ringEff.y = 350;
    this.shenshoueff.parent.addChild(this.ringEff);
    this.ringEff.playFile(RES_DIR_MONSTER + "", -1);
    this.ringEff.filters = this._Hover;
    egret.Tween.removeTweens(this.ringEff);
    egret.Tween.get(this.ringEff, {
      loop: false
    }).to({
      scaleX: 0.5,
      scaleY: 0.5
    }, 1000).to({
      scaleX: 0.8,
      scaleY: 0.8
    }, 1000).to({
      scaleX: 1,
      scaleY: 1
    }, 1000).to({
      scaleX: 1.3,
      scaleY: 1.3
    }, 1000).to({
      visible: 0
    }, 1000);
    egret.setTimeout(this.mcefat, this, 5300);
  };
  _0x23dfac.prototype.mcefat = function () {
    {
      this.ringEff1 || (this.ringEff1 = new MovieClip());
      this.ringEff1.scaleX = -1;
      this.ringEff1.scaleY = 1;
      this.ringEff1.x = 350;
      this.ringEff1.y = 400;
      this.shenshoueff1.parent.addChild(this.ringEff1);
      this.ringEff1.playFile(RES_DIR_MONSTER + "zhanling2021_4s", -1);
      this.ringEff1.filters = this._Hover;
    }
  };
  _0x23dfac.prototype.posattrset = function (_0x2ae2c2, _0x3d2857) {
    {
      var _0x268d06 = {
        attr: [],
        exattr: []
      };
      if (_0x2ae2c2) {
        var _0x23f85f = [];
        var _0x387edd = [];
        for (x = 0; x < _0x2ae2c2.type.length; x++) {
          var _0x497603 = {
            type: _0x28e7cc.type = _0x2ae2c2.type[x],
            value: _0x3d2857 < 1 ? 0 : parseInt(_0x2ae2c2.val[x]) + parseInt(_0x2ae2c2.exval[x] * (parseInt(_0x3d2857) - 1))
          };
          var _0x28e7cc = {};
          _0x28e7cc.value = _0x3d2857 < 1 ? _0x2ae2c2.val[x] : parseInt(_0x2ae2c2.val[x]) + parseInt(_0x2ae2c2.exval[x] * _0x3d2857);
          _0x23f85f[x] = _0x497603;
          _0x387edd[x] = _0x28e7cc;
        }
        _0x268d06.attr = _0x23f85f;
        _0x268d06.exattr = _0x387edd;
      }
      return _0x268d06;
    }
  };
  _0x23dfac.prototype.edata = function (_0x5d39aa) {
    {
      var _0x358570 = GlobalConfig.qinglong25config;
      var _0x133769 = this.Listdate();
      var _0x5cfea3 = GlobalConfig.qinglongbase25config;
      var _0x50e72d = 0;
      this._maxlv = _0x5cfea3.maxlv;
      this._openzs = _0x5cfea3.zslv;
      this._openday = _0x5cfea3.openday;
      for (var _0x168599 = 0; _0x168599 < _0x133769.length; _0x168599++) {
        {
          var _0x30210f = _0x133769[_0x168599].lv;
          this["item" + _0x168599].Icon.source = _0x5cfea3.itemicon[_0x168599] + "_png";
          this["item" + _0x168599].lvNum.text = _0x30210f;
          this["BedEff" + _0x168599] || (this["BedEff" + _0x168599] = new MovieClip());
          this["BedEff" + _0x168599].scaleX = this["BedEff" + _0x168599].scaleY = 0.9;
          var _0x22f5f9 = _0x133769[_0x168599].id;
          var _0x8f6af4 = _0x358570[_0x22f5f9];
          var _0x187b05 = this.posattrset(_0x8f6af4, _0x30210f);
          if (_0x30210f < 1) {
            {
              this["BedEff" + _0x168599].x = -33335;
              this["BedEff" + _0x168599].y = -33336;
              this["item" + _0x168599].Icon.filters = [FilterUtil.grayFilter];
            }
          } else {
            this["BedEff" + _0x168599].x = 35;
            this["BedEff" + _0x168599].y = 36;
            this["item" + _0x168599].Icon.filters = null;
            var _0x50e72d = parseInt(_0x50e72d) + UserBag.getAttrPower(AttributeData.transformAttr(_0x187b05.attr));
          }
          this["item" + _0x168599].klmaceff.parent.addChild(this["BedEff" + _0x168599]);
          this["BedEff" + _0x168599].playFile(RES_DIR_MANGHUANG + "longniankuaile", -1);
          if (_0x168599 == this._indexid) {
            this._lv = _0x133769[_0x168599].lv;
            this._id = _0x133769[_0x168599].id;
            this._item = _0x8f6af4.itemid;
            this._count = _0x8f6af4.cost;
            this._uid = 106;
            this._usjid = 100000000;
            this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
            if (this._lv > 0) {
              this._count = parseInt(_0x8f6af4.cost) + parseInt(_0x8f6af4.excost * this._usjid);
            }
            this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x187b05.attr), 0, 1, ": ");
            this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x187b05.exattr), 0, 1, ": ");
            this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
            this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
            this.maxbox1.visible = 1;
            this.maxbox2.visible = 0;
          }
        }
      }
      this.powerPanel.setPower(_0x50e72d);
    }
  };
  _0x23dfac.prototype.Viewdata = function (_0x20a99f) {
    var _0xd51982 = this.Listdate();
    for (x = 0; x < _0xd51982.length; x++) {
      if (_0xd51982[x].lv < 1) {
        {
          return 0;
          break;
        }
      }
    }
    return 1;
  };
  _0x23dfac.prototype.Listdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0x4bed91 = GlobalConfig.qinglong25config;
    var _0x5b5268 = Dress.ins();
    this.listInfo = [];
    for (var _0x2ab292 in _0x4bed91) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x4bed91[_0x2ab292].roletype) {
      var _0x33b85e = new DressItemInfo();
      var _0x1fb522 = _0x4bed91[_0x2ab292];
      var _0x1df3b6 = _0x1fb522.id;
      _0x33b85e.lv = 0;
      _0x33b85e.id = _0x1df3b6;
      _0x33b85e.job = _0x1fb522.roletype;
      _0x5b5268.timeInfo[_0x1df3b6] && (_0x33b85e.timer = _0x5b5268.timeInfo[_0x1df3b6].invalidtime, _0x33b85e.lv = _0x5b5268.timeInfo[_0x1df3b6].lv);
      this.listInfo.push(_0x33b85e);
    }
    return this.listInfo;
  };
  _0x23dfac.prototype.closeMenu = function (_0x54c3ea) {
    {
      switch (_0x54c3ea.currentTarget) {
        case this.item0:
          this.ViewSelect(0);
          break;
        case this.item1:
          this.ViewSelect(1);
          break;
        case this.item2:
          this.ViewSelect(2);
          break;
        case this.item3:
          this.ViewSelect(3);
          break;
        case this.item4:
          this.ViewSelect(4);
          break;
        case this.item5:
          this.ViewSelect(5);
          break;
        case this.item6:
          this.ViewSelect(6);
          break;
        case this.item7:
          this.ViewSelect(7);
          break;
        case this.item8:
          this.ViewSelect(8);
          break;
        case this.item9:
          this.ViewSelect(9);
          break;
        case this.item10:
          this.ViewSelect(10);
          break;
        case this.item11:
          this.ViewSelect(11);
          break;
        case this.item12:
          this.ViewSelect(12);
          break;
        case this.item13:
          this.ViewSelect(13);
          break;
        case this.heopen:
          ViewManager.ins().open(qinglongpal2226, this._item);
          break;
        case this.Upbntss:
          if (UserZs.ins().lv < this._openzs) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
          }
          if (GameServer.serverOpenDay + 1 < this._openday) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
          }
          if (this._num < this._count) {
            void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
            return SoundManager.ins().playEffect("wupindaojubuzubgm");
          }
          if (this._lv >= this._maxlv) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
          }
          if (this._lv < 1) {
            Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
          } else {
            Dress.ins().JiezhikongjianLevelUp(this._id);
          }
      }
    }
  };
  _0x23dfac.prototype.ViewSelect = function (_0x2cee71) {
    for (x = 0; x < 14; x++) {
      if (_0x2cee71 == x) {
        {
          this["item" + x].Selecte.visible = 1;
        }
      } else {
        {
          this["item" + x].Selecte.visible = 0;
        }
      }
    }
    this._indexid = _0x2cee71;
    this.edata();
  };
  _0x23dfac.prototype.closeMenus = function (_0x3c44d1) {
    {
      ViewManager.ins().close(this);
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
    }
  };
  return _0x23dfac;
}(BaseEuiView);
__reflect(qinglongpal2225.prototype, "qinglongpal2225");
ViewManager.ins().reg(qinglongpal2225, LayerManager.UI_Main);
var qinglongpal2226 = function (_0x71c288) {
  var _0x51b665 = function () {
    {
      var _0x253235 = true;
      return function (_0x2e1f20, _0x57920f) {
        var _0x575ba0 = _0x253235 ? function () {
          if (_0x57920f) {
            {
              var _0x555eee = _0x57920f.apply(_0x2e1f20, arguments);
              _0x57920f = null;
              return _0x555eee;
            }
          }
        } : function () {};
        _0x253235 = false;
        return _0x575ba0;
      };
    }
  }();
  var _0x2f2bf3 = _0x51b665(this, function () {
    {
      var _0x5584d3 = function () {};
      var _0x15ee6f = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      if (!_0x15ee6f.console) {
        _0x15ee6f.console = function (_0x2ecac1) {
          var _0x5b6c7d = {};
          _0x5b6c7d.log = _0x2ecac1;
          _0x5b6c7d.warn = _0x2ecac1;
          _0x5b6c7d.debug = _0x2ecac1;
          _0x5b6c7d.info = _0x2ecac1;
          _0x5b6c7d.error = _0x2ecac1;
          _0x5b6c7d.exception = _0x2ecac1;
          _0x5b6c7d.trace = _0x2ecac1;
          return _0x5b6c7d;
        }(_0x5584d3);
      } else {
        {
          _0x15ee6f.console.log = _0x5584d3;
          _0x15ee6f.console.warn = _0x5584d3;
          _0x15ee6f.console.debug = _0x5584d3;
          _0x15ee6f.console.info = _0x5584d3;
          _0x15ee6f.console.error = _0x5584d3;
          _0x15ee6f.console.exception = _0x5584d3;
          _0x15ee6f.console.trace = _0x5584d3;
        }
      }
    }
  });
  _0x2f2bf3();
  function _0x27b434() {
    var _0x5d3a7d = _0x71c288.call(this) || this;
    _0x5d3a7d._cost = 0;
    _0x5d3a7d.isTopLevel = true;
    _0x5d3a7d.skinName = "qinglongskins226";
    _0x5d3a7d._indexid = 0;
    return _0x5d3a7d;
  }
  __extends(_0x27b434, _0x71c288);
  _0x27b434.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.closeMenus);
    SoundManager.ins().hao("");
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(Dress.ins().postDressInfo, this.Demomc);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.addTouchEvent(this.item0, this.closeMenu);
    this.addTouchEvent(this.item1, this.closeMenu);
    this.addTouchEvent(this.item2, this.closeMenu);
    this.addTouchEvent(this.item3, this.closeMenu);
    this.addTouchEvent(this.item4, this.closeMenu);
    this.addTouchEvent(this.item5, this.closeMenu);
    this.addTouchEvent(this.item6, this.closeMenu);
    this.addTouchEvent(this.item7, this.closeMenu);
    this.addTouchEvent(this.item8, this.closeMenu);
    this.addTouchEvent(this.item9, this.closeMenu);
    this.addTouchEvent(this.item10, this.closeMenu);
    this.addTouchEvent(this.item11, this.closeMenu);
    this.addTouchEvent(this.item12, this.closeMenu);
    this.addTouchEvent(this.item13, this.closeMenu);
    this.addTouchEvent(this.heopen, this.closeMenu);
    this.addTouchEvent(this.Upbntss, this.closeMenu);
    this.ringEff = null;
    this.ringEff1 = null;
    this._pY = -55533;
    this._curRole = 0;
    this.item0.Selecte.visible = 1;
    this.edata();
    this.Demomc();
  };
  _0x27b434.prototype.sonChange = function (_0x5b7356) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
      this.Demomc();
    }
  };
  _0x27b434.prototype.getDressInfo = function () {
    Dress.ins().sendDressInfoReq();
  };
  _0x27b434.prototype.Demomc = function () {
    {
      this._pY = -55533;
      this.mcefat();
      var _0x1aa954 = this.Viewdata();
      if (_0x1aa954 < 1) {
        {
          this._Hover = [FilterUtil.grayFilter];
        }
      } else {
        this._Hover = null;
      }
      this.JIhuoeff();
    }
  };
  _0x27b434.prototype.JIhuoeff = function () {
    {
      this._pY = 450;
      this.ringEff || (this.ringEff = new MovieClip());
      this.ringEff.scaleX = 0.3;
      this.ringEff.scaleY = 0.3;
      this.ringEff.x = 290;
      this.ringEff.y = 350;
      this.shenshoueff.parent.addChild(this.ringEff);
      this.ringEff.playFile(RES_DIR_MONSTER + "", -1);
      this.ringEff.filters = this._Hover;
      egret.Tween.removeTweens(this.ringEff);
      egret.Tween.get(this.ringEff, {
        loop: false
      }).to({
        scaleX: 0.5,
        scaleY: 0.5
      }, 1000).to({
        scaleX: 0.8,
        scaleY: 0.8
      }, 1000).to({
        scaleX: 1,
        scaleY: 1
      }, 1000).to({
        scaleX: 1.3,
        scaleY: 1.3
      }, 1000).to({
        visible: 0
      }, 1000);
      egret.setTimeout(this.mcefat, this, 5300);
    }
  };
  _0x27b434.prototype.mcefat = function () {
    this.ringEff1 || (this.ringEff1 = new MovieClip());
    this.ringEff1.scaleX = -1;
    this.ringEff1.scaleY = 1;
    this.ringEff1.x = 350;
    this.ringEff1.y = 400;
    this.shenshoueff1.parent.addChild(this.ringEff1);
    this.ringEff1.playFile(RES_DIR_MONSTER + "monster990056", -1);
    this.ringEff1.filters = this._Hover;
  };
  _0x27b434.prototype.posattrset = function (_0x529c30, _0x444611) {
    var _0x5470f2 = {
      attr: [],
      exattr: []
    };
    if (_0x529c30) {
      var _0x386efa = [];
      var _0x204ac0 = [];
      for (x = 0; x < _0x529c30.type.length; x++) {
        {
          var _0x26f8c6 = {
            type: _0x3208c0.type = _0x529c30.type[x],
            value: _0x444611 < 1 ? 0 : parseInt(_0x529c30.val[x]) + parseInt(_0x529c30.exval[x] * (parseInt(_0x444611) - 1))
          };
          var _0x3208c0 = {};
          _0x3208c0.value = _0x444611 < 1 ? _0x529c30.val[x] : parseInt(_0x529c30.val[x]) + parseInt(_0x529c30.exval[x] * _0x444611);
          _0x386efa[x] = _0x26f8c6;
          _0x204ac0[x] = _0x3208c0;
        }
      }
      _0x5470f2.attr = _0x386efa;
      _0x5470f2.exattr = _0x204ac0;
    }
    return _0x5470f2;
  };
  _0x27b434.prototype.edata = function (_0x40c537) {
    var _0xf3c2a4 = GlobalConfig.qinglong26config;
    var _0x425e17 = this.Listdate();
    var _0x39b2d7 = GlobalConfig.qinglongbase26config;
    var _0x2ec84c = 0;
    this._maxlv = _0x39b2d7.maxlv;
    this._openzs = _0x39b2d7.zslv;
    this._openday = _0x39b2d7.openday;
    for (var _0x39a759 = 0; _0x39a759 < _0x425e17.length; _0x39a759++) {
      var _0x1cbb27 = _0x425e17[_0x39a759].lv;
      this["item" + _0x39a759].Icon.source = _0x39b2d7.itemicon[_0x39a759] + "_png";
      this["item" + _0x39a759].lvNum.text = _0x1cbb27;
      this["BedEff" + _0x39a759] || (this["BedEff" + _0x39a759] = new MovieClip());
      this["BedEff" + _0x39a759].scaleX = this["BedEff" + _0x39a759].scaleY = 0.9;
      var _0x2f6fa4 = _0x425e17[_0x39a759].id;
      var _0x35fb22 = _0xf3c2a4[_0x2f6fa4];
      var _0x4e38ad = this.posattrset(_0x35fb22, _0x1cbb27);
      if (_0x1cbb27 < 1) {
        {
          this["BedEff" + _0x39a759].x = -33335;
          this["BedEff" + _0x39a759].y = -33336;
          this["item" + _0x39a759].Icon.filters = [FilterUtil.grayFilter];
        }
      } else {
        {
          this["BedEff" + _0x39a759].x = 35;
          this["BedEff" + _0x39a759].y = 36;
          this["item" + _0x39a759].Icon.filters = null;
          var _0x350629 = parseInt(_0x350629) + UserBag.getAttrPower(AttributeData.transformAttr(_0x4e38ad.attr));
        }
      }
      this["item" + _0x39a759].klmaceff.parent.addChild(this["BedEff" + _0x39a759]);
      this["BedEff" + _0x39a759].playFile(RES_DIR_MANGHUANG + "longniankuaile", -1);
      if (_0x39a759 == this._indexid) {
        {
          this._lv = _0x425e17[_0x39a759].lv;
          this._id = _0x425e17[_0x39a759].id;
          this._item = _0x35fb22.itemid;
          this._count = _0x35fb22.cost;
          this._uid = 107;
          this._usjid = 10000;
          this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
          if (this._lv > 0) {
            {
              this._count = parseInt(_0x35fb22.cost) + parseInt(_0x35fb22.excost * this._usjid);
            }
          }
          this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x4e38ad.attr), 0, 1, ": ");
          this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x4e38ad.exattr), 0, 1, ": ");
          this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
          this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
          this.maxbox1.visible = 1;
          this.maxbox2.visible = 0;
        }
      }
    }
    this.powerPanel.setPower(_0x2ec84c);
  };
  _0x27b434.prototype.Viewdata = function (_0x5af0cf) {
    var _0x5209a9 = this.Listdate();
    for (x = 0; x < _0x5209a9.length; x++) {
      if (_0x5209a9[x].lv < 1) {
        {
          return 0;
          break;
        }
      }
    }
    return 1;
  };
  _0x27b434.prototype.Listdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0x658ab2 = GlobalConfig.qinglong26config;
    var _0x71c288 = Dress.ins();
    this.listInfo = [];
    for (var _0x33e106 in _0x658ab2) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x658ab2[_0x33e106].roletype) {
      var _0x57d24e = new DressItemInfo();
      var _0xf89b49 = _0x658ab2[_0x33e106];
      var _0x146913 = _0xf89b49.id;
      _0x57d24e.lv = 0;
      _0x57d24e.id = _0x146913;
      _0x57d24e.job = _0xf89b49.roletype;
      _0x71c288.timeInfo[_0x146913] && (_0x57d24e.timer = _0x71c288.timeInfo[_0x146913].invalidtime, _0x57d24e.lv = _0x71c288.timeInfo[_0x146913].lv);
      this.listInfo.push(_0x57d24e);
    }
    return this.listInfo;
  };
  _0x27b434.prototype.closeMenu = function (_0xee9cd7) {
    switch (_0xee9cd7.currentTarget) {
      case this.item0:
        this.ViewSelect(0);
        break;
      case this.item1:
        this.ViewSelect(1);
        break;
      case this.item2:
        this.ViewSelect(2);
        break;
      case this.item3:
        this.ViewSelect(3);
        break;
      case this.item4:
        this.ViewSelect(4);
        break;
      case this.item5:
        this.ViewSelect(5);
        break;
      case this.item6:
        this.ViewSelect(6);
        break;
      case this.item7:
        this.ViewSelect(7);
        break;
      case this.item8:
        this.ViewSelect(8);
        break;
      case this.item9:
        this.ViewSelect(9);
        break;
      case this.item10:
        this.ViewSelect(10);
        break;
      case this.item11:
        this.ViewSelect(11);
        break;
      case this.item12:
        this.ViewSelect(12);
        break;
      case this.item13:
        this.ViewSelect(13);
        break;
      case this.heopen:
        ViewManager.ins().open(qinglongpal2225, this._item);
        break;
      case this.Upbntss:
        if (UserZs.ins().lv < this._openzs) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
        }
        if (GameServer.serverOpenDay + 1 < this._openday) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
        }
        if (this._num < this._count) {
          void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
          return SoundManager.ins().playEffect("wupindaojubuzubgm");
        }
        if (this._lv >= this._maxlv) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
        }
        if (this._lv < 1) {
          Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
        } else {
          {
            Dress.ins().JiezhikongjianLevelUp(this._id);
          }
        }
    }
  };
  _0x27b434.prototype.ViewSelect = function (_0x2bd432) {
    {
      for (x = 0; x < 14; x++) {
        if (_0x2bd432 == x) {
          this["item" + x].Selecte.visible = 1;
        } else {
          this["item" + x].Selecte.visible = 0;
        }
      }
      this._indexid = _0x2bd432;
      this.edata();
    }
  };
  _0x27b434.prototype.closeMenus = function (_0x44ae59) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x27b434;
}(BaseEuiView);
__reflect(qinglongpal2226.prototype, "qinglongpal2226");
ViewManager.ins().reg(qinglongpal2226, LayerManager.UI_Main);
var qinglongpal2227 = function (_0x2d9ff6) {
  function _0x1d7502() {
    var _0x5ecd8a = _0x2d9ff6.call(this) || this;
    _0x5ecd8a._cost = 0;
    _0x5ecd8a.isTopLevel = true;
    _0x5ecd8a.skinName = "qinglongskins227";
    _0x5ecd8a._indexid = 0;
    return _0x5ecd8a;
  }
  __extends(_0x1d7502, _0x2d9ff6);
  _0x1d7502.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.closeMenus);
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(Dress.ins().postDressInfo, this.Demomc);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.addTouchEvent(this.item0, this.closeMenu);
    this.addTouchEvent(this.item1, this.closeMenu);
    this.addTouchEvent(this.item2, this.closeMenu);
    this.addTouchEvent(this.item3, this.closeMenu);
    this.addTouchEvent(this.item4, this.closeMenu);
    this.addTouchEvent(this.heopen, this.closeMenu);
    this.addTouchEvent(this.Upbntss, this.closeMenu);
    this.ringEff = null;
    this.ringEff1 = null;
    this._pY = -55533;
    this._curRole = 0;
    this.item0.Selecte.visible = 1;
    this.edata();
    this.Demomc();
  };
  _0x1d7502.prototype.sonChange = function (_0x592a21) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
      this.Demomc();
    }
  };
  _0x1d7502.prototype.getDressInfo = function () {
    Dress.ins().sendDressInfoReq();
  };
  _0x1d7502.prototype.Demomc = function () {
    this._pY = -55533;
    this.mcefat();
    var _0x4c8874 = this.Viewdata();
    if (_0x4c8874 < 1) {
      this._Hover = [FilterUtil.grayFilter];
    } else {
      {
        this._Hover = null;
      }
    }
    this.JIhuoeff();
  };
  _0x1d7502.prototype.JIhuoeff = function () {
    this._pY = 170;
    this.ringEff || (this.ringEff = new MovieClip());
    this.ringEff.scaleX = 0.3;
    this.ringEff.scaleY = 0.3;
    this.ringEff.x = 320;
    this.ringEff.y = 250;
    this.shenshoueff.parent.addChild(this.ringEff);
    this.ringEff.playFile(RES_DIR_MONSTER + "fj1", -1);
    this.ringEff.filters = this._Hover;
    egret.Tween.removeTweens(this.ringEff);
    egret.Tween.get(this.ringEff, {
      loop: false
    }).to({
      scaleX: 0.5,
      scaleY: 0.5
    }, 1000).to({
      scaleX: 0.8,
      scaleY: 0.8
    }, 1000).to({
      scaleX: 1,
      scaleY: 1
    }, 1000).to({
      scaleX: 1.3,
      scaleY: 1.3
    }, 1000).to({
      visible: 0
    }, 1000);
    egret.setTimeout(this.mcefat, this, 5300);
  };
  _0x1d7502.prototype.mcefat = function () {
    this.ringEff1 || (this.ringEff1 = new MovieClip());
    this.ringEff1.scaleX = -1;
    this.ringEff1.scaleY = 1;
    this.ringEff1.x = 320;
    this.ringEff1.y = this._pY;
    this.shenshoueff1.parent.addChild(this.ringEff1);
    this.ringEff1.playFile(RES_DIR_MONSTER + "moun3_2s", -1);
    this.ringEff1.filters = this._Hover;
  };
  _0x1d7502.prototype.posattrset = function (_0x316444, _0x74d73d) {
    {
      var _0x3247dd = {
        attr: [],
        exattr: []
      };
      if (_0x316444) {
        var _0x4443a8 = [];
        var _0x282dd5 = [];
        for (x = 0; x < _0x316444.type.length; x++) {
          var _0x397176 = {
            type: _0x10cfca.type = _0x316444.type[x],
            value: _0x74d73d < 1 ? 0 : parseInt(_0x316444.val[x]) + parseInt(_0x316444.exval[x] * (parseInt(_0x74d73d) - 1))
          };
          var _0x10cfca = {};
          _0x10cfca.value = _0x74d73d < 1 ? _0x316444.val[x] : parseInt(_0x316444.val[x]) + parseInt(_0x316444.exval[x] * _0x74d73d);
          _0x4443a8[x] = _0x397176;
          _0x282dd5[x] = _0x10cfca;
        }
        _0x3247dd.attr = _0x4443a8;
        _0x3247dd.exattr = _0x282dd5;
      }
      return _0x3247dd;
    }
  };
  _0x1d7502.prototype.edata = function (_0x365d2c) {
    {
      var _0x4d655f = GlobalConfig.newmanghuangconfig;
      var _0xa64cf9 = this.Listdate();
      var _0x32d790 = GlobalConfig.newmanghuangbaseconfig;
      var _0x58de3e = 0;
      this._maxlv = _0x32d790.maxlv;
      this._openzs = _0x32d790.zslv;
      this._openday = _0x32d790.openday;
      for (var _0x47bb73 = 0; _0x47bb73 < _0xa64cf9.length; _0x47bb73++) {
        {
          var _0x261eb8 = _0xa64cf9[_0x47bb73].lv;
          this["item" + _0x47bb73].Icon.source = _0x32d790.itemicon[_0x47bb73] + "_png";
          this["item" + _0x47bb73].lvNum.text = _0x261eb8;
          this["BedEff" + _0x47bb73] || (this["BedEff" + _0x47bb73] = new MovieClip());
          this["BedEff" + _0x47bb73].scaleX = this["BedEff" + _0x47bb73].scaleY = 0.9;
          var _0x37ced6 = _0xa64cf9[_0x47bb73].id;
          var _0xccb760 = _0x4d655f[_0x37ced6];
          var _0x3f5bd2 = this.posattrset(_0xccb760, _0x261eb8);
          if (_0x261eb8 < 1) {
            this["BedEff" + _0x47bb73].x = -33335;
            this["BedEff" + _0x47bb73].y = -33336;
            this["item" + _0x47bb73].Icon.filters = [FilterUtil.grayFilter];
          } else {
            {
              this["BedEff" + _0x47bb73].x = 35;
              this["BedEff" + _0x47bb73].y = 36;
              this["item" + _0x47bb73].Icon.filters = null;
              var _0x58de3e = parseInt(_0x58de3e) + UserBag.getAttrPower(AttributeData.transformAttr(_0x3f5bd2.attr));
            }
          }
          this["item" + _0x47bb73].klmaceff.parent.addChild(this["BedEff" + _0x47bb73]);
          this["BedEff" + _0x47bb73].playFile(RES_DIR_MANGHUANG + "jihuo_kuang_1", -1);
          if (_0x47bb73 == this._indexid) {
            {
              this._lv = _0xa64cf9[_0x47bb73].lv;
              this._id = _0xa64cf9[_0x47bb73].id;
              this._item = _0xccb760.itemid;
              this._count = _0xccb760.cost;
              this._uid = 106;
              this._usjid = 100000000;
              this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
              if (this._lv > 0) {
                {
                  this._count = parseInt(_0xccb760.cost) + parseInt(_0xccb760.excost * this._usjid);
                }
              }
              this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x3f5bd2.attr), 0, 1, ": ");
              this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x3f5bd2.exattr), 0, 1, ": ");
              this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
              this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
              this.maxbox1.visible = 1;
              this.maxbox2.visible = 0;
            }
          }
        }
      }
      this.powerPanel.setPower(_0x58de3e);
    }
  };
  _0x1d7502.prototype.Viewdata = function (_0x1bd4d7) {
    {
      var _0x546cea = this.Listdate();
      for (x = 0; x < _0x546cea.length; x++) {
        if (_0x546cea[x].lv < 1) {
          {
            return 0;
            break;
          }
        }
      }
      return 1;
    }
  };
  _0x1d7502.prototype.Listdate = function () {
    {
      this.curRole = this.roleSelect.getCurRole();
      var _0x4a4b49 = GlobalConfig.newmanghuangconfig;
      var _0x2d9ff6 = Dress.ins();
      this.listInfo = [];
      for (var _0x10d43f in _0x4a4b49) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x4a4b49[_0x10d43f].roletype) {
        var _0x5c7705 = new DressItemInfo();
        var _0x373222 = _0x4a4b49[_0x10d43f];
        var _0x3ca041 = _0x373222.id;
        _0x5c7705.lv = 0;
        _0x5c7705.id = _0x3ca041;
        _0x5c7705.job = _0x373222.roletype;
        _0x2d9ff6.timeInfo[_0x3ca041] && (_0x5c7705.timer = _0x2d9ff6.timeInfo[_0x3ca041].invalidtime, _0x5c7705.lv = _0x2d9ff6.timeInfo[_0x3ca041].lv);
        this.listInfo.push(_0x5c7705);
      }
      return this.listInfo;
    }
  };
  _0x1d7502.prototype.closeMenu = function (_0x203d71) {
    switch (_0x203d71.currentTarget) {
      case this.item0:
        this.ViewSelect(0);
        break;
      case this.item1:
        this.ViewSelect(1);
        break;
      case this.item2:
        this.ViewSelect(2);
        break;
      case this.item3:
        this.ViewSelect(3);
        break;
      case this.item4:
        this.ViewSelect(4);
        break;
      case this.heopen:
        ViewManager.ins().open(qinglongpal2228, this._item);
        break;
      case this.Upbntss:
        if (UserZs.ins().lv < this._openzs) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
        }
        if (GameServer.serverOpenDay + 1 < this._openday) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
        }
        if (this._num < this._count) {
          void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
          return SoundManager.ins().playEffect("wupindaojubuzubgm");
        }
        if (this._lv >= this._maxlv) {
          return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
        }
        if (this._lv < 1) {
          Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
        } else {
          Dress.ins().JiezhikongjianLevelUp(this._id);
        }
    }
  };
  _0x1d7502.prototype.ViewSelect = function (_0x34054f) {
    {
      for (x = 0; x < 5; x++) {
        if (_0x34054f == x) {
          this["item" + x].Selecte.visible = 1;
        } else {
          this["item" + x].Selecte.visible = 0;
        }
      }
      this._indexid = _0x34054f;
      this.edata();
    }
  };
  _0x1d7502.prototype.closeMenus = function (_0xcf942e) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x1d7502;
}(BaseEuiView);
__reflect(qinglongpal2227.prototype, "qinglongpal2227");
ViewManager.ins().reg(qinglongpal2227, LayerManager.UI_Main);
var qinglongpal2228 = function (_0x2222dd) {
  function _0x325e41() {
    {
      var _0x50005d = _0x2222dd.call(this) || this;
      _0x50005d._cost = 0;
      _0x50005d.isTopLevel = true;
      _0x50005d.skinName = "qinglongskins228";
      _0x50005d._indexid = 0;
      return _0x50005d;
    }
  }
  __extends(_0x325e41, _0x2222dd);
  _0x325e41.prototype.open = function () {
    {
      this.addTouchEvent(this.closeBtn, this.closeMenus);
      this.roleSelect.setCurRole(this.curRole);
      this.addChangeEvent(this.roleSelect, this.sonChange);
      this.roleSelect.parent.touchEnabled = true;
      SubRoles.ins().getSubRoleByIndex(0);
      this.roleSelect.setCurRole(0);
      this.observe(Dress.ins().postDressInfo, this.edata);
      this.observe(Dress.ins().postDressInfo, this.Demomc);
      this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
      this.observe(UserBag.ins().postItemAdd, this.edata);
      this.observe(UserBag.ins().postItemDel, this.edata);
      this.observe(UserBag.ins().postItemCountChange, this.edata);
      this.addTouchEvent(this.item0, this.closeMenu);
      this.addTouchEvent(this.item1, this.closeMenu);
      this.addTouchEvent(this.item2, this.closeMenu);
      this.addTouchEvent(this.item3, this.closeMenu);
      this.addTouchEvent(this.item4, this.closeMenu);
      this.addTouchEvent(this.heopen, this.closeMenu);
      this.addTouchEvent(this.Upbntss, this.closeMenu);
      this.ringEff = null;
      this.ringEff1 = null;
      this._pY = -55533;
      this._curRole = 0;
      this.item0.Selecte.visible = 1;
      this.edata();
      this.Demomc();
    }
  };
  _0x325e41.prototype.sonChange = function (_0x11e593) {
    {
      this._curRole = this.roleSelect.getCurRole();
      this.edata();
      this.Demomc();
    }
  };
  _0x325e41.prototype.getDressInfo = function () {
    Dress.ins().sendDressInfoReq();
  };
  _0x325e41.prototype.Demomc = function () {
    {
      this._pY = -55533;
      this.mcefat();
      var _0x2bbcbf = this.Viewdata();
      if (_0x2bbcbf < 1) {
        this._Hover = [FilterUtil.grayFilter];
      } else {
        this._Hover = null;
      }
      this.JIhuoeff();
    }
  };
  _0x325e41.prototype.JIhuoeff = function () {
    this._pY = 170;
    this.ringEff || (this.ringEff = new MovieClip());
    this.ringEff.scaleX = 0.3;
    this.ringEff.scaleY = 0.3;
    this.ringEff.x = 320;
    this.ringEff.y = 250;
    this.shenshoueff.parent.addChild(this.ringEff);
    this.ringEff.playFile(RES_DIR_MONSTER + "fj1", -1);
    this.ringEff.filters = this._Hover;
    egret.Tween.removeTweens(this.ringEff);
    egret.Tween.get(this.ringEff, {
      loop: false
    }).to({
      scaleX: 0.5,
      scaleY: 0.5
    }, 1000).to({
      scaleX: 0.8,
      scaleY: 0.8
    }, 1000).to({
      scaleX: 1,
      scaleY: 1
    }, 1000).to({
      scaleX: 1.3,
      scaleY: 1.3
    }, 1000).to({
      visible: 0
    }, 1000);
    egret.setTimeout(this.mcefat, this, 5300);
  };
  _0x325e41.prototype.mcefat = function () {
    this.ringEff1 || (this.ringEff1 = new MovieClip());
    this.ringEff1.scaleX = -1;
    this.ringEff1.scaleY = 1;
    this.ringEff1.x = 320;
    this.ringEff1.y = this._pY;
    this.shenshoueff1.parent.addChild(this.ringEff1);
    this.ringEff1.playFile(RES_DIR_MONSTER + "moun3_2s", -1);
    this.ringEff1.filters = this._Hover;
  };
  _0x325e41.prototype.posattrset = function (_0x2b1b86, _0x4bf1ba) {
    var _0x113251 = {
      attr: [],
      exattr: []
    };
    if (_0x2b1b86) {
      var _0x1a0bb5 = [];
      var _0x3797cf = [];
      for (x = 0; x < _0x2b1b86.type.length; x++) {
        {
          var _0x4c1153 = {
            type: _0x10d4b5.type = _0x2b1b86.type[x],
            value: _0x4bf1ba < 1 ? 0 : parseInt(_0x2b1b86.val[x]) + parseInt(_0x2b1b86.exval[x] * (parseInt(_0x4bf1ba) - 1))
          };
          var _0x10d4b5 = {};
          _0x10d4b5.value = _0x4bf1ba < 1 ? _0x2b1b86.val[x] : parseInt(_0x2b1b86.val[x]) + parseInt(_0x2b1b86.exval[x] * _0x4bf1ba);
          _0x1a0bb5[x] = _0x4c1153;
          _0x3797cf[x] = _0x10d4b5;
        }
      }
      _0x113251.attr = _0x1a0bb5;
      _0x113251.exattr = _0x3797cf;
    }
    return _0x113251;
  };
  _0x325e41.prototype.edata = function (_0x565c81) {
    var _0x2218f7 = GlobalConfig.newmanghuang22config;
    var _0x5061ee = this.Listdate();
    var _0x590e3c = GlobalConfig.newmanghuangbase22config;
    var _0x223769 = 0;
    this._maxlv = _0x590e3c.maxlv;
    this._openzs = _0x590e3c.zslv;
    this._openday = _0x590e3c.openday;
    for (var _0x1c1760 = 0; _0x1c1760 < _0x5061ee.length; _0x1c1760++) {
      {
        var _0x2a8dd5 = _0x5061ee[_0x1c1760].lv;
        this["item" + _0x1c1760].Icon.source = _0x590e3c.itemicon[_0x1c1760] + "_png";
        this["item" + _0x1c1760].lvNum.text = _0x2a8dd5;
        this["BedEff" + _0x1c1760] || (this["BedEff" + _0x1c1760] = new MovieClip());
        this["BedEff" + _0x1c1760].scaleX = this["BedEff" + _0x1c1760].scaleY = 0.9;
        var _0x352733 = _0x5061ee[_0x1c1760].id;
        var _0xd0a954 = _0x2218f7[_0x352733];
        var _0x351ff5 = this.posattrset(_0xd0a954, _0x2a8dd5);
        if (_0x2a8dd5 < 1) {
          {
            this["BedEff" + _0x1c1760].x = -33335;
            this["BedEff" + _0x1c1760].y = -33336;
            this["item" + _0x1c1760].Icon.filters = [FilterUtil.grayFilter];
          }
        } else {
          this["BedEff" + _0x1c1760].x = 35;
          this["BedEff" + _0x1c1760].y = 36;
          this["item" + _0x1c1760].Icon.filters = null;
          var _0x37ba5e = parseInt(_0x37ba5e) + UserBag.getAttrPower(AttributeData.transformAttr(_0x351ff5.attr));
        }
        this["item" + _0x1c1760].klmaceff.parent.addChild(this["BedEff" + _0x1c1760]);
        this["BedEff" + _0x1c1760].playFile(RES_DIR_MANGHUANG + "jihuo_kuang_1", -1);
        if (_0x1c1760 == this._indexid) {
          {
            this._lv = _0x5061ee[_0x1c1760].lv;
            this._id = _0x5061ee[_0x1c1760].id;
            this._item = _0xd0a954.itemid;
            this._count = _0xd0a954.cost;
            this._uid = 107;
            this._usjid = 10000;
            this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
            if (this._lv > 0) {
              this._count = parseInt(_0xd0a954.cost) + parseInt(_0xd0a954.excost * this._usjid);
            }
            this.curAttr0.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x351ff5.attr), 0, 1, ": ");
            this.curAttr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x351ff5.exattr), 0, 1, ": ");
            this.itemname.text = GlobalConfig.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
            this.itemicon.source = GlobalConfig.ItemConfig[this._item].icon + "_png";
            this.maxbox1.visible = 1;
            this.maxbox2.visible = 0;
          }
        }
      }
    }
    this.powerPanel.setPower(_0x223769);
  };
  _0x325e41.prototype.Viewdata = function (_0x52d005) {
    var _0x294c7c = this.Listdate();
    for (x = 0; x < _0x294c7c.length; x++) {
      if (_0x294c7c[x].lv < 1) {
        return 0;
        break;
      }
    }
    return 1;
  };
  _0x325e41.prototype.Listdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0xecd7b0 = GlobalConfig.newmanghuang22config;
    var _0x2222dd = Dress.ins();
    this.listInfo = [];
    for (var _0x5df17b in _0xecd7b0) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0xecd7b0[_0x5df17b].roletype) {
      var _0x364664 = new DressItemInfo();
      var _0x27681c = _0xecd7b0[_0x5df17b];
      var _0xf77a31 = _0x27681c.id;
      _0x364664.lv = 0;
      _0x364664.id = _0xf77a31;
      _0x364664.job = _0x27681c.roletype;
      _0x2222dd.timeInfo[_0xf77a31] && (_0x364664.timer = _0x2222dd.timeInfo[_0xf77a31].invalidtime, _0x364664.lv = _0x2222dd.timeInfo[_0xf77a31].lv);
      this.listInfo.push(_0x364664);
    }
    return this.listInfo;
  };
  _0x325e41.prototype.closeMenu = function (_0x3c2eb7) {
    {
      switch (_0x3c2eb7.currentTarget) {
        case this.item0:
          this.ViewSelect(0);
          break;
        case this.item1:
          this.ViewSelect(1);
          break;
        case this.item2:
          this.ViewSelect(2);
          break;
        case this.item3:
          this.ViewSelect(3);
          break;
        case this.item4:
          this.ViewSelect(4);
          break;
        case this.heopen:
          ViewManager.ins().open(qinglongpal2227, this._item);
          break;
        case this.Upbntss:
          if (UserZs.ins().lv < this._openzs) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:转生等级达" + this._openzs + "开启|");
          }
          if (GameServer.serverOpenDay + 1 < this._openday) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:开服" + this._openday + "开启|");
          }
          if (this._num < this._count) {
            void UserTips.ins().showTips("|C:0xf3311e&T:所需道具不足|");
            return SoundManager.ins().playEffect("wupindaojubuzubgm");
          }
          if (this._lv >= this._maxlv) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:满阶|");
          }
          if (this._lv < 1) {
            Dress.ins().JiezhikongjianUserReq(this._id, this._uid);
          } else {
            {
              Dress.ins().JiezhikongjianLevelUp(this._id);
            }
          }
      }
    }
  };
  _0x325e41.prototype.ViewSelect = function (_0x432590) {
    for (x = 0; x < 5; x++) {
      if (_0x432590 == x) {
        {
          this["item" + x].Selecte.visible = 1;
        }
      } else {
        this["item" + x].Selecte.visible = 0;
      }
    }
    this._indexid = _0x432590;
    this.edata();
  };
  _0x325e41.prototype.closeMenus = function (_0x2430fa) {
    {
      ViewManager.ins().close(this);
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
    }
  };
  return _0x325e41;
}(BaseEuiView);
__reflect(qinglongpal2228.prototype, "qinglongpal2228");
ViewManager.ins().reg(qinglongpal2228, LayerManager.UI_Main);
var MORoleWin5 = function (_0x58cffe) {
  function _0xb46b04() {
    var _0x56a312 = _0x58cffe.call(this) || this;
    _0x56a312.isTopLevel = true;
    _0x56a312.skinName = "moRoleWinSkin5";
    return _0x56a312;
  }
  __extends(_0xb46b04, _0x58cffe);
  _0xb46b04.prototype.open = function () {
    {
      for (var _0x28f15e = [], _0x1048e1 = 0; _0x1048e1 < arguments.length; _0x1048e1++) {
        _0x28f15e[_0x1048e1] = arguments[_0x1048e1];
      }
      this.viewStack.selectedIndex = 0;
      this.tab.dataProvider = this.viewStack;
      _0x28f15e = _0x28f15e ? _0x28f15e[0] : 0;
      this.roleSelect.setCurRole(_0x28f15e);
      this.addChangeEvent(this.roleSelect, this.onChange);
      this.addChangeEvent(this.tab, this.onTabTouch);
      this.addChangingEvent(this.tab, this.onTabTouching);
      this.addTouchEvent(this.seeRule, this.onTap);
      this.addTouchEvent(this.closeBtn, this.onClick);
      this.observe(UserBag.ins().postItemDel, this.updateRedPoint);
      this.observe(UserBag.ins().postItemCountChange, this.updateRedPoint);
      this.observe(Heirloom.ins().postHeirloomInfo, this.updateRedPoint);
      this.observe(ZhuZai.ins().postZhuZaiInfo, this.updateRedPoint);
      this.observe(ChuanShiShenQi.ins().postChuanShiInfo, this.updateRedPoint);
      this.setOpenIndex(0);
    }
  };
  _0xb46b04.prototype.onTap = function (_0x80e089) {
    switch (_0x80e089.target) {
      case this.seeRule:
        ViewManager.ins().open(CommonHelpWin, GlobalConfig.HelpInfoConfig[104].text);
    }
  };
  _0xb46b04.prototype.onTabTouching = function (_0x31bb84) {
    this.checkTabIsOpen(this.tab.selectedIndex) || _0x31bb84.preventDefault();
  };
  _0xb46b04.openCheck = function () {
    for (var _0x92491 = 0; _0x92491 < arguments.length; _0x92491++) {}
    if (UserZs.ins().lv < GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshilv) {
      {
        if (!(1 < GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday)) {
          UserTips.ins().showTips("传世装备" + GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshilv + "转开启");
          return false;
        }
        if (GameServer.serverOpenDay + 1 < GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday) {
          UserTips.ins().showTips("传世装备开服第" + GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday + "天并达到" + GlobalConfig.ZhuZaiEquipBaseConfig.openzhuanshenglv + "转开启");
          return false;
        }
      }
    } else {
      if (1 < GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday && GameServer.serverOpenDay + 1 < GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday) {
        UserTips.ins().showTips("传世装备开服第" + GlobalConfig.ZhuZaiEquipBaseConfig.openchuanshiday + "天开启");
        return false;
      }
    }
    return true;
  };
  _0xb46b04.prototype.checkTabIsOpen = function (_0x4d93e7) {
    if (0 == _0x4d93e7) {
      return true;
    }
    if (1 == _0x4d93e7) {
      {
        if (!ZhuZai.ins().ZhuZaiIsOpen()) {
          UserTips.ins().showTips("开服第" + GlobalConfig.ZhuZaiEquipBaseConfig.openserverday + "天并达到" + GlobalConfig.ZhuZaiEquipBaseConfig.openzhuanshenglv + "转开启");
          return false;
        }
      }
    } else {
      if (2 == _0x4d93e7 && !ChuanShiShenQi.ins().ShenWuIsOpen()) {
        0 < GlobalConfig.ChuanShiShenQiConfig.openzhuanshenglv ? UserTips.ins().showTips("开服第" + GlobalConfig.ChuanShiShenQiConfig.openserverday + "天并达到" + GlobalConfig.ChuanShiShenQiConfig.openzhuanshenglv + "转开启") : UserTips.ins().showTips("开服第" + GlobalConfig.ChuanShiShenQiConfig.openserverday + "天开启");
        return false;
      }
    }
    return true;
  };
  _0xb46b04.prototype.onTabTouch = function (_0x121358) {
    {
      this.setOpenIndex(this.tab.selectedIndex);
    }
  };
  _0xb46b04.prototype.onChange = function (_0x1e972f) {
    this.setRoleId(this.roleSelect.getCurRole());
  };
  _0xb46b04.prototype.setRoleId = function (_0x365e5f) {
    this.zhuzaiPanel.curRole = _0x365e5f;
    this.setOpenIndex(this.viewStack.selectedIndex);
  };
  _0xb46b04.prototype.setOpenIndex = function (_0x4d1e64) {
    switch (_0x4d1e64) {
      case 0:
        this.roleSelect.hideRole();
        this.qinglongpal2227.open();
        this.title.source = "mwzctitle";
        this.seeRule.visible = false;
      case 1:
        this.roleSelect.hideRole();
        this.qinglongpal2228.open();
        this.title.source = "mwzctitle";
        this.seeRule.visible = false;
      case 2:
        this.roleSelect.hideRole();
        this.qinglongpal2228.open();
        this.title.source = "mwzctitle";
        this.seeRule.visible = false;
    }
    this.updateRedPoint();
  };
  _0xb46b04.prototype.updateRedPoint = function () {
    for (var _0x5a7cb7 = this.roleSelect.getCurRole(), _0x4063a5 = false, _0x58cffe = false, _0x3e13fc = 0; _0x3e13fc < SubRoles.ins().subRolesLen; _0x3e13fc++) {
      var _0x5a4cf0 = SubRoles.ins().getSubRoleByIndex(_0x3e13fc);
      if (_0x5a4cf0) {
        {
          for (var _0x1542a1 = false, _0x21629e = 0; 8 > _0x21629e; _0x21629e++) {
            var _0xcdf30e = this.getInitInfoEx(_0x5a4cf0, _0x21629e);
            var _0x1009a8;
            _0x1009a8 = _0xcdf30e.lv ? GlobalConfig.HeirloomEquipConfig[_0xcdf30e.slot][_0xcdf30e.lv] : GlobalConfig.HeirloomEquipFireConfig[_0x21629e + 1];
            _0xcdf30e = 0;
            var _0x5113ef = _0xcdf30e;
            if (_0x1009a8) {
              {
                _0x1009a8 = _0x1009a8.expend;
                if (!_0x1009a8) {
                  continue;
                }
                _0xcdf30e = (_0x1542a1 = UserBag.ins().getBagItemById(_0x1009a8.id)) ? _0x1542a1.count : 0;
                _0x5113ef = _0x1009a8.count;
              }
            }
            if (_0xcdf30e >= _0x5113ef) {
              _0x1542a1 = true;
              break;
            }
            _0x1542a1 = false;
          }
          (_0x5a4cf0 = ZhuZai.ins().roleIsMayUse(_0x5a7cb7)) && (_0x58cffe = true);
          1 == _0x1542a1 && (_0x4063a5 = true);
          0 == this.viewStack.selectedIndex ? this.roleSelect.showRedPoint(_0x3e13fc, _0x1542a1) : this.roleSelect.showRedPoint(_0x3e13fc, _0x5a4cf0);
        }
      }
    }
    this.redPoint0.visible = _0x4063a5;
    0 == this.viewStack.selectedIndex ? this.redPoint1.visible = _0x58cffe : 1 == this.viewStack.selectedIndex && (this.redPoint1.visible = ZhuZai.ins().roleIsMayUse(_0x5a7cb7));
    this.redPoint2.visible = ChuanShiShenQi.ins().ChuanShiIsMayCaozuo();
  };
  _0xb46b04.prototype.getInitInfoEx = function (_0x25b8ba, _0x3f6c07) {
    return _0x25b8ba.heirloom.getInfoBySolt(_0x3f6c07);
  };
  _0xb46b04.prototype.onClick = function (_0xce2377) {
    switch (_0xce2377.target) {
      case this.closeBtn:
        ViewManager.ins().close(this);
    }
  };
  _0xb46b04.prototype.close = function () {
    {
      this.removeTouchEvent(this.seeRule, this.onTap);
      this.removeTouchEvent(this.roleSelect, this.onChange);
      this.removeTouchEvent(this.tab, this.onTabTouch);
      this.removeTouchEvent(this.tab, this.onTabTouching);
      this.removeTouchEvent(this.closeBtn, this.onClick);
      this.removeObserve();
    }
  };
  return _0xb46b04;
}(BaseEuiView);
BaseEuiView;
__reflect(MORoleWin5.prototype, "MORoleWin5");
ViewManager.ins().reg(MORoleWin5, LayerManager.UI_Main);
(function (_0x41ee29, _0x43bfeb, _0x493a04) {
  var _0x32719f = function () {
    var _0x45d8c0 = true;
    return function (_0x2b1d0a, _0x165e8b) {
      var _0xa89500 = _0x45d8c0 ? function () {
        if (_0x165e8b) {
          var _0x16a18b = _0x165e8b.apply(_0x2b1d0a, arguments);
          _0x165e8b = null;
          return _0x16a18b;
        }
      } : function () {};
      _0x45d8c0 = false;
      return _0xa89500;
    };
  }();
  var _0x1a9b15 = _0x32719f(this, function () {
    var _0x43385e = function () {
      return "dev";
    };
    var _0x4e787a = function () {
      return "window";
    };
    var _0x4af53d = function () {
      var _0x1b6077 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x1b6077.test(_0x43385e.toString());
    };
    var _0x4ff688 = function () {
      var _0x57ee0a = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x57ee0a.test(_0x4e787a.toString());
    };
    var _0x3d1fea = function (_0x4325e1) {
      var _0xab2c16 = 0 >> 1 + NaN;
      if (_0x4325e1.indexOf("i" === _0xab2c16)) {
        _0x21c6eb(_0x4325e1);
      }
    };
    var _0x21c6eb = function (_0x1dc755) {
      var _0x520f9e = 3 >> 1 + NaN;
      if (_0x1dc755.indexOf("true"[3]) !== _0x520f9e) {
        _0x3d1fea(_0x1dc755);
      }
    };
    if (!_0x4af53d()) {
      if (!_0x4ff688()) {
        _0x3d1fea("indеxOf");
      } else {
        _0x3d1fea("indexOf");
      }
    } else {
      _0x3d1fea("indеxOf");
    }
  });
  _0x1a9b15();
  _0x493a04 = "al";
  try {
    _0x493a04 += "ert";
    _0x43bfeb = encode_version;
    if (!(typeof _0x43bfeb !== "undefined" && _0x43bfeb === "jsjiami.com.v5")) {
      _0x41ee29[_0x493a04]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3a4577) {
    {
      _0x41ee29[_0x493a04]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";