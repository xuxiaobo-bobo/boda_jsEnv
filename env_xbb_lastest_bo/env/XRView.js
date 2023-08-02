// XRView对象

XRView = function XRView() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRView)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRView 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRView, "XRView");
bodavm.toolsFunc.defineProperty(XRView.prototype, "eye", {
  configurable: true,
  enumerable: true,
  get: function eye() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "eye_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "projectionMatrix", {
  configurable: true,
  enumerable: true,
  get: function projectionMatrix() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "projectionMatrix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "transform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "recommendedViewportScale", {
  configurable: true,
  enumerable: true,
  get: function recommendedViewportScale() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "recommendedViewportScale_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "isFirstPersonObserver", {
  configurable: true,
  enumerable: true,
  get: function isFirstPersonObserver() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "isFirstPersonObserver_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "camera", {
  configurable: true,
  enumerable: true,
  get: function camera() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "camera_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRView.prototype, "requestViewportScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestViewportScale() {
    return bodavm.toolsFunc.dispatch(this, XRView.prototype, "XRView", "requestViewportScale", arguments);
  }
});