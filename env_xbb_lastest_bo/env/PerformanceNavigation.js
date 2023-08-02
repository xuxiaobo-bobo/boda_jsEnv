// PerformanceNavigation对象

PerformanceNavigation = function PerformanceNavigation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceNavigation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceNavigation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceNavigation, "PerformanceNavigation");
bodavm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation, "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "redirectCount", {
  configurable: true,
  enumerable: true,
  get: function redirectCount() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "redirectCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_NAVIGATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RELOAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_BACK_FORWARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "TYPE_RESERVED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 255
});
bodavm.toolsFunc.defineProperty(PerformanceNavigation.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigation.prototype, "PerformanceNavigation", "toJSON", arguments);
  }
});