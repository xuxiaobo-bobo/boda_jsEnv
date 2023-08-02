// FontFaceSetLoadEvent对象

FontFaceSetLoadEvent = function FontFaceSetLoadEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FontFaceSetLoadEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FontFaceSetLoadEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FontFaceSetLoadEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FontFaceSetLoadEvent, "FontFaceSetLoadEvent");
FontFaceSetLoadEvent.prototype.__proto__ = Event.prototype;
FontFaceSetLoadEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(FontFaceSetLoadEvent.prototype, "fontfaces", {
  configurable: true,
  enumerable: true,
  get: function fontfaces() {
    return bodavm.toolsFunc.dispatch(this, FontFaceSetLoadEvent.prototype, "FontFaceSetLoadEvent", "fontfaces_get", arguments);
  },
  set: undefined
});