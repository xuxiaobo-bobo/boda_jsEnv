// CanvasCaptureMediaStreamTrack对象

bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"] = function CanvasCaptureMediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CanvasCaptureMediaStreamTrack 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"], "CanvasCaptureMediaStreamTrack");
bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype;
bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].prototype, "CanvasCaptureMediaStreamTrack", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].prototype, "requestFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CanvasCaptureMediaStreamTrack"].prototype, "CanvasCaptureMediaStreamTrack", "requestFrame", arguments);
    }
  }.requestFrame
});