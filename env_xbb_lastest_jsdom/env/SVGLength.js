// SVGLength对象

bodavm.memory.globalobj['SVGLength'] = function SVGLength() {
  console.log_copy('SVGLength 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGLength)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGLength'], "SVGLength");
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty('SVGLength', "unitType", {
  configurable: true,
  enumerable: true,
  get: function unitType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "unitType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "value_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "valueInSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  get: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "valueInSpecifiedUnits_get", arguments);
  },
  set: function valueInSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "valueInSpecifiedUnits_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "valueAsString", {
  configurable: true,
  enumerable: true,
  get: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "valueAsString_get", arguments);
  },
  set: function valueAsString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "valueAsString_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_NUMBER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PERCENTAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_EMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_EXS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_CM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_MM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_IN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "SVG_LENGTHTYPE_PC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "convertToSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function convertToSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "convertToSpecifiedUnits", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGLength', "newValueSpecifiedUnits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function newValueSpecifiedUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGLength'].prototype, "SVGLength", "newValueSpecifiedUnits", arguments);
  }
}, 'prototype');