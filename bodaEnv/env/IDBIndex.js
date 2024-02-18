// IDBIndex对象

bodaEnv.memory.globlProtoObj["IDBIndex"] = function IDBIndex() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBIndex 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBIndex"], "IDBIndex");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "objectStore", {
  configurable: true,
  enumerable: true,
  get: {
    objectStore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "objectStore_get", arguments);
    }
  }.objectStore,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "keyPath", {
  configurable: true,
  enumerable: true,
  get: {
    keyPath() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "keyPath_get", arguments);
    }
  }.keyPath,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "multiEntry", {
  configurable: true,
  enumerable: true,
  get: {
    multiEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "multiEntry_get", arguments);
    }
  }.multiEntry,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "unique", {
  configurable: true,
  enumerable: true,
  get: {
    unique() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "unique_get", arguments);
    }
  }.unique,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "count", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    count() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "count", arguments);
    }
  }.count
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "getAll", arguments);
    }
  }.getAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "getAllKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAllKeys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "getAllKeys", arguments);
    }
  }.getAllKeys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "getKey", arguments);
    }
  }.getKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "openCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    openCursor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "openCursor", arguments);
    }
  }.openCursor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "openKeyCursor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    openKeyCursor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBIndex"].prototype, "IDBIndex", "openKeyCursor", arguments);
    }
  }.openKeyCursor
});