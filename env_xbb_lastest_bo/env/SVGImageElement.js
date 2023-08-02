// SVGImageElement对象

SVGImageElement = function SVGImageElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGImageElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGImageElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGImageElement, "SVGImageElement");
SVGImageElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGImageElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "decoding", {
  configurable: true,
  enumerable: true,
  get: function decoding() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "decoding_get", arguments);
  },
  set: function decoding() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "decoding_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "href_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGImageElement.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, SVGImageElement.prototype, "SVGImageElement", "decode", arguments);
  }
});