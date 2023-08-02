// PresentationConnectionAvailableEvent对象

PresentationConnectionAvailableEvent = function PresentationConnectionAvailableEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PresentationConnectionAvailableEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PresentationConnectionAvailableEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PresentationConnectionAvailableEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PresentationConnectionAvailableEvent, "PresentationConnectionAvailableEvent");
PresentationConnectionAvailableEvent.prototype.__proto__ = Event.prototype;
PresentationConnectionAvailableEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PresentationConnectionAvailableEvent.prototype, "connection", {
  configurable: true,
  enumerable: true,
  get: function connection() {
    return bodavm.toolsFunc.dispatch(this, PresentationConnectionAvailableEvent.prototype, "PresentationConnectionAvailableEvent", "connection_get", arguments);
  },
  set: undefined
});