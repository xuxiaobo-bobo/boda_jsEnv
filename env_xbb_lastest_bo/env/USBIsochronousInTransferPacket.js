// USBIsochronousInTransferPacket对象

USBIsochronousInTransferPacket = function USBIsochronousInTransferPacket() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBIsochronousInTransferPacket)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousInTransferPacket': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBIsochronousInTransferPacket 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBIsochronousInTransferPacket, "USBIsochronousInTransferPacket");
bodavm.toolsFunc.defineProperty(USBIsochronousInTransferPacket.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousInTransferPacket.prototype, "USBIsochronousInTransferPacket", "status_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBIsochronousInTransferPacket.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousInTransferPacket.prototype, "USBIsochronousInTransferPacket", "data_get", arguments);
  },
  set: undefined
});