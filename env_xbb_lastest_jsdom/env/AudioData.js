// AudioData对象

bodavm.memory.globalobj['AudioData'] = function AudioData() {
  console.log_copy('AudioData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioData': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioData'], "AudioData");
bodavm.toolsFunc.defineProperty('AudioData', "format", {
  configurable: true,
  enumerable: true,
  get: function format() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "format_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "sampleRate_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "numberOfFrames", {
  configurable: true,
  enumerable: true,
  get: function numberOfFrames() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "numberOfFrames_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: function numberOfChannels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "numberOfChannels_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allocationSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "allocationSize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "clone", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioData', "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioData'].prototype, "AudioData", "copyTo", arguments);
  }
}, 'prototype');