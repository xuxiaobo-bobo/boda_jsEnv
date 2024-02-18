// SVGSetElement对象

bodaEnv.memory.globlProtoObj["SVGSetElement"] = function SVGSetElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGSetElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGSetElement"], "SVGSetElement");
bodaEnv.memory.globlProtoObj["SVGSetElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGSetElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGAnimationElement"];