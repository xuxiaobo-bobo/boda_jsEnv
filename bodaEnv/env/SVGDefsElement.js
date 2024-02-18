// SVGDefsElement对象

bodaEnv.memory.globlProtoObj["SVGDefsElement"] = function SVGDefsElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGDefsElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGDefsElement"], "SVGDefsElement");
bodaEnv.memory.globlProtoObj["SVGDefsElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGDefsElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];