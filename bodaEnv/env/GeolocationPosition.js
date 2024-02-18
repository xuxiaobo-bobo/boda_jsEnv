// GeolocationPosition对象

bodaEnv.memory.globlProtoObj["GeolocationPosition"] = function GeolocationPosition() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GeolocationPosition 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GeolocationPosition"], "GeolocationPosition");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPosition"].prototype, "coords", {
  configurable: true,
  enumerable: true,
  get: {
    coords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationPosition"].prototype, "GeolocationPosition", "coords_get", arguments);
    }
  }.coords,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPosition"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationPosition"].prototype, "GeolocationPosition", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});