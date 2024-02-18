// TextDecoderStream对象

bodaEnv.memory.globlProtoObj["TextDecoderStream"] = function TextDecoderStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextDecoderStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextDecoderStream"], "TextDecoderStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "TextDecoderStream", "encoding_get", arguments);
    }
  }.encoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "fatal", {
  configurable: true,
  enumerable: true,
  get: {
    fatal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "TextDecoderStream", "fatal_get", arguments);
    }
  }.fatal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: {
    ignoreBOM() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "TextDecoderStream", "ignoreBOM_get", arguments);
    }
  }.ignoreBOM,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "TextDecoderStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoderStream"].prototype, "TextDecoderStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});