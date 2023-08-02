// EventTarget对象

EventTarget = function EventTarget() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('EventTarget 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(EventTarget, "EventTarget");
bodavm.toolsFunc.defineProperty(EventTarget.prototype, "addEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addEventListener() {
    return bodavm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTarget", "addEventListener", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventTarget.prototype, "dispatchEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function dispatchEvent() {
    return bodavm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTarget", "dispatchEvent", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventTarget.prototype, "removeEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeEventListener() {
    return bodavm.toolsFunc.dispatch(this, EventTarget.prototype, "EventTarget", "removeEventListener", arguments);
  }
});