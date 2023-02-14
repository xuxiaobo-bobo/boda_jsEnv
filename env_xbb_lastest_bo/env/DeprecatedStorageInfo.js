
DeprecatedStorageInfo = function DeprecatedStorageInfo() { }
bodavm.toolsFunc.safeProto(DeprecatedStorageInfo, "DeprecatedStorageInfo");

bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo, "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo, "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "queryUsageAndQuota", { writable: true, enumerable: true, configurable: true, value: function queryUsageAndQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageInfo.prototype, "DeprecatedStorageInfo", "queryUsageAndQuota", arguments) } });
bodavm.toolsFunc.defineProperty(DeprecatedStorageInfo.prototype, "requestQuota", { writable: true, enumerable: true, configurable: true, value: function requestQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageInfo.prototype, "DeprecatedStorageInfo", "requestQuota", arguments) } });

var webkitStorageInfo = {}
webkitStorageInfo.__proto__ = DeprecatedStorageInfo.prototype

delete DeprecatedStorageInfo
