// InputDeviceCapabilities对象

bodaEnv.memory.globlProtoObj["InputDeviceCapabilities"] = function InputDeviceCapabilities() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('InputDeviceCapabilities 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["InputDeviceCapabilities"], "InputDeviceCapabilities");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputDeviceCapabilities"].prototype, "firesTouchEvents", {
  configurable: true,
  enumerable: true,
  get: {
    firesTouchEvents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputDeviceCapabilities"].prototype, "InputDeviceCapabilities", "firesTouchEvents_get", arguments);
    }
  }.firesTouchEvents,
  set: undefined
});