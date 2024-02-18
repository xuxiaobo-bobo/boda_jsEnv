// BluetoothDevice对象

bodaEnv.memory.globlProtoObj["BluetoothDevice"] = function BluetoothDevice() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BluetoothDevice 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BluetoothDevice"], "BluetoothDevice");
bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BluetoothDevice"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "BluetoothDevice", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "BluetoothDevice", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "gatt", {
  configurable: true,
  enumerable: true,
  get: {
    gatt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "BluetoothDevice", "gatt_get", arguments);
    }
  }.gatt,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "ongattserverdisconnected", {
  configurable: true,
  enumerable: true,
  get: {
    ongattserverdisconnected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "BluetoothDevice", "ongattserverdisconnected_get", arguments);
    }
  }.ongattserverdisconnected,
  set: {
    ongattserverdisconnected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BluetoothDevice"].prototype, "BluetoothDevice", "ongattserverdisconnected_set", arguments);
    }
  }.ongattserverdisconnected
});