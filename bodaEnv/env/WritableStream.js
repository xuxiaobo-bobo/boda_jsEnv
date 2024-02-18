// WritableStream对象

bodaEnv.memory.globlProtoObj["WritableStream"] = function WritableStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WritableStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WritableStream"], "WritableStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "locked", {
  configurable: true,
  enumerable: true,
  get: {
    locked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "WritableStream", "locked_get", arguments);
    }
  }.locked,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "WritableStream", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "WritableStream", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "getWriter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getWriter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStream"].prototype, "WritableStream", "getWriter", arguments);
    }
  }.getWriter
});