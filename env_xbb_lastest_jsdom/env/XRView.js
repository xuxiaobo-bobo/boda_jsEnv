// XRView对象

bodavm.memory.globalobj['XRView'] = function XRView() {
  console.log_copy('XRView 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRView)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRView'], "XRView");
bodavm.toolsFunc.defineProperty('XRView', "eye", {
  configurable: true,
  enumerable: true,
  get: function eye() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "eye_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "projectionMatrix", {
  configurable: true,
  enumerable: true,
  get: function projectionMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "projectionMatrix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "transform_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "recommendedViewportScale", {
  configurable: true,
  enumerable: true,
  get: function recommendedViewportScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "recommendedViewportScale_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "isFirstPersonObserver", {
  configurable: true,
  enumerable: true,
  get: function isFirstPersonObserver() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "isFirstPersonObserver_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "camera", {
  configurable: true,
  enumerable: true,
  get: function camera() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "camera_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRView', "requestViewportScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestViewportScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRView'].prototype, "XRView", "requestViewportScale", arguments);
  }
}, 'prototype');