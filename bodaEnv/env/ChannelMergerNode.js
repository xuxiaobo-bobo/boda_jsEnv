// ChannelMergerNode对象

bodaEnv.memory.globlProtoObj["ChannelMergerNode"] = function ChannelMergerNode() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ChannelMergerNode 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ChannelMergerNode"], "ChannelMergerNode");
bodaEnv.memory.globlProtoObj["ChannelMergerNode"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"].prototype;
bodaEnv.memory.globlProtoObj["ChannelMergerNode"].__proto__ = bodaEnv.memory.globlProtoObj["AudioNode"];