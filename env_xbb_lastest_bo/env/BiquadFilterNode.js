// BiquadFilterNode对象

BiquadFilterNode = function BiquadFilterNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BiquadFilterNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BiquadFilterNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BiquadFilterNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BiquadFilterNode, "BiquadFilterNode");
BiquadFilterNode.prototype.__proto__ = AudioNode.prototype;
BiquadFilterNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "frequency", {
  configurable: true,
  enumerable: true,
  get: function frequency() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "frequency_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "detune", {
  configurable: true,
  enumerable: true,
  get: function detune() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "detune_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "Q", {
  configurable: true,
  enumerable: true,
  get: function Q() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "Q_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "gain", {
  configurable: true,
  enumerable: true,
  get: function gain() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "gain_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "getFrequencyResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFrequencyResponse() {
    return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "getFrequencyResponse", arguments);
  }
});