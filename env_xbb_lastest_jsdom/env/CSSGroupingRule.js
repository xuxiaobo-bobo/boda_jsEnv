// CSSGroupingRule对象

bodavm.memory.globalobj['CSSGroupingRule'] = function CSSGroupingRule() {
  console.log_copy('CSSGroupingRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSGroupingRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSGroupingRule'], "CSSGroupingRule");
bodavm.memory.globalobj['CSSGroupingRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSGroupingRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSGroupingRule', "cssRules", {
  configurable: true,
  enumerable: true,
  get: function cssRules() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSGroupingRule'].prototype, "CSSGroupingRule", "cssRules_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSGroupingRule', "deleteRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSGroupingRule'].prototype, "CSSGroupingRule", "deleteRule", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSGroupingRule', "insertRule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertRule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSGroupingRule'].prototype, "CSSGroupingRule", "insertRule", arguments);
  }
}, 'prototype');