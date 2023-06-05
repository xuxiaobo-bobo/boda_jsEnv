// EventCounts对象

bodavm.memory.globalobj['EventCounts'] = function EventCounts() {
  console.log_copy('EventCounts 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof EventCounts)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EventCounts'], "EventCounts");
bodavm.toolsFunc.defineProperty('EventCounts', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventCounts', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventCounts'].prototype, "EventCounts", "values", arguments);
  }
}, 'prototype');