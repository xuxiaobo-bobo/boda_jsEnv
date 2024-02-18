// alert对象
bodaEnv.memory.globlProtoObj["alert"] = {
  alert(a) {
    bodaEnv.toolsFunc.console_copy('bodaEnv.memory.globlProtoObj["alert"] -->', a);
  }
}.alert;
bodaEnv.toolsFunc.safefunction(bodaEnv.memory.globlProtoObj["alert"], 'alert');
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["alert"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["alert"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'alert'
});