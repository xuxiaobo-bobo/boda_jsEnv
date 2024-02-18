// HTMLQuoteElement对象

bodaEnv.memory.globlProtoObj["HTMLQuoteElement"] = function HTMLQuoteElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLQuoteElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLQuoteElement"], "HTMLQuoteElement");
bodaEnv.memory.globlProtoObj["HTMLQuoteElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLQuoteElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLQuoteElement"].prototype, "cite", {
  configurable: true,
  enumerable: true,
  get: {
    cite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLQuoteElement"].prototype, "HTMLQuoteElement", "cite_get", arguments);
    }
  }.cite,
  set: {
    cite() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLQuoteElement"].prototype, "HTMLQuoteElement", "cite_set", arguments);
    }
  }.cite
});