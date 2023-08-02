// USBInTransferResult对象

USBInTransferResult = function USBInTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBInTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBInTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBInTransferResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBInTransferResult, "USBInTransferResult");
bodavm.toolsFunc.defineProperty(USBInTransferResult.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, USBInTransferResult.prototype, "USBInTransferResult", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBInTransferResult.prototype, "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, USBInTransferResult.prototype, "USBInTransferResult", "status_get", arguments);
  },
  set: undefined
});