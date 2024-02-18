// GPUSampler对象

bodaEnv.memory.globlProtoObj["GPUSampler"] = function GPUSampler() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUSampler 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUSampler"], "GPUSampler");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUSampler"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSampler"].prototype, "GPUSampler", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUSampler"].prototype, "GPUSampler", "label_set", arguments);
    }
  }.label
});