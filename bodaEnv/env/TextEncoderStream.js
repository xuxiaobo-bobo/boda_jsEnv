// TextEncoderStream对象

bodaEnv.memory.globlProtoObj["TextEncoderStream"] = function TextEncoderStream() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextEncoderStream 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextEncoderStream"], "TextEncoderStream");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "TextEncoderStream", "encoding_get", arguments);
    }
  }.encoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "TextEncoderStream", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoderStream"].prototype, "TextEncoderStream", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});