// PerformanceNavigation对象

bodavm.memory.globalobj['PerformanceNavigation'] = function PerformanceNavigation() {
  console.log_copy('PerformanceNavigation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceNavigation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceNavigation'], "PerformanceNavigation");
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
});
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigation'].prototype, "PerformanceNavigation", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "redirectCount", {
  configurable: true,
  enumerable: true,
  get: function redirectCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigation'].prototype, "PerformanceNavigation", "redirectCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceNavigation', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceNavigation'].prototype, "PerformanceNavigation", "toJSON", arguments);
  }
}, 'prototype');