// CustomEvent对象

CustomEvent = function CustomEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CustomEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CustomEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CustomEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CustomEvent, "CustomEvent");
CustomEvent.prototype.__proto__ = Event.prototype;
CustomEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(CustomEvent.prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, CustomEvent.prototype, "CustomEvent", "detail_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CustomEvent.prototype, "initCustomEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initCustomEvent() {
    return bodavm.toolsFunc.dispatch(this, CustomEvent.prototype, "CustomEvent", "initCustomEvent", arguments);
  }
});