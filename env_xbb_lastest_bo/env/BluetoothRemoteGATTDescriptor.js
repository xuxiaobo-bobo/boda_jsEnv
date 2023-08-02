// BluetoothRemoteGATTDescriptor对象

BluetoothRemoteGATTDescriptor = function BluetoothRemoteGATTDescriptor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothRemoteGATTDescriptor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothRemoteGATTDescriptor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothRemoteGATTDescriptor, "BluetoothRemoteGATTDescriptor");
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTDescriptor.prototype, "characteristic", {
  configurable: true,
  enumerable: true,
  get: function characteristic() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTDescriptor.prototype, "BluetoothRemoteGATTDescriptor", "characteristic_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTDescriptor.prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTDescriptor.prototype, "BluetoothRemoteGATTDescriptor", "uuid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTDescriptor.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTDescriptor.prototype, "BluetoothRemoteGATTDescriptor", "value_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTDescriptor.prototype, "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readValue() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTDescriptor.prototype, "BluetoothRemoteGATTDescriptor", "readValue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTDescriptor.prototype, "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValue() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTDescriptor.prototype, "BluetoothRemoteGATTDescriptor", "writeValue", arguments);
  }
});