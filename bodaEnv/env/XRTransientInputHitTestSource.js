// XRTransientInputHitTestSource对象

bodaEnv.memory.globlProtoObj["XRTransientInputHitTestSource"] = function XRTransientInputHitTestSource() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRTransientInputHitTestSource 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRTransientInputHitTestSource"], "XRTransientInputHitTestSource");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRTransientInputHitTestSource"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRTransientInputHitTestSource"].prototype, "XRTransientInputHitTestSource", "cancel", arguments);
    }
  }.cancel
});