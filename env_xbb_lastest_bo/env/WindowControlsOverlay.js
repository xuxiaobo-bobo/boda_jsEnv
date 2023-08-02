// WindowControlsOverlay对象

WindowControlsOverlay = function WindowControlsOverlay() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WindowControlsOverlay)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WindowControlsOverlay 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WindowControlsOverlay, "WindowControlsOverlay");
WindowControlsOverlay.prototype.__proto__ = EventTarget.prototype;
WindowControlsOverlay.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "visible_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "ongeometrychange", {
  configurable: true,
  enumerable: true,
  get: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "ongeometrychange_get", arguments);
  },
  set: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "ongeometrychange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(WindowControlsOverlay.prototype, "getTitlebarAreaRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTitlebarAreaRect() {
    return bodavm.toolsFunc.dispatch(this, WindowControlsOverlay.prototype, "WindowControlsOverlay", "getTitlebarAreaRect", arguments);
  }
});