// Screen对象

Screen = function Screen() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Screen)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Screen 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Screen, "Screen");
Screen.prototype.__proto__ = EventTarget.prototype;
Screen.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {
  configurable: true,
  enumerable: true,
  get: function availWidth() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {
  configurable: true,
  enumerable: true,
  get: function availHeight() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {
  configurable: true,
  enumerable: true,
  get: function colorDepth() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "colorDepth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {
  configurable: true,
  enumerable: true,
  get: function pixelDepth() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "pixelDepth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {
  configurable: true,
  enumerable: true,
  get: function availLeft() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availLeft_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "availTop", {
  configurable: true,
  enumerable: true,
  get: function availTop() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "availTop_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "orientation", {
  configurable: true,
  enumerable: true,
  get: function orientation() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "orientation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {
  configurable: true,
  enumerable: true,
  get: function isExtended() {
    return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "isExtended_get", arguments);
  },
  set: undefined
});