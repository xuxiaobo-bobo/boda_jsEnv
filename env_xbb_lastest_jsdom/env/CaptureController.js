// CaptureController对象

bodavm.memory.globalobj['CaptureController'] = function CaptureController() {
  console.log_copy('CaptureController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.CaptureController();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CaptureController'], "CaptureController");
bodavm.toolsFunc.defineProperty('CaptureController', "setFocusBehavior", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setFocusBehavior() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CaptureController'].prototype, "CaptureController", "setFocusBehavior", arguments);
  }
}, 'prototype');