// AbortController对象

bodaEnv.memory.globlProtoObj["AbortController"] = function AbortController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AbortController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AbortController"], "AbortController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortController"].prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: {
    signal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortController"].prototype, "AbortController", "signal_get", arguments);
    }
  }.signal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AbortController"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AbortController"].prototype, "AbortController", "abort", arguments);
    }
  }.abort
});