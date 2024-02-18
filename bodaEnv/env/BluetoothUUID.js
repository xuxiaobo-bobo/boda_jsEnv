// BluetoothUUID对象

bodaEnv.memory.globlProtoObj["BluetoothUUID"] = function BluetoothUUID() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothUUID 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothUUID"], "BluetoothUUID");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothUUID"], "canonicalUUID", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    canonicalUUID() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"], "BluetoothUUID", "canonicalUUID", arguments);
    }
  }.canonicalUUID
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothUUID"], "getCharacteristic", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCharacteristic() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"], "BluetoothUUID", "getCharacteristic", arguments);
    }
  }.getCharacteristic
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothUUID"], "getDescriptor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDescriptor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"], "BluetoothUUID", "getDescriptor", arguments);
    }
  }.getDescriptor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothUUID"], "getService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getService() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"], "BluetoothUUID", "getService", arguments);
    }
  }.getService
});