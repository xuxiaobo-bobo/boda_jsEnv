// SVGAnimatedLength对象

SVGAnimatedLength = function SVGAnimatedLength() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedLength)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedLength 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedLength, "SVGAnimatedLength");
bodavm.toolsFunc.defineProperty(SVGAnimatedLength.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedLength.prototype, "SVGAnimatedLength", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedLength.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedLength.prototype, "SVGAnimatedLength", "animVal_get", arguments);
  },
  set: undefined
});