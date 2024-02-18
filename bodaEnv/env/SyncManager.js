// SyncManager对象

bodaEnv.memory.globlProtoObj["SyncManager"] = function SyncManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SyncManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SyncManager"], "SyncManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SyncManager"].prototype, "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTags() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SyncManager"].prototype, "SyncManager", "getTags", arguments);
    }
  }.getTags
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SyncManager"].prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    register() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SyncManager"].prototype, "SyncManager", "register", arguments);
    }
  }.register
});