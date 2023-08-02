// SVGFECompositeElement对象

SVGFECompositeElement = function SVGFECompositeElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFECompositeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFECompositeElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFECompositeElement, "SVGFECompositeElement");
SVGFECompositeElement.prototype.__proto__ = SVGElement.prototype;
SVGFECompositeElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_ARITHMETIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_XOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_ATOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_OUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_OVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement, "SVG_FECOMPOSITE_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_ARITHMETIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_XOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_ATOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_OUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_OVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "SVG_FECOMPOSITE_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "in2", {
  configurable: true,
  enumerable: true,
  get: function in2() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "in2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "operator", {
  configurable: true,
  enumerable: true,
  get: function operator() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "operator_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "k1", {
  configurable: true,
  enumerable: true,
  get: function k1() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "k1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "k2", {
  configurable: true,
  enumerable: true,
  get: function k2() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "k2_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "k3", {
  configurable: true,
  enumerable: true,
  get: function k3() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "k3_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "k4", {
  configurable: true,
  enumerable: true,
  get: function k4() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "k4_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFECompositeElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFECompositeElement.prototype, "SVGFECompositeElement", "result_get", arguments);
  },
  set: undefined
});