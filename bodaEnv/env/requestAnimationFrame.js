// requestAnimationFrame对象
bodaEnv.memory.globlProtoObj["requestAnimationFrame"] = {
  requestAnimationFrame(a) {
    bodaEnv.toolsFunc.console_copy(`requestAnimationFrame 使用-- >`, a);
  }
}.requestAnimationFrame;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["requestAnimationFrame"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["requestAnimationFrame"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'requestAnimationFrame'
});