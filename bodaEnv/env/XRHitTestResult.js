// XRHitTestResult对象

bodaEnv.memory.globlProtoObj["XRHitTestResult"] = function XRHitTestResult() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRHitTestResult 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRHitTestResult"], "XRHitTestResult");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRHitTestResult"].prototype, "getPose", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRHitTestResult"].prototype, "XRHitTestResult", "getPose", arguments);
    }
  }.getPose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRHitTestResult"].prototype, "createAnchor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAnchor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRHitTestResult"].prototype, "XRHitTestResult", "createAnchor", arguments);
    }
  }.createAnchor
});