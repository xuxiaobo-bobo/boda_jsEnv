// WindowControlsOverlay对象

bodaEnv.memory.globlProtoObj["WindowControlsOverlay"] = function WindowControlsOverlay() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WindowControlsOverlay 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WindowControlsOverlay"], "WindowControlsOverlay");
bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: {
    visible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "WindowControlsOverlay", "visible_get", arguments);
    }
  }.visible,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "ongeometrychange", {
  configurable: true,
  enumerable: true,
  get: {
    ongeometrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "WindowControlsOverlay", "ongeometrychange_get", arguments);
    }
  }.ongeometrychange,
  set: {
    ongeometrychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "WindowControlsOverlay", "ongeometrychange_set", arguments);
    }
  }.ongeometrychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "getTitlebarAreaRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTitlebarAreaRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlay"].prototype, "WindowControlsOverlay", "getTitlebarAreaRect", arguments);
    }
  }.getTitlebarAreaRect
});