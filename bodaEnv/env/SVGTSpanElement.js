// SVGTSpanElement对象

bodaEnv.memory.globlProtoObj["SVGTSpanElement"] = function SVGTSpanElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTSpanElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTSpanElement"], "SVGTSpanElement");
bodaEnv.memory.globlProtoObj["SVGTSpanElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTSpanElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTSpanElement"], "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTSpanElement"], "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTSpanElement"], "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});