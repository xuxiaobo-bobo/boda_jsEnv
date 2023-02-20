
bodavm.memory.globalobj['DeprecatedStorageInfo'] = function DeprecatedStorageInfo() { }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeprecatedStorageInfo'] , "DeprecatedStorageInfo");

bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 });
bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 });
bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "TEMPORARY", { configurable: false, enumerable: true, writable: false, value: 0 },'prototype');
bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "PERSISTENT", { configurable: false, enumerable: true, writable: false, value: 1 },'prototype');
bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "queryUsageAndQuota", { writable: true, enumerable: true, configurable: true, value: function queryUsageAndQuota() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeprecatedStorageInfo'] .prototype, "DeprecatedStorageInfo", "queryUsageAndQuota", arguments) } },'prototype');
bodavm.toolsFunc.defineProperty('DeprecatedStorageInfo' , "requestQuota", { writable: true, enumerable: true, configurable: true, value: function requestQuota() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeprecatedStorageInfo'] .prototype, "DeprecatedStorageInfo", "requestQuota", arguments) } },'prototype');

bodavm.memory.globalobj[ 'webkitStorageInfo']   = {}
bodavm.memory.globalobj[ 'webkitStorageInfo'].__proto__ = bodavm.memory.globalobj['DeprecatedStorageInfo'].prototype
