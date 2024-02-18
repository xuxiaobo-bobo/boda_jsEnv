// BackgroundFetchRecord对象

bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"] = function BackgroundFetchRecord() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BackgroundFetchRecord 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"], "BackgroundFetchRecord");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"].prototype, "request", {
  configurable: true,
  enumerable: true,
  get: {
    request() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"].prototype, "BackgroundFetchRecord", "request_get", arguments);
    }
  }.request,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"].prototype, "responseReady", {
  configurable: true,
  enumerable: true,
  get: {
    responseReady() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRecord"].prototype, "BackgroundFetchRecord", "responseReady_get", arguments);
    }
  }.responseReady,
  set: undefined
});