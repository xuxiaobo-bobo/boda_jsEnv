// HTMLCollection对象

bodaEnv.memory.globlProtoObj["HTMLCollection"] = function HTMLCollection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLCollection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLCollection"], "HTMLCollection");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "HTMLCollection", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "HTMLCollection", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype, "HTMLCollection", "namedItem", arguments);
    }
  }.namedItem
});