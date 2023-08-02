// SVGPolylineElement对象

SVGPolylineElement = function SVGPolylineElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPolylineElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPolylineElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPolylineElement, "SVGPolylineElement");
SVGPolylineElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGPolylineElement.__proto__ = SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGPolylineElement.prototype, "points", {
  configurable: true,
  enumerable: true,
  get: function points() {
    return bodavm.toolsFunc.dispatch(this, SVGPolylineElement.prototype, "SVGPolylineElement", "points_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPolylineElement.prototype, "animatedPoints", {
  configurable: true,
  enumerable: true,
  get: function animatedPoints() {
    return bodavm.toolsFunc.dispatch(this, SVGPolylineElement.prototype, "SVGPolylineElement", "animatedPoints_get", arguments);
  },
  set: undefined
});