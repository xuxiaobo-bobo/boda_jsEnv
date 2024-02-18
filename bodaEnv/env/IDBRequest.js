// IDBRequest对象

bodaEnv.memory.globlProtoObj["IDBRequest"] = function IDBRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBRequest"], "IDBRequest");
bodaEnv.memory.globlProtoObj["IDBRequest"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["IDBRequest"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "result", {
  configurable: true,
  enumerable: true,
  get: {
    result() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "result_get", arguments);
    }
  }.result,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "error_get", arguments);
    }
  }.error,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "source", {
  configurable: true,
  enumerable: true,
  get: {
    source() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "source_get", arguments);
    }
  }.source,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "transaction", {
  configurable: true,
  enumerable: true,
  get: {
    transaction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "transaction_get", arguments);
    }
  }.transaction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "onsuccess", {
  configurable: true,
  enumerable: true,
  get: {
    onsuccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "onsuccess_get", arguments);
    }
  }.onsuccess,
  set: {
    onsuccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "onsuccess_set", arguments);
    }
  }.onsuccess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBRequest"].prototype, "IDBRequest", "onerror_set", arguments);
    }
  }.onerror
});