// IdleDeadline对象

bodaEnv.memory.globlProtoObj["IdleDeadline"] = function IdleDeadline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IdleDeadline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IdleDeadline"], "IdleDeadline");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDeadline"].prototype, "didTimeout", {
  configurable: true,
  enumerable: true,
  get: {
    didTimeout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDeadline"].prototype, "IdleDeadline", "didTimeout_get", arguments);
    }
  }.didTimeout,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdleDeadline"].prototype, "timeRemaining", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    timeRemaining() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdleDeadline"].prototype, "IdleDeadline", "timeRemaining", arguments);
    }
  }.timeRemaining
});