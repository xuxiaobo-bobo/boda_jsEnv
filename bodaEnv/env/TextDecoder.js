// TextDecoder对象

bodaEnv.memory.globlProtoObj["TextDecoder"] = function TextDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextDecoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextDecoder"], "TextDecoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "TextDecoder", "encoding_get", arguments);
    }
  }.encoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "fatal", {
  configurable: true,
  enumerable: true,
  get: {
    fatal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "TextDecoder", "fatal_get", arguments);
    }
  }.fatal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "ignoreBOM", {
  configurable: true,
  enumerable: true,
  get: {
    ignoreBOM() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "TextDecoder", "ignoreBOM_get", arguments);
    }
  }.ignoreBOM,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextDecoder"].prototype, "TextDecoder", "decode", arguments);
    }
  }.decode
});