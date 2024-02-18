// MediaElementAudioSourceNode对象

bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"] = function MediaElementAudioSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaElementAudioSourceNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"], "MediaElementAudioSourceNode");
bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"].prototype, "mediaElement", {
  configurable: true,
  enumerable: true,
  get: {
    mediaElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaElementAudioSourceNode"].prototype, "MediaElementAudioSourceNode", "mediaElement_get", arguments);
    }
  }.mediaElement,
  set: undefined
});