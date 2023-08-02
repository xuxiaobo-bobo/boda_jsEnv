// XRRenderState对象

XRRenderState = function XRRenderState() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRRenderState)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRRenderState 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRRenderState, "XRRenderState");
bodavm.toolsFunc.defineProperty(XRRenderState.prototype, "depthNear", {
  configurable: true,
  enumerable: true,
  get: function depthNear() {
    return bodavm.toolsFunc.dispatch(this, XRRenderState.prototype, "XRRenderState", "depthNear_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRenderState.prototype, "depthFar", {
  configurable: true,
  enumerable: true,
  get: function depthFar() {
    return bodavm.toolsFunc.dispatch(this, XRRenderState.prototype, "XRRenderState", "depthFar_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRenderState.prototype, "inlineVerticalFieldOfView", {
  configurable: true,
  enumerable: true,
  get: function inlineVerticalFieldOfView() {
    return bodavm.toolsFunc.dispatch(this, XRRenderState.prototype, "XRRenderState", "inlineVerticalFieldOfView_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRenderState.prototype, "baseLayer", {
  configurable: true,
  enumerable: true,
  get: function baseLayer() {
    return bodavm.toolsFunc.dispatch(this, XRRenderState.prototype, "XRRenderState", "baseLayer_get", arguments);
  },
  set: undefined
});