// ScriptProcessorNode对象

ScriptProcessorNode = function ScriptProcessorNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ScriptProcessorNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ScriptProcessorNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ScriptProcessorNode, "ScriptProcessorNode");
ScriptProcessorNode.prototype.__proto__ = AudioNode.prototype;
ScriptProcessorNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(ScriptProcessorNode.prototype, "onaudioprocess", {
  configurable: true,
  enumerable: true,
  get: function onaudioprocess() {
    return bodavm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "onaudioprocess_get", arguments);
  },
  set: function onaudioprocess() {
    return bodavm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "onaudioprocess_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ScriptProcessorNode.prototype, "bufferSize", {
  configurable: true,
  enumerable: true,
  get: function bufferSize() {
    return bodavm.toolsFunc.dispatch(this, ScriptProcessorNode.prototype, "ScriptProcessorNode", "bufferSize_get", arguments);
  },
  set: undefined
});