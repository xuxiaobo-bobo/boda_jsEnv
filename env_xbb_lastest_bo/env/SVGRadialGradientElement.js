// SVGRadialGradientElement对象

SVGRadialGradientElement = function SVGRadialGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGRadialGradientElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGRadialGradientElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGRadialGradientElement, "SVGRadialGradientElement");
SVGRadialGradientElement.prototype.__proto__ = SVGGradientElement.prototype;
SVGRadialGradientElement.__proto__ = SVGGradientElement;
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement, "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement, "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement, "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement, "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "cx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "cy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "r", {
  configurable: true,
  enumerable: true,
  get: function r() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "r_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "fx", {
  configurable: true,
  enumerable: true,
  get: function fx() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "fx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "fy", {
  configurable: true,
  enumerable: true,
  get: function fy() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "fy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRadialGradientElement.prototype, "fr", {
  configurable: true,
  enumerable: true,
  get: function fr() {
    return bodavm.toolsFunc.dispatch(this, SVGRadialGradientElement.prototype, "SVGRadialGradientElement", "fr_get", arguments);
  },
  set: undefined
});