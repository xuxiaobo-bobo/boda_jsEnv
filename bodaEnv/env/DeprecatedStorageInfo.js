bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'] = function DeprecatedStorageInfo() {
  bodaEnv.toolsFunc.console_copy('DeprecatedStorageInfo 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'], "DeprecatedStorageInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'], "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'], "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "queryUsageAndQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    queryUsageAndQuota() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "DeprecatedStorageInfo", "queryUsageAndQuota", arguments);
    }
  }.queryUsageAndQuota
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "requestQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    requestQuota() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype, "DeprecatedStorageInfo", "requestQuota", arguments);
    }
  }.requestQuota
});
delete bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype.constructor;
bodaEnv.memory.globlProtoObj['webkitStorageInfo'] = {};
bodaEnv.memory.globlProtoObj['webkitStorageInfo'].__proto__ = bodaEnv.memory.globlProtoObj['DeprecatedStorageInfo'].prototype;