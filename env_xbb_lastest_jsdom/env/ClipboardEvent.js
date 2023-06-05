// ClipboardEvent对象

bodavm.memory.globalobj['ClipboardEvent'] = function ClipboardEvent() {
  console.log_copy('ClipboardEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ClipboardEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ClipboardEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ClipboardEvent'], "ClipboardEvent");
bodavm.memory.globalobj['ClipboardEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['ClipboardEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('ClipboardEvent', "clipboardData", {
  configurable: true,
  enumerable: true,
  get: function clipboardData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ClipboardEvent'].prototype, "ClipboardEvent", "clipboardData_get", arguments);
  },
  set: undefined
}, 'prototype');