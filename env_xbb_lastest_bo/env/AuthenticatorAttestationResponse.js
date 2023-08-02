// AuthenticatorAttestationResponse对象

AuthenticatorAttestationResponse = function AuthenticatorAttestationResponse() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AuthenticatorAttestationResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AuthenticatorAttestationResponse 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AuthenticatorAttestationResponse, "AuthenticatorAttestationResponse");
AuthenticatorAttestationResponse.prototype.__proto__ = AuthenticatorResponse.prototype;
AuthenticatorAttestationResponse.__proto__ = AuthenticatorResponse;
bodavm.toolsFunc.defineProperty(AuthenticatorAttestationResponse.prototype, "attestationObject", {
  configurable: true,
  enumerable: true,
  get: function attestationObject() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAttestationResponse.prototype, "AuthenticatorAttestationResponse", "attestationObject_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AuthenticatorAttestationResponse.prototype, "getAuthenticatorData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAuthenticatorData() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAttestationResponse.prototype, "AuthenticatorAttestationResponse", "getAuthenticatorData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AuthenticatorAttestationResponse.prototype, "getPublicKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPublicKey() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAttestationResponse.prototype, "AuthenticatorAttestationResponse", "getPublicKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AuthenticatorAttestationResponse.prototype, "getPublicKeyAlgorithm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPublicKeyAlgorithm() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAttestationResponse.prototype, "AuthenticatorAttestationResponse", "getPublicKeyAlgorithm", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AuthenticatorAttestationResponse.prototype, "getTransports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTransports() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAttestationResponse.prototype, "AuthenticatorAttestationResponse", "getTransports", arguments);
  }
});