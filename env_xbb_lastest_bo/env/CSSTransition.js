// CSSTransition对象

CSSTransition = function CSSTransition() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSTransition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSTransition 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSTransition, "CSSTransition");
CSSTransition.prototype.__proto__ = Animation.prototype;
CSSTransition.__proto__ = Animation;
bodavm.toolsFunc.defineProperty(CSSTransition.prototype, "transitionProperty", {
  configurable: true,
  enumerable: true,
  get: function transitionProperty() {
    return bodavm.toolsFunc.dispatch(this, CSSTransition.prototype, "CSSTransition", "transitionProperty_get", arguments);
  },
  set: undefined
});