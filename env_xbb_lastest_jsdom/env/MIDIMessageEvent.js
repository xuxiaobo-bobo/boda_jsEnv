// MIDIMessageEvent对象

bodavm.memory.globalobj['MIDIMessageEvent'] = function MIDIMessageEvent() {
  console.log_copy('MIDIMessageEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIMessageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MIDIMessageEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIMessageEvent'], "MIDIMessageEvent");
bodavm.memory.globalobj['MIDIMessageEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MIDIMessageEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MIDIMessageEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIMessageEvent'].prototype, "MIDIMessageEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');