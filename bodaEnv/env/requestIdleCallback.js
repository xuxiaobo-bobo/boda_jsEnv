// requestIdleCallback对象
bodaEnv.memory.globlProtoObj["requestIdleCallback"] = {
  requestIdleCallback(a) {
    bodaEnv.toolsFunc.console_copy(`requestIdleCallback 使用-- >`, a);
  }
}.requestIdleCallback;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["requestIdleCallback"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["requestIdleCallback"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'requestIdleCallback'
});