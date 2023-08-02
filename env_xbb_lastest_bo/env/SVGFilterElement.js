// SVGFilterElement对象

SVGFilterElement = function SVGFilterElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFilterElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFilterElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFilterElement, "SVGFilterElement");
SVGFilterElement.prototype.__proto__ = SVGElement.prototype;
SVGFilterElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "filterUnits", {
  configurable: true,
  enumerable: true,
  get: function filterUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "filterUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "primitiveUnits", {
  configurable: true,
  enumerable: true,
  get: function primitiveUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "primitiveUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFilterElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, SVGFilterElement.prototype, "SVGFilterElement", "href_get", arguments);
  },
  set: undefined
});