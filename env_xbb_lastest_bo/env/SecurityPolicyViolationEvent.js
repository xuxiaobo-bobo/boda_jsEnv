// SecurityPolicyViolationEvent对象

SecurityPolicyViolationEvent = function SecurityPolicyViolationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SecurityPolicyViolationEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SecurityPolicyViolationEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SecurityPolicyViolationEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SecurityPolicyViolationEvent, "SecurityPolicyViolationEvent");
SecurityPolicyViolationEvent.prototype.__proto__ = Event.prototype;
SecurityPolicyViolationEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "documentURI", {
  configurable: true,
  enumerable: true,
  get: function documentURI() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "documentURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: function referrer() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "referrer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "blockedURI", {
  configurable: true,
  enumerable: true,
  get: function blockedURI() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "blockedURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "violatedDirective", {
  configurable: true,
  enumerable: true,
  get: function violatedDirective() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "violatedDirective_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "effectiveDirective", {
  configurable: true,
  enumerable: true,
  get: function effectiveDirective() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "effectiveDirective_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "originalPolicy", {
  configurable: true,
  enumerable: true,
  get: function originalPolicy() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "originalPolicy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "disposition", {
  configurable: true,
  enumerable: true,
  get: function disposition() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "disposition_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "sourceFile", {
  configurable: true,
  enumerable: true,
  get: function sourceFile() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "sourceFile_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "statusCode", {
  configurable: true,
  enumerable: true,
  get: function statusCode() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "statusCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "lineNumber", {
  configurable: true,
  enumerable: true,
  get: function lineNumber() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "lineNumber_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "columnNumber", {
  configurable: true,
  enumerable: true,
  get: function columnNumber() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "columnNumber_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SecurityPolicyViolationEvent.prototype, "sample", {
  configurable: true,
  enumerable: true,
  get: function sample() {
    return bodavm.toolsFunc.dispatch(this, SecurityPolicyViolationEvent.prototype, "SecurityPolicyViolationEvent", "sample_get", arguments);
  },
  set: undefined
});