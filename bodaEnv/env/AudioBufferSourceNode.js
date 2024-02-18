// AudioBufferSourceNode对象

bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"] = function AudioBufferSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioBufferSourceNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"], "AudioBufferSourceNode");
bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype;
bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "buffer", {
  configurable: true,
  enumerable: true,
  get: {
    buffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "buffer_get", arguments);
    }
  }.buffer,
  set: {
    buffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "buffer_set", arguments);
    }
  }.buffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: {
    playbackRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "playbackRate_get", arguments);
    }
  }.playbackRate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: {
    detune() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "detune_get", arguments);
    }
  }.detune,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loop_get", arguments);
    }
  }.loop,
  set: {
    loop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loop_set", arguments);
    }
  }.loop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "loopStart", {
  configurable: true,
  enumerable: true,
  get: {
    loopStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loopStart_get", arguments);
    }
  }.loopStart,
  set: {
    loopStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loopStart_set", arguments);
    }
  }.loopStart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "loopEnd", {
  configurable: true,
  enumerable: true,
  get: {
    loopEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loopEnd_get", arguments);
    }
  }.loopEnd,
  set: {
    loopEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "loopEnd_set", arguments);
    }
  }.loopEnd
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    start() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioBufferSourceNode"].prototype, "AudioBufferSourceNode", "start", arguments);
    }
  }.start
});