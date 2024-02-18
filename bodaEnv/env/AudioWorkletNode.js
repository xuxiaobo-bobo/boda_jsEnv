// AudioWorkletNode对象

bodaEnv.memory.globlProtoObj["AudioWorkletNode"] = function AudioWorkletNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioWorkletNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioWorkletNode"], "AudioWorkletNode");
bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["AudioWorkletNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "parameters", {
  configurable: true,
  enumerable: true,
  get: {
    parameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "AudioWorkletNode", "parameters_get", arguments);
    }
  }.parameters,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "AudioWorkletNode", "port_get", arguments);
    }
  }.port,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "onprocessorerror", {
  configurable: true,
  enumerable: true,
  get: {
    onprocessorerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "AudioWorkletNode", "onprocessorerror_get", arguments);
    }
  }.onprocessorerror,
  set: {
    onprocessorerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioWorkletNode"].prototype, "AudioWorkletNode", "onprocessorerror_set", arguments);
    }
  }.onprocessorerror
});