// XRHitTestResult对象

XRHitTestResult = function XRHitTestResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRHitTestResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRHitTestResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRHitTestResult, "XRHitTestResult");
bodavm.toolsFunc.defineProperty(XRHitTestResult.prototype, "getPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPose() {
    return bodavm.toolsFunc.dispatch(this, XRHitTestResult.prototype, "XRHitTestResult", "getPose", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XRHitTestResult.prototype, "createAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAnchor() {
    return bodavm.toolsFunc.dispatch(this, XRHitTestResult.prototype, "XRHitTestResult", "createAnchor", arguments);
  }
});