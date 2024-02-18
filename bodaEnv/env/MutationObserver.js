// MutationObserver对象

bodaEnv.memory.globlProtoObj["MutationObserver"] = function MutationObserver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MutationObserver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MutationObserver"], "MutationObserver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "MutationObserver", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "MutationObserver", "observe", arguments);
    }
  }.observe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    takeRecords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MutationObserver"].prototype, "MutationObserver", "takeRecords", arguments);
    }
  }.takeRecords
});