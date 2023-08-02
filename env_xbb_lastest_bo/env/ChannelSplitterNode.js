// ChannelSplitterNode对象

ChannelSplitterNode = function ChannelSplitterNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ChannelSplitterNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ChannelSplitterNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ChannelSplitterNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ChannelSplitterNode, "ChannelSplitterNode");
ChannelSplitterNode.prototype.__proto__ = AudioNode.prototype;
ChannelSplitterNode.__proto__ = AudioNode;