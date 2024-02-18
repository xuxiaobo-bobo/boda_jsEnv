// AnalyserNode对象

bodaEnv.memory.globlProtoObj["AnalyserNode"] = function AnalyserNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AnalyserNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AnalyserNode"], "AnalyserNode");
bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["AnalyserNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "fftSize", {
  configurable: true,
  enumerable: true,
  get: {
    fftSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "fftSize_get", arguments);
    }
  }.fftSize,
  set: {
    fftSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "fftSize_set", arguments);
    }
  }.fftSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "frequencyBinCount", {
  configurable: true,
  enumerable: true,
  get: {
    frequencyBinCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "frequencyBinCount_get", arguments);
    }
  }.frequencyBinCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "minDecibels", {
  configurable: true,
  enumerable: true,
  get: {
    minDecibels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "minDecibels_get", arguments);
    }
  }.minDecibels,
  set: {
    minDecibels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "minDecibels_set", arguments);
    }
  }.minDecibels
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "maxDecibels", {
  configurable: true,
  enumerable: true,
  get: {
    maxDecibels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "maxDecibels_get", arguments);
    }
  }.maxDecibels,
  set: {
    maxDecibels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "maxDecibels_set", arguments);
    }
  }.maxDecibels
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "smoothingTimeConstant", {
  configurable: true,
  enumerable: true,
  get: {
    smoothingTimeConstant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "smoothingTimeConstant_get", arguments);
    }
  }.smoothingTimeConstant,
  set: {
    smoothingTimeConstant() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "smoothingTimeConstant_set", arguments);
    }
  }.smoothingTimeConstant
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "getByteFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getByteFrequencyData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "getByteFrequencyData", arguments);
    }
  }.getByteFrequencyData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "getByteTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getByteTimeDomainData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "getByteTimeDomainData", arguments);
    }
  }.getByteTimeDomainData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "getFloatFrequencyData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFloatFrequencyData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "getFloatFrequencyData", arguments);
    }
  }.getFloatFrequencyData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "getFloatTimeDomainData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFloatTimeDomainData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AnalyserNode"].prototype, "AnalyserNode", "getFloatTimeDomainData", arguments);
    }
  }.getFloatTimeDomainData
});