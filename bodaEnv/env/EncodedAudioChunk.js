// EncodedAudioChunk对象

bodaEnv.memory.globlProtoObj["EncodedAudioChunk"] = function EncodedAudioChunk() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('EncodedAudioChunk 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"], "EncodedAudioChunk");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "EncodedAudioChunk", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "EncodedAudioChunk", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "byteLength", {
  configurable: true,
  enumerable: true,
  get: {
    byteLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "EncodedAudioChunk", "byteLength_get", arguments);
    }
  }.byteLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "EncodedAudioChunk", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["EncodedAudioChunk"].prototype, "EncodedAudioChunk", "copyTo", arguments);
    }
  }.copyTo
});