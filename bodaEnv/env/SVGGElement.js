// SVGGElement对象

bodaEnv.memory.globlProtoObj["SVGGElement"] = function SVGGElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGGElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGGElement"], "SVGGElement");
bodaEnv.memory.globlProtoObj["SVGGElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGGElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];