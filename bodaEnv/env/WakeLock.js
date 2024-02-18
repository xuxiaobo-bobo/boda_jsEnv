// WakeLock对象

bodaEnv.memory.globlProtoObj["WakeLock"] = function WakeLock() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WakeLock 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WakeLock"], "WakeLock");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WakeLock"].prototype, "request", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    request() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WakeLock"].prototype, "WakeLock", "request", arguments);
    }
  }.request
});