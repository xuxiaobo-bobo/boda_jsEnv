// CSSStyleDeclaration对象

bodavm.memory.globalobj['CSSStyleDeclaration'] = function CSSStyleDeclaration() {
  console.log_copy('CSSStyleDeclaration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSStyleDeclaration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSStyleDeclaration'], "CSSStyleDeclaration");
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "cssText", {
  configurable: true,
  enumerable: true,
  get: function cssText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "cssText_get", arguments);
  },
  set: function cssText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "cssText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "parentRule", {
  configurable: true,
  enumerable: true,
  get: function parentRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "parentRule_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "cssFloat", {
  configurable: true,
  enumerable: true,
  get: function cssFloat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "cssFloat_get", arguments);
  },
  set: function cssFloat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "cssFloat_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "getPropertyPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyPriority() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "getPropertyPriority", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "getPropertyValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "getPropertyValue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "removeProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeProperty() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "removeProperty", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleDeclaration', "setProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setProperty() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleDeclaration'].prototype, "CSSStyleDeclaration", "setProperty", arguments);
  }
}, 'prototype');