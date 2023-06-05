// XRReferenceSpaceEvent对象

bodavm.memory.globalobj['XRReferenceSpaceEvent'] = function XRReferenceSpaceEvent() {
  console.log_copy('XRReferenceSpaceEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRReferenceSpaceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRReferenceSpaceEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRReferenceSpaceEvent'], "XRReferenceSpaceEvent");
bodavm.memory.globalobj['XRReferenceSpaceEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['XRReferenceSpaceEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('XRReferenceSpaceEvent', "referenceSpace", {
  configurable: true,
  enumerable: true,
  get: function referenceSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRReferenceSpaceEvent'].prototype, "XRReferenceSpaceEvent", "referenceSpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRReferenceSpaceEvent', "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRReferenceSpaceEvent'].prototype, "XRReferenceSpaceEvent", "transform_get", arguments);
  },
  set: undefined
}, 'prototype');