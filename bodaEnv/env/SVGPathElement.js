// SVGPathElement对象

bodaEnv.memory.globlProtoObj["SVGPathElement"] = function SVGPathElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPathElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPathElement"], "SVGPathElement");
bodaEnv.memory.globlProtoObj["SVGPathElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGPathElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];