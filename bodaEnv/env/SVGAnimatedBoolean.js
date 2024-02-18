// SVGAnimatedBoolean对象

bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"] = function SVGAnimatedBoolean() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedBoolean 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"], "SVGAnimatedBoolean");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"].prototype, "SVGAnimatedBoolean", "baseVal_get", arguments);
    }
  }.baseVal,
  set: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"].prototype, "SVGAnimatedBoolean", "baseVal_set", arguments);
    }
  }.baseVal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedBoolean"].prototype, "SVGAnimatedBoolean", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});