// DeviceMotionEventAcceleration对象

DeviceMotionEventAcceleration = function DeviceMotionEventAcceleration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DeviceMotionEventAcceleration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DeviceMotionEventAcceleration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DeviceMotionEventAcceleration, "DeviceMotionEventAcceleration");
bodavm.toolsFunc.defineProperty(DeviceMotionEventAcceleration.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventAcceleration.prototype, "DeviceMotionEventAcceleration", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEventAcceleration.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventAcceleration.prototype, "DeviceMotionEventAcceleration", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEventAcceleration.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventAcceleration.prototype, "DeviceMotionEventAcceleration", "z_get", arguments);
  },
  set: undefined
});