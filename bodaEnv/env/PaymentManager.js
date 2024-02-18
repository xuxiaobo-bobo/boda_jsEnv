// PaymentManager对象

bodaEnv.memory.globlProtoObj["PaymentManager"] = function PaymentManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentManager"], "PaymentManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentManager"].prototype, "userHint", {
  configurable: true,
  enumerable: true,
  get: {
    userHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentManager"].prototype, "PaymentManager", "userHint_get", arguments);
    }
  }.userHint,
  set: {
    userHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentManager"].prototype, "PaymentManager", "userHint_set", arguments);
    }
  }.userHint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentManager"].prototype, "enableDelegations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enableDelegations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentManager"].prototype, "PaymentManager", "enableDelegations", arguments);
    }
  }.enableDelegations
});