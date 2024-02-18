// SubmitEvent对象

bodaEnv.memory.globlProtoObj["SubmitEvent"] = function SubmitEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SubmitEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SubmitEvent"], "SubmitEvent");
bodaEnv.memory.globlProtoObj["SubmitEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["SubmitEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubmitEvent"].prototype, "submitter", {
  configurable: true,
  enumerable: true,
  get: {
    submitter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubmitEvent"].prototype, "SubmitEvent", "submitter_get", arguments);
    }
  }.submitter,
  set: undefined
});