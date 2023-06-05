// AudioBufferSourceNode对象

bodavm.memory.globalobj['AudioBufferSourceNode'] = function AudioBufferSourceNode() {
  console.log_copy('AudioBufferSourceNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioBufferSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioBufferSourceNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioBufferSourceNode'], "AudioBufferSourceNode");
bodavm.memory.globalobj['AudioBufferSourceNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype;
bodavm.memory.globalobj['AudioBufferSourceNode'].__proto__ = bodavm.memory.globalobj['AudioScheduledSourceNode'];
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "buffer", {
  configurable: true,
  enumerable: true,
  get: function buffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "buffer_get", arguments);
  },
  set: function buffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "buffer_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "playbackRate", {
  configurable: true,
  enumerable: true,
  get: function playbackRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "playbackRate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "detune_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "loop", {
  configurable: true,
  enumerable: true,
  get: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loop_get", arguments);
  },
  set: function loop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "loopStart", {
  configurable: true,
  enumerable: true,
  get: function loopStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loopStart_get", arguments);
  },
  set: function loopStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loopStart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "loopEnd", {
  configurable: true,
  enumerable: true,
  get: function loopEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loopEnd_get", arguments);
  },
  set: function loopEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "loopEnd_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBufferSourceNode', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBufferSourceNode'].prototype, "AudioBufferSourceNode", "start", arguments);
  }
}, 'prototype');