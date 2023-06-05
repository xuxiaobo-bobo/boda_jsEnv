// USBOutTransferResult对象

bodavm.memory.globalobj['USBOutTransferResult'] = function USBOutTransferResult() {
  console.log_copy('USBOutTransferResult 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBOutTransferResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBOutTransferResult': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBOutTransferResult'], "USBOutTransferResult");
bodavm.toolsFunc.defineProperty('USBOutTransferResult', "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: function bytesWritten() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBOutTransferResult'].prototype, "USBOutTransferResult", "bytesWritten_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBOutTransferResult', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBOutTransferResult'].prototype, "USBOutTransferResult", "status_get", arguments);
  },
  set: undefined
}, 'prototype');