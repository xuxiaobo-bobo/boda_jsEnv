// FocusEvent对象

FocusEvent = function FocusEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FocusEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'FocusEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FocusEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FocusEvent, "FocusEvent");
FocusEvent.prototype.__proto__ = UIEvent.prototype;
FocusEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(FocusEvent.prototype, "relatedTarget", {
  configurable: true,
  enumerable: true,
  get: function relatedTarget() {
    return bodavm.toolsFunc.dispatch(this, FocusEvent.prototype, "FocusEvent", "relatedTarget_get", arguments);
  },
  set: undefined
});