// IIRFilterNode对象

IIRFilterNode = function IIRFilterNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IIRFilterNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IIRFilterNode': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IIRFilterNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IIRFilterNode, "IIRFilterNode");
IIRFilterNode.prototype.__proto__ = AudioNode.prototype;
IIRFilterNode.__proto__ = AudioNode;
bodavm.toolsFunc.defineProperty(IIRFilterNode.prototype, "getFrequencyResponse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFrequencyResponse() {
    return bodavm.toolsFunc.dispatch(this, IIRFilterNode.prototype, "IIRFilterNode", "getFrequencyResponse", arguments);
  }
});