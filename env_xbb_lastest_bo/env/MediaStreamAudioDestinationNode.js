// MediaStreamAudioDestinationNode对象

MediaStreamAudioDestinationNode = function MediaStreamAudioDestinationNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamAudioDestinationNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamAudioDestinationNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamAudioDestinationNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamAudioDestinationNode, "MediaStreamAudioDestinationNode");
MediaStreamAudioDestinationNode.prototype.__proto__ = AudioNode.prototype;
MediaStreamAudioDestinationNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(MediaStreamAudioDestinationNode.prototype, "stream", {
  configurable: true,
  enumerable: true,
  get: function stream() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamAudioDestinationNode.prototype, "MediaStreamAudioDestinationNode", "stream_get", arguments);
  },
  set: undefined
});