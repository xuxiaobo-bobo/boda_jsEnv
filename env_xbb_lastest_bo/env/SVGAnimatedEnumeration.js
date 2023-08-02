// SVGAnimatedEnumeration对象

SVGAnimatedEnumeration = function SVGAnimatedEnumeration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedEnumeration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedEnumeration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedEnumeration, "SVGAnimatedEnumeration");
bodavm.toolsFunc.defineProperty(SVGAnimatedEnumeration.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedEnumeration.prototype, "SVGAnimatedEnumeration", "baseVal_get", arguments);
  },
  set: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedEnumeration.prototype, "SVGAnimatedEnumeration", "baseVal_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimatedEnumeration.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedEnumeration.prototype, "SVGAnimatedEnumeration", "animVal_get", arguments);
  },
  set: undefined
});