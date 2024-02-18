// OrientationSensor对象

bodaEnv.memory.globlProtoObj["OrientationSensor"] = function OrientationSensor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OrientationSensor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OrientationSensor"], "OrientationSensor");
bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Sensor"].prototype;
bodaEnv.memory.globlProtoObj["OrientationSensor"].__proto__ = bodaEnv.memory.globlProtoObj["Sensor"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype, "quaternion", {
  configurable: true,
  enumerable: true,
  get: {
    quaternion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype, "OrientationSensor", "quaternion_get", arguments);
    }
  }.quaternion,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype, "populateMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    populateMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OrientationSensor"].prototype, "OrientationSensor", "populateMatrix", arguments);
    }
  }.populateMatrix
});