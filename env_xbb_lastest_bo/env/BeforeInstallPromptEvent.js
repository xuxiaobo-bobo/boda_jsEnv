// BeforeInstallPromptEvent对象

BeforeInstallPromptEvent = function BeforeInstallPromptEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BeforeInstallPromptEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BeforeInstallPromptEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BeforeInstallPromptEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BeforeInstallPromptEvent, "BeforeInstallPromptEvent");
BeforeInstallPromptEvent.prototype.__proto__ = Event.prototype;
BeforeInstallPromptEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "platforms", {
  configurable: true,
  enumerable: true,
  get: function platforms() {
    return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "platforms_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "userChoice", {
  configurable: true,
  enumerable: true,
  get: function userChoice() {
    return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "userChoice_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BeforeInstallPromptEvent.prototype, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prompt() {
    return bodavm.toolsFunc.dispatch(this, BeforeInstallPromptEvent.prototype, "BeforeInstallPromptEvent", "prompt", arguments);
  }
});