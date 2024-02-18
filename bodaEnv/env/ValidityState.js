// ValidityState对象

bodaEnv.memory.globlProtoObj["ValidityState"] = function ValidityState() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ValidityState 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ValidityState"], "ValidityState");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "valueMissing", {
  configurable: true,
  enumerable: true,
  get: {
    valueMissing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "valueMissing_get", arguments);
    }
  }.valueMissing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "typeMismatch", {
  configurable: true,
  enumerable: true,
  get: {
    typeMismatch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "typeMismatch_get", arguments);
    }
  }.typeMismatch,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "patternMismatch", {
  configurable: true,
  enumerable: true,
  get: {
    patternMismatch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "patternMismatch_get", arguments);
    }
  }.patternMismatch,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "tooLong", {
  configurable: true,
  enumerable: true,
  get: {
    tooLong() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "tooLong_get", arguments);
    }
  }.tooLong,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "tooShort", {
  configurable: true,
  enumerable: true,
  get: {
    tooShort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "tooShort_get", arguments);
    }
  }.tooShort,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "rangeUnderflow", {
  configurable: true,
  enumerable: true,
  get: {
    rangeUnderflow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "rangeUnderflow_get", arguments);
    }
  }.rangeUnderflow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "rangeOverflow", {
  configurable: true,
  enumerable: true,
  get: {
    rangeOverflow() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "rangeOverflow_get", arguments);
    }
  }.rangeOverflow,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "stepMismatch", {
  configurable: true,
  enumerable: true,
  get: {
    stepMismatch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "stepMismatch_get", arguments);
    }
  }.stepMismatch,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "badInput", {
  configurable: true,
  enumerable: true,
  get: {
    badInput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "badInput_get", arguments);
    }
  }.badInput,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "customError", {
  configurable: true,
  enumerable: true,
  get: {
    customError() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "customError_get", arguments);
    }
  }.customError,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "valid", {
  configurable: true,
  enumerable: true,
  get: {
    valid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ValidityState"].prototype, "ValidityState", "valid_get", arguments);
    }
  }.valid,
  set: undefined
});