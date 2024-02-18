// LinearAccelerationSensor对象

bodaEnv.memory.globlProtoObj["LinearAccelerationSensor"] = function LinearAccelerationSensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LinearAccelerationSensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LinearAccelerationSensor"], "LinearAccelerationSensor");
bodaEnv.memory.globlProtoObj["LinearAccelerationSensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Accelerometer"].prototype;
bodaEnv.memory.globlProtoObj["LinearAccelerationSensor"].__proto__ = bodaEnv.memory.globlProtoObj["Accelerometer"];