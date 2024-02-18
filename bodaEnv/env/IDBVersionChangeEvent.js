// IDBVerbodaChangeEvent对象

bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"] = function IDBVerbodaChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBVerbodaChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"], "IDBVerbodaChangeEvent");
bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "oldVerboda", {
  configurable: true,
  enumerable: true,
  get: {
    oldVerboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "IDBVerbodaChangeEvent", "oldVerboda_get", arguments);
    }
  }.oldVerboda,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "newVerboda", {
  configurable: true,
  enumerable: true,
  get: {
    newVerboda() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "IDBVerbodaChangeEvent", "newVerboda_get", arguments);
    }
  }.newVerboda,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "dataLoss", {
  configurable: true,
  enumerable: true,
  get: {
    dataLoss() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "IDBVerbodaChangeEvent", "dataLoss_get", arguments);
    }
  }.dataLoss,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "dataLossMessage", {
  configurable: true,
  enumerable: true,
  get: {
    dataLossMessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBVerbodaChangeEvent"].prototype, "IDBVerbodaChangeEvent", "dataLossMessage_get", arguments);
    }
  }.dataLossMessage,
  set: undefined
});