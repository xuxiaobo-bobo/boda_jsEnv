// ImageCapture对象

bodaEnv.memory.globlProtoObj["ImageCapture"] = function ImageCapture() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageCapture 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageCapture"], "ImageCapture");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "ImageCapture", "track_get", arguments);
    }
  }.track,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "getPhotoCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPhotoCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "ImageCapture", "getPhotoCapabilities", arguments);
    }
  }.getPhotoCapabilities
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "getPhotoSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPhotoSettings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "ImageCapture", "getPhotoSettings", arguments);
    }
  }.getPhotoSettings
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "grabFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    grabFrame() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "ImageCapture", "grabFrame", arguments);
    }
  }.grabFrame
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "takePhoto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    takePhoto() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageCapture"].prototype, "ImageCapture", "takePhoto", arguments);
    }
  }.takePhoto
});