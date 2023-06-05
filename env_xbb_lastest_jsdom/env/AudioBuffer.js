// AudioBuffer对象

bodavm.memory.globalobj['AudioBuffer'] = function AudioBuffer() {
  console.log_copy('AudioBuffer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioBuffer': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioBuffer'], "AudioBuffer");
bodavm.toolsFunc.defineProperty('AudioBuffer', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "sampleRate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: function numberOfChannels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "numberOfChannels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "copyFromChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyFromChannel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "copyFromChannel", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "copyToChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyToChannel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "copyToChannel", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioBuffer', "getChannelData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getChannelData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioBuffer'].prototype, "AudioBuffer", "getChannelData", arguments);
  }
}, 'prototype');