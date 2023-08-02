// SVGFEFuncBElement对象

SVGFEFuncBElement = function SVGFEFuncBElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEFuncBElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEFuncBElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEFuncBElement, "SVGFEFuncBElement");
SVGFEFuncBElement.prototype.__proto__ = SVGComponentTransferFunctionElement.prototype;
SVGFEFuncBElement.__proto__ = SVGComponentTransferFunctionElement;
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFEFuncBElement, "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});