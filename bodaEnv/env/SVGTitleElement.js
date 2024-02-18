// SVGTitleElement对象

bodaEnv.memory.globlProtoObj["SVGTitleElement"] = function SVGTitleElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTitleElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTitleElement"], "SVGTitleElement");
bodaEnv.memory.globlProtoObj["SVGTitleElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGTitleElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];