// DelayNode对象

DelayNode = function DelayNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DelayNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DelayNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DelayNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DelayNode, "DelayNode");
DelayNode.prototype.__proto__ = AudioNode.prototype;
DelayNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(DelayNode.prototype, "delayTime", {
  configurable: true,
  enumerable: true,
  get: function delayTime() {
    return bodavm.toolsFunc.dispatch(this, DelayNode.prototype, "DelayNode", "delayTime_get", arguments);
  },
  set: undefined
});