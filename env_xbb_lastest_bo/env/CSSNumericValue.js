// CSSNumericValue对象

CSSNumericValue = function CSSNumericValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSNumericValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSNumericValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSNumericValue, "CSSNumericValue");
CSSNumericValue.prototype.__proto__ = CSSStyleValue.prototype;
CSSNumericValue.__proto__ = CSSStyleValue;
bodavm.toolsFunc.defineProperty(CSSNumericValue, "parse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parse() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue, "CSSNumericValue", "parse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "div", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function div() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "div", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "equals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function equals() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "equals", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "max", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function max() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "max", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "min", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function min() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "min", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "mul", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function mul() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "mul", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "sub", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sub() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "sub", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "to", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function to() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "to", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "toSum", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toSum() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "toSum", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSNumericValue.prototype, "type", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function type() {
    return bodavm.toolsFunc.dispatch(this, CSSNumericValue.prototype, "CSSNumericValue", "type", arguments);
  }
});