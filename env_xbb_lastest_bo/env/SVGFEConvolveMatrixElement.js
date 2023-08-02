// SVGFEConvolveMatrixElement对象

SVGFEConvolveMatrixElement = function SVGFEConvolveMatrixElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEConvolveMatrixElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEConvolveMatrixElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEConvolveMatrixElement, "SVGFEConvolveMatrixElement");
SVGFEConvolveMatrixElement.prototype.__proto__ = SVGElement.prototype;
SVGFEConvolveMatrixElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement, "SVG_EDGEMODE_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement, "SVG_EDGEMODE_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement, "SVG_EDGEMODE_DUPLICATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement, "SVG_EDGEMODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "SVG_EDGEMODE_NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "SVG_EDGEMODE_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "SVG_EDGEMODE_DUPLICATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "SVG_EDGEMODE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "orderX", {
  configurable: true,
  enumerable: true,
  get: function orderX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "orderX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "orderY", {
  configurable: true,
  enumerable: true,
  get: function orderY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "orderY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "kernelMatrix", {
  configurable: true,
  enumerable: true,
  get: function kernelMatrix() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "kernelMatrix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "divisor", {
  configurable: true,
  enumerable: true,
  get: function divisor() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "divisor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "bias", {
  configurable: true,
  enumerable: true,
  get: function bias() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "bias_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "targetX", {
  configurable: true,
  enumerable: true,
  get: function targetX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "targetX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "targetY", {
  configurable: true,
  enumerable: true,
  get: function targetY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "targetY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "edgeMode", {
  configurable: true,
  enumerable: true,
  get: function edgeMode() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "edgeMode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "preserveAlpha", {
  configurable: true,
  enumerable: true,
  get: function preserveAlpha() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "preserveAlpha_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEConvolveMatrixElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEConvolveMatrixElement.prototype, "SVGFEConvolveMatrixElement", "result_get", arguments);
  },
  set: undefined
});