// PageTransitionEvent对象

PageTransitionEvent = function PageTransitionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PageTransitionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PageTransitionEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PageTransitionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PageTransitionEvent, "PageTransitionEvent");
PageTransitionEvent.prototype.__proto__ = Event.prototype;
PageTransitionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PageTransitionEvent.prototype, "persisted", {
  configurable: true,
  enumerable: true,
  get: function persisted() {
    return bodavm.toolsFunc.dispatch(this, PageTransitionEvent.prototype, "PageTransitionEvent", "persisted_get", arguments);
  },
  set: undefined
});