// HTMLAllCollection对象

bodaEnv.memory.globlProtoObj["HTMLAllCollection"] = function HTMLAllCollection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLAllCollection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLAllCollection"], "HTMLAllCollection");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "HTMLAllCollection", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "HTMLAllCollection", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    namedItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAllCollection"].prototype, "HTMLAllCollection", "namedItem", arguments);
    }
  }.namedItem
});