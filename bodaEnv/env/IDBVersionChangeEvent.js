// IDBVersionChangeEvent对象

bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"] = function IDBVersionChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBVersionChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"], "IDBVersionChangeEvent");
bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "oldVersion", {
  configurable: true,
  enumerable: true,
  get: {
    oldVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "IDBVersionChangeEvent", "oldVersion_get", arguments);
    }
  }.oldVersion,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "newVersion", {
  configurable: true,
  enumerable: true,
  get: {
    newVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "IDBVersionChangeEvent", "newVersion_get", arguments);
    }
  }.newVersion,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "dataLoss", {
  configurable: true,
  enumerable: true,
  get: {
    dataLoss() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "IDBVersionChangeEvent", "dataLoss_get", arguments);
    }
  }.dataLoss,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "dataLossMessage", {
  configurable: true,
  enumerable: true,
  get: {
    dataLossMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVersionChangeEvent"].prototype, "IDBVersionChangeEvent", "dataLossMessage_get", arguments);
    }
  }.dataLossMessage,
  set: undefined
});