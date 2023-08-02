// SVGFEFloodElement对象

SVGFEFloodElement = function SVGFEFloodElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEFloodElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEFloodElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEFloodElement, "SVGFEFloodElement");
SVGFEFloodElement.prototype.__proto__ = SVGElement.prototype;
SVGFEFloodElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEFloodElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEFloodElement.prototype, "SVGFEFloodElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEFloodElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEFloodElement.prototype, "SVGFEFloodElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEFloodElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEFloodElement.prototype, "SVGFEFloodElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEFloodElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEFloodElement.prototype, "SVGFEFloodElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEFloodElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEFloodElement.prototype, "SVGFEFloodElement", "result_get", arguments);
  },
  set: undefined
});