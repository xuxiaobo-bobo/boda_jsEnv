// CSSNamespaceRule对象

bodaEnv.memory.globlProtoObj["CSSNamespaceRule"] = function CSSNamespaceRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSNamespaceRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSNamespaceRule"], "CSSNamespaceRule");
bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: {
    namespaceURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].prototype, "CSSNamespaceRule", "namespaceURI_get", arguments);
    }
  }.namespaceURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: {
    prefix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNamespaceRule"].prototype, "CSSNamespaceRule", "prefix_get", arguments);
    }
  }.prefix,
  set: undefined
});