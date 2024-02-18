// BaseAudioContext对象

bodaEnv.memory.globlProtoObj["BaseAudioContext"] = function BaseAudioContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BaseAudioContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BaseAudioContext"], "BaseAudioContext");
bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BaseAudioContext"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: {
    destination() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "destination_get", arguments);
    }
  }.destination,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: {
    currentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "currentTime_get", arguments);
    }
  }.currentTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: {
    sampleRate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "sampleRate_get", arguments);
    }
  }.sampleRate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "listener", {
  configurable: true,
  enumerable: true,
  get: {
    listener() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "listener_get", arguments);
    }
  }.listener,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "onstatechange_set", arguments);
    }
  }.onstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createAnalyser", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAnalyser() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createAnalyser", arguments);
    }
  }.createAnalyser
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createBiquadFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBiquadFilter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createBiquadFilter", arguments);
    }
  }.createBiquadFilter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createBuffer", arguments);
    }
  }.createBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createBufferSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBufferSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createBufferSource", arguments);
    }
  }.createBufferSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createChannelMerger", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createChannelMerger() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createChannelMerger", arguments);
    }
  }.createChannelMerger
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createChannelSplitter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createChannelSplitter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createChannelSplitter", arguments);
    }
  }.createChannelSplitter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createConstantSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createConstantSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createConstantSource", arguments);
    }
  }.createConstantSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createConvolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createConvolver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createConvolver", arguments);
    }
  }.createConvolver
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDelay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createDelay", arguments);
    }
  }.createDelay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createDynamicsCompressor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDynamicsCompressor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createDynamicsCompressor", arguments);
    }
  }.createDynamicsCompressor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createGain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createGain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createGain", arguments);
    }
  }.createGain
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createIIRFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createIIRFilter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createIIRFilter", arguments);
    }
  }.createIIRFilter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createOscillator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createOscillator() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createOscillator", arguments);
    }
  }.createOscillator
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createPanner() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createPanner", arguments);
    }
  }.createPanner
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createPeriodicWave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createPeriodicWave", arguments);
    }
  }.createPeriodicWave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createScriptProcessor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createScriptProcessor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createScriptProcessor", arguments);
    }
  }.createScriptProcessor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createStereoPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createStereoPanner() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createStereoPanner", arguments);
    }
  }.createStereoPanner
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "createWaveShaper", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createWaveShaper() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "createWaveShaper", arguments);
    }
  }.createWaveShaper
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "decodeAudioData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decodeAudioData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "decodeAudioData", arguments);
    }
  }.decodeAudioData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "audioWorklet", {
  configurable: true,
  enumerable: true,
  get: {
    audioWorklet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BaseAudioContext"].prototype, "BaseAudioContext", "audioWorklet_get", arguments);
    }
  }.audioWorklet,
  set: undefined
});