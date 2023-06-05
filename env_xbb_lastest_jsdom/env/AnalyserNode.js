// AnalyserNode对象

bodavm.memory.globalobj['AnalyserNode'] = function AnalyserNode() {
  console.log_copy('AnalyserNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AnalyserNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnalyserNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AnalyserNode'], "AnalyserNode");
bodavm.memory.globalobj['AnalyserNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['AnalyserNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('AnalyserNode', "fftSize", {
  configurable: true,
  enumerable: true,
  get: function fftSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "fftSize_get", arguments);
  },
  set: function fftSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "fftSize_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "frequencyBinCount", {
  configurable: true,
  enumerable: true,
  get: function frequencyBinCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "frequencyBinCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "minDecibels", {
  configurable: true,
  enumerable: true,
  get: function minDecibels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "minDecibels_get", arguments);
  },
  set: function minDecibels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "minDecibels_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "maxDecibels", {
  configurable: true,
  enumerable: true,
  get: function maxDecibels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "maxDecibels_get", arguments);
  },
  set: function maxDecibels() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "maxDecibels_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "smoothingTimeConstant", {
  configurable: true,
  enumerable: true,
  get: function smoothingTimeConstant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "smoothingTimeConstant_get", arguments);
  },
  set: function smoothingTimeConstant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "smoothingTimeConstant_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "getByteFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getByteFrequencyData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "getByteFrequencyData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "getByteTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getByteTimeDomainData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "getByteTimeDomainData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "getFloatFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFloatFrequencyData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "getFloatFrequencyData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnalyserNode', "getFloatTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFloatTimeDomainData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnalyserNode'].prototype, "AnalyserNode", "getFloatTimeDomainData", arguments);
  }
}, 'prototype');