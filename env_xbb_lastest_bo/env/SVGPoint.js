// SVGPoint对象

SVGPoint = function SVGPoint() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPoint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPoint 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPoint, "SVGPoint");
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "matrixTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matrixTransform() {
    return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "matrixTransform", arguments);
  }
});