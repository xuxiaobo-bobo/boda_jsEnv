// GravitySensor对象

GravitySensor = function GravitySensor() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GravitySensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GravitySensor, "GravitySensor");
GravitySensor.prototype.__proto__ = Accelerometer.prototype;
GravitySensor.__proto__ = Accelerometer;