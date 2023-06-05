// CSSKeyframeRule对象

bodavm.memory.globalobj['CSSKeyframeRule'] = function CSSKeyframeRule() {
  console.log_copy('CSSKeyframeRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSKeyframeRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSKeyframeRule'], "CSSKeyframeRule");
bodavm.memory.globalobj['CSSKeyframeRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSRule'].prototype;
bodavm.memory.globalobj['CSSKeyframeRule'].__proto__ = bodavm.memory.globalobj['CSSRule'];
bodavm.toolsFunc.defineProperty('CSSKeyframeRule', "keyText", {
  configurable: true,
  enumerable: true,
  get: function keyText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframeRule'].prototype, "CSSKeyframeRule", "keyText_get", arguments);
  },
  set: function keyText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframeRule'].prototype, "CSSKeyframeRule", "keyText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSKeyframeRule', "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframeRule'].prototype, "CSSKeyframeRule", "style_get", arguments);
  },
  set: function style() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSKeyframeRule'].prototype, "CSSKeyframeRule", "style_set", arguments);
  }
}, 'prototype');