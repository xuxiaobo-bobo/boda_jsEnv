// PictureInPictureWindow对象

bodaEnv.memory.globlProtoObj["PictureInPictureWindow"] = function PictureInPictureWindow() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PictureInPictureWindow 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PictureInPictureWindow"], "PictureInPictureWindow");
bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "PictureInPictureWindow", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "PictureInPictureWindow", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "PictureInPictureWindow", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PictureInPictureWindow"].prototype, "PictureInPictureWindow", "onresize_set", arguments);
    }
  }.onresize
});