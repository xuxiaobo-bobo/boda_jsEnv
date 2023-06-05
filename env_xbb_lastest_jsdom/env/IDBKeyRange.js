// IDBKeyRange对象

bodavm.memory.globalobj['IDBKeyRange'] = function IDBKeyRange() {
  console.log_copy('IDBKeyRange 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBKeyRange)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBKeyRange'], "IDBKeyRange");
bodavm.toolsFunc.defineProperty('IDBKeyRange', "bound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bound() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].undefined, "IDBKeyRange", "bound", arguments);
  }
});
bodavm.toolsFunc.defineProperty('IDBKeyRange', "lowerBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lowerBound() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].undefined, "IDBKeyRange", "lowerBound", arguments);
  }
});
bodavm.toolsFunc.defineProperty('IDBKeyRange', "only", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function only() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].undefined, "IDBKeyRange", "only", arguments);
  }
});
bodavm.toolsFunc.defineProperty('IDBKeyRange', "upperBound", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function upperBound() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].undefined, "IDBKeyRange", "upperBound", arguments);
  }
});
bodavm.toolsFunc.defineProperty('IDBKeyRange', "lower", {
  configurable: true,
  enumerable: true,
  get: function lower() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].prototype, "IDBKeyRange", "lower_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBKeyRange', "upper", {
  configurable: true,
  enumerable: true,
  get: function upper() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].prototype, "IDBKeyRange", "upper_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBKeyRange', "lowerOpen", {
  configurable: true,
  enumerable: true,
  get: function lowerOpen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].prototype, "IDBKeyRange", "lowerOpen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBKeyRange', "upperOpen", {
  configurable: true,
  enumerable: true,
  get: function upperOpen() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].prototype, "IDBKeyRange", "upperOpen_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBKeyRange', "includes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function includes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBKeyRange'].prototype, "IDBKeyRange", "includes", arguments);
  }
}, 'prototype');