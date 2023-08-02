// SVGAnimatedTransformList对象

SVGAnimatedTransformList = function SVGAnimatedTransformList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimatedTransformList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimatedTransformList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimatedTransformList, "SVGAnimatedTransformList");
bodavm.toolsFunc.defineProperty(SVGAnimatedTransformList.prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: function baseVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedTransformList.prototype, "SVGAnimatedTransformList", "baseVal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimatedTransformList.prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: function animVal() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimatedTransformList.prototype, "SVGAnimatedTransformList", "animVal_get", arguments);
  },
  set: undefined
});