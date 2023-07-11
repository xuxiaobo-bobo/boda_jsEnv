// TextDecoder对象

TextDecoder = function TextDecoder() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextDecoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextDecoder, "TextDecoder");
bodavm.toolsFunc.defineProperty(TextDecoder.prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "encoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoder.prototype, "fatal", {
  configurable: true,
  enumerable: true,
  get: function fatal() {
    return bodavm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "fatal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoder.prototype, "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: function ignoreBOM() {
    return bodavm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "ignoreBOM_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoder.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, TextDecoder.prototype, "TextDecoder", "decode", arguments);
  }
});