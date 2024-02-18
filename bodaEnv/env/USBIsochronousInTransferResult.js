// USBIsochronousInTransferResult对象

bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"] = function USBIsochronousInTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBIsochronousInTransferResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"], "USBIsochronousInTransferResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"].prototype, "USBIsochronousInTransferResult", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"].prototype, "packets", {
  configurable: true,
  enumerable: true,
  get: {
    packets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousInTransferResult"].prototype, "USBIsochronousInTransferResult", "packets_get", arguments);
    }
  }.packets,
  set: undefined
});