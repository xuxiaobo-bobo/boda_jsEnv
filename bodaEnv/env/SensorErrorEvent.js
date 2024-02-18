// SensorErrorEvent对象

bodaEnv.memory.globlProtoObj["SensorErrorEvent"] = function SensorErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SensorErrorEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SensorErrorEvent"], "SensorErrorEvent");
bodaEnv.memory.globlProtoObj["SensorErrorEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["SensorErrorEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SensorErrorEvent"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SensorErrorEvent"].prototype, "SensorErrorEvent", "error_get", arguments);
    }
  }.error,
  set: undefined
});