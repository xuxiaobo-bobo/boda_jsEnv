// XRHitTestSource对象

bodaEnv.memory.globlProtoObj["XRHitTestSource"] = function XRHitTestSource() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRHitTestSource 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRHitTestSource"], "XRHitTestSource");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRHitTestSource"].prototype, "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRHitTestSource"].prototype, "XRHitTestSource", "cancel", arguments);
    }
  }.cancel
});