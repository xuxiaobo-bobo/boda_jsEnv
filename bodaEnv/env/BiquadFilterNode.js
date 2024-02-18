// BiquadFilterNode对象

bodaEnv.memory.globlProtoObj["BiquadFilterNode"] = function BiquadFilterNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BiquadFilterNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BiquadFilterNode"], "BiquadFilterNode");
bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["BiquadFilterNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "frequency", {
  configurable: true,
  enumerable: true,
  get: {
    frequency() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "frequency_get", arguments);
    }
  }.frequency,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: {
    detune() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "detune_get", arguments);
    }
  }.detune,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "Q", {
  configurable: true,
  enumerable: true,
  get: {
    Q() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "Q_get", arguments);
    }
  }.Q,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "gain", {
  configurable: true,
  enumerable: true,
  get: {
    gain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "gain_get", arguments);
    }
  }.gain,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "getFrequencyResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFrequencyResponse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BiquadFilterNode"].prototype, "BiquadFilterNode", "getFrequencyResponse", arguments);
    }
  }.getFrequencyResponse
});