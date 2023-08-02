// SVGFEBlendElement对象

SVGFEBlendElement = function SVGFEBlendElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEBlendElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEBlendElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEBlendElement, "SVGFEBlendElement");
SVGFEBlendElement.prototype.__proto__ = SVGElement.prototype;
SVGFEBlendElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_LUMINOSITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_SATURATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_HUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_EXCLUSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_DIFFERENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_SOFT_LIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_HARD_LIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_COLOR_BURN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_COLOR_DODGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_OVERLAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_LIGHTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_DARKEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_SCREEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_MULTIPLY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_NORMAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement, "SVG_FEBLEND_MODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_LUMINOSITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_SATURATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_HUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_EXCLUSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_DIFFERENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_SOFT_LIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_HARD_LIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_COLOR_BURN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_COLOR_DODGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_OVERLAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_LIGHTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_DARKEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_SCREEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_MULTIPLY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_NORMAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "SVG_FEBLEND_MODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "in2", {
  configurable: true,
  enumerable: true,
  get: function in2() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "in2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "mode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEBlendElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEBlendElement.prototype, "SVGFEBlendElement", "result_get", arguments);
  },
  set: undefined
});