// SVGAnimatedAngle对象

bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"] = function SVGAnimatedAngle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedAngle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"], "SVGAnimatedAngle");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"].prototype, "SVGAnimatedAngle", "baseVal_get", arguments);
    }
  }.baseVal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedAngle"].prototype, "SVGAnimatedAngle", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});