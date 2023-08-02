// XRCamera对象

XRCamera = function XRCamera() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRCamera)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRCamera 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRCamera, "XRCamera");
bodavm.toolsFunc.defineProperty(XRCamera.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, XRCamera.prototype, "XRCamera", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRCamera.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, XRCamera.prototype, "XRCamera", "height_get", arguments);
  },
  set: undefined
});