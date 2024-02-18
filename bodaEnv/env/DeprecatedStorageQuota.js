bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'] = function DeprecatedStorageQuota() {
  bodaEnv.toolsFunc.console_copy('DeprecatedStorageInfo 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'], "DeprecatedStorageQuota");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'].prototype, "queryUsageAndQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    queryUsageAndQuota() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'].prototype, "DeprecatedStorageQuota", "queryUsageAndQuota", arguments);
    }
  }.queryUsageAndQuota
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'].prototype, "requestQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    requestQuota() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'].prototype, "DeprecatedStorageQuota", "requestQuota", arguments);
    }
  }.requestQuota
});
delete bodaEnv.memory.globlProtoObj['DeprecatedStorageQuota'].prototype.constructor;