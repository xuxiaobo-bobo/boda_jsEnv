// OscillatorNode对象

bodaEnv.memory.globlProtoObj["OscillatorNode"] = function OscillatorNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OscillatorNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OscillatorNode"], "OscillatorNode");
bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"].prototype;
bodaEnv.memory.globlProtoObj["OscillatorNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioScheduledSourceNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "OscillatorNode", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "OscillatorNode", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "frequency", {
  configurable: true,
  enumerable: true,
  get: {
    frequency() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "OscillatorNode", "frequency_get", arguments);
    }
  }.frequency,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: {
    detune() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "OscillatorNode", "detune_get", arguments);
    }
  }.detune,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "setPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPeriodicWave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OscillatorNode"].prototype, "OscillatorNode", "setPeriodicWave", arguments);
    }
  }.setPeriodicWave
});