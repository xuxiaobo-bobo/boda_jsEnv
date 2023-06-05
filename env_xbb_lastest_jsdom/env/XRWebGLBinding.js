// XRWebGLBinding对象

bodavm.memory.globalobj['XRWebGLBinding'] = function XRWebGLBinding() {
  console.log_copy('XRWebGLBinding 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRWebGLBinding)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRWebGLBinding': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRWebGLBinding'], "XRWebGLBinding");
bodavm.toolsFunc.defineProperty('XRWebGLBinding', "getCameraImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCameraImage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLBinding'].prototype, "XRWebGLBinding", "getCameraImage", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLBinding', "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLBinding'].prototype, "XRWebGLBinding", "getDepthInformation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRWebGLBinding', "getReflectionCubeMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getReflectionCubeMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRWebGLBinding'].prototype, "XRWebGLBinding", "getReflectionCubeMap", arguments);
  }
}, 'prototype');