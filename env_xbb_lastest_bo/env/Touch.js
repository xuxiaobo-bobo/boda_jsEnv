// Touch对象

Touch = function Touch() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Touch)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Touch': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Touch 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Touch, "Touch");
bodavm.toolsFunc.defineProperty(Touch.prototype, "identifier", {
  configurable: true,
  enumerable: true,
  get: function identifier() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "identifier_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "screenX", {
  configurable: true,
  enumerable: true,
  get: function screenX() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "screenX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "screenY", {
  configurable: true,
  enumerable: true,
  get: function screenY() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "screenY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "clientX", {
  configurable: true,
  enumerable: true,
  get: function clientX() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "clientX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "clientY", {
  configurable: true,
  enumerable: true,
  get: function clientY() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "clientY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "pageX", {
  configurable: true,
  enumerable: true,
  get: function pageX() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "pageX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "pageY", {
  configurable: true,
  enumerable: true,
  get: function pageY() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "pageY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "radiusX", {
  configurable: true,
  enumerable: true,
  get: function radiusX() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "radiusX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "radiusY", {
  configurable: true,
  enumerable: true,
  get: function radiusY() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "radiusY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "rotationAngle", {
  configurable: true,
  enumerable: true,
  get: function rotationAngle() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "rotationAngle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Touch.prototype, "force", {
  configurable: true,
  enumerable: true,
  get: function force() {
    return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "force_get", arguments);
  },
  set: undefined
});