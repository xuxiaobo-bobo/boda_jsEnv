// SVGFEMorphologyElement对象

SVGFEMorphologyElement = function SVGFEMorphologyElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEMorphologyElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEMorphologyElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEMorphologyElement, "SVGFEMorphologyElement");
SVGFEMorphologyElement.prototype.__proto__ = SVGElement.prototype;
SVGFEMorphologyElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement, "SVG_MORPHOLOGY_OPERATOR_DILATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement, "SVG_MORPHOLOGY_OPERATOR_ERODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement, "SVG_MORPHOLOGY_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "SVG_MORPHOLOGY_OPERATOR_DILATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "SVG_MORPHOLOGY_OPERATOR_ERODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "SVG_MORPHOLOGY_OPERATOR_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "operator", {
  configurable: true,
  enumerable: true,
  get: function operator() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "operator_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "radiusX", {
  configurable: true,
  enumerable: true,
  get: function radiusX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "radiusX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "radiusY", {
  configurable: true,
  enumerable: true,
  get: function radiusY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "radiusY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMorphologyElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMorphologyElement.prototype, "SVGFEMorphologyElement", "result_get", arguments);
  },
  set: undefined
});