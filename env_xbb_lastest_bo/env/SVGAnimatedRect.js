// SVGAnimatedRect对象

SVGAnimatedRect = function SVGAnimatedRect() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedRect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedRect 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedRect, "SVGAnimatedRect");
bodavm.toolsFunc.defineProperty(SVGAnimatedRect.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedRect.prototype, "SVGAnimatedRect", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedRect.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedRect.prototype, "SVGAnimatedRect", "animVal_get", arguments);
  },
  set: undefined
});