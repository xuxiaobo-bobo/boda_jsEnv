// SVGPatternElement对象

SVGPatternElement = function SVGPatternElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPatternElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPatternElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPatternElement, "SVGPatternElement");
SVGPatternElement.prototype.__proto__ = SVGElement.prototype;
SVGPatternElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternUnits", {
  configurable: true,
  enumerable: true,
  get: function patternUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternContentUnits", {
  configurable: true,
  enumerable: true,
  get: function patternContentUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternContentUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "patternTransform", {
  configurable: true,
  enumerable: true,
  get: function patternTransform() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "patternTransform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "viewBox_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "href_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "requiredExtensions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPatternElement.prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, SVGPatternElement.prototype, "SVGPatternElement", "systemLanguage_get", arguments);
  },
  set: undefined
});