// AbsoluteOrientationSensor对象

AbsoluteOrientationSensor = function AbsoluteOrientationSensor() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AbsoluteOrientationSensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AbsoluteOrientationSensor, "AbsoluteOrientationSensor");
AbsoluteOrientationSensor.prototype.__proto__ = OrientationSensor.prototype;
AbsoluteOrientationSensor.__proto__ = OrientationSensor;