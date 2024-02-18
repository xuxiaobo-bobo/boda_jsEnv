// HTMLMenuElement对象

bodaEnv.memory.globlProtoObj["HTMLMenuElement"] = function HTMLMenuElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLMenuElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLMenuElement"], "HTMLMenuElement");
bodaEnv.memory.globlProtoObj["HTMLMenuElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLMenuElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLMenuElement"].prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMenuElement"].prototype, "HTMLMenuElement", "compact_get", arguments);
    }
  }.compact,
  set: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLMenuElement"].prototype, "HTMLMenuElement", "compact_set", arguments);
    }
  }.compact
});