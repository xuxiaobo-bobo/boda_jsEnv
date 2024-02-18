// BluetoothRemoteGATTCharacteristic对象

bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"] = function BluetoothRemoteGATTCharacteristic() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothRemoteGATTCharacteristic 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"], "BluetoothRemoteGATTCharacteristic");
bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "service", {
  configurable: true,
  enumerable: true,
  get: {
    service() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "service_get", arguments);
    }
  }.service,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: {
    uuid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "uuid_get", arguments);
    }
  }.uuid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "properties", {
  configurable: true,
  enumerable: true,
  get: {
    properties() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "properties_get", arguments);
    }
  }.properties,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "value_get", arguments);
    }
  }.value,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "oncharacteristicvaluechanged", {
  configurable: true,
  enumerable: true,
  get: {
    oncharacteristicvaluechanged() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_get", arguments);
    }
  }.oncharacteristicvaluechanged,
  set: {
    oncharacteristicvaluechanged() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "oncharacteristicvaluechanged_set", arguments);
    }
  }.oncharacteristicvaluechanged
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDescriptor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptor", arguments);
    }
  }.getDescriptor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "getDescriptors", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDescriptors() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "getDescriptors", arguments);
    }
  }.getDescriptors
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "readValue", arguments);
    }
  }.readValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "startNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    startNotifications() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "startNotifications", arguments);
    }
  }.startNotifications
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "stopNotifications", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stopNotifications() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "stopNotifications", arguments);
    }
  }.stopNotifications
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "writeValue", arguments);
    }
  }.writeValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "writeValueWithResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeValueWithResponse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithResponse", arguments);
    }
  }.writeValueWithResponse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "writeValueWithoutResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeValueWithoutResponse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTCharacteristic"].prototype, "BluetoothRemoteGATTCharacteristic", "writeValueWithoutResponse", arguments);
    }
  }.writeValueWithoutResponse
});