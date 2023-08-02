// SVGFEImageElement对象

SVGFEImageElement = function SVGFEImageElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEImageElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEImageElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEImageElement, "SVGFEImageElement");
SVGFEImageElement.prototype.__proto__ = SVGElement.prototype;
SVGFEImageElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEImageElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGFEImageElement.prototype, "SVGFEImageElement", "href_get", arguments);
  },
  set: undefined
});