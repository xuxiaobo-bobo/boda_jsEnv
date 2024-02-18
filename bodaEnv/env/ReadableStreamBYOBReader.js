// ReadableStreamBYOBReader对象

bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"] = function ReadableStreamBYOBReader() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableStreamBYOBReader 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"], "ReadableStreamBYOBReader");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    read() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "ReadableStreamBYOBReader", "read", arguments);
    }
  }.read
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "ReadableStreamBYOBReader", "releaseLock", arguments);
    }
  }.releaseLock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "ReadableStreamBYOBReader", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStreamBYOBReader"].prototype, "ReadableStreamBYOBReader", "cancel", arguments);
    }
  }.cancel
});