bodavm.memory.notDefined['DeprecatedStorageQuota'] = function DeprecatedStorageQuota() {
  console.log_copy('DeprecatedStorageInfo 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  ;
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['DeprecatedStorageQuota'], "DeprecatedStorageQuota");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageQuota'].prototype, "queryUsageAndQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function queryUsageAndQuota() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['DeprecatedStorageQuota'].prototype, "DeprecatedStorageQuota", "queryUsageAndQuota", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageQuota'].prototype, "requestQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function requestQuota() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['DeprecatedStorageQuota'].prototype, "DeprecatedStorageQuota", "requestQuota", arguments);
  }
});
delete bodavm.memory.notDefined['DeprecatedStorageQuota'].prototype.constructor;