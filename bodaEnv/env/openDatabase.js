// openDatabase对象
bodaEnv.memory.globlProtoObj["openDatabase"] = {
  openDatabase(a) {
    bodaEnv.toolsFunc.console_copy(`openDatabase 使用-- >`, a);
  }
}.openDatabase;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["openDatabase"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["openDatabase"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'openDatabase'
});