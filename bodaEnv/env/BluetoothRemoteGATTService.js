// BluetoothRemoteGATTService对象

bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"] = function BluetoothRemoteGATTService() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothRemoteGATTService 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"], "BluetoothRemoteGATTService");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "BluetoothRemoteGATTService", "device_get", arguments);
    }
  }.device,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "uuid", {
  configurable: true,
  enumerable: true,
  get: {
    uuid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "BluetoothRemoteGATTService", "uuid_get", arguments);
    }
  }.uuid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: {
    isPrimary() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "BluetoothRemoteGATTService", "isPrimary_get", arguments);
    }
  }.isPrimary,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCharacteristic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "BluetoothRemoteGATTService", "getCharacteristic", arguments);
    }
  }.getCharacteristic
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "getCharacteristics", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCharacteristics() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTService"].prototype, "BluetoothRemoteGATTService", "getCharacteristics", arguments);
    }
  }.getCharacteristics
});