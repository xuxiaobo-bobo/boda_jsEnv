// MIDIOutput对象

bodaEnv.memory.globlProtoObj["MIDIOutput"] = function MIDIOutput() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIOutput 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIOutput"], "MIDIOutput");
bodaEnv.memory.globlProtoObj["MIDIOutput"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MIDIPort"].prototype;
bodaEnv.memory.globlProtoObj["MIDIOutput"].__proto__ = bodaEnv.memory.globlProtoObj["MIDIPort"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutput"].prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    send() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutput"].prototype, "MIDIOutput", "send", arguments);
    }
  }.send
});