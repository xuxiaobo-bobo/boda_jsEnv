// stop对象
bodaEnv.memory.globlProtoObj["stop"] = {
  stop(a) {
    bodaEnv.toolsFunc.console_copy(`stop 使用-- >`, a);
  }
}.stop;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["stop"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["stop"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'stop'
});