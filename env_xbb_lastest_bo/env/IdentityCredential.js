// IdentityCredential对象

IdentityCredential = function IdentityCredential() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IdentityCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IdentityCredential 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IdentityCredential, "IdentityCredential");
IdentityCredential.prototype.__proto__ = Credential.prototype;
IdentityCredential.__proto__ = Credential;
bodavm.toolsFunc.defineProperty(IdentityCredential.prototype, "token", {
  configurable: true,
  enumerable: true,
  get: function token() {
    return bodavm.toolsFunc.dispatch(this, IdentityCredential.prototype, "IdentityCredential", "token_get", arguments);
  },
  set: undefined
});