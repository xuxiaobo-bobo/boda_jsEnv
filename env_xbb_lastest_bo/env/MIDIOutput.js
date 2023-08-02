// MIDIOutput对象

MIDIOutput = function MIDIOutput() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIOutput)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIOutput 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIOutput, "MIDIOutput");
MIDIOutput.prototype.__proto__ = MIDIPort.prototype;
MIDIOutput.__proto__ = MIDIPort;
bodavm.toolsFunc.defineProperty(MIDIOutput.prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function send() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutput.prototype, "MIDIOutput", "send", arguments);
  }
});