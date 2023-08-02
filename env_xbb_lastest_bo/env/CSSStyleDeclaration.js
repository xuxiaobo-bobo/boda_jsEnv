// CSSStyleDeclaration对象

CSSStyleDeclaration = function CSSStyleDeclaration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSStyleDeclaration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSStyleDeclaration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSStyleDeclaration, "CSSStyleDeclaration");
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
  configurable: true,
  enumerable: true,
  get: function cssText() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssText_get", arguments);
  },
  set: function cssText() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssText_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
  configurable: true,
  enumerable: true,
  get: function parentRule() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "parentRule_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
  configurable: true,
  enumerable: true,
  get: function cssFloat() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssFloat_get", arguments);
  },
  set: function cssFloat() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "cssFloat_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyPriority() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "getPropertyPriority", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "getPropertyValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPropertyValue() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "getPropertyValue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "removeProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeProperty() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "removeProperty", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSStyleDeclaration.prototype, "setProperty", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setProperty() {
    return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "setProperty", arguments);
  }
});