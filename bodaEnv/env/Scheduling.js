// Scheduling对象

bodaEnv.memory.globlProtoObj["Scheduling"] = function Scheduling() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Scheduling 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Scheduling"], "Scheduling");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Scheduling"].prototype, "isInputPending", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isInputPending() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Scheduling"].prototype, "Scheduling", "isInputPending", arguments);
    }
  }.isInputPending
});