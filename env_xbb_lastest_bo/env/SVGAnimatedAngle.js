// SVGAnimatedAngle对象

SVGAnimatedAngle = function SVGAnimatedAngle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedAngle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedAngle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedAngle, "SVGAnimatedAngle");
bodavm.toolsFunc.defineProperty(SVGAnimatedAngle.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedAngle.prototype, "SVGAnimatedAngle", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedAngle.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedAngle.prototype, "SVGAnimatedAngle", "animVal_get", arguments);
  },
  set: undefined
});