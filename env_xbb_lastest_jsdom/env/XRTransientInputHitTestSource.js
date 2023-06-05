// XRTransientInputHitTestSource对象

bodavm.memory.globalobj['XRTransientInputHitTestSource'] = function XRTransientInputHitTestSource() {
  console.log_copy('XRTransientInputHitTestSource 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRTransientInputHitTestSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRTransientInputHitTestSource'], "XRTransientInputHitTestSource");
bodavm.toolsFunc.defineProperty('XRTransientInputHitTestSource', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRTransientInputHitTestSource'].prototype, "XRTransientInputHitTestSource", "cancel", arguments);
  }
}, 'prototype');