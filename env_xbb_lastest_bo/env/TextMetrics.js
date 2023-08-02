// TextMetrics对象

TextMetrics = function TextMetrics() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TextMetrics)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TextMetrics 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TextMetrics, "TextMetrics");
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "actualBoundingBoxLeft", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxLeft() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "actualBoundingBoxLeft_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "actualBoundingBoxRight", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxRight() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "actualBoundingBoxRight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "fontBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: function fontBoundingBoxAscent() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "fontBoundingBoxAscent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "fontBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: function fontBoundingBoxDescent() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "fontBoundingBoxDescent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "actualBoundingBoxAscent", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxAscent() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "actualBoundingBoxAscent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TextMetrics.prototype, "actualBoundingBoxDescent", {
  configurable: true,
  enumerable: true,
  get: function actualBoundingBoxDescent() {
    return bodavm.toolsFunc.dispatch(this, TextMetrics.prototype, "TextMetrics", "actualBoundingBoxDescent_get", arguments);
  },
  set: undefined
});