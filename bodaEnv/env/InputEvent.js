// InputEvent对象

bodaEnv.memory.globlProtoObj["InputEvent"] = function InputEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('InputEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["InputEvent"], "InputEvent");
bodaEnv.memory.globlProtoObj["InputEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["InputEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "InputEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "isComposing", {
  configurable: true,
  enumerable: true,
  get: {
    isComposing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "InputEvent", "isComposing_get", arguments);
    }
  }.isComposing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "inputType", {
  configurable: true,
  enumerable: true,
  get: {
    inputType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "InputEvent", "inputType_get", arguments);
    }
  }.inputType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "dataTransfer", {
  configurable: true,
  enumerable: true,
  get: {
    dataTransfer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "InputEvent", "dataTransfer_get", arguments);
    }
  }.dataTransfer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "getTargetRanges", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTargetRanges() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["InputEvent"].prototype, "InputEvent", "getTargetRanges", arguments);
    }
  }.getTargetRanges
});