// PictureInPictureEvent对象

bodaEnv.memory.globlProtoObj["PictureInPictureEvent"] = function PictureInPictureEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PictureInPictureEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PictureInPictureEvent"], "PictureInPictureEvent");
bodaEnv.memory.globlProtoObj["PictureInPictureEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PictureInPictureEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PictureInPictureEvent"].prototype, "pictureInPictureWindow", {
  configurable: true,
  enumerable: true,
  get: {
    pictureInPictureWindow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PictureInPictureEvent"].prototype, "PictureInPictureEvent", "pictureInPictureWindow_get", arguments);
    }
  }.pictureInPictureWindow,
  set: undefined
});