// postMessage对象
bodaEnv.memory.globlProtoObj["postMessage"] = {
  postMessage(a) {
    bodaEnv.toolsFunc.console_copy(`postMessage 使用-- >`, a);
  }
}.postMessage;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["postMessage"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["postMessage"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'postMessage'
});