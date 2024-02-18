// chrome对象

bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["chrome"], "loadTimes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    loadTimes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["chrome"], "chrome", "loadTimes", arguments);
    }
  }.loadTimes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["chrome"], "csi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    csi() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["chrome"], "chrome", "csi", arguments);
    }
  }.csi
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["chrome"], "app", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {}
});