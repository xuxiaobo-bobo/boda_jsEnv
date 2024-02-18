// Worklet对象

bodaEnv.memory.globlProtoObj["Worklet"] = function Worklet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Worklet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Worklet"], "Worklet");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Worklet"].prototype, "addModule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addModule() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Worklet"].prototype, "Worklet", "addModule", arguments);
    }
  }.addModule
});