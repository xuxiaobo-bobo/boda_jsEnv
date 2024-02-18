// ContentVisibilityAutoStateChangeEvent对象

bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"] = function ContentVisibilityAutoStateChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ContentVisibilityAutoStateChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"], "ContentVisibilityAutoStateChangeEvent");
bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"].prototype, "skipped", {
  configurable: true,
  enumerable: true,
  get: {
    skipped() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ContentVisibilityAutoStateChangeEvent"].prototype, "ContentVisibilityAutoStateChangeEvent", "skipped_get", arguments);
    }
  }.skipped,
  set: undefined
});