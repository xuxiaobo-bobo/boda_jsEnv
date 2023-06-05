// MediaKeyStatusMap对象

bodavm.memory.globalobj['MediaKeyStatusMap'] = function MediaKeyStatusMap() {
  console.log_copy('MediaKeyStatusMap 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaKeyStatusMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaKeyStatusMap'], "MediaKeyStatusMap");
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeyStatusMap', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeyStatusMap'].prototype, "MediaKeyStatusMap", "values", arguments);
  }
}, 'prototype');