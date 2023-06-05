// BluetoothDevice对象

bodavm.memory.globalobj['BluetoothDevice'] = function BluetoothDevice() {
  console.log_copy('BluetoothDevice 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BluetoothDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BluetoothDevice'], "BluetoothDevice");
bodavm.memory.globalobj['BluetoothDevice'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['BluetoothDevice'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('BluetoothDevice', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothDevice'].prototype, "BluetoothDevice", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothDevice', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothDevice'].prototype, "BluetoothDevice", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothDevice', "gatt", {
  configurable: true,
  enumerable: true,
  get: function gatt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothDevice'].prototype, "BluetoothDevice", "gatt_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BluetoothDevice', "ongattserverdisconnected", {
  configurable: true,
  enumerable: true,
  get: function ongattserverdisconnected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothDevice'].prototype, "BluetoothDevice", "ongattserverdisconnected_get", arguments);
  },
  set: function ongattserverdisconnected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BluetoothDevice'].prototype, "BluetoothDevice", "ongattserverdisconnected_set", arguments);
  }
}, 'prototype');