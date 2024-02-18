// HTMLBRElement对象

bodaEnv.memory.globlProtoObj["HTMLBRElement"] = function HTMLBRElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLBRElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLBRElement"], "HTMLBRElement");
bodaEnv.memory.globlProtoObj["HTMLBRElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLBRElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLBRElement"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  get: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBRElement"].prototype, "HTMLBRElement", "clear_get", arguments);
    }
  }.clear,
  set: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLBRElement"].prototype, "HTMLBRElement", "clear_set", arguments);
    }
  }.clear
});