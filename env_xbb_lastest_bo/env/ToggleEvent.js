// ToggleEvent对象

ToggleEvent = function ToggleEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ToggleEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ToggleEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ToggleEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ToggleEvent, "ToggleEvent");
ToggleEvent.prototype.__proto__ = Event.prototype;
ToggleEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(ToggleEvent.prototype, "oldState", {
  configurable: true,
  enumerable: true,
  get: function oldState() {
    return bodavm.toolsFunc.dispatch(this, ToggleEvent.prototype, "ToggleEvent", "oldState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ToggleEvent.prototype, "newState", {
  configurable: true,
  enumerable: true,
  get: function newState() {
    return bodavm.toolsFunc.dispatch(this, ToggleEvent.prototype, "ToggleEvent", "newState_get", arguments);
  },
  set: undefined
});