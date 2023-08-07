// Accelerometer对象

Accelerometer = function Accelerometer() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Accelerometer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Accelerometer, "Accelerometer");
Accelerometer.prototype.__proto__ = Sensor.prototype;
Accelerometer.__proto__ = Sensor;
bodavm.toolsFunc.defineProperty(Accelerometer.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Accelerometer.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Accelerometer.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, Accelerometer.prototype, "Accelerometer", "z_get", arguments);
  },
  set: undefined
});