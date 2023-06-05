// StaticRange对象

bodavm.memory.globalobj['StaticRange'] = function StaticRange() {
  console.log_copy('StaticRange 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof StaticRange)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StaticRange': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StaticRange'], "StaticRange");
bodavm.memory.globalobj['StaticRange'].prototype.__proto__ = bodavm.memory.globalobj['AbstractRange'].prototype;
bodavm.memory.globalobj['StaticRange'].__proto__ = bodavm.memory.globalobj['AbstractRange'];