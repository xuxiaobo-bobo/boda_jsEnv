// MediaEncryptedEvent对象

bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"] = function MediaEncryptedEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaEncryptedEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"], "MediaEncryptedEvent");
bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].prototype, "initDataType", {
  configurable: true,
  enumerable: true,
  get: {
    initDataType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].prototype, "MediaEncryptedEvent", "initDataType_get", arguments);
    }
  }.initDataType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].prototype, "initData", {
  configurable: true,
  enumerable: true,
  get: {
    initData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaEncryptedEvent"].prototype, "MediaEncryptedEvent", "initData_get", arguments);
    }
  }.initData,
  set: undefined
});