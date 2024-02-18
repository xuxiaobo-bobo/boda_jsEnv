// SVGAnimatedInteger对象

bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"] = function SVGAnimatedInteger() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedInteger 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"], "SVGAnimatedInteger");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"].prototype, "SVGAnimatedInteger", "baseVal_get", arguments);
    }
  }.baseVal,
  set: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"].prototype, "SVGAnimatedInteger", "baseVal_set", arguments);
    }
  }.baseVal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedInteger"].prototype, "SVGAnimatedInteger", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});