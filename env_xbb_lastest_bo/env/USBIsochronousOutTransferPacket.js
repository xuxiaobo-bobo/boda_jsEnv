// USBIsochronousOutTransferPacket对象

USBIsochronousOutTransferPacket = function USBIsochronousOutTransferPacket() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBIsochronousOutTransferPacket)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousOutTransferPacket': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBIsochronousOutTransferPacket 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBIsochronousOutTransferPacket, "USBIsochronousOutTransferPacket");
bodavm.toolsFunc.defineProperty(USBIsochronousOutTransferPacket.prototype, "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: function bytesWritten() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousOutTransferPacket.prototype, "USBIsochronousOutTransferPacket", "bytesWritten_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBIsochronousOutTransferPacket.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousOutTransferPacket.prototype, "USBIsochronousOutTransferPacket", "status_get", arguments);
  },
  set: undefined
});