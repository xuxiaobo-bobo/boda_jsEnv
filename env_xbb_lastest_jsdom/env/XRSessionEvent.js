// XRSessionEvent对象

bodavm.memory.globalobj['XRSessionEvent'] = function XRSessionEvent() {
  console.log_copy('XRSessionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRSessionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRSessionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRSessionEvent'], "XRSessionEvent");
bodavm.memory.globalobj['XRSessionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['XRSessionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('XRSessionEvent', "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSessionEvent'].prototype, "XRSessionEvent", "session_get", arguments);
  },
  set: undefined
}, 'prototype');