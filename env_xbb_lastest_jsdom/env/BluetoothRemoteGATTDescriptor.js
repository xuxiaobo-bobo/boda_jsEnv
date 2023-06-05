// BluetoothRemoteGATTDescriptor对象

bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'] = function BluetoothRemoteGATTDescriptor() {
  console.log_copy('BluetoothRemoteGATTDescriptor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothRemoteGATTDescriptor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'], "BluetoothRemoteGATTDescriptor");
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTDescriptor', "characteristic", {
  configurable: true,
  enumerable: true,
  get: function characteristic() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'].prototype, "BluetoothRemoteGATTDescriptor", "characteristic_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTDescriptor', "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'].prototype, "BluetoothRemoteGATTDescriptor", "uuid_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTDescriptor', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'].prototype, "BluetoothRemoteGATTDescriptor", "value_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTDescriptor', "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'].prototype, "BluetoothRemoteGATTDescriptor", "readValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothRemoteGATTDescriptor', "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothRemoteGATTDescriptor'].prototype, "BluetoothRemoteGATTDescriptor", "writeValue", arguments);
  }
}, 'prototype');