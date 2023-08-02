// SVGForeignObjectElement对象

SVGForeignObjectElement = function SVGForeignObjectElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGForeignObjectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGForeignObjectElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGForeignObjectElement, "SVGForeignObjectElement");
SVGForeignObjectElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGForeignObjectElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGForeignObjectElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGForeignObjectElement.prototype, "SVGForeignObjectElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGForeignObjectElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGForeignObjectElement.prototype, "SVGForeignObjectElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGForeignObjectElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGForeignObjectElement.prototype, "SVGForeignObjectElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGForeignObjectElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGForeignObjectElement.prototype, "SVGForeignObjectElement", "height_get", arguments);
  },
  set: undefined
});