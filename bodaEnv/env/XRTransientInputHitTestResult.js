// XRTransientInputHitTestResult对象

bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"] = function XRTransientInputHitTestResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRTransientInputHitTestResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"], "XRTransientInputHitTestResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"].prototype, "inputSource", {
  configurable: true,
  enumerable: true,
  get: {
    inputSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"].prototype, "XRTransientInputHitTestResult", "inputSource_get", arguments);
    }
  }.inputSource,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"].prototype, "results", {
  configurable: true,
  enumerable: true,
  get: {
    results() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRTransientInputHitTestResult"].prototype, "XRTransientInputHitTestResult", "results_get", arguments);
    }
  }.results,
  set: undefined
});