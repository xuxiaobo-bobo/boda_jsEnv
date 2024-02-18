// USBIsochronousInTransferPacket对象

bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"] = function USBIsochronousInTransferPacket() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBIsochronousInTransferPacket 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"], "USBIsochronousInTransferPacket");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"].prototype, "USBIsochronousInTransferPacket", "status_get", arguments);
    }
  }.status,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousInTransferPacket"].prototype, "USBIsochronousInTransferPacket", "data_get", arguments);
    }
  }.data,
  set: undefined
});