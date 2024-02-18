// AuthenticatorAttestationResponse对象

bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"] = function AuthenticatorAttestationResponse() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AuthenticatorAttestationResponse 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"], "AuthenticatorAttestationResponse");
bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AuthenticatorResponse"].prototype;
bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].__proto__ = bodaEnv.memory.globlProtoObj["AuthenticatorResponse"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "attestationObject", {
  configurable: true,
  enumerable: true,
  get: {
    attestationObject() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "AuthenticatorAttestationResponse", "attestationObject_get", arguments);
    }
  }.attestationObject,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "getAuthenticatorData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAuthenticatorData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "AuthenticatorAttestationResponse", "getAuthenticatorData", arguments);
    }
  }.getAuthenticatorData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "getPublicKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPublicKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "AuthenticatorAttestationResponse", "getPublicKey", arguments);
    }
  }.getPublicKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "getPublicKeyAlgorithm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPublicKeyAlgorithm() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "AuthenticatorAttestationResponse", "getPublicKeyAlgorithm", arguments);
    }
  }.getPublicKeyAlgorithm
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "getTransports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTransports() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAttestationResponse"].prototype, "AuthenticatorAttestationResponse", "getTransports", arguments);
    }
  }.getTransports
});