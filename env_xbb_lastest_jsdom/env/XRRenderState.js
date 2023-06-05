// XRRenderState对象

bodavm.memory.globalobj['XRRenderState'] = function XRRenderState() {
  console.log_copy('XRRenderState 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRRenderState)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRRenderState'], "XRRenderState");
bodavm.toolsFunc.defineProperty('XRRenderState', "depthNear", {
  configurable: true,
  enumerable: true,
  get: function depthNear() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRenderState'].prototype, "XRRenderState", "depthNear_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRenderState', "depthFar", {
  configurable: true,
  enumerable: true,
  get: function depthFar() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRenderState'].prototype, "XRRenderState", "depthFar_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRenderState', "inlineVerticalFieldOfView", {
  configurable: true,
  enumerable: true,
  get: function inlineVerticalFieldOfView() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRenderState'].prototype, "XRRenderState", "inlineVerticalFieldOfView_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRenderState', "baseLayer", {
  configurable: true,
  enumerable: true,
  get: function baseLayer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRenderState'].prototype, "XRRenderState", "baseLayer_get", arguments);
  },
  set: undefined
}, 'prototype');