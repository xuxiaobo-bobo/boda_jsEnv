// ClipboardEvent对象

ClipboardEvent = function ClipboardEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ClipboardEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ClipboardEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ClipboardEvent, "ClipboardEvent");
ClipboardEvent.prototype.__proto__ = Event.prototype;
ClipboardEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(ClipboardEvent.prototype, "clipboardData", {
  configurable: true,
  enumerable: true,
  get: function clipboardData() {
    return bodavm.toolsFunc.dispatch(this, ClipboardEvent.prototype, "ClipboardEvent", "clipboardData_get", arguments);
  },
  set: undefined
});