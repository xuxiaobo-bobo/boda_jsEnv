// History对象

History = function History() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof History)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('History 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(History, "History");
bodavm.toolsFunc.defineProperty(History.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(History.prototype, "scrollRestoration", {
  configurable: true,
  enumerable: true,
  get: function scrollRestoration() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "scrollRestoration_get", arguments);
  },
  set: function scrollRestoration() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "scrollRestoration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(History.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(History.prototype, "back", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function back() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "back", arguments);
  }
});
bodavm.toolsFunc.defineProperty(History.prototype, "forward", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forward() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "forward", arguments);
  }
});
bodavm.toolsFunc.defineProperty(History.prototype, "go", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function go() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "go", arguments);
  }
});
bodavm.toolsFunc.defineProperty(History.prototype, "pushState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pushState() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "pushState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(History.prototype, "replaceState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceState() {
    return bodavm.toolsFunc.dispatch(this, History.prototype, "History", "replaceState", arguments);
  }
});