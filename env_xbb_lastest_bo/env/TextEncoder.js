// TextEncoder对象

TextEncoder = function TextEncoder() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextEncoder, "TextEncoder");
bodavm.toolsFunc.defineProperty(TextEncoder.prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: function encoding() {
    return bodavm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextEncoder.prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TextEncoder.prototype, "encodeInto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encodeInto() {
    return bodavm.toolsFunc.dispatch(this, TextEncoder.prototype, "TextEncoder", "encodeInto", arguments);
  }
});