// SVGFETurbulenceElement对象

SVGFETurbulenceElement = function SVGFETurbulenceElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFETurbulenceElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFETurbulenceElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFETurbulenceElement, "SVGFETurbulenceElement");
SVGFETurbulenceElement.prototype.__proto__ = SVGElement.prototype;
SVGFETurbulenceElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_STITCHTYPE_NOSTITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_STITCHTYPE_STITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_STITCHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_TURBULENCE_TYPE_TURBULENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_TURBULENCE_TYPE_FRACTALNOISE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement, "SVG_TURBULENCE_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_STITCHTYPE_NOSTITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_STITCHTYPE_STITCH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_STITCHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_TURBULENCE_TYPE_TURBULENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_TURBULENCE_TYPE_FRACTALNOISE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "SVG_TURBULENCE_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "baseFrequencyX", {
  configurable: true,
  enumerable: true,
  get: function baseFrequencyX() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "baseFrequencyX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "baseFrequencyY", {
  configurable: true,
  enumerable: true,
  get: function baseFrequencyY() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "baseFrequencyY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "numOctaves", {
  configurable: true,
  enumerable: true,
  get: function numOctaves() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "numOctaves_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "seed", {
  configurable: true,
  enumerable: true,
  get: function seed() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "seed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "stitchTiles", {
  configurable: true,
  enumerable: true,
  get: function stitchTiles() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "stitchTiles_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETurbulenceElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFETurbulenceElement.prototype, "SVGFETurbulenceElement", "result_get", arguments);
  },
  set: undefined
});