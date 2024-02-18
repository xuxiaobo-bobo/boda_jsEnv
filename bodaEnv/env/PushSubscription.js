// PushSubscription对象

bodaEnv.memory.globlProtoObj["PushSubscription"] = function PushSubscription() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PushSubscription 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PushSubscription"], "PushSubscription");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "endpoint", {
  configurable: true,
  enumerable: true,
  get: {
    endpoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "endpoint_get", arguments);
    }
  }.endpoint,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "expirationTime", {
  configurable: true,
  enumerable: true,
  get: {
    expirationTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "expirationTime_get", arguments);
    }
  }.expirationTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "options", {
  configurable: true,
  enumerable: true,
  get: {
    options() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "options_get", arguments);
    }
  }.options,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "getKey", arguments);
    }
  }.getKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unsubscribe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscription"].prototype, "PushSubscription", "unsubscribe", arguments);
    }
  }.unsubscribe
});