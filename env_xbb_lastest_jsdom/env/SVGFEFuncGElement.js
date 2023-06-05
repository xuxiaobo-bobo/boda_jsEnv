// SVGFEFuncGElement对象

bodavm.memory.globalobj['SVGFEFuncGElement'] = function SVGFEFuncGElement() {
  console.log_copy('SVGFEFuncGElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEFuncGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEFuncGElement'], "SVGFEFuncGElement");
bodavm.memory.globalobj['SVGFEFuncGElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'].prototype;
bodavm.memory.globalobj['SVGFEFuncGElement'].__proto__ = bodavm.memory.globalobj['SVGComponentTransferFunctionElement'];
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGFEFuncGElement', "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});