// MIDIMessageEvent对象

MIDIMessageEvent = function MIDIMessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIMessageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIMessageEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIMessageEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIMessageEvent, "MIDIMessageEvent");
MIDIMessageEvent.prototype.__proto__ = Event.prototype;
MIDIMessageEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MIDIMessageEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, MIDIMessageEvent.prototype, "MIDIMessageEvent", "data_get", arguments);
  },
  set: undefined
});