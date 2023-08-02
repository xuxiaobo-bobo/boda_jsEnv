// XRReferenceSpace对象

XRReferenceSpace = function XRReferenceSpace() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRReferenceSpace)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRReferenceSpace 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRReferenceSpace, "XRReferenceSpace");
XRReferenceSpace.prototype.__proto__ = XRSpace.prototype;
XRReferenceSpace.__proto__ = XRSpace;
bodavm.toolsFunc.defineProperty(XRReferenceSpace.prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRReferenceSpace.prototype, "getOffsetReferenceSpace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getOffsetReferenceSpace() {
    return bodavm.toolsFunc.dispatch(this, XRReferenceSpace.prototype, "XRReferenceSpace", "getOffsetReferenceSpace", arguments);
  }
});