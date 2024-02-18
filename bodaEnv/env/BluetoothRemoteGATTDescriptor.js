// BluetoothRemoteGATTDescriptor对象

bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"] = function BluetoothRemoteGATTDescriptor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothRemoteGATTDescriptor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"], "BluetoothRemoteGATTDescriptor");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "characteristic", {
  configurable: true,
  enumerable: true,
  get: {
    characteristic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "BluetoothRemoteGATTDescriptor", "characteristic_get", arguments);
    }
  }.characteristic,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: {
    uuid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "BluetoothRemoteGATTDescriptor", "uuid_get", arguments);
    }
  }.uuid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "BluetoothRemoteGATTDescriptor", "value_get", arguments);
    }
  }.value,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "readValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "BluetoothRemoteGATTDescriptor", "readValue", arguments);
    }
  }.readValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "writeValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTDescriptor"].prototype, "BluetoothRemoteGATTDescriptor", "writeValue", arguments);
    }
  }.writeValue
});