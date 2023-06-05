// BluetoothCharacteristicProperties对象

bodavm.memory.globalobj['BluetoothCharacteristicProperties'] = function BluetoothCharacteristicProperties() {
  console.log_copy('BluetoothCharacteristicProperties 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothCharacteristicProperties)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothCharacteristicProperties'], "BluetoothCharacteristicProperties");
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "broadcast", {
  configurable: true,
  enumerable: true,
  get: function broadcast() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "broadcast_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "read", {
  configurable: true,
  enumerable: true,
  get: function read() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "read_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "writeWithoutResponse", {
  configurable: true,
  enumerable: true,
  get: function writeWithoutResponse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "writeWithoutResponse_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "write", {
  configurable: true,
  enumerable: true,
  get: function write() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "write_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "notify", {
  configurable: true,
  enumerable: true,
  get: function notify() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "notify_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "indicate", {
  configurable: true,
  enumerable: true,
  get: function indicate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "indicate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "authenticatedSignedWrites", {
  configurable: true,
  enumerable: true,
  get: function authenticatedSignedWrites() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "authenticatedSignedWrites_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "reliableWrite", {
  configurable: true,
  enumerable: true,
  get: function reliableWrite() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "reliableWrite_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothCharacteristicProperties', "writableAuxiliaries", {
  configurable: true,
  enumerable: true,
  get: function writableAuxiliaries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothCharacteristicProperties'].prototype, "BluetoothCharacteristicProperties", "writableAuxiliaries_get", arguments);
  },
  set: undefined
}, 'prototype');