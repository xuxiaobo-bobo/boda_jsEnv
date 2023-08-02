// OscillatorNode对象

OscillatorNode = function OscillatorNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OscillatorNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OscillatorNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OscillatorNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OscillatorNode, "OscillatorNode");
OscillatorNode.prototype.__proto__ = AudioScheduledSourceNode.prototype;
OscillatorNode.__proto__ = AudioScheduledSourceNode;
bodavm.toolsFunc.defineProperty(OscillatorNode.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(OscillatorNode.prototype, "frequency", {
  configurable: true,
  enumerable: true,
  get: function frequency() {
    return bodavm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "frequency_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(OscillatorNode.prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "detune_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(OscillatorNode.prototype, "setPeriodicWave", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPeriodicWave() {
    return bodavm.toolsFunc.dispatch(this, OscillatorNode.prototype, "OscillatorNode", "setPeriodicWave", arguments);
  }
});