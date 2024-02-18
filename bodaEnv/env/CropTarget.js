// CropTarget对象

bodaEnv.memory.globlProtoObj["CropTarget"] = function CropTarget() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CropTarget 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CropTarget"], "CropTarget");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CropTarget"], "fromElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BrowserCaptureMediaStreamTrack"], "CropTarget", "fromElement", arguments);
    }
  }.fromElement
});