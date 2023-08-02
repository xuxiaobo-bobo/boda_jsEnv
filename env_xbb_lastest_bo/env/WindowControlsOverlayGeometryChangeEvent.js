// WindowControlsOverlayGeometryChangeEvent对象

WindowControlsOverlayGeometryChangeEvent = function WindowControlsOverlayGeometryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WindowControlsOverlayGeometryChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WindowControlsOverlayGeometryChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WindowControlsOverlayGeometryChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WindowControlsOverlayGeometryChangeEvent, "WindowControlsOverlayGeometryChangeEvent");
WindowControlsOverlayGeometryChangeEvent.prototype.__proto__ = Event.prototype;
WindowControlsOverlayGeometryChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(WindowControlsOverlayGeometryChangeEvent.prototype, "titlebarAreaRect", {
  configurable: true,
  enumerable: true,
  get: function titlebarAreaRect() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlayGeometryChangeEvent.prototype, "WindowControlsOverlayGeometryChangeEvent", "titlebarAreaRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WindowControlsOverlayGeometryChangeEvent.prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlayGeometryChangeEvent.prototype, "WindowControlsOverlayGeometryChangeEvent", "visible_get", arguments);
  },
  set: undefined
});