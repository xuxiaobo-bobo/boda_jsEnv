// AudioProcessingEvent对象

bodaEnv.memory.globlProtoObj["AudioProcessingEvent"] = function AudioProcessingEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioProcessingEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioProcessingEvent"], "AudioProcessingEvent");
bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "playbackTime", {
  configurable: true,
  enumerable: true,
  get: {
    playbackTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "AudioProcessingEvent", "playbackTime_get", arguments);
    }
  }.playbackTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "inputBuffer", {
  configurable: true,
  enumerable: true,
  get: {
    inputBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "AudioProcessingEvent", "inputBuffer_get", arguments);
    }
  }.inputBuffer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "outputBuffer", {
  configurable: true,
  enumerable: true,
  get: {
    outputBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioProcessingEvent"].prototype, "AudioProcessingEvent", "outputBuffer_get", arguments);
    }
  }.outputBuffer,
  set: undefined
});