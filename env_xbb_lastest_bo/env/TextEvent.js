// TextEvent对象

TextEvent = function TextEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextEvent, "TextEvent");
TextEvent.prototype.__proto__ = UIEvent.prototype;
TextEvent.__proto__ = UIEvent;
bodavm.toolsFunc.defineProperty(TextEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, TextEvent.prototype, "TextEvent", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextEvent.prototype, "initTextEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initTextEvent() {
    return bodavm.toolsFunc.dispatch(this, TextEvent.prototype, "TextEvent", "initTextEvent", arguments);
  }
});