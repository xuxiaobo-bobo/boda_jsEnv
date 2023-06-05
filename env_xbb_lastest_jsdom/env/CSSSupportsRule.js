// CSSSupportsRule对象

bodavm.memory.globalobj['CSSSupportsRule'] = function CSSSupportsRule() {
  console.log_copy('CSSSupportsRule 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSSupportsRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSSupportsRule'], "CSSSupportsRule");
bodavm.memory.globalobj['CSSSupportsRule'].prototype.__proto__ = bodavm.memory.globalobj['CSSConditionRule'].prototype;
bodavm.memory.globalobj['CSSSupportsRule'].__proto__ = bodavm.memory.globalobj['CSSConditionRule'];