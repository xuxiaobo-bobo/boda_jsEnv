// Permissions对象

bodaEnv.memory.globlProtoObj["Permissions"] = function Permissions() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Permissions 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Permissions"], "Permissions");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Permissions"].prototype, "query", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    query() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Permissions"].prototype, "Permissions", "query", arguments);
    }
  }.query
});