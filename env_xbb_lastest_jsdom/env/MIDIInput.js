// MIDIInput对象

bodavm.memory.globalobj['MIDIInput'] = function MIDIInput() {
  console.log_copy('MIDIInput 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIInput)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIInput'], "MIDIInput");
bodavm.memory.globalobj['MIDIInput'].prototype.__proto__ = bodavm.memory.globalobj['MIDIPort'].prototype;
bodavm.memory.globalobj['MIDIInput'].__proto__ = bodavm.memory.globalobj['MIDIPort'];
bodavm.toolsFunc.defineProperty('MIDIInput', "onmidimessage", {
  configurable: true,
  enumerable: true,
  get: function onmidimessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInput'].prototype, "MIDIInput", "onmidimessage_get", arguments);
  },
  set: function onmidimessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInput'].prototype, "MIDIInput", "onmidimessage_set", arguments);
  }
}, 'prototype');