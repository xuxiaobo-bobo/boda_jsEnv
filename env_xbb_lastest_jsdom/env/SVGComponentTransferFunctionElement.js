// SVGComponentTransferFunctionElement对象

bodavm.memory.globalobj['SVGComponentTransferFunctionElement'] = function SVGComponentTransferFunctionElement() {
  console.log_copy('SVGComponentTransferFunctionElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGComponentTransferFunctionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGComponentTransferFunctionElement'], "SVGComponentTransferFunctionElement");
bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "tableValues", {
  configurable: true,
  enumerable: true,
  get: function tableValues() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "tableValues_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "slope", {
  configurable: true,
  enumerable: true,
  get: function slope() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "slope_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "intercept", {
  configurable: true,
  enumerable: true,
  get: function intercept() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "intercept_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "amplitude", {
  configurable: true,
  enumerable: true,
  get: function amplitude() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "amplitude_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "exponent", {
  configurable: true,
  enumerable: true,
  get: function exponent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "exponent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGComponentTransferFunctionElement', "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype, "SVGComponentTransferFunctionElement", "offset_get", arguments);
  },
  set: undefined
}, 'prototype');