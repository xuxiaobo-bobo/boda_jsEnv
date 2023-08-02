// DecompressionStream对象

DecompressionStream = function DecompressionStream() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DecompressionStream)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DecompressionStream': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DecompressionStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DecompressionStream, "DecompressionStream");
bodavm.toolsFunc.defineProperty(DecompressionStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, DecompressionStream.prototype, "DecompressionStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DecompressionStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, DecompressionStream.prototype, "DecompressionStream", "writable_get", arguments);
  },
  set: undefined
});