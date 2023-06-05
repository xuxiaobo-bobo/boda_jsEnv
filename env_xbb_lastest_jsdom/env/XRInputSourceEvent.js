// XRInputSourceEvent对象

bodavm.memory.globalobj['XRInputSourceEvent'] = function XRInputSourceEvent() {
  console.log_copy('XRInputSourceEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRInputSourceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRInputSourceEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRInputSourceEvent'], "XRInputSourceEvent");
bodavm.memory.globalobj['XRInputSourceEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['XRInputSourceEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('XRInputSourceEvent', "frame", {
  configurable: true,
  enumerable: true,
  get: function frame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceEvent'].prototype, "XRInputSourceEvent", "frame_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRInputSourceEvent', "inputSource", {
  configurable: true,
  enumerable: true,
  get: function inputSource() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRInputSourceEvent'].prototype, "XRInputSourceEvent", "inputSource_get", arguments);
  },
  set: undefined
}, 'prototype');