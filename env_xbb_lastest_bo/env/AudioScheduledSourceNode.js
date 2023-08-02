// AudioScheduledSourceNode对象

AudioScheduledSourceNode = function AudioScheduledSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioScheduledSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioScheduledSourceNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioScheduledSourceNode, "AudioScheduledSourceNode");
AudioScheduledSourceNode.prototype.__proto__ = AudioNode.prototype;
AudioScheduledSourceNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "start", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioScheduledSourceNode.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, AudioScheduledSourceNode.prototype, "AudioScheduledSourceNode", "stop", arguments);
  }
});