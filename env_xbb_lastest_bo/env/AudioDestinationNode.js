// AudioDestinationNode对象

AudioDestinationNode = function AudioDestinationNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioDestinationNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioDestinationNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioDestinationNode, "AudioDestinationNode");
AudioDestinationNode.prototype.__proto__ = AudioNode.prototype;
AudioDestinationNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(AudioDestinationNode.prototype, "maxChannelCount", {
  configurable: true,
  enumerable: true,
  get: function maxChannelCount() {
    return bodavm.toolsFunc.dispatch(this, AudioDestinationNode.prototype, "AudioDestinationNode", "maxChannelCount_get", arguments);
  },
  set: undefined
});