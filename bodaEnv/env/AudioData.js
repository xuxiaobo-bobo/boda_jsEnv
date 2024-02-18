// AudioData对象

bodaEnv.memory.globlProtoObj["AudioData"] = function AudioData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioData"], "AudioData");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "format", {
  configurable: true,
  enumerable: true,
  get: {
    format() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "format_get", arguments);
    }
  }.format,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: {
    sampleRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "sampleRate_get", arguments);
    }
  }.sampleRate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "numberOfFrames", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfFrames() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "numberOfFrames_get", arguments);
    }
  }.numberOfFrames,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfChannels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "numberOfChannels_get", arguments);
    }
  }.numberOfChannels,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: {
    timestamp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "timestamp_get", arguments);
    }
  }.timestamp,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    allocationSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "allocationSize", arguments);
    }
  }.allocationSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "clone", arguments);
    }
  }.clone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioData"].prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioData"].prototype, "AudioData", "copyTo", arguments);
    }
  }.copyTo
});