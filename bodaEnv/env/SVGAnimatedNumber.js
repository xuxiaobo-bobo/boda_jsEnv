// SVGAnimatedNumber对象

bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"] = function SVGAnimatedNumber() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedNumber 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"], "SVGAnimatedNumber");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"].prototype, "SVGAnimatedNumber", "baseVal_get", arguments);
    }
  }.baseVal,
  set: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"].prototype, "SVGAnimatedNumber", "baseVal_set", arguments);
    }
  }.baseVal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedNumber"].prototype, "SVGAnimatedNumber", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});