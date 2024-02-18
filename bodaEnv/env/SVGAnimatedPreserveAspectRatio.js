// SVGAnimatedPreserveAspectRatio对象

bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"] = function SVGAnimatedPreserveAspectRatio() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedPreserveAspectRatio 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"], "SVGAnimatedPreserveAspectRatio");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"].prototype, "SVGAnimatedPreserveAspectRatio", "baseVal_get", arguments);
    }
  }.baseVal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedPreserveAspectRatio"].prototype, "SVGAnimatedPreserveAspectRatio", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});