// SecurityPolicyViolationEvent对象

bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"] = function SecurityPolicyViolationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SecurityPolicyViolationEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"], "SecurityPolicyViolationEvent");
bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "documentURI", {
  configurable: true,
  enumerable: true,
  get: {
    documentURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "documentURI_get", arguments);
    }
  }.documentURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: {
    referrer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "referrer_get", arguments);
    }
  }.referrer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "blockedURI", {
  configurable: true,
  enumerable: true,
  get: {
    blockedURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "blockedURI_get", arguments);
    }
  }.blockedURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "violatedDirective", {
  configurable: true,
  enumerable: true,
  get: {
    violatedDirective() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "violatedDirective_get", arguments);
    }
  }.violatedDirective,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "effectiveDirective", {
  configurable: true,
  enumerable: true,
  get: {
    effectiveDirective() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "effectiveDirective_get", arguments);
    }
  }.effectiveDirective,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "originalPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    originalPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "originalPolicy_get", arguments);
    }
  }.originalPolicy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "disposition", {
  configurable: true,
  enumerable: true,
  get: {
    disposition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "disposition_get", arguments);
    }
  }.disposition,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "sourceFile", {
  configurable: true,
  enumerable: true,
  get: {
    sourceFile() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "sourceFile_get", arguments);
    }
  }.sourceFile,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "statusCode", {
  configurable: true,
  enumerable: true,
  get: {
    statusCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "statusCode_get", arguments);
    }
  }.statusCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "lineNumber", {
  configurable: true,
  enumerable: true,
  get: {
    lineNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "lineNumber_get", arguments);
    }
  }.lineNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "columnNumber", {
  configurable: true,
  enumerable: true,
  get: {
    columnNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "columnNumber_get", arguments);
    }
  }.columnNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "sample", {
  configurable: true,
  enumerable: true,
  get: {
    sample() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SecurityPolicyViolationEvent"].prototype, "SecurityPolicyViolationEvent", "sample_get", arguments);
    }
  }.sample,
  set: undefined
});