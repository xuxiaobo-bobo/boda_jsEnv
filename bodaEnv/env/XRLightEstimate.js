// XRLightEstimate对象

bodaEnv.memory.globlProtoObj["XRLightEstimate"] = function XRLightEstimate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRLightEstimate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRLightEstimate"], "XRLightEstimate");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "sphericalHarmonicsCoefficients", {
  configurable: true,
  enumerable: true,
  get: {
    sphericalHarmonicsCoefficients() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "XRLightEstimate", "sphericalHarmonicsCoefficients_get", arguments);
    }
  }.sphericalHarmonicsCoefficients,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "primaryLightDirection", {
  configurable: true,
  enumerable: true,
  get: {
    primaryLightDirection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "XRLightEstimate", "primaryLightDirection_get", arguments);
    }
  }.primaryLightDirection,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "primaryLightIntensity", {
  configurable: true,
  enumerable: true,
  get: {
    primaryLightIntensity() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRLightEstimate"].prototype, "XRLightEstimate", "primaryLightIntensity_get", arguments);
    }
  }.primaryLightIntensity,
  set: undefined
});