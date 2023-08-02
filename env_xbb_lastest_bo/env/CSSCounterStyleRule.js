// CSSCounterStyleRule对象

CSSCounterStyleRule = function CSSCounterStyleRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSCounterStyleRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSCounterStyleRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSCounterStyleRule, "CSSCounterStyleRule");
CSSCounterStyleRule.prototype.__proto__ = CSSRule.prototype;
CSSCounterStyleRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "system", {
  configurable: true,
  enumerable: true,
  get: function system() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "system_get", arguments);
  },
  set: function system() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "system_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "symbols", {
  configurable: true,
  enumerable: true,
  get: function symbols() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "symbols_get", arguments);
  },
  set: function symbols() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "symbols_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "additiveSymbols", {
  configurable: true,
  enumerable: true,
  get: function additiveSymbols() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "additiveSymbols_get", arguments);
  },
  set: function additiveSymbols() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "additiveSymbols_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "negative", {
  configurable: true,
  enumerable: true,
  get: function negative() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "negative_get", arguments);
  },
  set: function negative() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "negative_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "prefix_get", arguments);
  },
  set: function prefix() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "prefix_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "suffix", {
  configurable: true,
  enumerable: true,
  get: function suffix() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "suffix_get", arguments);
  },
  set: function suffix() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "suffix_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "range", {
  configurable: true,
  enumerable: true,
  get: function range() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "range_get", arguments);
  },
  set: function range() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "range_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "pad", {
  configurable: true,
  enumerable: true,
  get: function pad() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "pad_get", arguments);
  },
  set: function pad() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "pad_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "speakAs", {
  configurable: true,
  enumerable: true,
  get: function speakAs() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "speakAs_get", arguments);
  },
  set: function speakAs() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "speakAs_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSCounterStyleRule.prototype, "fallback", {
  configurable: true,
  enumerable: true,
  get: function fallback() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "fallback_get", arguments);
  },
  set: function fallback() {
    return bodavm.toolsFunc.dispatch(this, CSSCounterStyleRule.prototype, "CSSCounterStyleRule", "fallback_set", arguments);
  }
});