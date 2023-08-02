// PictureInPictureEvent对象

PictureInPictureEvent = function PictureInPictureEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PictureInPictureEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PictureInPictureEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PictureInPictureEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PictureInPictureEvent, "PictureInPictureEvent");
PictureInPictureEvent.prototype.__proto__ = Event.prototype;
PictureInPictureEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PictureInPictureEvent.prototype, "pictureInPictureWindow", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureWindow() {
    return bodavm.toolsFunc.dispatch(this, PictureInPictureEvent.prototype, "PictureInPictureEvent", "pictureInPictureWindow_get", arguments);
  },
  set: undefined
});