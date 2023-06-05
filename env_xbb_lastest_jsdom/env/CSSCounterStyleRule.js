// CSSCounterStyleRule对象

bodavm.memory.globalobj['CSSCounterStyleRule'] = function CSSCounterStyleRule() {
  console.log_copy('CSSCounterStyleRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSCounterStyleRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSCounterStyleRule'], "CSSCounterStyleRule");
bodavm.memory.globalobj['CSSCounterStyleRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSCounterStyleRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "name_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "system", {
  configurable: true,
  enumerable: true,
  get: function system() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "system_get", arguments);
  },
  set: function system() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "system_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "symbols", {
  configurable: true,
  enumerable: true,
  get: function symbols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "symbols_get", arguments);
  },
  set: function symbols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "symbols_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "additiveSymbols", {
  configurable: true,
  enumerable: true,
  get: function additiveSymbols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "additiveSymbols_get", arguments);
  },
  set: function additiveSymbols() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "additiveSymbols_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "negative", {
  configurable: true,
  enumerable: true,
  get: function negative() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "negative_get", arguments);
  },
  set: function negative() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "negative_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "prefix", {
  configurable: true,
  enumerable: true,
  get: function prefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "prefix_get", arguments);
  },
  set: function prefix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "prefix_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "suffix", {
  configurable: true,
  enumerable: true,
  get: function suffix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "suffix_get", arguments);
  },
  set: function suffix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "suffix_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "range", {
  configurable: true,
  enumerable: true,
  get: function range() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "range_get", arguments);
  },
  set: function range() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "range_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "pad", {
  configurable: true,
  enumerable: true,
  get: function pad() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "pad_get", arguments);
  },
  set: function pad() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "pad_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "speakAs", {
  configurable: true,
  enumerable: true,
  get: function speakAs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "speakAs_get", arguments);
  },
  set: function speakAs() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "speakAs_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSCounterStyleRule', "fallback", {
  configurable: true,
  enumerable: true,
  get: function fallback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "fallback_get", arguments);
  },
  set: function fallback() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSCounterStyleRule'].prototype, "CSSCounterStyleRule", "fallback_set", arguments);
  }
}, 'prototype');