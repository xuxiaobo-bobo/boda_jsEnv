// Gyroscope对象

bodaEnv.memory.globlProtoObj["Gyroscope"] = function Gyroscope() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Gyroscope 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Gyroscope"], "Gyroscope");
bodaEnv.memory.globlProtoObj["Gyroscope"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Sensor"].prototype;
bodaEnv.memory.globlProtoObj["Gyroscope"].__proto__ = bodaEnv.memory.globlProtoObj["Sensor"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "Gyroscope", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "Gyroscope", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Gyroscope"].prototype, "Gyroscope", "z_get", arguments);
    }
  }.z,
  set: undefined
});