// AnalyserNode对象

AnalyserNode = function AnalyserNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AnalyserNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnalyserNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AnalyserNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AnalyserNode, "AnalyserNode");
AnalyserNode.prototype.__proto__ = AudioNode.prototype;
AnalyserNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "fftSize", {
  configurable: true,
  enumerable: true,
  get: function fftSize() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "fftSize_get", arguments);
  },
  set: function fftSize() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "fftSize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "frequencyBinCount", {
  configurable: true,
  enumerable: true,
  get: function frequencyBinCount() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "frequencyBinCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "minDecibels", {
  configurable: true,
  enumerable: true,
  get: function minDecibels() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "minDecibels_get", arguments);
  },
  set: function minDecibels() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "minDecibels_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "maxDecibels", {
  configurable: true,
  enumerable: true,
  get: function maxDecibels() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "maxDecibels_get", arguments);
  },
  set: function maxDecibels() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "maxDecibels_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "smoothingTimeConstant", {
  configurable: true,
  enumerable: true,
  get: function smoothingTimeConstant() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "smoothingTimeConstant_get", arguments);
  },
  set: function smoothingTimeConstant() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "smoothingTimeConstant_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "getByteFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getByteFrequencyData() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "getByteFrequencyData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "getByteTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getByteTimeDomainData() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "getByteTimeDomainData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "getFloatFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFloatFrequencyData() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "getFloatFrequencyData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnalyserNode.prototype, "getFloatTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFloatTimeDomainData() {
    return bodavm.toolsFunc.dispatch(this, AnalyserNode.prototype, "AnalyserNode", "getFloatTimeDomainData", arguments);
  }
});