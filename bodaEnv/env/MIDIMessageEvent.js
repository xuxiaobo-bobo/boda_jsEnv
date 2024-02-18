// MIDIMessageEvent对象

bodaEnv.memory.globlProtoObj["MIDIMessageEvent"] = function MIDIMessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIMessageEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIMessageEvent"], "MIDIMessageEvent");
bodaEnv.memory.globlProtoObj["MIDIMessageEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MIDIMessageEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIMessageEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIMessageEvent"].prototype, "MIDIMessageEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});