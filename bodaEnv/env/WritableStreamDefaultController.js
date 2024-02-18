// WritableStreamDefaultController对象

bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"] = function WritableStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WritableStreamDefaultController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"], "WritableStreamDefaultController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"].prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: {
    signal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"].prototype, "WritableStreamDefaultController", "signal_get", arguments);
    }
  }.signal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"].prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultController"].prototype, "WritableStreamDefaultController", "error", arguments);
    }
  }.error
});