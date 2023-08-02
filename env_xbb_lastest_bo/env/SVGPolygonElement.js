// SVGPolygonElement对象

SVGPolygonElement = function SVGPolygonElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPolygonElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPolygonElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPolygonElement, "SVGPolygonElement");
SVGPolygonElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGPolygonElement.__proto__ = SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGPolygonElement.prototype, "points", {
  configurable: true,
  enumerable: true,
  get: function points() {
    return bodavm.toolsFunc.dispatch(this, SVGPolygonElement.prototype, "SVGPolygonElement", "points_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPolygonElement.prototype, "animatedPoints", {
  configurable: true,
  enumerable: true,
  get: function animatedPoints() {
    return bodavm.toolsFunc.dispatch(this, SVGPolygonElement.prototype, "SVGPolygonElement", "animatedPoints_get", arguments);
  },
  set: undefined
});