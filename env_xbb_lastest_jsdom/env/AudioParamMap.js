// AudioParamMap对象

bodavm.memory.globalobj['AudioParamMap'] = function AudioParamMap() {
  console.log_copy('AudioParamMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioParamMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioParamMap'], "AudioParamMap");
bodavm.toolsFunc.defineProperty('AudioParamMap', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioParamMap', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioParamMap'].prototype, "AudioParamMap", "values", arguments);
  }
}, 'prototype');