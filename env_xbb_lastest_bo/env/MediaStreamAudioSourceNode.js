// MediaStreamAudioSourceNode对象

MediaStreamAudioSourceNode = function MediaStreamAudioSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamAudioSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioSourceNode': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamAudioSourceNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamAudioSourceNode, "MediaStreamAudioSourceNode");
MediaStreamAudioSourceNode.prototype.__proto__ = AudioNode.prototype;
MediaStreamAudioSourceNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(MediaStreamAudioSourceNode.prototype, "mediaStream", {
  configurable: true,
  enumerable: true,
  get: function mediaStream() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamAudioSourceNode.prototype, "MediaStreamAudioSourceNode", "mediaStream_get", arguments);
  },
  set: undefined
});