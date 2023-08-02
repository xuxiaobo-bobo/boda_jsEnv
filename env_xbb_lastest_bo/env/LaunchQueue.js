// LaunchQueue对象

LaunchQueue = function LaunchQueue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LaunchQueue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LaunchQueue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LaunchQueue, "LaunchQueue");
bodavm.toolsFunc.defineProperty(LaunchQueue.prototype, "setConsumer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setConsumer() {
    return bodavm.toolsFunc.dispatch(this, LaunchQueue.prototype, "LaunchQueue", "setConsumer", arguments);
  }
});