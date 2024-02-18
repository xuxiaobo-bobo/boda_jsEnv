// EncodedVideoChunk对象

bodaEnv.memory.globlProtoObj["EncodedVideoChunk"] = function EncodedVideoChunk() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('EncodedVideoChunk 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"], "EncodedVideoChunk");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "EncodedVideoChunk", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "EncodedVideoChunk", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "EncodedVideoChunk", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "byteLength", {
  configurable: true,
  enumerable: true,
  get: {
    byteLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "EncodedVideoChunk", "byteLength_get", arguments);
    }
  }.byteLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedVideoChunk"].prototype, "EncodedVideoChunk", "copyTo", arguments);
    }
  }.copyTo
});