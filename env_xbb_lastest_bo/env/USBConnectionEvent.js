// USBConnectionEvent对象

USBConnectionEvent = function USBConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBConnectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBConnectionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBConnectionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBConnectionEvent, "USBConnectionEvent");
USBConnectionEvent.prototype.__proto__ = Event.prototype;
USBConnectionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(USBConnectionEvent.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, USBConnectionEvent.prototype, "USBConnectionEvent", "device_get", arguments);
  },
  set: undefined
});