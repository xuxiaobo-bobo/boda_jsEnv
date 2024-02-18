// USBIsochronousOutTransferResult对象

bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferResult"] = function USBIsochronousOutTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBIsochronousOutTransferResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferResult"], "USBIsochronousOutTransferResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferResult"].prototype, "packets", {
  configurable: true,
  enumerable: true,
  get: {
    packets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferResult"].prototype, "USBIsochronousOutTransferResult", "packets_get", arguments);
    }
  }.packets,
  set: undefined
});