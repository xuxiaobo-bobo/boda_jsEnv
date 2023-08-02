// ReadableStreamBYOBReader对象

ReadableStreamBYOBReader = function ReadableStreamBYOBReader() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReadableStreamBYOBReader)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReadableStreamBYOBReader': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableStreamBYOBReader 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableStreamBYOBReader, "ReadableStreamBYOBReader");
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBReader.prototype, "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBReader.prototype, "ReadableStreamBYOBReader", "read", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBReader.prototype, "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBReader.prototype, "ReadableStreamBYOBReader", "releaseLock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBReader.prototype, "ReadableStreamBYOBReader", "closed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBReader.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBReader.prototype, "ReadableStreamBYOBReader", "cancel", arguments);
  }
});