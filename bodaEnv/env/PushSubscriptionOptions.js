// PushSubscriptionOptions对象

bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"] = function PushSubscriptionOptions() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PushSubscriptionOptions 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"], "PushSubscriptionOptions");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"].prototype, "userVisibleOnly", {
  configurable: true,
  enumerable: true,
  get: {
    userVisibleOnly() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"].prototype, "PushSubscriptionOptions", "userVisibleOnly_get", arguments);
    }
  }.userVisibleOnly,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"].prototype, "applicationServerKey", {
  configurable: true,
  enumerable: true,
  get: {
    applicationServerKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PushSubscriptionOptions"].prototype, "PushSubscriptionOptions", "applicationServerKey_get", arguments);
    }
  }.applicationServerKey,
  set: undefined
});