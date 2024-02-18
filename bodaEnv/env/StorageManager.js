// StorageManager对象

bodaEnv.memory.globlProtoObj["StorageManager"] = function StorageManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StorageManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StorageManager"], "StorageManager");
bodaEnv.memory.globlProtoObj["StorageManager"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["StorageManager"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "estimate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    estimate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "StorageManager", "estimate", arguments);
    }
  }.estimate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "persisted", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    persisted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "StorageManager", "persisted", arguments);
    }
  }.persisted
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "getDirectory", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDirectory() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "StorageManager", "getDirectory", arguments);
    }
  }.getDirectory
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "persist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    persist() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StorageManager"].prototype, "StorageManager", "persist", arguments);
    }
  }.persist
});