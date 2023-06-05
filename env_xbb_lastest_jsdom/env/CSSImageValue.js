// CSSImageValue对象

bodavm.memory.globalobj['CSSImageValue'] = function CSSImageValue() {
  console.log_copy('CSSImageValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSImageValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSImageValue'], "CSSImageValue");
bodavm.memory.globalobj['CSSImageValue'].prototype.__proto__ = bodavm.memory.globalobj['CSSStyleValue'].prototype;
bodavm.memory.globalobj['CSSImageValue'].__proto__ = bodavm.memory.globalobj['CSSStyleValue'];