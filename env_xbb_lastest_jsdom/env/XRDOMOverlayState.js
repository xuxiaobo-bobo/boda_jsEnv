// XRDOMOverlayState对象

bodavm.memory.globalobj['XRDOMOverlayState'] = function XRDOMOverlayState() {
  console.log_copy('XRDOMOverlayState 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRDOMOverlayState)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRDOMOverlayState'], "XRDOMOverlayState");
bodavm.toolsFunc.defineProperty('XRDOMOverlayState', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRDOMOverlayState'].prototype, "XRDOMOverlayState", "type_get", arguments);
  },
  set: undefined
}, 'prototype');