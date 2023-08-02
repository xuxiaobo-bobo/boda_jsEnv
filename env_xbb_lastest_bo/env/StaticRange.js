// StaticRange对象

StaticRange = function StaticRange() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof StaticRange)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'StaticRange': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('StaticRange 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(StaticRange, "StaticRange");
StaticRange.prototype.__proto__ = AbstractRange.prototype;
StaticRange.__proto__ = AbstractRange;