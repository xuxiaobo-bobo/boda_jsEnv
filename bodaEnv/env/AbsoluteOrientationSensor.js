// AbsoluteOrientationSensor对象

bodaEnv.memory.globlProtoObj["AbsoluteOrientationSensor"] = function AbsoluteOrientationSensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AbsoluteOrientationSensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AbsoluteOrientationSensor"], "AbsoluteOrientationSensor");
bodaEnv.memory.globlProtoObj["AbsoluteOrientationSensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype;
bodaEnv.memory.globlProtoObj["AbsoluteOrientationSensor"].__proto__ = bodaEnv.memory.globlProtoObj["OrientationSensor"];