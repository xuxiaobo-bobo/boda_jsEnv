// MessageEvent对象

MessageEvent = function MessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MessageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MessageEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MessageEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MessageEvent, "MessageEvent");
MessageEvent.prototype.__proto__ = Event.prototype;
MessageEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "origin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "lastEventId", {
  configurable: true,
  enumerable: true,
  get: function lastEventId() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "lastEventId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "source_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "ports", {
  configurable: true,
  enumerable: true,
  get: function ports() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "ports_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "userActivation", {
  configurable: true,
  enumerable: true,
  get: function userActivation() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "userActivation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MessageEvent.prototype, "initMessageEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initMessageEvent() {
    return bodavm.toolsFunc.dispatch(this, MessageEvent.prototype, "MessageEvent", "initMessageEvent", arguments);
  }
});