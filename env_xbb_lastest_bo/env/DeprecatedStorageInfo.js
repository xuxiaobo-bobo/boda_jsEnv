bodavm.memory.notDefined['DeprecatedStorageInfo'] = function DeprecatedStorageInfo() {
  console.log_copy('DeprecatedStorageInfo 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['DeprecatedStorageInfo'], "DeprecatedStorageInfo");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'], "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'], "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "queryUsageAndQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function queryUsageAndQuota() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "DeprecatedStorageInfo", "queryUsageAndQuota", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "requestQuota", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function requestQuota() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype, "DeprecatedStorageInfo", "requestQuota", arguments);
  }
});
delete bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype.constructor;
bodavm.memory.notDefined['webkitStorageInfo'] = {};
bodavm.memory.notDefined['webkitStorageInfo'].__proto__ = bodavm.memory.notDefined['DeprecatedStorageInfo'].prototype;