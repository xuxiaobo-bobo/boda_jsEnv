// BaseAudioContext对象

BaseAudioContext = function BaseAudioContext() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BaseAudioContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BaseAudioContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BaseAudioContext, "BaseAudioContext");
BaseAudioContext.prototype.__proto__ = EventTarget.prototype;
BaseAudioContext.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: function destination() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "destination_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "currentTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "sampleRate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "listener", {
  configurable: true,
  enumerable: true,
  get: function listener() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "listener_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "onstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createAnalyser", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnalyser() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createAnalyser", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBiquadFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBiquadFilter() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBiquadFilter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBuffer() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createBufferSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createBufferSource() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createBufferSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelMerger", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createChannelMerger() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createChannelMerger", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createChannelSplitter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createChannelSplitter() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createChannelSplitter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConstantSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConstantSource() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createConstantSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createConvolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createConvolver() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createConvolver", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDelay", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDelay() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createDelay", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createDynamicsCompressor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDynamicsCompressor() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createDynamicsCompressor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createGain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createGain() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createGain", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createIIRFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createIIRFilter() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createIIRFilter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createOscillator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createOscillator() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createOscillator", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPanner() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createPanner", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createPeriodicWave() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createPeriodicWave", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createScriptProcessor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createScriptProcessor() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createScriptProcessor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createStereoPanner", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createStereoPanner() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createStereoPanner", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "createWaveShaper", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createWaveShaper() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "createWaveShaper", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "decodeAudioData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decodeAudioData() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "decodeAudioData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BaseAudioContext.prototype, "audioWorklet", {
  configurable: true,
  enumerable: true,
  get: function audioWorklet() {
    return bodavm.toolsFunc.dispatch(this, BaseAudioContext.prototype, "BaseAudioContext", "audioWorklet_get", arguments);
  },
  set: undefined
});