// XRHitTestSource对象

XRHitTestSource = function XRHitTestSource() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRHitTestSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRHitTestSource 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRHitTestSource, "XRHitTestSource");
bodavm.toolsFunc.defineProperty(XRHitTestSource.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, XRHitTestSource.prototype, "XRHitTestSource", "cancel", arguments);
  }
});