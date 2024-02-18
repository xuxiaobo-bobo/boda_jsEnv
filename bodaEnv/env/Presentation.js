// Presentation对象

bodaEnv.memory.globlProtoObj["Presentation"] = function Presentation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Presentation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Presentation"], "Presentation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Presentation"].prototype, "defaultRequest", {
  configurable: true,
  enumerable: true,
  get: {
    defaultRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Presentation"].prototype, "Presentation", "defaultRequest_get", arguments);
    }
  }.defaultRequest,
  set: {
    defaultRequest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Presentation"].prototype, "Presentation", "defaultRequest_set", arguments);
    }
  }.defaultRequest
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Presentation"].prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: {
    receiver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Presentation"].prototype, "Presentation", "receiver_get", arguments);
    }
  }.receiver,
  set: undefined
});