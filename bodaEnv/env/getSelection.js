// getSelection对象
bodaEnv.memory.globlProtoObj["getSelection"] = {
  getSelection(a) {
    bodaEnv.toolsFunc.console_copy(`getSelection 使用-- >`, a);
  }
}.getSelection;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["getSelection"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["getSelection"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getSelection'
});