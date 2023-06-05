// ResizeObserver对象

bodavm.memory.globalobj['ResizeObserver'] = function ResizeObserver() {
  console.log_copy('ResizeObserver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ResizeObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ResizeObserver'], "ResizeObserver");
bodavm.toolsFunc.defineProperty('ResizeObserver', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserver'].prototype, "ResizeObserver", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserver', "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserver'].prototype, "ResizeObserver", "observe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ResizeObserver', "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unobserve() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ResizeObserver'].prototype, "ResizeObserver", "unobserve", arguments);
  }
}, 'prototype');