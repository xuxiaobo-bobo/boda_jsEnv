// SVGFEFuncRElement对象

SVGFEFuncRElement = function SVGFEFuncRElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEFuncRElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEFuncRElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEFuncRElement, "SVGFEFuncRElement");
SVGFEFuncRElement.prototype.__proto__ = SVGComponentTransferFunctionElement.prototype;
SVGFEFuncRElement.__proto__ = SVGComponentTransferFunctionElement;
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEFuncRElement, "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});