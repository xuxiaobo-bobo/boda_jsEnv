// SpeechSynthesisErrorEvent对象

SpeechSynthesisErrorEvent = function SpeechSynthesisErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SpeechSynthesisErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SpeechSynthesisErrorEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SpeechSynthesisErrorEvent, "SpeechSynthesisErrorEvent");
SpeechSynthesisErrorEvent.prototype.__proto__ = SpeechSynthesisEvent.prototype;
SpeechSynthesisErrorEvent.__proto__ = SpeechSynthesisEvent;
bodavm.toolsFunc.defineProperty(SpeechSynthesisErrorEvent.prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, SpeechSynthesisErrorEvent.prototype, "SpeechSynthesisErrorEvent", "error_get", arguments);
  },
  set: undefined
});