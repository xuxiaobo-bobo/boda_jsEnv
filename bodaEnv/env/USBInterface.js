// USBInterface对象

bodaEnv.memory.globlProtoObj["USBInterface"] = function USBInterface() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBInterface 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBInterface"], "USBInterface");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "interfaceNumber", {
  configurable: true,
  enumerable: true,
  get: {
    interfaceNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "USBInterface", "interfaceNumber_get", arguments);
    }
  }.interfaceNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "alternate", {
  configurable: true,
  enumerable: true,
  get: {
    alternate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "USBInterface", "alternate_get", arguments);
    }
  }.alternate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "alternates", {
  configurable: true,
  enumerable: true,
  get: {
    alternates() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "USBInterface", "alternates_get", arguments);
    }
  }.alternates,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "claimed", {
  configurable: true,
  enumerable: true,
  get: {
    claimed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBInterface"].prototype, "USBInterface", "claimed_get", arguments);
    }
  }.claimed,
  set: undefined
});