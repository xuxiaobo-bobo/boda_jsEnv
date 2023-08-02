// XRWebGLLayer对象

XRWebGLLayer = function XRWebGLLayer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRWebGLLayer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'XRWebGLLayer': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRWebGLLayer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRWebGLLayer, "XRWebGLLayer");
XRWebGLLayer.prototype.__proto__ = XRLayer.prototype;
XRWebGLLayer.__proto__ = XRLayer;
bodavm.toolsFunc.defineProperty(XRWebGLLayer, "getNativeFramebufferScaleFactor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNativeFramebufferScaleFactor() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer, "XRWebGLLayer", "getNativeFramebufferScaleFactor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "antialias", {
  configurable: true,
  enumerable: true,
  get: function antialias() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "antialias_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "ignoreDepthValues", {
  configurable: true,
  enumerable: true,
  get: function ignoreDepthValues() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "ignoreDepthValues_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebufferWidth", {
  configurable: true,
  enumerable: true,
  get: function framebufferWidth() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebufferWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebufferHeight", {
  configurable: true,
  enumerable: true,
  get: function framebufferHeight() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebufferHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "framebuffer", {
  configurable: true,
  enumerable: true,
  get: function framebuffer() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "framebuffer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRWebGLLayer.prototype, "getViewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getViewport() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLLayer.prototype, "XRWebGLLayer", "getViewport", arguments);
  }
});