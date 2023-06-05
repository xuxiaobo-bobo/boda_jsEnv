// CSSKeywordValue对象

bodavm.memory.globalobj['CSSKeywordValue'] = function CSSKeywordValue() {
  console.log_copy('CSSKeywordValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSKeywordValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSKeywordValue': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSKeywordValue'], "CSSKeywordValue");
bodavm.memory.globalobj['CSSKeywordValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSKeywordValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];
bodavm.toolsFunc.defineProperty('CSSKeywordValue', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeywordValue'].prototype, "CSSKeywordValue", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeywordValue'].prototype, "CSSKeywordValue", "value_set", arguments);
  }
}, 'prototype');