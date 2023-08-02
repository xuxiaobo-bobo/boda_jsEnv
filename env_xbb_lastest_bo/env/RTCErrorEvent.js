// RTCErrorEvent对象

RTCErrorEvent = function RTCErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCErrorEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCErrorEvent, "RTCErrorEvent");
RTCErrorEvent.prototype.__proto__ = Event.prototype;
RTCErrorEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCErrorEvent.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, RTCErrorEvent.prototype, "RTCErrorEvent", "error_get", arguments);
  },
  set: undefined
});