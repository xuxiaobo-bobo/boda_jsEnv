// USBIsochronousOutTransferPacket对象

bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"] = function USBIsochronousOutTransferPacket() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBIsochronousOutTransferPacket 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"], "USBIsochronousOutTransferPacket");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"].prototype, "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: {
    bytesWritten() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"].prototype, "USBIsochronousOutTransferPacket", "bytesWritten_get", arguments);
    }
  }.bytesWritten,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBIsochronousOutTransferPacket"].prototype, "USBIsochronousOutTransferPacket", "status_get", arguments);
    }
  }.status,
  set: undefined
});