// IDBObjectStore对象

IDBObjectStore = function IDBObjectStore() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBObjectStore)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBObjectStore 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBObjectStore, "IDBObjectStore");
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "keyPath", {
  configurable: true,
  enumerable: true,
  get: function keyPath() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "keyPath_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "indexNames", {
  configurable: true,
  enumerable: true,
  get: function indexNames() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "indexNames_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "transaction", {
  configurable: true,
  enumerable: true,
  get: function transaction() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "transaction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "autoIncrement", {
  configurable: true,
  enumerable: true,
  get: function autoIncrement() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "autoIncrement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "count", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function count() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "count", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "createIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createIndex() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "createIndex", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "deleteIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteIndex() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "deleteIndex", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getAllKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllKeys() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getAllKeys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKey() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "getKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "index", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function index() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "index", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "openCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openCursor() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "openCursor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "openKeyCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openKeyCursor() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "openKeyCursor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBObjectStore.prototype, "put", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function put() {
    return bodavm.toolsFunc.dispatch(this, IDBObjectStore.prototype, "IDBObjectStore", "put", arguments);
  }
});