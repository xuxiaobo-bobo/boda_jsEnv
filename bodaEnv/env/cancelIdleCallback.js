// cancelIdleCallback对象
bodaEnv.memory.globlProtoObj["cancelIdleCallback"] = {
  cancelIdleCallback(a) {
    bodaEnv.toolsFunc.console_copy(`cancelIdleCallback 使用-- >`, a);
  }
}.cancelIdleCallback;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["cancelIdleCallback"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["cancelIdleCallback"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'cancelIdleCallback'
});