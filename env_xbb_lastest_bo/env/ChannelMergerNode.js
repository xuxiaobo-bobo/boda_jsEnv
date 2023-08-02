// ChannelMergerNode对象

ChannelMergerNode = function ChannelMergerNode() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ChannelMergerNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ChannelMergerNode': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ChannelMergerNode 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ChannelMergerNode, "ChannelMergerNode");
ChannelMergerNode.prototype.__proto__ = AudioNode.prototype;
ChannelMergerNode.__proto__ = AudioNode;