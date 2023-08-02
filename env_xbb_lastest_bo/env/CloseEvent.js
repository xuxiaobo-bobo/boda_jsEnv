// CloseEvent对象

CloseEvent = function CloseEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CloseEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CloseEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CloseEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CloseEvent, "CloseEvent");
CloseEvent.prototype.__proto__ = Event.prototype;
CloseEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "wasClean", {
  configurable: true,
  enumerable: true,
  get: function wasClean() {
    return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "wasClean_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "code_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CloseEvent.prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, CloseEvent.prototype, "CloseEvent", "reason_get", arguments);
  },
  set: undefined
});