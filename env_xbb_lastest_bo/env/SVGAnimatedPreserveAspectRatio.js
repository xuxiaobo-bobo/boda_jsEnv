// SVGAnimatedPreserveAspectRatio对象

SVGAnimatedPreserveAspectRatio = function SVGAnimatedPreserveAspectRatio() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedPreserveAspectRatio)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedPreserveAspectRatio 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedPreserveAspectRatio, "SVGAnimatedPreserveAspectRatio");
bodavm.toolsFunc.defineProperty(SVGAnimatedPreserveAspectRatio.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedPreserveAspectRatio.prototype, "SVGAnimatedPreserveAspectRatio", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedPreserveAspectRatio.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedPreserveAspectRatio.prototype, "SVGAnimatedPreserveAspectRatio", "animVal_get", arguments);
  },
  set: undefined
});