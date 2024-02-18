// SVGFEFuncRElement对象

bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"] = function SVGFEFuncRElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGFEFuncRElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVGFEFuncRElement");
bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGComponentTransferFunctionElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGComponentTransferFunctionElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncRElement"], "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});