// DOMMatrix对象

bodaEnv.memory.globlProtoObj["DOMMatrix"] = function DOMMatrix() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMMatrix 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMMatrix"], "DOMMatrix");
bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMMatrixReadOnly"].prototype;
bodaEnv.memory.globlProtoObj["DOMMatrix"].__proto__ = bodaEnv.memory.globlProtoObj["DOMMatrixReadOnly"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"], "fromFloat32Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromFloat32Array() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrixReadOnly"], "DOMMatrix", "fromFloat32Array", arguments);
    }
  }.fromFloat32Array
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"], "fromFloat64Array", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromFloat64Array() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrixReadOnly"], "DOMMatrix", "fromFloat64Array", arguments);
    }
  }.fromFloat64Array
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"], "fromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrixReadOnly"], "DOMMatrix", "fromMatrix", arguments);
    }
  }.fromMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "a", {
  configurable: true,
  enumerable: true,
  get: {
    a() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "a_get", arguments);
    }
  }.a,
  set: {
    a() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "a_set", arguments);
    }
  }.a
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "b", {
  configurable: true,
  enumerable: true,
  get: {
    b() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "b_get", arguments);
    }
  }.b,
  set: {
    b() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "b_set", arguments);
    }
  }.b
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "c", {
  configurable: true,
  enumerable: true,
  get: {
    c() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "c_get", arguments);
    }
  }.c,
  set: {
    c() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "c_set", arguments);
    }
  }.c
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "d", {
  configurable: true,
  enumerable: true,
  get: {
    d() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "d_get", arguments);
    }
  }.d,
  set: {
    d() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "d_set", arguments);
    }
  }.d
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "e", {
  configurable: true,
  enumerable: true,
  get: {
    e() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "e_get", arguments);
    }
  }.e,
  set: {
    e() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "e_set", arguments);
    }
  }.e
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "f", {
  configurable: true,
  enumerable: true,
  get: {
    f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "f_get", arguments);
    }
  }.f,
  set: {
    f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "f_set", arguments);
    }
  }.f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m11", {
  configurable: true,
  enumerable: true,
  get: {
    m11() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m11_get", arguments);
    }
  }.m11,
  set: {
    m11() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m11_set", arguments);
    }
  }.m11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m12", {
  configurable: true,
  enumerable: true,
  get: {
    m12() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m12_get", arguments);
    }
  }.m12,
  set: {
    m12() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m12_set", arguments);
    }
  }.m12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m13", {
  configurable: true,
  enumerable: true,
  get: {
    m13() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m13_get", arguments);
    }
  }.m13,
  set: {
    m13() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m13_set", arguments);
    }
  }.m13
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m14", {
  configurable: true,
  enumerable: true,
  get: {
    m14() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m14_get", arguments);
    }
  }.m14,
  set: {
    m14() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m14_set", arguments);
    }
  }.m14
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m21", {
  configurable: true,
  enumerable: true,
  get: {
    m21() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m21_get", arguments);
    }
  }.m21,
  set: {
    m21() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m21_set", arguments);
    }
  }.m21
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m22", {
  configurable: true,
  enumerable: true,
  get: {
    m22() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m22_get", arguments);
    }
  }.m22,
  set: {
    m22() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m22_set", arguments);
    }
  }.m22
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m23", {
  configurable: true,
  enumerable: true,
  get: {
    m23() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m23_get", arguments);
    }
  }.m23,
  set: {
    m23() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m23_set", arguments);
    }
  }.m23
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m24", {
  configurable: true,
  enumerable: true,
  get: {
    m24() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m24_get", arguments);
    }
  }.m24,
  set: {
    m24() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m24_set", arguments);
    }
  }.m24
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m31", {
  configurable: true,
  enumerable: true,
  get: {
    m31() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m31_get", arguments);
    }
  }.m31,
  set: {
    m31() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m31_set", arguments);
    }
  }.m31
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m32", {
  configurable: true,
  enumerable: true,
  get: {
    m32() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m32_get", arguments);
    }
  }.m32,
  set: {
    m32() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m32_set", arguments);
    }
  }.m32
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m33", {
  configurable: true,
  enumerable: true,
  get: {
    m33() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m33_get", arguments);
    }
  }.m33,
  set: {
    m33() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m33_set", arguments);
    }
  }.m33
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m34", {
  configurable: true,
  enumerable: true,
  get: {
    m34() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m34_get", arguments);
    }
  }.m34,
  set: {
    m34() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m34_set", arguments);
    }
  }.m34
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m41", {
  configurable: true,
  enumerable: true,
  get: {
    m41() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m41_get", arguments);
    }
  }.m41,
  set: {
    m41() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m41_set", arguments);
    }
  }.m41
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m42", {
  configurable: true,
  enumerable: true,
  get: {
    m42() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m42_get", arguments);
    }
  }.m42,
  set: {
    m42() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m42_set", arguments);
    }
  }.m42
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m43", {
  configurable: true,
  enumerable: true,
  get: {
    m43() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m43_get", arguments);
    }
  }.m43,
  set: {
    m43() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m43_set", arguments);
    }
  }.m43
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "m44", {
  configurable: true,
  enumerable: true,
  get: {
    m44() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m44_get", arguments);
    }
  }.m44,
  set: {
    m44() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "m44_set", arguments);
    }
  }.m44
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "invertSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    invertSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "invertSelf", arguments);
    }
  }.invertSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "multiplySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    multiplySelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "multiplySelf", arguments);
    }
  }.multiplySelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "preMultiplySelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    preMultiplySelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "preMultiplySelf", arguments);
    }
  }.preMultiplySelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "rotateAxisAngleSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotateAxisAngleSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "rotateAxisAngleSelf", arguments);
    }
  }.rotateAxisAngleSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "rotateFromVectorSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotateFromVectorSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "rotateFromVectorSelf", arguments);
    }
  }.rotateFromVectorSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "rotateSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rotateSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "rotateSelf", arguments);
    }
  }.rotateSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "scale3dSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scale3dSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "scale3dSelf", arguments);
    }
  }.scale3dSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "scaleSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scaleSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "scaleSelf", arguments);
    }
  }.scaleSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "skewXSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    skewXSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "skewXSelf", arguments);
    }
  }.skewXSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "skewYSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    skewYSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "skewYSelf", arguments);
    }
  }.skewYSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "translateSelf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    translateSelf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "translateSelf", arguments);
    }
  }.translateSelf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "setMatrixValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setMatrixValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMMatrix"].prototype, "DOMMatrix", "setMatrixValue", arguments);
    }
  }.setMatrixValue
});