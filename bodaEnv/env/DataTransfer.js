// DataTransfer对象

bodaEnv.memory.globlProtoObj["DataTransfer"] = function DataTransfer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DataTransfer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DataTransfer"], "DataTransfer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "dropEffect", {
  configurable: true,
  enumerable: true,
  get: {
    dropEffect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "dropEffect_get", arguments);
    }
  }.dropEffect,
  set: {
    dropEffect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "dropEffect_set", arguments);
    }
  }.dropEffect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "effectAllowed", {
  configurable: true,
  enumerable: true,
  get: {
    effectAllowed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "effectAllowed_get", arguments);
    }
  }.effectAllowed,
  set: {
    effectAllowed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "effectAllowed_set", arguments);
    }
  }.effectAllowed
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "items", {
  configurable: true,
  enumerable: true,
  get: {
    items() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "items_get", arguments);
    }
  }.items,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "types", {
  configurable: true,
  enumerable: true,
  get: {
    types() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "types_get", arguments);
    }
  }.types,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "files", {
  configurable: true,
  enumerable: true,
  get: {
    files() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "files_get", arguments);
    }
  }.files,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "clearData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "clearData", arguments);
    }
  }.clearData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "getData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "getData", arguments);
    }
  }.getData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "setData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "setData", arguments);
    }
  }.setData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "setDragImage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setDragImage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransfer"].prototype, "DataTransfer", "setDragImage", arguments);
    }
  }.setDragImage
});