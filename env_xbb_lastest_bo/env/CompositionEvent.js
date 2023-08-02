// CompositionEvent对象

CompositionEvent = function CompositionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CompositionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CompositionEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CompositionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CompositionEvent, "CompositionEvent");
CompositionEvent.prototype.__proto__ = UIEvent.prototype;
CompositionEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(CompositionEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, CompositionEvent.prototype, "CompositionEvent", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CompositionEvent.prototype, "initCompositionEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initCompositionEvent() {
    return bodavm.toolsFunc.dispatch(this, CompositionEvent.prototype, "CompositionEvent", "initCompositionEvent", arguments);
  }
});