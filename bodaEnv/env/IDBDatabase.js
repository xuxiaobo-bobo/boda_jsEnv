// IDBDatabase对象

bodaEnv.memory.globlProtoObj["IDBDatabase"] = function IDBDatabase() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBDatabase 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBDatabase"], "IDBDatabase");
bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["IDBDatabase"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "version", {
  configurable: true,
  enumerable: true,
  get: {
    version() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "version_get", arguments);
    }
  }.version,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "objectStoreNames", {
  configurable: true,
  enumerable: true,
  get: {
    objectStoreNames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "objectStoreNames_get", arguments);
    }
  }.objectStoreNames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "onversionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onversionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onversionchange_get", arguments);
    }
  }.onversionchange,
  set: {
    onversionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "onversionchange_set", arguments);
    }
  }.onversionchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "createObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createObjectStore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "createObjectStore", arguments);
    }
  }.createObjectStore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "deleteObjectStore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteObjectStore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "deleteObjectStore", arguments);
    }
  }.deleteObjectStore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "transaction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transaction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBDatabase"].prototype, "IDBDatabase", "transaction", arguments);
    }
  }.transaction
});