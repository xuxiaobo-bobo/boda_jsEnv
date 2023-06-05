// SecurityPolicyViolationEvent对象

bodavm.memory.globalobj['SecurityPolicyViolationEvent'] = function SecurityPolicyViolationEvent() {
  console.log_copy('SecurityPolicyViolationEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SecurityPolicyViolationEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SecurityPolicyViolationEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SecurityPolicyViolationEvent'], "SecurityPolicyViolationEvent");
bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['SecurityPolicyViolationEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "documentURI", {
  configurable: true,
  enumerable: true,
  get: function documentURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "documentURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "referrer", {
  configurable: true,
  enumerable: true,
  get: function referrer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "referrer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "blockedURI", {
  configurable: true,
  enumerable: true,
  get: function blockedURI() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "blockedURI_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "violatedDirective", {
  configurable: true,
  enumerable: true,
  get: function violatedDirective() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "violatedDirective_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "effectiveDirective", {
  configurable: true,
  enumerable: true,
  get: function effectiveDirective() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "effectiveDirective_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "originalPolicy", {
  configurable: true,
  enumerable: true,
  get: function originalPolicy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "originalPolicy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "disposition", {
  configurable: true,
  enumerable: true,
  get: function disposition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "disposition_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "sourceFile", {
  configurable: true,
  enumerable: true,
  get: function sourceFile() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "sourceFile_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "statusCode", {
  configurable: true,
  enumerable: true,
  get: function statusCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "statusCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "lineNumber", {
  configurable: true,
  enumerable: true,
  get: function lineNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "lineNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "columnNumber", {
  configurable: true,
  enumerable: true,
  get: function columnNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "columnNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SecurityPolicyViolationEvent', "sample", {
  configurable: true,
  enumerable: true,
  get: function sample() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SecurityPolicyViolationEvent'].prototype, "SecurityPolicyViolationEvent", "sample_get", arguments);
  },
  set: undefined
}, 'prototype');