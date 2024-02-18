// PushManager对象

bodaEnv.memory.globlProtoObj["PushManager"] = function PushManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PushManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PushManager"], "PushManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushManager"], "supportedContentEncodings", {
  configurable: true,
  enumerable: true,
  get: {
    supportedContentEncodings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Permissions"], "PushManager", "supportedContentEncodings_get", arguments);
    }
  }.supportedContentEncodings,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushManager"].prototype, "getSubscription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSubscription() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushManager"].prototype, "PushManager", "getSubscription", arguments);
    }
  }.getSubscription
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushManager"].prototype, "permissionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    permissionState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushManager"].prototype, "PushManager", "permissionState", arguments);
    }
  }.permissionState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushManager"].prototype, "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    subscribe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushManager"].prototype, "PushManager", "subscribe", arguments);
    }
  }.subscribe
});