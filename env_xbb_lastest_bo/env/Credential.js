// Credential对象

Credential = function Credential() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Credential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Credential 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Credential, "Credential");
bodavm.toolsFunc.defineProperty(Credential.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, Credential.prototype, "Credential", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Credential.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, Credential.prototype, "Credential", "type_get", arguments);
  },
  set: undefined
});