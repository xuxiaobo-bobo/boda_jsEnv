// AudioDestinationNode对象

bodaEnv.memory.globlProtoObj["AudioDestinationNode"] = function AudioDestinationNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioDestinationNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioDestinationNode"], "AudioDestinationNode");
bodaEnv.memory.globlProtoObj["AudioDestinationNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["AudioDestinationNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AudioDestinationNode"].prototype, "maxChannelCount", {
  configurable: true,
  enumerable: true,
  get: {
    maxChannelCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AudioDestinationNode"].prototype, "AudioDestinationNode", "maxChannelCount_get", arguments);
    }
  }.maxChannelCount,
  set: undefined
});