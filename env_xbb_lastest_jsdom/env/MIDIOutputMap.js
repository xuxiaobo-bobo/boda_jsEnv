// MIDIOutputMap对象

bodavm.memory.globalobj['MIDIOutputMap'] = function MIDIOutputMap() {
  console.log_copy('MIDIOutputMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MIDIOutputMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MIDIOutputMap'], "MIDIOutputMap");
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MIDIOutputMap', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MIDIOutputMap'].prototype, "MIDIOutputMap", "values", arguments);
  }
}, 'prototype');