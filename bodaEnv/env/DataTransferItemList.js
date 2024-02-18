// DataTransferItemList对象

bodaEnv.memory.globlProtoObj["DataTransferItemList"] = function DataTransferItemList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DataTransferItemList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DataTransferItemList"], "DataTransferItemList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "DataTransferItemList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "DataTransferItemList", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "DataTransferItemList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DataTransferItemList"].prototype, "DataTransferItemList", "remove", arguments);
    }
  }.remove
});