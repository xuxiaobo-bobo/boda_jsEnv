// WritableStreamDefaultWriter对象

WritableStreamDefaultWriter = function WritableStreamDefaultWriter() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WritableStreamDefaultWriter)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WritableStreamDefaultWriter': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WritableStreamDefaultWriter 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WritableStreamDefaultWriter, "WritableStreamDefaultWriter");
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "closed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "desiredSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "ready_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "releaseLock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultWriter.prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultWriter.prototype, "WritableStreamDefaultWriter", "write", arguments);
  }
});