// MediaKeys对象

bodaEnv.memory.globlProtoObj["MediaKeys"] = function MediaKeys() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaKeys 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaKeys"], "MediaKeys");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "createSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSession() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "MediaKeys", "createSession", arguments);
    }
  }.createSession
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "setServerCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setServerCertificate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "MediaKeys", "setServerCertificate", arguments);
    }
  }.setServerCertificate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "getStatusForPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStatusForPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeys"].prototype, "MediaKeys", "getStatusForPolicy", arguments);
    }
  }.getStatusForPolicy
});