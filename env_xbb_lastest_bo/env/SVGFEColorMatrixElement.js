// SVGFEColorMatrixElement对象

SVGFEColorMatrixElement = function SVGFEColorMatrixElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEColorMatrixElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEColorMatrixElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEColorMatrixElement, "SVGFEColorMatrixElement");
SVGFEColorMatrixElement.prototype.__proto__ = SVGElement.prototype;
SVGFEColorMatrixElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement, "SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement, "SVG_FECOLORMATRIX_TYPE_HUEROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement, "SVG_FECOLORMATRIX_TYPE_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement, "SVG_FECOLORMATRIX_TYPE_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement, "SVG_FECOLORMATRIX_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "SVG_FECOLORMATRIX_TYPE_HUEROTATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "SVG_FECOLORMATRIX_TYPE_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "SVG_FECOLORMATRIX_TYPE_MATRIX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "SVG_FECOLORMATRIX_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "values_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEColorMatrixElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEColorMatrixElement.prototype, "SVGFEColorMatrixElement", "result_get", arguments);
  },
  set: undefined
});