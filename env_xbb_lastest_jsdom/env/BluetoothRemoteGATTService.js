// BluetoothRemoteGATTService对象

bodavm.memory.globalobj['BluetoothRemoteGATTService'] = function BluetoothRemoteGATTService() {
  console.log_copy('BluetoothRemoteGATTService 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothRemoteGATTService)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothRemoteGATTService'], "BluetoothRemoteGATTService");
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTService', "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTService'].prototype, "BluetoothRemoteGATTService", "device_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTService', "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTService'].prototype, "BluetoothRemoteGATTService", "uuid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTService', "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTService'].prototype, "BluetoothRemoteGATTService", "isPrimary_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTService', "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTService'].prototype, "BluetoothRemoteGATTService", "getCharacteristic", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTService', "getCharacteristics", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristics() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTService'].prototype, "BluetoothRemoteGATTService", "getCharacteristics", arguments);
  }
}, 'prototype');