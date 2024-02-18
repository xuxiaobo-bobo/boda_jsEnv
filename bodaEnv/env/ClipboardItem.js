// ClipboardItem对象

bodaEnv.memory.globlProtoObj["ClipboardItem"] = function ClipboardItem() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ClipboardItem 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ClipboardItem"], "ClipboardItem");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ClipboardItem"].prototype, "types", {
  configurable: true,
  enumerable: true,
  get: {
    types() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ClipboardItem"].prototype, "ClipboardItem", "types_get", arguments);
    }
  }.types,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ClipboardItem"].prototype, "getType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ClipboardItem"].prototype, "ClipboardItem", "getType", arguments);
    }
  }.getType
});