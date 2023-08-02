// CSSTranslate对象

CSSTranslate = function CSSTranslate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSTranslate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSTranslate': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSTranslate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSTranslate, "CSSTranslate");
CSSTranslate.prototype.__proto__ = CSSTransformComponent.prototype;
CSSTranslate.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSTranslate.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTranslate.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTranslate.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, CSSTranslate.prototype, "CSSTranslate", "z_set", arguments);
  }
});