// ChannelSplitterNode对象

bodavm.memory.globalobj['ChannelSplitterNode'] = function ChannelSplitterNode() {
  console.log_copy('ChannelSplitterNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ChannelSplitterNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ChannelSplitterNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ChannelSplitterNode'], "ChannelSplitterNode");
bodavm.memory.globalobj['ChannelSplitterNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['ChannelSplitterNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];