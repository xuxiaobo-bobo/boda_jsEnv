// BluetoothUUID对象

BluetoothUUID = function BluetoothUUID() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothUUID)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothUUID 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothUUID, "BluetoothUUID");
bodavm.toolsFunc.defineProperty(BluetoothUUID, "canonicalUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canonicalUUID() {
    return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "canonicalUUID", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCharacteristic() {
    return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getCharacteristic", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptor() {
    return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getDescriptor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothUUID, "getService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getService() {
    return bodavm.toolsFunc.dispatch(this, BluetoothUUID, "BluetoothUUID", "getService", arguments);
  }
});