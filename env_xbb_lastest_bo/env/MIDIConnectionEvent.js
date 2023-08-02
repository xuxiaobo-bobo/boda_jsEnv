// MIDIConnectionEvent对象

MIDIConnectionEvent = function MIDIConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIConnectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIConnectionEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIConnectionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIConnectionEvent, "MIDIConnectionEvent");
MIDIConnectionEvent.prototype.__proto__ = Event.prototype;
MIDIConnectionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MIDIConnectionEvent.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, MIDIConnectionEvent.prototype, "MIDIConnectionEvent", "port_get", arguments);
  },
  set: undefined
});