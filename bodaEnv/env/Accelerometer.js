// Accelerometer对象

bodaEnv.memory.globlProtoObj["Accelerometer"] = function Accelerometer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Accelerometer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Accelerometer"], "Accelerometer");
bodaEnv.memory.globlProtoObj["Accelerometer"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Sensor"].prototype;
bodaEnv.memory.globlProtoObj["Accelerometer"].__proto__ = bodaEnv.memory.globlProtoObj["Sensor"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "Accelerometer", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "Accelerometer", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Accelerometer"].prototype, "Accelerometer", "z_get", arguments);
    }
  }.z,
  set: undefined
});