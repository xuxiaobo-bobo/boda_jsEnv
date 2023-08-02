// XRPose对象

XRPose = function XRPose() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRPose)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRPose 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRPose, "XRPose");
bodavm.toolsFunc.defineProperty(XRPose.prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: function transform() {
    return bodavm.toolsFunc.dispatch(this, XRPose.prototype, "XRPose", "transform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRPose.prototype, "emulatedPosition", {
  configurable: true,
  enumerable: true,
  get: function emulatedPosition() {
    return bodavm.toolsFunc.dispatch(this, XRPose.prototype, "XRPose", "emulatedPosition_get", arguments);
  },
  set: undefined
});