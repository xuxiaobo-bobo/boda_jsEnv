// AuthenticatorAssertionResponse对象

AuthenticatorAssertionResponse = function AuthenticatorAssertionResponse() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AuthenticatorAssertionResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AuthenticatorAssertionResponse 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AuthenticatorAssertionResponse, "AuthenticatorAssertionResponse");
AuthenticatorAssertionResponse.prototype.__proto__ = AuthenticatorResponse.prototype;
AuthenticatorAssertionResponse.__proto__ = AuthenticatorResponse;
bodavm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "authenticatorData", {
  configurable: true,
  enumerable: true,
  get: function authenticatorData() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "authenticatorData_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "signature", {
  configurable: true,
  enumerable: true,
  get: function signature() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "signature_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AuthenticatorAssertionResponse.prototype, "userHandle", {
  configurable: true,
  enumerable: true,
  get: function userHandle() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorAssertionResponse.prototype, "AuthenticatorAssertionResponse", "userHandle_get", arguments);
  },
  set: undefined
});