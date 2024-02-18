// StorageEvent对象

bodaEnv.memory.globlProtoObj["StorageEvent"] = function StorageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StorageEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StorageEvent"], "StorageEvent");
bodaEnv.memory.globlProtoObj["StorageEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["StorageEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "key", {
  configurable: true,
  enumerable: true,
  get: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "key_get", arguments);
    }
  }.key,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "oldValue", {
  configurable: true,
  enumerable: true,
  get: {
    oldValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "oldValue_get", arguments);
    }
  }.oldValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "newValue", {
  configurable: true,
  enumerable: true,
  get: {
    newValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "newValue_get", arguments);
    }
  }.newValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "storageArea", {
  configurable: true,
  enumerable: true,
  get: {
    storageArea() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "storageArea_get", arguments);
    }
  }.storageArea,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "initStorageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initStorageEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageEvent"].prototype, "StorageEvent", "initStorageEvent", arguments);
    }
  }.initStorageEvent
});