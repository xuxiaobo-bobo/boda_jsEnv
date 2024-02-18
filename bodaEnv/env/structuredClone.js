// structuredClone对象
bodaEnv.memory.globlProtoObj["structuredClone"] = {
  structuredClone(a) {
    bodaEnv.toolsFunc.console_copy(`structuredClone 使用-- >`, a);
  }
}.structuredClone;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["structuredClone"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["structuredClone"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'structuredClone'
});