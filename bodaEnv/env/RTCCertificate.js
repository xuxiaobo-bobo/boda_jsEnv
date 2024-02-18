// RTCCertificate对象

bodaEnv.memory.globlProtoObj["RTCCertificate"] = function RTCCertificate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCCertificate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCCertificate"], "RTCCertificate");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCCertificate"].prototype, "expires", {
  configurable: true,
  enumerable: true,
  get: {
    expires() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCCertificate"].prototype, "RTCCertificate", "expires_get", arguments);
    }
  }.expires,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCCertificate"].prototype, "getFingerprints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFingerprints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCCertificate"].prototype, "RTCCertificate", "getFingerprints", arguments);
    }
  }.getFingerprints
});