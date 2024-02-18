// SVGTextElement对象

bodaEnv.memory.globlProtoObj["SVGTextElement"] = function SVGTextElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTextElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTextElement"], "SVGTextElement");
bodaEnv.memory.globlProtoObj["SVGTextElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTextElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGTextPositioningElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextElement"], "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextElement"], "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTextElement"], "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});