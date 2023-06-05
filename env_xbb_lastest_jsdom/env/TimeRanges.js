// TimeRanges对象

bodavm.memory.globalobj['TimeRanges'] = function TimeRanges() {
  console.log_copy('TimeRanges 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TimeRanges)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TimeRanges'], "TimeRanges");
bodavm.toolsFunc.defineProperty('TimeRanges', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TimeRanges'].prototype, "TimeRanges", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TimeRanges', "end", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function end() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TimeRanges'].prototype, "TimeRanges", "end", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TimeRanges', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TimeRanges'].prototype, "TimeRanges", "start", arguments);
  }
}, 'prototype');