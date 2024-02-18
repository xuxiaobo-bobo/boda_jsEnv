// GPURenderBundle对象

bodaEnv.memory.globlProtoObj["GPURenderBundle"] = function GPURenderBundle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPURenderBundle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPURenderBundle"], "GPURenderBundle");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderBundle"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundle"].prototype, "GPURenderBundle", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderBundle"].prototype, "GPURenderBundle", "label_set", arguments);
    }
  }.label
});