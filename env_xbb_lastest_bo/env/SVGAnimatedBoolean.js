// SVGAnimatedBoolean对象

SVGAnimatedBoolean = function SVGAnimatedBoolean() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedBoolean)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedBoolean 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedBoolean, "SVGAnimatedBoolean");
bodavm.toolsFunc.defineProperty(SVGAnimatedBoolean.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedBoolean.prototype, "SVGAnimatedBoolean", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedBoolean.prototype, "SVGAnimatedBoolean", "baseVal_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimatedBoolean.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedBoolean.prototype, "SVGAnimatedBoolean", "animVal_get", arguments);
  },
  set: undefined
});