// CSSSkewX对象

CSSSkewX = function CSSSkewX() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSSkewX)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSSkewX': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSSkewX 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSSkewX, "CSSSkewX");
CSSSkewX.prototype.__proto__ = CSSTransformComponent.prototype;
CSSSkewX.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSSkewX.prototype, "ax", {
  configurable: true,
  enumerable: true,
  get: function ax() {
    return bodavm.toolsFunc.dispatch(this, CSSSkewX.prototype, "CSSSkewX", "ax_get", arguments);
  },
  set: function ax() {
    return bodavm.toolsFunc.dispatch(this, CSSSkewX.prototype, "CSSSkewX", "ax_set", arguments);
  }
});