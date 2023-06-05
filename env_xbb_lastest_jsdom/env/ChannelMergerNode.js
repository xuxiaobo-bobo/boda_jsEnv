// ChannelMergerNode对象

bodavm.memory.globalobj['ChannelMergerNode'] = function ChannelMergerNode() {
  console.log_copy('ChannelMergerNode 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ChannelMergerNode)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ChannelMergerNode': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ChannelMergerNode'], "ChannelMergerNode");
bodavm.memory.globalobj['ChannelMergerNode'].prototype.__proto__ = bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['ChannelMergerNode'].__proto__ = bodavm.memory.globalobj['AudioNode'];