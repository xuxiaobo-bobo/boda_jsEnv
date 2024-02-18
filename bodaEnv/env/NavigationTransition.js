// NavigationTransition对象

bodaEnv.memory.globlProtoObj["NavigationTransition"] = function NavigationTransition() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigationTransition 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigationTransition"], "NavigationTransition");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: {
    navigationType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "NavigationTransition", "navigationType_get", arguments);
    }
  }.navigationType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "from", {
  configurable: true,
  enumerable: true,
  get: {
    from() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "NavigationTransition", "from_get", arguments);
    }
  }.from,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: {
    finished() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationTransition"].prototype, "NavigationTransition", "finished_get", arguments);
    }
  }.finished,
  set: undefined
});