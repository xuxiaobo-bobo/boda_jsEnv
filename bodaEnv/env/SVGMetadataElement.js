// SVGMetadataElement对象

bodaEnv.memory.globlProtoObj["SVGMetadataElement"] = function SVGMetadataElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGMetadataElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGMetadataElement"], "SVGMetadataElement");
bodaEnv.memory.globlProtoObj["SVGMetadataElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGMetadataElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];