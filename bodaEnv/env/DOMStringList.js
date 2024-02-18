// DOMStringList对象

bodaEnv.memory.globlProtoObj["DOMStringList"] = function DOMStringList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMStringList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMStringList"], "DOMStringList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "DOMStringList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    contains() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "DOMStringList", "contains", arguments);
    }
  }.contains
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMStringList"].prototype, "DOMStringList", "item", arguments);
    }
  }.item
});