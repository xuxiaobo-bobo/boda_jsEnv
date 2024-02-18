// PublicKeyCredential对象

bodaEnv.memory.globlProtoObj["PublicKeyCredential"] = function PublicKeyCredential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PublicKeyCredential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PublicKeyCredential"], "PublicKeyCredential");
bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Credential"].prototype;
bodaEnv.memory.globlProtoObj["PublicKeyCredential"].__proto__ = bodaEnv.memory.globlProtoObj["Credential"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"], "isConditionalMediationAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isConditionalMediationAvailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorResponse"], "PublicKeyCredential", "isConditionalMediationAvailable", arguments);
    }
  }.isConditionalMediationAvailable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"], "isUserVerifyingPlatformAuthenticatorAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isUserVerifyingPlatformAuthenticatorAvailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorResponse"], "PublicKeyCredential", "isUserVerifyingPlatformAuthenticatorAvailable", arguments);
    }
  }.isUserVerifyingPlatformAuthenticatorAvailable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "rawId", {
  configurable: true,
  enumerable: true,
  get: {
    rawId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "PublicKeyCredential", "rawId_get", arguments);
    }
  }.rawId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "response", {
  configurable: true,
  enumerable: true,
  get: {
    response() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "PublicKeyCredential", "response_get", arguments);
    }
  }.response,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "authenticatorAttachment", {
  configurable: true,
  enumerable: true,
  get: {
    authenticatorAttachment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "PublicKeyCredential", "authenticatorAttachment_get", arguments);
    }
  }.authenticatorAttachment,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "getClientExtensionResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getClientExtensionResults() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PublicKeyCredential"].prototype, "PublicKeyCredential", "getClientExtensionResults", arguments);
    }
  }.getClientExtensionResults
});