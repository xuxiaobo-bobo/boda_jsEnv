// SVGFEDiffuseLightingElement对象

SVGFEDiffuseLightingElement = function SVGFEDiffuseLightingElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEDiffuseLightingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEDiffuseLightingElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEDiffuseLightingElement, "SVGFEDiffuseLightingElement");
SVGFEDiffuseLightingElement.prototype.__proto__ = SVGElement.prototype;
SVGFEDiffuseLightingElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "surfaceScale", {
  configurable: true,
  enumerable: true,
  get: function surfaceScale() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "surfaceScale_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "diffuseConstant", {
  configurable: true,
  enumerable: true,
  get: function diffuseConstant() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "diffuseConstant_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEDiffuseLightingElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEDiffuseLightingElement.prototype, "SVGFEDiffuseLightingElement", "result_get", arguments);
  },
  set: undefined
});