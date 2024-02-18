// ResizeObserver对象

bodaEnv.memory.globlProtoObj["ResizeObserver"] = function ResizeObserver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ResizeObserver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ResizeObserver"], "ResizeObserver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "ResizeObserver", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "ResizeObserver", "observe", arguments);
    }
  }.observe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unobserve() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserver"].prototype, "ResizeObserver", "unobserve", arguments);
    }
  }.unobserve
});