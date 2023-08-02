// CSSPropertyRule对象

CSSPropertyRule = function CSSPropertyRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSPropertyRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSPropertyRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSPropertyRule, "CSSPropertyRule");
CSSPropertyRule.prototype.__proto__ = CSSRule.prototype;
CSSPropertyRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "syntax", {
  configurable: true,
  enumerable: true,
  get: function syntax() {
    return bodavm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "syntax_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "inherits", {
  configurable: true,
  enumerable: true,
  get: function inherits() {
    return bodavm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "inherits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSPropertyRule.prototype, "initialValue", {
  configurable: true,
  enumerable: true,
  get: function initialValue() {
    return bodavm.toolsFunc.dispatch(this, CSSPropertyRule.prototype, "CSSPropertyRule", "initialValue_get", arguments);
  },
  set: undefined
});