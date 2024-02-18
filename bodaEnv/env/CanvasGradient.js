// CanvasGradient对象

bodaEnv.memory.globlProtoObj["CanvasGradient"] = function CanvasGradient() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CanvasGradient 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CanvasGradient"], "CanvasGradient");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CanvasGradient"].prototype, "addColorStop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addColorStop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CanvasGradient"].prototype, "CanvasGradient", "addColorStop", arguments);
    }
  }.addColorStop
});