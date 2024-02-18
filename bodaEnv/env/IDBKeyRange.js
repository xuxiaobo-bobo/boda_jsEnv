// IDBKeyRange对象

bodaEnv.memory.globlProtoObj["IDBKeyRange"] = function IDBKeyRange() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBKeyRange 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBKeyRange"], "IDBKeyRange");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"], "bound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bound() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"], "IDBKeyRange", "bound", arguments);
    }
  }.bound
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"], "lowerBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lowerBound() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"], "IDBKeyRange", "lowerBound", arguments);
    }
  }.lowerBound
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"], "only", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    only() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"], "IDBKeyRange", "only", arguments);
    }
  }.only
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"], "upperBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    upperBound() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBObjectStore"], "IDBKeyRange", "upperBound", arguments);
    }
  }.upperBound
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "lower", {
  configurable: true,
  enumerable: true,
  get: {
    lower() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "IDBKeyRange", "lower_get", arguments);
    }
  }.lower,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "upper", {
  configurable: true,
  enumerable: true,
  get: {
    upper() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "IDBKeyRange", "upper_get", arguments);
    }
  }.upper,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "lowerOpen", {
  configurable: true,
  enumerable: true,
  get: {
    lowerOpen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "IDBKeyRange", "lowerOpen_get", arguments);
    }
  }.lowerOpen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "upperOpen", {
  configurable: true,
  enumerable: true,
  get: {
    upperOpen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "IDBKeyRange", "upperOpen_get", arguments);
    }
  }.upperOpen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "includes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    includes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBKeyRange"].prototype, "IDBKeyRange", "includes", arguments);
    }
  }.includes
});