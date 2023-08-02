// XRViewerPose对象

XRViewerPose = function XRViewerPose() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRViewerPose)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRViewerPose 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRViewerPose, "XRViewerPose");
XRViewerPose.prototype.__proto__ = XRPose.prototype;
XRViewerPose.__proto__ = XRPose;
bodavm.toolsFunc.defineProperty(XRViewerPose.prototype, "views", {
  configurable: true,
  enumerable: true,
  get: function views() {
    return bodavm.toolsFunc.dispatch(this, XRViewerPose.prototype, "XRViewerPose", "views_get", arguments);
  },
  set: undefined
});