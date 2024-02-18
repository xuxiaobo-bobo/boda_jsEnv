// CanvasPattern对象

bodaEnv.memory.globlProtoObj["CanvasPattern"] = function CanvasPattern() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CanvasPattern 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CanvasPattern"], "CanvasPattern");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CanvasPattern"].prototype, "setTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CanvasPattern"].prototype, "CanvasPattern", "setTransform", arguments);
    }
  }.setTransform
});