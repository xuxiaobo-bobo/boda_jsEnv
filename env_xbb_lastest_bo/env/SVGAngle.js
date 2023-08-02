// SVGAngle对象

SVGAngle = function SVGAngle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAngle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAngle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAngle, "SVGAngle");
bodavm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGAngle, "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "unitType", {
  configurable: true,
  enumerable: true,
  get: function unitType() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "unitType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueInSpecifiedUnits_get", arguments);
  },
  set: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueInSpecifiedUnits_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "valueAsString", {
  configurable: true,
  enumerable: true,
  get: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueAsString_get", arguments);
  },
  set: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "valueAsString_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "convertToSpecifiedUnits", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAngle.prototype, "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function newValueSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGAngle.prototype, "SVGAngle", "newValueSpecifiedUnits", arguments);
  }
});