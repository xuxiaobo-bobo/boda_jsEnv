// WaveShaperNode对象

WaveShaperNode = function WaveShaperNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WaveShaperNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WaveShaperNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WaveShaperNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WaveShaperNode, "WaveShaperNode");
WaveShaperNode.prototype.__proto__ = AudioNode.prototype;
WaveShaperNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(WaveShaperNode.prototype, "curve", {
  configurable: true,
  enumerable: true,
  get: function curve() {
    return bodavm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "curve_get", arguments);
  },
  set: function curve() {
    return bodavm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "curve_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WaveShaperNode.prototype, "oversample", {
  configurable: true,
  enumerable: true,
  get: function oversample() {
    return bodavm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "oversample_get", arguments);
  },
  set: function oversample() {
    return bodavm.toolsFunc.dispatch(this, WaveShaperNode.prototype, "WaveShaperNode", "oversample_set", arguments);
  }
});