// RTCEncodedAudioFrame对象

bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"] = function RTCEncodedAudioFrame() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCEncodedAudioFrame 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"], "RTCEncodedAudioFrame");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "RTCEncodedAudioFrame", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "RTCEncodedAudioFrame", "data_get", arguments);
    }
  }.data,
  set: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "RTCEncodedAudioFrame", "data_set", arguments);
    }
  }.data
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "getMetadata", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getMetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "RTCEncodedAudioFrame", "getMetadata", arguments);
    }
  }.getMetadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCEncodedAudioFrame"].prototype, "RTCEncodedAudioFrame", "toString", arguments);
    }
  }.toString
});