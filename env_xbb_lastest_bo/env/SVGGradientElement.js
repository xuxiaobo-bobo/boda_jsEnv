// SVGGradientElement对象

SVGGradientElement = function SVGGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGGradientElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGGradientElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGGradientElement, "SVGGradientElement");
SVGGradientElement.prototype.__proto__ = SVGElement.prototype;
SVGGradientElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGGradientElement, "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGGradientElement, "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGGradientElement, "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGGradientElement, "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "gradientUnits", {
  configurable: true,
  enumerable: true,
  get: function gradientUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGGradientElement.prototype, "SVGGradientElement", "gradientUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "gradientTransform", {
  configurable: true,
  enumerable: true,
  get: function gradientTransform() {
    return bodavm.toolsFunc.dispatch(this, SVGGradientElement.prototype, "SVGGradientElement", "gradientTransform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "spreadMethod", {
  configurable: true,
  enumerable: true,
  get: function spreadMethod() {
    return bodavm.toolsFunc.dispatch(this, SVGGradientElement.prototype, "SVGGradientElement", "spreadMethod_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGGradientElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGGradientElement.prototype, "SVGGradientElement", "href_get", arguments);
  },
  set: undefined
});