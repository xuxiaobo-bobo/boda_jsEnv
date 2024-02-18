// GPUQuerySet对象

bodaEnv.memory.globlProtoObj["GPUQuerySet"] = function GPUQuerySet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUQuerySet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUQuerySet"], "GPUQuerySet");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "GPUQuerySet", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "count", {
  configurable: true,
  enumerable: true,
  get: {
    count() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "GPUQuerySet", "count_get", arguments);
    }
  }.count,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "GPUQuerySet", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "GPUQuerySet", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    destroy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUQuerySet"].prototype, "GPUQuerySet", "destroy", arguments);
    }
  }.destroy
});