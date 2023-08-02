// EventCounts对象

EventCounts = function EventCounts() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof EventCounts)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('EventCounts 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(EventCounts, "EventCounts");
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(EventCounts.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, EventCounts.prototype, "EventCounts", "values", arguments);
  }
});