// ReadableStream对象

bodaEnv.memory.globlProtoObj["ReadableStream"] = function ReadableStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReadableStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReadableStream"], "ReadableStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "locked", {
  configurable: true,
  enumerable: true,
  get: {
    locked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "locked_get", arguments);
    }
  }.locked,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "cancel", arguments);
    }
  }.cancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "getReader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getReader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "getReader", arguments);
    }
  }.getReader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "pipeThrough", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pipeThrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "pipeThrough", arguments);
    }
  }.pipeThrough
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "pipeTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pipeTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "pipeTo", arguments);
    }
  }.pipeTo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "tee", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    tee() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReadableStream"].prototype, "ReadableStream", "tee", arguments);
    }
  }.tee
});