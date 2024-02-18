// AudioBuffer对象

bodaEnv.memory.globlProtoObj["AudioBuffer"] = function AudioBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioBuffer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioBuffer"], "AudioBuffer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: {
    sampleRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "sampleRate_get", arguments);
    }
  }.sampleRate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfChannels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "numberOfChannels_get", arguments);
    }
  }.numberOfChannels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "copyFromChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyFromChannel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "copyFromChannel", arguments);
    }
  }.copyFromChannel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "copyToChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyToChannel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "copyToChannel", arguments);
    }
  }.copyToChannel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "getChannelData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getChannelData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBuffer"].prototype, "AudioBuffer", "getChannelData", arguments);
    }
  }.getChannelData
});