// SVGSwitchElement对象

bodaEnv.memory.globlProtoObj["SVGSwitchElement"] = function SVGSwitchElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGSwitchElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGSwitchElement"], "SVGSwitchElement");
bodaEnv.memory.globlProtoObj["SVGSwitchElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGSwitchElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];