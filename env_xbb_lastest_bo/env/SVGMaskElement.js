// SVGMaskElement对象

SVGMaskElement = function SVGMaskElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGMaskElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGMaskElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGMaskElement, "SVGMaskElement");
SVGMaskElement.prototype.__proto__ = SVGElement.prototype;
SVGMaskElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "maskUnits", {
  configurable: true,
  enumerable: true,
  get: function maskUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "maskUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "maskContentUnits", {
  configurable: true,
  enumerable: true,
  get: function maskContentUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "maskContentUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "requiredExtensions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMaskElement.prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, SVGMaskElement.prototype, "SVGMaskElement", "systemLanguage_get", arguments);
  },
  set: undefined
});