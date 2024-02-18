// XRWebGLLayer对象

bodaEnv.memory.globlProtoObj["XRWebGLLayer"] = function XRWebGLLayer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRWebGLLayer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRWebGLLayer"], "XRWebGLLayer");
bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRLayer"].prototype;
bodaEnv.memory.globlProtoObj["XRWebGLLayer"].__proto__ = bodaEnv.memory.globlProtoObj["XRLayer"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"], "getNativeFramebufferScaleFactor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getNativeFramebufferScaleFactor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLDepthInformation"], "XRWebGLLayer", "getNativeFramebufferScaleFactor", arguments);
    }
  }.getNativeFramebufferScaleFactor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "antialias", {
  configurable: true,
  enumerable: true,
  get: {
    antialias() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "antialias_get", arguments);
    }
  }.antialias,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "ignoreDepthValues", {
  configurable: true,
  enumerable: true,
  get: {
    ignoreDepthValues() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "ignoreDepthValues_get", arguments);
    }
  }.ignoreDepthValues,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "framebufferWidth", {
  configurable: true,
  enumerable: true,
  get: {
    framebufferWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "framebufferWidth_get", arguments);
    }
  }.framebufferWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "framebufferHeight", {
  configurable: true,
  enumerable: true,
  get: {
    framebufferHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "framebufferHeight_get", arguments);
    }
  }.framebufferHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "framebuffer", {
  configurable: true,
  enumerable: true,
  get: {
    framebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "framebuffer_get", arguments);
    }
  }.framebuffer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "getViewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getViewport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRWebGLLayer"].prototype, "XRWebGLLayer", "getViewport", arguments);
    }
  }.getViewport
});