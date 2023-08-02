// CSSImageValue对象

CSSImageValue = function CSSImageValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSImageValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSImageValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSImageValue, "CSSImageValue");
CSSImageValue.prototype.__proto__ = CSSStyleValue.prototype;
CSSImageValue.__proto__ = CSSStyleValue;