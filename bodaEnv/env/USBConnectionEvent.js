// USBConnectionEvent对象

bodaEnv.memory.globlProtoObj["USBConnectionEvent"] = function USBConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBConnectionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBConnectionEvent"], "USBConnectionEvent");
bodaEnv.memory.globlProtoObj["USBConnectionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["USBConnectionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBConnectionEvent"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBConnectionEvent"].prototype, "USBConnectionEvent", "device_get", arguments);
    }
  }.device,
  set: undefined
});