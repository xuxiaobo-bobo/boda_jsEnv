// HashChangeEvent对象

HashChangeEvent = function HashChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HashChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'HashChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HashChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HashChangeEvent, "HashChangeEvent");
HashChangeEvent.prototype.__proto__ = Event.prototype;
HashChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(HashChangeEvent.prototype, "oldURL", {
  configurable: true,
  enumerable: true,
  get: function oldURL() {
    return bodavm.toolsFunc.dispatch(this, HashChangeEvent.prototype, "HashChangeEvent", "oldURL_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HashChangeEvent.prototype, "newURL", {
  configurable: true,
  enumerable: true,
  get: function newURL() {
    return bodavm.toolsFunc.dispatch(this, HashChangeEvent.prototype, "HashChangeEvent", "newURL_get", arguments);
  },
  set: undefined
});