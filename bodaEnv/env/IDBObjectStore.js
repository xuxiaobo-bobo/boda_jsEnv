// IDBObjectStore对象

bodaEnv.memory.globlProtoObj["IDBObjectStore"] = function IDBObjectStore() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBObjectStore 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBObjectStore"], "IDBObjectStore");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "keyPath", {
  configurable: true,
  enumerable: true,
  get: {
    keyPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "keyPath_get", arguments);
    }
  }.keyPath,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "indexNames", {
  configurable: true,
  enumerable: true,
  get: {
    indexNames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "indexNames_get", arguments);
    }
  }.indexNames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "transaction", {
  configurable: true,
  enumerable: true,
  get: {
    transaction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "transaction_get", arguments);
    }
  }.transaction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "autoIncrement", {
  configurable: true,
  enumerable: true,
  get: {
    autoIncrement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "autoIncrement_get", arguments);
    }
  }.autoIncrement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "count", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    count() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "count", arguments);
    }
  }.count
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "createIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "createIndex", arguments);
    }
  }.createIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "deleteIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "deleteIndex", arguments);
    }
  }.deleteIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "getAll", arguments);
    }
  }.getAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "getAllKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAllKeys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "getAllKeys", arguments);
    }
  }.getAllKeys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "getKey", arguments);
    }
  }.getKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "index", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    index() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "index", arguments);
    }
  }.index
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "openCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    openCursor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "openCursor", arguments);
    }
  }.openCursor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "openKeyCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    openKeyCursor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "openKeyCursor", arguments);
    }
  }.openKeyCursor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "put", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    put() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"].prototype, "IDBObjectStore", "put", arguments);
    }
  }.put
});