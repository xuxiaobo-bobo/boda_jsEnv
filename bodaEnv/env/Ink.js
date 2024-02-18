// Ink对象

bodaEnv.memory.globlProtoObj["Ink"] = function Ink() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Ink 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Ink"], "Ink");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Ink"].prototype, "requestPresenter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestPresenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Ink"].prototype, "Ink", "requestPresenter", arguments);
    }
  }.requestPresenter
});