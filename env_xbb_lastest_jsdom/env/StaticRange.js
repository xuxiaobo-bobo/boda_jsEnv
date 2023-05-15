// StaticRange对象
bodavm.memory.globalobj['StaticRange'] = function StaticRange(){if (!(this instanceof StaticRange)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StaticRange': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StaticRange'], "StaticRange");
bodavm.memory.globalobj['StaticRange'].prototype.__proto__=bodavm.memory.globalobj['AbstractRange'].prototype;
bodavm.memory.globalobj['StaticRange'].__proto__=bodavm.memory.globalobj['AbstractRange'];
