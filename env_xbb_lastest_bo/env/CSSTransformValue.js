// CSSTransformValue对象

CSSTransformValue = function CSSTransformValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSTransformValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSTransformValue': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSTransformValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSTransformValue, "CSSTransformValue");
CSSTransformValue.prototype.__proto__ = CSSStyleValue.prototype;
CSSTransformValue.__proto__ = CSSStyleValue;
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "values", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "is2D_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSTransformValue.prototype, "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toMatrix() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformValue.prototype, "CSSTransformValue", "toMatrix", arguments);
  }
});