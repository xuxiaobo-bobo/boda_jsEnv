// WritableStream对象

WritableStream = function WritableStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WritableStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WritableStream, "WritableStream");
bodavm.toolsFunc.defineProperty(WritableStream.prototype, "locked", {
  configurable: true,
  enumerable: true,
  get: function locked() {
    return bodavm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "locked_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WritableStream.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WritableStream.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WritableStream.prototype, "getWriter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getWriter() {
    return bodavm.toolsFunc.dispatch(this, WritableStream.prototype, "WritableStream", "getWriter", arguments);
  }
});