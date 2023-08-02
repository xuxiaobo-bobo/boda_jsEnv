// CSSNamespaceRule对象

CSSNamespaceRule = function CSSNamespaceRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSNamespaceRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSNamespaceRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSNamespaceRule, "CSSNamespaceRule");
CSSNamespaceRule.prototype.__proto__ = CSSRule.prototype;
CSSNamespaceRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSNamespaceRule.prototype, "namespaceURI", {
  configurable: true,
  enumerable: true,
  get: function namespaceURI() {
    return bodavm.toolsFunc.dispatch(this, CSSNamespaceRule.prototype, "CSSNamespaceRule", "namespaceURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSNamespaceRule.prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, CSSNamespaceRule.prototype, "CSSNamespaceRule", "prefix_get", arguments);
  },
  set: undefined
});