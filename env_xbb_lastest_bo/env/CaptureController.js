// CaptureController对象

CaptureController = function CaptureController() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CaptureController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CaptureController, "CaptureController");
bodavm.toolsFunc.defineProperty(CaptureController.prototype, "setFocusBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setFocusBehavior() {
    return bodavm.toolsFunc.dispatch(this, CaptureController.prototype, "CaptureController", "setFocusBehavior", arguments);
  }
});