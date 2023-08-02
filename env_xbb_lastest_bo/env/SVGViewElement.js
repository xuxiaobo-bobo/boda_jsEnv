// SVGViewElement对象

SVGViewElement = function SVGViewElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGViewElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGViewElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGViewElement, "SVGViewElement");
SVGViewElement.prototype.__proto__ = SVGElement.prototype;
SVGViewElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGViewElement, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "viewBox_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "zoomAndPan_get", arguments);
  },
  set: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, SVGViewElement.prototype, "SVGViewElement", "zoomAndPan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGViewElement.prototype, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});