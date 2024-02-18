// DataTransferItem对象

bodaEnv.memory.globlProtoObj["DataTransferItem"] = function DataTransferItem() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DataTransferItem 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DataTransferItem"], "DataTransferItem");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: {
    kind() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "kind_get", arguments);
    }
  }.kind,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "getAsFile", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAsFile() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "getAsFile", arguments);
    }
  }.getAsFile
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "getAsString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAsString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "getAsString", arguments);
    }
  }.getAsString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "webkitGetAsEntry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitGetAsEntry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "webkitGetAsEntry", arguments);
    }
  }.webkitGetAsEntry
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "getAsFileSystemHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAsFileSystemHandle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItem"].prototype, "DataTransferItem", "getAsFileSystemHandle", arguments);
    }
  }.getAsFileSystemHandle
});