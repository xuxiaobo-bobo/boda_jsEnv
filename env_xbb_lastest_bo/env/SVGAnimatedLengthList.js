// SVGAnimatedLengthList对象

SVGAnimatedLengthList = function SVGAnimatedLengthList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedLengthList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedLengthList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedLengthList, "SVGAnimatedLengthList");
bodavm.toolsFunc.defineProperty(SVGAnimatedLengthList.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedLengthList.prototype, "SVGAnimatedLengthList", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedLengthList.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedLengthList.prototype, "SVGAnimatedLengthList", "animVal_get", arguments);
  },
  set: undefined
});