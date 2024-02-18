// CaptureController对象

bodaEnv.memory.globlProtoObj["CaptureController"] = function CaptureController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CaptureController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CaptureController"], "CaptureController");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CaptureController"].prototype, "setFocusBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setFocusBehavior() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CaptureController"].prototype, "CaptureController", "setFocusBehavior", arguments);
    }
  }.setFocusBehavior
});