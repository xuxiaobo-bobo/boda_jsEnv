// DOMRect对象

DOMRect = function DOMRect() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMRect 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMRect, "DOMRect");
DOMRect.prototype.__proto__ = DOMRectReadOnly.prototype;
DOMRect.__proto__ = DOMRectReadOnly;
bodavm.toolsFunc.defineProperty(DOMRect, "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromRect() {
    return bodavm.toolsFunc.dispatch(this, DOMRect, "DOMRect", "fromRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMRect.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMRect.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMRect.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMRect.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, DOMRect.prototype, "DOMRect", "height_set", arguments);
  }
});