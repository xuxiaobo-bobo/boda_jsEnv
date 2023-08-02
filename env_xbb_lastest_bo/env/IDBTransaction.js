// IDBTransaction对象

IDBTransaction = function IDBTransaction() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBTransaction)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBTransaction 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBTransaction, "IDBTransaction");
IDBTransaction.prototype.__proto__ = EventTarget.prototype;
IDBTransaction.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: function objectStoreNames() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "objectStoreNames_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "mode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "durability", {
  configurable: true,
  enumerable: true,
  get: function durability() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "durability_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "db", {
  configurable: true,
  enumerable: true,
  get: function db() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "db_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "error_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "oncomplete", {
  configurable: true,
  enumerable: true,
  get: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "oncomplete_get", arguments);
  },
  set: function oncomplete() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "oncomplete_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "commit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function commit() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "commit", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBTransaction.prototype, "objectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function objectStore() {
    return bodavm.toolsFunc.dispatch(this, IDBTransaction.prototype, "IDBTransaction", "objectStore", arguments);
  }
});