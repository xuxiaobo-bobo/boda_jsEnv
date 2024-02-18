// GamepadEvent对象

bodaEnv.memory.globlProtoObj["GamepadEvent"] = function GamepadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GamepadEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GamepadEvent"], "GamepadEvent");
bodaEnv.memory.globlProtoObj["GamepadEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["GamepadEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GamepadEvent"].prototype, "gamepad", {
  configurable: true,
  enumerable: true,
  get: {
    gamepad() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GamepadEvent"].prototype, "GamepadEvent", "gamepad_get", arguments);
    }
  }.gamepad,
  set: undefined
});