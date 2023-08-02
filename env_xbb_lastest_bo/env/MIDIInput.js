// MIDIInput对象

MIDIInput = function MIDIInput() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIInput)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIInput 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIInput, "MIDIInput");
MIDIInput.prototype.__proto__ = MIDIPort.prototype;
MIDIInput.__proto__ = MIDIPort;
bodavm.toolsFunc.defineProperty(MIDIInput.prototype, "onmidimessage", {
  configurable: true,
  enumerable: true,
  get: function onmidimessage() {
    return bodavm.toolsFunc.dispatch(this, MIDIInput.prototype, "MIDIInput", "onmidimessage_get", arguments);
  },
  set: function onmidimessage() {
    return bodavm.toolsFunc.dispatch(this, MIDIInput.prototype, "MIDIInput", "onmidimessage_set", arguments);
  }
});