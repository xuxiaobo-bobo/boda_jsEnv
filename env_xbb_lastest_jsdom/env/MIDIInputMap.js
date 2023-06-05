// MIDIInputMap对象

bodavm.memory.globalobj['MIDIInputMap'] = function MIDIInputMap() {
  console.log_copy('MIDIInputMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIInputMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIInputMap'], "MIDIInputMap");
bodavm.toolsFunc.defineProperty('MIDIInputMap', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIInputMap', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIInputMap'].prototype, "MIDIInputMap", "values", arguments);
  }
}, 'prototype');