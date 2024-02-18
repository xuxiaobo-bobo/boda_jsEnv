// SVGStopElement对象

bodaEnv.memory.globlProtoObj["SVGStopElement"] = function SVGStopElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGStopElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGStopElement"], "SVGStopElement");
bodaEnv.memory.globlProtoObj["SVGStopElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGStopElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStopElement"].prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: {
    offset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStopElement"].prototype, "SVGStopElement", "offset_get", arguments);
    }
  }.offset,
  set: undefined
});