// WindowControlsOverlayGeometryChangeEvent对象

bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"] = function WindowControlsOverlayGeometryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WindowControlsOverlayGeometryChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"], "WindowControlsOverlayGeometryChangeEvent");
bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].prototype, "titlebarAreaRect", {
  configurable: true,
  enumerable: true,
  get: {
    titlebarAreaRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].prototype, "WindowControlsOverlayGeometryChangeEvent", "titlebarAreaRect_get", arguments);
    }
  }.titlebarAreaRect,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: {
    visible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WindowControlsOverlayGeometryChangeEvent"].prototype, "WindowControlsOverlayGeometryChangeEvent", "visible_get", arguments);
    }
  }.visible,
  set: undefined
});