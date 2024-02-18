// LockManager对象

bodaEnv.memory.globlProtoObj["LockManager"] = function LockManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LockManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LockManager"], "LockManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LockManager"].prototype, "query", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    query() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LockManager"].prototype, "LockManager", "query", arguments);
    }
  }.query
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LockManager"].prototype, "request", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    request() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LockManager"].prototype, "LockManager", "request", arguments);
    }
  }.request
});