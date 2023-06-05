// SVGFEFuncBElement对象

bodavm.memory.globalobj['SVGFEFuncBElement'] = function SVGFEFuncBElement() {
  console.log_copy('SVGFEFuncBElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEFuncBElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEFuncBElement'], "SVGFEFuncBElement");
bodavm.memory.globalobj['SVGFEFuncBElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype;
bodavm.memory.globalobj['SVGFEFuncBElement'].__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'];
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEFuncBElement', "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});