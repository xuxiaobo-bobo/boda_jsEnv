// SubmitEvent对象

bodavm.memory.globalobj['SubmitEvent'] = function SubmitEvent() {
  console.log_copy('SubmitEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SubmitEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SubmitEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SubmitEvent'], "SubmitEvent");
bodavm.memory.globalobj['SubmitEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['SubmitEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('SubmitEvent', "submitter", {
  configurable: true,
  enumerable: true,
  get: function submitter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SubmitEvent'].prototype, "SubmitEvent", "submitter_get", arguments);
  },
  set: undefined
}, 'prototype');