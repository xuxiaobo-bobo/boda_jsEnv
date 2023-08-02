// MediaCapabilities对象

MediaCapabilities = function MediaCapabilities() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaCapabilities)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaCapabilities 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaCapabilities, "MediaCapabilities");
bodavm.toolsFunc.defineProperty(MediaCapabilities.prototype, "decodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decodingInfo() {
    return bodavm.toolsFunc.dispatch(this, MediaCapabilities.prototype, "MediaCapabilities", "decodingInfo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaCapabilities.prototype, "encodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encodingInfo() {
    return bodavm.toolsFunc.dispatch(this, MediaCapabilities.prototype, "MediaCapabilities", "encodingInfo", arguments);
  }
});