// ReadableStream对象

ReadableStream = function ReadableStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableStream, "ReadableStream");
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "locked", {
  configurable: true,
  enumerable: true,
  get: function locked() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "locked_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "cancel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "getReader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReader() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "getReader", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "pipeThrough", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pipeThrough() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "pipeThrough", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "pipeTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pipeTo() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "pipeTo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStream.prototype, "tee", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function tee() {
    return bodavm.toolsFunc.dispatch(this, ReadableStream.prototype, "ReadableStream", "tee", arguments);
  }
});