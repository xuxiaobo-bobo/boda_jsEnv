// PublicKeyCredential对象

PublicKeyCredential = function PublicKeyCredential() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PublicKeyCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PublicKeyCredential 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PublicKeyCredential, "PublicKeyCredential");
PublicKeyCredential.prototype.__proto__ = Credential.prototype;
PublicKeyCredential.__proto__ = Credential;
bodavm.toolsFunc.defineProperty(PublicKeyCredential, "isConditionalMediationAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConditionalMediationAvailable() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential, "PublicKeyCredential", "isConditionalMediationAvailable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PublicKeyCredential, "isUserVerifyingPlatformAuthenticatorAvailable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isUserVerifyingPlatformAuthenticatorAvailable() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential, "PublicKeyCredential", "isUserVerifyingPlatformAuthenticatorAvailable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PublicKeyCredential.prototype, "rawId", {
  configurable: true,
  enumerable: true,
  get: function rawId() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential.prototype, "PublicKeyCredential", "rawId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PublicKeyCredential.prototype, "response", {
  configurable: true,
  enumerable: true,
  get: function response() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential.prototype, "PublicKeyCredential", "response_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PublicKeyCredential.prototype, "authenticatorAttachment", {
  configurable: true,
  enumerable: true,
  get: function authenticatorAttachment() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential.prototype, "PublicKeyCredential", "authenticatorAttachment_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PublicKeyCredential.prototype, "getClientExtensionResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getClientExtensionResults() {
    return bodavm.toolsFunc.dispatch(this, PublicKeyCredential.prototype, "PublicKeyCredential", "getClientExtensionResults", arguments);
  }
});