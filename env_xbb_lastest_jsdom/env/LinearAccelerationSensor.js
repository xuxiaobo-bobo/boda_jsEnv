// LinearAccelerationSensor对象

bodavm.memory.globalobj['LinearAccelerationSensor'] = function LinearAccelerationSensor() {
  console.log_copy('LinearAccelerationSensor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.LinearAccelerationSensor();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['LinearAccelerationSensor'], "LinearAccelerationSensor");
bodavm.memory.globalobj['LinearAccelerationSensor'].prototype.__proto__ = bodavm.memory.globalobj['Accelerometer'].prototype;
bodavm.memory.globalobj['LinearAccelerationSensor'].__proto__ = bodavm.memory.globalobj['Accelerometer'];