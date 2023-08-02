// SVGGeometryElement对象

SVGGeometryElement = function SVGGeometryElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGGeometryElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGGeometryElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGGeometryElement, "SVGGeometryElement");
SVGGeometryElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGGeometryElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "pathLength", {
  configurable: true,
  enumerable: true,
  get: function pathLength() {
    return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "pathLength_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getPointAtLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPointAtLength() {
    return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getPointAtLength", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "getTotalLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTotalLength() {
    return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "getTotalLength", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInFill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInFill() {
    return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInFill", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGGeometryElement.prototype, "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isPointInStroke() {
    return bodavm.toolsFunc.dispatch(this, SVGGeometryElement.prototype, "SVGGeometryElement", "isPointInStroke", arguments);
  }
});