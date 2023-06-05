// CSSStyleSheet对象

bodavm.memory.globalobj['CSSStyleSheet'] = function CSSStyleSheet() {
  console.log_copy('CSSStyleSheet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.CSSStyleSheet();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSStyleSheet'], "CSSStyleSheet");
bodavm.memory.globalobj['CSSStyleSheet'].prototype.__proto__ = bodavm.memory.globalobj['StyleSheet'].prototype;
bodavm.memory.globalobj['CSSStyleSheet'].__proto__ = bodavm.memory.globalobj['StyleSheet'];
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "ownerRule", {
  configurable: true,
  enumerable: true,
  get: function ownerRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "ownerRule_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "cssRules_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "rules", {
  configurable: true,
  enumerable: true,
  get: function rules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "rules_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "addRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "addRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "deleteRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "insertRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "removeRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "removeRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "replace", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSStyleSheet', "replaceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceSync() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSStyleSheet'].prototype, "CSSStyleSheet", "replaceSync", arguments);
  }
}, 'prototype');