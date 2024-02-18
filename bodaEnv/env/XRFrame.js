// XRFrame对象

bodaEnv.memory.globlProtoObj["XRFrame"] = function XRFrame() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRFrame 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRFrame"], "XRFrame");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "session", {
  configurable: true,
  enumerable: true,
  get: {
    session() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "session_get", arguments);
    }
  }.session,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getPose", arguments);
    }
  }.getPose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getViewerPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getViewerPose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getViewerPose", arguments);
    }
  }.getViewerPose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "trackedAnchors", {
  configurable: true,
  enumerable: true,
  get: {
    trackedAnchors() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "trackedAnchors_get", arguments);
    }
  }.trackedAnchors,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "createAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAnchor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "createAnchor", arguments);
    }
  }.createAnchor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDepthInformation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getDepthInformation", arguments);
    }
  }.getDepthInformation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getHitTestResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getHitTestResults() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getHitTestResults", arguments);
    }
  }.getHitTestResults
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getHitTestResultsForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getHitTestResultsForTransientInput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getHitTestResultsForTransientInput", arguments);
    }
  }.getHitTestResultsForTransientInput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "getLightEstimate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getLightEstimate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRFrame"].prototype, "XRFrame", "getLightEstimate", arguments);
    }
  }.getLightEstimate
});