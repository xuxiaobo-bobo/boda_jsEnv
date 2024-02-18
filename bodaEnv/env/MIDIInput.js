// MIDIInput对象

bodaEnv.memory.globlProtoObj["MIDIInput"] = function MIDIInput() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIInput 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIInput"], "MIDIInput");
bodaEnv.memory.globlProtoObj["MIDIInput"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MIDIPort"].prototype;
bodaEnv.memory.globlProtoObj["MIDIInput"].__proto__ = bodaEnv.memory.globlProtoObj["MIDIPort"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInput"].prototype, "onmidimessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmidimessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInput"].prototype, "MIDIInput", "onmidimessage_get", arguments);
    }
  }.onmidimessage,
  set: {
    onmidimessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInput"].prototype, "MIDIInput", "onmidimessage_set", arguments);
    }
  }.onmidimessage
});