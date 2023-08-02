// USBIsochronousInTransferResult对象

USBIsochronousInTransferResult = function USBIsochronousInTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBIsochronousInTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousInTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBIsochronousInTransferResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBIsochronousInTransferResult, "USBIsochronousInTransferResult");
bodavm.toolsFunc.defineProperty(USBIsochronousInTransferResult.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousInTransferResult.prototype, "USBIsochronousInTransferResult", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBIsochronousInTransferResult.prototype, "packets", {
  configurable: true,
  enumerable: true,
  get: function packets() {
    return bodavm.toolsFunc.dispatch(this, USBIsochronousInTransferResult.prototype, "USBIsochronousInTransferResult", "packets_get", arguments);
  },
  set: undefined
});