// NavigationCurrentEntryChangeEvent对象

NavigationCurrentEntryChangeEvent = function NavigationCurrentEntryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigationCurrentEntryChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'NavigationCurrentEntryChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigationCurrentEntryChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigationCurrentEntryChangeEvent, "NavigationCurrentEntryChangeEvent");
NavigationCurrentEntryChangeEvent.prototype.__proto__ = Event.prototype;
NavigationCurrentEntryChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(NavigationCurrentEntryChangeEvent.prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: function navigationType() {
    return bodavm.toolsFunc.dispatch(this, NavigationCurrentEntryChangeEvent.prototype, "NavigationCurrentEntryChangeEvent", "navigationType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationCurrentEntryChangeEvent.prototype, "from", {
  configurable: true,
  enumerable: true,
  get: function from() {
    return bodavm.toolsFunc.dispatch(this, NavigationCurrentEntryChangeEvent.prototype, "NavigationCurrentEntryChangeEvent", "from_get", arguments);
  },
  set: undefined
});