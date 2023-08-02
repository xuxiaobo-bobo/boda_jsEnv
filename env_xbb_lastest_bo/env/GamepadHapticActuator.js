// GamepadHapticActuator对象

GamepadHapticActuator = function GamepadHapticActuator() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GamepadHapticActuator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GamepadHapticActuator 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GamepadHapticActuator, "GamepadHapticActuator");
bodavm.toolsFunc.defineProperty(GamepadHapticActuator.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, GamepadHapticActuator.prototype, "GamepadHapticActuator", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GamepadHapticActuator.prototype, "playEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function playEffect() {
    return bodavm.toolsFunc.dispatch(this, GamepadHapticActuator.prototype, "GamepadHapticActuator", "playEffect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GamepadHapticActuator.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, GamepadHapticActuator.prototype, "GamepadHapticActuator", "reset", arguments);
  }
});