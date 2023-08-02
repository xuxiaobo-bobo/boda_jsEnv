// NavigationTransition对象

NavigationTransition = function NavigationTransition() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigationTransition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigationTransition 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigationTransition, "NavigationTransition");
bodavm.toolsFunc.defineProperty(NavigationTransition.prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: function navigationType() {
    return bodavm.toolsFunc.dispatch(this, NavigationTransition.prototype, "NavigationTransition", "navigationType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationTransition.prototype, "from", {
  configurable: true,
  enumerable: true,
  get: function from() {
    return bodavm.toolsFunc.dispatch(this, NavigationTransition.prototype, "NavigationTransition", "from_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationTransition.prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, NavigationTransition.prototype, "NavigationTransition", "finished_get", arguments);
  },
  set: undefined
});