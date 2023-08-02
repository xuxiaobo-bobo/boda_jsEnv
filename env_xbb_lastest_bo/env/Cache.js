// Cache对象

Cache = function Cache() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Cache)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Cache 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Cache, "Cache");
bodavm.toolsFunc.defineProperty(Cache.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "addAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addAll() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "addAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function match() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "match", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function matchAll() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "matchAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Cache.prototype, "put", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function put() {
    return bodavm.toolsFunc.dispatch(this, Cache.prototype, "Cache", "put", arguments);
  }
});