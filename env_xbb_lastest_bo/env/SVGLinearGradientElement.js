// SVGLinearGradientElement对象

SVGLinearGradientElement = function SVGLinearGradientElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGLinearGradientElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGLinearGradientElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGLinearGradientElement, "SVGLinearGradientElement");
SVGLinearGradientElement.prototype.__proto__ = SVGGradientElement.prototype;
SVGLinearGradientElement.__proto__ = SVGGradientElement;
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement, "SVG_SPREADMETHOD_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement, "SVG_SPREADMETHOD_REFLECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement, "SVG_SPREADMETHOD_PAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement, "SVG_SPREADMETHOD_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement.prototype, "x1", {
  configurable: true,
  enumerable: true,
  get: function x1() {
    return bodavm.toolsFunc.dispatch(this, SVGLinearGradientElement.prototype, "SVGLinearGradientElement", "x1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement.prototype, "y1", {
  configurable: true,
  enumerable: true,
  get: function y1() {
    return bodavm.toolsFunc.dispatch(this, SVGLinearGradientElement.prototype, "SVGLinearGradientElement", "y1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement.prototype, "x2", {
  configurable: true,
  enumerable: true,
  get: function x2() {
    return bodavm.toolsFunc.dispatch(this, SVGLinearGradientElement.prototype, "SVGLinearGradientElement", "x2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLinearGradientElement.prototype, "y2", {
  configurable: true,
  enumerable: true,
  get: function y2() {
    return bodavm.toolsFunc.dispatch(this, SVGLinearGradientElement.prototype, "SVGLinearGradientElement", "y2_get", arguments);
  },
  set: undefined
});