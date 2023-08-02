// XRTransientInputHitTestResult对象

XRTransientInputHitTestResult = function XRTransientInputHitTestResult() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRTransientInputHitTestResult)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRTransientInputHitTestResult 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRTransientInputHitTestResult, "XRTransientInputHitTestResult");
bodavm.toolsFunc.defineProperty(XRTransientInputHitTestResult.prototype, "inputSource", {
  configurable: true,
  enumerable: true,
  get: function inputSource() {
    return bodavm.toolsFunc.dispatch(this, XRTransientInputHitTestResult.prototype, "XRTransientInputHitTestResult", "inputSource_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRTransientInputHitTestResult.prototype, "results", {
  configurable: true,
  enumerable: true,
  get: function results() {
    return bodavm.toolsFunc.dispatch(this, XRTransientInputHitTestResult.prototype, "XRTransientInputHitTestResult", "results_get", arguments);
  },
  set: undefined
});