// RelativeOrientationSensor对象

RelativeOrientationSensor = function RelativeOrientationSensor() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RelativeOrientationSensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RelativeOrientationSensor, "RelativeOrientationSensor");
RelativeOrientationSensor.prototype.__proto__ = OrientationSensor.prototype;
RelativeOrientationSensor.__proto__ = OrientationSensor;