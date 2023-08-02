// CompressionStream对象

CompressionStream = function CompressionStream() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CompressionStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CompressionStream': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CompressionStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CompressionStream, "CompressionStream");
bodavm.toolsFunc.defineProperty(CompressionStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, CompressionStream.prototype, "CompressionStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CompressionStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, CompressionStream.prototype, "CompressionStream", "writable_get", arguments);
  },
  set: undefined
});