// CryptoKey对象

bodaEnv.memory.globlProtoObj["CryptoKey"] = function CryptoKey() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CryptoKey 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CryptoKey"], "CryptoKey");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "CryptoKey", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "extractable", {
  configurable: true,
  enumerable: true,
  get: {
    extractable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "CryptoKey", "extractable_get", arguments);
    }
  }.extractable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "algorithm", {
  configurable: true,
  enumerable: true,
  get: {
    algorithm() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "CryptoKey", "algorithm_get", arguments);
    }
  }.algorithm,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "usages", {
  configurable: true,
  enumerable: true,
  get: {
    usages() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CryptoKey"].prototype, "CryptoKey", "usages_get", arguments);
    }
  }.usages,
  set: undefined
});