// GPUUncapturedErrorEvent对象

GPUUncapturedErrorEvent = function GPUUncapturedErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUUncapturedErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GPUUncapturedErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUUncapturedErrorEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUUncapturedErrorEvent, "GPUUncapturedErrorEvent");
GPUUncapturedErrorEvent.prototype.__proto__ = Event.prototype;
GPUUncapturedErrorEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(GPUUncapturedErrorEvent.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, GPUUncapturedErrorEvent.prototype, "GPUUncapturedErrorEvent", "error_get", arguments);
  },
  set: undefined
});