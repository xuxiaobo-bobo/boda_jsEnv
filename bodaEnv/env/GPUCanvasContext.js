// GPUCanvasContext对象

bodaEnv.memory.globlProtoObj["GPUCanvasContext"] = function GPUCanvasContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUCanvasContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUCanvasContext"], "GPUCanvasContext");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "GPUCanvasContext", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    configure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "GPUCanvasContext", "configure", arguments);
    }
  }.configure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "getCurrentTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCurrentTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "GPUCanvasContext", "getCurrentTexture", arguments);
    }
  }.getCurrentTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "unconfigure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unconfigure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCanvasContext"].prototype, "GPUCanvasContext", "unconfigure", arguments);
    }
  }.unconfigure
});