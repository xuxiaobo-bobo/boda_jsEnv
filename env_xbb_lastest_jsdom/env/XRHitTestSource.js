// XRHitTestSource对象

bodavm.memory.globalobj['XRHitTestSource'] = function XRHitTestSource() {
  console.log_copy('XRHitTestSource 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRHitTestSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRHitTestSource'], "XRHitTestSource");
bodavm.toolsFunc.defineProperty('XRHitTestSource', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRHitTestSource'].prototype, "XRHitTestSource", "cancel", arguments);
  }
}, 'prototype');