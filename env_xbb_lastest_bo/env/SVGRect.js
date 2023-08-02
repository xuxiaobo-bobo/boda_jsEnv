// SVGRect对象

SVGRect = function SVGRect() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGRect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGRect 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGRect, "SVGRect");
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "x_get", arguments);
  },
  set: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "x_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "y_get", arguments);
  },
  set: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "y_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "height_set", arguments);
  }
});