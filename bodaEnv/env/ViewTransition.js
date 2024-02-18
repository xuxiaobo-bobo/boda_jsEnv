// ViewTransition对象

bodaEnv.memory.globlProtoObj["ViewTransition"] = function ViewTransition() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ViewTransition 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ViewTransition"], "ViewTransition");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: {
    finished() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "ViewTransition", "finished_get", arguments);
    }
  }.finished,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: {
    ready() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "ViewTransition", "ready_get", arguments);
    }
  }.ready,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "updateCallbackDone", {
  configurable: true,
  enumerable: true,
  get: {
    updateCallbackDone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "ViewTransition", "updateCallbackDone_get", arguments);
    }
  }.updateCallbackDone,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "skipTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    skipTransition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ViewTransition"].prototype, "ViewTransition", "skipTransition", arguments);
    }
  }.skipTransition
});