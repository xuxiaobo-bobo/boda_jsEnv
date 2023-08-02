// CSSPerspective对象

CSSPerspective = function CSSPerspective() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSPerspective)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPerspective': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSPerspective 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSPerspective, "CSSPerspective");
CSSPerspective.prototype.__proto__ = CSSTransformComponent.prototype;
CSSPerspective.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSPerspective.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSPerspective.prototype, "CSSPerspective", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, CSSPerspective.prototype, "CSSPerspective", "length_set", arguments);
  }
});