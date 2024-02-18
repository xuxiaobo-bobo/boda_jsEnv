// GamepadHapticActuator对象

bodaEnv.memory.globlProtoObj["GamepadHapticActuator"] = function GamepadHapticActuator() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GamepadHapticActuator 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GamepadHapticActuator"], "GamepadHapticActuator");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "GamepadHapticActuator", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "playEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    playEffect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "GamepadHapticActuator", "playEffect", arguments);
    }
  }.playEffect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadHapticActuator"].prototype, "GamepadHapticActuator", "reset", arguments);
    }
  }.reset
});