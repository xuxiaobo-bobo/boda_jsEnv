// queueMicrotask对象
bodaEnv.memory.globlProtoObj["queueMicrotask"] = {
  queueMicrotask(a) {
    bodaEnv.toolsFunc.console_copy(`queueMicrotask 使用-- >`, a);
  }
}.queueMicrotask;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["queueMicrotask"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["queueMicrotask"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'queueMicrotask'
});