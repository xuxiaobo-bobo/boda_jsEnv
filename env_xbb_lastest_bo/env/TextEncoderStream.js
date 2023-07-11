// TextEncoderStream对象

TextEncoderStream = function TextEncoderStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextEncoderStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextEncoderStream, "TextEncoderStream");
bodavm.toolsFunc.defineProperty(TextEncoderStream.prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "encoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextEncoderStream.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextEncoderStream.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, TextEncoderStream.prototype, "TextEncoderStream", "writable_get", arguments);
  },
  set: undefined
});