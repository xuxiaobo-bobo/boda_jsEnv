// XRDOMOverlayState对象

XRDOMOverlayState = function XRDOMOverlayState() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRDOMOverlayState)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRDOMOverlayState 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRDOMOverlayState, "XRDOMOverlayState");
bodavm.toolsFunc.defineProperty(XRDOMOverlayState.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, XRDOMOverlayState.prototype, "XRDOMOverlayState", "type_get", arguments);
  },
  set: undefined
});