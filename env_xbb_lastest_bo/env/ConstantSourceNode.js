// ConstantSourceNode对象

ConstantSourceNode = function ConstantSourceNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ConstantSourceNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ConstantSourceNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ConstantSourceNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ConstantSourceNode, "ConstantSourceNode");
ConstantSourceNode.prototype.__proto__ = AudioScheduledSourceNode.prototype;
ConstantSourceNode.__proto__ = AudioScheduledSourceNode;
bodavm.toolsFunc.defineProperty(ConstantSourceNode.prototype, "offset", {
  configurable: true,
  enumerable: true,
  get: function offset() {
    return bodavm.toolsFunc.dispatch(this, ConstantSourceNode.prototype, "ConstantSourceNode", "offset_get", arguments);
  },
  set: undefined
});