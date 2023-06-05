// CSSStyleRule对象

bodavm.memory.globalobj['CSSStyleRule'] = function CSSStyleRule() {
  console.log_copy('CSSStyleRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSStyleRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSStyleRule'], "CSSStyleRule");
bodavm.memory.globalobj['CSSStyleRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSStyleRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSStyleRule', "selectorText", {
  configurable: true,
  enumerable: true,
  get: function selectorText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "selectorText_get", arguments);
  },
  set: function selectorText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "selectorText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleRule', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "style_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleRule', "styleMap", {
  configurable: true,
  enumerable: true,
  get: function styleMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "styleMap_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleRule', "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "cssRules_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleRule', "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "deleteRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleRule', "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleRule'].prototype, "CSSStyleRule", "insertRule", arguments);
  }
}, 'prototype');