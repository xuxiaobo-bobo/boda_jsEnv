// ReadableStreamDefaultReader对象

ReadableStreamDefaultReader = function ReadableStreamDefaultReader() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReadableStreamDefaultReader)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReadableStreamDefaultReader': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableStreamDefaultReader 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableStreamDefaultReader, "ReadableStreamDefaultReader");
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultReader.prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultReader.prototype, "ReadableStreamDefaultReader", "read", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultReader.prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultReader.prototype, "ReadableStreamDefaultReader", "releaseLock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultReader.prototype, "ReadableStreamDefaultReader", "closed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultReader.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultReader.prototype, "ReadableStreamDefaultReader", "cancel", arguments);
  }
});