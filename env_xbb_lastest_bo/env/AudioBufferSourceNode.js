// AudioBufferSourceNode对象

AudioBufferSourceNode = function AudioBufferSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioBufferSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioBufferSourceNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioBufferSourceNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioBufferSourceNode, "AudioBufferSourceNode");
AudioBufferSourceNode.prototype.__proto__ = AudioScheduledSourceNode.prototype;
AudioBufferSourceNode.__proto__ = AudioScheduledSourceNode;
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "buffer", {
  configurable: true,
  enumerable: true,
  get: function buffer() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "buffer_get", arguments);
  },
  set: function buffer() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "buffer_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "playbackRate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "detune_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "loopStart", {
  configurable: true,
  enumerable: true,
  get: function loopStart() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loopStart_get", arguments);
  },
  set: function loopStart() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loopStart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "loopEnd", {
  configurable: true,
  enumerable: true,
  get: function loopEnd() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loopEnd_get", arguments);
  },
  set: function loopEnd() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "loopEnd_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBufferSourceNode.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, AudioBufferSourceNode.prototype, "AudioBufferSourceNode", "start", arguments);
  }
});