// BluetoothCharacteristicProperties对象

BluetoothCharacteristicProperties = function BluetoothCharacteristicProperties() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothCharacteristicProperties)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothCharacteristicProperties 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothCharacteristicProperties, "BluetoothCharacteristicProperties");
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "broadcast", {
  configurable: true,
  enumerable: true,
  get: function broadcast() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "broadcast_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "read", {
  configurable: true,
  enumerable: true,
  get: function read() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "read_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "writeWithoutResponse", {
  configurable: true,
  enumerable: true,
  get: function writeWithoutResponse() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "writeWithoutResponse_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "write", {
  configurable: true,
  enumerable: true,
  get: function write() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "write_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "notify", {
  configurable: true,
  enumerable: true,
  get: function notify() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "notify_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "indicate", {
  configurable: true,
  enumerable: true,
  get: function indicate() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "indicate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "authenticatedSignedWrites", {
  configurable: true,
  enumerable: true,
  get: function authenticatedSignedWrites() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "authenticatedSignedWrites_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "reliableWrite", {
  configurable: true,
  enumerable: true,
  get: function reliableWrite() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "reliableWrite_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothCharacteristicProperties.prototype, "writableAuxiliaries", {
  configurable: true,
  enumerable: true,
  get: function writableAuxiliaries() {
    return bodavm.toolsFunc.dispatch(this, BluetoothCharacteristicProperties.prototype, "BluetoothCharacteristicProperties", "writableAuxiliaries_get", arguments);
  },
  set: undefined
});