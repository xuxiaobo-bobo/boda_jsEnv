// CSSImportRule对象

CSSImportRule = function CSSImportRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSImportRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSImportRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSImportRule, "CSSImportRule");
CSSImportRule.prototype.__proto__ = CSSRule.prototype;
CSSImportRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSImportRule.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "href_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSImportRule.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSImportRule.prototype, "styleSheet", {
  configurable: true,
  enumerable: true,
  get: function styleSheet() {
    return bodavm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "styleSheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSImportRule.prototype, "layerName", {
  configurable: true,
  enumerable: true,
  get: function layerName() {
    return bodavm.toolsFunc.dispatch(this, CSSImportRule.prototype, "CSSImportRule", "layerName_get", arguments);
  },
  set: undefined
});