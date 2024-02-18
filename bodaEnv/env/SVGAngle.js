// SVGAngle对象

bodaEnv.memory.globlProtoObj["SVGAngle"] = function SVGAngle() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAngle 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVGAngle");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"], "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "unitType", {
  configurable: true,
  enumerable: true,
  get: {
    unitType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "unitType_get", arguments);
    }
  }.unitType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: {
    valueInSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "valueInSpecifiedUnits_get", arguments);
    }
  }.valueInSpecifiedUnits,
  set: {
    valueInSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "valueInSpecifiedUnits_set", arguments);
    }
  }.valueInSpecifiedUnits
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "valueAsString", {
  configurable: true,
  enumerable: true,
  get: {
    valueAsString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "valueAsString_get", arguments);
    }
  }.valueAsString,
  set: {
    valueAsString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "valueAsString_set", arguments);
    }
  }.valueAsString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVG_ANGLETYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVG_ANGLETYPE_UNSPECIFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVG_ANGLETYPE_DEG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVG_ANGLETYPE_RAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVG_ANGLETYPE_GRAD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    convertToSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "convertToSpecifiedUnits", arguments);
    }
  }.convertToSpecifiedUnits
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    newValueSpecifiedUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAngle"].prototype, "SVGAngle", "newValueSpecifiedUnits", arguments);
    }
  }.newValueSpecifiedUnits
});