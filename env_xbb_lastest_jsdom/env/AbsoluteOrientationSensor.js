// AbsoluteOrientationSensor对象

bodavm.memory.globalobj['AbsoluteOrientationSensor'] = function AbsoluteOrientationSensor() {
  console.log_copy('AbsoluteOrientationSensor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.AbsoluteOrientationSensor();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AbsoluteOrientationSensor'], "AbsoluteOrientationSensor");
bodavm.memory.globalobj['AbsoluteOrientationSensor'].prototype.__proto__ = bodavm.memory.globalobj['OrientationSensor'].prototype;
bodavm.memory.globalobj['AbsoluteOrientationSensor'].__proto__ = bodavm.memory.globalobj['OrientationSensor'];