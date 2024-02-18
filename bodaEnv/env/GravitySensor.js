// GravitySensor对象

bodaEnv.memory.globlProtoObj["GravitySensor"] = function GravitySensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GravitySensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GravitySensor"], "GravitySensor");
bodaEnv.memory.globlProtoObj["GravitySensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Accelerometer"].prototype;
bodaEnv.memory.globlProtoObj["GravitySensor"].__proto__ = bodaEnv.memory.globlProtoObj["Accelerometer"];