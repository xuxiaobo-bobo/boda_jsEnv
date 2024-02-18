// InputDeviceInfo对象

bodaEnv.memory.globlProtoObj["InputDeviceInfo"] = function InputDeviceInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('InputDeviceInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["InputDeviceInfo"], "InputDeviceInfo");
bodaEnv.memory.globlProtoObj["InputDeviceInfo"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype;
bodaEnv.memory.globlProtoObj["InputDeviceInfo"].__proto__ = bodaEnv.memory.globlProtoObj["MediaDeviceInfo"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputDeviceInfo"].prototype, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputDeviceInfo"].prototype, "InputDeviceInfo", "getCapabilities", arguments);
    }
  }.getCapabilities
});