// MediaKeySystemAccess对象

bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"] = function MediaKeySystemAccess() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaKeySystemAccess 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"], "MediaKeySystemAccess");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "keySystem", {
  configurable: true,
  enumerable: true,
  get: {
    keySystem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "MediaKeySystemAccess", "keySystem_get", arguments);
    }
  }.keySystem,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "createMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createMediaKeys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "MediaKeySystemAccess", "createMediaKeys", arguments);
    }
  }.createMediaKeys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeySystemAccess"].prototype, "MediaKeySystemAccess", "getConfiguration", arguments);
    }
  }.getConfiguration
});