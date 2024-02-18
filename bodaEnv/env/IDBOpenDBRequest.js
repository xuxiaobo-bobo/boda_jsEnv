// IDBOpenDBRequest对象

bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"] = function IDBOpenDBRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBOpenDBRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"], "IDBOpenDBRequest");
bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["IDBRequest"].prototype;
bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].__proto__ = bodaEnv.memory.globlProtoObj["IDBRequest"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "onblocked", {
  configurable: true,
  enumerable: true,
  get: {
    onblocked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "IDBOpenDBRequest", "onblocked_get", arguments);
    }
  }.onblocked,
  set: {
    onblocked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "IDBOpenDBRequest", "onblocked_set", arguments);
    }
  }.onblocked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "onupgradeneeded", {
  configurable: true,
  enumerable: true,
  get: {
    onupgradeneeded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "IDBOpenDBRequest", "onupgradeneeded_get", arguments);
    }
  }.onupgradeneeded,
  set: {
    onupgradeneeded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBOpenDBRequest"].prototype, "IDBOpenDBRequest", "onupgradeneeded_set", arguments);
    }
  }.onupgradeneeded
});