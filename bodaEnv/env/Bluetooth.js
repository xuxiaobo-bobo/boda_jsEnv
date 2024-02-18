// Bluetooth对象

bodaEnv.memory.globlProtoObj["Bluetooth"] = function Bluetooth() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Bluetooth 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Bluetooth"], "Bluetooth");
bodaEnv.memory.globlProtoObj["Bluetooth"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Bluetooth"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Bluetooth"].prototype, "getAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAvailability() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Bluetooth"].prototype, "Bluetooth", "getAvailability", arguments);
    }
  }.getAvailability
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Bluetooth"].prototype, "requestDevice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestDevice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Bluetooth"].prototype, "Bluetooth", "requestDevice", arguments);
    }
  }.requestDevice
});