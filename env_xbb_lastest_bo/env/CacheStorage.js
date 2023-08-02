// CacheStorage对象

CacheStorage = function CacheStorage() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CacheStorage)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CacheStorage 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CacheStorage, "CacheStorage");
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function match() {
    return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "match", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "open", arguments);
  }
});