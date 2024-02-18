// MIDIConnectionEvent对象

bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"] = function MIDIConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIConnectionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"], "MIDIConnectionEvent");
bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIConnectionEvent"].prototype, "MIDIConnectionEvent", "port_get", arguments);
    }
  }.port,
  set: undefined
});