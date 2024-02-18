// BeforeUnloadEvent对象

bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"] = function BeforeUnloadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BeforeUnloadEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"], "BeforeUnloadEvent");
bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"].prototype, "returnValue", {
  configurable: true,
  enumerable: true,
  get: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"].prototype, "BeforeUnloadEvent", "returnValue_get", arguments);
    }
  }.returnValue,
  set: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BeforeUnloadEvent"].prototype, "BeforeUnloadEvent", "returnValue_set", arguments);
    }
  }.returnValue
});