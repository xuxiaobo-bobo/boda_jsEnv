// ResizeObserverSize对象

bodaEnv.memory.globlProtoObj["ResizeObserverSize"] = function ResizeObserverSize() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ResizeObserverSize 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ResizeObserverSize"], "ResizeObserverSize");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverSize"].prototype, "inlineSize", {
  configurable: true,
  enumerable: true,
  get: {
    inlineSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverSize"].prototype, "ResizeObserverSize", "inlineSize_get", arguments);
    }
  }.inlineSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ResizeObserverSize"].prototype, "blockSize", {
  configurable: true,
  enumerable: true,
  get: {
    blockSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ResizeObserverSize"].prototype, "ResizeObserverSize", "blockSize_get", arguments);
    }
  }.blockSize,
  set: undefined
});