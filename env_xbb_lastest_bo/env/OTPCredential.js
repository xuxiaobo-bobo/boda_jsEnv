// OTPCredential对象

OTPCredential = function OTPCredential() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OTPCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OTPCredential 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OTPCredential, "OTPCredential");
OTPCredential.prototype.__proto__ = Credential.prototype;
OTPCredential.__proto__ = Credential;
bodavm.toolsFunc.defineProperty(OTPCredential.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, OTPCredential.prototype, "OTPCredential", "code_get", arguments);
  },
  set: undefined
});