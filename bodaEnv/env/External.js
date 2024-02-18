// External对象

bodaEnv.memory.globlProtoObj["External"] = function External() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('External 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["External"], "External");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["External"].prototype, "AddSearchProvider", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    AddSearchProvider() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["External"].prototype, "External", "AddSearchProvider", arguments);
    }
  }.AddSearchProvider
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["External"].prototype, "IsSearchProviderInstalled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    IsSearchProviderInstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["External"].prototype, "External", "IsSearchProviderInstalled", arguments);
    }
  }.IsSearchProviderInstalled
});

// external对象

bodaEnv.memory.globlProtoObj["external"] = new bodaEnv.memory.globlProtoObj["External"]('bobo');