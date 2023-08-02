// LayoutShift对象

LayoutShift = function LayoutShift() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LayoutShift)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LayoutShift 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LayoutShift, "LayoutShift");
LayoutShift.prototype.__proto__ = PerformanceEntry.prototype;
LayoutShift.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(LayoutShift.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "value_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShift.prototype, "hadRecentInput", {
  configurable: true,
  enumerable: true,
  get: function hadRecentInput() {
    return bodavm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "hadRecentInput_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShift.prototype, "lastInputTime", {
  configurable: true,
  enumerable: true,
  get: function lastInputTime() {
    return bodavm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "lastInputTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShift.prototype, "sources", {
  configurable: true,
  enumerable: true,
  get: function sources() {
    return bodavm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "sources_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(LayoutShift.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, LayoutShift.prototype, "LayoutShift", "toJSON", arguments);
  }
});