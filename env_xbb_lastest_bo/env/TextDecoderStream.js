// TextDecoderStream对象

TextDecoderStream = function TextDecoderStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextDecoderStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextDecoderStream, "TextDecoderStream");
bodavm.toolsFunc.defineProperty(TextDecoderStream.prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, TextDecoderStream.prototype, "TextDecoderStream", "encoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoderStream.prototype, "fatal", {
  configurable: true,
  enumerable: true,
  get: function fatal() {
    return bodavm.toolsFunc.dispatch(this, TextDecoderStream.prototype, "TextDecoderStream", "fatal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoderStream.prototype, "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: function ignoreBOM() {
    return bodavm.toolsFunc.dispatch(this, TextDecoderStream.prototype, "TextDecoderStream", "ignoreBOM_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoderStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, TextDecoderStream.prototype, "TextDecoderStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextDecoderStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, TextDecoderStream.prototype, "TextDecoderStream", "writable_get", arguments);
  },
  set: undefined
});