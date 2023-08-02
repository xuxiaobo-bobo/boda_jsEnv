// NavigateEvent对象

NavigateEvent = function NavigateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigateEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'NavigateEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigateEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigateEvent, "NavigateEvent");
NavigateEvent.prototype.__proto__ = Event.prototype;
NavigateEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: function navigationType() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "navigationType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "destination", {
  configurable: true,
  enumerable: true,
  get: function destination() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "destination_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "canTransition", {
  configurable: true,
  enumerable: true,
  get: function canTransition() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "canTransition_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "canIntercept", {
  configurable: true,
  enumerable: true,
  get: function canIntercept() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "canIntercept_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "userInitiated", {
  configurable: true,
  enumerable: true,
  get: function userInitiated() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "userInitiated_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "hashChange", {
  configurable: true,
  enumerable: true,
  get: function hashChange() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "hashChange_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "signal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "formData", {
  configurable: true,
  enumerable: true,
  get: function formData() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "formData_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "downloadRequest", {
  configurable: true,
  enumerable: true,
  get: function downloadRequest() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "downloadRequest_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "info", {
  configurable: true,
  enumerable: true,
  get: function info() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "info_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "intercept", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function intercept() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "intercept", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigateEvent.prototype, "scroll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scroll() {
    return bodavm.toolsFunc.dispatch(this, NavigateEvent.prototype, "NavigateEvent", "scroll", arguments);
  }
});