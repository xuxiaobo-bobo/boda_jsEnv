// GamepadButton对象

bodaEnv.memory.globlProtoObj["GamepadButton"] = function GamepadButton() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GamepadButton 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GamepadButton"], "GamepadButton");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "pressed", {
  configurable: true,
  enumerable: true,
  get: {
    pressed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "GamepadButton", "pressed_get", arguments);
    }
  }.pressed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "touched", {
  configurable: true,
  enumerable: true,
  get: {
    touched() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "GamepadButton", "touched_get", arguments);
    }
  }.touched,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadButton"].prototype, "GamepadButton", "value_get", arguments);
    }
  }.value,
  set: undefined
});