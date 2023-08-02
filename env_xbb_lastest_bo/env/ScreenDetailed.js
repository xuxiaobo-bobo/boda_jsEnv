// ScreenDetailed对象

ScreenDetailed = function ScreenDetailed() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ScreenDetailed)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ScreenDetailed 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ScreenDetailed, "ScreenDetailed");
ScreenDetailed.prototype.__proto__ = Screen.prototype;
ScreenDetailed.__proto__ = Screen;
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "left", {
  configurable: true,
  enumerable: true,
  get: function left() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "left_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "top", {
  configurable: true,
  enumerable: true,
  get: function top() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "top_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "isPrimary", {
  configurable: true,
  enumerable: true,
  get: function isPrimary() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "isPrimary_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "isInternal", {
  configurable: true,
  enumerable: true,
  get: function isInternal() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "isInternal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "devicePixelRatio", {
  configurable: true,
  enumerable: true,
  get: function devicePixelRatio() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "devicePixelRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ScreenDetailed.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, ScreenDetailed.prototype, "ScreenDetailed", "label_get", arguments);
  },
  set: undefined
});