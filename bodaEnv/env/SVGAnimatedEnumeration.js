// SVGAnimatedEnumeration对象

bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"] = function SVGAnimatedEnumeration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedEnumeration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"], "SVGAnimatedEnumeration");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"].prototype, "SVGAnimatedEnumeration", "baseVal_get", arguments);
    }
  }.baseVal,
  set: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"].prototype, "SVGAnimatedEnumeration", "baseVal_set", arguments);
    }
  }.baseVal
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedEnumeration"].prototype, "SVGAnimatedEnumeration", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});