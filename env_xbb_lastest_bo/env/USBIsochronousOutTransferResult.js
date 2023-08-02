// USBIsochronousOutTransferResult对象

USBIsochronousOutTransferResult = function USBIsochronousOutTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBIsochronousOutTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousOutTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBIsochronousOutTransferResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBIsochronousOutTransferResult, "USBIsochronousOutTransferResult");
bodavm.toolsFunc.defineProperty(USBIsochronousOutTransferResult.prototype, "packets", {
  configurable: true,
  enumerable: true,
  get: function packets() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousOutTransferResult.prototype, "USBIsochronousOutTransferResult", "packets_get", arguments);
  },
  set: undefined
});