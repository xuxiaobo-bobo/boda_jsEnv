// SVGFEMergeElement对象

SVGFEMergeElement = function SVGFEMergeElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEMergeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEMergeElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEMergeElement, "SVGFEMergeElement");
SVGFEMergeElement.prototype.__proto__ = SVGElement.prototype;
SVGFEMergeElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEMergeElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeElement.prototype, "SVGFEMergeElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMergeElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeElement.prototype, "SVGFEMergeElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMergeElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeElement.prototype, "SVGFEMergeElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMergeElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeElement.prototype, "SVGFEMergeElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEMergeElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEMergeElement.prototype, "SVGFEMergeElement", "result_get", arguments);
  },
  set: undefined
});