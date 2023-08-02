// XRTransientInputHitTestSource对象

XRTransientInputHitTestSource = function XRTransientInputHitTestSource() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRTransientInputHitTestSource)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRTransientInputHitTestSource 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRTransientInputHitTestSource, "XRTransientInputHitTestSource");
bodavm.toolsFunc.defineProperty(XRTransientInputHitTestSource.prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, XRTransientInputHitTestSource.prototype, "XRTransientInputHitTestSource", "cancel", arguments);
  }
});