// SharedWorker对象

SharedWorker = function SharedWorker() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SharedWorker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SharedWorker': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SharedWorker 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SharedWorker, "SharedWorker");
SharedWorker.prototype.__proto__ = EventTarget.prototype;
SharedWorker.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(SharedWorker.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "port_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SharedWorker.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, SharedWorker.prototype, "SharedWorker", "onerror_set", arguments);
  }
});