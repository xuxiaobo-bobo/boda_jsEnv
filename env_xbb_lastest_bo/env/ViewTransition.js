// ViewTransition对象

ViewTransition = function ViewTransition() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ViewTransition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ViewTransition 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ViewTransition, "ViewTransition");
bodavm.toolsFunc.defineProperty(ViewTransition.prototype, "finished", {
  configurable: true,
  enumerable: true,
  get: function finished() {
    return bodavm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "finished_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ViewTransition.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "ready_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ViewTransition.prototype, "updateCallbackDone", {
  configurable: true,
  enumerable: true,
  get: function updateCallbackDone() {
    return bodavm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "updateCallbackDone_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ViewTransition.prototype, "skipTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skipTransition() {
    return bodavm.toolsFunc.dispatch(this, ViewTransition.prototype, "ViewTransition", "skipTransition", arguments);
  }
});