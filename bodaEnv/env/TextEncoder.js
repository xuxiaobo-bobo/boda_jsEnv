// TextEncoder对象

bodaEnv.memory.globlProtoObj["TextEncoder"] = function TextEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TextEncoder 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
  bodaEnv.memory.WeakMap.set(this, new bodaTextEncoder(arg));
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TextEncoder"], "TextEncoder");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "encoding", {
  configurable: true,
  enumerable: true,
  get: {
    encoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "TextEncoder", "encoding_get", arguments);
    }
  }.encoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "TextEncoder", "encode", arguments);
    }
  }.encode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "encodeInto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encodeInto() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TextEncoder"].prototype, "TextEncoder", "encodeInto", arguments);
    }
  }.encodeInto
});