// FederatedCredential对象

FederatedCredential = function FederatedCredential() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FederatedCredential)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FederatedCredential': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FederatedCredential 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FederatedCredential, "FederatedCredential");
FederatedCredential.prototype.__proto__ = Credential.prototype;
FederatedCredential.__proto__ = Credential;
bodavm.toolsFunc.defineProperty(FederatedCredential.prototype, "provider", {
  configurable: true,
  enumerable: true,
  get: function provider() {
    return bodavm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "provider_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FederatedCredential.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "protocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FederatedCredential.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(FederatedCredential.prototype, "iconURL", {
  configurable: true,
  enumerable: true,
  get: function iconURL() {
    return bodavm.toolsFunc.dispatch(this, FederatedCredential.prototype, "FederatedCredential", "iconURL_get", arguments);
  },
  set: undefined
});