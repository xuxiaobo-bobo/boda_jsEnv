// IDBFactory对象

bodaEnv.memory.globlProtoObj["IDBFactory"] = function IDBFactory() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBFactory 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBFactory"], "IDBFactory");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "cmp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cmp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "IDBFactory", "cmp", arguments);
    }
  }.cmp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "databases", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    databases() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "IDBFactory", "databases", arguments);
    }
  }.databases
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "deleteDatabase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteDatabase() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "IDBFactory", "deleteDatabase", arguments);
    }
  }.deleteDatabase
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBFactory"].prototype, "IDBFactory", "open", arguments);
    }
  }.open
});