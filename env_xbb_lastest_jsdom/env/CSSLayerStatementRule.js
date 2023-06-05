// CSSLayerStatementRule对象

bodavm.memory.globalobj['CSSLayerStatementRule'] = function CSSLayerStatementRule() {
  console.log_copy('CSSLayerStatementRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSLayerStatementRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSLayerStatementRule'], "CSSLayerStatementRule");
bodavm.memory.globalobj['CSSLayerStatementRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSLayerStatementRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSLayerStatementRule', "nameList", {
  configurable: true,
  enumerable: true,
  get: function nameList() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSLayerStatementRule'].prototype, "CSSLayerStatementRule", "nameList_get", arguments);
  },
  set: undefined
}, 'prototype');