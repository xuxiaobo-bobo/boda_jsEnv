// XMLSerializer对象

bodaEnv.memory.globlProtoObj["XMLSerializer"] = function XMLSerializer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XMLSerializer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XMLSerializer"], "XMLSerializer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XMLSerializer"].prototype, "serializeToString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    serializeToString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XMLSerializer"].prototype, "XMLSerializer", "serializeToString", arguments);
    }
  }.serializeToString
});