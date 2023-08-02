// GamepadButton对象

GamepadButton = function GamepadButton() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GamepadButton)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GamepadButton 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GamepadButton, "GamepadButton");
bodavm.toolsFunc.defineProperty(GamepadButton.prototype, "pressed", {
  configurable: true,
  enumerable: true,
  get: function pressed() {
    return bodavm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "pressed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GamepadButton.prototype, "touched", {
  configurable: true,
  enumerable: true,
  get: function touched() {
    return bodavm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "touched_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GamepadButton.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, GamepadButton.prototype, "GamepadButton", "value_get", arguments);
  },
  set: undefined
});