// USBOutTransferResult对象

bodaEnv.memory.globlProtoObj["USBOutTransferResult"] = function USBOutTransferResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBOutTransferResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBOutTransferResult"], "USBOutTransferResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBOutTransferResult"].prototype, "bytesWritten", {
  configurable: true,
  enumerable: true,
  get: {
    bytesWritten() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBOutTransferResult"].prototype, "USBOutTransferResult", "bytesWritten_get", arguments);
    }
  }.bytesWritten,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBOutTransferResult"].prototype, "status", {
  configurable: true,
  enumerable: true,
  get: {
    status() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBOutTransferResult"].prototype, "USBOutTransferResult", "status_get", arguments);
    }
  }.status,
  set: undefined
});