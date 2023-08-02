// BluetoothRemoteGATTServer对象

BluetoothRemoteGATTServer = function BluetoothRemoteGATTServer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BluetoothRemoteGATTServer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BluetoothRemoteGATTServer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BluetoothRemoteGATTServer, "BluetoothRemoteGATTServer");
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "device_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "connected", {
  configurable: true,
  enumerable: true,
  get: function connected() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "connected_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "connect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function connect() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "connect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "disconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "getPrimaryService", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPrimaryService() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "getPrimaryService", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BluetoothRemoteGATTServer.prototype, "getPrimaryServices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPrimaryServices() {
    return bodavm.toolsFunc.dispatch(this, BluetoothRemoteGATTServer.prototype, "BluetoothRemoteGATTServer", "getPrimaryServices", arguments);
  }
});