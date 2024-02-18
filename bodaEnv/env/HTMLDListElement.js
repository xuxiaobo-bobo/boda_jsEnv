// HTMLDListElement对象

bodaEnv.memory.globlProtoObj["HTMLDListElement"] = function HTMLDListElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDListElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDListElement"], "HTMLDListElement");
bodaEnv.memory.globlProtoObj["HTMLDListElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDListElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDListElement"].prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDListElement"].prototype, "HTMLDListElement", "compact_get", arguments);
    }
  }.compact,
  set: {
    compact() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDListElement"].prototype, "HTMLDListElement", "compact_set", arguments);
    }
  }.compact
});