// USBAlternateInterface对象

bodaEnv.memory.globlProtoObj["USBAlternateInterface"] = function USBAlternateInterface() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBAlternateInterface 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBAlternateInterface"], "USBAlternateInterface");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "alternateSetting", {
  configurable: true,
  enumerable: true,
  get: {
    alternateSetting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "alternateSetting_get", arguments);
    }
  }.alternateSetting,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "interfaceClass", {
  configurable: true,
  enumerable: true,
  get: {
    interfaceClass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "interfaceClass_get", arguments);
    }
  }.interfaceClass,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "interfaceSubclass", {
  configurable: true,
  enumerable: true,
  get: {
    interfaceSubclass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "interfaceSubclass_get", arguments);
    }
  }.interfaceSubclass,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "interfaceProtocol", {
  configurable: true,
  enumerable: true,
  get: {
    interfaceProtocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "interfaceProtocol_get", arguments);
    }
  }.interfaceProtocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "interfaceName", {
  configurable: true,
  enumerable: true,
  get: {
    interfaceName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "interfaceName_get", arguments);
    }
  }.interfaceName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "endpoints", {
  configurable: true,
  enumerable: true,
  get: {
    endpoints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBAlternateInterface"].prototype, "USBAlternateInterface", "endpoints_get", arguments);
    }
  }.endpoints,
  set: undefined
});