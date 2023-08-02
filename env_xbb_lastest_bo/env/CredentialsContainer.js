// CredentialsContainer对象

CredentialsContainer = function CredentialsContainer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CredentialsContainer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CredentialsContainer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CredentialsContainer, "CredentialsContainer");
bodavm.toolsFunc.defineProperty(CredentialsContainer.prototype, "create", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function create() {
    return bodavm.toolsFunc.dispatch(this, CredentialsContainer.prototype, "CredentialsContainer", "create", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CredentialsContainer.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, CredentialsContainer.prototype, "CredentialsContainer", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CredentialsContainer.prototype, "preventSilentAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function preventSilentAccess() {
    return bodavm.toolsFunc.dispatch(this, CredentialsContainer.prototype, "CredentialsContainer", "preventSilentAccess", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CredentialsContainer.prototype, "store", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function store() {
    return bodavm.toolsFunc.dispatch(this, CredentialsContainer.prototype, "CredentialsContainer", "store", arguments);
  }
});