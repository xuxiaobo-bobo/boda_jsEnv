// IDBIndex对象

IDBIndex = function IDBIndex() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBIndex)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBIndex 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBIndex, "IDBIndex");
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "objectStore", {
  configurable: true,
  enumerable: true,
  get: function objectStore() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "objectStore_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "keyPath", {
  configurable: true,
  enumerable: true,
  get: function keyPath() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "keyPath_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "multiEntry", {
  configurable: true,
  enumerable: true,
  get: function multiEntry() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "multiEntry_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "unique", {
  configurable: true,
  enumerable: true,
  get: function unique() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "unique_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "count", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function count() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "count", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "getAllKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllKeys() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "getAllKeys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKey() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "getKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "openCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openCursor() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "openCursor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBIndex.prototype, "openKeyCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function openKeyCursor() {
    return bodavm.toolsFunc.dispatch(this, IDBIndex.prototype, "IDBIndex", "openKeyCursor", arguments);
  }
});