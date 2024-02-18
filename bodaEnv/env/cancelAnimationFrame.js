// cancelAnimationFrame对象
bodaEnv.memory.globlProtoObj["cancelAnimationFrame"] = {
  cancelAnimationFrame(a) {
    bodaEnv.toolsFunc.console_copy(`cancelAnimationFrame 使用-- >`, a);
  }
}.cancelAnimationFrame;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["cancelAnimationFrame"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["cancelAnimationFrame"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'cancelAnimationFrame'
});