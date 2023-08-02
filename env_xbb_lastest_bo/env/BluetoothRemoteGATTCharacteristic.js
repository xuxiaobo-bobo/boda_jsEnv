// BluetoothRemoteGATTCharacteristic对象

BluetoothRemoteGATTCharacteristic = function BluetoothRemoteGATTCharacteristic() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothRemoteGATTCharacteristic)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothRemoteGATTCharacteristic 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothRemoteGATTCharacteristic, "BluetoothRemoteGATTCharacteristic");
BluetoothRemoteGATTCharacteristic.prototype.__proto__ = EventTarget.prototype;
BluetoothRemoteGATTCharacteristic.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "service", {
  configurable: true,
  enumerable: true,
  get: function service() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "service_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: function uuid() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "uuid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "properties", {
  configurable: true,
  enumerable: true,
  get: function properties() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "properties_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "value_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "oncharacteristicvaluechanged", {
  configurable: true,
  enumerable: true,
  get: function oncharacteristicvaluechanged() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_get", arguments);
  },
  set: function oncharacteristicvaluechanged() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptor() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "getDescriptors", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDescriptors() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptors", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readValue() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "readValue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "startNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startNotifications() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "startNotifications", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "stopNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stopNotifications() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "stopNotifications", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValue() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "writeValue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "writeValueWithResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValueWithResponse() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithResponse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTCharacteristic.prototype, "writeValueWithoutResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeValueWithoutResponse() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTCharacteristic.prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithoutResponse", arguments);
  }
});