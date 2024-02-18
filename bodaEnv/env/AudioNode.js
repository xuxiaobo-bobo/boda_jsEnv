// AudioNode对象

bodaEnv.memory.globlProtoObj["AudioNode"] = function AudioNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioNode"], "AudioNode");
bodaEnv.memory.globlProtoObj["AudioNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["AudioNode"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "context", {
  configurable: true,
  enumerable: true,
  get: {
    context() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "context_get", arguments);
    }
  }.context,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "numberOfInputs", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfInputs() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "numberOfInputs_get", arguments);
    }
  }.numberOfInputs,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "numberOfOutputs", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfOutputs() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "numberOfOutputs_get", arguments);
    }
  }.numberOfOutputs,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "channelCount", {
  configurable: true,
  enumerable: true,
  get: {
    channelCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelCount_get", arguments);
    }
  }.channelCount,
  set: {
    channelCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelCount_set", arguments);
    }
  }.channelCount
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "channelCountMode", {
  configurable: true,
  enumerable: true,
  get: {
    channelCountMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelCountMode_get", arguments);
    }
  }.channelCountMode,
  set: {
    channelCountMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelCountMode_set", arguments);
    }
  }.channelCountMode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "channelInterpretation", {
  configurable: true,
  enumerable: true,
  get: {
    channelInterpretation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelInterpretation_get", arguments);
    }
  }.channelInterpretation,
  set: {
    channelInterpretation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "channelInterpretation_set", arguments);
    }
  }.channelInterpretation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "connect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    connect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "connect", arguments);
    }
  }.connect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioNode"].prototype, "AudioNode", "disconnect", arguments);
    }
  }.disconnect
});