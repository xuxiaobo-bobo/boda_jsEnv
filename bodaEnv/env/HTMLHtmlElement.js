// HTMLHtmlElement对象

bodaEnv.memory.globlProtoObj["HTMLHtmlElement"] = function HTMLHtmlElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLHtmlElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLHtmlElement"], "HTMLHtmlElement");
bodaEnv.memory.globlProtoObj["HTMLHtmlElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLHtmlElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLHtmlElement"].prototype, "version", {
  configurable: true,
  enumerable: true,
  get: {
    version() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHtmlElement"].prototype, "HTMLHtmlElement", "version_get", arguments);
    }
  }.version,
  set: {
    version() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLHtmlElement"].prototype, "HTMLHtmlElement", "version_set", arguments);
    }
  }.version
});