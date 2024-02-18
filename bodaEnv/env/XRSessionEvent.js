// XRSesbodaEvent对象

bodaEnv.memory.globlProtoObj["XRSesbodaEvent"] = function XRSesbodaEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSesbodaEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSesbodaEvent"], "XRSesbodaEvent");
bodaEnv.memory.globlProtoObj["XRSesbodaEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["XRSesbodaEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSesbodaEvent"].prototype, "sesboda", {
  configurable: true,
  enumerable: true,
  get: {
    sesboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSesbodaEvent"].prototype, "XRSesbodaEvent", "sesboda_get", arguments);
    }
  }.sesboda,
  set: undefined
});