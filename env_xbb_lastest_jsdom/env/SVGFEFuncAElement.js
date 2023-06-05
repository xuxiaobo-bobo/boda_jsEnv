// SVGFEFuncAElement对象

bodavm.memory.globalobj['SVGFEFuncAElement'] = function SVGFEFuncAElement() {
  console.log_copy('SVGFEFuncAElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEFuncAElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEFuncAElement'], "SVGFEFuncAElement");
bodavm.memory.globalobj['SVGFEFuncAElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype;
bodavm.memory.globalobj['SVGFEFuncAElement'].__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'];
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEFuncAElement', "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});