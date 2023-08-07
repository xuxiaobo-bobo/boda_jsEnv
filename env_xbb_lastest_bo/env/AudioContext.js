// AudioContext对象

AudioContext = function AudioContext() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  arg = arguments[0];
  if (arg != 'bobo') {
    console.log_copy('AudioContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioContext, "AudioContext");
AudioContext.prototype.__proto__ = BaseAudioContext.prototype;
AudioContext.__proto__ = BaseAudioContext;
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "baseLatency", {
  configurable: true,
  enumerable: true,
  get: function baseLatency() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "baseLatency_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "outputLatency", {
  configurable: true,
  enumerable: true,
  get: function outputLatency() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "outputLatency_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "createMediaElementSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaElementSource() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "createMediaElementSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "createMediaStreamDestination", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaStreamDestination() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "createMediaStreamDestination", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "createMediaStreamSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaStreamSource() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "createMediaStreamSource", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "getOutputTimestamp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getOutputTimestamp() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "getOutputTimestamp", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resume() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "resume", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "suspend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function suspend() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "suspend", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "sinkId", {
  configurable: true,
  enumerable: true,
  get: function sinkId() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "sinkId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "onsinkchange", {
  configurable: true,
  enumerable: true,
  get: function onsinkchange() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "onsinkchange_get", arguments);
  },
  set: function onsinkchange() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "onsinkchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioContext.prototype, "setSinkId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSinkId() {
    return bodavm.toolsFunc.dispatch(this, AudioContext.prototype, "AudioContext", "setSinkId", arguments);
  }
});