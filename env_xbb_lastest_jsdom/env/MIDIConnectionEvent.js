// MIDIConnectionEvent对象

bodavm.memory.globalobj['MIDIConnectionEvent'] = function MIDIConnectionEvent() {
  console.log_copy('MIDIConnectionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIConnectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIConnectionEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIConnectionEvent'], "MIDIConnectionEvent");
bodavm.memory.globalobj['MIDIConnectionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MIDIConnectionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MIDIConnectionEvent', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIConnectionEvent'].prototype, "MIDIConnectionEvent", "port_get", arguments);
  },
  set: undefined
}, 'prototype');