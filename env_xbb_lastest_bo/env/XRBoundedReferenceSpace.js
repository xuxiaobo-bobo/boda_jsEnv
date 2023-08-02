// XRBoundedReferenceSpace对象

XRBoundedReferenceSpace = function XRBoundedReferenceSpace() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRBoundedReferenceSpace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRBoundedReferenceSpace 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRBoundedReferenceSpace, "XRBoundedReferenceSpace");
XRBoundedReferenceSpace.prototype.__proto__ = XRReferenceSpace.prototype;
XRBoundedReferenceSpace.__proto__ = XRReferenceSpace;
bodavm.toolsFunc.defineProperty(XRBoundedReferenceSpace.prototype, "boundsGeometry", {
  configurable: true,
  enumerable: true,
  get: function boundsGeometry() {
    return bodavm.toolsFunc.dispatch(this, XRBoundedReferenceSpace.prototype, "XRBoundedReferenceSpace", "boundsGeometry_get", arguments);
  },
  set: undefined
});