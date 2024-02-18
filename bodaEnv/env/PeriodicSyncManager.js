// PeriodicSyncManager对象

bodaEnv.memory.globlProtoObj["PeriodicSyncManager"] = function PeriodicSyncManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PeriodicSyncManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PeriodicSyncManager"], "PeriodicSyncManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTags() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "PeriodicSyncManager", "getTags", arguments);
    }
  }.getTags
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    register() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "PeriodicSyncManager", "register", arguments);
    }
  }.register
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unregister() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PeriodicSyncManager"].prototype, "PeriodicSyncManager", "unregister", arguments);
    }
  }.unregister
});