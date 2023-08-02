// XRFrame对象

XRFrame = function XRFrame() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRFrame 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRFrame, "XRFrame");
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "session", {
  configurable: true,
  enumerable: true,
  get: function session() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "session_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPose() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getPose", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getViewerPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getViewerPose() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getViewerPose", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "trackedAnchors", {
  configurable: true,
  enumerable: true,
  get: function trackedAnchors() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "trackedAnchors_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "createAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnchor() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "createAnchor", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getDepthInformation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInformation() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getDepthInformation", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getHitTestResults", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHitTestResults() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getHitTestResults", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getHitTestResultsForTransientInput", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getHitTestResultsForTransientInput() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getHitTestResultsForTransientInput", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRFrame.prototype, "getLightEstimate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLightEstimate() {
    return bodavm.toolsFunc.dispatch(this, XRFrame.prototype, "XRFrame", "getLightEstimate", arguments);
  }
});