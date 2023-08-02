// HIDConnectionEvent对象

HIDConnectionEvent = function HIDConnectionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HIDConnectionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'HIDConnectionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HIDConnectionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HIDConnectionEvent, "HIDConnectionEvent");
HIDConnectionEvent.prototype.__proto__ = Event.prototype;
HIDConnectionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(HIDConnectionEvent.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, HIDConnectionEvent.prototype, "HIDConnectionEvent", "device_get", arguments);
  },
  set: undefined
});