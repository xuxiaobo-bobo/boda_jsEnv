// SVGAnimateElement对象

bodaEnv.memory.globlProtoObj["SVGAnimateElement"] = function SVGAnimateElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimateElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimateElement"], "SVGAnimateElement");
bodaEnv.memory.globlProtoObj["SVGAnimateElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGAnimateElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGAnimationElement"];