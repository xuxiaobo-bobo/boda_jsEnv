// CookieChangeEvent对象

CookieChangeEvent = function CookieChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CookieChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CookieChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CookieChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CookieChangeEvent, "CookieChangeEvent");
CookieChangeEvent.prototype.__proto__ = Event.prototype;
CookieChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(CookieChangeEvent.prototype, "changed", {
  configurable: true,
  enumerable: true,
  get: function changed() {
    return bodavm.toolsFunc.dispatch(this, CookieChangeEvent.prototype, "CookieChangeEvent", "changed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CookieChangeEvent.prototype, "deleted", {
  configurable: true,
  enumerable: true,
  get: function deleted() {
    return bodavm.toolsFunc.dispatch(this, CookieChangeEvent.prototype, "CookieChangeEvent", "deleted_get", arguments);
  },
  set: undefined
});