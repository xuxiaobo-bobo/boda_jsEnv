// TransitionEvent对象

TransitionEvent = function TransitionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TransitionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TransitionEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TransitionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TransitionEvent, "TransitionEvent");
TransitionEvent.prototype.__proto__ = Event.prototype;
TransitionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(TransitionEvent.prototype, "propertyName", {
  configurable: true,
  enumerable: true,
  get: function propertyName() {
    return bodavm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "propertyName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TransitionEvent.prototype, "elapsedTime", {
  configurable: true,
  enumerable: true,
  get: function elapsedTime() {
    return bodavm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "elapsedTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TransitionEvent.prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, TransitionEvent.prototype, "TransitionEvent", "pseudoElement_get", arguments);
  },
  set: undefined
});