// reportError对象
bodaEnv.memory.globlProtoObj["reportError"] = {
  reportError(a) {
    bodaEnv.toolsFunc.console_copy(`reportError 使用-- >`, a);
  }
}.reportError;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["reportError"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["reportError"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'reportError'
});