// SVGLength对象

bodaEnv.memory.globlProtoObj["SVGLength"] = function SVGLength() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGLength 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGLength"], "SVGLength");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"], "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "unitType", {
  configurable: true,
  enumerable: true,
  get: {
    unitType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "unitType_get", arguments);
    }
  }.unitType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: {
    valueInSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "valueInSpecifiedUnits_get", arguments);
    }
  }.valueInSpecifiedUnits,
  set: {
    valueInSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "valueInSpecifiedUnits_set", arguments);
    }
  }.valueInSpecifiedUnits
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "valueAsString", {
  configurable: true,
  enumerable: true,
  get: {
    valueAsString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "valueAsString_get", arguments);
    }
  }.valueAsString,
  set: {
    valueAsString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "valueAsString_set", arguments);
    }
  }.valueAsString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    convertToSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "convertToSpecifiedUnits", arguments);
    }
  }.convertToSpecifiedUnits
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    newValueSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLength"].prototype, "SVGLength", "newValueSpecifiedUnits", arguments);
    }
  }.newValueSpecifiedUnits
});