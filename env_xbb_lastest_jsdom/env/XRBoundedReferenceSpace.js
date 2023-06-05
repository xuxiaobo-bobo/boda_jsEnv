// XRBoundedReferenceSpace对象

bodavm.memory.globalobj['XRBoundedReferenceSpace'] = function XRBoundedReferenceSpace() {
  console.log_copy('XRBoundedReferenceSpace 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRBoundedReferenceSpace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRBoundedReferenceSpace'], "XRBoundedReferenceSpace");
bodavm.memory.globalobj['XRBoundedReferenceSpace'].prototype.__proto__ = bodavm.memory.globalobj['XRReferenceSpace'].prototype;
bodavm.memory.globalobj['XRBoundedReferenceSpace'].__proto__ = bodavm.memory.globalobj['XRReferenceSpace'];
bodavm.toolsFunc.defineProperty('XRBoundedReferenceSpace', "boundsGeometry", {
  configurable: true,
  enumerable: true,
  get: function boundsGeometry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRBoundedReferenceSpace'].prototype, "XRBoundedReferenceSpace", "boundsGeometry_get", arguments);
  },
  set: undefined
}, 'prototype');