// StyleSheetList对象

bodaEnv.memory.globlProtoObj["StyleSheetList"] = function StyleSheetList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StyleSheetList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StyleSheetList"], "StyleSheetList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheetList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheetList"].prototype, "StyleSheetList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheetList"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheetList"].prototype, "StyleSheetList", "item", arguments);
    }
  }.item
});