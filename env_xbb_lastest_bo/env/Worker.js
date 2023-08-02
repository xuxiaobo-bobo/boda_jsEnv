// Worker对象

Worker = function Worker() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Worker)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Worker': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Worker 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Worker, "Worker");
Worker.prototype.__proto__ = EventTarget.prototype;
Worker.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Worker.prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onmessage_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Worker.prototype, "postMessage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function postMessage() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "postMessage", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Worker.prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "terminate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Worker.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Worker.prototype, "Worker", "onerror_set", arguments);
  }
});