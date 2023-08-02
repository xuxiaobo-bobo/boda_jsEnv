// XRWebGLDepthInformation对象

XRWebGLDepthInformation = function XRWebGLDepthInformation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRWebGLDepthInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRWebGLDepthInformation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRWebGLDepthInformation, "XRWebGLDepthInformation");
XRWebGLDepthInformation.prototype.__proto__ = XRDepthInformation.prototype;
XRWebGLDepthInformation.__proto__ = XRDepthInformation;
bodavm.toolsFunc.defineProperty(XRWebGLDepthInformation.prototype, "texture", {
  configurable: true,
  enumerable: true,
  get: function texture() {
    return bodavm.toolsFunc.dispatch(this, XRWebGLDepthInformation.prototype, "XRWebGLDepthInformation", "texture_get", arguments);
  },
  set: undefined
});