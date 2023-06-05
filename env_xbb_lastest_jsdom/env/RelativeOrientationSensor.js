// RelativeOrientationSensor对象

bodavm.memory.globalobj['RelativeOrientationSensor'] = function RelativeOrientationSensor() {
  console.log_copy('RelativeOrientationSensor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.RelativeOrientationSensor();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RelativeOrientationSensor'], "RelativeOrientationSensor");
bodavm.memory.globalobj['RelativeOrientationSensor'].prototype.__proto__ = bodavm.memory.globalobj['OrientationSensor'].prototype;
bodavm.memory.globalobj['RelativeOrientationSensor'].__proto__ = bodavm.memory.globalobj['OrientationSensor'];