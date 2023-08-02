// SVGComponentTransferFunctionElement对象

SVGComponentTransferFunctionElement = function SVGComponentTransferFunctionElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGComponentTransferFunctionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGComponentTransferFunctionElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGComponentTransferFunctionElement, "SVGComponentTransferFunctionElement");
SVGComponentTransferFunctionElement.prototype.__proto__ = SVGElement.prototype;
SVGComponentTransferFunctionElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement, "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "tableValues", {
  configurable: true,
  enumerable: true,
  get: function tableValues() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "tableValues_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "slope", {
  configurable: true,
  enumerable: true,
  get: function slope() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "slope_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "intercept", {
  configurable: true,
  enumerable: true,
  get: function intercept() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "intercept_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "amplitude", {
  configurable: true,
  enumerable: true,
  get: function amplitude() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "amplitude_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "exponent", {
  configurable: true,
  enumerable: true,
  get: function exponent() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "exponent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGComponentTransferFunctionElement.prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, SVGComponentTransferFunctionElement.prototype, "SVGComponentTransferFunctionElement", "offset_get", arguments);
  },
  set: undefined
});