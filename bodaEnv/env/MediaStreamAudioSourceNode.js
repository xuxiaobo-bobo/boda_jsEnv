// MediaStreamAudioSourceNode对象

bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"] = function MediaStreamAudioSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaStreamAudioSourceNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"], "MediaStreamAudioSourceNode");
bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"].prototype, "mediaStream", {
  configurable: true,
  enumerable: true,
  get: {
    mediaStream() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaStreamAudioSourceNode"].prototype, "MediaStreamAudioSourceNode", "mediaStream_get", arguments);
    }
  }.mediaStream,
  set: undefined
});