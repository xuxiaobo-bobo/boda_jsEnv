// SVGLength对象

SVGLength = function SVGLength() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGLength)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGLength 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGLength, "SVGLength");
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGLength, "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "unitType", {
  configurable: true,
  enumerable: true,
  get: function unitType() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "unitType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueInSpecifiedUnits_get", arguments);
  },
  set: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueInSpecifiedUnits_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "valueAsString", {
  configurable: true,
  enumerable: true,
  get: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueAsString_get", arguments);
  },
  set: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "valueAsString_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "convertToSpecifiedUnits", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLength.prototype, "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function newValueSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGLength.prototype, "SVGLength", "newValueSpecifiedUnits", arguments);
  }
});