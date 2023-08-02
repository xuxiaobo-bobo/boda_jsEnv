// GainNode对象

GainNode = function GainNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GainNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GainNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GainNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GainNode, "GainNode");
GainNode.prototype.__proto__ = AudioNode.prototype;
GainNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(GainNode.prototype, "gain", {
  configurable: true,
  enumerable: true,
  get: function gain() {
    return bodavm.toolsFunc.dispatch(this, GainNode.prototype, "GainNode", "gain_get", arguments);
  },
  set: undefined
});