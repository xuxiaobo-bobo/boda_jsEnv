// Profiler对象

Profiler = function Profiler() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Profiler)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Profiler': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Profiler 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Profiler, "Profiler");
Profiler.prototype.__proto__ = EventTarget.prototype;
Profiler.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Profiler.prototype, "sampleInterval", {
  configurable: true,
  enumerable: true,
  get: function sampleInterval() {
    return bodavm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "sampleInterval_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Profiler.prototype, "stopped", {
  configurable: true,
  enumerable: true,
  get: function stopped() {
    return bodavm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "stopped_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Profiler.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, Profiler.prototype, "Profiler", "stop", arguments);
  }
});