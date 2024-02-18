// ToggleEvent对象

bodaEnv.memory.globlProtoObj["ToggleEvent"] = function ToggleEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ToggleEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ToggleEvent"], "ToggleEvent");
bodaEnv.memory.globlProtoObj["ToggleEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["ToggleEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ToggleEvent"].prototype, "oldState", {
  configurable: true,
  enumerable: true,
  get: {
    oldState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ToggleEvent"].prototype, "ToggleEvent", "oldState_get", arguments);
    }
  }.oldState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ToggleEvent"].prototype, "newState", {
  configurable: true,
  enumerable: true,
  get: {
    newState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ToggleEvent"].prototype, "ToggleEvent", "newState_get", arguments);
    }
  }.newState,
  set: undefined
});