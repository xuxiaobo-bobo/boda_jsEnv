// CSSRotate对象

CSSRotate = function CSSRotate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSRotate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSRotate': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSRotate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSRotate, "CSSRotate");
CSSRotate.prototype.__proto__ = CSSTransformComponent.prototype;
CSSRotate.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSRotate.prototype, "angle", {
  configurable: true,
  enumerable: true,
  get: function angle() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "angle_get", arguments);
  },
  set: function angle() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "angle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSRotate.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSRotate.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSRotate.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "z_get", arguments);
  },
  set: function z() {
    return bodavm.toolsFunc.dispatch(this, CSSRotate.prototype, "CSSRotate", "z_set", arguments);
  }
});