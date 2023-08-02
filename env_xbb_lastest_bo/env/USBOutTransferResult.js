// USBOutTransferResult对象

USBOutTransferResult = function USBOutTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBOutTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBOutTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBOutTransferResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBOutTransferResult, "USBOutTransferResult");
bodavm.toolsFunc.defineProperty(USBOutTransferResult.prototype, "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: function bytesWritten() {
    return bodavm.toolsFunc.dispatch(this, USBOutTransferResult.prototype, "USBOutTransferResult", "bytesWritten_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBOutTransferResult.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, USBOutTransferResult.prototype, "USBOutTransferResult", "status_get", arguments);
  },
  set: undefined
});