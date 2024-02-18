// BluetoothRemoteGATTServer对象

bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"] = function BluetoothRemoteGATTServer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothRemoteGATTServer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"], "BluetoothRemoteGATTServer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "device_get", arguments);
    }
  }.device,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "connected", {
  configurable: true,
  enumerable: true,
  get: {
    connected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "connected_get", arguments);
    }
  }.connected,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "connect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    connect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "connect", arguments);
    }
  }.connect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "getPrimaryService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPrimaryService() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "getPrimaryService", arguments);
    }
  }.getPrimaryService
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "getPrimaryServices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPrimaryServices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothRemoteGATTServer"].prototype, "BluetoothRemoteGATTServer", "getPrimaryServices", arguments);
    }
  }.getPrimaryServices
});