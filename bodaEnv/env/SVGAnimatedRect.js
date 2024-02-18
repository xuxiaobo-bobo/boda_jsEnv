// SVGAnimatedRect对象

bodaEnv.memory.globlProtoObj["SVGAnimatedRect"] = function SVGAnimatedRect() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimatedRect 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimatedRect"], "SVGAnimatedRect");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedRect"].prototype, "baseVal", {
  configurable: true,
  enumerable: true,
  get: {
    baseVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedRect"].prototype, "SVGAnimatedRect", "baseVal_get", arguments);
    }
  }.baseVal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimatedRect"].prototype, "animVal", {
  configurable: true,
  enumerable: true,
  get: {
    animVal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimatedRect"].prototype, "SVGAnimatedRect", "animVal_get", arguments);
    }
  }.animVal,
  set: undefined
});