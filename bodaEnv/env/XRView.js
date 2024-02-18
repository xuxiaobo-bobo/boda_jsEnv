// XRView对象

bodaEnv.memory.globlProtoObj["XRView"] = function XRView() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRView 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRView"], "XRView");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "eye", {
  configurable: true,
  enumerable: true,
  get: {
    eye() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "eye_get", arguments);
    }
  }.eye,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "projectionMatrix", {
  configurable: true,
  enumerable: true,
  get: {
    projectionMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "projectionMatrix_get", arguments);
    }
  }.projectionMatrix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: {
    transform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "transform_get", arguments);
    }
  }.transform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "recommendedViewportScale", {
  configurable: true,
  enumerable: true,
  get: {
    recommendedViewportScale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "recommendedViewportScale_get", arguments);
    }
  }.recommendedViewportScale,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "isFirstPersonObserver", {
  configurable: true,
  enumerable: true,
  get: {
    isFirstPersonObserver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "isFirstPersonObserver_get", arguments);
    }
  }.isFirstPersonObserver,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "camera", {
  configurable: true,
  enumerable: true,
  get: {
    camera() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "camera_get", arguments);
    }
  }.camera,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRView"].prototype, "requestViewportScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestViewportScale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRView"].prototype, "XRView", "requestViewportScale", arguments);
    }
  }.requestViewportScale
});