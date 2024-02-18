// PopStateEvent对象

bodaEnv.memory.globlProtoObj["PopStateEvent"] = function PopStateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PopStateEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PopStateEvent"], "PopStateEvent");
bodaEnv.memory.globlProtoObj["PopStateEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PopStateEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PopStateEvent"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PopStateEvent"].prototype, "PopStateEvent", "state_get", arguments);
    }
  }.state,
  set: undefined
});