// XRAnchor对象

bodaEnv.memory.globlProtoObj["XRAnchor"] = function XRAnchor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRAnchor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRAnchor"], "XRAnchor");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRAnchor"].prototype, "anchorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    anchorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRAnchor"].prototype, "XRAnchor", "anchorSpace_get", arguments);
    }
  }.anchorSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRAnchor"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRAnchor"].prototype, "XRAnchor", "bodelete", arguments);
    }
  }.bodelete
});