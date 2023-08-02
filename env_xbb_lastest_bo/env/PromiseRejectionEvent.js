// PromiseRejectionEvent对象

PromiseRejectionEvent = function PromiseRejectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PromiseRejectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PromiseRejectionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PromiseRejectionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PromiseRejectionEvent, "PromiseRejectionEvent");
PromiseRejectionEvent.prototype.__proto__ = Event.prototype;
PromiseRejectionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PromiseRejectionEvent.prototype, "promise", {
  configurable: true,
  enumerable: true,
  get: function promise() {
    return bodavm.toolsFunc.dispatch(this, PromiseRejectionEvent.prototype, "PromiseRejectionEvent", "promise_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PromiseRejectionEvent.prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, PromiseRejectionEvent.prototype, "PromiseRejectionEvent", "reason_get", arguments);
  },
  set: undefined
});