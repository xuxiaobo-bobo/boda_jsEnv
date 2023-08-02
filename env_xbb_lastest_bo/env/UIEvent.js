// UIEvent对象

UIEvent = function UIEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof UIEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'UIEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('UIEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(UIEvent, "UIEvent");
UIEvent.prototype.__proto__ = Event.prototype;
UIEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "view", {
  configurable: true,
  enumerable: true,
  get: function view() {
    return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "view_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "detail_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "sourceCapabilities", {
  configurable: true,
  enumerable: true,
  get: function sourceCapabilities() {
    return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "sourceCapabilities_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "which", {
  configurable: true,
  enumerable: true,
  get: function which() {
    return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "which_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(UIEvent.prototype, "initUIEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initUIEvent() {
    return bodavm.toolsFunc.dispatch(this, UIEvent.prototype, "UIEvent", "initUIEvent", arguments);
  }
});