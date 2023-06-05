// DOMMatrixReadOnly对象

bodavm.memory.globalobj['DOMMatrixReadOnly'] = function DOMMatrixReadOnly() {
  console.log_copy('DOMMatrixReadOnly 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMMatrixReadOnly();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMMatrixReadOnly'], "DOMMatrixReadOnly");
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "fromFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat32Array() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].undefined, "DOMMatrixReadOnly", "fromFloat32Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "fromFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat64Array() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].undefined, "DOMMatrixReadOnly", "fromFloat64Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "fromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].undefined, "DOMMatrixReadOnly", "fromMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "a", {
  configurable: true,
  enumerable: true,
  get: function a() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "a_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "b", {
  configurable: true,
  enumerable: true,
  get: function b() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "b_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "c", {
  configurable: true,
  enumerable: true,
  get: function c() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "c_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "d", {
  configurable: true,
  enumerable: true,
  get: function d() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "d_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "e", {
  configurable: true,
  enumerable: true,
  get: function e() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "e_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "f", {
  configurable: true,
  enumerable: true,
  get: function f() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "f_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m11", {
  configurable: true,
  enumerable: true,
  get: function m11() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m11_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m12", {
  configurable: true,
  enumerable: true,
  get: function m12() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m12_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m13", {
  configurable: true,
  enumerable: true,
  get: function m13() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m13_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m14", {
  configurable: true,
  enumerable: true,
  get: function m14() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m14_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m21", {
  configurable: true,
  enumerable: true,
  get: function m21() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m21_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m22", {
  configurable: true,
  enumerable: true,
  get: function m22() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m22_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m23", {
  configurable: true,
  enumerable: true,
  get: function m23() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m23_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m24", {
  configurable: true,
  enumerable: true,
  get: function m24() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m24_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m31", {
  configurable: true,
  enumerable: true,
  get: function m31() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m31_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m32", {
  configurable: true,
  enumerable: true,
  get: function m32() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m32_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m33", {
  configurable: true,
  enumerable: true,
  get: function m33() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m33_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m34", {
  configurable: true,
  enumerable: true,
  get: function m34() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m34_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m41", {
  configurable: true,
  enumerable: true,
  get: function m41() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m41_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m42", {
  configurable: true,
  enumerable: true,
  get: function m42() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m42_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m43", {
  configurable: true,
  enumerable: true,
  get: function m43() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m43_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "m44", {
  configurable: true,
  enumerable: true,
  get: function m44() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "m44_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "is2D_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "isIdentity", {
  configurable: true,
  enumerable: true,
  get: function isIdentity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "isIdentity_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "flipX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "flipX", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "flipY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "flipY", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "inverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function inverse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "inverse", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "multiply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function multiply() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "multiply", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "rotate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "rotateAxisAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateAxisAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "rotateAxisAngle", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "rotateFromVector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateFromVector() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "rotateFromVector", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "scale", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "scale3d", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale3d() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "scale3d", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "scaleNonUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scaleNonUniform() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "scaleNonUniform", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "skewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "skewX", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "skewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "skewY", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "toFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toFloat32Array() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "toFloat32Array", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "toFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toFloat64Array() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "toFloat64Array", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "transformPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "transformPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "translate", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('DOMMatrixReadOnly', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMMatrixReadOnly'].prototype, "DOMMatrixReadOnly", "toString", arguments);
  }
}, 'prototype');