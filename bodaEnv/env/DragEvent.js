// DragEvent对象

bodaEnv.memory.globlProtoObj["DragEvent"] = function DragEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DragEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DragEvent"], "DragEvent");
bodaEnv.memory.globlProtoObj["DragEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"].prototype;
bodaEnv.memory.globlProtoObj["DragEvent"].__proto__ = bodaEnv.memory.globlProtoObj["MouseEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DragEvent"].prototype, "dataTransfer", {
  configurable: true,
  enumerable: true,
  get: {
    dataTransfer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DragEvent"].prototype, "DragEvent", "dataTransfer_get", arguments);
    }
  }.dataTransfer,
  set: undefined
});