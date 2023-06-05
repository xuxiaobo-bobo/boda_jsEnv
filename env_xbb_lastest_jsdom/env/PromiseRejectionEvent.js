// PromiseRejectionEvent对象

bodavm.memory.globalobj['PromiseRejectionEvent'] = function PromiseRejectionEvent() {
  console.log_copy('PromiseRejectionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PromiseRejectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PromiseRejectionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PromiseRejectionEvent'], "PromiseRejectionEvent");
bodavm.memory.globalobj['PromiseRejectionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PromiseRejectionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PromiseRejectionEvent', "promise", {
  configurable: true,
  enumerable: true,
  get: function promise() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PromiseRejectionEvent'].prototype, "PromiseRejectionEvent", "promise_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PromiseRejectionEvent', "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PromiseRejectionEvent'].prototype, "PromiseRejectionEvent", "reason_get", arguments);
  },
  set: undefined
}, 'prototype');