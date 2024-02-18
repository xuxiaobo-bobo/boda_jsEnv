// webkitRequestAnimationFrame对象
bodaEnv.memory.globlProtoObj["webkitRequestAnimationFrame"] = {
  webkitRequestAnimationFrame(a) {
    bodaEnv.toolsFunc.console_copy(`webkitRequestAnimationFrame 使用-- >`, a);
  }
}.webkitRequestAnimationFrame;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["webkitRequestAnimationFrame"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["webkitRequestAnimationFrame"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'webkitRequestAnimationFrame'
});