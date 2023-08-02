// IDBDatabase对象

IDBDatabase = function IDBDatabase() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBDatabase)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBDatabase 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBDatabase, "IDBDatabase");
IDBDatabase.prototype.__proto__ = EventTarget.prototype;
IDBDatabase.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "version_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: function objectStoreNames() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "objectStoreNames_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "onversionchange", {
  configurable: true,
  enumerable: true,
  get: function onversionchange() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onversionchange_get", arguments);
  },
  set: function onversionchange() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "onversionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "createObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createObjectStore() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "createObjectStore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "deleteObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteObjectStore() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "deleteObjectStore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBDatabase.prototype, "transaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transaction() {
    return bodavm.toolsFunc.dispatch(this, IDBDatabase.prototype, "IDBDatabase", "transaction", arguments);
  }
});