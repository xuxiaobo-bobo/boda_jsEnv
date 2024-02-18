// IDBTransaction对象

bodaEnv.memory.globlProtoObj["IDBTransaction"] = function IDBTransaction() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBTransaction 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBTransaction"], "IDBTransaction");
bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["IDBTransaction"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: {
    objectStoreNames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "objectStoreNames_get", arguments);
    }
  }.objectStoreNames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "mode_get", arguments);
    }
  }.mode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "durability", {
  configurable: true,
  enumerable: true,
  get: {
    durability() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "durability_get", arguments);
    }
  }.durability,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "db", {
  configurable: true,
  enumerable: true,
  get: {
    db() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "db_get", arguments);
    }
  }.db,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "error_get", arguments);
    }
  }.error,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "oncomplete", {
  configurable: true,
  enumerable: true,
  get: {
    oncomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "oncomplete_get", arguments);
    }
  }.oncomplete,
  set: {
    oncomplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "oncomplete_set", arguments);
    }
  }.oncomplete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "commit", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    commit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "commit", arguments);
    }
  }.commit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "objectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    objectStore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBTransaction"].prototype, "IDBTransaction", "objectStore", arguments);
    }
  }.objectStore
});