// GamepadEvent对象

GamepadEvent = function GamepadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GamepadEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GamepadEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GamepadEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GamepadEvent, "GamepadEvent");
GamepadEvent.prototype.__proto__ = Event.prototype;
GamepadEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(GamepadEvent.prototype, "gamepad", {
  configurable: true,
  enumerable: true,
  get: function gamepad() {
    return bodavm.toolsFunc.dispatch(this, GamepadEvent.prototype, "GamepadEvent", "gamepad_get", arguments);
  },
  set: undefined
});