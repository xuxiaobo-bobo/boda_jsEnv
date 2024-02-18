// ReadableStreamDefaultReader对象

bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"] = function ReadableStreamDefaultReader() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableStreamDefaultReader 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"], "ReadableStreamDefaultReader");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    read() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "ReadableStreamDefaultReader", "read", arguments);
    }
  }.read
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "ReadableStreamDefaultReader", "releaseLock", arguments);
    }
  }.releaseLock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "ReadableStreamDefaultReader", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamDefaultReader"].prototype, "ReadableStreamDefaultReader", "cancel", arguments);
    }
  }.cancel
});