// Crypto对象

Crypto = function Crypto() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Crypto)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Crypto 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Crypto, "Crypto");
bodavm.toolsFunc.defineProperty(Crypto.prototype, "getRandomValues", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRandomValues() {
    return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "getRandomValues", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "subtle", {
  configurable: true,
  enumerable: true,
  get: function subtle() {
    return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "subtle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "randomUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function randomUUID() {
    return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "randomUUID", arguments);
  }
});