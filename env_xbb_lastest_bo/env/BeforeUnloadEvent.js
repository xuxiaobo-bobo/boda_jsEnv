// BeforeUnloadEvent对象

BeforeUnloadEvent = function BeforeUnloadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BeforeUnloadEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BeforeUnloadEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BeforeUnloadEvent, "BeforeUnloadEvent");
BeforeUnloadEvent.prototype.__proto__ = Event.prototype;
BeforeUnloadEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(BeforeUnloadEvent.prototype, "returnValue", {
  configurable: true,
  enumerable: true,
  get: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, BeforeUnloadEvent.prototype, "BeforeUnloadEvent", "returnValue_get", arguments);
  },
  set: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, BeforeUnloadEvent.prototype, "BeforeUnloadEvent", "returnValue_set", arguments);
  }
});