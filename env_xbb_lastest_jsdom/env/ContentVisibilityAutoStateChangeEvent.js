// ContentVisibilityAutoStateChangeEvent对象

bodavm.memory.globalobj['ContentVisibilityAutoStateChangeEvent'] = function ContentVisibilityAutoStateChangeEvent() {
  console.log_copy('ContentVisibilityAutoStateChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ContentVisibilityAutoStateChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ContentVisibilityAutoStateChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ContentVisibilityAutoStateChangeEvent'], "ContentVisibilityAutoStateChangeEvent");
bodavm.memory.globalobj['ContentVisibilityAutoStateChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['ContentVisibilityAutoStateChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('ContentVisibilityAutoStateChangeEvent', "skipped", {
  configurable: true,
  enumerable: true,
  get: function skipped() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ContentVisibilityAutoStateChangeEvent'].prototype, "ContentVisibilityAutoStateChangeEvent", "skipped_get", arguments);
  },
  set: undefined
}, 'prototype');