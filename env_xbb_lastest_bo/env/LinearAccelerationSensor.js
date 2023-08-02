// LinearAccelerationSensor对象

LinearAccelerationSensor = function LinearAccelerationSensor() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LinearAccelerationSensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LinearAccelerationSensor, "LinearAccelerationSensor");
LinearAccelerationSensor.prototype.__proto__ = Accelerometer.prototype;
LinearAccelerationSensor.__proto__ = Accelerometer;