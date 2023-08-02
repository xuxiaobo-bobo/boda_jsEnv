// MediaElementAudioSourceNode对象

MediaElementAudioSourceNode = function MediaElementAudioSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaElementAudioSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaElementAudioSourceNode': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaElementAudioSourceNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaElementAudioSourceNode, "MediaElementAudioSourceNode");
MediaElementAudioSourceNode.prototype.__proto__ = AudioNode.prototype;
MediaElementAudioSourceNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(MediaElementAudioSourceNode.prototype, "mediaElement", {
  configurable: true,
  enumerable: true,
  get: function mediaElement() {
    return bodavm.toolsFunc.dispatch(this, MediaElementAudioSourceNode.prototype, "MediaElementAudioSourceNode", "mediaElement_get", arguments);
  },
  set: undefined
});