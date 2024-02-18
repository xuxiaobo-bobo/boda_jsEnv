// SVGFEFuncAElement对象

bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"] = function SVGFEFuncAElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGFEFuncAElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVGFEFuncAElement");
bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGComponentTransferFunctionElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGComponentTransferFunctionElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_GAMMA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_TABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEFuncAElement"], "SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});