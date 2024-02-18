// MediaStreamAudioDestinationNode对象

bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"] = function MediaStreamAudioDestinationNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamAudioDestinationNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"], "MediaStreamAudioDestinationNode");
bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"].prototype, "stream", {
  configurable: true,
  enumerable: true,
  get: {
    stream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamAudioDestinationNode"].prototype, "MediaStreamAudioDestinationNode", "stream_get", arguments);
    }
  }.stream,
  set: undefined
});