// XRRenderState对象

bodaEnv.memory.globlProtoObj["XRRenderState"] = function XRRenderState() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRRenderState 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRRenderState"], "XRRenderState");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "depthNear", {
  configurable: true,
  enumerable: true,
  get: {
    depthNear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "XRRenderState", "depthNear_get", arguments);
    }
  }.depthNear,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "depthFar", {
  configurable: true,
  enumerable: true,
  get: {
    depthFar() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "XRRenderState", "depthFar_get", arguments);
    }
  }.depthFar,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "inlineVerticalFieldOfView", {
  configurable: true,
  enumerable: true,
  get: {
    inlineVerticalFieldOfView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "XRRenderState", "inlineVerticalFieldOfView_get", arguments);
    }
  }.inlineVerticalFieldOfView,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "baseLayer", {
  configurable: true,
  enumerable: true,
  get: {
    baseLayer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRenderState"].prototype, "XRRenderState", "baseLayer_get", arguments);
    }
  }.baseLayer,
  set: undefined
});