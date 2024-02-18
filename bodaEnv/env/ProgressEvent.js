// ProgressEvent对象

bodaEnv.memory.globlProtoObj["ProgressEvent"] = function ProgressEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ProgressEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ProgressEvent"], "ProgressEvent");
bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["ProgressEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "lengthComputable", {
  configurable: true,
  enumerable: true,
  get: {
    lengthComputable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "ProgressEvent", "lengthComputable_get", arguments);
    }
  }.lengthComputable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "loaded", {
  configurable: true,
  enumerable: true,
  get: {
    loaded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "ProgressEvent", "loaded_get", arguments);
    }
  }.loaded,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "total", {
  configurable: true,
  enumerable: true,
  get: {
    total() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ProgressEvent"].prototype, "ProgressEvent", "total_get", arguments);
    }
  }.total,
  set: undefined
});