// DeviceMotionEvent对象

DeviceMotionEvent = function DeviceMotionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DeviceMotionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DeviceMotionEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DeviceMotionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DeviceMotionEvent, "DeviceMotionEvent");
DeviceMotionEvent.prototype.__proto__ = Event.prototype;
DeviceMotionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "acceleration", {
  configurable: true,
  enumerable: true,
  get: function acceleration() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "acceleration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "accelerationIncludingGravity", {
  configurable: true,
  enumerable: true,
  get: function accelerationIncludingGravity() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "accelerationIncludingGravity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "rotationRate", {
  configurable: true,
  enumerable: true,
  get: function rotationRate() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "rotationRate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEvent.prototype, "interval", {
  configurable: true,
  enumerable: true,
  get: function interval() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEvent.prototype, "DeviceMotionEvent", "interval_get", arguments);
  },
  set: undefined
});