// OrientationSensor对象

OrientationSensor = function OrientationSensor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OrientationSensor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OrientationSensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OrientationSensor, "OrientationSensor");
OrientationSensor.prototype.__proto__ = Sensor.prototype;
OrientationSensor.__proto__ = Sensor;
bodavm.toolsFunc.defineProperty(OrientationSensor.prototype, "quaternion", {
  configurable: true,
  enumerable: true,
  get: function quaternion() {
    return bodavm.toolsFunc.dispatch(this, OrientationSensor.prototype, "OrientationSensor", "quaternion_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(OrientationSensor.prototype, "populateMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function populateMatrix() {
    return bodavm.toolsFunc.dispatch(this, OrientationSensor.prototype, "OrientationSensor", "populateMatrix", arguments);
  }
});