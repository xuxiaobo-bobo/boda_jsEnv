// TimeRanges对象

TimeRanges = function TimeRanges() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TimeRanges)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TimeRanges 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TimeRanges, "TimeRanges");
bodavm.toolsFunc.defineProperty(TimeRanges.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TimeRanges.prototype, "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "end", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TimeRanges.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, TimeRanges.prototype, "TimeRanges", "start", arguments);
  }
});