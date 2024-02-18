// GeolocationPositionError对象

bodaEnv.memory.globlProtoObj["GeolocationPositionError"] = function GeolocationPositionError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GeolocationPositionError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GeolocationPositionError"], "GeolocationPositionError");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"], "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"], "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"], "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "GeolocationPositionError", "code_get", arguments);
    }
  }.code,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "GeolocationPositionError", "message_get", arguments);
    }
  }.message,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GeolocationPositionError"].prototype, "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});