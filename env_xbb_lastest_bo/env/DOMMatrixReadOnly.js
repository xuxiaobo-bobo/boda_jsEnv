// DOMMatrixReadOnly对象

DOMMatrixReadOnly = function DOMMatrixReadOnly() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMMatrixReadOnly 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMMatrixReadOnly, "DOMMatrixReadOnly");
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly, "fromFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat32Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly, "DOMMatrixReadOnly", "fromFloat32Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly, "fromFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromFloat64Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly, "DOMMatrixReadOnly", "fromFloat64Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly, "fromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fromMatrix() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly, "DOMMatrixReadOnly", "fromMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "a", {
  configurable: true,
  enumerable: true,
  get: function a() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "a_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "b", {
  configurable: true,
  enumerable: true,
  get: function b() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "b_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "c", {
  configurable: true,
  enumerable: true,
  get: function c() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "c_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "d", {
  configurable: true,
  enumerable: true,
  get: function d() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "d_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "e", {
  configurable: true,
  enumerable: true,
  get: function e() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "e_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "f", {
  configurable: true,
  enumerable: true,
  get: function f() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "f_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m11", {
  configurable: true,
  enumerable: true,
  get: function m11() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m11_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m12", {
  configurable: true,
  enumerable: true,
  get: function m12() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m12_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m13", {
  configurable: true,
  enumerable: true,
  get: function m13() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m13_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m14", {
  configurable: true,
  enumerable: true,
  get: function m14() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m14_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m21", {
  configurable: true,
  enumerable: true,
  get: function m21() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m21_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m22", {
  configurable: true,
  enumerable: true,
  get: function m22() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m22_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m23", {
  configurable: true,
  enumerable: true,
  get: function m23() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m23_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m24", {
  configurable: true,
  enumerable: true,
  get: function m24() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m24_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m31", {
  configurable: true,
  enumerable: true,
  get: function m31() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m31_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m32", {
  configurable: true,
  enumerable: true,
  get: function m32() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m32_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m33", {
  configurable: true,
  enumerable: true,
  get: function m33() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m33_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m34", {
  configurable: true,
  enumerable: true,
  get: function m34() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m34_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m41", {
  configurable: true,
  enumerable: true,
  get: function m41() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m41_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m42", {
  configurable: true,
  enumerable: true,
  get: function m42() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m42_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m43", {
  configurable: true,
  enumerable: true,
  get: function m43() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m43_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "m44", {
  configurable: true,
  enumerable: true,
  get: function m44() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "m44_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "is2D_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "isIdentity", {
  configurable: true,
  enumerable: true,
  get: function isIdentity() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "isIdentity_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "flipX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipX() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "flipX", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "flipY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flipY() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "flipY", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "inverse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function inverse() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "inverse", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "multiply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function multiply() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "multiply", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "rotate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotate() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "rotate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "rotateAxisAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateAxisAngle() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "rotateAxisAngle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "rotateFromVector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function rotateFromVector() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "rotateFromVector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "scale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "scale", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "scale3d", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scale3d() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "scale3d", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "scaleNonUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function scaleNonUniform() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "scaleNonUniform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "skewX", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewX() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "skewX", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "skewY", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function skewY() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "skewY", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "toFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toFloat32Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "toFloat32Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "toFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toFloat64Array() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "toFloat64Array", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "transformPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformPoint() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "transformPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "translate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function translate() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "translate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMMatrixReadOnly.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, DOMMatrixReadOnly.prototype, "DOMMatrixReadOnly", "toString", arguments);
  }
});