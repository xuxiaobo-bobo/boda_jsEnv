// PopStateEvent对象

PopStateEvent = function PopStateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PopStateEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PopStateEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PopStateEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PopStateEvent, "PopStateEvent");
PopStateEvent.prototype.__proto__ = Event.prototype;
PopStateEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PopStateEvent.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, PopStateEvent.prototype, "PopStateEvent", "state_get", arguments);
  },
  set: undefined
});