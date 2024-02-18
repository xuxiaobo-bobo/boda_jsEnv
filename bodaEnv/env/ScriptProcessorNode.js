// ScriptProcessorNode对象

bodaEnv.memory.globlProtoObj["ScriptProcessorNode"] = function ScriptProcessorNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ScriptProcessorNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ScriptProcessorNode"], "ScriptProcessorNode");
bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype, "onaudioprocess", {
  configurable: true,
  enumerable: true,
  get: {
    onaudioprocess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype, "ScriptProcessorNode", "onaudioprocess_get", arguments);
    }
  }.onaudioprocess,
  set: {
    onaudioprocess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype, "ScriptProcessorNode", "onaudioprocess_set", arguments);
    }
  }.onaudioprocess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype, "bufferSize", {
  configurable: true,
  enumerable: true,
  get: {
    bufferSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ScriptProcessorNode"].prototype, "ScriptProcessorNode", "bufferSize_get", arguments);
    }
  }.bufferSize,
  set: undefined
});