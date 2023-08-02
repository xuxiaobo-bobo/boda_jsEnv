// TrustedTypePolicy对象

TrustedTypePolicy = function TrustedTypePolicy() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrustedTypePolicy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrustedTypePolicy 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrustedTypePolicy, "TrustedTypePolicy");
bodavm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createHTML() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createHTML", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScript() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createScript", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TrustedTypePolicy.prototype, "createScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScriptURL() {
    return bodavm.toolsFunc.dispatch(this, TrustedTypePolicy.prototype, "TrustedTypePolicy", "createScriptURL", arguments);
  }
});