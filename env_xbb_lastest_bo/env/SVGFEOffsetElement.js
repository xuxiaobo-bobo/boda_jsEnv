// SVGFEOffsetElement对象

SVGFEOffsetElement = function SVGFEOffsetElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEOffsetElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEOffsetElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEOffsetElement, "SVGFEOffsetElement");
SVGFEOffsetElement.prototype.__proto__ = SVGElement.prototype;
SVGFEOffsetElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "dx", {
  configurable: true,
  enumerable: true,
  get: function dx() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "dx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "dy", {
  configurable: true,
  enumerable: true,
  get: function dy() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "dy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEOffsetElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEOffsetElement.prototype, "SVGFEOffsetElement", "result_get", arguments);
  },
  set: undefined
});