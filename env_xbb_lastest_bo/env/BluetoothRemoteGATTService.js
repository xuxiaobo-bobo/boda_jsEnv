// BluetoothRemoteGATTService对象

BluetoothRemoteGATTService = function BluetoothRemoteGATTService() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothRemoteGATTService)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothRemoteGATTService 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothRemoteGATTService, "BluetoothRemoteGATTService");
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTService.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTService.prototype, "BluetoothRemoteGATTService", "device_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTService.prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTService.prototype, "BluetoothRemoteGATTService", "uuid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTService.prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTService.prototype, "BluetoothRemoteGATTService", "isPrimary_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTService.prototype, "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristic() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTService.prototype, "BluetoothRemoteGATTService", "getCharacteristic", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTService.prototype, "getCharacteristics", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristics() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTService.prototype, "BluetoothRemoteGATTService", "getCharacteristics", arguments);
  }
});