// BrowserCaptureMediaStreamTrack对象

bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"] = function BrowserCaptureMediaStreamTrack() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BrowserCaptureMediaStreamTrack 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"], "BrowserCaptureMediaStreamTrack");
bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"].prototype;
bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"].__proto__ = bodaEnv.memory.globlProtoObj["MediaStreamTrack"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"].prototype, "cropTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cropTo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"].prototype, "BrowserCaptureMediaStreamTrack", "cropTo", arguments);
    }
  }.cropTo
});