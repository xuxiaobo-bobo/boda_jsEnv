// SVGAnimatedNumber对象

SVGAnimatedNumber = function SVGAnimatedNumber() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedNumber)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedNumber 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedNumber, "SVGAnimatedNumber");
bodavm.toolsFunc.defineProperty(SVGAnimatedNumber.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "baseVal_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimatedNumber.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedNumber.prototype, "SVGAnimatedNumber", "animVal_get", arguments);
  },
  set: undefined
});