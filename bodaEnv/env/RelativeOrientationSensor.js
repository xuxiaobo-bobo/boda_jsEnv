// RelativeOrientationSensor对象

bodaEnv.memory.globlProtoObj["RelativeOrientationSensor"] = function RelativeOrientationSensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RelativeOrientationSensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RelativeOrientationSensor"], "RelativeOrientationSensor");
bodaEnv.memory.globlProtoObj["RelativeOrientationSensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype;
bodaEnv.memory.globlProtoObj["RelativeOrientationSensor"].__proto__ = bodaEnv.memory.globlProtoObj["OrientationSensor"];