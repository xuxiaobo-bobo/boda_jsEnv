// DOMRectReadOnly对象

DOMRectReadOnly = function DOMRectReadOnly() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMRectReadOnly 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMRectReadOnly, "DOMRectReadOnly");
bodavm.toolsFunc.defineProperty(DOMRectReadOnly, "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly, "DOMRectReadOnly", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "top", {
  configurable: true,
  enumerable: true,
  get: function top() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "top_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "right", {
  configurable: true,
  enumerable: true,
  get: function right() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "right_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "bottom", {
  configurable: true,
  enumerable: true,
  get: function bottom() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "bottom_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "left", {
  configurable: true,
  enumerable: true,
  get: function left() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "left_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMRectReadOnly.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, DOMRectReadOnly.prototype, "DOMRectReadOnly", "toJSON", arguments);
  }
});