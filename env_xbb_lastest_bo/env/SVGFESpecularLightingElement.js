// SVGFESpecularLightingElement对象

SVGFESpecularLightingElement = function SVGFESpecularLightingElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFESpecularLightingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFESpecularLightingElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFESpecularLightingElement, "SVGFESpecularLightingElement");
SVGFESpecularLightingElement.prototype.__proto__ = SVGElement.prototype;
SVGFESpecularLightingElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "surfaceScale", {
  configurable: true,
  enumerable: true,
  get: function surfaceScale() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "surfaceScale_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "specularConstant", {
  configurable: true,
  enumerable: true,
  get: function specularConstant() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "specularConstant_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "specularExponent", {
  configurable: true,
  enumerable: true,
  get: function specularExponent() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "specularExponent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFESpecularLightingElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFESpecularLightingElement.prototype, "SVGFESpecularLightingElement", "result_get", arguments);
  },
  set: undefined
});