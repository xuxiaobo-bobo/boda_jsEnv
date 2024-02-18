// SVGFEDistantLightElement对象

bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"] = function SVGFEDistantLightElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGFEDistantLightElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"], "SVGFEDistantLightElement");
bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].prototype, "azimuth", {
  configurable: true,
  enumerable: true,
  get: {
    azimuth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].prototype, "SVGFEDistantLightElement", "azimuth_get", arguments);
    }
  }.azimuth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].prototype, "elevation", {
  configurable: true,
  enumerable: true,
  get: {
    elevation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGFEDistantLightElement"].prototype, "SVGFEDistantLightElement", "elevation_get", arguments);
    }
  }.elevation,
  set: undefined
});