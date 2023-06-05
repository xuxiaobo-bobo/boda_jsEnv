// XRInputSourcesChangeEvent对象

bodavm.memory.globalobj['XRInputSourcesChangeEvent'] = function XRInputSourcesChangeEvent() {
  console.log_copy('XRInputSourcesChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRInputSourcesChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourcesChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRInputSourcesChangeEvent'], "XRInputSourcesChangeEvent");
bodavm.memory.globalobj['XRInputSourcesChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['XRInputSourcesChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('XRInputSourcesChangeEvent', "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourcesChangeEvent'].prototype, "XRInputSourcesChangeEvent", "session_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourcesChangeEvent', "added", {
  configurable: true,
  enumerable: true,
  get: function added() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourcesChangeEvent'].prototype, "XRInputSourcesChangeEvent", "added_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourcesChangeEvent', "removed", {
  configurable: true,
  enumerable: true,
  get: function removed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourcesChangeEvent'].prototype, "XRInputSourcesChangeEvent", "removed_get", arguments);
  },
  set: undefined
}, 'prototype');