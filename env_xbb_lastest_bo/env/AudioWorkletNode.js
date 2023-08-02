// AudioWorkletNode对象

AudioWorkletNode = function AudioWorkletNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioWorkletNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioWorkletNode': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioWorkletNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioWorkletNode, "AudioWorkletNode");
AudioWorkletNode.prototype.__proto__ = AudioNode.prototype;
AudioWorkletNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "parameters", {
  configurable: true,
  enumerable: true,
  get: function parameters() {
    return bodavm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "parameters_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "port_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioWorkletNode.prototype, "onprocessorerror", {
  configurable: true,
  enumerable: true,
  get: function onprocessorerror() {
    return bodavm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "onprocessorerror_get", arguments);
  },
  set: function onprocessorerror() {
    return bodavm.toolsFunc.dispatch(this, AudioWorkletNode.prototype, "AudioWorkletNode", "onprocessorerror_set", arguments);
  }
});