// BluetoothCharacteristicProperties对象

bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"] = function BluetoothCharacteristicProperties() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothCharacteristicProperties 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"], "BluetoothCharacteristicProperties");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "broadcast", {
  configurable: true,
  enumerable: true,
  get: {
    broadcast() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "broadcast_get", arguments);
    }
  }.broadcast,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "read", {
  configurable: true,
  enumerable: true,
  get: {
    read() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "read_get", arguments);
    }
  }.read,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "writeWithoutResponse", {
  configurable: true,
  enumerable: true,
  get: {
    writeWithoutResponse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "writeWithoutResponse_get", arguments);
    }
  }.writeWithoutResponse,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "write", {
  configurable: true,
  enumerable: true,
  get: {
    write() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "write_get", arguments);
    }
  }.write,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "notify", {
  configurable: true,
  enumerable: true,
  get: {
    notify() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "notify_get", arguments);
    }
  }.notify,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "indicate", {
  configurable: true,
  enumerable: true,
  get: {
    indicate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "indicate_get", arguments);
    }
  }.indicate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "authenticatedSignedWrites", {
  configurable: true,
  enumerable: true,
  get: {
    authenticatedSignedWrites() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "authenticatedSignedWrites_get", arguments);
    }
  }.authenticatedSignedWrites,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "reliableWrite", {
  configurable: true,
  enumerable: true,
  get: {
    reliableWrite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "reliableWrite_get", arguments);
    }
  }.reliableWrite,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "writableAuxiliaries", {
  configurable: true,
  enumerable: true,
  get: {
    writableAuxiliaries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothCharacteristicProperties"].prototype, "BluetoothCharacteristicProperties", "writableAuxiliaries_get", arguments);
    }
  }.writableAuxiliaries,
  set: undefined
});