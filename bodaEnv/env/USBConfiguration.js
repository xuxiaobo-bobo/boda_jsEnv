// USBConfiguration对象

bodaEnv.memory.globlProtoObj["USBConfiguration"] = function USBConfiguration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBConfiguration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBConfiguration"], "USBConfiguration");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "configurationValue", {
  configurable: true,
  enumerable: true,
  get: {
    configurationValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "USBConfiguration", "configurationValue_get", arguments);
    }
  }.configurationValue,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "configurationName", {
  configurable: true,
  enumerable: true,
  get: {
    configurationName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "USBConfiguration", "configurationName_get", arguments);
    }
  }.configurationName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "interfaces", {
  configurable: true,
  enumerable: true,
  get: {
    interfaces() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBConfiguration"].prototype, "USBConfiguration", "interfaces_get", arguments);
    }
  }.interfaces,
  set: undefined
});