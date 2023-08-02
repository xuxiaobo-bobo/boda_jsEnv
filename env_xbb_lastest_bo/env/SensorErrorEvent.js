// SensorErrorEvent对象

SensorErrorEvent = function SensorErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SensorErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SensorErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SensorErrorEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SensorErrorEvent, "SensorErrorEvent");
SensorErrorEvent.prototype.__proto__ = Event.prototype;
SensorErrorEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(SensorErrorEvent.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, SensorErrorEvent.prototype, "SensorErrorEvent", "error_get", arguments);
  },
  set: undefined
});