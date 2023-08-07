// DeviceOrientationEvent对象

DeviceOrientationEvent = function DeviceOrientationEvent() {
  let arg = arguments[0];
  let arg2 = arguments[1];
  if (bodavm.memory.listenerProxy[arg]['res']) {
    return bodavm.memory.listenerProxy[arg]['res'];
  }
  this.isTrusted = false;
  bodavm.toolsFunc.setProtoAttr.call(this, this, arg);
  bodavm.toolsFunc.symbolProperty(this);
  if (arg2 != 'bobo') {
    console.log_copy('DeviceOrientationEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DeviceOrientationEvent, "DeviceOrientationEvent");
DeviceOrientationEvent.prototype.__proto__ = Event.prototype;
DeviceOrientationEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "alpha", {
  configurable: true,
  enumerable: true,
  get: function alpha() {
    return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "alpha_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "beta", {
  configurable: true,
  enumerable: true,
  get: function beta() {
    return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "beta_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "gamma", {
  configurable: true,
  enumerable: true,
  get: function gamma() {
    return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "gamma_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceOrientationEvent.prototype, "absolute", {
  configurable: true,
  enumerable: true,
  get: function absolute() {
    return bodavm.toolsFunc.dispatch(this, DeviceOrientationEvent.prototype, "DeviceOrientationEvent", "absolute_get", arguments);
  },
  set: undefined
});