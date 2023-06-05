// MIDIAccess对象

bodavm.memory.globalobj['MIDIAccess'] = function MIDIAccess() {
  console.log_copy('MIDIAccess 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIAccess)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIAccess'], "MIDIAccess");
bodavm.memory.globalobj['MIDIAccess'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MIDIAccess'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MIDIAccess', "inputs", {
  configurable: true,
  enumerable: true,
  get: function inputs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIAccess'].prototype, "MIDIAccess", "inputs_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIAccess', "outputs", {
  configurable: true,
  enumerable: true,
  get: function outputs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIAccess'].prototype, "MIDIAccess", "outputs_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIAccess', "sysexEnabled", {
  configurable: true,
  enumerable: true,
  get: function sysexEnabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIAccess'].prototype, "MIDIAccess", "sysexEnabled_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIAccess', "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIAccess'].prototype, "MIDIAccess", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIAccess'].prototype, "MIDIAccess", "onstatechange_set", arguments);
  }
}, 'prototype');