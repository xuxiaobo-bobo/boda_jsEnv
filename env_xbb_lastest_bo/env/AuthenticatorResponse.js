// AuthenticatorResponse对象

AuthenticatorResponse = function AuthenticatorResponse() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AuthenticatorResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AuthenticatorResponse 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AuthenticatorResponse, "AuthenticatorResponse");
bodavm.toolsFunc.defineProperty(AuthenticatorResponse.prototype, "clientDataJSON", {
  configurable: true,
  enumerable: true,
  get: function clientDataJSON() {
    return bodavm.toolsFunc.dispatch(this, AuthenticatorResponse.prototype, "AuthenticatorResponse", "clientDataJSON_get", arguments);
  },
  set: undefined
});