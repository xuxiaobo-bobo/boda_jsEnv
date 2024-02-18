// WritableStreamDefaultWriter对象

bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"] = function WritableStreamDefaultWriter() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WritableStreamDefaultWriter 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"], "WritableStreamDefaultWriter");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: {
    closed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "closed_get", arguments);
    }
  }.closed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: {
    desiredSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "desiredSize_get", arguments);
    }
  }.desiredSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "releaseLock", arguments);
    }
  }.releaseLock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    write() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WritableStreamDefaultWriter"].prototype, "WritableStreamDefaultWriter", "write", arguments);
    }
  }.write
});