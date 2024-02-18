// documentPictureInPicture对象

// DocumentPictureInPicture对象

bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"] = function DocumentPictureInPicture() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DocumentPictureInPicture 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"], "DocumentPictureInPicture");
bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "window", {
  configurable: true,
  enumerable: true,
  get: {
    window() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "DocumentPictureInPicture", "window_get", arguments);
    }
  }.window,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "onenter", {
  configurable: true,
  enumerable: true,
  get: {
    onenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "DocumentPictureInPicture", "onenter_get", arguments);
    }
  }.onenter,
  set: {
    onenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "DocumentPictureInPicture", "onenter_set", arguments);
    }
  }.onenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "requestWindow", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestWindow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"].prototype, "DocumentPictureInPicture", "requestWindow", arguments);
    }
  }.requestWindow
});
bodaEnv.memory.globlProtoObj["documentPictureInPicture"] = new bodaEnv.memory.globlProtoObj["DocumentPictureInPicture"]('bobo');