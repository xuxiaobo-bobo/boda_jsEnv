// SubmitEvent对象

SubmitEvent = function SubmitEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SubmitEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SubmitEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SubmitEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SubmitEvent, "SubmitEvent");
SubmitEvent.prototype.__proto__ = Event.prototype;
SubmitEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(SubmitEvent.prototype, "submitter", {
  configurable: true,
  enumerable: true,
  get: function submitter() {
    return bodavm.toolsFunc.dispatch(this, SubmitEvent.prototype, "SubmitEvent", "submitter_get", arguments);
  },
  set: undefined
});